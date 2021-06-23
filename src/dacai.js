/* Automatically generated by './build/bin/build-entry.js' */
import PageEdit from '../packages/page-edit/index.js';
import LayerPhoto from '../packages/layer-photo/index.js';
import LayerText from '../packages/layer-text/index.js';
const components = [
    PageEdit,
  LayerPhoto,
  LayerText
]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
export default {
  version: '1.0.2-5',
  install,
  PageEdit,
  LayerPhoto,
  LayerText
}
