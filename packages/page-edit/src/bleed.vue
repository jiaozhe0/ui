<!--
 * @Author: your name
 * @Date: 2021-06-23 11:12:00
 * @LastEditTime: 2021-08-31 16:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/bleed.vue
-->
<template>
  <div class="pg-bleed">
    <div v-for="item in bleedList"
         :class="['pg-bleed-item', item.type]"
         :style="item"></div>
  </div>
</template>

<script>
export default {
  props: {
    bleed: Array
  },
  inject: ['isAndroid'],
  computed: {
    bleedList() {
      const { bleed, scale, isAndroid } = this;
      const value = bleed[0] * 11.8;
      const val = isAndroid ? value * scale + 'px' : value + 'em';
      return bleed.map((item, index) => {
        switch (index) {
          case 0:
            return {
              top: 0,
              height: val,
              type: 'horizontal'
            };
          case 1:
            return {
              right: 0,
              width: val,
              type: 'vertical'
            };
          case 2:
            return {
              bottom: 0,
              height: val,
              type: 'horizontal'
            };
          case 3:
            return {
              left: 0,
              width: val,
              type: 'vertical'
            };
        }
      });
    }
  }
};
</script>
