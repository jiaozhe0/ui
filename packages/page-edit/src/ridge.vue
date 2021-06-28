<!--
 * @Author: your name
 * @Date: 2021-06-28 17:55:33
 * @LastEditTime: 2021-06-28 21:43:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/ridge.vue
-->
<template>
  <div class="pg-ridge">
    <div v-for="(line, index) in lineList"
         :key="index"
         :style="{left: line}"
         class="pg-ridge-item"></div>
  </div>
</template>
<script>
export default {
  props: {
    page: Object,
    productSize: Object
  },
  computed: {
    lineList() {
      const { width: productWidth } = this.productSize;
      const { width, ridgeWidth } = this.page;
      const halfWidth = productWidth / 2;
      const leikouWidth = (width - ridgeWidth - productWidth) / 2;
      const cLineL = leikouWidth + halfWidth;
      const cLineR = cLineL + ridgeWidth;
      const lLineR = cLineR + halfWidth;
      return [leikouWidth + 'em', cLineL + 'em', cLineR + 'em', lLineR + 'em'];
    }
  }
};
</script>

