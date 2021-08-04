<!--
 * @Author: your name
 * @Date: 2021-06-28 10:33:16
 * @LastEditTime: 2021-07-29 10:34:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/photo-wall/src/main.vue
-->
<template>
  <div class="el-photo-wall"
       :style="position"
       data-type="clear">
    <div v-for="(page, index) in pageList"
         :key="page.id"
         :style="{ left: page.x + 'em', top: page.y + 'em' }"
         @click="handleClick(page.id)"
         :class="['photo-wall-item', {'wall-active': defaultId === page.id}]">
      <fc-page-edit :page="page"
                    :view="view"
                    :frame="frame"
                    :scale="scale"></fc-page-edit>
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
    view: {
      type: Boolean,
      default: false
    },
    defaultId: {
      type: String,
      default: ''
    },
    pageList: Array
  },
  computed: {
    position() {
      const { width, height } = this.frame.productSize;
      return {
        width: width + 'em',
        height: height + 'em',
        fontSize: this.scale + 'px'
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
