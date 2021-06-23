<!--
 * @Author: jiaozhe
 * @Date: 2021-06-23 10:55:28
 * @LastEditTime: 2021-06-23 16:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/main.vue
-->
<template>
  <div :class="['el-page-edit', { 'is-view': view }]" :style="fontSize">
    <div v-if="frame.isLine" class="middle-line"></div>
    <pg-bleed v-if="!bleed.borderWidth" :bleed="bleed"></pg-bleed>
    <pg-border :border="frame.border"></pg-border>
    <div class="el-page-wrap" :style="size">
      <div class="el-page-content" :style="sizeWithBleed">
        <pg-layout
          v-for="(item, index) in page.layers"
          :key="index"
          :pageId="page.id"
          :lIndex="index"
          :bleed="bleed"
          :scale="scale"
          :layout="item"
        ></pg-layout>
      </div>
    </div>
  </div>
</template>

<script>
import PgLayout from './layout';
import PgBleed from './bleed';
import PgBorder from './border';
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
          output: '',
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
      const { output, bleed } = this.frame;
      if (output !== 'more') return bleed;
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
    PgBorder
  }
};
</script>
