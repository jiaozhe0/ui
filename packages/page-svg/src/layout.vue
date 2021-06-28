<!--
 * @Author: your name
 * @Date: 2021-06-28 22:23:52
 * @LastEditTime: 2021-06-28 22:24:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-svg/src/layout.vue
-->
<template>
  <g :transform="transform">
    <svg :width="layout.width"
         :height="layout.height"
         :viewBox="`0 0 ${layout.width} ${layout.height}`">
      <g v-if="layout.id">
        <layer-item v-for="item in layout.layer"
                    :key="item.id"
                    :layer="item"></layer-item>
      </g>
    </svg>
  </g>
</template>

<script>
import LayerItem from './layer';
export default {
  props: {
    layout: {
      type: Object
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    transform() {
      const { index, layout } = this;
      const { width } = layout;
      return `translate(${width * index} 0)`;
    }
  },
  components: {
    LayerItem
  }
};
</script>