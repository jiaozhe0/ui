import LayerText from './src/main';

/* istanbul ignore next */
LayerText.install = function(Vue) {
  Vue.component(LayerText.name, LayerText);
};

export default LayerText;
