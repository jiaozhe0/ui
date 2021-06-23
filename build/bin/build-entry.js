var Components = require('../../components.json');
const FcComponents = require('../../fc-components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
var FC_OUTPUT_PATH = path.join(__dirname, '../../src/dacai.js');

var IMPORT_TEMPLATE =
  "import {{name}} from '../packages/{{package}}/index.js';";
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
const FC_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */
const components = [
  {{install}}
]
const install = function() {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
export default {
  version: '{{version}}',
  install,
{{list}}
}
`;

var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
{{install}},
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
{{list}}
};
`;

delete Components.font;

var ComponentNames = Object.keys(Components);
var FcComponentsNames = Object.keys(FcComponents);

var includeComponentTemplate = []; // 包含的组件模版
var installTemplate = []; // 安装的组件模版，有点的组件安装，有的放在原型上面
var listTemplate = []; // 导出的

var includeFcComponentTemplate = [];
var fcInstallTemplate = []; // 安装
var fcListTemplate = []; // 所有导出

FcComponentsNames.forEach(name => {
  var componentName = uppercamelcase(name);
  includeFcComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );
  fcInstallTemplate.push(
    render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    })
  );

  fcListTemplate.push(`  ${componentName}`);
});

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );

  if (
    [
      'Loading',
      'MessageBox',
      'Notification',
      'Message',
      'InfiniteScroll'
    ].indexOf(componentName) === -1
  ) {
    installTemplate.push(
      render(INSTALL_COMPONENT_TEMPLATE, {
        name: componentName,
        component: name
      })
    );
  }

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var fcTemplate = render(FC_TEMPLATE, {
  include: includeFcComponentTemplate.join(endOfLine),
  install: fcInstallTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../../package.json').version,
  list: fcListTemplate.join(',' + endOfLine)
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../../package.json').version,
  list: fcListTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
fs.writeFileSync(FC_OUTPUT_PATH, fcTemplate);
console.log('[build entry] DONE:', OUTPUT_PATH);
