<!--
 * @Author: your name
 * @Date: 2021-06-28 22:24:43
 * @LastEditTime: 2021-09-03 13:44:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-svg/src/layer.vue
-->
<template>
  <g :transform="`translate(${layer.x} ${layer.y})`">
    <component :is="layer.type + 'Layer'"
               :layer="layer"></component>
  </g>
</template>

<script>
import PhotoLayer from '../../layer-photo';
import TextLayer from '../../layer-text';
import SucaiLayer from '../../layer-image';
export default {
  props: {
    layer: Object
  },
  components: {
    PhotoLayer,
    TextLayer,
    SucaiLayer
  }
};
</script>
