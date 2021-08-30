/* Automatically generated by './build/bin/build-entry.js' */
import PageEdit from '../packages/page-edit/index.js';
import LayerPhoto from '../packages/layer-photo/index.js';
import LayerText from '../packages/layer-text/index.js';
import PhotoWall from '../packages/photo-wall/index.js';
import LayerImage from '../packages/layer-image/index.js';
import PageSvg from '../packages/page-svg/index.js';
import PhotoAlbum from '../packages/photo-album/index.js';
const components = [
    PageEdit,
  LayerPhoto,
  LayerText,
  PhotoWall,
  LayerImage,
  PageSvg,
  PhotoAlbum
]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
export default {
  version: '2.1.4-15',
  install,
  PageEdit,
  LayerPhoto,
  LayerText,
  PhotoWall,
  LayerImage,
  PageSvg,
  PhotoAlbum
}
