(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/uview-ui/components/u-form/u-form"],{

/***/ 433:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/azhou/Desktop/2025/毕设项目/健康分析平台/psychology_smart/node_modules/uview-ui/components/u-form/u-form.vue ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& */ 434);
/* harmony import */ var _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-form.vue?vue&type=script&lang=js& */ 436);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs




/* normalize component */

var component = Object(_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed64ceb2",
  null,
  false,
  _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-form/u-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 434:
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/azhou/Desktop/2025/毕设项目/健康分析平台/psychology_smart/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& */ 435);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 435:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/azhou/Desktop/2025/毕设项目/健康分析平台/psychology_smart/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 436:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/azhou/Desktop/2025/毕设项目/健康分析平台/psychology_smart/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-form.vue?vue&type=script&lang=js& */ 437);
/* harmony import */ var _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_B_environment_HBuilderX3_2_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 437:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/azhou/Desktop/2025/毕设项目/健康分析平台/psychology_smart/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));






var _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 271));
var _asyncValidator = _interopRequireDefault(__webpack_require__(/*! ../../libs/util/async-validator */ 438));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
// 去除警告信息
_asyncValidator.default.warning = function () {};
/**
                                                   * Form 表单
                                                   * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
                                                   * @tutorial https://www.uviewui.com/components/form.html
                                                   * @property {Object}						model			当前form的需要验证字段的集合
                                                   * @property {Object | Function | Array}	rules			验证规则
                                                   * @property {String}						errorType		错误的提示方式，见上方说明 ( 默认 message )
                                                   * @property {Boolean}						borderBottom	是否显示表单域的下划线边框   ( 默认 true ）
                                                   * @property {String}						labelPosition	表单域提示文字的位置，left-左侧，top-上方 ( 默认 'left' ）
                                                   * @property {String | Number}				labelWidth		提示文字的宽度，单位px  ( 默认 45 ）
                                                   * @property {String}						labelAlign		lable字体的对齐方式   ( 默认 ‘left' ）
                                                   * @property {Object}						labelStyle		lable的样式，对象形式
                                                   * @example <u--formlabelPosition="left" :model="model1" :rules="rules" ref="form1"></u--form>
                                                   */var _default =
{
  name: "u-form",
  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default],
  provide: function provide() {
    return {
      uForm: this };

  },
  data: function data() {
    return {
      formRules: {},
      // 规则校验器
      validator: {},
      // 原始的model快照，用于resetFields方法重置表单时使用
      originalModel: null };

  },
  watch: {
    // 监听规则的变化
    rules: {
      immediate: true,
      handler: function handler(n) {
        this.setRules(n);
      } },

    // 监听属性的变化，通知子组件u-form-item重新获取信息
    propsChange: function propsChange(n) {var _this$children;
      if ((_this$children = this.children) === null || _this$children === void 0 ? void 0 : _this$children.length) {
        this.children.map(function (child) {
          // 判断子组件(u-form-item)如果有updateParentData方法的话，就就执行(执行的结果是子组件重新从父组件拉取了最新的值)
          typeof child.updateParentData == "function" &&
          child.updateParentData();
        });
      }
    },
    // 监听model的初始值作为重置表单的快照
    model: {
      immediate: true,
      handler: function handler(n) {
        if (!this.originalModel) {
          this.originalModel = uni.$u.deepClone(n);
        }
      } } },


  computed: {
    propsChange: function propsChange() {
      return [
      this.errorType,
      this.borderBottom,
      this.labelPosition,
      this.labelWidth,
      this.labelAlign,
      this.labelStyle];

    } },

  created: function created() {
    // 存储当前form下的所有u-form-item的实例
    // 不能定义在data中，否则微信小程序会造成循环引用而报错
    this.children = [];
  },
  methods: {
    // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
    setRules: function setRules(rules) {
      // 判断是否有规则
      if (Object.keys(rules).length === 0) return;
      if ( true && Object.keys(this.model).length === 0) {
        uni.$u.error('设置rules，model必须设置！如果已经设置，请刷新页面。');
        return;
      };
      this.formRules = rules;
      // 重新将规则赋予Validator
      this.validator = new _asyncValidator.default(rules);
    },
    // 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
    resetFields: function resetFields() {
      this.resetModel();
    },
    // 重置model为初始值的快照
    resetModel: function resetModel(obj) {var _this = this;
      // 历遍所有u-form-item，根据其prop属性，还原model的原始快照
      this.children.map(function (child) {
        var prop = child === null || child === void 0 ? void 0 : child.prop;
        var value = uni.$u.getProperty(_this.originalModel, prop);
        uni.$u.setProperty(_this.model, prop, value);
      });
    },
    // 清空校验结果
    clearValidate: function clearValidate(props) {
      props = [].concat(props);
      this.children.map(function (child) {
        // 如果u-form-item的prop在props数组中，则清除对应的校验结果信息
        if (props[0] === undefined || props.includes(child.prop)) {
          child.message = null;
        }
      });
    },
    // 对部分表单字段进行校验
    validateField: function validateField(value, callback) {var _arguments = arguments,_this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var event;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:event = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
                // $nextTick是必须的，否则model的变更，可能会延后于此方法的执行
                _this2.$nextTick(function () {
                  // 校验错误信息，返回给回调方法，用于存放所有form-item的错误信息
                  var errorsRes = [];
                  // 如果为字符串，转为数组
                  value = [].concat(value);
                  // 历遍children所有子form-item
                  _this2.children.map(function (child) {
                    // 用于存放form-item的错误信息
                    var childErrors = [];
                    if (value.includes(child.prop)) {
                      // 获取对应的属性，通过类似'a.b.c'的形式
                      var propertyVal = uni.$u.getProperty(
                      _this2.model,
                      child.prop);

                      // 属性链数组
                      var propertyChain = child.prop.split(".");
                      var propertyName =
                      propertyChain[propertyChain.length - 1];

                      var rule = _this2.formRules[child.prop];
                      // 如果不存在对应的规则，直接返回，否则校验器会报错
                      if (!rule) return;
                      // rule规则可为数组形式，也可为对象形式，此处拼接成为数组
                      var rules = [].concat(rule);

                      // 对rules数组进行校验
                      for (var i = 0; i < rules.length; i++) {
                        var ruleItem = rules[i];
                        // 将u-form-item的触发器转为数组形式
                        var trigger = [].concat(ruleItem === null || ruleItem === void 0 ? void 0 : ruleItem.trigger);
                        // 如果是有传入触发事件，但是此form-item却没有配置此触发器的话，不执行校验操作
                        if (event && !trigger.includes(event)) continue;
                        // 实例化校验对象，传入构造规则
                        var validator = new _asyncValidator.default(_defineProperty({},
                        propertyName, ruleItem));

                        validator.validate(_defineProperty({},
                        propertyName, propertyVal),

                        function (errors, fields) {var _childErrors$0$messag, _childErrors$;
                          if (uni.$u.test.array(errors)) {
                            errorsRes.push.apply(errorsRes, _toConsumableArray(errors));
                            childErrors.push.apply(childErrors, _toConsumableArray(errors));
                          }
                          child.message = (_childErrors$0$messag = (_childErrors$ =
                          childErrors[0]) === null || _childErrors$ === void 0 ? void 0 : _childErrors$.message) !== null && _childErrors$0$messag !== void 0 ? _childErrors$0$messag : null;
                        });

                      }
                    }
                  });
                  // 执行回调函数
                  typeof callback === "function" && callback(errorsRes);
                });case 2:case "end":return _context.stop();}}}, _callee);}))();
    },
    // 校验全部数据
    validate: function validate(callback) {var _this3 = this;
      // 开发环境才提示，生产环境不会提示
      if ( true && Object.keys(this.formRules).length === 0) {
        uni.$u.error('未设置rules，请看文档说明！如果已经设置，请刷新页面。');
        return;
      }
      return new Promise(function (resolve, reject) {
        // $nextTick是必须的，否则model的变更，可能会延后于validate方法
        _this3.$nextTick(function () {
          // 获取所有form-item的prop，交给validateField方法进行校验
          var formItemProps = _this3.children.map(
          function (item) {return item.prop;});

          _this3.validateField(formItemProps, function (errors) {
            if (errors.length) {
              // 如果错误提示方式为toast，则进行提示
              _this3.errorType === 'toast' && uni.$u.toast(errors[0].message);
              reject(errors);
            } else {
              resolve(true);
            }
          });
        });
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-ui/components/u-form/u-form.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-form/u-form-create-component',
    {
        'node-modules/uview-ui/components/u-form/u-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(433))
        })
    },
    [['node-modules/uview-ui/components/u-form/u-form-create-component']]
]);
