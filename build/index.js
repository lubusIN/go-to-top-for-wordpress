/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/component/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/data/index.js");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control */ "./src/control/index.js");

/**
 * WordPress dependencies.
 */



/**
 * Internal Dependencies
 */




/**
 * Render App
 */
function App() {
  (0,_data__WEBPACK_IMPORTED_MODULE_4__.useSavedSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ls_g2t_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_3__.Header, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGrid, {
    className: "ls_g2t_section",
    columns: 2,
    templateColumns: "3fr repeat(1,1fr)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_3__.PreviewButton, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
    className: "ls_g2t_sidepanel",
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings Panel')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control__WEBPACK_IMPORTED_MODULE_5__.GeneralControl, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control__WEBPACK_IMPORTED_MODULE_5__.DimensionControl, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control__WEBPACK_IMPORTED_MODULE_5__.ColorControl, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control__WEBPACK_IMPORTED_MODULE_5__.BorderControl, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control__WEBPACK_IMPORTED_MODULE_5__.AdvancedControl, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control__WEBPACK_IMPORTED_MODULE_5__.ResponsiveControl, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_3__.SaveNotice, null));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/component/header.js":
/*!*********************************!*\
  !*** ./src/component/header.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */






/**
 * Internal Dependencies
 */


/**
 * Render Header Component
 */
function Header() {
  const {
    enabled,
    setEnabled,
    setShowNotice,
    disableButton,
    setDisableButton,
    generalSetting,
    dimensionSetting,
    colorSetting,
    borderSetting,
    advancedSetting,
    responsive
  } = (0,_data__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
  const handleSaveSettings = () => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).saveEntityRecord('root', 'site', {
      go2top: {
        enabled,
        generalSetting,
        dimensionSetting,
        colorSetting,
        borderSetting,
        advancedSetting,
        responsive
      }
    });
    setShowNotice(true);
    setDisableButton(true);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDisableButton(false);
  }, [enabled, generalSetting, dimensionSetting, colorSetting, borderSetting, advancedSetting, responsive]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, {
    justify: "left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    icon: 'arrow-up-alt',
    size: 25
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    upperCase: true
  }, "Go To Top")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, {
    justify: "right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, null, "Enable"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    checked: enabled,
    onChange: value => setEnabled(value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save'),
    variant: "primary",
    style: {
      padding: '10px 30px'
    },
    disabled: disableButton,
    onClick: handleSaveSettings
  }, "Save")))));
}
;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/component/icon.js":
/*!*******************************!*\
  !*** ./src/component/icon.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {
  angleUp: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
  })),
  anglesUp: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
  })),
  arrowUp: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 384 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
  })),
  turnUp: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 384 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5h88l0 192c0 17.7-14.3 32-32 32H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32l80 0c70.7 0 128-57.3 128-128l0-192h88c9.6 0 18.2-5.7 22-14.5z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: function() { return /* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   PreviewButton: function() { return /* reexport safe */ _previewbutton__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   SaveNotice: function() { return /* reexport safe */ _notice__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   icons: function() { return /* reexport safe */ _icon__WEBPACK_IMPORTED_MODULE_2__["default"]; }
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/component/header.js");
/* harmony import */ var _previewbutton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewbutton */ "./src/component/previewbutton.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/component/icon.js");
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice */ "./src/component/notice.js");
/**
 * Export Components
 */





/***/ }),

/***/ "./src/component/notice.js":
/*!*********************************!*\
  !*** ./src/component/notice.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/data/index.js");



function SaveNotice() {
  const {
    showNotice,
    setShowNotice
  } = (0,_data__WEBPACK_IMPORTED_MODULE_2__.useSettings)();
  return showNotice ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Snackbar, {
    className: "ls_g2top_notice",
    explicitDismiss: true,
    onRemove: value => setShowNotice(value)
  }, "Settings Saved.") : null;
}
;
/* harmony default export */ __webpack_exports__["default"] = (SaveNotice);

/***/ }),

/***/ "./src/component/previewbutton.js":
/*!****************************************!*\
  !*** ./src/component/previewbutton.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/component/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */



/**
 * Internal Dependencies
 */



/**
 * Render Preview Button Component
 */
