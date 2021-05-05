(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {//
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
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onCartLineTotal: function onCartLineTotal(item) {
      var is_sub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var amount = is_sub ? item.price * item.pivot.quantity : item.price;
      amount = amount / 100;
      return amount.toLocaleString(process.env.MIX_CASHIER_CURRENCY_LOCALE, {
        style: "currency",
        currency: "USD"
      });
    }
  },
  computed: {
    v_order: function v_order() {
      return this.$store.state.state_order;
    },
    v_orderQuantity: function v_orderQuantity() {
      return this.$store.state.state_order.products.reduce(function (acc, item) {
        return acc + item.pivot.quantity;
      }, 0);
    },
    v_orderTotal: function v_orderTotal() {
      var amount = this.$store.state.state_order.products.reduce(function (acc, item) {
        return acc + item.price * item.pivot.quantity;
      }, 0);
      amount = amount / 100;
      return amount.toLocaleString(process.env.MIX_CASHIER_CURRENCY_LOCALE, {
        style: "currency",
        currency: "USD"
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full" }, [
    _c("div", { staticClass: "lg:w-2/3 w-full mx-auto mt-8 overflow-auto" }, [
      _c("h2", {
        staticClass: "text-sm title-font text-gray-500 tracking-widest",
        domProps: {
          textContent: _vm._s("Transaction ID: " + _vm.v_order.transaction_id)
        }
      }),
      _vm._v(" "),
      _c(
        "h1",
        { staticClass: "text-gray-900 text-3xl title-font font-medium mb-4" },
        [_vm._v("\n      Thank you for your purchase\n    ")]
      ),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table-auto w-full text-left whitespace-no-wrap" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.v_order.products, function(item) {
                return _c("tr", { key: item.id }, [
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(item.name) }
                  }),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(item.pivot.quantity) }
                  }),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4",
                    domProps: {
                      textContent: _vm._s(_vm.onCartLineTotal(item, false))
                    }
                  }),
                  _vm._v(" "),
                  _c("td", {
                    staticClass: "p-4",
                    domProps: { textContent: _vm._s(_vm.onCartLineTotal(item)) }
                  })
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "p-4 font-bold" }, [
                  _vm._v("Total Amount")
                ]),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.v_orderQuantity) }
                }),
                _vm._v(" "),
                _c("td", { staticClass: "p-4 font-bold" }),
                _vm._v(" "),
                _c("td", {
                  staticClass: "p-4 font-bold",
                  domProps: { textContent: _vm._s(_vm.v_orderTotal) }
                })
              ])
            ],
            2
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"
          },
          [_vm._v("\n            Item\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("\n            Quantity\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("\n            Price\n          ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
          },
          [_vm._v("\n            Subtotal Price\n          ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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

/***/ "./resources/js/routes/Order/Summary.vue":
/*!***********************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=3f7e591e& */ "./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Summary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&":
/*!******************************************************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=template&id=3f7e591e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);