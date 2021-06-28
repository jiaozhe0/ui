import LayerImage from './src/main';

/* istanbul ignore next */
LayerImage.install = function(Vue) {
  Vue.component(LayerImage.name, LayerImage);
};

export default LayerImage;
