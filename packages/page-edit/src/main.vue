<!--
 * @Author: jiaozhe
 * @Date: 2021-06-23 10:55:28
 * @LastEditTime: 2021-06-28 22:53:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/main.vue
-->
<template>
  <div :class="['el-page-edit', { 'is-view': view }]"
       :style="fontSize">
    <div v-if="isLine"
         class="middle-line"></div>
    <pg-bleed v-if="!bleed.borderWidth"
              :bleed="bleed"></pg-bleed>
    <pg-ridge v-if="page.ridgeWidth"
              :page="page"
              :productSize="frame.productSize"></pg-ridge>
    <pg-border v-if="frame.border.length"
               :border="frame.border"></pg-border>
    <div class="el-page-wrap"
         :style="size">
      <div class="el-page-content"
           :style="sizeWithBleed">
        <pg-layout v-for="(item, index) in page.layers"
                   :key="index"
                   :layout="item"
                   :layoutIndex="index"
                   :bleed="bleed"
                   :scale="scale"
                   :pageId="page.id"></pg-layout>
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
    frame: {
      type: Object,
      default() {
        return {
          bleed: [4, 4, 4, 4],
          border: [40, 40, 40, 40],
          type: ''
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
      default: 0
    }
  },
  computed: {
    fontSize() {
      return {
        fontSize: this.scale + 'px'
      };
    },
    sizeWithBleed() {
      const { width, height } = this.page;
      const { output, bleed } = this.frame;
      let left = 0;
      let top = 0;
      if (this.view && !output) {
        const [t, l] = bleed;
        left = -l + 'em';
        top = -t + 'em';
      }
      return {
        width: width + 'em',
        height: height + 'em',
        left,
        top
      };
    },
    size() {
      let { width, height } = this.page;
      const { output, bleed } = this.frame;
      if (this.view && !output) {
        width -= bleed[1] * 2;
        height -= bleed[0] * 2;
      }
      return {
        width: width + 'em',
        height: height + 'em'
      };
    },
    bleed() {
      const { page, frame } = this;
      const { layers } = page;
      const bleed = page.bleed || frame.bleed;
      if (layers[0].output !== 'more') return bleed;
      return {
        borderWidth: bleed[0] + 'em'
      };
    },
    isLine() {
      const { isPart } = this.page;
      const { type } = this.frame;
      return !isPart && type === 'photo_album';
    }
  },
  components: {
    PgLayout,
    PgBleed,
    PgBorder,
    PgRidge
  }
};
</script>
