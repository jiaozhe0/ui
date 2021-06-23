<!--
 * @Author: jiaozhe
 * @Date: 2021-06-23 10:55:28
 * @LastEditTime: 2021-06-23 11:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/main.vue
-->
<template>
  <div :class="['fc-page-edit', {'is-view': view}]">
    <div v-if="frame.isLine"
         class="middle-line"></div>
    <pg-bleed v-if="!bleed.borderWidth"
              :bleed="bleed"></pg-bleed>
    <pg-border :border="frame.border"></pg-border>
    <div class="el-page-wrap"
         :style="size">
      <div class="el-page-content"
           :style="sizeWithBleed">
        <pg-layout v-for="(item, index) in page.layers"
                   :key="index"
                   :pageId="page.id"
                   :lIndex="index"
                   :bleed="bleed"
                   :scale="scale"
                   :layout="item"></pg-layout>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FcPageEdit",
  props: {
    page: {
      type: Object,
      default() {
        return {
          width: 2,
          height: 1,
          layers: []
        };
      }
    },
    frame: {
      type: Object,
      default() {
        return {
          output: "",
          bleed: [4, 4, 4, 4],
          border: [40, 40, 40, 40],
          type: ""
        };
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    view: {
      type: Boolean,
      default: false
    }
  }
};
</script>
