<!--
 * @Author: your name
 * @Date: 2021-06-28 22:24:43
 * @LastEditTime: 2021-07-01 17:59:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-svg/src/layer.vue
-->
<template>
  <g :transform="`translate(${layer.x} ${layer.y})`">
    <component :is="'fc-layer-' + layer.type" :layer="layer"></component>
  </g>
</template>

<script>
import FcLayerPhoto from '../../layer-photo';
import FcLayerText from '../../layer-text';
import FcLayerImage from '../../layer-image';
export default {
  props: {
    layer: Object
  },
  components: {
    FcLayerPhoto,
    FcLayerText,
    FcLayerImage
  }
};
</script>
