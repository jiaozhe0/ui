<!--
 * @Author: your name
 * @Date: 2021-06-23 11:12:00
 * @LastEditTime: 2021-06-30 12:56:52
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
  computed: {
    bleedList() {
      const val = this.bleed[0] * 11.8;
      return this.bleed.map((item, index) => {
        switch (index) {
          case 0:
            return {
              top: 0,
              height: val + 'em',
              type: 'horizontal'
            };
          case 1:
            return {
              right: 0,
              width: val + 'em',
              type: 'vertical'
            };
          case 2:
            return {
              bottom: 0,
              height: val + 'em',
              type: 'horizontal'
            };
          case 3:
            return {
              left: 0,
              width: val + 'em',
              type: 'vertical'
            };
        }
      });
    }
  }
};
</script>
