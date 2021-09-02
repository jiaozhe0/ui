<!--
 * @Author: your name
 * @Date: 2021-06-23 11:17:02
 * @LastEditTime: 2021-09-02 16:00:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/layer-photo/src/circle-mask.vue
-->
<template>
  <clipPath :id="layerId">
    <ellipse :cx="pos.x"
             :cy="pos.y"
             :rx="pos.x"
             :ry="pos.y"></ellipse>
  </clipPath>
</template>

<script>
export default {
  props: {
    layerId: String,
    layer: Object
  },
  computed: {
    pos() {
      const { width, height } = this.layer;
      return {
        x: width / 2,
        y: height / 2
      };
    }
  }
};
</script>
