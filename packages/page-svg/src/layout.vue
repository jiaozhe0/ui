<!--
 * @Author: your name
 * @Date: 2021-06-28 22:23:52
 * @LastEditTime: 2021-07-02 08:37:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/page-svg/src/layout.vue
-->
<template>
  <g :transform="transform">
    <svg v-if="layouts.id"
         :width="layouts.width"
         :height="layouts.height"
         :viewBox="`0 0 ${layouts.width} ${layouts.height}`">
      <g>
        <layer-item v-for="item in layouts.layer"
                    :key="item.id"
                    :layer="item"></layer-item>
      </g>
    </svg>
  </g>
</template>

<script>
import LayerItem from './layer';
export default {
  props: {
    layout: {
      type: Object
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    layouts() {
      const { layout } = this;
      if (layout.id && layout.width) {
        return layout;
      } else if (layout.id) {
        const [width, height] = layout.id.split('_')[1].split('*');
        layout.width = +width;
        layout.height = +height;
        return layout;
      }
      return {
        ...layout,
        width: 1,
        height: 1
      };
    },
    transform() {
      const { index, layouts } = this;
      return `translate(${layouts.width * index} 0)`;
    }
  },
  components: {
    LayerItem
  }
};
</script>
