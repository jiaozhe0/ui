<!--
 * @Author: your name
 * @Date: 2021-06-28 22:24:43
 * @LastEditTime: 2021-06-30 11:00:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-svg/src/layer.vue
-->
<template>
  <g :transform="`translate(${layer.x} ${layer.y})`">
    <component :is="'Layer' +layer.type"
               :layer="layer"></component>
  </g>
</template>

<script>
import LayerPhoto from '../../layer-photo';
import LayerText from '../../layer-text';
import LayerImage from '../../layer-image';
export default {
  props: {
    layer: Object
  },
  components: {
    LayerPhoto,
    LayerText,
    LayerImage
  }
};
</script>