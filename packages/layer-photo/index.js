import LayerPhoto from './src/main';

/* istanbul ignore next */
LayerPhoto.install = function(Vue) {
  Vue.component(LayerPhoto.name, LayerPhoto);
};

export default LayerPhoto;
