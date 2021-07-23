<!--
 * @Author: your name
 * @Date: 2021-07-16 08:53:22
 * @LastEditTime: 2021-07-23 09:04:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/photo-album/src/main.vue
-->
<template>
  <div class="el-photo-album"
       :style="size">
    <div class="prev-btn"
         @click="prev"></div>
    <div class="next-btn"
         @click="next"></div>
    <div class="left-side"></div>
    <div class="right-side"></div>
    <div class="photo-ablum-outside">
      <div class="photo-album-inside"
           :style="position">
        <div class="photo-album-item"
             id="front-page"
             style="z-index: 1">
          <album-item v-for="(item, index) in frontLayers"
                      :key="'f' + item.id + index"
                      :layout="item"
                      :backLayout="backLayout"
                      :scale="scale"
                      :index="index"></album-item>
        </div>
        <div class="photo-album-item"
             id="back-page"
             style="z-index: 0">
          <album-item v-for="(item, index) in backLayers"
                      :key="'b' + item.id + index"
                      :layout="item"
                      :backLayout="backLayout"
                      :scale="scale"
                      :index="index"></album-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumItem from './item';
const albumList = ['left', 'right'];
const LAYER = {
  id: 'default',
  fill: false,
  layer: []
};
export default {
  name: 'FcPhotoAlbum',
  props: {
    pageList: Array,
    pageIndex: {
      type: Number,
      default: 0
    },
    scale: Number,
    frame: Object
  },
  data() {
    const index = this.pageIndex;
    return {
      albumList,
      frontIndex: index,
      backIndex: index,
      backLayout: {},
      mode: 'handleFront'
    };
  },
  components: {
    AlbumItem
  },
  computed: {
    list() {
      // 剔除配件
      const pageList = this.pageList;
      const index = pageList.findIndex(item => item.name === '首页');
      return pageList.slice(index < 0 ? 0 : index);
    },
    frontLayers() {
      return this.getPage(this.frontIndex);
    },
    backLayers() {
      return this.getPage(this.backIndex);
    },
    size() {
      const { frame, scale } = this;
      const { productSize, bleed } = frame;
      const { width, height } = productSize;
      const pxBleed = bleed[0] * 2 * 11.8;
      return {
        fontSize: scale + 'px',
        height: height - pxBleed + 'em',
        width: width - pxBleed + 'em'
      };
    },
    position() {
      const { productSize, bleed } = this.frame;
      const { width, height } = productSize;
      const pxBleed = bleed[0] * 11.8;
      return {
        left: -pxBleed + 'em',
        top: -pxBleed + 'em',
        width: width + 'em',
        height: height + 'em'
      };
    }
  },
  mounted() {
    this.frontMap = [];
    this.backMap = [];
    this.initPageEle();
  },
  methods: {
    getPage(index) {
      const { layers, isHalf } = this.list[index];
      const temLayers = layers.slice();
      if (isHalf) {
        if (index) {
          temLayers.push(LAYER);
        } else {
          temLayers.unshift(LAYER);
        }
      }
      return temLayers[1] ? temLayers : temLayers.concat(temLayers);
    },
    initPageEle() {
      this.frontPage = document.getElementById('front-page');
      this.backPage = document.getElementById('back-page');
      this.frontPageStyle = this.frontPage.style;
      this.backPageStyle = this.backPage.style;
      this.rotateTimer = false;
    },
    getLayoutEle() {
      this.frontMap.length = this.backMap.length = 0;
      this.frontMap.push(
        ...[
          this.frontPage.querySelector('.left').style,
          this.frontPage.querySelector('.right').style
        ]
      );
      this.backMap.push(
        ...[
          this.backPage.querySelector('.left').style,
          this.backPage.querySelector('.right').style
        ]
      );
    },
    prev() {
      if (this.rotateTimer) return false;
      if (this.frontIndex === 0 || this.backIndex === 0) {
        return false;
      }
      this.rotateTimer = true;
      this.getLayoutEle();
      this[this.mode](179, 1, -1, 0);
    },
    next() {
      if (this.rotateTimer) return false;
      const len = this.list.length - 1;
      if (this.frontIndex >= len || this.backIndex >= len) {
        return false;
      }
      this.rotateTimer = true;
      this.getLayoutEle();
      this[this.mode](-179, 0, 1, 1);
    },
    /*
     * @deg 旋转的度数
     * @layoutIndex 下标
     * @count  1｜-1 加页｜减页
     * @side 1: 右边， 0 左边
     */
    handleFront(deg, layoutIndex, count, side) {
      this.backIndex += count;
      this.mode = 'handleBack';
      const ele = this.frontMap[side]; // eslint-disable-line
      this.setBackLayout(this.backIndex, layoutIndex);
      this.setRotate(ele, deg);
      this.setZIndex(ele, 'frontIndex', count);
    },
    handleBack(deg, layoutIndex, count, side) {
      this.frontIndex += count;
      this.mode = 'handleFront';
      const ele = this.backMap[side];
      this.setBackLayout(this.frontIndex, layoutIndex);
      this.setRotate(ele, deg);
      this.setZIndex(ele, 'backIndex', count);
    },
    setRotate(eleStyle, deg) {
      eleStyle.zIndex = 1;
      eleStyle.transform = `rotateY(${deg}deg)`;
      eleStyle.webkitTransform = `rotateY(${deg}deg)`;
      eleStyle.mozTransform = `rotateY(${deg}deg)`;
    },
    setZIndex(eleStyle, pageIndex, count) {
      setTimeout(() => {
        const temZIndex = this.frontPageStyle.zIndex;
        this.frontPageStyle.zIndex = this.backPageStyle.zIndex;
        this.backPageStyle.zIndex = temZIndex;
        eleStyle.transform = `rotateY(0deg)`;
        eleStyle.webkitTransform = `rotateY(0deg)`;
        eleStyle.zIndex = 0;
        this[pageIndex] += count;
        this.rotateTimer = false;
      }, 1000);
    },
    setBackLayout(pageIndex, layoutIndex) {
      const layers = this.pageList[pageIndex].layers;
      this.backLayout = layers[layoutIndex] || layers[0];
    }
  },
  watch: {
    pageIndex(n, o) {
      this.frontIndex = n;
      this.backIndex = n;
    }
  }
};
</script>
