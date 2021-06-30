<!--
 * @Author: jiaozhe
 * @Date: 2021-06-23 10:55:28
 * @LastEditTime: 2021-06-30 21:30:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-edit/src/main.vue
-->
<template>
  <div :class="['el-page-edit', { 'is-view': view }]"
       :style="fontSize">
    <div v-if="isLine"
         class="middle-line"></div>
    <pg-bleed v-if="!bleed.borderWidth"
              :bleed="bleed"></pg-bleed>
    <pg-ridge v-if="page.ridgeWidth"
              :page="page"
              :productSize="frame.productSize"></pg-ridge>
    <pg-border v-if="frame.border.length"
               :border="frame.border"></pg-border>
    <div class="el-page-wrap"
         :style="size.outside">
      <div class="el-page-content"
           :style="size.inside">
        <pg-layout v-for="(item, index) in page.layers"
                   :key="index"
                   :layout="item"
                   :layoutIndex="index"
                   :bleed="bleed"
                   :scale="scale"
                   :checked="layoutIndex === index"
                   :pageId="page.id"
                   @click.native="handleClick(index)"></pg-layout>
      </div>
    </div>
  </div>
</template>

<script>
import PgLayout from './layout';
import PgBleed from './bleed';
import PgBorder from './border';
import PgRidge from './ridge';
export default {
  name: 'FcPageEdit',
  props: {
    frame: {
      type: Object,
      default() {
        return {
          bleed: [3, 3, 3, 3],
          border: [],
          type: ''
        };
      }
    },
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
    scale: {
      type: Number,
      default: 1
    },
    view: {
      type: Boolean,
      default: false
    },
    layoutIndex: {
      type: Number,
      default: -1
    }
  },
  computed: {
    fontSize() {
      return {
        fontSize: this.scale + 'px'
      };
    },
    bleed() {
      const { page, frame } = this;
      const { layers } = page;
      const bleed = page.bleed || frame.bleed;
      if (layers[0].output !== 'more') return bleed;
      return {
        borderWidth: bleed[0] * 11.8 + 'em'
      };
    },
    isLine() {
      const { isPart, isHalf } = this.page;
      const { type } = this.frame;
      return type === 'photo_album' && !isPart && !isHalf;
    },
    size() {
      const { width, height, layers } = this.page;
      const [layout] = layers;
      let transform = 'none';
      let realWidth = width;
      let realHeight = height;
      if (this.view && (!layout.output || layout.output === 'one_border')) {
        const val = this.bleed[0] * 11.8;
        transform = `translate(-${val}em, -${val}em)`;
        realWidth -= val * 2;
        realHeight -= val * 2;
      }
      return {
        outside: {
          fontSize: this.scale + 'px',
          width: realWidth + 'em',
          height: realHeight + 'em'
        },
        inside: {
          width: width + 'em',
          height: height + 'em',
          transform
        }
      };
    }
  },
  components: {
    PgLayout,
    PgBleed,
    PgBorder,
    PgRidge
  },
  methods: {
    handleClick(index) {
      this.$emit('select-layout', index);
    }
  }
};
</script>
