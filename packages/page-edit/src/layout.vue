<!--
 * @Author: your name
 * @Date: 2021-06-23 16:15:03
 * @LastEditTime: 2021-06-28 22:48:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/layout.vue
-->
<template>
  <div class="pg-layout-item"
       :style="styles">
    <div v-if="layout.id"
         class="layout-item-content">
      <pg-layer v-for="layer in layout.layer"
                :key="layer.id"
                :layoutIndex="layoutIndex"
                :pageId="pageId"
                :bleed="bleed"
                :scale="scale"
                :layer="layer"></pg-layer>
    </div>
    <div v-else
         class="layout-item-empty">
      拖着图片，智能填充
    </div>
  </div>
</template>

<script>
import PgLayer from './layer';
export default {
  props: {
    layout: Object,
    layoutIndex: {
      type: Number,
      default: 0
    },
    pageId: String,
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
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    PgLayer
  }
};
</script>
