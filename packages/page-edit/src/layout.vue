<!--
 * @Author: your name
 * @Date: 2021-06-23 16:15:03
 * @LastEditTime: 2021-09-01 09:11:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/layout.vue
-->
<template>
  <div :class="['pg-layout-item', 'draggable-source', { checked: checked, fill: layout.fill }]"
       :data-layerid="layoutId"
       data-type="layout">
    <div v-if="layout.id && layout.layer.length"
         class="layout-item-content"
         data-type="layout">
      <pg-layer v-for="layer in layout.layer"
                :key="layer.id"
                :layoutId="layoutId"
                :bleed="bleed"
                :scale="scale"
                :layer="layer"></pg-layer>
    </div>
    <div v-else
         class="layout-item-empty">
      {{ hintText }}
    </div>
  </div>
</template>

<script>
import PgLayer from './layer';
export default {
  props: {
    layoutId: String,
    layout: Object,
    hintText: String,
    bleed: {
      bleed: Object,
      default() {
        return {};
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PgLayer
  }
};
</script>
