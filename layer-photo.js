module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/layer-photo/src/main.vue?vue&type=template&id=56c82ffe&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "el-photo-layer",
      attrs: {
        viewBox: "0 0 " + _vm.layer.width + " " + _vm.layer.height,
        width: _vm.layer.width * _vm.scale,
        height: _vm.layer.height * _vm.scale,
        preserveAspectRatio: "xMinYMin meet",
        "clip-path": _vm.clipPath
      }
    },
    [
      _vm.layer.data
        ? _c("g", { attrs: { transform: _vm.gTransform } }, [
            _c("image", {
              attrs: {
                "xlink:href": _vm.layer.data.result,
                href: _vm.layer.data.result,
                width: _vm.layer.data.width,
                height: _vm.layer.data.height,
                transform: _vm.imageTransform,
                preserveAspectRatio: "xMinYMin",
                "image-rendering": "optimizeQuality"
              }
            })
          ])
        : _c("g", [
            _c("rect", {
              attrs: {
                width: _vm.layer.width,
                height: _vm.layer.height,
                fill: _vm.view ? "#fff" : "#D1D1D1"
              }
            })
          ]),
      _vm.layer.style
        ? _c(_vm.layer.style + "Mask", {
            tag: "component",
            attrs: { layer: _vm.layer }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/layer-photo/src/main.vue?vue&type=template&id=56c82ffe&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/layer-photo/src/circle-mask.vue?vue&type=template&id=21a6c9b1&
var circle_maskvue_type_template_id_21a6c9b1_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("clipPath", { attrs: { id: _vm.layer.id } }, [
    _c("ellipse", {
      attrs: { cx: _vm.pos.x, cy: _vm.pos.y, rx: _vm.pos.x, ry: _vm.pos.y }
    })
  ])
}
var circle_maskvue_type_template_id_21a6c9b1_staticRenderFns = []
circle_maskvue_type_template_id_21a6c9b1_render._withStripped = true


// CONCATENATED MODULE: ./packages/layer-photo/src/circle-mask.vue?vue&type=template&id=21a6c9b1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/layer-photo/src/circle-mask.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var circle_maskvue_type_script_lang_js_ = ({
  props: {
    layer: Object
  },
  computed: {
    pos: function pos() {
      var _layer = this.layer,
          width = _layer.width,
          height = _layer.height;

      return {
        x: width / 2,
        y: height / 2
      };
    }
  }
});
// CONCATENATED MODULE: ./packages/layer-photo/src/circle-mask.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_circle_maskvue_type_script_lang_js_ = (circle_maskvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/layer-photo/src/circle-mask.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_circle_maskvue_type_script_lang_js_,
  circle_maskvue_type_template_id_21a6c9b1_render,
  circle_maskvue_type_template_id_21a6c9b1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/layer-photo/src/circle-mask.vue"
/* harmony default export */ var circle_mask = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/layer-photo/src/ellipse-mask.vue?vue&type=template&id=0944c8c3&
var ellipse_maskvue_type_template_id_0944c8c3_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "clipPath",
    { attrs: { transform: "scale(1,1)", id: _vm.layer.id } },
    [
      _c("circle", {
        attrs: { id: _vm.layer.id, cx: _vm.pos.x, cy: _vm.pos.r, r: _vm.pos.r }
      })
    ]
  )
}
var ellipse_maskvue_type_template_id_0944c8c3_staticRenderFns = []
ellipse_maskvue_type_template_id_0944c8c3_render._withStripped = true


// CONCATENATED MODULE: ./packages/layer-photo/src/ellipse-mask.vue?vue&type=template&id=0944c8c3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/layer-photo/src/ellipse-mask.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ellipse_maskvue_type_script_lang_js_ = ({
  props: {
    layer: Object
  },
  computed: {
    pos: function pos() {
      var _layer = this.layer,
          width = _layer.width,
          height = _layer.height;

      return {
        x: width / 2,
        r: height / 2
      };
    }
  }
});
// CONCATENATED MODULE: ./packages/layer-photo/src/ellipse-mask.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ellipse_maskvue_type_script_lang_js_ = (ellipse_maskvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/layer-photo/src/ellipse-mask.vue





/* normalize component */

var ellipse_mask_component = Object(componentNormalizer["a" /* default */])(
  src_ellipse_maskvue_type_script_lang_js_,
  ellipse_maskvue_type_template_id_0944c8c3_render,
  ellipse_maskvue_type_template_id_0944c8c3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ellipse_mask_api; }
ellipse_mask_component.options.__file = "packages/layer-photo/src/ellipse-mask.vue"
/* harmony default export */ var ellipse_mask = (ellipse_mask_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/layer-photo/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElLayerPhoto',
  props: {
    layer: Object,
    scale: {
      type: Number,
      default: 1
    },
    view: Boolean
  },
  computed: {
    gTransform: function gTransform() {
      var value = '';
      if (!this.layer.data) return value;
      var _layer$data = this.layer.data,
          rotate = _layer$data.rotate,
          x = _layer$data.x,
          y = _layer$data.y;

      x = -Math.abs(x);
      y = -Math.abs(y);
      return [270, 90].includes(rotate) ? 'translate(' + y + ' ' + x + ')' : 'translate(' + x + ' ' + y + ')';
    },
    imageTransform: function imageTransform() {
      var value = '';
      return value;
    },
    iconTransform: function iconTransform() {
      // let { width, height } = this.layer;
      return '';
    },
    clipPath: function clipPath() {
      var _layer = this.layer,
          style = _layer.style,
          id = _layer.id;

      return style ? 'url(#' + id + ')' : '';
    }
  },
  components: {
    circleMask: circle_mask,
    ellipseMask: ellipse_mask
  }
});
// CONCATENATED MODULE: ./packages/layer-photo/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/layer-photo/src/main.vue





/* normalize component */

var main_component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/layer-photo/src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/layer-photo/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var layer_photo = __webpack_exports__["default"] = (main);

/***/ })
/******/ ]);