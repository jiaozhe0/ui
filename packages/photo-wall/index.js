import PhotoWall from './src/main';

/* istanbul ignore next */
PhotoWall.install = function(Vue) {
  Vue.component(PhotoWall.name, PhotoWall);
};

export default PhotoWall;
