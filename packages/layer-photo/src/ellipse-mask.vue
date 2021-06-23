<!--
 * @Author: your name
 * @Date: 2021-06-23 11:17:11
 * @LastEditTime: 2021-06-23 11:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/layer-photo/src/ellippse-mask.vue
-->
<template>
  <clipPath transform="scale(1,1)"
            :id="layer.id">
    <circle :id="layer.id"
            :cx="pos.x"
            :cy="pos.r"
            :r="pos.r" />
  </clipPath>
</template>
<script>
export default {
  props: {
    layer: Object
  },
  computed: {
    pos() {
      const { width, height } = this.layer;
      return {
        x: width / 2,
        r: height / 2
      };
    }
  }
};
</script>