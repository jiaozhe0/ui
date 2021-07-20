<!--
 * @Author: your name
 * @Date: 2021-06-28 22:09:03
 * @LastEditTime: 2021-07-20 10:02:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-svg/src/main.vue
-->
<template>
  <svg :viewBox="`0 0 ${page.width} ${page.height}`"
       :width="sSize.width"
       :height="sSize.height">
    <rect x="0"
          y="0"
          :width="page.width"
          :height="page.height"
          fill="#fff"></rect>
    <layout-item v-for="(item, index) in layers"
                 :key="item.fill+index"
                 :index="index"
                 :layout="item"></layout-item>
  </svg>
</template>

<script>
import LayoutItem from './layout';
export default {
  name: 'FcPageSvg',
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    scale: {
      type: Number,
      default: -1
    },
    page: {
      type: Object
    }
  },
  components: {
    LayoutItem
  },
  computed: {
    layers() {
      const { layers } = this.page;
      return layers || [this.page];
    },
    sSize() {
      const { width: scaleWidth, height: scaleHeight, scale } = this;
      let { width, height, id } = this.page;
      if (!width) {
        const [w, h] = id.split('_')[1].split('*');
        width = +w;
        height = +h;
      }
      if (scaleWidth > 0 && scaleHeight > 0) {
        return { width: scaleWidth, height: scaleHeight };
      }
      if (scale > 0) {
        return {
          width: scale * width,
          height: scale * height
        };
      }
      if (scaleWidth) {
        const scale = scaleWidth / width;
        return {
          width: scaleWidth,
          height: scale * height
        };
      } else {
        const scale = scaleHeight / height;
        return {
          width: scale * width,
          height: scaleHeight
        };
      }
    }
  }
};
</script>
