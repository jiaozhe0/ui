<!--
 * @Author: your name
 * @Date: 2021-06-23 11:09:45
 * @LastEditTime: 2021-06-23 16:15:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/layer.vue
-->
<template>
  <div :style="position" class="pg-layer-div">
    <component
      :is="layer.type + 'Layer'"
      :scale="scale"
      :lIndex="lIndex"
      :pageId="pageId"
      :bleed="bleed"
      :layer="layer"
    ></component>
  </div>
</template>
<script>
import PhotoLayer from './layer-photo';
import TextLayer from 'element-ui/packages/layer-text';
export default {
  components: {
    PhotoLayer,
    TextLayer
  },
  props: {
    layer: Object,
    lIndex: Number,
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
    }
  }
};
</script>
