<!--
 * @Author: your name
 * @Date: 2021-06-23 11:09:45
 * @LastEditTime: 2021-06-30 18:52:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/layer.vue
   :layoutIndex="layoutIndex"
   //  :pageId="pageId"
-->
<template>
  <div
    :style="position"
    :class="['pg-layer-div', layer.type]"
    :data-layerid="layerId"
    :data-pageid="pageId"
    data-type="layer"
  >
    <component
      :is="layer.type + 'Layer'"
      :scale="scale"
      :layoutId="layerId"
      :pageId="pageId"
      :bleed="bleed"
      :layer="layer"
    ></component>
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
    layoutIndex: Number,
    pageId: String,
    bleed: [Object, Array],
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {
    position() {
      const { x, y, width, height } = this.layer;
      return {
        left: x + 'em',
        top: y + 'em',
        width: width + 'em',
        height: height + 'em'
      };
    },
    layerId() {
      const { layoutIndex, layer } = this;
      return `${layoutIndex}-${layer.id}`;
    }
  }
};
</script>
