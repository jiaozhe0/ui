<!--
 * @Author: your name
 * @Date: 2021-06-23 12:01:55
 * @LastEditTime: 2021-07-01 22:12:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/packages/layer-text/src/main.vue
-->
<template>
  <svg :viewBox="`0 0 ${layer.width} ${layer.height}`"
       :width="layer.width * scale"
       :height="layer.height * scale"
       xmlns="http://www.w3.org/2000/svg"
       preserveAspectRatio="xMinYMin meet">
    <foreignObject v-if="layer.data.renderContent"
                   :width="layer.width"
                   :height="layer.height">
      <section xmlns="http://www.w3.org/1999/xhtml"
               style="font-size:1px"
               v-html="layer.data.renderContent"></section>
    </foreignObject>
    <g v-else>
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           :width="layer.width"
           :height="layer.height">
        <path :d="dVal"
              p-id="3000"
              fill="#D1D1D1"></path>
      </svg>
    </g>
  </svg>
  </g>
  </svg>
</template>

<script>
export default {
  name: 'FcLayerText',
  props: {
    layer: Object,
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {
    dVal() {
      const { width, data, height } = this.layer;
      if (data.renderContent) return ''; // height,
      const v = height / 10 - 30;
      let str = `M0 ${0}h${width}v${v}H0z`;
      for (let i = 1; i < 10; i++) {
        str += ` M0 ${i * (v + 30)}h${width}v${v}H0z`;
      }
      return str;
    }
  }
};
</script>