function PreviewButton() {
  const {
    generalSetting,
    dimensionSetting,
    colorSetting,
    borderSetting
  } = (0,_data__WEBPACK_IMPORTED_MODULE_4__.useSettings)();
  const {
    iconSize,
    margin,
    padding
  } = dimensionSetting;
  const {
    selectedIcon,
    buttonPosition
  } = generalSetting;
  const {
    buttonColor,
    iconColor
  } = colorSetting;
  const width = borderSetting?.border?.width || '1px';
  const style = borderSetting?.border?.style || 'solid';
  const color = borderSetting?.border?.color || 'black';
  const border = borderSetting.border ? `border: ${width} ${style} ${color}` : '';
  const radius = borderSetting.radius ? `border-radius: ${borderSetting.radius}` : '';
  const bgdefaultcolor = buttonColor?.default ? `background-color: ${buttonColor.default}` : '';
  const bghovercolor = buttonColor?.hover ? `background-color: ${buttonColor.hover}` : '';
  const icondefaultcolor = iconColor?.default ? `fill: ${iconColor.default}` : '';
  const iconhovercolor = iconColor?.hover ? `fill: ${iconColor.hover}` : '';
  const padtop = padding?.top || '0px';
  const padleft = padding?.left || '0px';
  const padbottom = padding?.bottom || '0px';
  const padright = padding?.right || '0px';
  const buttonpadding = padding ? `padding: ${padtop} ${padleft} ${padbottom} ${padright}` : '';
  const margintop = margin?.top || '0px';
  const marginleft = margin?.left || '0px';
  const marginbottom = margin?.bottom || '0px';
  const marginright = margin?.right || '0px';
  const buttonmargin = margin ? `margin: ${margintop} ${marginleft} ${marginbottom} ${marginright}` : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: buttonPosition
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "ls_g2t_preview_button",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Go To Top'),
    style: {
      height: 'auto'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "ls_g2t_preview_icon",
    icon: ___WEBPACK_IMPORTED_MODULE_3__.icons[selectedIcon],
    size: iconSize
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                        .components-button.ls_g2t_preview_button{
                            ${bgdefaultcolor};
                            ${buttonmargin};
                            ${buttonpadding};
                            ${border};
                            ${radius};
                        }
                        .components-button.ls_g2t_preview_button:hover{
                            ${bghovercolor};
                        }
                        .components-button .ls_g2t_preview_icon{
                            ${icondefaultcolor}
                        }
                        .components-button.ls_g2t_preview_button:hover .ls_g2t_preview_icon{
                            ${iconhovercolor}
                        }
                    `)));
}
;
/* harmony default export */ __webpack_exports__["default"] = (PreviewButton);

/***/ }),

/***/ "./src/control/advanced.js":
/*!*********************************!*\
  !*** ./src/control/advanced.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */



/**
 * Internal Dependencies
 */


/**
 * Render Advance Setting Control
 */
function AdvancedControl() {
  const {
    advancedSetting,
    setAdvancedSetting
  } = (0,_data__WEBPACK_IMPORTED_MODULE_3__.useSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    spacing: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scroll offset'),
    value: advancedSetting.scrollOffset,
    onChange: value => setAdvancedSetting({
      ...advancedSetting,
      scrollOffset: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation Speed'),
    value: advancedSetting.animationSpeed,
    onChange: value => setAdvancedSetting({
      ...advancedSetting,
      animationSpeed: value
    })
  })));
}
;
/* harmony default export */ __webpack_exports__["default"] = (AdvancedControl);

/***/ }),

/***/ "./src/control/border.js":
/*!*******************************!*\
  !*** ./src/control/border.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */




/**
 * Internal Dependencies
 */


/**
 * Render Border Setting Control
 */
function BorderControl() {
  const {
    borderSetting,
    setBorderSetting
  } = (0,_data__WEBPACK_IMPORTED_MODULE_4__.useSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border'),
    hasValue: () => !!borderSetting.border
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderControl, {
    withSlider: true,
    value: borderSetting.border,
    onChange: value => setBorderSetting({
      ...borderSetting,
      border: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Radius'),
    hasValue: () => !!borderSetting.radius
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Radius'),
    value: borderSetting.radius,
    onChange: value => setBorderSetting({
      ...borderSetting,
      radius: value
    })
  })));
}
;
/* harmony default export */ __webpack_exports__["default"] = (BorderControl);

/***/ }),

/***/ "./src/control/color.js":
/*!******************************!*\
  !*** ./src/control/color.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */




/**
 * Internal Dependencies
 */


/**
 * Render Color Picker 
 */
function ColorControlDropdown({
  label,
  colorValue,
  onChangeColor
}) {
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('default');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    popoverProps: {
      placement: 'left'
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      "aria-expanded": isOpen,
      onClick: onToggle
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
      justify: "left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalZStack, {
      offset: 10
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      colorValue: colorValue['default']
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      colorValue: colorValue['hover']
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", null, label))),
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      onSelect: tab => setActiveTab(tab),
      tabs: [{
        name: 'default',
        title: 'Default'
      }, {
        name: 'hover',
        title: 'Hover'
      }]
    }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
      __experimentalIsRenderedInSidebar: true,
      value: colorValue[tab.name] || '',
      onChange: color => {
        onChangeColor({
          ...colorValue,
          [tab.name]: color
        });
      },
      enableAlpha: true
    }))
  });
}
;

/**
 * Render Color Setting Control 
 */
function ColorControl() {
  const {
    colorSetting,
    setColorSetting
  } = (0,_data__WEBPACK_IMPORTED_MODULE_3__.useSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color'),
    hasInnerWrapper: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ls_gtp_color_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button'),
    hasValue: () => !!colorSetting.buttonColor
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControlDropdown, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button'),
    colorValue: colorSetting.buttonColor,
    onChangeColor: color => setColorSetting({
      ...colorSetting,
      buttonColor: color
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon'),
    hasValue: () => !!colorSetting.iconColor
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControlDropdown, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon'),
    colorValue: colorSetting.iconColor,
    onChangeColor: color => setColorSetting({
      ...colorSetting,
      iconColor: color
    })
  }))));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./src/control/dimension.js":
/*!**********************************!*\
  !*** ./src/control/dimension.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */



/**
 * Internal Dependencies
 */


/**
 * Render Dimension Setting Control
 */
function DimensionControl() {
  const {
    dimensionSetting,
    setDimensionSetting
  } = (0,_data__WEBPACK_IMPORTED_MODULE_3__.useSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dimension')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding'),
    hasValue: () => !!dimensionSetting.padding
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding'),
    values: dimensionSetting.padding,
    onChange: value => setDimensionSetting({
      ...dimensionSetting,
      padding: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin'),
    hasValue: () => !!dimensionSetting.margin
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin'),
    values: dimensionSetting.margin,
    onChange: value => setDimensionSetting({
      ...dimensionSetting,
      margin: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Size'),
    hasValue: () => !!dimensionSetting.iconSize
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Size'),
    fontSizes: [{
      name: 'Small',
      size: 12,
      slug: 'small'
    }, {
      name: 'Medium',
      size: 16,
      slug: 'medium'
    }, {
      name: 'Large',
      size: 22,
      slug: 'large'
    }, {
      name: 'Extra Large',
      size: 26,
      slug: 'extra-large'
    }],
    withSlider: true,
    value: dimensionSetting.iconSize,
    onChange: value => setDimensionSetting({
      ...dimensionSetting,
      iconSize: value
    })
  })));
}
;
/* harmony default export */ __webpack_exports__["default"] = (DimensionControl);

/***/ }),

/***/ "./src/control/general.js":
/*!********************************!*\
  !*** ./src/control/general.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component */ "./src/component/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */



/**
 * Internal Dependencies
 */



/**
 * Render General Setting  Control
 */
function GeneralControl() {
  const {
    generalSetting,
    setGeneralSetting
  } = (0,_data__WEBPACK_IMPORTED_MODULE_4__.useSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "General",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select an icon'),
    size: "__unstable-large",
    isBlock: true,
    value: generalSetting.selectedIcon,
    onChange: value => setGeneralSetting({
      ...generalSetting,
      selectedIcon: value
    })
  }, Object.keys(_component__WEBPACK_IMPORTED_MODULE_3__.icons).map(iconName => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOptionIcon, {
    key: iconName,
    icon: _component__WEBPACK_IMPORTED_MODULE_3__.icons[iconName],
    style: {
      width: '100%'
    },
    label: iconName,
    value: iconName
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Position'),
    isBlock: true,
    value: generalSetting.buttonPosition,
    onChange: value => setGeneralSetting({
      ...generalSetting,
      buttonPosition: value
    })
  }, ['Center', 'Left', 'Right'].map(position => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    key: position,
    label: position,
    value: position.toLowerCase()
  }))));
}
;
/* harmony default export */ __webpack_exports__["default"] = (GeneralControl);

/***/ }),

/***/ "./src/control/index.js":
/*!******************************!*\
  !*** ./src/control/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedControl: function() { return /* reexport safe */ _advanced__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   BorderControl: function() { return /* reexport safe */ _border__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   ColorControl: function() { return /* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   DimensionControl: function() { return /* reexport safe */ _dimension__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   GeneralControl: function() { return /* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   ResponsiveControl: function() { return /* reexport safe */ _responsive__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/control/general.js");
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimension */ "./src/control/dimension.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/control/color.js");
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border */ "./src/control/border.js");
/* harmony import */ var _advanced__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced */ "./src/control/advanced.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsive */ "./src/control/responsive.js");
/**
 * Export Control
 */







/***/ }),

/***/ "./src/control/responsive.js":
/*!***********************************!*\
  !*** ./src/control/responsive.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/data/index.js");

/**
 * WordPress dependencies.
 */



/**
 * Internal Dependencies
 */


/**
 * Render Responsive Setting Control
 */
function ResponsiveControl() {
  const {
    responsive,
    setResponsive
  } = (0,_data__WEBPACK_IMPORTED_MODULE_3__.useSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Responsive",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Mobile'),
    checked: responsive.mobile,
    onChange: value => setResponsive({
      ...responsive,
      mobile: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide on Deskptop"),
    checked: responsive.desktop,
    onChange: value => setResponsive({
      ...responsive,
      desktop: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide on Tablet"),
    checked: responsive.tablet,
    onChange: value => setResponsive({
      ...responsive,
      tablet: value
    })
  }));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveControl);

/***/ }),

/***/ "./src/data/context.js":
/*!*****************************!*\
  !*** ./src/data/context.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSettings: function() { return /* binding */ useSettings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies.
 */


/**
 * Context Component.
 */
const SettingsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useSettings() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(SettingsContext);
}
const SettingsProvider = ({
  children
}) => {
  const [enabled, setEnabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showNotice, setShowNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [disableButton, setDisableButton] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [generalSetting, setGeneralSetting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    selectedIcon: 'arrowUp',
    buttonPosition: 'center'
  });
  const [dimensionSetting, setDimensionSetting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    padding: {
      top: '18px',
      left: '18px',
      bottom: '18px',
      right: '18px'
    },
    margin: {
      top: '30px',
      left: '30px',
      bottom: '30px',
      right: '30px'
    }
  });
  const [colorSetting, setColorSetting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    buttonColor: {
      default: '#000',
      hover: '#000000D4'
    },
    iconColor: {
      default: '#fff'
    }
  });
  const [borderSetting, setBorderSetting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    radius: '100%'
  });
  const [advancedSetting, setAdvancedSetting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [responsive, setResponsive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SettingsContext.Provider, {
    value: {
      enabled,
      setEnabled,
      showNotice,
      setShowNotice,
      disableButton,
      setDisableButton,
      generalSetting,
      setGeneralSetting,
      dimensionSetting,
      setDimensionSetting,
      colorSetting,
      setColorSetting,
      borderSetting,
      setBorderSetting,
      advancedSetting,
      setAdvancedSetting,
      responsive,
      setResponsive
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (SettingsProvider);

/***/ }),

/***/ "./src/data/getSettings.js":
/*!*********************************!*\
  !*** ./src/data/getSettings.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/data/index.js");
/**
 * WordPress dependencies.
 */




/**
 * Internal Dependencies
 */


/**
 * Render to use saved settings
 */
function useSavedSettings() {
  const {
    setEnabled,
    generalSetting,
    setGeneralSetting,
    dimensionSetting,
    setDimensionSetting,
    colorSetting,
    setColorSetting,
    borderSetting,
    setBorderSetting,
    advancedSetting,
    setAdvancedSetting,
    responsive,
    setResponsive
  } = (0,___WEBPACK_IMPORTED_MODULE_3__.useSettings)();
  const result = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    return {
      data: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecord('root', 'site'),
      hasFinishedResolution: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).hasFinishedResolution('getEntityRecord', ['root', 'site'])
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (result.hasFinishedResolution) {
      const go2top = result.data?.go2top;
      if (go2top) {
        setEnabled(go2top.enabled);
        setGeneralSetting({
          ...generalSetting,
          ...go2top.generalSetting
        });
        setDimensionSetting({
          ...dimensionSetting,
          ...go2top.dimensionSetting
        });
        setColorSetting({
          ...colorSetting,
          ...go2top.colorSetting
        });
        setBorderSetting({
          ...borderSetting,
          ...go2top.borderSetting
        });
        setAdvancedSetting({
          ...advancedSetting,
          ...go2top.advancedSetting
        });
        setResponsive({
          ...responsive,
          ...go2top.responsive
        });
      }
    }
  }, [result.hasFinishedResolution]);
}
/* harmony default export */ __webpack_exports__["default"] = (useSavedSettings);

/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSavedSettings: function() { return /* reexport safe */ _getSettings__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   useSettings: function() { return /* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useSettings; }
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/data/context.js");
/* harmony import */ var _getSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSettings */ "./src/data/getSettings.js");
/**
 * Export Data
 */



/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _data_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/context */ "./src/data/context.js");




window.addEventListener('load', function () {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_data_context__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app__WEBPACK_IMPORTED_MODULE_1__["default"], null)), document.querySelector('#go-to-top'));
}, false);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map