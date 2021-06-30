<!--
 * @Author: your name
 * @Date: 2021-06-23 11:13:01
 * @LastEditTime: 2021-06-30 18:20:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/layer-photo/src/main.vue
-->
<template>
  <svg
    :viewBox="`0 0 ${layer.width} ${layer.height}`"
    :width="layer.width * scale"
    :height="layer.height * scale"
    preserveAspectRatio="xMinYMin meet"
    :class="['el-photo-layer', { visible }]"
  >
    <g :clip-path="clipPath">
      <g v-if="layer.data" :transform="gTransform">
        <image
          :xlink:href="layer.data.result"
          :href="layer.data.result"
          :width="layer.data.width"
          :height="layer.data.height"
          :transform="imageTransform"
          preserveAspectRatio="xMinYMin"
          image-rendering="optimizeQuality"
        ></image>
      </g>
      <g v-else>
        <rect
          :width="layer.width"
          :height="layer.height"
          :fill="view ? '#fff' : '#D1D1D1'"
        ></rect>
      </g>
    </g>
    <component
      v-if="layer.style"
      :is="layer.style + 'Mask'"
      :layer="layer"
    ></component>
  </svg>
</template>

<script>
import circleMask from './circle-mask';
import ellipseMask from './ellipse-mask';
export default {
  name: 'ElLayerPhoto',
  props: {
    layer: Object,
    visible: {
      type: Boolean,
      default: false
    },
    scale: {
      type: Number,
      default: 1
    },
    view: Boolean
  },
  computed: {
    gTransform() {
      let value = '';
      if (!this.layer.data) return value;
      let { rotate, x, y } = this.layer.data;
      x = -Math.abs(x);
      y = -Math.abs(y);
      return [270, 90].includes(rotate)
        ? `translate(${y} ${x})`
        : `translate(${x} ${y})`;
    },
    imageTransform() {
      const { data } = this.layer;
      if (!data) return '';
      const { rotate, height, width } = data;
      if (rotate === 270) {
        return `rotate(${rotate} ${width / 2} ${width / 2}) translate(0 0)`;
      } else if (rotate === 90) {
        return `rotate(${rotate} ${height / 2} ${height / 2}) translate(0, 0)`;
      } else {
        return `rotate(${rotate} ${width / 2} ${height / 2}) translate(0, 0)`;
      }
    },
    clipPath() {
      const { style, id } = this.layer;
      return style ? `url(#${id})` : '';
    }
  },
  components: {
    circleMask,
    ellipseMask
  }
};
</script>
