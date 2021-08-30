<!--
 * @Author: jiaozhe
 * @Date: 2021-06-23 10:55:28
 * @LastEditTime: 2021-08-30 15:48:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/main.vue
-->
<template>
  <div
    :class="['el-page-edit', { 'is-view': view }, frame.type]"
    :style="fontSize"
  >
    <div v-if="isLine" class="middle-line"></div>
    <pg-bleed v-if="!bleed.borderWidth && !view" :bleed="bleed"></pg-bleed>
    <pg-ridge
      v-if="page.ridgeWidth"
      :page="page"
      :productSize="frame.productSize"
    ></pg-ridge>
    <pg-border v-if="frame.border.length" :border="frame.border"></pg-border>
    <div class="el-page-wrap" :style="size.outside">
      <div class="el-page-content" :style="size.inside">
        <pg-layout
          v-for="(item, index) in page.layers"
          :key="index"
          :layout="item"
          :bleed="bleed"
          :scale="scale"
          :hintText="hintText"
          :layoutId="page.id + '&' + index"
          :checked="pageId === page.id && layoutIndex === index"
          @click.native="handleClick(page.id, index)"
        ></pg-layout>
      </div>
    </div>
  </div>
</template>

<script>
import PgLayout from './layout';
import PgBleed from './bleed';
import PgBorder from './border';
import PgRidge from './ridge';
export default {
  name: 'FcPageEdit',
  props: {
    frame: {
      type: Object,
      default() {
        return {
          bleed: [3, 3, 3, 3],
          border: [],
          type: ''
        };
      }
    },
    page: {
      type: Object,
      default() {
        return {
          width: 2,
          height: 1,
          layers: []
        };
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    view: {
      type: Boolean,
      default: false
    },
    layoutIndex: {
      type: Number,
      default: -1
    },
    pageId: {
      type: String,
      default: ''
    },
    hintText: {
      type: String,
      default: '点击或拖拽左侧图片，智能创建页面'
    }
  },
  inject: ['isAndroid'],
  computed: {
    fontSize() {
      return {
        fontSize: this.scale + 'px'
      };
    },
    bleed() {
      const { page, frame, scale, isAndroid } = this;
      const { layers } = page;
      const bleed = page.bleed || frame.bleed;
      if (layers[0].output !== 'more') return bleed;
      if (isAndroid) {
        return {
          borderWidth: bleed[0] * 11.8 * scale + 'px'
        };
      }
      return {
        borderWidth: bleed[0] * 11.8 + 'em'
      };
    },
    isLine() {
      const { isPart, isHalf } = this.page;
      const { type } = this.frame;
      return type === 'photo_album' && !isPart && !isHalf;
    },
    size() {
      const { isAndroid, scale, page } = this;
      const { width, height, layers } = page;
      const [layout] = layers;
      let transform = 'none';
      let realWidth = width;
      let realHeight = height;
      if (isAndroid) {
        realWidth = realWidth * scale;
        realHeight = realHeight * scale;
        if (this.view && (!layout.output || layout.output === 'one_border')) {
          const val = this.bleed[0] * 11.8 * scale;
          transform = `translate(-${val}px, -${val}px)`;
          realWidth -= val * 2;
          realHeight -= val * 2;
        }
        return {
          outside: {
            fontSize: this.scale + 'px',
            width: realWidth + 'px',
            height: realHeight + 'px'
          },
          inside: {
            width: width * scale + 'px',
            height: height * scale + 'px',
            transform
          }
        };
      }
      if (this.view && (!layout.output || layout.output === 'one_border')) {
        const val = this.bleed[0] * 11.8;
        transform = `translate(-${val}em, -${val}em)`;
        realWidth -= val * 2;
        realHeight -= val * 2;
      }
      return {
        outside: {
          fontSize: this.scale + 'px',
          width: realWidth + 'em',
          height: realHeight + 'em'
        },
        inside: {
          width: width + 'em',
          height: height + 'em',
          transform
        }
      };
    }
  },
  components: {
    PgLayout,
    PgBleed,
    PgBorder,
    PgRidge
  },
  methods: {
    handleClick(pageId, index) {
      this.$emit('select-layout', {
        pageId,
        layoutIndex: index
      });
    }
  }
};
</script>
