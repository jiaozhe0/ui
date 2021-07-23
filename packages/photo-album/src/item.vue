<!--
 * @Author: your name
 * @Date: 2021-07-16 09:09:26
 * @LastEditTime: 2021-07-23 09:30:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/photo-album/src/item.vue
 , , {fill: layout.fill}
-->
<template>
  <div :class="['album-page-item', index ? 'right' : 'left']">
    <div :class="['album-layout-item', 'front' , {fill: layout.fill}]">

      <!-- <div :class="['item-wrap', {fill: layout.fill}]"> -->
      <fc-page-svg :scale="scale"
                   :page="layout"></fc-page-svg>
      <!-- </div> -->
    </div>
    <div v-if="backLayout.width"
         :class="['album-layout-item', 'back' ]">
      <fc-page-svg :scale="scale"
                   :page="backLayout"></fc-page-svg>
    </div>
  </div>
</template>

<script>
import FcPageSvg from '../../page-svg';
export default {
  props: {
    scale: Number,
    index: Number,
    layout: Object,
    backLayout: Object
  },
  components: {
    FcPageSvg
  }
};
</script>
