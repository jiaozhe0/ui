<!--
 * @Author: your name
 * @Date: 2021-06-28 10:33:16
 * @LastEditTime: 2021-06-28 17:49:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/photo-wall/src/main.vue
-->
<template>
  <div class="el-photo-wall"
       :style="fontSize">
    <div class="photo-wall-content"
         :style="position">
      <div v-for="(page, index) in pageList"
           :key="page.id"
           :style="{left: page.x + 'em', top: page.y+'em'}"
           @click="handleClick(index)"
           class="photo-wall-item">
        <fc-page-edit :page="page"
                      :scale="scale"></fc-page-edit>
      </div>
    </div>
  </div>
</template>

<script>
import FcPageEdit from '../../page-edit';
export default {
  name: 'FcPhotoWall',
  props: {
    scale: {
      type: Number,
      default: 1
    },
    frame: {
      type: Object
    },
    pageList: Array
  },
  computed: {
    fontSize() {
      return { fontSize: this.scale + 'px' };
    },
    position() {
      const { width, height } = this.frame.productSize;
      return {
        width: width + 'em',
        height: height + 'em'
      };
    }
  },
  components: {
    FcPageEdit
  },
  methods: {
    handleClick(index) {
      this.$emit('click', index);
    }
  }
};
</script>
