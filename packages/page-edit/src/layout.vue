<!--
 * @Author: your name
 * @Date: 2021-06-23 16:15:03
 * @LastEditTime: 2021-06-30 18:21:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/layout.vue
-->
<template>
  <div
    :class="['pg-layout-item', { checked: checked, fill: layout.fill }]"
    data-type="clear"
  >
    <div v-if="layout.id" class="layout-item-content">
      <pg-layer
        v-for="layer in layout.layer"
        :key="layer.id"
        :layoutIndex="layoutIndex"
        :pageId="pageId"
        :bleed="bleed"
        :scale="scale"
        :layer="layer"
      ></pg-layer>
    </div>
    <div v-else class="layout-item-empty">
      拖着图片，智能填充
    </div>
  </div>
</template>

<script>
import PgLayer from './layer';
export default {
  props: {
    pageId: String,
    layout: Object,
    layoutIndex: {
      type: Number,
      default: 0
    },
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
  },
  computed: {}
};
</script>
