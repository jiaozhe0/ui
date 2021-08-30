<!--
 * @Author: your name
 * @Date: 2021-06-23 11:09:45
 * @LastEditTime: 2021-08-30 12:58:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/layer.vue
   :layoutIndex="layoutIndex"
   //  :pageId="pageId"
-->
<template>
  <div :style="position"
       :class="['pg-layer-item', layer.type]"
       :data-layerid="layerId"
       data-type="layer">
    <component :is="layer.type + 'Layer'"
               :scale="scale"
               :layerId="layerId"
               :pageId="pageId"
               :bleed="bleed"
               :layer="layer"></component>
  </div>
</template>
<script>
import PhotoLayer from './layer-photo';
import TextLayer from '../../layer-text';
import ImageLayer from '../../layer-image';
export default {
  components: {
    PhotoLayer,
    TextLayer,
    ImageLayer
  },
  props: {
    layer: Object,
    layoutId: String,
    bleed: [Object, Array],
    scale: {
      type: Number,
      default: 1
    }
  },
  inject: ['isAndroid'],
  computed: {
    position() {
      const { isAndroid, scale, layer } = this;
      const { x, y, width, height } = layer;
      if (isAndroid) {
        return {
          left: x * scale + 'px',
          top: y * scale + 'px',
          width: width * scale + 'px',
          height: height * scale + 'px'
        };
      }
      return {
        left: x + 'em',
        top: y + 'em',
        width: width + 'em',
        height: height + 'em'
      };
    },
    layerId() {
      const { layoutId, layer } = this;
      return `${layoutId}&${layer.id}`;
    }
  }
};
</script>
