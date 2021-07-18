<!--
 * @Author: your name
 * @Date: 2021-07-16 09:09:26
 * @LastEditTime: 2021-07-17 13:35:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/photo-album/src/item.vue
 , , {fill: layout.fill}
-->
<template>
  <div :class="['album-page-item', index ? 'right' : 'left']">
    <div class="item-wrap">
      <div :class="['album-layout-item', 'front' , {fill: layout.fill}]">
        <fc-page-svg :scale="scale"
                     :page="layout"></fc-page-svg>

      </div>
      <div v-if="backLayout.width"
           :class="['album-layout-item', 'back' ]">
        <fc-page-svg :scale="scale"
                     :page="backLayout"></fc-page-svg>

      </div>
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
