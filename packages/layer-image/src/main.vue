<!--
 * @Author: your name
 * @Date: 2021-06-28 21:45:40
 * @LastEditTime: 2021-09-03 13:58:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/layer-image/src/main.vue
-->
<template>
  <svg
    :viewBox="`0 0 ${layer.width} ${layer.height}`"
    :width="layer.width * scale"
    :height="layer.height * scale"
    preserveAspectRatio="xMinYMin meet"
    class="el-photo-layer"
  >
    <image
      :xlink:href="layer.suolue_url"
      :href="layer.suolue_url"
      :width="layer.width"
      :height="layer.height"
      :transform="imageTransform"
      preserveAspectRatio="xMinYMin"
      image-rendering="optimizeQuality"
    ></image>
  </svg>
</template>

<script>
export default {
  props: {
    layer: Object,
    scale: Number
  },
  name: 'FcLayerSucai'
};
</script>
