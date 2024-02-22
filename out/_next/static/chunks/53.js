(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[53],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Button/Button.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Button/Button.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["alpha"])(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["alpha"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["alpha"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 15px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["alpha"])(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["alpha"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["alpha"])(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["alpha"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$disabled': {
        boxShadow: 'none'
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: 'inherit',
      marginRight: -4,
      marginLeft: 8,
      '&$iconSizeSmall': {
        marginRight: -2
      }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      '& > *:first-child': {
        fontSize: 18
      }
    },

    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: 20
      }
    },

    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      '& > *:first-child': {
        fontSize: 22
      }
    }
  };
};
var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Button(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  var startIcon = startIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.startIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(size))])
  }, startIconProp);
  var endIcon = endIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.endIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(size))])
  }, endIconProp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(size))], classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
 true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, no elevation is used.
   */
  disableElevation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Element placed after the children.
   */
  endIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['large', 'medium', 'small']),

  /**
   * Element placed before the children.
   */
  startIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'reset', 'submit']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['contained', 'outlined', 'text'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiButton'
})(Button));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Button/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Button/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js ***!
  \*********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");
/* harmony import */ var _TouchRipple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TouchRipple */ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js");













var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

var ButtonBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ButtonBase(props, ref) {
  var action = props.action,
      buttonRefProp = props.buttonRef,
      _props$centerRipple = props.centerRipple,
      centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      onDragLeave = props.onDragLeave,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

  var buttonRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  function getButtonNode() {
    // #StrictMode ready
    return react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](buttonRef.current);
  }

  var rippleRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  var _useIsFocusVisible = Object(_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
    return Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
      if (eventCallback) {
        eventCallback(event);
      }

      var ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  var handleMouseDown = useRippleHandler('start', onMouseDown);
  var handleDragLeave = useRippleHandler('stop', onDragLeave);
  var handleMouseUp = useRippleHandler('stop', onMouseUp);
  var handleMouseLeave = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler('start', onTouchStart);
  var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  var handleTouchMove = useRippleHandler('stop', onTouchMove);
  var handleBlur = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    if (isFocusVisible(event)) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  var isNonNativeButton = function isNonNativeButton() {
    var button = getButtonNode();
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  var keydownRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](false);
  var handleKeyDown = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  var buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }

    buttonProps['aria-disabled'] = disabled;
  }

  var handleUserRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__["default"])(buttonRefProp, ref);
  var handleOwnRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__["default"])(focusVisibleRef, buttonRef);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__["default"])(handleUserRef, handleOwnRef);

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(['Material-UI: The `component` prop provided to ButtonBase is invalid.', 'Please make sure the children prop is rendered in this custom component.'].join('\n'));
      }
    }, [enableTouchRipple]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ComponentProp, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick: onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ?
  /*#__PURE__*/

  /* TouchRipple is only needed client-side, x2 boost on the server. */
  react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TouchRipple__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
 true ? ButtonBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["refType"],

  /**
   * @ignore
   *
   * Use that prop to pass a ref to the native button component.
   * @deprecated Use `ref` instead.
   */
  buttonRef: Object(_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_9__["default"])(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["refType"], 'Use `ref` instead.'),

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["elementTypeAcceptingRef"],

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   */
  focusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onTouchEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onTouchMove: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'reset', 'submit']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__["default"])(styles, {
  name: 'MuiButtonBase'
})(ButtonBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");




var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  var classes = props.classes,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      inProp = props.in,
      _props$onExited = props.onExited,
      onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
      timeout = props.timeout;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      leaving = _React$useState[0],
      setLeaving = _React$useState[1];

  var rippleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

  useEnhancedEffect(function () {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true); // react-transition-group#onExited

      var timeoutId = setTimeout(handleExited, timeout);
      return function () {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [handleExited, inProp, timeout]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: childClassName
  }));
}

 true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
   * @ignore - injected from TransitionGroup
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * exit delay
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js ***!
  \**********************************************************************/
/*! exports provided: DELAY_RIPPLE, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_RIPPLE", function() { return DELAY_RIPPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Ripple */ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js");









var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit'
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

var TouchRipple = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function TouchRipple(props, ref) {
  var _props$center = props.center,
      centerProp = _props$center === void 0 ? false : _props$center,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["center", "classes", "className"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"]([]),
      ripples = _React$useState[0],
      setRipples = _React$useState[1];

  var nextKey = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](0);
  var rippleCallback = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  var ignoringMouseDown = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  var startTimer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null); // This is the hook called once the previous timeout is ready.

  var startTimerCommit = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var container = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (params) {
    var pulsate = params.pulsate,
        rippleX = params.rippleX,
        rippleY = params.rippleY,
        rippleSize = params.rippleSize,
        cb = params.cb;
    setRipples(function (oldRipples) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oldRipples), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Ripple__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: nextKey.current,
        classes: classes,
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var _options$pulsate = options.pulsate,
        pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
        _options$center = options.center,
        center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
        _options$fakeElement = options.fakeElement,
        fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    var rippleX;
    var rippleY;
    var rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = function () {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(function () {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize,
        cb: cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function () {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (event, cb) {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function () {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(function (oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return {
      pulsate: pulsate,
      start: start,
      stop: stop
    };
  }, [pulsate, start, stop]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className),
    ref: container
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_5__["TransitionGroup"], {
    component: null,
    exit: true
  }, ripples));
});
 true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["memo"](TouchRipple)));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ButtonBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Card/Card.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Card/Card.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Card(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
 true ? Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the card will use raised styling.
   */
  raised: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiCard'
})(Card));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Card/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Card/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Card__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardContent/CardContent.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CardContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other));
});
 true ? CardContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiCardContent'
})(CardContent));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CardContent/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardContent/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardContent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");









var TRANSITION_DURATION = 4; // seconds

var styles = function styles(theme) {
  var getColor = function getColor(color) {
    return theme.palette.type === 'light' ? Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["lighten"])(color, 0.62) : Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["darken"])(color, 0.5);
  };

  var backgroundPrimary = getColor(theme.palette.primary.main);
  var backgroundSecondary = getColor(theme.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 4,
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
    colorPrimary: {
      backgroundColor: backgroundPrimary
    },

    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
      backgroundColor: backgroundSecondary
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},

    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
      backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `variant="query"`. */
    query: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: '$buffer 3s infinite linear'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
      backgroundImage: "radial-gradient(".concat(backgroundPrimary, " 0%, ").concat(backgroundPrimary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
      backgroundImage: "radial-gradient(".concat(backgroundSecondary, " 0%, ").concat(backgroundSecondary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },

    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
      width: 'auto',
      animation: '$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },

    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
      zIndex: 1,
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
      width: 'auto',
      animation: '$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite'
    },

    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0 -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0 -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var LinearProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function LinearProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      value = props.value,
      valueBuffer = props.valueBuffer,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      var transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = "translateX(".concat(transform, "%)");
    } else if (true) {
      console.error('Material-UI: You need to provide a value prop ' + 'when using the determinate or buffer variant of LinearProgress .');
    }
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      var _transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        _transform = -_transform;
      }

      inlineStyles.bar2.transform = "translateX(".concat(_transform, "%)");
    } else if (true) {
      console.error('Material-UI: You need to provide a valueBuffer prop ' + 'when using the buffer variant of LinearProgress.');
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))], className, {
      'determinate': classes.determinate,
      'indeterminate': classes.indeterminate,
      'buffer': classes.buffer,
      'query': classes.query
    }[variant]),
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other), variant === 'buffer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.dashed, classes["dashedColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))])
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.bar, classes["barColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))], (variant === 'indeterminate' || variant === 'query') && classes.bar1Indeterminate, {
      'determinate': classes.bar1Determinate,
      'buffer': classes.bar1Buffer
    }[variant]),
    style: inlineStyles.bar1
  }), variant === 'determinate' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.bar, (variant === 'indeterminate' || variant === 'query') && classes.bar2Indeterminate, variant === 'buffer' ? [classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))], classes.bar2Buffer] : classes["barColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))]),
    style: inlineStyles.bar2
  }));
});
 true ? LinearProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['buffer', 'determinate', 'indeterminate', 'query'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiLinearProgress'
})(LinearProgress));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/LinearProgress/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/LinearProgress/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinearProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LinearProgress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
  \***********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['elevation', 'outlined'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Paper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, alpha, darken, lighten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return decomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return recomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return getContrastRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return emphasize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : undefined);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/*! exports provided: keys, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBreakpoints; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMixins; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, breakpoints.up('sm'), Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/*! exports provided: light, dark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPalette; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"][50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"][800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["lighten"])(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["darken"])(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_8__["default"][300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_8__["default"][500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_8__["default"][700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_10__["default"][300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_10__["default"][500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_10__["default"][700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["getContrastRatio"])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["getContrastRatio"])(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : undefined);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : undefined);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"],
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"],
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSpacing; });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/index.js");

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = Object(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["createUnarySpacing"])({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/*! exports provided: createMuiTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMuiTheme", function() { return createMuiTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = Object(_createPalette__WEBPACK_IMPORTED_MODULE_5__["default"])(paletteInput);
  var breakpoints = Object(_createBreakpoints__WEBPACK_IMPORTED_MODULE_3__["default"])(breakpointsInput);
  var spacing = Object(_createSpacing__WEBPACK_IMPORTED_MODULE_9__["default"])(spacingInput);
  var muiTheme = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: Object(_createMixins__WEBPACK_IMPORTED_MODULE_4__["default"])(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__["default"],
    typography: Object(_createTypography__WEBPACK_IMPORTED_MODULE_6__["default"])(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_8__["default"],
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__["default"],
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "&$".concat(key), child)
            }, null, 2), '', 'https://mui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTypography; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://mui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = Object(_createTheme__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/*! exports provided: easing, duration, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["useTheme"])() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalize; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : undefined);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deprecatedPropType; });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/setRef.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setRef; });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useEventCallback.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useForkRef.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForkRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__["default"])(refA, refValue);
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__["default"])(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js ***!
  \***********************************************************************/
/*! exports provided: teardown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teardown", function() { return teardown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIsFocusVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */

function focusTriggersKeyboardModality(node) {
  var type = node.type,
      tagName = node.tagName;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  var target = event.target;

  try {
    return target.matches(':focus-visible');
  } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
  // we use our own heuristic for those browsers
  // rethrow might be better if it's not the expected error but do we really
  // want to crash if focus-visible malfunctioned?
  // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
/**
 * Should be called if a blur event is fired on a focus-visible element
 */


function handleBlurVisible() {
  // To detect a tab/window switch, we look for a blur event followed
  // rapidly by a visibility change.
  // If we don't see a visibility change within 100ms, it's probably a
  // regular focus change.
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
    hadFocusVisibleRecently = false;
  }, 100);
}

function useIsFocusVisible() {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (instance) {
    var node = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance);

    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"](isFocusVisible);
  }

  return {
    isFocusVisible: isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref: ref
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerStyleSheets; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");








var ServerStyleSheets = /*#__PURE__*/function () {
  function ServerStyleSheets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ServerStyleSheets);

    this.options = options;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ServerStyleSheets, [{
    key: "collect",
    value: function collect(children) {
      // This is needed in order to deduplicate the injection of CSS in the page.
      var sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

      this.sheetsRegistry = new jss__WEBPACK_IMPORTED_MODULE_4__["SheetsRegistry"](); // A new class name generator

      var generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__["default"])();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StylesProvider__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        sheetsManager: sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('style', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        id: 'jss-server-side',
        key: 'jss-server-side',
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);

  return ServerStyleSheets;
}();



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js ***!
  \**************************************************************************************************************/
/*! exports provided: sheetsManager, StylesContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return sheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return StylesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StylesProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jssPreset */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js");







 // Default JSS instance.

var jss = Object(jss__WEBPACK_IMPORTED_MODULE_6__["create"])(Object(_jssPreset__WEBPACK_IMPORTED_MODULE_7__["default"])()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Exported for test purposes

var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(defaultOptions);

if (true) {
  StylesContext.displayName = 'StylesContext';
}

var injectFirstNode;
function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(StylesContext);

  var context = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);

  if (true) {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('Material-UI: You need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: You cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = Object(jss__WEBPACK_IMPORTED_MODULE_6__["create"])({
      plugins: Object(_jssPreset__WEBPACK_IMPORTED_MODULE_7__["default"])().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StylesContext.Provider, {
    value: context
  }, children);
}
 true ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * JSS's instance.
   */
  jss: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  serverGenerateClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;

if (true) {
   true ? StylesProvider.propTypes = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["exactProp"])(StylesProvider.propTypes) : undefined;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, sheetsManager, StylesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["StylesContext"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTheme/ThemeContext */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");






 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    if (true) {
      if (!mergedTheme) {
        console.error(['Material-UI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();

  if (true) {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['Material-UI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  var theme = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[_nested__WEBPACK_IMPORTED_MODULE_6__["default"]] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: theme
  }, children);
}

 true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired
} : undefined;

if (true) {
   true ? ThemeProvider.propTypes = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["exactProp"])(ThemeProvider.propTypes) : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ __webpack_exports__["default"] = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGenerateClassName; });
/* harmony import */ var _ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ThemeProvider/nested */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;

  var getNextCounterId = function getNextCounterId() {
    ruleCounter += 1;

    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: You might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    return ruleCounter;
  };

  return function (rule, styleSheet) {
    var name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[_ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__["default"]] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(getNextCounterId());
    }

    if (false) {}

    var suffix = "".concat(rule.key, "-").concat(getNextCounterId()); // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }

    return "".concat(seedPrefix).concat(suffix);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/createStyles.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/createStyles.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStylesCreator; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _noopTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noopTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");




function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  if (true) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(stylesOrCreator) !== 'object' && !themingEnabled) {
      console.error(['Material-UI: The `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === _noopTheme__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            // TODO: prepend error message/name instead
            console.error(['Material-UI: The `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles);

      Object.keys(overrides).forEach(function (key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: You are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
          }
        }

        stylesWithOverrides[key] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStylesCreator */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};
/* harmony default export */ __webpack_exports__["default"] = (noopTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getThemeProps; });
/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/index.js ***!
  \**************************************************************************************/
/*! exports provided: createGenerateClassName, createStyles, getThemeProps, jssPreset, makeStyles, mergeClasses, ServerStyleSheets, styled, StylesProvider, sheetsManager, StylesContext, ThemeProvider, useTheme, withStyles, withTheme, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemeProps", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeClasses", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["StylesContext"]; });

/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["withThemeCreator"]; });

/** @license Material-UI v4.11.5
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable import/export */

/* Warning if there are several instances of @material-ui/styles */

if ( true && typeof window !== 'undefined') {
  _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] = _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] || 0;

  if (_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] === 1) {
    console.warn(['It looks like there are several instances of `@material-ui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://mui.com/r/styles-instance-warning for more info.'].join('\n'));
  }

  _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] += 1;
}




























/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jssPreset; });
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/@material-ui/core/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-global */ "./node_modules/@material-ui/core/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-nested */ "./node_modules/@material-ui/core/node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/@material-ui/core/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/@material-ui/core/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/@material-ui/core/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/@material-ui/core/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js");






 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [Object(jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__["default"])(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : Object(jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__["default"])()]
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js ***!
  \********************************************************************************************************/
/*! exports provided: increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (true) {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mergeClasses */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js");
/* harmony import */ var _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiKeyStore */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _indexCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indexCounter */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js");
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../getStylesCreator */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/index.js");
/* harmony import */ var _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../getStylesCreator/noopTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");












function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_4__["default"])({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stylesCreator.options, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = Object(jss__WEBPACK_IMPORTED_MODULE_3__["getDynamicStyles"])(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_4__["default"])({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef([]);
  var output; // Store "generation" key. Just returns a new object every time

  var currentKey = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {};
  }, values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_10__["default"] : _options$defaultTheme,
      stylesOptions2 = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = Object(_getStylesCreator__WEBPACK_IMPORTED_MODULE_9__["default"])(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: Object(_indexCounter__WEBPACK_IMPORTED_MODULE_8__["increment"])(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };

  var useStyles = function useStyles() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])() || defaultTheme;

    var stylesOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_StylesProvider__WEBPACK_IMPORTED_MODULE_7__["StylesContext"]), stylesOptions2);

    var instance = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
    var shouldUpdate = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);

    if (true) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      react__WEBPACK_IMPORTED_MODULE_2___default.a.useDebugValue(classes);
    }

    return classes;
  };

  return useStyles;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Used https://github.com/thinkloop/multi-key-cache as inspiration
var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (multiKeyStore);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClasses; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");


function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseClasses);

  if (true) {
    if (typeof newClasses === 'string') {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(function (key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _styled__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/styled.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/styled.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return styled; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js");









function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["name"]);

    if ( true && Component === undefined) {
      throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FinalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: ref,
        className: className
      }, spread), children);
    });
     true ? StyledComponent.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      /**
       * A render function or node.
       */
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),

      /**
       * @ignore
       */
      className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

      /**
       * If `true`, the component will recycle it's children HTML element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, function (props) {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }

        return null;
      }),

      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
      /* @typescript-to-proptypes-ignore */
      .elementType
    }, propTypes) : undefined;

    if (true) {
      StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ThemeContext.displayName = 'ThemeContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/useTheme.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/useTheme.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");


function useTheme() {
  var theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/withStyles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/withStyles.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getThemeProps */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");








 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["defaultTheme", "withTheme", "name"]);

    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.


      var classes = useStyles(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Component.defaultProps, props));
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_8__["default"])() || defaultTheme;

        if (name) {
          more = Object(_getThemeProps__WEBPACK_IMPORTED_MODULE_7__["default"])({
            theme: theme,
            name: name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });
     true ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return null; // return new Error(
        //   'Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' +
        //     'Refs are now automatically forwarded to the inner component.',
        // );
      })
    } : undefined;

    if (true) {
      WithStyles.displayName = "WithStyles(".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }

    return WithStyles;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/index.js ***!
  \************************************************************************************************/
/*! exports provided: default, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/withTheme.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/withTheme.js ***!
  \****************************************************************************************************/
/*! exports provided: withThemeCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return withThemeCreator; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");







function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = options.defaultTheme;

  var withTheme = function withTheme(Component) {
    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var WithTheme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function WithTheme(props, ref) {
      var innerRef = props.innerRef,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["innerRef"]);

      var theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])() || defaultTheme;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        theme: theme,
        ref: innerRef || ref
      }, other));
    });
     true ? WithTheme.propTypes = {
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return new Error('Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' + 'Refs are now automatically forwarded to the inner component.');
      })
    } : undefined;

    if (true) {
      WithTheme.displayName = "WithTheme(".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

var withTheme = withThemeCreator();
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/borders.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/borders.js ***!
  \****************************************************************************************/
/*! exports provided: border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ __webpack_exports__["default"] = (borders);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/breakpoints.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/breakpoints.js ***!
  \********************************************************************************************/
/*! exports provided: handleBreakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleBreakpoints", function() { return handleBreakpoints; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/merge.js");




 // The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.

var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (true) {
    if (!props.theme) {
      console.error('Material-UI: You are calling a style function without a theme value.');
    }
  }

  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function (acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(propValue) === 'object') {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

    return Object.keys(propValue).reduce(function (acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  var output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var base = styleFunction(props);
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    var extended = themeBreakpoints.keys.reduce(function (acc, key) {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          theme: props.theme
        }, props[key]));
      }

      return acc;
    }, null);
    return Object(_merge__WEBPACK_IMPORTED_MODULE_4__["default"])(base, extended);
  };

  newStyleFunction.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styleFunction.propTypes, {
    xs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    sm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    md: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    lg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    xl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  }) : undefined;
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(styleFunction.filterProps));
  return newStyleFunction;
}

/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/merge.js");



function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return Object(_merge__WEBPACK_IMPORTED_MODULE_1__["default"])(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  true ? styles.reduce(function (acc, style) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(acc, style.propTypes);
  }, {}) : undefined;
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

/* harmony default export */ __webpack_exports__["default"] = (compose);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/display.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/display.js ***!
  \****************************************************************************************/
/*! exports provided: displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPrint", function() { return displayPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRaw", function() { return displayRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textOverflow", function() { return textOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteSpace", function() { return whiteSpace; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");


var displayPrint = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'display'
});
var overflow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'overflow'
});
var textOverflow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'textOverflow'
});
var visibility = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'visibility'
});
var whiteSpace = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'whiteSpace'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/flexbox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/flexbox.js ***!
  \****************************************************************************************/
/*! exports provided: flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return flexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return flexShrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");


var flexBasis = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexBasis'
});
var flexDirection = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexDirection'
});
var flexWrap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexWrap'
});
var justifyContent = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifyContent'
});
var alignItems = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignItems'
});
var alignContent = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignContent'
});
var order = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'order'
});
var flex = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flex'
});
var flexGrow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexGrow'
});
var flexShrink = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexShrink'
});
var alignSelf = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignSelf'
});
var justifyItems = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifyItems'
});
var justifySelf = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifySelf'
});
var flexbox = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/grid.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/grid.js ***!
  \*************************************************************************************/
/*! exports provided: gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");


var gridGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridGap'
});
var gridColumnGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridColumnGap'
});
var gridRowGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridRowGap'
});
var gridColumn = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridColumn'
});
var gridRow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridRow'
});
var gridAutoFlow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoColumns'
});
var gridAutoRows = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateAreas'
});
var gridArea = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridArea'
});
var grid = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ __webpack_exports__["default"] = (grid);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/index.js ***!
  \**************************************************************************************/
/*! exports provided: borders, border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius, breakpoints, compose, styleFunctionSx, css, display, flexbox, flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, grid, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, palette, color, bgcolor, positions, position, zIndex, top, right, bottom, left, shadows, sizing, width, maxWidth, minWidth, height, maxHeight, minHeight, sizeWidth, sizeHeight, boxSizing, spacing, createUnarySpacing, style, typography, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borders */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/borders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["border"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderRadius"]; });

/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/breakpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleFunctionSx */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/styleFunctionSx.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleFunctionSx", function() { return _styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__["css"]; });

/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "display", function() { return _display__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _flexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flexbox */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/flexbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifyContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "order", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["order"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexGrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexShrink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignSelf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifyItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifySelf"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridColumnGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridRowGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoFlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateAreas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridArea"]; });

/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./palette */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/palette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgcolor", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["bgcolor"]; });

/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./positions */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/positions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positions", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["zIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["left"]; });

/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/shadows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return _shadows__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sizing */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/sizing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizing", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "width", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["width"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["maxWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["minWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "height", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["height"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["maxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["minHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["sizeWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["sizeHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxSizing", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["boxSizing"]; });

/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spacing */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/spacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUnarySpacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_11__["createUnarySpacing"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _style__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typography */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontFamily"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["letterSpacing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["lineHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["textAlign"]; });

/** @license Material-UI v4.12.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
























/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/memoize.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/memoize.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/merge.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/merge.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");


function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

/* harmony default export */ __webpack_exports__["default"] = (merge);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/palette.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/palette.js ***!
  \****************************************************************************************/
/*! exports provided: color, bgcolor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgcolor", function() { return bgcolor; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");


var color = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(color, bgcolor);
/* harmony default export */ __webpack_exports__["default"] = (palette);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/positions.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/positions.js ***!
  \******************************************************************************************/
/*! exports provided: position, zIndex, top, right, bottom, left, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");


var position = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'position'
});
var zIndex = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var top = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'top'
});
var right = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'right'
});
var bottom = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'bottom'
});
var left = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'left'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(position, zIndex, top, right, bottom, left));

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/responsivePropType.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/responsivePropType.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var responsivePropType =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (responsivePropType);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/shadows.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/shadows.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");

var boxShadow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ __webpack_exports__["default"] = (boxShadow);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/sizing.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/sizing.js ***!
  \***************************************************************************************/
/*! exports provided: width, maxWidth, minWidth, height, maxHeight, minHeight, sizeWidth, sizeHeight, boxSizing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeWidth", function() { return sizeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeHeight", function() { return sizeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxSizing", function() { return boxSizing; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");



function transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'width',
  transform: transform
});
var maxWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'maxWidth',
  transform: transform
});
var minWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'minWidth',
  transform: transform
});
var height = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'height',
  transform: transform
});
var maxHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'maxHeight',
  transform: transform
});
var minHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'minHeight',
  transform: transform
});
var sizeWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'size',
  cssProperty: 'width',
  transform: transform
});
var sizeHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'size',
  cssProperty: 'height',
  transform: transform
});
var boxSizing = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'boxSizing'
});
var sizing = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ __webpack_exports__["default"] = (sizing);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/spacing.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/spacing.js ***!
  \****************************************************************************************/
/*! exports provided: createUnarySpacing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnarySpacing", function() { return createUnarySpacing; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _responsivePropType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsivePropType */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/responsivePropType.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/breakpoints.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/merge.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memoize */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/memoize.js");





var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

var getCssProperties = Object(_memoize__WEBPACK_IMPORTED_MODULE_4__["default"])(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  var _prop$split = prop.split(''),
      _prop$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return function (abs) {
      if (true) {
        if (typeof abs !== 'number') {
          console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs, "."));
        }
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return function (abs) {
      if (true) {
        if (abs > themeSpacing.length - 1) {
          console.error(["Material-UI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n'));
        }
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (true) {
    console.error(["Material-UI: The `theme.spacing` value (".concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n'));
  }

  return function () {
    return undefined;
  };
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }

  var abs = Math.abs(propValue);
  var transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return "-".concat(transformed);
}

function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}

function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function (prop) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_2__["handleBreakpoints"])(props, propValue, styleFromPropValue);
  }).reduce(_merge__WEBPACK_IMPORTED_MODULE_3__["default"], {});
}

spacing.propTypes =  true ? spacingKeys.reduce(function (obj, key) {
  obj[key] = _responsivePropType__WEBPACK_IMPORTED_MODULE_1__["default"];
  return obj;
}, {}) : undefined;
spacing.filterProps = spacingKeys;
/* harmony default export */ __webpack_exports__["default"] = (spacing);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _responsivePropType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsivePropType */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/responsivePropType.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/breakpoints.js");




function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, value);
    };

    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_2__["handleBreakpoints"])(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  true ? Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prop, _responsivePropType__WEBPACK_IMPORTED_MODULE_1__["default"]) : undefined;
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/styleFunctionSx.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/styleFunctionSx.js ***!
  \************************************************************************************************/
/*! exports provided: css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/merge.js");






function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

var warnedOnce = false;

function styleFunctionSx(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_merge__WEBPACK_IMPORTED_MODULE_4__["default"])(output, styleFunction(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    if (props.sx) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_merge__WEBPACK_IMPORTED_MODULE_4__["default"])(output, styleFunction(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        theme: props.theme
      }, props.sx))), omit(props.sx, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styleFunction.propTypes, {
    css: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, function (props) {
      if (!warnedOnce && props.css !== undefined) {
        warnedOnce = true;
        return new Error('Material-UI: The `css` prop is deprecated, please use the `sx` prop instead.');
      }

      return null;
    }),
    sx: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  }) : undefined;
  newStyleFunction.filterProps = ['css', 'sx'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(styleFunction.filterProps));
  return newStyleFunction;
}
/**
 *
 * @deprecated
 * The css style function is deprecated. Use the `styleFunctionSx` instead.
 */


function css(styleFunction) {
  if (true) {
    console.warn('Material-UI: The `css` function is deprecated. Use the `styleFunctionSx` instead.');
  }

  return styleFunctionSx(styleFunction);
}
/* harmony default export */ __webpack_exports__["default"] = (styleFunctionSx);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/typography.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/typography.js ***!
  \*******************************************************************************************/
/*! exports provided: fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/compose.js");


var fontFamily = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'letterSpacing'
});
var lineHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'lineHeight'
});
var textAlign = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'textAlign'
});
var typography = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ __webpack_exports__["default"] = (typography);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");


/**
 * Convert camel cased property names to dash separated.
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (camelCase);


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-decoration-thickness': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'row-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */

function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    } // eslint-disable-next-line no-restricted-globals

  } else if (typeof value === 'number' && isNaN(value) === false) {
    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js");



var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss__WEBPACK_IMPORTED_MODULE_1__["RuleList"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Replace rule, run plugins.
   */
  ;

  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (!options.selector && options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssGlobal);


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");



var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        return rule.selector;
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : undefined;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        var name = styleRule.key + "-" + prop;

        if ('replaceRule' in container) {
          // for backward compatibility
          container.replaceRule(name, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
            selector: selector
          }));
        } else {
          container.addRule(name, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
            selector: selector
          }));
        }
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssNested);


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js");



var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_1__["createRule"])(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      }

      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
               true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, '[JSS] Function values inside function rules are not supported.') : undefined;
              break;
            }
          }
        }
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (functionPlugin);


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/dist/css-vendor.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js");



/**
 * Add vendor prefix to a property name when needed.
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedKeyframes"])(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedProperty"])(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(supportedProp, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(prop, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssVendorPrefixer);


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss/dist/jss.esm.js ***!
  \*************************************************************************/
/*! exports provided: default, RuleList, SheetsManager, SheetsRegistry, create, createGenerateId, createRule, getDynamicStyles, hasCSSTOMSupport, sheets, toCssValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleList", function() { return RuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsManager", function() { return SheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return SheetsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return createJss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return createGenerateId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRule", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDynamicStyles", function() { return getDynamicStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCSSTOMSupport", function() { return hasCSSTOMSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheets", function() { return sheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCssValue", function() { return toCssValue; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown rule " + name) : undefined;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts JSS array value to a CSS string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


var toCssValue = function toCssValue(value) {
  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: '',
      space: ''
    };
  }

  return {
    linebreak: '\n',
    space: ' '
  };
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */

function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;

  if (options.format === false) {
    indent = -Infinity;
  }

  var _getWhitespaceSymbols = getWhitespaceSymbols(options),
      linebreak = _getWhitespaceSymbols.linebreak,
      space = _getWhitespaceSymbols.space;

  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : undefined;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(key, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Replace rule, run plugins.
   */
  ;

  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@container|@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Bad keyframes name " + key) : undefined;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : undefined;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var pluginKeyframesRule = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += linebreak;
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Replace rule.
   * Create a new rule and remove old one instead of overwriting
   * because we want to invoke onCreateRule hook to make plugins work.
   */
  ;

  _proto.replace = function replace(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);

    if (oldRule) {
      this.remove(oldRule);
    }

    var options = ruleOptions;
    if (oldIndex !== -1) options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ruleOptions, {
      index: oldIndex
    });
    return this.add(name, decl, options);
  }
  /**
   * Get a rule by name or selector.
   */
  ;

  _proto.get = function get(nameOrSelector) {
    return this.map[nameOrSelector];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0];
      data = arguments.length <= 1 ? undefined : arguments[1];
      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0];
      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.get(name), data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var style = rule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== rule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(rule.style, rule, sheet); // Update and add props.

      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += linebreak;
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Replace a rule in the current stylesheet.
   */
  ;

  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule) return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);

    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }

    if (this.attached) {
      if (!this.deployed) return newRule; // Don't replace / delete rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }

      return newRule;
    } // We can't replace rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return newRule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name or selector.
   */
  ;

  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown hook \"" + name + "\".") : undefined;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access all instances in one place.
 */

var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["attached"]);

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += linebreak;
      css += sheet.toString(options);
    }

    return css;
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */

/**
 * Now that `globalThis` is available on most platforms
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
 * we check for `globalThis` first. `globalThis` is necessary for jss
 * to run in Agoric's secure version of JavaScript (SES). Under SES,
 * `globalThis` exists, but `window`, `self`, and `Function('return
 * this')()` are all undefined for security reasons.
 *
 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */
var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis$1[ns]++;

var maxRules = 1e10;
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;

  var generateId = function generateId(rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : undefined;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };

  return generateId;
};

/**
 * Cache the value from the first time a function is called.
 */

var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};
/**
 * Set a style property.
 */


var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value);
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      var indexOfImportantFlag = cssValue ? cssValue.indexOf('!important') : -1;
      var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
      cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? 'important' : '');
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};
/**
 * Remove a style property.
 */


var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : undefined;
  }
};
/**
 * Set the selector.
 */


var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}
/**
 * Find a node before which we can insert the sheet.
 */


function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : undefined;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Insertion point is not in the DOM.') : undefined;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      container.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        container.appendRule(rule);
      }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] " + err.message) : undefined;
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules.splice(index, 0, cssRule);
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.10.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__["default"] ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

var createJss = function createJss(options) {
  return new Jss(options);
};

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 * Used in react-jss.
 */

var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
* Export a constant indicating if this browser has CSSTOM support.
* https://developers.google.com/web/updates/2018/03/cssom
*/
var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
var index = createJss();

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/HTMLElementType.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/HTMLElementType.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLElementType; });
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/chainPropTypes.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/chainPropTypes.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chainPropTypes; });
function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/deepmerge.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/deepmerge.js ***!
  \**********************************************************/
/*! exports provided: isPlainObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepmerge; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


function isPlainObject(item) {
  return item && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(item) === 'object' && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/elementAcceptingRef.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  var element = props[propName];
  var safePropName = propFullName || propName;

  if (element == null) {
    return null;
  }

  var warningHint;
  var elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }

  return null;
}

var elementAcceptingRef = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, acceptingRef);
elementAcceptingRef.isRequired = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element.isRequired, acceptingRef);
/* harmony default export */ __webpack_exports__["default"] = (elementAcceptingRef);

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  var warningHint;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof propValue === 'function' && !isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["elementType"], elementTypeAcceptingRef));

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/exactProp.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/exactProp.js ***!
  \**********************************************************/
/*! exports provided: specialProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialProperty", function() { return specialProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exactProp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (false) {}

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, propTypes, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatMuiErrorMessage; });
/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  var url = 'https://mui.com/production-error/?code=' + code;

  for (var i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/getDisplayName.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/getDisplayName.js ***!
  \***************************************************************/
/*! exports provided: getFunctionName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDisplayName; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);

 // Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */

function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(Component) === 'object') {
    switch (Component.$$typeof) {
      case react_is__WEBPACK_IMPORTED_MODULE_1__["ForwardRef"]:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case react_is__WEBPACK_IMPORTED_MODULE_1__["Memo"]:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/index.js ***!
  \******************************************************/
/*! exports provided: chainPropTypes, deepmerge, elementAcceptingRef, elementTypeAcceptingRef, exactProp, formatMuiErrorMessage, getDisplayName, HTMLElementType, ponyfillGlobal, refType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainPropTypes", function() { return _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepmerge */ "./node_modules/@material-ui/utils/esm/deepmerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepmerge", function() { return _deepmerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementAcceptingRef */ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAcceptingRef", function() { return _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementTypeAcceptingRef */ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementTypeAcceptingRef", function() { return _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _exactProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exactProp */ "./node_modules/@material-ui/utils/esm/exactProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exactProp", function() { return _exactProp__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatMuiErrorMessage */ "./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMuiErrorMessage", function() { return _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDisplayName */ "./node_modules/@material-ui/utils/esm/getDisplayName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return _getDisplayName__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTMLElementType */ "./node_modules/@material-ui/utils/esm/HTMLElementType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLElementType", function() { return _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ponyfillGlobal */ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _refType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refType */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refType", function() { return _refType__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/** @license Material-UI v4.11.3
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */











/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/ponyfillGlobal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
/* harmony default export */ __webpack_exports__["default"] = (typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')());

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/refType.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/refType.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var refType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]);
/* harmony default export */ __webpack_exports__["default"] = (refType);

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: clsx, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clsx", function() { return clsx; });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ __webpack_exports__["default"] = (clsx);

/***/ }),

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/dist/css-vendor.esm.js ***!
  \********************************************************/
/*! exports provided: prefix, supportedKeyframes, supportedProperty, supportedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedKeyframes", function() { return supportedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedProperty", function() { return supportedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedValue", function() { return supportedValue; });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"] && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(p.noPrefill));
  return a;
}, []);

var el;
var cache = {};

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}




/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./pages/profile/GetPoint.js":
/*!***********************************!*\
  !*** ./pages/profile/GetPoint.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/css/mine.css */ "./static/css/mine.css");
/* harmony import */ var _static_css_mine_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_mine_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_DataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/DataService */ "./model/DataService.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _model_Req__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../model/Req */ "./model/Req.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }









var vm = null;
var GetPoint = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GetPoint, _Component);
  function GetPoint(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetPoint);
    _this = _callSuper(this, GetPoint, [props]);
    vm = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this);
    _this.state = {
      chargeHistory: _model_DataService__WEBPACK_IMPORTED_MODULE_8__["dataService"].chargeHistory,
      content_continue_cnt: 0,
      review_continue_cnt: 0,
      advert_continue_cnt: 0,
      follow_continue_cnt: 0,
      invite_continue_cnt: 0,
      attendBtnDisabled: false
    };
    if (!_this.props.setting || !_this.props.setting.data) {
      _this.props.getSetting();
    }
    return _this;
  }
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GetPoint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _model_DataService__WEBPACK_IMPORTED_MODULE_8__["dataService"].get_free_point_info().then(function (res) {
        vm.setState({
          content_continue_cnt: res.content ? res.content : 0,
          review_continue_cnt: res.review ? res.review : 0,
          advert_continue_cnt: res.advert ? res.advert : 0,
          follow_continue_cnt: res.follow ? res.follow : 0,
          invite_continue_cnt: res.invite ? res.invite : 0
        });
      }, function (err) {
        console.log(err);
      });
    }
  }, {
    key: "exchangeMoney",
    value: function exchangeMoney(money) {
      alert(money);
    }
  }, {
    key: "funcClickAttend",
    value: function funcClickAttend() {
      var _this2 = this;
      var _this$props = this.props,
        updateMi = _this$props.updateMi,
        system = _this$props.system,
        setAppModalState = _this$props.setAppModalState,
        t = _this$props.t;
      var token = system && system.ai && system.ai.token;
      if (!token) {
        console.log('nothing token....');
        return;
      }
      Object(_model_Req__WEBPACK_IMPORTED_MODULE_14__["httpReq"])('/api/user/present', 'post', {
        token: token
      }).then(function (res) {
        if (res.msg === 'done') {
          setAppModalState('alert', t('MISSION_SUCCESS'));
        } else if (res.msg === 'same day') {
          setAppModalState('alert', t('ALREADY_ATTEND'));
        } else if (res.result) {
          updateMi({
            stat: {
              login_continue: res.result
            }
          });
        }
        _this2.setState({
          attendBtnDisabled: !_this2.state.attendBtnDisabled
        });
        console.log('funcClickAttend success', res);
      }, function (err) {
        console.log('httpReq err', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props$setting$d = this.props.setting.data,
        point_content = _this$props$setting$d.point_content,
        point_content_cnt = _this$props$setting$d.point_content_cnt,
        point_review = _this$props$setting$d.point_review,
        point_review_cnt = _this$props$setting$d.point_review_cnt,
        point_advert = _this$props$setting$d.point_advert,
        point_advert_cnt = _this$props$setting$d.point_advert_cnt,
        point_attend = _this$props$setting$d.point_attend,
        point_invite = _this$props$setting$d.point_invite,
        point_follow = _this$props$setting$d.point_follow,
        point_follow_cnt = _this$props$setting$d.point_follow_cnt,
        _this$props2 = this.props,
        mi = _this$props2.mi,
        t = _this$props2.t;
      var totalGetPoint = 0;
      for (var index in point_attend) {
        totalGetPoint += point_attend[index].point;
      }
      var total_attend_day = point_attend && point_attend[point_attend.length - 1] && point_attend[point_attend.length - 1].day;
      var today_get_point_attend = 0;
      var total_get_point_login = 0;
      for (var _index in point_attend) {
        total_get_point_login = point_attend[_index] && point_attend[_index].point ? point_attend[_index].point : 0;
      }
      if (mi && mi.stat && mi.stat.login_continue !== undefined) {
        var today_attend_data = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(point_attend && point_attend ? point_attend : [], {
          day: mi.stat.login_continue + 1
        });
        today_get_point_attend = today_attend_data ? today_attend_data.point : 0;
      }
      return __jsx("div", {
        className: "div_column"
      }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          backgroundColor: 'rgba(255,170,194,0.48)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row"
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('EVERYDAYLOGIN', {
        day: total_attend_day,
        checked_day: mi && mi.stat && mi.stat.login_continue ? mi.stat.login_continue : 0
      }) + t('TOTAL_POINT', {
        point: total_get_point_login
      }))), __jsx("div", {
        className: "div_row align-items-center justify-content-between"
      }, __jsx("h5", {
        style: {
          margin: '5px 0'
        }
      }, t('GET_POINT_ATTEND', {
        point: today_get_point_attend
      })))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: 'center'
        },
        className: "div_column"
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: this.state.attendBtnDisabled,
        onClick: function onClick() {
          _this3.funcClickAttend();
        }
      }, t('CHECK_ATTEND')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          backgroundColor: 'rgba(255,170,194,0.48)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row"
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('RECOMMEND_USER', {
        user_cnt: this.state.invite_continue_cnt
      }))), __jsx("div", {
        className: "div_row align-items-center justify-content-between"
      }, __jsx("h5", {
        style: {
          margin: '5px 0'
        }
      }, t('RECOMMEND_USER_ALERT', {
        coin: point_invite
      })))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_invite * this.state.invite_continue_cnt + t('COIN')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(143,241,255,0.6)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('MAKESOCIAL', {
        total_cnt: point_content_cnt ? point_content_cnt : 10,
        content_cnt: this.state.content_continue_cnt
      }))), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.content_continue_cnt / (point_content_cnt ? point_content_cnt : 10) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('MAKE_SOCIAL_ALERT', {
        cnt: point_content_cnt,
        point: point_content_cnt * point_content
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_content * this.state.content_continue_cnt + t('POINT')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(155,232,183,0.58)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('MAKECOMMEN', {
        total_cnt: point_review_cnt,
        comment_cnt: this.state.review_continue_cnt
      }))), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.review_continue_cnt / (point_review_cnt ? point_review_cnt : 10) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('MAKE_COMMENT_ALERT', {
        comment_cnt: point_review_cnt,
        total_point: point_review_cnt * point_review
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_review * this.state.review_continue_cnt + t('POINT')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(255,219,171,0.58)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('SHOW_ADVERT', {
        advert_cnt: this.state.advert_continue_cnt,
        total_cnt: point_advert_cnt
      }))), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.advert_continue_cnt / (point_advert_cnt ? point_advert_cnt : 10) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('SHOW_ADVERT_ALERT', {
        total_point: point_advert_cnt * point_advert
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_advert * this.state.advert_continue_cnt + t('POINT')))))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "border-0",
        style: {
          margin: 10
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "p-0",
        style: {
          backgroundColor: 'rgba(143,241,255,0.6)',
          padding: 15
        }
      }, __jsx("div", {
        className: "align-items-center div_row",
        style: {
          marginTop: 5
        }
      }, __jsx("div", {
        className: "div_column",
        style: {
          flex: 10
        }
      }, __jsx("div", {
        className: "div_row align-items-center"
      }, __jsx("h3", {
        style: {
          margin: '5px 0'
        }
      }, t('FOLLOW') + '(' + "".concat(this.state.follow_continue_cnt, "/").concat(point_follow_cnt ? point_follow_cnt : 123) + ')')), __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          height: 10,
          marginRight: 5
        },
        color: "secondary",
        variant: "determinate",
        value: this.state.follow_continue_cnt / (point_follow_cnt ? point_follow_cnt : 123) * 100
      }), __jsx("h5", {
        style: {
          margin: '10px 0 0 0'
        }
      }, t('FOLLOW_ALERT', {
        user_cnt: point_follow_cnt ? point_follow_cnt : 123,
        total_point: (point_follow_cnt ? point_follow_cnt : 123) * point_follow
      }))), __jsx("div", {
        style: {
          flex: 1,
          alignItems: "center"
        },
        className: "div_column"
      }, t('GAINS'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        disabled: true
      }, point_follow * this.state.follow_continue_cnt + t('POINT')))))));
    }
  }]);
  return GetPoint;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (GetPoint);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbkJhc2UvQnV0dG9uQmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25CYXNlL1JpcHBsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25CYXNlL1RvdWNoUmlwcGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0J1dHRvbkJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZC9DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0NhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZENvbnRlbnQvQ2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZENvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGluZWFyUHJvZ3Jlc3MvTGluZWFyUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGluZWFyUHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUGFwZXIvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUGFwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2dyZXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2luZGlnby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvb3JhbmdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9waW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9yZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVNaXhpbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVBhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUeXBvZ3JhcGh5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9kZWZhdWx0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYWRvd3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvdXNlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3pJbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jYXBpdGFsaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2RlcHJlY2F0ZWRQcm9wVHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9zZXRSZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlRXZlbnRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy91c2VGb3JrUmVmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3VzZUlzRm9jdXNWaXNpYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1NlcnZlclN0eWxlU2hlZXRzL1NlcnZlclN0eWxlU2hlZXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1NlcnZlclN0eWxlU2hlZXRzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1N0eWxlc1Byb3ZpZGVyL1N0eWxlc1Byb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1N0eWxlc1Byb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1RoZW1lUHJvdmlkZXIvVGhlbWVQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9UaGVtZVByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1RoZW1lUHJvdmlkZXIvbmVzdGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2NyZWF0ZVN0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vY3JlYXRlU3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFN0eWxlc0NyZWF0b3IvZ2V0U3R5bGVzQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9nZXRTdHlsZXNDcmVhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFRoZW1lUHJvcHMvZ2V0VGhlbWVQcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9nZXRUaGVtZVByb3BzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2pzc1ByZXNldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9qc3NQcmVzZXQvanNzUHJlc2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21ha2VTdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vbWFrZVN0eWxlcy9pbmRleENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vbWFrZVN0eWxlcy9tYWtlU3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21ha2VTdHlsZXMvbXVsdGlLZXlTdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9tZXJnZUNsYXNzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vbWVyZ2VDbGFzc2VzL21lcmdlQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9zdHlsZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vc3R5bGVkL3N0eWxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS91c2VUaGVtZS9UaGVtZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vdXNlVGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vdXNlVGhlbWUvdXNlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vd2l0aFN0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS93aXRoU3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vd2l0aFRoZW1lL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL3dpdGhUaGVtZS93aXRoVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vYm9yZGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS9icmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS9jb21wb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vZmxleGJveC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS9ncmlkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vcmVzcG9uc2l2ZVByb3BUeXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL3NoYWRvd3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vc2l6aW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL3NwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vc3R5bGVGdW5jdGlvblN4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL3R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1jYW1lbC1jYXNlL2Rpc3QvanNzLXBsdWdpbi1jYW1lbC1jYXNlLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWRlZmF1bHQtdW5pdC9kaXN0L2pzcy1wbHVnaW4tZGVmYXVsdC11bml0LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWdsb2JhbC9kaXN0L2pzcy1wbHVnaW4tZ2xvYmFsLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLW5lc3RlZC9kaXN0L2pzcy1wbHVnaW4tbmVzdGVkLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXByb3BzLXNvcnQvZGlzdC9qc3MtcGx1Z2luLXByb3BzLXNvcnQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbi9kaXN0L2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbi5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi12ZW5kb3ItcHJlZml4ZXIvZGlzdC9qc3MtcGx1Z2luLXZlbmRvci1wcmVmaXhlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvanNzL2Rpc3QvanNzLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vSFRNTEVsZW1lbnRUeXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9jaGFpblByb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vZGVlcG1lcmdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9lbGVtZW50QWNjZXB0aW5nUmVmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9lbGVtZW50VHlwZUFjY2VwdGluZ1JlZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vZXhhY3RQcm9wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9mb3JtYXRNdWlFcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2dldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vcG9ueWZpbGxHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL3JlZlR5cGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY3NzLXZlbmRvci9kaXN0L2Nzcy12ZW5kb3IuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pcy1pbi1icm93c2VyL2Rpc3QvbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9HZXRQb2ludC5qcyJdLCJuYW1lcyI6WyJ2bSIsIkdldFBvaW50IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInN0YXRlIiwiY2hhcmdlSGlzdG9yeSIsImRhdGFTZXJ2aWNlIiwiY29udGVudF9jb250aW51ZV9jbnQiLCJyZXZpZXdfY29udGludWVfY250IiwiYWR2ZXJ0X2NvbnRpbnVlX2NudCIsImZvbGxvd19jb250aW51ZV9jbnQiLCJpbnZpdGVfY29udGludWVfY250IiwiYXR0ZW5kQnRuRGlzYWJsZWQiLCJzZXR0aW5nIiwiZGF0YSIsImdldFNldHRpbmciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0X2ZyZWVfcG9pbnRfaW5mbyIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImNvbnRlbnQiLCJyZXZpZXciLCJhZHZlcnQiLCJmb2xsb3ciLCJpbnZpdGUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXhjaGFuZ2VNb25leSIsIm1vbmV5IiwiYWxlcnQiLCJmdW5jQ2xpY2tBdHRlbmQiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsInVwZGF0ZU1pIiwic3lzdGVtIiwic2V0QXBwTW9kYWxTdGF0ZSIsInQiLCJ0b2tlbiIsImFpIiwiaHR0cFJlcSIsIm1zZyIsInJlc3VsdCIsInN0YXQiLCJsb2dpbl9jb250aW51ZSIsInJlbmRlciIsIl90aGlzMyIsIl90aGlzJHByb3BzJHNldHRpbmckZCIsInBvaW50X2NvbnRlbnQiLCJwb2ludF9jb250ZW50X2NudCIsInBvaW50X3JldmlldyIsInBvaW50X3Jldmlld19jbnQiLCJwb2ludF9hZHZlcnQiLCJwb2ludF9hZHZlcnRfY250IiwicG9pbnRfYXR0ZW5kIiwicG9pbnRfaW52aXRlIiwicG9pbnRfZm9sbG93IiwicG9pbnRfZm9sbG93X2NudCIsIl90aGlzJHByb3BzMiIsIm1pIiwidG90YWxHZXRQb2ludCIsImluZGV4IiwicG9pbnQiLCJ0b3RhbF9hdHRlbmRfZGF5IiwibGVuZ3RoIiwiZGF5IiwidG9kYXlfZ2V0X3BvaW50X2F0dGVuZCIsInRvdGFsX2dldF9wb2ludF9sb2dpbiIsInVuZGVmaW5lZCIsInRvZGF5X2F0dGVuZF9kYXRhIiwiX2xvZGFzaCIsImZpbmQiLCJfX2pzeCIsImNsYXNzTmFtZSIsIkNhcmQiLCJzdHlsZSIsIm1hcmdpbiIsIkNhcmRDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImZsZXgiLCJjaGVja2VkX2RheSIsImFsaWduSXRlbXMiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidXNlcl9jbnQiLCJjb2luIiwibWFyZ2luVG9wIiwidG90YWxfY250IiwiY29udGVudF9jbnQiLCJMaW5lYXJQcm9ncmVzcyIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJjbnQiLCJjb21tZW50X2NudCIsInRvdGFsX3BvaW50IiwiYWR2ZXJ0X2NudCIsImNvbmNhdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUE2RTtBQUM5RDtBQUNmO0FBQ0EsZUFBZSxnRkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUNoQztBQUMzQjtBQUNJO0FBQ1g7QUFDc0I7QUFDSztBQUNaO0FBQ007QUFD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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFD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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtGQUFRLEdBQUc7QUFDakM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsMkJBQTJCO0FBQ3BELHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isa0ZBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWU7QUFDcEI7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxrRkFBUSxHQUFHO0FBQzlDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtGQUFRLEdBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1Q0FBdUM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHdDQUF3QztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHlDQUF5QztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix5Q0FBeUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEs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QkFBZ0IsR0FBQyxHQUFHLENBQUMsR0FBQztNQUFJLENBQUUsQ0FBQyxFQUNoTGUsS0FBQTtRQUFJRyxLQUFLLEVBQUU7VUFBQ0MsTUFBTSxFQUFDO1FBQVk7TUFBRSxHQUFFdkMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtRQUFDa0QsUUFBUSxFQUFDOUIsZ0JBQWdCLEdBQUNBLGdCQUFnQixHQUFDLEdBQUc7UUFBRXlDLFdBQVcsRUFBQyxDQUFDekMsZ0JBQWdCLEdBQUNBLGdCQUFnQixHQUFDLEdBQUcsSUFBRUQ7TUFBWSxDQUFDLENBQU0sQ0FDNUssQ0FBQyxFQUNOZ0IsS0FBQTtRQUFLRyxLQUFLLEVBQUU7VUFBQ0ssSUFBSSxFQUFDLENBQUM7VUFBRUUsVUFBVSxFQUFDO1FBQVEsQ0FBRTtRQUFDVCxTQUFTLEVBQUM7TUFBWSxHQUM1RHBDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFDWG1DLEtBQUEsQ0FBQ1csaUVBQU07UUFBQ0MsT0FBTyxFQUFDLFVBQVU7UUFBQ0MsUUFBUTtNQUFBLEdBQzdCN0IsWUFBWSxHQUFDLElBQUksQ0FBQ3hELEtBQUssQ0FBQ00sbUJBQW1CLEdBQUkrQixDQUFDLENBQUMsT0FBTyxDQUN0RCxDQUNQLENBQ0osQ0FDSSxDQUNYLENBQ0wsQ0FBQztJQUVkO0VBQUM7RUFBQSxPQUFBN0MsUUFBQTtBQUFBLEVBL09rQjZHLCtDQUFTO0FBa1BqQjdHLHVFQUFRLEVBQUMiLCJmaWxlIjoic3RhdGljL2NodW5rcy81My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBhbHBoYSB9IGZyb20gJy4uL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJy4uL0J1dHRvbkJhc2UnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLCB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1pbldpZHRoOiA2NCxcbiAgICAgIHBhZGRpbmc6ICc2cHggMTZweCcsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQtY29sb3InLCAnYm94LXNoYWRvdycsICdib3JkZXInXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRcbiAgICAgIH0pLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkXG4gICAgICB9XG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc3BhbiBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIGNoaWxkcmVuLiAqL1xuICAgIGxhYmVsOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgLy8gRW5zdXJlIHRoZSBjb3JyZWN0IHdpZHRoIGZvciBpT1MgU2FmYXJpXG4gICAgICBkaXNwbGF5OiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJ0ZXh0XCJgLiAqL1xuICAgIHRleHQ6IHtcbiAgICAgIHBhZGRpbmc6ICc2cHggOHB4J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwidGV4dFwiYCBhbmQgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICB0ZXh0UHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwidGV4dFwiYCBhbmQgYGNvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIHRleHRTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJPcGFjaXR5KSxcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgcGFkZGluZzogJzVweCAxNXB4JyxcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdyZ2JhKDAsIDAsIDAsIDAuMjMpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpJyksXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgb3V0bGluZWRQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdChhbHBoYSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC41KSksXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgb3V0bGluZWRTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYWxwaGEodGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgMC41KSksXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJPcGFjaXR5KSxcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiY29udGFpbmVkXCJgLiAqL1xuICAgIGNvbnRhaW5lZDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzMwMF0sXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMl0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXkuQTEwMCxcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzRdLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzMwMF1cbiAgICAgICAgfSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZEJhY2tncm91bmRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzVmlzaWJsZSc6IHtcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzZdXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbOF1cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkLFxuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29udGFpbmVkUHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImNvbnRhaW5lZFwiYCBhbmQgYGNvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIGNvbnRhaW5lZFNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlRWxldmF0aW9uPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZUVsZXZhdGlvbjoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c1Zpc2libGUnOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgQnV0dG9uQmFzZSByb290IGVsZW1lbnQgaWYgdGhlIGJ1dHRvbiBpcyBrZXlib2FyZCBmb2N1c2VkLiAqL1xuICAgIGZvY3VzVmlzaWJsZToge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiaW5oZXJpdFwiYC4gKi9cbiAgICBjb2xvckluaGVyaXQ6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cInNtYWxsXCJgIGFuZCBgdmFyaWFudD1cInRleHRcImAuICovXG4gICAgdGV4dFNpemVTbWFsbDoge1xuICAgICAgcGFkZGluZzogJzRweCA1cHgnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cImxhcmdlXCJgIGFuZCBgdmFyaWFudD1cInRleHRcImAuICovXG4gICAgdGV4dFNpemVMYXJnZToge1xuICAgICAgcGFkZGluZzogJzhweCAxMXB4JyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYCBhbmQgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZFNpemVTbWFsbDoge1xuICAgICAgcGFkZGluZzogJzNweCA5cHgnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cImxhcmdlXCJgIGFuZCBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkU2l6ZUxhcmdlOiB7XG4gICAgICBwYWRkaW5nOiAnN3B4IDIxcHgnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cInNtYWxsXCJgIGFuZCBgdmFyaWFudD1cImNvbnRhaW5lZFwiYC4gKi9cbiAgICBjb250YWluZWRTaXplU21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICc0cHggMTBweCcsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEzKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzaXplPVwibGFyZ2VcImAgYW5kIGB2YXJpYW50PVwiY29udGFpbmVkXCJgLiAqL1xuICAgIGNvbnRhaW5lZFNpemVMYXJnZToge1xuICAgICAgcGFkZGluZzogJzhweCAyMnB4JyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYC4gKi9cbiAgICBzaXplU21hbGw6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cImxhcmdlXCJgLiAqL1xuICAgIHNpemVMYXJnZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBmdWxsV2lkdGg6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHN0YXJ0SWNvbiBlbGVtZW50IGlmIHN1cHBsaWVkLiAqL1xuICAgIHN0YXJ0SWNvbjoge1xuICAgICAgZGlzcGxheTogJ2luaGVyaXQnLFxuICAgICAgbWFyZ2luUmlnaHQ6IDgsXG4gICAgICBtYXJnaW5MZWZ0OiAtNCxcbiAgICAgICcmJGljb25TaXplU21hbGwnOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IC0yXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBlbmRJY29uIGVsZW1lbnQgaWYgc3VwcGxpZWQuICovXG4gICAgZW5kSWNvbjoge1xuICAgICAgZGlzcGxheTogJ2luaGVyaXQnLFxuICAgICAgbWFyZ2luUmlnaHQ6IC00LFxuICAgICAgbWFyZ2luTGVmdDogOCxcbiAgICAgICcmJGljb25TaXplU21hbGwnOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAtMlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBlbGVtZW50IGlmIHN1cHBsaWVkIGFuZCBgc2l6ZT1cInNtYWxsXCJgLiAqL1xuICAgIGljb25TaXplU21hbGw6IHtcbiAgICAgICcmID4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgZm9udFNpemU6IDE4XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGVsZW1lbnQgaWYgc3VwcGxpZWQgYW5kIGBzaXplPVwibWVkaXVtXCJgLiAqL1xuICAgIGljb25TaXplTWVkaXVtOiB7XG4gICAgICAnJiA+ICo6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIGZvbnRTaXplOiAyMFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBlbGVtZW50IGlmIHN1cHBsaWVkIGFuZCBgc2l6ZT1cImxhcmdlXCJgLiAqL1xuICAgIGljb25TaXplTGFyZ2U6IHtcbiAgICAgICcmID4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgZm9udFNpemU6IDIyXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbnZhciBCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCdXR0b24ocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ2RlZmF1bHQnIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdidXR0b24nIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGRpc2FibGVFbGV2YXRpID0gcHJvcHMuZGlzYWJsZUVsZXZhdGlvbixcbiAgICAgIGRpc2FibGVFbGV2YXRpb24gPSBfcHJvcHMkZGlzYWJsZUVsZXZhdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVFbGV2YXRpLFxuICAgICAgX3Byb3BzJGRpc2FibGVGb2N1c1JpID0gcHJvcHMuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gX3Byb3BzJGRpc2FibGVGb2N1c1JpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRm9jdXNSaSxcbiAgICAgIGVuZEljb25Qcm9wID0gcHJvcHMuZW5kSWNvbixcbiAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZSA9IHByb3BzLmZvY3VzVmlzaWJsZUNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/ICdtZWRpdW0nIDogX3Byb3BzJHNpemUsXG4gICAgICBzdGFydEljb25Qcm9wID0gcHJvcHMuc3RhcnRJY29uLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAnYnV0dG9uJyA6IF9wcm9wcyR0eXBlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVkXCIsIFwiZGlzYWJsZUVsZXZhdGlvblwiLCBcImRpc2FibGVGb2N1c1JpcHBsZVwiLCBcImVuZEljb25cIiwgXCJmb2N1c1Zpc2libGVDbGFzc05hbWVcIiwgXCJmdWxsV2lkdGhcIiwgXCJzaXplXCIsIFwic3RhcnRJY29uXCIsIFwidHlwZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBzdGFydEljb24gPSBzdGFydEljb25Qcm9wICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuc3RhcnRJY29uLCBjbGFzc2VzW1wiaWNvblNpemVcIi5jb25jYXQoY2FwaXRhbGl6ZShzaXplKSldKVxuICB9LCBzdGFydEljb25Qcm9wKTtcbiAgdmFyIGVuZEljb24gPSBlbmRJY29uUHJvcCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmVuZEljb24sIGNsYXNzZXNbXCJpY29uU2l6ZVwiLmNvbmNhdChjYXBpdGFsaXplKHNpemUpKV0pXG4gIH0sIGVuZEljb25Qcm9wKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJhc2UsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW3ZhcmlhbnRdLCBjbGFzc05hbWUsIGNvbG9yID09PSAnaW5oZXJpdCcgPyBjbGFzc2VzLmNvbG9ySW5oZXJpdCA6IGNvbG9yICE9PSAnZGVmYXVsdCcgJiYgY2xhc3Nlc1tcIlwiLmNvbmNhdCh2YXJpYW50KS5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwgc2l6ZSAhPT0gJ21lZGl1bScgJiYgW2NsYXNzZXNbXCJcIi5jb25jYXQodmFyaWFudCwgXCJTaXplXCIpLmNvbmNhdChjYXBpdGFsaXplKHNpemUpKV0sIGNsYXNzZXNbXCJzaXplXCIuY29uY2F0KGNhcGl0YWxpemUoc2l6ZSkpXV0sIGRpc2FibGVFbGV2YXRpb24gJiYgY2xhc3Nlcy5kaXNhYmxlRWxldmF0aW9uLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmdWxsV2lkdGggJiYgY2xhc3Nlcy5mdWxsV2lkdGgpLFxuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBmb2N1c1JpcHBsZTogIWRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5mb2N1c1Zpc2libGUsIGZvY3VzVmlzaWJsZUNsYXNzTmFtZSksXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxhYmVsXG4gIH0sIHN0YXJ0SWNvbiwgY2hpbGRyZW4sIGVuZEljb24pKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXG4gICAqL1xuICBkaXNhYmxlRWxldmF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKlxuICAgKiDimqDvuI8gV2l0aG91dCBhIHJpcHBsZSB0aGVyZSBpcyBubyBzdHlsaW5nIGZvciA6Zm9jdXMtdmlzaWJsZSBieSBkZWZhdWx0LiBCZSBzdXJlXG4gICAqIHRvIGhpZ2hsaWdodCB0aGUgZWxlbWVudCBieSBhcHBseWluZyBzZXBhcmF0ZSBzdHlsZXMgd2l0aCB0aGUgYGZvY3VzVmlzaWJsZUNsYXNzTmFtZWAuXG4gICAqL1xuICBkaXNhYmxlUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRWxlbWVudCBwbGFjZWQgYWZ0ZXIgdGhlIGNoaWxkcmVuLlxuICAgKi9cbiAgZW5kSWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGZvY3VzVmlzaWJsZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cbiAgICovXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBidXR0b24uXG4gICAqIGBzbWFsbGAgaXMgZXF1aXZhbGVudCB0byB0aGUgZGVuc2UgYnV0dG9uIHN0eWxpbmcuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydsYXJnZScsICdtZWRpdW0nLCAnc21hbGwnXSksXG5cbiAgLyoqXG4gICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXG4gICAqL1xuICBzdGFydEljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAncmVzZXQnLCAnc3VibWl0J10pLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW5lZCcsICdvdXRsaW5lZCcsICd0ZXh0J10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUJ1dHRvbidcbn0pKEJ1dHRvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQnV0dG9uJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYsIHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuLi91dGlscy91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCBkZXByZWNhdGVkUHJvcFR5cGUgZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlZFByb3BUeXBlJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB1c2VJc0ZvY3VzVmlzaWJsZSBmcm9tICcuLi91dGlscy91c2VJc0ZvY3VzVmlzaWJsZSc7XG5pbXBvcnQgVG91Y2hSaXBwbGUgZnJvbSAnLi9Ub3VjaFJpcHBsZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAvLyBSZXNldCBkZWZhdWx0IHZhbHVlXG4gICAgLy8gV2UgZGlzYWJsZSB0aGUgZm9jdXMgcmluZyBmb3IgbW91c2UsIHRvdWNoIGFuZCBrZXlib2FyZCB1c2Vycy5cbiAgICBvdXRsaW5lOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgLy8gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gU2FmYXJpXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgLy8gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIEZpcmVmb3hcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAvLyBSZXNldFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgLy8gUmVzZXRcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIC8vIFNvIHdlIHRha2UgcHJlY2VkZW50IG92ZXIgdGhlIHN0eWxlIG9mIGEgbmF0aXZlIDxhIC8+IGVsZW1lbnQuXG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAnJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgIGJvcmRlclN0eWxlOiAnbm9uZScgLy8gUmVtb3ZlIEZpcmVmb3ggZG90dGVkIG91dGxpbmUuXG5cbiAgICB9LFxuICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgLy8gRGlzYWJsZSBsaW5rIGludGVyYWN0aW9uc1xuICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICB9LFxuICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICBjb2xvckFkanVzdDogJ2V4YWN0J1xuICAgIH1cbiAgfSxcblxuICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICBkaXNhYmxlZDoge30sXG5cbiAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBrZXlib2FyZCBmb2N1c2VkLiAqL1xuICBmb2N1c1Zpc2libGU6IHt9XG59O1xuLyoqXG4gKiBgQnV0dG9uQmFzZWAgY29udGFpbnMgYXMgZmV3IHN0eWxlcyBhcyBwb3NzaWJsZS5cbiAqIEl0IGFpbXMgdG8gYmUgYSBzaW1wbGUgYnVpbGRpbmcgYmxvY2sgZm9yIGNyZWF0aW5nIGEgYnV0dG9uLlxuICogSXQgY29udGFpbnMgYSBsb2FkIG9mIHN0eWxlIHJlc2V0IGFuZCBzb21lIGZvY3VzL3JpcHBsZSBsb2dpYy5cbiAqL1xuXG52YXIgQnV0dG9uQmFzZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEJ1dHRvbkJhc2UocHJvcHMsIHJlZikge1xuICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgYnV0dG9uUmVmUHJvcCA9IHByb3BzLmJ1dHRvblJlZixcbiAgICAgIF9wcm9wcyRjZW50ZXJSaXBwbGUgPSBwcm9wcy5jZW50ZXJSaXBwbGUsXG4gICAgICBjZW50ZXJSaXBwbGUgPSBfcHJvcHMkY2VudGVyUmlwcGxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjZW50ZXJSaXBwbGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgY29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2J1dHRvbicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZGlzYWJsZVJpcHBsZSA9IHByb3BzLmRpc2FibGVSaXBwbGUsXG4gICAgICBkaXNhYmxlUmlwcGxlID0gX3Byb3BzJGRpc2FibGVSaXBwbGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVSaXBwbGUsXG4gICAgICBfcHJvcHMkZGlzYWJsZVRvdWNoUmkgPSBwcm9wcy5kaXNhYmxlVG91Y2hSaXBwbGUsXG4gICAgICBkaXNhYmxlVG91Y2hSaXBwbGUgPSBfcHJvcHMkZGlzYWJsZVRvdWNoUmkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVUb3VjaFJpLFxuICAgICAgX3Byb3BzJGZvY3VzUmlwcGxlID0gcHJvcHMuZm9jdXNSaXBwbGUsXG4gICAgICBmb2N1c1JpcHBsZSA9IF9wcm9wcyRmb2N1c1JpcHBsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZm9jdXNSaXBwbGUsXG4gICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWUgPSBwcm9wcy5mb2N1c1Zpc2libGVDbGFzc05hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25Gb2N1c1Zpc2libGUgPSBwcm9wcy5vbkZvY3VzVmlzaWJsZSxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIG9uS2V5VXAgPSBwcm9wcy5vbktleVVwLFxuICAgICAgb25Nb3VzZURvd24gPSBwcm9wcy5vbk1vdXNlRG93bixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgIG9uTW91c2VVcCA9IHByb3BzLm9uTW91c2VVcCxcbiAgICAgIG9uVG91Y2hFbmQgPSBwcm9wcy5vblRvdWNoRW5kLFxuICAgICAgb25Ub3VjaE1vdmUgPSBwcm9wcy5vblRvdWNoTW92ZSxcbiAgICAgIG9uVG91Y2hTdGFydCA9IHByb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgIG9uRHJhZ0xlYXZlID0gcHJvcHMub25EcmFnTGVhdmUsXG4gICAgICBfcHJvcHMkdGFiSW5kZXggPSBwcm9wcy50YWJJbmRleCxcbiAgICAgIHRhYkluZGV4ID0gX3Byb3BzJHRhYkluZGV4ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJHRhYkluZGV4LFxuICAgICAgVG91Y2hSaXBwbGVQcm9wcyA9IHByb3BzLlRvdWNoUmlwcGxlUHJvcHMsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICdidXR0b24nIDogX3Byb3BzJHR5cGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aW9uXCIsIFwiYnV0dG9uUmVmXCIsIFwiY2VudGVyUmlwcGxlXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlUmlwcGxlXCIsIFwiZGlzYWJsZVRvdWNoUmlwcGxlXCIsIFwiZm9jdXNSaXBwbGVcIiwgXCJmb2N1c1Zpc2libGVDbGFzc05hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNsaWNrXCIsIFwib25Gb2N1c1wiLCBcIm9uRm9jdXNWaXNpYmxlXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiLCBcIm9uTW91c2VEb3duXCIsIFwib25Nb3VzZUxlYXZlXCIsIFwib25Nb3VzZVVwXCIsIFwib25Ub3VjaEVuZFwiLCBcIm9uVG91Y2hNb3ZlXCIsIFwib25Ub3VjaFN0YXJ0XCIsIFwib25EcmFnTGVhdmVcIiwgXCJ0YWJJbmRleFwiLCBcIlRvdWNoUmlwcGxlUHJvcHNcIiwgXCJ0eXBlXCJdKTtcblxuICB2YXIgYnV0dG9uUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGdldEJ1dHRvbk5vZGUoKSB7XG4gICAgLy8gI1N0cmljdE1vZGUgcmVhZHlcbiAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoYnV0dG9uUmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgdmFyIHJpcHBsZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgZm9jdXNWaXNpYmxlID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0Rm9jdXNWaXNpYmxlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIGlmIChkaXNhYmxlZCAmJiBmb2N1c1Zpc2libGUpIHtcbiAgICBzZXRGb2N1c1Zpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgdmFyIF91c2VJc0ZvY3VzVmlzaWJsZSA9IHVzZUlzRm9jdXNWaXNpYmxlKCksXG4gICAgICBpc0ZvY3VzVmlzaWJsZSA9IF91c2VJc0ZvY3VzVmlzaWJsZS5pc0ZvY3VzVmlzaWJsZSxcbiAgICAgIG9uQmx1clZpc2libGUgPSBfdXNlSXNGb2N1c1Zpc2libGUub25CbHVyVmlzaWJsZSxcbiAgICAgIGZvY3VzVmlzaWJsZVJlZiA9IF91c2VJc0ZvY3VzVmlzaWJsZS5yZWY7XG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShhY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9jdXNWaXNpYmxlOiBmdW5jdGlvbiBmb2N1c1Zpc2libGUoKSB7XG4gICAgICAgIHNldEZvY3VzVmlzaWJsZSh0cnVlKTtcbiAgICAgICAgYnV0dG9uUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZvY3VzVmlzaWJsZSAmJiBmb2N1c1JpcHBsZSAmJiAhZGlzYWJsZVJpcHBsZSkge1xuICAgICAgcmlwcGxlUmVmLmN1cnJlbnQucHVsc2F0ZSgpO1xuICAgIH1cbiAgfSwgW2Rpc2FibGVSaXBwbGUsIGZvY3VzUmlwcGxlLCBmb2N1c1Zpc2libGVdKTtcblxuICBmdW5jdGlvbiB1c2VSaXBwbGVIYW5kbGVyKHJpcHBsZUFjdGlvbiwgZXZlbnRDYWxsYmFjaykge1xuICAgIHZhciBza2lwUmlwcGxlQWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkaXNhYmxlVG91Y2hSaXBwbGU7XG4gICAgcmV0dXJuIHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnRDYWxsYmFjaykge1xuICAgICAgICBldmVudENhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlnbm9yZSA9IHNraXBSaXBwbGVBY3Rpb247XG5cbiAgICAgIGlmICghaWdub3JlICYmIHJpcHBsZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJpcHBsZVJlZi5jdXJyZW50W3JpcHBsZUFjdGlvbl0oZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYW5kbGVNb3VzZURvd24gPSB1c2VSaXBwbGVIYW5kbGVyKCdzdGFydCcsIG9uTW91c2VEb3duKTtcbiAgdmFyIGhhbmRsZURyYWdMZWF2ZSA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0b3AnLCBvbkRyYWdMZWF2ZSk7XG4gIHZhciBoYW5kbGVNb3VzZVVwID0gdXNlUmlwcGxlSGFuZGxlcignc3RvcCcsIG9uTW91c2VVcCk7XG4gIHZhciBoYW5kbGVNb3VzZUxlYXZlID0gdXNlUmlwcGxlSGFuZGxlcignc3RvcCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChmb2N1c1Zpc2libGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uTW91c2VMZWF2ZSkge1xuICAgICAgb25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlVG91Y2hTdGFydCA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgdmFyIGhhbmRsZVRvdWNoRW5kID0gdXNlUmlwcGxlSGFuZGxlcignc3RvcCcsIG9uVG91Y2hFbmQpO1xuICB2YXIgaGFuZGxlVG91Y2hNb3ZlID0gdXNlUmlwcGxlSGFuZGxlcignc3RvcCcsIG9uVG91Y2hNb3ZlKTtcbiAgdmFyIGhhbmRsZUJsdXIgPSB1c2VSaXBwbGVIYW5kbGVyKCdzdG9wJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGZvY3VzVmlzaWJsZSkge1xuICAgICAgb25CbHVyVmlzaWJsZShldmVudCk7XG4gICAgICBzZXRGb2N1c1Zpc2libGUoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChvbkJsdXIpIHtcbiAgICAgIG9uQmx1cihldmVudCk7XG4gICAgfVxuICB9LCBmYWxzZSk7XG4gIHZhciBoYW5kbGVGb2N1cyA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gRml4IGZvciBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzc3NjlcbiAgICBpZiAoIWJ1dHRvblJlZi5jdXJyZW50KSB7XG4gICAgICBidXR0b25SZWYuY3VycmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKGlzRm9jdXNWaXNpYmxlKGV2ZW50KSkge1xuICAgICAgc2V0Rm9jdXNWaXNpYmxlKHRydWUpO1xuXG4gICAgICBpZiAob25Gb2N1c1Zpc2libGUpIHtcbiAgICAgICAgb25Gb2N1c1Zpc2libGUoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICBvbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBpc05vbk5hdGl2ZUJ1dHRvbiA9IGZ1bmN0aW9uIGlzTm9uTmF0aXZlQnV0dG9uKCkge1xuICAgIHZhciBidXR0b24gPSBnZXRCdXR0b25Ob2RlKCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudCAmJiBjb21wb25lbnQgIT09ICdidXR0b24nICYmICEoYnV0dG9uLnRhZ05hbWUgPT09ICdBJyAmJiBidXR0b24uaHJlZik7XG4gIH07XG4gIC8qKlxuICAgKiBJRSAxMSBzaGltIGZvciBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9yZXBlYXRcbiAgICovXG5cblxuICB2YXIga2V5ZG93blJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBoYW5kbGVLZXlEb3duID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBDaGVjayBpZiBrZXkgaXMgYWxyZWFkeSBkb3duIHRvIGF2b2lkIHJlcGVhdHMgYmVpbmcgY291bnRlZCBhcyBtdWx0aXBsZSBhY3RpdmF0aW9uc1xuICAgIGlmIChmb2N1c1JpcHBsZSAmJiAha2V5ZG93blJlZi5jdXJyZW50ICYmIGZvY3VzVmlzaWJsZSAmJiByaXBwbGVSZWYuY3VycmVudCAmJiBldmVudC5rZXkgPT09ICcgJykge1xuICAgICAga2V5ZG93blJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgIHJpcHBsZVJlZi5jdXJyZW50LnN0b3AoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmlwcGxlUmVmLmN1cnJlbnQuc3RhcnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCAmJiBpc05vbk5hdGl2ZUJ1dHRvbigpICYmIGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgfSAvLyBLZXlib2FyZCBhY2Nlc3NpYmlsaXR5IGZvciBub24gaW50ZXJhY3RpdmUgZWxlbWVudHNcblxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCAmJiBpc05vbk5hdGl2ZUJ1dHRvbigpICYmIGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiAhZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVLZXlVcCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gY2FsbGluZyBwcmV2ZW50RGVmYXVsdCBpbiBrZXlVcCBvbiBhIDxidXR0b24+IHdpbGwgbm90IGRpc3BhdGNoIGEgY2xpY2sgZXZlbnQgaWYgU3BhY2UgaXMgcHJlc3NlZFxuICAgIC8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9idXR0b24ta2V5dXAtcHJldmVudGRlZmF1bHQtZG43ZjBcbiAgICBpZiAoZm9jdXNSaXBwbGUgJiYgZXZlbnQua2V5ID09PSAnICcgJiYgcmlwcGxlUmVmLmN1cnJlbnQgJiYgZm9jdXNWaXNpYmxlICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBrZXlkb3duUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgIHJpcHBsZVJlZi5jdXJyZW50LnN0b3AoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmlwcGxlUmVmLmN1cnJlbnQucHVsc2F0ZShldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob25LZXlVcCkge1xuICAgICAgb25LZXlVcChldmVudCk7XG4gICAgfSAvLyBLZXlib2FyZCBhY2Nlc3NpYmlsaXR5IGZvciBub24gaW50ZXJhY3RpdmUgZWxlbWVudHNcblxuXG4gICAgaWYgKG9uQ2xpY2sgJiYgZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGlzTm9uTmF0aXZlQnV0dG9uKCkgJiYgZXZlbnQua2V5ID09PSAnICcgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBDb21wb25lbnRQcm9wID0gY29tcG9uZW50O1xuXG4gIGlmIChDb21wb25lbnRQcm9wID09PSAnYnV0dG9uJyAmJiBvdGhlci5ocmVmKSB7XG4gICAgQ29tcG9uZW50UHJvcCA9ICdhJztcbiAgfVxuXG4gIHZhciBidXR0b25Qcm9wcyA9IHt9O1xuXG4gIGlmIChDb21wb25lbnRQcm9wID09PSAnYnV0dG9uJykge1xuICAgIGJ1dHRvblByb3BzLnR5cGUgPSB0eXBlO1xuICAgIGJ1dHRvblByb3BzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKENvbXBvbmVudFByb3AgIT09ICdhJyB8fCAhb3RoZXIuaHJlZikge1xuICAgICAgYnV0dG9uUHJvcHMucm9sZSA9ICdidXR0b24nO1xuICAgIH1cblxuICAgIGJ1dHRvblByb3BzWydhcmlhLWRpc2FibGVkJ10gPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHZhciBoYW5kbGVVc2VyUmVmID0gdXNlRm9ya1JlZihidXR0b25SZWZQcm9wLCByZWYpO1xuICB2YXIgaGFuZGxlT3duUmVmID0gdXNlRm9ya1JlZihmb2N1c1Zpc2libGVSZWYsIGJ1dHRvblJlZik7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGhhbmRsZVVzZXJSZWYsIGhhbmRsZU93blJlZik7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBtb3VudGVkU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0TW91bnRlZFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldE1vdW50ZWRTdGF0ZSh0cnVlKTtcbiAgfSwgW10pO1xuICB2YXIgZW5hYmxlVG91Y2hSaXBwbGUgPSBtb3VudGVkU3RhdGUgJiYgIWRpc2FibGVSaXBwbGUgJiYgIWRpc2FibGVkO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChlbmFibGVUb3VjaFJpcHBsZSAmJiAhcmlwcGxlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGNvbXBvbmVudGAgcHJvcCBwcm92aWRlZCB0byBCdXR0b25CYXNlIGlzIGludmFsaWQuJywgJ1BsZWFzZSBtYWtlIHN1cmUgdGhlIGNoaWxkcmVuIHByb3AgaXMgcmVuZGVyZWQgaW4gdGhpcyBjdXN0b20gY29tcG9uZW50LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9LCBbZW5hYmxlVG91Y2hSaXBwbGVdKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnRQcm9wLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBmb2N1c1Zpc2libGUgJiYgW2NsYXNzZXMuZm9jdXNWaXNpYmxlLCBmb2N1c1Zpc2libGVDbGFzc05hbWVdLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKSxcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBvbkZvY3VzOiBoYW5kbGVGb2N1cyxcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgb25LZXlVcDogaGFuZGxlS2V5VXAsXG4gICAgb25Nb3VzZURvd246IGhhbmRsZU1vdXNlRG93bixcbiAgICBvbk1vdXNlTGVhdmU6IGhhbmRsZU1vdXNlTGVhdmUsXG4gICAgb25Nb3VzZVVwOiBoYW5kbGVNb3VzZVVwLFxuICAgIG9uRHJhZ0xlYXZlOiBoYW5kbGVEcmFnTGVhdmUsXG4gICAgb25Ub3VjaEVuZDogaGFuZGxlVG91Y2hFbmQsXG4gICAgb25Ub3VjaE1vdmU6IGhhbmRsZVRvdWNoTW92ZSxcbiAgICBvblRvdWNoU3RhcnQ6IGhhbmRsZVRvdWNoU3RhcnQsXG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gLTEgOiB0YWJJbmRleFxuICB9LCBidXR0b25Qcm9wcywgb3RoZXIpLCBjaGlsZHJlbiwgZW5hYmxlVG91Y2hSaXBwbGUgP1xuICAvKiNfX1BVUkVfXyovXG5cbiAgLyogVG91Y2hSaXBwbGUgaXMgb25seSBuZWVkZWQgY2xpZW50LXNpZGUsIHgyIGJvb3N0IG9uIHRoZSBzZXJ2ZXIuICovXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG91Y2hSaXBwbGUsIF9leHRlbmRzKHtcbiAgICByZWY6IHJpcHBsZVJlZixcbiAgICBjZW50ZXI6IGNlbnRlclJpcHBsZVxuICB9LCBUb3VjaFJpcHBsZVByb3BzKSkgOiBudWxsKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQnV0dG9uQmFzZS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBBIHJlZiBmb3IgaW1wZXJhdGl2ZSBhY3Rpb25zLlxuICAgKiBJdCBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBgZm9jdXNWaXNpYmxlKClgIGFjdGlvbi5cbiAgICovXG4gIGFjdGlvbjogcmVmVHlwZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBVc2UgdGhhdCBwcm9wIHRvIHBhc3MgYSByZWYgdG8gdGhlIG5hdGl2ZSBidXR0b24gY29tcG9uZW50LlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYHJlZmAgaW5zdGVhZC5cbiAgICovXG4gIGJ1dHRvblJlZjogZGVwcmVjYXRlZFByb3BUeXBlKHJlZlR5cGUsICdVc2UgYHJlZmAgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmlwcGxlcyB3aWxsIGJlIGNlbnRlcmVkLlxuICAgKiBUaGV5IHdvbid0IHN0YXJ0IGF0IHRoZSBjdXJzb3IgaW50ZXJhY3Rpb24gcG9zaXRpb24uXG4gICAqL1xuICBjZW50ZXJSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBlbGVtZW50VHlwZUFjY2VwdGluZ1JlZixcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFzZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKlxuICAgKiDimqDvuI8gV2l0aG91dCBhIHJpcHBsZSB0aGVyZSBpcyBubyBzdHlsaW5nIGZvciA6Zm9jdXMtdmlzaWJsZSBieSBkZWZhdWx0LiBCZSBzdXJlXG4gICAqIHRvIGhpZ2hsaWdodCB0aGUgZWxlbWVudCBieSBhcHBseWluZyBzZXBhcmF0ZSBzdHlsZXMgd2l0aCB0aGUgYGZvY3VzVmlzaWJsZUNsYXNzTmFtZWAuXG4gICAqL1xuICBkaXNhYmxlUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdG91Y2ggcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFzZSBidXR0b24gd2lsbCBoYXZlIGEga2V5Ym9hcmQgZm9jdXMgcmlwcGxlLlxuICAgKi9cbiAgZm9jdXNSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgY2FuIGhlbHAgaWRlbnRpZnkgd2hpY2ggZWxlbWVudCBoYXMga2V5Ym9hcmQgZm9jdXMuXG4gICAqIFRoZSBjbGFzcyBuYW1lIHdpbGwgYmUgYXBwbGllZCB3aGVuIHRoZSBlbGVtZW50IGdhaW5zIHRoZSBmb2N1cyB0aHJvdWdoIGtleWJvYXJkIGludGVyYWN0aW9uLlxuICAgKiBJdCdzIGEgcG9seWZpbGwgZm9yIHRoZSBbQ1NTIDpmb2N1cy12aXNpYmxlIHNlbGVjdG9yXShodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvc2VsZWN0b3JzLTQvI3RoZS1mb2N1cy12aXNpYmxlLXBzZXVkbykuXG4gICAqIFRoZSByYXRpb25hbGUgZm9yIHVzaW5nIHRoaXMgZmVhdHVyZSBbaXMgZXhwbGFpbmVkIGhlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvYmxvYi9tYXN0ZXIvZXhwbGFpbmVyLm1kKS5cbiAgICogQSBbcG9seWZpbGwgY2FuIGJlIHVzZWRdKGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUpIHRvIGFwcGx5IGEgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIG90aGVyIGNvbXBvbmVudHNcbiAgICogaWYgbmVlZGVkLlxuICAgKi9cbiAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25EcmFnTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQgd2l0aCBhIGtleWJvYXJkLlxuICAgKiBXZSB0cmlnZ2VyIGEgYG9uRm9jdXNgIGNhbGxiYWNrIHRvby5cbiAgICovXG4gIG9uRm9jdXNWaXNpYmxlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZVVwOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Ub3VjaEVuZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uVG91Y2hNb3ZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Ub3VjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgYFRvdWNoUmlwcGxlYCBlbGVtZW50LlxuICAgKi9cbiAgVG91Y2hSaXBwbGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddKSwgUHJvcFR5cGVzLnN0cmluZ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUJ1dHRvbkJhc2UnXG59KShCdXR0b25CYXNlKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuLi91dGlscy91c2VFdmVudENhbGxiYWNrJztcbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmZ1bmN0aW9uIFJpcHBsZShwcm9wcykge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkcHVsc2F0ZSA9IHByb3BzLnB1bHNhdGUsXG4gICAgICBwdWxzYXRlID0gX3Byb3BzJHB1bHNhdGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHB1bHNhdGUsXG4gICAgICByaXBwbGVYID0gcHJvcHMucmlwcGxlWCxcbiAgICAgIHJpcHBsZVkgPSBwcm9wcy5yaXBwbGVZLFxuICAgICAgcmlwcGxlU2l6ZSA9IHByb3BzLnJpcHBsZVNpemUsXG4gICAgICBpblByb3AgPSBwcm9wcy5pbixcbiAgICAgIF9wcm9wcyRvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0ZWQgPSBfcHJvcHMkb25FeGl0ZWQgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3Byb3BzJG9uRXhpdGVkLFxuICAgICAgdGltZW91dCA9IHByb3BzLnRpbWVvdXQ7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGxlYXZpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRMZWF2aW5nID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciByaXBwbGVDbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMucmlwcGxlLCBjbGFzc2VzLnJpcHBsZVZpc2libGUsIHB1bHNhdGUgJiYgY2xhc3Nlcy5yaXBwbGVQdWxzYXRlKTtcbiAgdmFyIHJpcHBsZVN0eWxlcyA9IHtcbiAgICB3aWR0aDogcmlwcGxlU2l6ZSxcbiAgICBoZWlnaHQ6IHJpcHBsZVNpemUsXG4gICAgdG9wOiAtKHJpcHBsZVNpemUgLyAyKSArIHJpcHBsZVksXG4gICAgbGVmdDogLShyaXBwbGVTaXplIC8gMikgKyByaXBwbGVYXG4gIH07XG4gIHZhciBjaGlsZENsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5jaGlsZCwgbGVhdmluZyAmJiBjbGFzc2VzLmNoaWxkTGVhdmluZywgcHVsc2F0ZSAmJiBjbGFzc2VzLmNoaWxkUHVsc2F0ZSk7XG4gIHZhciBoYW5kbGVFeGl0ZWQgPSB1c2VFdmVudENhbGxiYWNrKG9uRXhpdGVkKTsgLy8gUmlwcGxlIGlzIHVzZWQgZm9yIHVzZXIgZmVlZGJhY2sgKGUuZy4gY2xpY2sgb3IgcHJlc3MpIHNvIHdlIHdhbnQgdG8gYXBwbHkgc3R5bGVzIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHlcblxuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpblByb3ApIHtcbiAgICAgIC8vIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAjb25FeGl0XG4gICAgICBzZXRMZWF2aW5nKHRydWUpOyAvLyByZWFjdC10cmFuc2l0aW9uLWdyb3VwI29uRXhpdGVkXG5cbiAgICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGhhbmRsZUV4aXRlZCwgdGltZW91dCk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2hhbmRsZUV4aXRlZCwgaW5Qcm9wLCB0aW1lb3V0XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogcmlwcGxlQ2xhc3NOYW1lLFxuICAgIHN0eWxlOiByaXBwbGVTdHlsZXNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNoaWxkQ2xhc3NOYW1lXG4gIH0pKTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUmlwcGxlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlIC0gaW5qZWN0ZWQgZnJvbSBUcmFuc2l0aW9uR3JvdXBcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZSAtIGluamVjdGVkIGZyb20gVHJhbnNpdGlvbkdyb3VwXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBwdWxzYXRlcywgdHlwaWNhbGx5IGluZGljYXRpbmcgdGhlIGtleWJvYXJkIGZvY3VzIHN0YXRlIG9mIGFuIGVsZW1lbnQuXG4gICAqL1xuICBwdWxzYXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGlhbWV0ZXIgb2YgdGhlIHJpcHBsZS5cbiAgICovXG4gIHJpcHBsZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEhvcml6b250YWwgcG9zaXRpb24gb2YgdGhlIHJpcHBsZSBjZW50ZXIuXG4gICAqL1xuICByaXBwbGVYOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgcmlwcGxlIGNlbnRlci5cbiAgICovXG4gIHJpcHBsZVk6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIGV4aXQgZGVsYXlcbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFJpcHBsZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUmlwcGxlIGZyb20gJy4vUmlwcGxlJztcbnZhciBEVVJBVElPTiA9IDU1MDtcbmV4cG9ydCB2YXIgREVMQVlfUklQUExFID0gODA7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgcmlwcGxlYCBjbGFzcy4gKi9cbiAgICByaXBwbGU6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgcmlwcGxlVmlzaWJsZWAgY2xhc3MuICovXG4gICAgcmlwcGxlVmlzaWJsZToge1xuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgYW5pbWF0aW9uOiBcIiRlbnRlciBcIi5jb25jYXQoRFVSQVRJT04sIFwibXMgXCIpLmNvbmNhdCh0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZUluT3V0KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgcmlwcGxlUHVsc2F0ZWAgY2xhc3MuICovXG4gICAgcmlwcGxlUHVsc2F0ZToge1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFwiXCIuY29uY2F0KHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsIFwibXNcIilcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYGNoaWxkYCBjbGFzcy4gKi9cbiAgICBjaGlsZDoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgY2hpbGRMZWF2aW5nYCBjbGFzcy4gKi9cbiAgICBjaGlsZExlYXZpbmc6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBhbmltYXRpb246IFwiJGV4aXQgXCIuY29uY2F0KERVUkFUSU9OLCBcIm1zIFwiKS5jb25jYXQodGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VJbk91dClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYGNoaWxkUHVsc2F0ZWAgY2xhc3MuICovXG4gICAgY2hpbGRQdWxzYXRlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBhbmltYXRpb246IFwiJHB1bHNhdGUgMjUwMG1zIFwiLmNvbmNhdCh0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZUluT3V0LCBcIiAyMDBtcyBpbmZpbml0ZVwiKVxuICAgIH0sXG4gICAgJ0BrZXlmcmFtZXMgZW50ZXInOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgICAgb3BhY2l0eTogMC4xXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgICAgb3BhY2l0eTogMC4zXG4gICAgICB9XG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBleGl0Jzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgICdAa2V5ZnJhbWVzIHB1bHNhdGUnOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgfSxcbiAgICAgICc1MCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOTIpJ1xuICAgICAgfSxcbiAgICAgICcxMDAlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICpcbiAqIFRPRE8gdjU6IE1ha2UgcHJpdmF0ZVxuICovXG5cbnZhciBUb3VjaFJpcHBsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRvdWNoUmlwcGxlKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRjZW50ZXIgPSBwcm9wcy5jZW50ZXIsXG4gICAgICBjZW50ZXJQcm9wID0gX3Byb3BzJGNlbnRlciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY2VudGVyLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2VudGVyXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKFtdKSxcbiAgICAgIHJpcHBsZXMgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRSaXBwbGVzID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBuZXh0S2V5ID0gUmVhY3QudXNlUmVmKDApO1xuICB2YXIgcmlwcGxlQ2FsbGJhY2sgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJpcHBsZUNhbGxiYWNrLmN1cnJlbnQpIHtcbiAgICAgIHJpcHBsZUNhbGxiYWNrLmN1cnJlbnQoKTtcbiAgICAgIHJpcHBsZUNhbGxiYWNrLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgW3JpcHBsZXNdKTsgLy8gVXNlZCB0byBmaWx0ZXIgb3V0IG1vdXNlIGVtdWxhdGVkIGV2ZW50cyBvbiBtb2JpbGUuXG5cbiAgdmFyIGlnbm9yaW5nTW91c2VEb3duID0gUmVhY3QudXNlUmVmKGZhbHNlKTsgLy8gV2UgdXNlIGEgdGltZXIgaW4gb3JkZXIgdG8gb25seSBzaG93IHRoZSByaXBwbGVzIGZvciB0b3VjaCBcImNsaWNrXCIgbGlrZSBldmVudHMuXG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gZGlzcGxheSB0aGUgcmlwcGxlIGZvciB0b3VjaCBzY3JvbGwgZXZlbnRzLlxuXG4gIHZhciBzdGFydFRpbWVyID0gUmVhY3QudXNlUmVmKG51bGwpOyAvLyBUaGlzIGlzIHRoZSBob29rIGNhbGxlZCBvbmNlIHRoZSBwcmV2aW91cyB0aW1lb3V0IGlzIHJlYWR5LlxuXG4gIHZhciBzdGFydFRpbWVyQ29tbWl0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgY29udGFpbmVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc3RhcnRUaW1lci5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciBzdGFydENvbW1pdCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICB2YXIgcHVsc2F0ZSA9IHBhcmFtcy5wdWxzYXRlLFxuICAgICAgICByaXBwbGVYID0gcGFyYW1zLnJpcHBsZVgsXG4gICAgICAgIHJpcHBsZVkgPSBwYXJhbXMucmlwcGxlWSxcbiAgICAgICAgcmlwcGxlU2l6ZSA9IHBhcmFtcy5yaXBwbGVTaXplLFxuICAgICAgICBjYiA9IHBhcmFtcy5jYjtcbiAgICBzZXRSaXBwbGVzKGZ1bmN0aW9uIChvbGRSaXBwbGVzKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShvbGRSaXBwbGVzKSwgWy8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJpcHBsZSwge1xuICAgICAgICBrZXk6IG5leHRLZXkuY3VycmVudCxcbiAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgdGltZW91dDogRFVSQVRJT04sXG4gICAgICAgIHB1bHNhdGU6IHB1bHNhdGUsXG4gICAgICAgIHJpcHBsZVg6IHJpcHBsZVgsXG4gICAgICAgIHJpcHBsZVk6IHJpcHBsZVksXG4gICAgICAgIHJpcHBsZVNpemU6IHJpcHBsZVNpemVcbiAgICAgIH0pXSk7XG4gICAgfSk7XG4gICAgbmV4dEtleS5jdXJyZW50ICs9IDE7XG4gICAgcmlwcGxlQ2FsbGJhY2suY3VycmVudCA9IGNiO1xuICB9LCBbY2xhc3Nlc10pO1xuICB2YXIgc3RhcnQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIF9vcHRpb25zJHB1bHNhdGUgPSBvcHRpb25zLnB1bHNhdGUsXG4gICAgICAgIHB1bHNhdGUgPSBfb3B0aW9ucyRwdWxzYXRlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJHB1bHNhdGUsXG4gICAgICAgIF9vcHRpb25zJGNlbnRlciA9IG9wdGlvbnMuY2VudGVyLFxuICAgICAgICBjZW50ZXIgPSBfb3B0aW9ucyRjZW50ZXIgPT09IHZvaWQgMCA/IGNlbnRlclByb3AgfHwgb3B0aW9ucy5wdWxzYXRlIDogX29wdGlvbnMkY2VudGVyLFxuICAgICAgICBfb3B0aW9ucyRmYWtlRWxlbWVudCA9IG9wdGlvbnMuZmFrZUVsZW1lbnQsXG4gICAgICAgIGZha2VFbGVtZW50ID0gX29wdGlvbnMkZmFrZUVsZW1lbnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZmFrZUVsZW1lbnQ7XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgaWdub3JpbmdNb3VzZURvd24uY3VycmVudCkge1xuICAgICAgaWdub3JpbmdNb3VzZURvd24uY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIGlnbm9yaW5nTW91c2VEb3duLmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0gZmFrZUVsZW1lbnQgPyBudWxsIDogY29udGFpbmVyLmN1cnJlbnQ7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50ID8gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMFxuICAgIH07IC8vIEdldCB0aGUgc2l6ZSBvZiB0aGUgcmlwcGxlXG5cbiAgICB2YXIgcmlwcGxlWDtcbiAgICB2YXIgcmlwcGxlWTtcbiAgICB2YXIgcmlwcGxlU2l6ZTtcblxuICAgIGlmIChjZW50ZXIgfHwgZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwIHx8ICFldmVudC5jbGllbnRYICYmICFldmVudC50b3VjaGVzKSB7XG4gICAgICByaXBwbGVYID0gTWF0aC5yb3VuZChyZWN0LndpZHRoIC8gMik7XG4gICAgICByaXBwbGVZID0gTWF0aC5yb3VuZChyZWN0LmhlaWdodCAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3JlZiA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdIDogZXZlbnQsXG4gICAgICAgICAgY2xpZW50WCA9IF9yZWYuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZID0gX3JlZi5jbGllbnRZO1xuXG4gICAgICByaXBwbGVYID0gTWF0aC5yb3VuZChjbGllbnRYIC0gcmVjdC5sZWZ0KTtcbiAgICAgIHJpcHBsZVkgPSBNYXRoLnJvdW5kKGNsaWVudFkgLSByZWN0LnRvcCk7XG4gICAgfVxuXG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgcmlwcGxlU2l6ZSA9IE1hdGguc3FydCgoMiAqIE1hdGgucG93KHJlY3Qud2lkdGgsIDIpICsgTWF0aC5wb3cocmVjdC5oZWlnaHQsIDIpKSAvIDMpOyAvLyBGb3Igc29tZSByZWFzb24gdGhlIGFuaW1hdGlvbiBpcyBicm9rZW4gb24gTW9iaWxlIENocm9tZSBpZiB0aGUgc2l6ZSBpZiBldmVuLlxuXG4gICAgICBpZiAocmlwcGxlU2l6ZSAlIDIgPT09IDApIHtcbiAgICAgICAgcmlwcGxlU2l6ZSArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2l6ZVggPSBNYXRoLm1heChNYXRoLmFicygoZWxlbWVudCA/IGVsZW1lbnQuY2xpZW50V2lkdGggOiAwKSAtIHJpcHBsZVgpLCByaXBwbGVYKSAqIDIgKyAyO1xuICAgICAgdmFyIHNpemVZID0gTWF0aC5tYXgoTWF0aC5hYnMoKGVsZW1lbnQgPyBlbGVtZW50LmNsaWVudEhlaWdodCA6IDApIC0gcmlwcGxlWSksIHJpcHBsZVkpICogMiArIDI7XG4gICAgICByaXBwbGVTaXplID0gTWF0aC5zcXJ0KE1hdGgucG93KHNpemVYLCAyKSArIE1hdGgucG93KHNpemVZLCAyKSk7XG4gICAgfSAvLyBUb3VjaGUgZGV2aWNlc1xuXG5cbiAgICBpZiAoZXZlbnQudG91Y2hlcykge1xuICAgICAgLy8gY2hlY2sgdGhhdCB0aGlzIGlzbid0IGFub3RoZXIgdG91Y2hzdGFydCBkdWUgdG8gbXVsdGl0b3VjaFxuICAgICAgLy8gb3RoZXJ3aXNlIHdlIHdpbGwgb25seSBjbGVhciBhIHNpbmdsZSB0aW1lciB3aGVuIHVubW91bnRpbmcgd2hpbGUgdHdvXG4gICAgICAvLyBhcmUgcnVubmluZ1xuICAgICAgaWYgKHN0YXJ0VGltZXJDb21taXQuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBQcmVwYXJlIHRoZSByaXBwbGUgZWZmZWN0LlxuICAgICAgICBzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RhcnRDb21taXQoe1xuICAgICAgICAgICAgcHVsc2F0ZTogcHVsc2F0ZSxcbiAgICAgICAgICAgIHJpcHBsZVg6IHJpcHBsZVgsXG4gICAgICAgICAgICByaXBwbGVZOiByaXBwbGVZLFxuICAgICAgICAgICAgcmlwcGxlU2l6ZTogcmlwcGxlU2l6ZSxcbiAgICAgICAgICAgIGNiOiBjYlxuICAgICAgICAgIH0pO1xuICAgICAgICB9OyAvLyBEZWxheSB0aGUgZXhlY3V0aW9uIG9mIHRoZSByaXBwbGUgZWZmZWN0LlxuXG5cbiAgICAgICAgc3RhcnRUaW1lci5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0VGltZXJDb21taXQuY3VycmVudCkge1xuICAgICAgICAgICAgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50KCk7XG4gICAgICAgICAgICBzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgREVMQVlfUklQUExFKTsgLy8gV2UgaGF2ZSB0byBtYWtlIGEgdHJhZGVvZmYgd2l0aCB0aGlzIHZhbHVlLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydENvbW1pdCh7XG4gICAgICAgIHB1bHNhdGU6IHB1bHNhdGUsXG4gICAgICAgIHJpcHBsZVg6IHJpcHBsZVgsXG4gICAgICAgIHJpcHBsZVk6IHJpcHBsZVksXG4gICAgICAgIHJpcHBsZVNpemU6IHJpcHBsZVNpemUsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY2VudGVyUHJvcCwgc3RhcnRDb21taXRdKTtcbiAgdmFyIHB1bHNhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc3RhcnQoe30sIHtcbiAgICAgIHB1bHNhdGU6IHRydWVcbiAgICB9KTtcbiAgfSwgW3N0YXJ0XSk7XG4gIHZhciBzdG9wID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgIGNsZWFyVGltZW91dChzdGFydFRpbWVyLmN1cnJlbnQpOyAvLyBUaGUgdG91Y2ggaW50ZXJhY3Rpb24gb2NjdXJzIHRvbyBxdWlja2x5LlxuICAgIC8vIFdlIHN0aWxsIHdhbnQgdG8gc2hvdyByaXBwbGUgZWZmZWN0LlxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50KSB7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICBzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQoKTtcbiAgICAgIHN0YXJ0VGltZXJDb21taXQuY3VycmVudCA9IG51bGw7XG4gICAgICBzdGFydFRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RvcChldmVudCwgY2IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50ID0gbnVsbDtcbiAgICBzZXRSaXBwbGVzKGZ1bmN0aW9uIChvbGRSaXBwbGVzKSB7XG4gICAgICBpZiAob2xkUmlwcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBvbGRSaXBwbGVzLnNsaWNlKDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkUmlwcGxlcztcbiAgICB9KTtcbiAgICByaXBwbGVDYWxsYmFjay5jdXJyZW50ID0gY2I7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHVsc2F0ZTogcHVsc2F0ZSxcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIHN0b3A6IHN0b3BcbiAgICB9O1xuICB9LCBbcHVsc2F0ZSwgc3RhcnQsIHN0b3BdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGNvbnRhaW5lclxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cCwge1xuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBleGl0OiB0cnVlXG4gIH0sIHJpcHBsZXMpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVG91Y2hSaXBwbGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmlwcGxlIHN0YXJ0cyBhdCB0aGUgY2VudGVyIG9mIHRoZSBjb21wb25lbnRcbiAgICogcmF0aGVyIHRoYW4gYXQgdGhlIHBvaW50IG9mIGludGVyYWN0aW9uLlxuICAgKi9cbiAgY2VudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIGZsaXA6IGZhbHNlLFxuICBuYW1lOiAnTXVpVG91Y2hSaXBwbGUnXG59KSggLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oVG91Y2hSaXBwbGUpKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9CdXR0b25CYXNlJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfVxufTtcbnZhciBDYXJkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ2FyZChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRyYWlzZWQgPSBwcm9wcy5yYWlzZWQsXG4gICAgICByYWlzZWQgPSBfcHJvcHMkcmFpc2VkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyYWlzZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcInJhaXNlZFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBlbGV2YXRpb246IHJhaXNlZCA/IDggOiAxLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENhcmQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNhcmQgd2lsbCB1c2UgcmFpc2VkIHN0eWxpbmcuXG4gICAqL1xuICByYWlzZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUNhcmQnXG59KShDYXJkKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IDE2LFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAyNFxuICAgIH1cbiAgfVxufTtcbnZhciBDYXJkQ29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENhcmRDb250ZW50KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQ2FyZENvbnRlbnQnXG59KShDYXJkQ29udGVudCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZENvbnRlbnQnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgZGFya2VuLCBsaWdodGVuIH0gZnJvbSAnLi4vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG52YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDQ7IC8vIHNlY29uZHNcblxuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGdldENvbG9yID0gZnVuY3Rpb24gZ2V0Q29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbGlnaHRlbihjb2xvciwgMC42MikgOiBkYXJrZW4oY29sb3IsIDAuNSk7XG4gIH07XG5cbiAgdmFyIGJhY2tncm91bmRQcmltYXJ5ID0gZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pO1xuICB2YXIgYmFja2dyb3VuZFNlY29uZGFyeSA9IGdldENvbG9yKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4pO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6IDQsXG4gICAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgICBjb2xvckFkanVzdDogJ2V4YWN0J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBhbmQgYmFyMiBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImA7IGJhcjIgaWYgYHZhcmlhbnQ9XCJidWZmZXJcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRQcmltYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGFuZCBiYXIyIGVsZW1lbnRzIGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYDsgYmFyMiBpZiBgdmFyaWFudD1cImJ1ZmZlclwiYC4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kU2Vjb25kYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiYC4gKi9cbiAgICBkZXRlcm1pbmF0ZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaW5kZXRlcm1pbmF0ZVwiYC4gKi9cbiAgICBpbmRldGVybWluYXRlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJidWZmZXJcImAuICovXG4gICAgYnVmZmVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInF1ZXJ5XCJgLiAqL1xuICAgIHF1ZXJ5OiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFkZGl0aW9uYWwgYmFyIGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJidWZmZXJcImAuICovXG4gICAgZGFzaGVkOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGFuaW1hdGlvbjogJyRidWZmZXIgM3MgaW5maW5pdGUgbGluZWFyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYWRkaXRpb25hbCBiYXIgZWxlbWVudCBpZiBgdmFyaWFudD1cImJ1ZmZlclwiYCBhbmQgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICBkYXNoZWRDb2xvclByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJyYWRpYWwtZ3JhZGllbnQoXCIuY29uY2F0KGJhY2tncm91bmRQcmltYXJ5LCBcIiAwJSwgXCIpLmNvbmNhdChiYWNrZ3JvdW5kUHJpbWFyeSwgXCIgMTYlLCB0cmFuc3BhcmVudCA0MiUpXCIpLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICcxMHB4IDEwcHgnLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAtMjNweCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFkZGl0aW9uYWwgYmFyIGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJidWZmZXJcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBkYXNoZWRDb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBcInJhZGlhbC1ncmFkaWVudChcIi5jb25jYXQoYmFja2dyb3VuZFNlY29uZGFyeSwgXCIgMCUsIFwiKS5jb25jYXQoYmFja2dyb3VuZFNlY29uZGFyeSwgXCIgMTYlLCB0cmFuc3BhcmVudCA0MiUpXCIpLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICcxMHB4IDEwcHgnLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAtMjNweCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxheWVyZWQgYmFyMSBhbmQgYmFyMiBlbGVtZW50cy4gKi9cbiAgICBiYXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMnMgbGluZWFyJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBiYXIgZWxlbWVudHMgaWYgYGNvbG9yPVwicHJpbWFyeVwiYDsgYmFyMiBpZiBgdmFyaWFudGAgbm90IFwiYnVmZmVyXCIuICovXG4gICAgYmFyQ29sb3JQcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBiYXIgZWxlbWVudHMgaWYgYGNvbG9yPVwic2Vjb25kYXJ5XCJgOyBiYXIyIGlmIGB2YXJpYW50YCBub3QgXCJidWZmZXJcIi4gKi9cbiAgICBiYXJDb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBiYXIxIGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJpbmRldGVybWluYXRlIG9yIHF1ZXJ5XCJgLiAqL1xuICAgIGJhcjFJbmRldGVybWluYXRlOiB7XG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgYW5pbWF0aW9uOiAnJGluZGV0ZXJtaW5hdGUxIDIuMXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYmFyMSBlbGVtZW50IGlmIGB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcImAuICovXG4gICAgYmFyMURldGVybWluYXRlOiB7XG4gICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAuXCIuY29uY2F0KFRSQU5TSVRJT05fRFVSQVRJT04sIFwicyBsaW5lYXJcIilcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGJhcjEgZWxlbWVudCBpZiBgdmFyaWFudD1cImJ1ZmZlclwiYC4gKi9cbiAgICBiYXIxQnVmZmVyOiB7XG4gICAgICB6SW5kZXg6IDEsXG4gICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAuXCIuY29uY2F0KFRSQU5TSVRJT05fRFVSQVRJT04sIFwicyBsaW5lYXJcIilcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGJhcjIgZWxlbWVudCBpZiBgdmFyaWFudD1cImluZGV0ZXJtaW5hdGUgb3IgcXVlcnlcImAuICovXG4gICAgYmFyMkluZGV0ZXJtaW5hdGU6IHtcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICBhbmltYXRpb246ICckaW5kZXRlcm1pbmF0ZTIgMi4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIDEuMTVzIGluZmluaXRlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYmFyMiBlbGVtZW50IGlmIGB2YXJpYW50PVwiYnVmZmVyXCJgLiAqL1xuICAgIGJhcjJCdWZmZXI6IHtcbiAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIC5cIi5jb25jYXQoVFJBTlNJVElPTl9EVVJBVElPTiwgXCJzIGxpbmVhclwiKVxuICAgIH0sXG4gICAgLy8gTGVnZW5kczpcbiAgICAvLyB8fCByZXByZXNlbnRzIHRoZSB2aWV3cG9ydFxuICAgIC8vIC0gIHJlcHJlc2VudHMgYSBsaWdodCBiYWNrZ3JvdW5kXG4gICAgLy8geCAgcmVwcmVzZW50cyBhIGRhcmsgYmFja2dyb3VuZFxuICAgICdAa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUxJzoge1xuICAgICAgLy8gIHwtLS0tLXwtLS14LXx8LS0tLS18fC0tLS0tfFxuICAgICAgJzAlJzoge1xuICAgICAgICBsZWZ0OiAnLTM1JScsXG4gICAgICAgIHJpZ2h0OiAnMTAwJSdcbiAgICAgIH0sXG4gICAgICAvLyAgfC0tLS0tfC0tLS0tfHwtLS0tLXx8eHh4eC18XG4gICAgICAnNjAlJzoge1xuICAgICAgICBsZWZ0OiAnMTAwJScsXG4gICAgICAgIHJpZ2h0OiAnLTkwJSdcbiAgICAgIH0sXG4gICAgICAnMTAwJSc6IHtcbiAgICAgICAgbGVmdDogJzEwMCUnLFxuICAgICAgICByaWdodDogJy05MCUnXG4gICAgICB9XG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBpbmRldGVybWluYXRlMic6IHtcbiAgICAgIC8vICB8eHh4eHh8eHh4eHh8fC0tLS0tfHwtLS0tLXxcbiAgICAgICcwJSc6IHtcbiAgICAgICAgbGVmdDogJy0yMDAlJyxcbiAgICAgICAgcmlnaHQ6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgIC8vICB8LS0tLS18LS0tLS18fC0tLS0tfHwteC0tLS18XG4gICAgICAnNjAlJzoge1xuICAgICAgICBsZWZ0OiAnMTA3JScsXG4gICAgICAgIHJpZ2h0OiAnLTglJ1xuICAgICAgfSxcbiAgICAgICcxMDAlJzoge1xuICAgICAgICBsZWZ0OiAnMTA3JScsXG4gICAgICAgIHJpZ2h0OiAnLTglJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJ0BrZXlmcmFtZXMgYnVmZmVyJzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcwIC0yM3B4J1xuICAgICAgfSxcbiAgICAgICc1MCUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTIzcHgnXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJy0yMDBweCAtMjNweCdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiAjIyBBUklBXG4gKlxuICogSWYgdGhlIHByb2dyZXNzIGJhciBpcyBkZXNjcmliaW5nIHRoZSBsb2FkaW5nIHByb2dyZXNzIG9mIGEgcGFydGljdWxhciByZWdpb24gb2YgYSBwYWdlLFxuICogeW91IHNob3VsZCB1c2UgYGFyaWEtZGVzY3JpYmVkYnlgIHRvIHBvaW50IHRvIHRoZSBwcm9ncmVzcyBiYXIsIGFuZCBzZXQgdGhlIGBhcmlhLWJ1c3lgXG4gKiBhdHRyaWJ1dGUgdG8gYHRydWVgIG9uIHRoYXQgcmVnaW9uIHVudGlsIGl0IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICovXG5cbnZhciBMaW5lYXJQcm9ncmVzcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpbmVhclByb2dyZXNzKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZhbHVlQnVmZmVyID0gcHJvcHMudmFsdWVCdWZmZXIsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdpbmRldGVybWluYXRlJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcInZhbHVlXCIsIFwidmFsdWVCdWZmZXJcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgcm9vdFByb3BzID0ge307XG4gIHZhciBpbmxpbmVTdHlsZXMgPSB7XG4gICAgYmFyMToge30sXG4gICAgYmFyMjoge31cbiAgfTtcblxuICBpZiAodmFyaWFudCA9PT0gJ2RldGVybWluYXRlJyB8fCB2YXJpYW50ID09PSAnYnVmZmVyJykge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByb290UHJvcHNbJ2FyaWEtdmFsdWVub3cnXSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgcm9vdFByb3BzWydhcmlhLXZhbHVlbWluJ10gPSAwO1xuICAgICAgcm9vdFByb3BzWydhcmlhLXZhbHVlbWF4J10gPSAxMDA7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gdmFsdWUgLSAxMDA7XG5cbiAgICAgIGlmICh0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IC10cmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlubGluZVN0eWxlcy5iYXIxLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIi5jb25jYXQodHJhbnNmb3JtLCBcIiUpXCIpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWx1ZSBwcm9wICcgKyAnd2hlbiB1c2luZyB0aGUgZGV0ZXJtaW5hdGUgb3IgYnVmZmVyIHZhcmlhbnQgb2YgTGluZWFyUHJvZ3Jlc3MgLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YXJpYW50ID09PSAnYnVmZmVyJykge1xuICAgIGlmICh2YWx1ZUJ1ZmZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgX3RyYW5zZm9ybSA9ICh2YWx1ZUJ1ZmZlciB8fCAwKSAtIDEwMDtcblxuICAgICAgaWYgKHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgX3RyYW5zZm9ybSA9IC1fdHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpbmxpbmVTdHlsZXMuYmFyMi50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KF90cmFuc2Zvcm0sIFwiJSlcIik7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IG5lZWQgdG8gcHJvdmlkZSBhIHZhbHVlQnVmZmVyIHByb3AgJyArICd3aGVuIHVzaW5nIHRoZSBidWZmZXIgdmFyaWFudCBvZiBMaW5lYXJQcm9ncmVzcy4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBjbGFzc05hbWUsIHtcbiAgICAgICdkZXRlcm1pbmF0ZSc6IGNsYXNzZXMuZGV0ZXJtaW5hdGUsXG4gICAgICAnaW5kZXRlcm1pbmF0ZSc6IGNsYXNzZXMuaW5kZXRlcm1pbmF0ZSxcbiAgICAgICdidWZmZXInOiBjbGFzc2VzLmJ1ZmZlcixcbiAgICAgICdxdWVyeSc6IGNsYXNzZXMucXVlcnlcbiAgICB9W3ZhcmlhbnRdKSxcbiAgICByb2xlOiBcInByb2dyZXNzYmFyXCJcbiAgfSwgcm9vdFByb3BzLCB7XG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCB2YXJpYW50ID09PSAnYnVmZmVyJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5kYXNoZWQsIGNsYXNzZXNbXCJkYXNoZWRDb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldKVxuICB9KSA6IG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5iYXIsIGNsYXNzZXNbXCJiYXJDb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCAodmFyaWFudCA9PT0gJ2luZGV0ZXJtaW5hdGUnIHx8IHZhcmlhbnQgPT09ICdxdWVyeScpICYmIGNsYXNzZXMuYmFyMUluZGV0ZXJtaW5hdGUsIHtcbiAgICAgICdkZXRlcm1pbmF0ZSc6IGNsYXNzZXMuYmFyMURldGVybWluYXRlLFxuICAgICAgJ2J1ZmZlcic6IGNsYXNzZXMuYmFyMUJ1ZmZlclxuICAgIH1bdmFyaWFudF0pLFxuICAgIHN0eWxlOiBpbmxpbmVTdHlsZXMuYmFyMVxuICB9KSwgdmFyaWFudCA9PT0gJ2RldGVybWluYXRlJyA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuYmFyLCAodmFyaWFudCA9PT0gJ2luZGV0ZXJtaW5hdGUnIHx8IHZhcmlhbnQgPT09ICdxdWVyeScpICYmIGNsYXNzZXMuYmFyMkluZGV0ZXJtaW5hdGUsIHZhcmlhbnQgPT09ICdidWZmZXInID8gW2NsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBjbGFzc2VzLmJhcjJCdWZmZXJdIDogY2xhc3Nlc1tcImJhckNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0pLFxuICAgIHN0eWxlOiBpbmxpbmVTdHlsZXMuYmFyMlxuICB9KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IExpbmVhclByb2dyZXNzLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIGZvciB0aGUgZGV0ZXJtaW5hdGUgYW5kIGJ1ZmZlciB2YXJpYW50cy5cbiAgICogVmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHZhbHVlIGZvciB0aGUgYnVmZmVyIHZhcmlhbnQuXG4gICAqIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAwLlxuICAgKi9cbiAgdmFsdWVCdWZmZXI6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICogVXNlIGluZGV0ZXJtaW5hdGUgb3IgcXVlcnkgd2hlbiB0aGVyZSBpcyBubyBwcm9ncmVzcyB2YWx1ZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2J1ZmZlcicsICdkZXRlcm1pbmF0ZScsICdpbmRldGVybWluYXRlJywgJ3F1ZXJ5J10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUxpbmVhclByb2dyZXNzJ1xufSkoTGluZWFyUHJvZ3Jlc3MpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xpbmVhclByb2dyZXNzJzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgZWxldmF0aW9ucyA9IHt9O1xuICB0aGVtZS5zaGFkb3dzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRvdywgaW5kZXgpIHtcbiAgICBlbGV2YXRpb25zW1wiZWxldmF0aW9uXCIuY29uY2F0KGluZGV4KV0gPSB7XG4gICAgICBib3hTaGFkb3c6IHNoYWRvd1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JveC1zaGFkb3cnKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzcXVhcmU9e2ZhbHNlfWAuICovXG4gICAgcm91bmRlZDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmRpdmlkZXIpXG4gICAgfVxuICB9LCBlbGV2YXRpb25zKTtcbn07XG52YXIgUGFwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQYXBlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkc3F1YXJlID0gcHJvcHMuc3F1YXJlLFxuICAgICAgc3F1YXJlID0gX3Byb3BzJHNxdWFyZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc3F1YXJlLFxuICAgICAgX3Byb3BzJGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbixcbiAgICAgIGVsZXZhdGlvbiA9IF9wcm9wcyRlbGV2YXRpb24gPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkZWxldmF0aW9uLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnZWxldmF0aW9uJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJzcXVhcmVcIiwgXCJlbGV2YXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCB2YXJpYW50ID09PSAnb3V0bGluZWQnID8gY2xhc3Nlcy5vdXRsaW5lZCA6IGNsYXNzZXNbXCJlbGV2YXRpb25cIi5jb25jYXQoZWxldmF0aW9uKV0sICFzcXVhcmUgJiYgY2xhc3Nlcy5yb3VuZGVkKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQYXBlci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFNoYWRvdyBkZXB0aCwgY29ycmVzcG9uZHMgdG8gYGRwYCBpbiB0aGUgc3BlYy5cbiAgICogSXQgYWNjZXB0cyB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAyNCBpbmNsdXNpdmUuXG4gICAqL1xuICBlbGV2YXRpb246IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5udW1iZXIsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uOyAvLyBpbiBjYXNlIGB3aXRoU3R5bGVzYCBmYWlscyB0byBpbmplY3Qgd2UgZG9uJ3QgbmVlZCB0aGlzIHdhcm5pbmdcblxuICAgIGlmIChjbGFzc2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChlbGV2YXRpb24gIT0gbnVsbCAmJiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNYXRlcmlhbC1VSTogVGhpcyBlbGV2YXRpb24gYFwiLmNvbmNhdChlbGV2YXRpb24sIFwiYCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgcm91bmRlZCBjb3JuZXJzIGFyZSBkaXNhYmxlZC5cbiAgICovXG4gIHNxdWFyZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2VsZXZhdGlvbicsICdvdXRsaW5lZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQYXBlcidcbn0pKFBhcGVyKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYXBlcic7IiwidmFyIGJsdWUgPSB7XG4gIDUwOiAnI2UzZjJmZCcsXG4gIDEwMDogJyNiYmRlZmInLFxuICAyMDA6ICcjOTBjYWY5JyxcbiAgMzAwOiAnIzY0YjVmNicsXG4gIDQwMDogJyM0MmE1ZjUnLFxuICA1MDA6ICcjMjE5NmYzJyxcbiAgNjAwOiAnIzFlODhlNScsXG4gIDcwMDogJyMxOTc2ZDInLFxuICA4MDA6ICcjMTU2NWMwJyxcbiAgOTAwOiAnIzBkNDdhMScsXG4gIEExMDA6ICcjODJiMWZmJyxcbiAgQTIwMDogJyM0NDhhZmYnLFxuICBBNDAwOiAnIzI5NzlmZicsXG4gIEE3MDA6ICcjMjk2MmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGJsdWU7IiwidmFyIGNvbW1vbiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjZmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJ2YXIgZ3JlZW4gPSB7XG4gIDUwOiAnI2U4ZjVlOScsXG4gIDEwMDogJyNjOGU2YzknLFxuICAyMDA6ICcjYTVkNmE3JyxcbiAgMzAwOiAnIzgxYzc4NCcsXG4gIDQwMDogJyM2NmJiNmEnLFxuICA1MDA6ICcjNGNhZjUwJyxcbiAgNjAwOiAnIzQzYTA0NycsXG4gIDcwMDogJyMzODhlM2MnLFxuICA4MDA6ICcjMmU3ZDMyJyxcbiAgOTAwOiAnIzFiNWUyMCcsXG4gIEExMDA6ICcjYjlmNmNhJyxcbiAgQTIwMDogJyM2OWYwYWUnLFxuICBBNDAwOiAnIzAwZTY3NicsXG4gIEE3MDA6ICcjMDBjODUzJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZWVuOyIsInZhciBncmV5ID0ge1xuICA1MDogJyNmYWZhZmEnLFxuICAxMDA6ICcjZjVmNWY1JyxcbiAgMjAwOiAnI2VlZWVlZScsXG4gIDMwMDogJyNlMGUwZTAnLFxuICA0MDA6ICcjYmRiZGJkJyxcbiAgNTAwOiAnIzllOWU5ZScsXG4gIDYwMDogJyM3NTc1NzUnLFxuICA3MDA6ICcjNjE2MTYxJyxcbiAgODAwOiAnIzQyNDI0MicsXG4gIDkwMDogJyMyMTIxMjEnLFxuICBBMTAwOiAnI2Q1ZDVkNScsXG4gIEEyMDA6ICcjYWFhYWFhJyxcbiAgQTQwMDogJyMzMDMwMzAnLFxuICBBNzAwOiAnIzYxNjE2MSdcbn07XG5leHBvcnQgZGVmYXVsdCBncmV5OyIsInZhciBpbmRpZ28gPSB7XG4gIDUwOiAnI2U4ZWFmNicsXG4gIDEwMDogJyNjNWNhZTknLFxuICAyMDA6ICcjOWZhOGRhJyxcbiAgMzAwOiAnIzc5ODZjYicsXG4gIDQwMDogJyM1YzZiYzAnLFxuICA1MDA6ICcjM2Y1MWI1JyxcbiAgNjAwOiAnIzM5NDlhYicsXG4gIDcwMDogJyMzMDNmOWYnLFxuICA4MDA6ICcjMjgzNTkzJyxcbiAgOTAwOiAnIzFhMjM3ZScsXG4gIEExMDA6ICcjOGM5ZWZmJyxcbiAgQTIwMDogJyM1MzZkZmUnLFxuICBBNDAwOiAnIzNkNWFmZScsXG4gIEE3MDA6ICcjMzA0ZmZlJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGluZGlnbzsiLCJ2YXIgb3JhbmdlID0ge1xuICA1MDogJyNmZmYzZTAnLFxuICAxMDA6ICcjZmZlMGIyJyxcbiAgMjAwOiAnI2ZmY2M4MCcsXG4gIDMwMDogJyNmZmI3NGQnLFxuICA0MDA6ICcjZmZhNzI2JyxcbiAgNTAwOiAnI2ZmOTgwMCcsXG4gIDYwMDogJyNmYjhjMDAnLFxuICA3MDA6ICcjZjU3YzAwJyxcbiAgODAwOiAnI2VmNmMwMCcsXG4gIDkwMDogJyNlNjUxMDAnLFxuICBBMTAwOiAnI2ZmZDE4MCcsXG4gIEEyMDA6ICcjZmZhYjQwJyxcbiAgQTQwMDogJyNmZjkxMDAnLFxuICBBNzAwOiAnI2ZmNmQwMCdcbn07XG5leHBvcnQgZGVmYXVsdCBvcmFuZ2U7IiwidmFyIHBpbmsgPSB7XG4gIDUwOiAnI2ZjZTRlYycsXG4gIDEwMDogJyNmOGJiZDAnLFxuICAyMDA6ICcjZjQ4ZmIxJyxcbiAgMzAwOiAnI2YwNjI5MicsXG4gIDQwMDogJyNlYzQwN2EnLFxuICA1MDA6ICcjZTkxZTYzJyxcbiAgNjAwOiAnI2Q4MWI2MCcsXG4gIDcwMDogJyNjMjE4NWInLFxuICA4MDA6ICcjYWQxNDU3JyxcbiAgOTAwOiAnIzg4MGU0ZicsXG4gIEExMDA6ICcjZmY4MGFiJyxcbiAgQTIwMDogJyNmZjQwODEnLFxuICBBNDAwOiAnI2Y1MDA1NycsXG4gIEE3MDA6ICcjYzUxMTYyJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHBpbms7IiwidmFyIHJlZCA9IHtcbiAgNTA6ICcjZmZlYmVlJyxcbiAgMTAwOiAnI2ZmY2RkMicsXG4gIDIwMDogJyNlZjlhOWEnLFxuICAzMDA6ICcjZTU3MzczJyxcbiAgNDAwOiAnI2VmNTM1MCcsXG4gIDUwMDogJyNmNDQzMzYnLFxuICA2MDA6ICcjZTUzOTM1JyxcbiAgNzAwOiAnI2QzMmYyZicsXG4gIDgwMDogJyNjNjI4MjgnLFxuICA5MDA6ICcjYjcxYzFjJyxcbiAgQTEwMDogJyNmZjhhODAnLFxuICBBMjAwOiAnI2ZmNTI1MicsXG4gIEE0MDA6ICcjZmYxNzQ0JyxcbiAgQTcwMDogJyNkNTAwMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkOyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCBcIi5jb25jYXQodmFsdWUsIFwiIGlzIG91dCBvZiByYW5nZSBbXCIpLmNvbmNhdChtaW4sIFwiLCBcIikuY29uY2F0KG1heCwgXCJdLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSGV4IGNvbG9yLCBpLmUuICNubm4gb3IgI25ubm5ublxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3Iuc3Vic3RyKDEpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiLnsxLFwiLmNvbmNhdChjb2xvci5sZW5ndGggPj0gNiA/IDIgOiAxLCBcIn1cIiksICdnJyk7XG4gIHZhciBjb2xvcnMgPSBjb2xvci5tYXRjaChyZSk7XG5cbiAgaWYgKGNvbG9ycyAmJiBjb2xvcnNbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4gKyBuO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9ycyA/IFwicmdiXCIuY29uY2F0KGNvbG9ycy5sZW5ndGggPT09IDQgPyAnYScgOiAnJywgXCIoXCIpLmNvbmNhdChjb2xvcnMubWFwKGZ1bmN0aW9uIChuLCBpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IDMgPyBwYXJzZUludChuLCAxNikgOiBNYXRoLnJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSAqIDEwMDApIC8gMTAwMDtcbiAgfSkuam9pbignLCAnKSwgXCIpXCIpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGludFRvSGV4KGludCkge1xuICB2YXIgaGV4ID0gaW50LnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIi5jb25jYXQoaGV4KSA6IGhleDtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyByZ2IgZm9ybWF0IHRvIENTUyBoZXggZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIFJHQiBjb2xvciwgaS5lLiByZ2IobiwgbiwgbilcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmcsIGkuZS4gI25ubm5ublxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHZhciBfZGVjb21wb3NlQ29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvciksXG4gICAgICB2YWx1ZXMgPSBfZGVjb21wb3NlQ29sb3IudmFsdWVzO1xuXG4gIHJldHVybiBcIiNcIi5jb25jYXQodmFsdWVzLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBpbnRUb0hleChuKTtcbiAgfSkuam9pbignJykpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gaHNsIGZvcm1hdCB0byByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhTTCBjb2xvciB2YWx1ZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHJnYiBjb2xvciB2YWx1ZXNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciBfY29sb3IgPSBjb2xvcixcbiAgICAgIHZhbHVlcyA9IF9jb2xvci52YWx1ZXM7XG4gIHZhciBoID0gdmFsdWVzWzBdO1xuICB2YXIgcyA9IHZhbHVlc1sxXSAvIDEwMDtcbiAgdmFyIGwgPSB2YWx1ZXNbMl0gLyAxMDA7XG4gIHZhciBhID0gcyAqIE1hdGgubWluKGwsIDEgLSBsKTtcblxuICB2YXIgZiA9IGZ1bmN0aW9uIGYobikge1xuICAgIHZhciBrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAobiArIGggLyAzMCkgJSAxMjtcbiAgICByZXR1cm4gbCAtIGEgKiBNYXRoLm1heChNYXRoLm1pbihrIC0gMywgOSAtIGssIDEpLCAtMSk7XG4gIH07XG5cbiAgdmFyIHR5cGUgPSAncmdiJztcbiAgdmFyIHJnYiA9IFtNYXRoLnJvdW5kKGYoMCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoOCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoNCkgKiAyNTUpXTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ2hzbGEnKSB7XG4gICAgdHlwZSArPSAnYSc7XG4gICAgcmdiLnB1c2godmFsdWVzWzNdKTtcbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcih7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHJnYlxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBhbmQgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogTm90ZTogRG9lcyBub3Qgc3VwcG9ydCByZ2IgJSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge29iamVjdH0gLSBBIE1VSSBjb2xvciBvYmplY3Q6IHt0eXBlOiBzdHJpbmcsIHZhbHVlczogbnVtYmVyW119XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLnR5cGUpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlQ29sb3IoaGV4VG9SZ2IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG5cbiAgaWYgKFsncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBgXCIuY29uY2F0KGNvbG9yLCBcImAgY29sb3IuXFxuV2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKCkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgzLCBjb2xvcikpO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnN1YnN0cmluZyhtYXJrZXIgKyAxLCBjb2xvci5sZW5ndGggLSAxKS5zcGxpdCgnLCcpO1xuICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHZhbHVlc1xuICB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZjogJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xuICogQHBhcmFtIHthcnJheX0gY29sb3IudmFsdWVzIC0gW24sbixuXSBvciBbbixuLG4sbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGU7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHJldHVybiBpIDwgMyA/IHBhcnNlSW50KG4sIDEwKSA6IG47XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICB2YWx1ZXNbMV0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMV0sIFwiJVwiKTtcbiAgICB2YWx1ZXNbMl0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMl0sIFwiJVwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0eXBlLCBcIihcIikuY29uY2F0KHZhbHVlcy5qb2luKCcsICcpLCBcIilcIik7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycy5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JlZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIGNvbnRyYXN0IHJhdGlvIHZhbHVlIGluIHRoZSByYW5nZSAwIC0gMjEuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHJldHVybiAoTWF0aC5tYXgobHVtQSwgbHVtQikgKyAwLjA1KSAvIChNYXRoLm1pbihsdW1BLCBsdW1CKSArIDAuMDUpO1xufVxuLyoqXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcbiAqIG5vcm1hbGl6ZWQgdG8gMCBmb3IgZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiB0aGUgY29sb3IgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIHJnYiA9IGNvbG9yLnR5cGUgPT09ICdoc2wnID8gZGVjb21wb3NlQ29sb3IoaHNsVG9SZ2IoY29sb3IpKS52YWx1ZXMgOiBjb2xvci52YWx1ZXM7XG4gIHJnYiA9IHJnYi5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhbCAvPSAyNTU7IC8vIG5vcm1hbGl6ZWRcblxuICAgIHJldHVybiB2YWwgPD0gMC4wMzkyOCA/IHZhbCAvIDEyLjkyIDogTWF0aC5wb3coKHZhbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KTsgLy8gVHJ1bmNhdGUgYXQgMyBkaWdpdHNcblxuICByZXR1cm4gTnVtYmVyKCgwLjIxMjYgKiByZ2JbMF0gKyAwLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl0pLnRvRml4ZWQoMykpO1xufVxuLyoqXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG9yLCBkZXBlbmRpbmcgb24gaXRzIGx1bWluYW5jZS5cbiAqIExpZ2h0IGNvbG9ycyBhcmUgZGFya2VuZWQsIGRhcmsgY29sb3JzIGFyZSBsaWdodGVuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50PTAuMTUgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1waGFzaXplKGNvbG9yKSB7XG4gIHZhciBjb2VmZmljaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC4xNTtcbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG4vKipcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWVzIGFyZSBvdmVyd3JpdHRlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB2YWx1ZSB0byBzZXQgdGhlIGFscGhhIGNoYW5uZWwgdG8gaW4gdGhlIHJhbmdlIDAgLTFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIFVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYCBpbnN0ZWFkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlKGNvbG9yLCB2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgZmFkZWAgY29sb3IgdXRpbGl0eSB3YXMgcmVuYW1lZCB0byBgYWxwaGFgIHRvIGJldHRlciBkZXNjcmliZSBpdHMgZnVuY3Rpb25hbGl0eS4nLCAnJywgXCJZb3Ugc2hvdWxkIHVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYFwiXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFscGhhKGNvbG9yLCB2YWx1ZSk7XG59XG4vKipcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWUgaXMgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwLTFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFscGhhKGNvbG9yLCB2YWx1ZSkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFsdWUgPSBjbGFtcCh2YWx1ZSk7XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdyZ2InIHx8IGNvbG9yLnR5cGUgPT09ICdoc2wnKSB7XG4gICAgY29sb3IudHlwZSArPSAnYSc7XG4gIH1cblxuICBjb2xvci52YWx1ZXNbM10gPSB2YWx1ZTtcbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn1cbi8qKlxuICogRGFya2VucyBhIGNvbG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudCAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn1cbi8qKlxuICogTGlnaHRlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHRlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIGNvbG9yLnZhbHVlc1syXSArPSAoMTAwIC0gY29sb3IudmFsdWVzWzJdKSAqIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSArPSAoMjU1IC0gY29sb3IudmFsdWVzW2ldKSAqIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuLy8gU29ydGVkIEFTQyBieSBzaXplLiBUaGF0J3MgaW1wb3J0YW50LlxuLy8gSXQgY2FuJ3QgYmUgY29uZmlndXJlZCBhcyBpdCdzIHVzZWQgc3RhdGljYWxseSBmb3IgcHJvcFR5cGVzLlxuZXhwb3J0IHZhciBrZXlzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddOyAvLyBLZWVwIGluIG1pbmQgdGhhdCBAbWVkaWEgaXMgaW5jbHVzaXZlIGJ5IHRoZSBDU1Mgc3BlY2lmaWNhdGlvbi5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQnJlYWtwb2ludHMoYnJlYWtwb2ludHMpIHtcbiAgdmFyIF9icmVha3BvaW50cyR2YWx1ZXMgPSBicmVha3BvaW50cy52YWx1ZXMsXG4gICAgICB2YWx1ZXMgPSBfYnJlYWtwb2ludHMkdmFsdWVzID09PSB2b2lkIDAgPyB7XG4gICAgeHM6IDAsXG4gICAgc206IDYwMCxcbiAgICBtZDogOTYwLFxuICAgIGxnOiAxMjgwLFxuICAgIHhsOiAxOTIwXG4gIH0gOiBfYnJlYWtwb2ludHMkdmFsdWVzLFxuICAgICAgX2JyZWFrcG9pbnRzJHVuaXQgPSBicmVha3BvaW50cy51bml0LFxuICAgICAgdW5pdCA9IF9icmVha3BvaW50cyR1bml0ID09PSB2b2lkIDAgPyAncHgnIDogX2JyZWFrcG9pbnRzJHVuaXQsXG4gICAgICBfYnJlYWtwb2ludHMkc3RlcCA9IGJyZWFrcG9pbnRzLnN0ZXAsXG4gICAgICBzdGVwID0gX2JyZWFrcG9pbnRzJHN0ZXAgPT09IHZvaWQgMCA/IDUgOiBfYnJlYWtwb2ludHMkc3RlcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGJyZWFrcG9pbnRzLCBbXCJ2YWx1ZXNcIiwgXCJ1bml0XCIsIFwic3RlcFwiXSk7XG5cbiAgZnVuY3Rpb24gdXAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHZhbHVlc1trZXldID09PSAnbnVtYmVyJyA/IHZhbHVlc1trZXldIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd24oa2V5KSB7XG4gICAgdmFyIGVuZEluZGV4ID0ga2V5cy5pbmRleE9mKGtleSkgKyAxO1xuICAgIHZhciB1cHBlcmJvdW5kID0gdmFsdWVzW2tleXNbZW5kSW5kZXhdXTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgIC8vIHhsIGRvd24gYXBwbGllcyB0byBhbGwgc2l6ZXNcbiAgICAgIHJldHVybiB1cCgneHMnKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdXBwZXJib3VuZCA9PT0gJ251bWJlcicgJiYgZW5kSW5kZXggPiAwID8gdXBwZXJib3VuZCA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1heC13aWR0aDpcIi5jb25jYXQodmFsdWUgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV0d2VlbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGVuZEluZGV4ID0ga2V5cy5pbmRleE9mKGVuZCk7XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIHVwKHN0YXJ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodHlwZW9mIHZhbHVlc1tzdGFydF0gPT09ICdudW1iZXInID8gdmFsdWVzW3N0YXJ0XSA6IHN0YXJ0KS5jb25jYXQodW5pdCwgXCIpIGFuZCBcIikgKyBcIihtYXgtd2lkdGg6XCIuY29uY2F0KChlbmRJbmRleCAhPT0gLTEgJiYgdHlwZW9mIHZhbHVlc1trZXlzW2VuZEluZGV4ICsgMV1dID09PSAnbnVtYmVyJyA/IHZhbHVlc1trZXlzW2VuZEluZGV4ICsgMV1dIDogZW5kKSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBvbmx5KGtleSkge1xuICAgIHJldHVybiBiZXR3ZWVuKGtleSwga2V5KTtcbiAgfVxuXG4gIHZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gd2lkdGgoa2V5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS53YXJuKFtcIk1hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLmJyZWFrcG9pbnRzLndpZHRoYCB1dGlsaXR5IGlzIGRlcHJlY2F0ZWQgYmVjYXVzZSBpdCdzIHJlZHVuZGFudC5cIiwgJ1VzZSB0aGUgYHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc2AgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBrZXlzOiBrZXlzLFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIHVwOiB1cCxcbiAgICBkb3duOiBkb3duLFxuICAgIGJldHdlZW46IGJldHdlZW4sXG4gICAgb25seTogb25seSxcbiAgICB3aWR0aDogd2lkdGhcbiAgfSwgb3RoZXIpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zKSB7XG4gIHZhciBfdG9vbGJhcjtcblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGd1dHRlcnM6IGZ1bmN0aW9uIGd1dHRlcnMoKSB7XG4gICAgICB2YXIgc3R5bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiB0aGVtZS5taXhpbnMuZ3V0dGVycygpIGlzIGRlcHJlY2F0ZWQuJywgJ1lvdSBjYW4gdXNlIHRoZSBzb3VyY2Ugb2YgdGhlIG1peGluIGRpcmVjdGx5OicsIFwiXFxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcXG4gICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxcbiAgICAgIH0sXFxuICAgICAgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDIpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMilcbiAgICAgIH0sIHN0eWxlcywgX2RlZmluZVByb3BlcnR5KHt9LCBicmVha3BvaW50cy51cCgnc20nKSwgX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDMpXG4gICAgICB9LCBzdHlsZXNbYnJlYWtwb2ludHMudXAoJ3NtJyldKSkpO1xuICAgIH0sXG4gICAgdG9vbGJhcjogKF90b29sYmFyID0ge1xuICAgICAgbWluSGVpZ2h0OiA1NlxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgXCJcIi5jb25jYXQoYnJlYWtwb2ludHMudXAoJ3hzJyksIFwiIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIiksIHtcbiAgICAgIG1pbkhlaWdodDogNDhcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF90b29sYmFyLCBicmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluSGVpZ2h0OiA2NFxuICAgIH0pLCBfdG9vbGJhcilcbiAgfSwgbWl4aW5zKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbG9ycy9jb21tb24nO1xuaW1wb3J0IGdyZXkgZnJvbSAnLi4vY29sb3JzL2dyZXknO1xuaW1wb3J0IGluZGlnbyBmcm9tICcuLi9jb2xvcnMvaW5kaWdvJztcbmltcG9ydCBwaW5rIGZyb20gJy4uL2NvbG9ycy9waW5rJztcbmltcG9ydCByZWQgZnJvbSAnLi4vY29sb3JzL3JlZCc7XG5pbXBvcnQgb3JhbmdlIGZyb20gJy4uL2NvbG9ycy9vcmFuZ2UnO1xuaW1wb3J0IGJsdWUgZnJvbSAnLi4vY29sb3JzL2JsdWUnO1xuaW1wb3J0IGdyZWVuIGZyb20gJy4uL2NvbG9ycy9ncmVlbic7XG5pbXBvcnQgeyBkYXJrZW4sIGdldENvbnRyYXN0UmF0aW8sIGxpZ2h0ZW4gfSBmcm9tICcuL2NvbG9yTWFuaXB1bGF0b3InO1xuZXhwb3J0IHZhciBsaWdodCA9IHtcbiAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSB0ZXh0LlxuICB0ZXh0OiB7XG4gICAgLy8gVGhlIG1vc3QgaW1wb3J0YW50IHRleHQuXG4gICAgcHJpbWFyeTogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIC8vIFNlY29uZGFyeSB0ZXh0LlxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIERpc2FibGVkIHRleHQgaGF2ZSBldmVuIGxvd2VyIHZpc3VhbCBwcm9taW5lbmNlLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgLy8gVGV4dCBoaW50cy5cbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KSdcbiAgfSxcbiAgLy8gVGhlIGNvbG9yIHVzZWQgdG8gZGl2aWRlIGRpZmZlcmVudCBlbGVtZW50cy5cbiAgZGl2aWRlcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAvLyBUaGUgYmFja2dyb3VuZCBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgc3VyZmFjZXMuXG4gIC8vIENvbnNpc3RlbmN5IGJldHdlZW4gdGhlc2UgdmFsdWVzIGlzIGltcG9ydGFudC5cbiAgYmFja2dyb3VuZDoge1xuICAgIHBhcGVyOiBjb21tb24ud2hpdGUsXG4gICAgZGVmYXVsdDogZ3JleVs1MF1cbiAgfSxcbiAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBhY3Rpb24gZWxlbWVudHMuXG4gIGFjdGlvbjoge1xuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBhY3RpdmUgYWN0aW9uIGxpa2UgYW4gaWNvbiBidXR0b24uXG4gICAgYWN0aXZlOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGhvdmVyZWQgYWN0aW9uLlxuICAgIGhvdmVyOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgaG92ZXJPcGFjaXR5OiAwLjA0LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIHNlbGVjdGVkIGFjdGlvbi5cbiAgICBzZWxlY3RlZDogJ3JnYmEoMCwgMCwgMCwgMC4wOCknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4wOCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJyxcbiAgICAvLyBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBkaXNhYmxlZE9wYWNpdHk6IDAuMzgsXG4gICAgZm9jdXM6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBmb2N1c09wYWNpdHk6IDAuMTIsXG4gICAgYWN0aXZhdGVkT3BhY2l0eTogMC4xMlxuICB9XG59O1xuZXhwb3J0IHZhciBkYXJrID0ge1xuICB0ZXh0OiB7XG4gICAgcHJpbWFyeTogY29tbW9uLndoaXRlLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIGhpbnQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIGljb246ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknXG4gIH0sXG4gIGRpdmlkZXI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgYmFja2dyb3VuZDoge1xuICAgIHBhcGVyOiBncmV5WzgwMF0sXG4gICAgZGVmYXVsdDogJyMzMDMwMzAnXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGFjdGl2ZTogY29tbW9uLndoaXRlLFxuICAgIGhvdmVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KScsXG4gICAgaG92ZXJPcGFjaXR5OiAwLjA4LFxuICAgIHNlbGVjdGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjE2LFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpJyxcbiAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBkaXNhYmxlZE9wYWNpdHk6IDAuMzgsXG4gICAgZm9jdXM6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgICBmb2N1c09wYWNpdHk6IDAuMTIsXG4gICAgYWN0aXZhdGVkT3BhY2l0eTogMC4yNFxuICB9XG59O1xuXG5mdW5jdGlvbiBhZGRMaWdodE9yRGFyayhpbnRlbnQsIGRpcmVjdGlvbiwgc2hhZGUsIHRvbmFsT2Zmc2V0KSB7XG4gIHZhciB0b25hbE9mZnNldExpZ2h0ID0gdG9uYWxPZmZzZXQubGlnaHQgfHwgdG9uYWxPZmZzZXQ7XG4gIHZhciB0b25hbE9mZnNldERhcmsgPSB0b25hbE9mZnNldC5kYXJrIHx8IHRvbmFsT2Zmc2V0ICogMS41O1xuXG4gIGlmICghaW50ZW50W2RpcmVjdGlvbl0pIHtcbiAgICBpZiAoaW50ZW50Lmhhc093blByb3BlcnR5KHNoYWRlKSkge1xuICAgICAgaW50ZW50W2RpcmVjdGlvbl0gPSBpbnRlbnRbc2hhZGVdO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGlnaHQnKSB7XG4gICAgICBpbnRlbnQubGlnaHQgPSBsaWdodGVuKGludGVudC5tYWluLCB0b25hbE9mZnNldExpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2RhcmsnKSB7XG4gICAgICBpbnRlbnQuZGFyayA9IGRhcmtlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXREYXJrKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZShwYWxldHRlKSB7XG4gIHZhciBfcGFsZXR0ZSRwcmltYXJ5ID0gcGFsZXR0ZS5wcmltYXJ5LFxuICAgICAgcHJpbWFyeSA9IF9wYWxldHRlJHByaW1hcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogaW5kaWdvWzMwMF0sXG4gICAgbWFpbjogaW5kaWdvWzUwMF0sXG4gICAgZGFyazogaW5kaWdvWzcwMF1cbiAgfSA6IF9wYWxldHRlJHByaW1hcnksXG4gICAgICBfcGFsZXR0ZSRzZWNvbmRhcnkgPSBwYWxldHRlLnNlY29uZGFyeSxcbiAgICAgIHNlY29uZGFyeSA9IF9wYWxldHRlJHNlY29uZGFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBwaW5rLkEyMDAsXG4gICAgbWFpbjogcGluay5BNDAwLFxuICAgIGRhcms6IHBpbmsuQTcwMFxuICB9IDogX3BhbGV0dGUkc2Vjb25kYXJ5LFxuICAgICAgX3BhbGV0dGUkZXJyb3IgPSBwYWxldHRlLmVycm9yLFxuICAgICAgZXJyb3IgPSBfcGFsZXR0ZSRlcnJvciA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiByZWRbMzAwXSxcbiAgICBtYWluOiByZWRbNTAwXSxcbiAgICBkYXJrOiByZWRbNzAwXVxuICB9IDogX3BhbGV0dGUkZXJyb3IsXG4gICAgICBfcGFsZXR0ZSR3YXJuaW5nID0gcGFsZXR0ZS53YXJuaW5nLFxuICAgICAgd2FybmluZyA9IF9wYWxldHRlJHdhcm5pbmcgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogb3JhbmdlWzMwMF0sXG4gICAgbWFpbjogb3JhbmdlWzUwMF0sXG4gICAgZGFyazogb3JhbmdlWzcwMF1cbiAgfSA6IF9wYWxldHRlJHdhcm5pbmcsXG4gICAgICBfcGFsZXR0ZSRpbmZvID0gcGFsZXR0ZS5pbmZvLFxuICAgICAgaW5mbyA9IF9wYWxldHRlJGluZm8gPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogYmx1ZVszMDBdLFxuICAgIG1haW46IGJsdWVbNTAwXSxcbiAgICBkYXJrOiBibHVlWzcwMF1cbiAgfSA6IF9wYWxldHRlJGluZm8sXG4gICAgICBfcGFsZXR0ZSRzdWNjZXNzID0gcGFsZXR0ZS5zdWNjZXNzLFxuICAgICAgc3VjY2VzcyA9IF9wYWxldHRlJHN1Y2Nlc3MgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogZ3JlZW5bMzAwXSxcbiAgICBtYWluOiBncmVlbls1MDBdLFxuICAgIGRhcms6IGdyZWVuWzcwMF1cbiAgfSA6IF9wYWxldHRlJHN1Y2Nlc3MsXG4gICAgICBfcGFsZXR0ZSR0eXBlID0gcGFsZXR0ZS50eXBlLFxuICAgICAgdHlwZSA9IF9wYWxldHRlJHR5cGUgPT09IHZvaWQgMCA/ICdsaWdodCcgOiBfcGFsZXR0ZSR0eXBlLFxuICAgICAgX3BhbGV0dGUkY29udHJhc3RUaHJlID0gcGFsZXR0ZS5jb250cmFzdFRocmVzaG9sZCxcbiAgICAgIGNvbnRyYXN0VGhyZXNob2xkID0gX3BhbGV0dGUkY29udHJhc3RUaHJlID09PSB2b2lkIDAgPyAzIDogX3BhbGV0dGUkY29udHJhc3RUaHJlLFxuICAgICAgX3BhbGV0dGUkdG9uYWxPZmZzZXQgPSBwYWxldHRlLnRvbmFsT2Zmc2V0LFxuICAgICAgdG9uYWxPZmZzZXQgPSBfcGFsZXR0ZSR0b25hbE9mZnNldCA9PT0gdm9pZCAwID8gMC4yIDogX3BhbGV0dGUkdG9uYWxPZmZzZXQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwYWxldHRlLCBbXCJwcmltYXJ5XCIsIFwic2Vjb25kYXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ0eXBlXCIsIFwiY29udHJhc3RUaHJlc2hvbGRcIiwgXCJ0b25hbE9mZnNldFwiXSk7IC8vIFVzZSB0aGUgc2FtZSBsb2dpYyBhc1xuICAvLyBCb290c3RyYXA6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzFkNmUzNzEwZGQ0NDdkZTFhMjAwZjI5ZThmYTUyMWY4YTA5MDhmNzAvc2Nzcy9fZnVuY3Rpb25zLnNjc3MjTDU5XG4gIC8vIGFuZCBtYXRlcmlhbC1jb21wb25lbnRzLXdlYiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL2FjNDZiODg2M2M0ZGFiOWZjMjJjNGM2NjJkYzZiZDFiNjVkZDY1MmYvcGFja2FnZXMvbWRjLXRoZW1lL19mdW5jdGlvbnMuc2NzcyNMNTRcblxuXG4gIGZ1bmN0aW9uIGdldENvbnRyYXN0VGV4dChiYWNrZ3JvdW5kKSB7XG4gICAgdmFyIGNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgZGFyay50ZXh0LnByaW1hcnkpID49IGNvbnRyYXN0VGhyZXNob2xkID8gZGFyay50ZXh0LnByaW1hcnkgOiBsaWdodC50ZXh0LnByaW1hcnk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGNvbnRyYXN0ID0gZ2V0Q29udHJhc3RSYXRpbyhiYWNrZ3JvdW5kLCBjb250cmFzdFRleHQpO1xuXG4gICAgICBpZiAoY29udHJhc3QgPCAzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBjb250cmFzdCByYXRpbyBvZiBcIi5jb25jYXQoY29udHJhc3QsIFwiOjEgZm9yIFwiKS5jb25jYXQoY29udHJhc3RUZXh0LCBcIiBvbiBcIikuY29uY2F0KGJhY2tncm91bmQpLCAnZmFsbHMgYmVsb3cgdGhlIFdDQUcgcmVjb21tZW5kZWQgYWJzb2x1dGUgbWluaW11bSBjb250cmFzdCByYXRpbyBvZiAzOjEuJywgJ2h0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3Zpc3VhbC1hdWRpby1jb250cmFzdC1jb250cmFzdCddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJhc3RUZXh0O1xuICB9XG5cbiAgdmFyIGF1Z21lbnRDb2xvciA9IGZ1bmN0aW9uIGF1Z21lbnRDb2xvcihjb2xvcikge1xuICAgIHZhciBtYWluU2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDUwMDtcbiAgICB2YXIgbGlnaHRTaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMzAwO1xuICAgIHZhciBkYXJrU2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDcwMDtcbiAgICBjb2xvciA9IF9leHRlbmRzKHt9LCBjb2xvcik7XG5cbiAgICBpZiAoIWNvbG9yLm1haW4gJiYgY29sb3JbbWFpblNoYWRlXSkge1xuICAgICAgY29sb3IubWFpbiA9IGNvbG9yW21haW5TaGFkZV07XG4gICAgfVxuXG4gICAgaWYgKCFjb2xvci5tYWluKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5UaGUgY29sb3Igb2JqZWN0IG5lZWRzIHRvIGhhdmUgYSBgbWFpbmAgcHJvcGVydHkgb3IgYSBgXCIuY29uY2F0KG1haW5TaGFkZSwgXCJgIHByb3BlcnR5LlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNCwgbWFpblNoYWRlKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvci5tYWluICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuYGNvbG9yLm1haW5gIHNob3VsZCBiZSBhIHN0cmluZywgYnV0IGBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbiksIFwiYCB3YXMgcHJvdmlkZWQgaW5zdGVhZC5cXG5cXG5EaWQgeW91IGludGVuZCB0byB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYXBwcm9hY2hlcz9cXG5cXG5pbXBvcnQge1xceEEwZ3JlZW4gfSBmcm9tIFxcXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcXFwiO1xcblxcbmNvbnN0IHRoZW1lMSA9IGNyZWF0ZVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogZ3JlZW4sXFxufSB9KTtcXG5cXG5jb25zdCB0aGVtZTIgPSBjcmVhdGVUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IHsgbWFpbjogZ3JlZW5bNTAwXSB9LFxcbn0gfSk7XCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg1LCBKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSkpO1xuICAgIH1cblxuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnbGlnaHQnLCBsaWdodFNoYWRlLCB0b25hbE9mZnNldCk7XG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdkYXJrJywgZGFya1NoYWRlLCB0b25hbE9mZnNldCk7XG5cbiAgICBpZiAoIWNvbG9yLmNvbnRyYXN0VGV4dCkge1xuICAgICAgY29sb3IuY29udHJhc3RUZXh0ID0gZ2V0Q29udHJhc3RUZXh0KGNvbG9yLm1haW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvcjtcbiAgfTtcblxuICB2YXIgdHlwZXMgPSB7XG4gICAgZGFyazogZGFyayxcbiAgICBsaWdodDogbGlnaHRcbiAgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghdHlwZXNbdHlwZV0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVGhlIHBhbGV0dGUgdHlwZSBgXCIuY29uY2F0KHR5cGUsIFwiYCBpcyBub3Qgc3VwcG9ydGVkLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBhbGV0dGVPdXRwdXQgPSBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIC8vIEEgY29sbGVjdGlvbiBvZiBjb21tb24gY29sb3JzLlxuICAgIGNvbW1vbjogY29tbW9uLFxuICAgIC8vIFRoZSBwYWxldHRlIHR5cGUsIGNhbiBiZSBsaWdodCBvciBkYXJrLlxuICAgIHR5cGU6IHR5cGUsXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBwcmltYXJ5IGludGVyZmFjZSBlbGVtZW50cyBmb3IgYSB1c2VyLlxuICAgIHByaW1hcnk6IGF1Z21lbnRDb2xvcihwcmltYXJ5KSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHNlY29uZGFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBzZWNvbmRhcnk6IGF1Z21lbnRDb2xvcihzZWNvbmRhcnksICdBNDAwJywgJ0EyMDAnLCAnQTcwMCcpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgaW50ZXJmYWNlIGVsZW1lbnRzIHRoYXQgdGhlIHVzZXIgc2hvdWxkIGJlIG1hZGUgYXdhcmUgb2YuXG4gICAgZXJyb3I6IGF1Z21lbnRDb2xvcihlcnJvciksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBwb3RlbnRpYWxseSBkYW5nZXJvdXMgYWN0aW9ucyBvciBpbXBvcnRhbnQgbWVzc2FnZXMuXG4gICAgd2FybmluZzogYXVnbWVudENvbG9yKHdhcm5pbmcpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBwcmVzZW50IGluZm9ybWF0aW9uIHRvIHRoZSB1c2VyIHRoYXQgaXMgbmV1dHJhbCBhbmQgbm90IG5lY2Vzc2FyaWx5IGltcG9ydGFudC5cbiAgICBpbmZvOiBhdWdtZW50Q29sb3IoaW5mbyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIGluZGljYXRlIHRoZSBzdWNjZXNzZnVsIGNvbXBsZXRpb24gb2YgYW4gYWN0aW9uIHRoYXQgdXNlciB0cmlnZ2VyZWQuXG4gICAgc3VjY2VzczogYXVnbWVudENvbG9yKHN1Y2Nlc3MpLFxuICAgIC8vIFRoZSBncmV5IGNvbG9ycy5cbiAgICBncmV5OiBncmV5LFxuICAgIC8vIFVzZWQgYnkgYGdldENvbnRyYXN0VGV4dCgpYCB0byBtYXhpbWl6ZSB0aGUgY29udHJhc3QgYmV0d2VlblxuICAgIC8vIHRoZSBiYWNrZ3JvdW5kIGFuZCB0aGUgdGV4dC5cbiAgICBjb250cmFzdFRocmVzaG9sZDogY29udHJhc3RUaHJlc2hvbGQsXG4gICAgLy8gVGFrZXMgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCByZXR1cm5zIHRoZSB0ZXh0IGNvbG9yIHRoYXQgbWF4aW1pemVzIHRoZSBjb250cmFzdC5cbiAgICBnZXRDb250cmFzdFRleHQ6IGdldENvbnRyYXN0VGV4dCxcbiAgICAvLyBHZW5lcmF0ZSBhIHJpY2ggY29sb3Igb2JqZWN0LlxuICAgIGF1Z21lbnRDb2xvcjogYXVnbWVudENvbG9yLFxuICAgIC8vIFVzZWQgYnkgdGhlIGZ1bmN0aW9ucyBiZWxvdyB0byBzaGlmdCBhIGNvbG9yJ3MgbHVtaW5hbmNlIGJ5IGFwcHJveGltYXRlbHlcbiAgICAvLyB0d28gaW5kZXhlcyB3aXRoaW4gaXRzIHRvbmFsIHBhbGV0dGUuXG4gICAgLy8gRS5nLiwgc2hpZnQgZnJvbSBSZWQgNTAwIHRvIFJlZCAzMDAgb3IgUmVkIDcwMC5cbiAgICB0b25hbE9mZnNldDogdG9uYWxPZmZzZXRcbiAgfSwgdHlwZXNbdHlwZV0pLCBvdGhlcik7XG4gIHJldHVybiBwYWxldHRlT3V0cHV0O1xufSIsImltcG9ydCB7IGNyZWF0ZVVuYXJ5U3BhY2luZyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zeXN0ZW0nO1xudmFyIHdhcm5PbmNlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3BhY2luZygpIHtcbiAgdmFyIHNwYWNpbmdJbnB1dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogODtcblxuICAvLyBBbHJlYWR5IHRyYW5zZm9ybWVkLlxuICBpZiAoc3BhY2luZ0lucHV0Lm11aSkge1xuICAgIHJldHVybiBzcGFjaW5nSW5wdXQ7XG4gIH0gLy8gTWF0ZXJpYWwgRGVzaWduIGxheW91dHMgYXJlIHZpc3VhbGx5IGJhbGFuY2VkLiBNb3N0IG1lYXN1cmVtZW50cyBhbGlnbiB0byBhbiA4ZHAgZ3JpZCBhcHBsaWVkLCB3aGljaCBhbGlnbnMgYm90aCBzcGFjaW5nIGFuZCB0aGUgb3ZlcmFsbCBsYXlvdXQuXG4gIC8vIFNtYWxsZXIgY29tcG9uZW50cywgc3VjaCBhcyBpY29ucyBhbmQgdHlwZSwgY2FuIGFsaWduIHRvIGEgNGRwIGdyaWQuXG4gIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2xheW91dC91bmRlcnN0YW5kaW5nLWxheW91dC5odG1sI3VzYWdlXG5cblxuICB2YXIgdHJhbnNmb3JtID0gY3JlYXRlVW5hcnlTcGFjaW5nKHtcbiAgICBzcGFjaW5nOiBzcGFjaW5nSW5wdXRcbiAgfSk7XG5cbiAgdmFyIHNwYWNpbmcgPSBmdW5jdGlvbiBzcGFjaW5nKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoYXJncy5sZW5ndGggPD0gNCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUb28gbWFueSBhcmd1bWVudHMgcHJvdmlkZWQsIGV4cGVjdGVkIGJldHdlZW4gMCBhbmQgNCwgZ290IFwiLmNvbmNhdChhcmdzLmxlbmd0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybSgxKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oYXJnc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3MubWFwKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgb3V0cHV0ID0gdHJhbnNmb3JtKGFyZ3VtZW50KTtcbiAgICAgIHJldHVybiB0eXBlb2Ygb3V0cHV0ID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KG91dHB1dCwgXCJweFwiKSA6IG91dHB1dDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH07IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRvIHJlbW92ZSBpbiB2NS5cblxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcGFjaW5nLCAndW5pdCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghd2Fybk9uY2UgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlbWUuc3BhY2luZy51bml0IHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuJywgJ0l0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS4nLCAnWW91IGNhbiByZXBsYWNlIGB0aGVtZS5zcGFjaW5nLnVuaXQgKiB5YCB3aXRoIGB0aGVtZS5zcGFjaW5nKHkpYC4nLCAnJywgJ1lvdSBjYW4gdXNlIHRoZSBgaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWF0ZXJpYWwtdWktY29kZW1vZC9SRUFETUUubWQjdGhlbWUtc3BhY2luZy1hcGlgIG1pZ3JhdGlvbiBoZWxwZXIgdG8gbWFrZSB0aGUgcHJvY2VzcyBzbW9vdGhlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuT25jZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGFjaW5nSW5wdXQ7XG4gICAgfVxuICB9KTtcbiAgc3BhY2luZy5tdWkgPSB0cnVlO1xuICByZXR1cm4gc3BhY2luZztcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnLi9jcmVhdGVCcmVha3BvaW50cyc7XG5pbXBvcnQgY3JlYXRlTWl4aW5zIGZyb20gJy4vY3JlYXRlTWl4aW5zJztcbmltcG9ydCBjcmVhdGVQYWxldHRlIGZyb20gJy4vY3JlYXRlUGFsZXR0ZSc7XG5pbXBvcnQgY3JlYXRlVHlwb2dyYXBoeSBmcm9tICcuL2NyZWF0ZVR5cG9ncmFwaHknO1xuaW1wb3J0IHNoYWRvd3MgZnJvbSAnLi9zaGFkb3dzJztcbmltcG9ydCBzaGFwZSBmcm9tICcuL3NoYXBlJztcbmltcG9ydCBjcmVhdGVTcGFjaW5nIGZyb20gJy4vY3JlYXRlU3BhY2luZyc7XG5pbXBvcnQgdHJhbnNpdGlvbnMgZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5pbXBvcnQgekluZGV4IGZyb20gJy4vekluZGV4JztcblxuZnVuY3Rpb24gY3JlYXRlVGhlbWUoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHNJbnB1dCA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkbWl4aW5zID0gb3B0aW9ucy5taXhpbnMsXG4gICAgICBtaXhpbnNJbnB1dCA9IF9vcHRpb25zJG1peGlucyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRtaXhpbnMsXG4gICAgICBfb3B0aW9ucyRwYWxldHRlID0gb3B0aW9ucy5wYWxldHRlLFxuICAgICAgcGFsZXR0ZUlucHV0ID0gX29wdGlvbnMkcGFsZXR0ZSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRwYWxldHRlLFxuICAgICAgc3BhY2luZ0lucHV0ID0gb3B0aW9ucy5zcGFjaW5nLFxuICAgICAgX29wdGlvbnMkdHlwb2dyYXBoeSA9IG9wdGlvbnMudHlwb2dyYXBoeSxcbiAgICAgIHR5cG9ncmFwaHlJbnB1dCA9IF9vcHRpb25zJHR5cG9ncmFwaHkgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkdHlwb2dyYXBoeSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImJyZWFrcG9pbnRzXCIsIFwibWl4aW5zXCIsIFwicGFsZXR0ZVwiLCBcInNwYWNpbmdcIiwgXCJ0eXBvZ3JhcGh5XCJdKTtcblxuICB2YXIgcGFsZXR0ZSA9IGNyZWF0ZVBhbGV0dGUocGFsZXR0ZUlucHV0KTtcbiAgdmFyIGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoYnJlYWtwb2ludHNJbnB1dCk7XG4gIHZhciBzcGFjaW5nID0gY3JlYXRlU3BhY2luZyhzcGFjaW5nSW5wdXQpO1xuICB2YXIgbXVpVGhlbWUgPSBkZWVwbWVyZ2Uoe1xuICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIG1peGluczogY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnNJbnB1dCksXG4gICAgb3ZlcnJpZGVzOiB7fSxcbiAgICAvLyBJbmplY3QgY3VzdG9tIHN0eWxlc1xuICAgIHBhbGV0dGU6IHBhbGV0dGUsXG4gICAgcHJvcHM6IHt9LFxuICAgIC8vIFByb3ZpZGUgZGVmYXVsdCBwcm9wc1xuICAgIHNoYWRvd3M6IHNoYWRvd3MsXG4gICAgdHlwb2dyYXBoeTogY3JlYXRlVHlwb2dyYXBoeShwYWxldHRlLCB0eXBvZ3JhcGh5SW5wdXQpLFxuICAgIHNwYWNpbmc6IHNwYWNpbmcsXG4gICAgc2hhcGU6IHNoYXBlLFxuICAgIHRyYW5zaXRpb25zOiB0cmFuc2l0aW9ucyxcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9LCBvdGhlcik7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgbXVpVGhlbWUgPSBhcmdzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhcmd1bWVudCkge1xuICAgIHJldHVybiBkZWVwbWVyZ2UoYWNjLCBhcmd1bWVudCk7XG4gIH0sIG11aVRoZW1lKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBwc2V1ZG9DbGFzc2VzID0gWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZvY3VzZWQnLCAnZm9jdXNWaXNpYmxlJywgJ3JlcXVpcmVkJywgJ2V4cGFuZGVkJywgJ3NlbGVjdGVkJ107XG5cbiAgICB2YXIgdHJhdmVyc2UgPSBmdW5jdGlvbiB0cmF2ZXJzZShub2RlLCBwYXJlbnRLZXkpIHtcbiAgICAgIHZhciBkZXB0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcbiAgICAgIHZhciBrZXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cbiAgICAgIGZvciAoa2V5IGluIG5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtrZXldO1xuXG4gICAgICAgIGlmIChkZXB0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignTXVpJykgPT09IDAgJiYgY2hpbGQpIHtcbiAgICAgICAgICAgIHRyYXZlcnNlKGNoaWxkLCBrZXksIGRlcHRoICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBzZXVkb0NsYXNzZXMuaW5kZXhPZihrZXkpICE9PSAtMSAmJiBPYmplY3Qua2V5cyhjaGlsZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgYFwiLmNvbmNhdChwYXJlbnRLZXksIFwiYCBjb21wb25lbnQgaW5jcmVhc2VzIFwiKSArIFwidGhlIENTUyBzcGVjaWZpY2l0eSBvZiB0aGUgYFwiLmNvbmNhdChrZXksIFwiYCBpbnRlcm5hbCBzdGF0ZS5cIiksICdZb3UgY2FuIG5vdCBvdmVycmlkZSBpdCBsaWtlIHRoaXM6ICcsIEpTT04uc3RyaW5naWZ5KG5vZGUsIG51bGwsIDIpLCAnJywgJ0luc3RlYWQsIHlvdSBuZWVkIHRvIHVzZSB0aGUgJHJ1bGVOYW1lIHN5bnRheDonLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHJvb3Q6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCImJFwiLmNvbmNhdChrZXkpLCBjaGlsZClcbiAgICAgICAgICAgIH0sIG51bGwsIDIpLCAnJywgJ2h0dHBzOi8vbXVpLmNvbS9yL3BzZXVkby1jbGFzc2VzLWd1aWRlJ10uam9pbignXFxuJykpO1xuICAgICAgICAgIH0gLy8gUmVtb3ZlIHRoZSBzdHlsZSB0byBwcmV2ZW50IGdsb2JhbCBjb25mbGljdHMuXG5cblxuICAgICAgICAgIG5vZGVba2V5XSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyYXZlcnNlKG11aVRoZW1lLm92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gbXVpVGhlbWU7XG59XG5cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVpVGhlbWUoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlIGNyZWF0ZU11aVRoZW1lIGZ1bmN0aW9uIHdhcyByZW5hbWVkIHRvIGNyZWF0ZVRoZW1lLicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTUpIC8gMWU1O1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnR5cG9ncmFwaHkucm91bmRgIGhlbHBlciBpcyBkZXByZWNhdGVkLicsICdIZWFkIHRvIGh0dHBzOi8vbXVpLmNvbS9yL21pZ3JhdGlvbi12NC8jdGhlbWUgZm9yIGEgbWlncmF0aW9uIHBhdGguJ10uam9pbignXFxuJykpO1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvdW5kKHZhbHVlKTtcbn1cblxudmFyIGNhc2VBbGxDYXBzID0ge1xuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xufTtcbnZhciBkZWZhdWx0Rm9udEZhbWlseSA9ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnO1xuLyoqXG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdGhlLXR5cGUtc3lzdGVtLmh0bWx9XG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdW5kZXJzdGFuZGluZy10eXBvZ3JhcGh5Lmh0bWx9XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVHlwb2dyYXBoeShwYWxldHRlLCB0eXBvZ3JhcGh5KSB7XG4gIHZhciBfcmVmID0gdHlwZW9mIHR5cG9ncmFwaHkgPT09ICdmdW5jdGlvbicgPyB0eXBvZ3JhcGh5KHBhbGV0dGUpIDogdHlwb2dyYXBoeSxcbiAgICAgIF9yZWYkZm9udEZhbWlseSA9IF9yZWYuZm9udEZhbWlseSxcbiAgICAgIGZvbnRGYW1pbHkgPSBfcmVmJGZvbnRGYW1pbHkgPT09IHZvaWQgMCA/IGRlZmF1bHRGb250RmFtaWx5IDogX3JlZiRmb250RmFtaWx5LFxuICAgICAgX3JlZiRmb250U2l6ZSA9IF9yZWYuZm9udFNpemUsXG4gICAgICBmb250U2l6ZSA9IF9yZWYkZm9udFNpemUgPT09IHZvaWQgMCA/IDE0IDogX3JlZiRmb250U2l6ZSxcbiAgICAgIF9yZWYkZm9udFdlaWdodExpZ2h0ID0gX3JlZi5mb250V2VpZ2h0TGlnaHQsXG4gICAgICBmb250V2VpZ2h0TGlnaHQgPSBfcmVmJGZvbnRXZWlnaHRMaWdodCA9PT0gdm9pZCAwID8gMzAwIDogX3JlZiRmb250V2VpZ2h0TGlnaHQsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRSZWd1bGEgPSBfcmVmLmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgZm9udFdlaWdodFJlZ3VsYXIgPSBfcmVmJGZvbnRXZWlnaHRSZWd1bGEgPT09IHZvaWQgMCA/IDQwMCA6IF9yZWYkZm9udFdlaWdodFJlZ3VsYSxcbiAgICAgIF9yZWYkZm9udFdlaWdodE1lZGl1bSA9IF9yZWYuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPT09IHZvaWQgMCA/IDUwMCA6IF9yZWYkZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIF9yZWYkZm9udFdlaWdodEJvbGQgPSBfcmVmLmZvbnRXZWlnaHRCb2xkLFxuICAgICAgZm9udFdlaWdodEJvbGQgPSBfcmVmJGZvbnRXZWlnaHRCb2xkID09PSB2b2lkIDAgPyA3MDAgOiBfcmVmJGZvbnRXZWlnaHRCb2xkLFxuICAgICAgX3JlZiRodG1sRm9udFNpemUgPSBfcmVmLmh0bWxGb250U2l6ZSxcbiAgICAgIGh0bWxGb250U2l6ZSA9IF9yZWYkaHRtbEZvbnRTaXplID09PSB2b2lkIDAgPyAxNiA6IF9yZWYkaHRtbEZvbnRTaXplLFxuICAgICAgYWxsVmFyaWFudHMgPSBfcmVmLmFsbFZhcmlhbnRzLFxuICAgICAgcHhUb1JlbTIgPSBfcmVmLnB4VG9SZW0sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJmb250RmFtaWx5XCIsIFwiZm9udFNpemVcIiwgXCJmb250V2VpZ2h0TGlnaHRcIiwgXCJmb250V2VpZ2h0UmVndWxhclwiLCBcImZvbnRXZWlnaHRNZWRpdW1cIiwgXCJmb250V2VpZ2h0Qm9sZFwiLCBcImh0bWxGb250U2l6ZVwiLCBcImFsbFZhcmlhbnRzXCIsIFwicHhUb1JlbVwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBmb250U2l6ZWAgaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBodG1sRm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGh0bWxGb250U2l6ZWAgaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvZWYgPSBmb250U2l6ZSAvIDE0O1xuXG4gIHZhciBweFRvUmVtID0gcHhUb1JlbTIgfHwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc2l6ZSAvIGh0bWxGb250U2l6ZSAqIGNvZWYsIFwicmVtXCIpO1xuICB9O1xuXG4gIHZhciBidWlsZFZhcmlhbnQgPSBmdW5jdGlvbiBidWlsZFZhcmlhbnQoZm9udFdlaWdodCwgc2l6ZSwgbGluZUhlaWdodCwgbGV0dGVyU3BhY2luZywgY2FzaW5nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LFxuICAgICAgZm9udFNpemU6IHB4VG9SZW0oc2l6ZSksXG4gICAgICAvLyBVbml0bGVzcyBmb2xsb3dpbmcgaHR0cHM6Ly9tZXllcndlYi5jb20vZXJpYy90aG91Z2h0cy8yMDA2LzAyLzA4L3VuaXRsZXNzLWxpbmUtaGVpZ2h0cy9cbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHRcbiAgICB9LCBmb250RmFtaWx5ID09PSBkZWZhdWx0Rm9udEZhbWlseSA/IHtcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiXCIuY29uY2F0KHJvdW5kKGxldHRlclNwYWNpbmcgLyBzaXplKSwgXCJlbVwiKVxuICAgIH0gOiB7fSwgY2FzaW5nLCBhbGxWYXJpYW50cyk7XG4gIH07XG5cbiAgdmFyIHZhcmlhbnRzID0ge1xuICAgIGgxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA5NiwgMS4xNjcsIC0xLjUpLFxuICAgIGgyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA2MCwgMS4yLCAtMC41KSxcbiAgICBoMzogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCA0OCwgMS4xNjcsIDApLFxuICAgIGg0OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDM0LCAxLjIzNSwgMC4yNSksXG4gICAgaDU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMjQsIDEuMzM0LCAwKSxcbiAgICBoNjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDIwLCAxLjYsIDAuMTUpLFxuICAgIHN1YnRpdGxlMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS43NSwgMC4xNSksXG4gICAgc3VidGl0bGUyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNTcsIDAuMSksXG4gICAgYm9keTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNSwgMC4xNSksXG4gICAgYm9keTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTQsIDEuNDMsIDAuMTUpLFxuICAgIGJ1dHRvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjc1LCAwLjQsIGNhc2VBbGxDYXBzKSxcbiAgICBjYXB0aW9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAxLjY2LCAwLjQpLFxuICAgIG92ZXJsaW5lOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAyLjY2LCAxLCBjYXNlQWxsQ2FwcylcbiAgfTtcbiAgcmV0dXJuIGRlZXBtZXJnZShfZXh0ZW5kcyh7XG4gICAgaHRtbEZvbnRTaXplOiBodG1sRm9udFNpemUsXG4gICAgcHhUb1JlbTogcHhUb1JlbSxcbiAgICByb3VuZDogcm91bmRXaXRoRGVwcmVjYXRpb25XYXJuaW5nLFxuICAgIC8vIFRPRE8gdjU6IHJlbW92ZVxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHRMaWdodDogZm9udFdlaWdodExpZ2h0LFxuICAgIGZvbnRXZWlnaHRSZWd1bGFyOiBmb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250V2VpZ2h0TWVkaXVtOiBmb250V2VpZ2h0TWVkaXVtLFxuICAgIGZvbnRXZWlnaHRCb2xkOiBmb250V2VpZ2h0Qm9sZFxuICB9LCB2YXJpYW50cyksIG90aGVyLCB7XG4gICAgY2xvbmU6IGZhbHNlIC8vIE5vIG5lZWQgdG8gY2xvbmUgZGVlcFxuXG4gIH0pO1xufSIsImltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbnZhciBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFRoZW1lOyIsInZhciBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG52YXIgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbnZhciBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRvdygpIHtcbiAgcmV0dXJuIFtcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDcgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbN10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTFdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSwgXCIpXCIpXS5qb2luKCcsJyk7XG59IC8vIFZhbHVlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYmU4NzQ3Zjk0NTc0NjY5Y2I1ZTdhZGQxYTdjNTRmYTQxYTg5Y2VjNy9wYWNrYWdlcy9tZGMtZWxldmF0aW9uL192YXJpYWJsZXMuc2Nzc1xuXG5cbnZhciBzaGFkb3dzID0gWydub25lJywgY3JlYXRlU2hhZG93KDAsIDIsIDEsIC0xLCAwLCAxLCAxLCAwLCAwLCAxLCAzLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDEsIC0yLCAwLCAyLCAyLCAwLCAwLCAxLCA1LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDMsIC0yLCAwLCAzLCA0LCAwLCAwLCAxLCA4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMCksIGNyZWF0ZVNoYWRvdygwLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxKSwgY3JlYXRlU2hhZG93KDAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDIpLCBjcmVhdGVTaGFkb3coMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMiksIGNyZWF0ZVNoYWRvdygwLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgMyksIGNyZWF0ZVNoYWRvdygwLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgMyksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNCksIGNyZWF0ZVNoYWRvdygwLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1KSwgY3JlYXRlU2hhZG93KDAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNiksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDYpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOCksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4KV07XG5leHBvcnQgZGVmYXVsdCBzaGFkb3dzOyIsInZhciBzaGFwZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiA0XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hhcGU7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmdvb2dsZS5jb20vbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1uYXR1cmFsLWVhc2luZy1jdXJ2ZXNcbi8vIHRvIGxlYXJuIHRoZSBjb250ZXh0IGluIHdoaWNoIGVhY2ggZWFzaW5nIHNob3VsZCBiZSB1c2VkLlxuZXhwb3J0IHZhciBlYXNpbmcgPSB7XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGVhc2luZyBjdXJ2ZS5cbiAgZWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgZW50ZXIgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5IGZyb20gb2ZmLXNjcmVlbiBhbmRcbiAgLy8gc2xvd2x5IGRlY2VsZXJhdGUgdG8gYSByZXN0aW5nIHBvaW50LlxuICBlYXNlT3V0OiAnY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgbGVhdmUgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5LiBUaGV5IGRvIG5vdCBkZWNlbGVyYXRlIHdoZW4gb2ZmLXNjcmVlbi5cbiAgZWFzZUluOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSknLFxuICAvLyBUaGUgc2hhcnAgY3VydmUgaXMgdXNlZCBieSBvYmplY3RzIHRoYXQgbWF5IHJldHVybiB0byB0aGUgc2NyZWVuIGF0IGFueSB0aW1lLlxuICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknXG59OyAvLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctY29tbW9uLWR1cmF0aW9uc1xuLy8gdG8gbGVhcm4gd2hlbiB1c2Ugd2hhdCB0aW1pbmdcblxuZXhwb3J0IHZhciBkdXJhdGlvbiA9IHtcbiAgc2hvcnRlc3Q6IDE1MCxcbiAgc2hvcnRlcjogMjAwLFxuICBzaG9ydDogMjUwLFxuICAvLyBtb3N0IGJhc2ljIHJlY29tbWVuZGVkIHRpbWluZ1xuICBzdGFuZGFyZDogMzAwLFxuICAvLyB0aGlzIGlzIHRvIGJlIHVzZWQgaW4gY29tcGxleCBhbmltYXRpb25zXG4gIGNvbXBsZXg6IDM3NSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgZW50ZXJpbmcgc2NyZWVuXG4gIGVudGVyaW5nU2NyZWVuOiAyMjUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGxlYXZpbmcgc2NyZWVuXG4gIGxlYXZpbmdTY3JlZW46IDE5NVxufTtcblxuZnVuY3Rpb24gZm9ybWF0TXMobWlsbGlzZWNvbmRzKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyksIFwibXNcIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0ucHJvcFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmR1cmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0uZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZGVsYXlcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzaW5nOiBlYXNpbmcsXG4gIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2FsbCddO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uT3B0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IGR1cmF0aW9uLnN0YW5kYXJkIDogX29wdGlvbnMkZHVyYXRpb24sXG4gICAgICAgIF9vcHRpb25zJGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICBlYXNpbmdPcHRpb24gPSBfb3B0aW9ucyRlYXNpbmcgPT09IHZvaWQgMCA/IGVhc2luZy5lYXNlSW5PdXQgOiBfb3B0aW9ucyRlYXNpbmcsXG4gICAgICAgIF9vcHRpb25zJGRlbGF5ID0gb3B0aW9ucy5kZWxheSxcbiAgICAgICAgZGVsYXkgPSBfb3B0aW9ucyRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGRlbGF5LFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJkdXJhdGlvblwiLCBcImVhc2luZ1wiLCBcImRlbGF5XCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH07XG5cbiAgICAgIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwcm9wcykgJiYgIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcInByb3BzXCIgbXVzdCBiZSBhIHN0cmluZyBvciBBcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkdXJhdGlvbk9wdGlvbikgJiYgIWlzU3RyaW5nKGR1cmF0aW9uT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFxcXCJkdXJhdGlvblxcXCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBidXQgZm91bmQgXCIuY29uY2F0KGR1cmF0aW9uT3B0aW9uLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU3RyaW5nKGVhc2luZ09wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZWFzaW5nXCIgbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkZWxheSkgJiYgIWlzU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJkZWxheVwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVW5yZWNvZ25pemVkIGFyZ3VtZW50KHMpIFtcIi5jb25jYXQoT2JqZWN0LmtleXMob3RoZXIpLmpvaW4oJywnKSwgXCJdLlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHByb3BzKSA/IHByb3BzIDogW3Byb3BzXSkubWFwKGZ1bmN0aW9uIChhbmltYXRlZFByb3ApIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChhbmltYXRlZFByb3AsIFwiIFwiKS5jb25jYXQodHlwZW9mIGR1cmF0aW9uT3B0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uT3B0aW9uIDogZm9ybWF0TXMoZHVyYXRpb25PcHRpb24pLCBcIiBcIikuY29uY2F0KGVhc2luZ09wdGlvbiwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnID8gZGVsYXkgOiBmb3JtYXRNcyhkZWxheSkpO1xuICAgIH0pLmpvaW4oJywnKTtcbiAgfSxcbiAgZ2V0QXV0b0hlaWdodER1cmF0aW9uOiBmdW5jdGlvbiBnZXRBdXRvSGVpZ2h0RHVyYXRpb24oaGVpZ2h0KSB7XG4gICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBjb25zdGFudCA9IGhlaWdodCAvIDM2OyAvLyBodHRwczovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPSg0KyUyQisxNSsqKyh4KyUyRiszNispKyoqKzAuMjUrJTJCKyh4KyUyRiszNikrJTJGKzUpKyorMTBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCg0ICsgMTUgKiBNYXRoLnBvdyhjb25zdGFudCwgMC4yNSkgKyBjb25zdGFudCAvIDUpICogMTApO1xuICB9XG59OyIsImltcG9ydCB7IHVzZVRoZW1lIGFzIHVzZVRoZW1lV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZVdpdGhvdXREZWZhdWx0KCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIGFzIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB3aXRoU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzOyIsIi8vIFdlIG5lZWQgdG8gY2VudHJhbGl6ZSB0aGUgekluZGV4IGRlZmluaXRpb25zIGFzIHRoZXkgd29ya1xuLy8gbGlrZSBnbG9iYWwgdmFsdWVzIGluIHRoZSBicm93c2VyLlxudmFyIHpJbmRleCA9IHtcbiAgbW9iaWxlU3RlcHBlcjogMTAwMCxcbiAgc3BlZWREaWFsOiAxMDUwLFxuICBhcHBCYXI6IDExMDAsXG4gIGRyYXdlcjogMTIwMCxcbiAgbW9kYWw6IDEzMDAsXG4gIHNuYWNrYmFyOiAxNDAwLFxuICB0b29sdGlwOiAxNTAwXG59O1xuZXhwb3J0IGRlZmF1bHQgekluZGV4OyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuLy8gSXQgc2hvdWxkIHRvIGJlIG5vdGVkIHRoYXQgdGhpcyBmdW5jdGlvbiBpc24ndCBlcXVpdmFsZW50IHRvIGB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZWAuXG4vL1xuLy8gQSBzdHJpY3QgY2FwaXRhbGl6YXRpb24gc2hvdWxkIHVwcGVyY2FzZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZCBhIHRoZSBzZW50ZW5jZS5cbi8vIFdlIG9ubHkgaGFuZGxlIHRoZSBmaXJzdCB3b3JkLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IGNhcGl0YWxpemUoc3RyaW5nKSBleHBlY3RzIGEgc3RyaW5nIGFyZ3VtZW50LlwiIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg3KSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlcHJlY2F0ZWRQcm9wVHlwZSh2YWxpZGF0b3IsIHJlYXNvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZVNhZmUgPSBjb21wb25lbnROYW1lIHx8ICc8PGFub255bW91cz4+JztcbiAgICB2YXIgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBcIi5jb25jYXQobG9jYXRpb24sIFwiIGBcIikuY29uY2F0KHByb3BGdWxsTmFtZVNhZmUsIFwiYCBvZiBcIikgKyBcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZVNhZmUsIFwiYCBpcyBkZXByZWNhdGVkLiBcIikuY29uY2F0KHJlYXNvbikpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufSIsIi8vIFRPRE8gdjU6IGNvbnNpZGVyIHRvIG1ha2UgaXQgcHJpdmF0ZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICB9IGVsc2UgaWYgKHJlZikge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDA5OSNpc3N1ZWNvbW1lbnQtNDQwMDEzODkyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYoZm4pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCByZWYuY3VycmVudCkuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LCBbXSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNldFJlZiBmcm9tICcuL3NldFJlZic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JrUmVmKHJlZkEsIHJlZkIpIHtcbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgdGhlIHJlZiBwcm9wcyBjaGFuZ2UgYW5kIGFyZSBkZWZpbmVkLlxuICAgKiBUaGlzIG1lYW5zIHJlYWN0IHdpbGwgY2FsbCB0aGUgb2xkIGZvcmtSZWYgd2l0aCBgbnVsbGAgYW5kIHRoZSBuZXcgZm9ya1JlZlxuICAgKiB3aXRoIHRoZSByZWYuIENsZWFudXAgbmF0dXJhbGx5IGVtZXJnZXMgZnJvbSB0aGlzIGJlaGF2aW9yXG4gICAqL1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlZkEgPT0gbnVsbCAmJiByZWZCID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocmVmVmFsdWUpIHtcbiAgICAgIHNldFJlZihyZWZBLCByZWZWYWx1ZSk7XG4gICAgICBzZXRSZWYocmVmQiwgcmVmVmFsdWUpO1xuICAgIH07XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59IiwiLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZS9ibG9iL3Y0LjEuNS9zcmMvZm9jdXMtdmlzaWJsZS5qc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbnZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbnZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xudmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG52YXIgaW5wdXRUeXBlc1doaXRlbGlzdCA9IHtcbiAgdGV4dDogdHJ1ZSxcbiAgc2VhcmNoOiB0cnVlLFxuICB1cmw6IHRydWUsXG4gIHRlbDogdHJ1ZSxcbiAgZW1haWw6IHRydWUsXG4gIHBhc3N3b3JkOiB0cnVlLFxuICBudW1iZXI6IHRydWUsXG4gIGRhdGU6IHRydWUsXG4gIG1vbnRoOiB0cnVlLFxuICB3ZWVrOiB0cnVlLFxuICB0aW1lOiB0cnVlLFxuICBkYXRldGltZTogdHJ1ZSxcbiAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZVxufTtcbi8qKlxuICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICogYDpmb2N1cy12aXNpYmxlYCB3aGVuIGZvY3VzZWQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkobm9kZSkge1xuICB2YXIgdHlwZSA9IG5vZGUudHlwZSxcbiAgICAgIHRhZ05hbWUgPSBub2RlLnRhZ05hbWU7XG5cbiAgaWYgKHRhZ05hbWUgPT09ICdJTlBVVCcgJiYgaW5wdXRUeXBlc1doaXRlbGlzdFt0eXBlXSAmJiAhbm9kZS5yZWFkT25seSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIW5vZGUucmVhZE9ubHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChub2RlLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEtlZXAgdHJhY2sgb2Ygb3VyIGtleWJvYXJkIG1vZGFsaXR5IHN0YXRlIHdpdGggYGhhZEtleWJvYXJkRXZlbnRgLlxuICogSWYgdGhlIG1vc3QgcmVjZW50IHVzZXIgaW50ZXJhY3Rpb24gd2FzIHZpYSB0aGUga2V5Ym9hcmQ7XG4gKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAqIHRoZW4gdGhlIG1vZGFsaXR5IGlzIGtleWJvYXJkLiBPdGhlcndpc2UsIHRoZSBtb2RhbGl0eSBpcyBub3Qga2V5Ym9hcmQuXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gKi9cblxuXG5mdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG59XG4vKipcbiAqIElmIGF0IGFueSBwb2ludCBhIHVzZXIgY2xpY2tzIHdpdGggYSBwb2ludGluZyBkZXZpY2UsIGVuc3VyZSB0aGF0IHdlIGNoYW5nZVxuICogdGhlIG1vZGFsaXR5IGF3YXkgZnJvbSBrZXlib2FyZC5cbiAqIFRoaXMgYXZvaWRzIHRoZSBzaXR1YXRpb24gd2hlcmUgYSB1c2VyIHByZXNzZXMgYSBrZXkgb24gYW4gYWxyZWFkeSBmb2N1c2VkXG4gKiBlbGVtZW50LCBhbmQgdGhlbiBjbGlja3Mgb24gYSBkaWZmZXJlbnQgZWxlbWVudCwgZm9jdXNpbmcgaXQgd2l0aCBhXG4gKiBwb2ludGluZyBkZXZpY2UsIHdoaWxlIHdlIHN0aWxsIHRoaW5rIHdlJ3JlIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICovXG5cblxuZnVuY3Rpb24gaGFuZGxlUG9pbnRlckRvd24oKSB7XG4gIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgaWYgKHRoaXMudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAvLyBvbiB0aGUgZWxlbWVudCAoU2FmYXJpIGFjdHVhbGx5IGNhbGxzIGl0IHR3aWNlKS5cbiAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgaWYgKGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5KSB7XG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZShkb2MpIHtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLCB0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlYXJkb3duKGRvYykge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIHRydWUpO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBpc0ZvY3VzVmlzaWJsZShldmVudCkge1xuICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMtdmlzaWJsZScpO1xuICB9IGNhdGNoIChlcnJvcikge30gLy8gYnJvd3NlcnMgbm90IGltcGxlbWVudGluZyA6Zm9jdXMtdmlzaWJsZSB3aWxsIHRocm93IGEgU3ludGF4RXJyb3JcbiAgLy8gd2UgdXNlIG91ciBvd24gaGV1cmlzdGljIGZvciB0aG9zZSBicm93c2Vyc1xuICAvLyByZXRocm93IG1pZ2h0IGJlIGJldHRlciBpZiBpdCdzIG5vdCB0aGUgZXhwZWN0ZWQgZXJyb3IgYnV0IGRvIHdlIHJlYWxseVxuICAvLyB3YW50IHRvIGNyYXNoIGlmIGZvY3VzLXZpc2libGUgbWFsZnVuY3Rpb25lZD9cbiAgLy8gbm8gbmVlZCBmb3IgdmFsaWRGb2N1c1RhcmdldCBjaGVjay4gdGhlIHVzZXIgZG9lcyB0aGF0IGJ5IGF0dGFjaGluZyBpdCB0b1xuICAvLyBmb2N1c2FibGUgZXZlbnRzIG9ubHlcblxuXG4gIHJldHVybiBoYWRLZXlib2FyZEV2ZW50IHx8IGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KHRhcmdldCk7XG59XG4vKipcbiAqIFNob3VsZCBiZSBjYWxsZWQgaWYgYSBibHVyIGV2ZW50IGlzIGZpcmVkIG9uIGEgZm9jdXMtdmlzaWJsZSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBoYW5kbGVCbHVyVmlzaWJsZSgpIHtcbiAgLy8gVG8gZGV0ZWN0IGEgdGFiL3dpbmRvdyBzd2l0Y2gsIHdlIGxvb2sgZm9yIGEgYmx1ciBldmVudCBmb2xsb3dlZFxuICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gIC8vIHJlZ3VsYXIgZm9jdXMgY2hhbmdlLlxuICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gIH0sIDEwMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUlzRm9jdXNWaXNpYmxlKCkge1xuICB2YXIgcmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG5cbiAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICBwcmVwYXJlKG5vZGUub3duZXJEb2N1bWVudCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKGlzRm9jdXNWaXNpYmxlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNGb2N1c1Zpc2libGU6IGlzRm9jdXNWaXNpYmxlLFxuICAgIG9uQmx1clZpc2libGU6IGhhbmRsZUJsdXJWaXNpYmxlLFxuICAgIHJlZjogcmVmXG4gIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaGVldHNSZWdpc3RyeSB9IGZyb20gJ2pzcyc7XG5pbXBvcnQgU3R5bGVzUHJvdmlkZXIgZnJvbSAnLi4vU3R5bGVzUHJvdmlkZXInO1xuaW1wb3J0IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lIGZyb20gJy4uL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lJztcblxudmFyIFNlcnZlclN0eWxlU2hlZXRzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VydmVyU3R5bGVTaGVldHMoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlclN0eWxlU2hlZXRzKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VydmVyU3R5bGVTaGVldHMsIFt7XG4gICAga2V5OiBcImNvbGxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdChjaGlsZHJlbikge1xuICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgaW4gb3JkZXIgdG8gZGVkdXBsaWNhdGUgdGhlIGluamVjdGlvbiBvZiBDU1MgaW4gdGhlIHBhZ2UuXG4gICAgICB2YXIgc2hlZXRzTWFuYWdlciA9IG5ldyBNYXAoKTsgLy8gVGhpcyBpcyBuZWVkZWQgaW4gb3JkZXIgdG8gaW5qZWN0IHRoZSBjcml0aWNhbCBDU1MuXG5cbiAgICAgIHRoaXMuc2hlZXRzUmVnaXN0cnkgPSBuZXcgU2hlZXRzUmVnaXN0cnkoKTsgLy8gQSBuZXcgY2xhc3MgbmFtZSBnZW5lcmF0b3JcblxuICAgICAgdmFyIGdlbmVyYXRlQ2xhc3NOYW1lID0gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZXNQcm92aWRlciwgX2V4dGVuZHMoe1xuICAgICAgICBzaGVldHNNYW5hZ2VyOiBzaGVldHNNYW5hZ2VyLFxuICAgICAgICBzZXJ2ZXJHZW5lcmF0ZUNsYXNzTmFtZTogZ2VuZXJhdGVDbGFzc05hbWUsXG4gICAgICAgIHNoZWV0c1JlZ2lzdHJ5OiB0aGlzLnNoZWV0c1JlZ2lzdHJ5XG4gICAgICB9LCB0aGlzLm9wdGlvbnMpLCBjaGlsZHJlbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hlZXRzUmVnaXN0cnkgPyB0aGlzLnNoZWV0c1JlZ2lzdHJ5LnRvU3RyaW5nKCkgOiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3R5bGVFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0eWxlRWxlbWVudChwcm9wcykge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIF9leHRlbmRzKHtcbiAgICAgICAgaWQ6ICdqc3Mtc2VydmVyLXNpZGUnLFxuICAgICAgICBrZXk6ICdqc3Mtc2VydmVyLXNpZGUnLFxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgIF9faHRtbDogdGhpcy50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgIH0sIHByb3BzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlcnZlclN0eWxlU2hlZXRzO1xufSgpO1xuXG5leHBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0cyBhcyBkZWZhdWx0IH07IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VydmVyU3R5bGVTaGVldHMnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZXhhY3RQcm9wIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSBmcm9tICcuLi9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xuaW1wb3J0IGpzc1ByZXNldCBmcm9tICcuLi9qc3NQcmVzZXQnOyAvLyBEZWZhdWx0IEpTUyBpbnN0YW5jZS5cblxudmFyIGpzcyA9IGNyZWF0ZShqc3NQcmVzZXQoKSk7IC8vIFVzZSBhIHNpbmdsZXRvbiBvciB0aGUgcHJvdmlkZWQgb25lIGJ5IHRoZSBjb250ZXh0LlxuLy9cbi8vIFRoZSBjb3VudGVyLWJhc2VkIGFwcHJvYWNoIGRvZXNuJ3QgdG9sZXJhdGUgYW55IG1pc3Rha2UuXG4vLyBJdCdzIG11Y2ggc2FmZXIgdG8gdXNlIHRoZSBzYW1lIGNvdW50ZXIgZXZlcnl3aGVyZS5cblxudmFyIGdlbmVyYXRlQ2xhc3NOYW1lID0gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoKTsgLy8gRXhwb3J0ZWQgZm9yIHRlc3QgcHVycG9zZXNcblxuZXhwb3J0IHZhciBzaGVldHNNYW5hZ2VyID0gbmV3IE1hcCgpO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBkaXNhYmxlR2VuZXJhdGlvbjogZmFsc2UsXG4gIGdlbmVyYXRlQ2xhc3NOYW1lOiBnZW5lcmF0ZUNsYXNzTmFtZSxcbiAganNzOiBqc3MsXG4gIHNoZWV0c0NhY2hlOiBudWxsLFxuICBzaGVldHNNYW5hZ2VyOiBzaGVldHNNYW5hZ2VyLFxuICBzaGVldHNSZWdpc3RyeTogbnVsbFxufTtcbmV4cG9ydCB2YXIgU3R5bGVzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZGVmYXVsdE9wdGlvbnMpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBTdHlsZXNDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1N0eWxlc0NvbnRleHQnO1xufVxuXG52YXIgaW5qZWN0Rmlyc3ROb2RlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R5bGVzUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkaW5qZWN0Rmlyc3QgPSBwcm9wcy5pbmplY3RGaXJzdCxcbiAgICAgIGluamVjdEZpcnN0ID0gX3Byb3BzJGluamVjdEZpcnN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpbmplY3RGaXJzdCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlR2VuZXJhdCA9IHByb3BzLmRpc2FibGVHZW5lcmF0aW9uLFxuICAgICAgZGlzYWJsZUdlbmVyYXRpb24gPSBfcHJvcHMkZGlzYWJsZUdlbmVyYXQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVHZW5lcmF0LFxuICAgICAgbG9jYWxPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImluamVjdEZpcnN0XCIsIFwiZGlzYWJsZUdlbmVyYXRpb25cIl0pO1xuXG4gIHZhciBvdXRlck9wdGlvbnMgPSBSZWFjdC51c2VDb250ZXh0KFN0eWxlc0NvbnRleHQpO1xuXG4gIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIG91dGVyT3B0aW9ucywge1xuICAgIGRpc2FibGVHZW5lcmF0aW9uOiBkaXNhYmxlR2VuZXJhdGlvblxuICB9LCBsb2NhbE9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmICFjb250ZXh0LnNoZWV0c01hbmFnZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgbmVlZCB0byB1c2UgdGhlIFNlcnZlclN0eWxlU2hlZXRzIEFQSSB3aGVuIHJlbmRlcmluZyBvbiB0aGUgc2VydmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGNvbnRleHQuanNzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgJiYgaW5qZWN0Rmlyc3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgY2Fubm90IHVzZSBhIGN1c3RvbSBpbnNlcnRpb25Qb2ludCBhbmQgPFN0eWxlc0NvbnRleHQgaW5qZWN0Rmlyc3Q+IGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaW5qZWN0Rmlyc3QgJiYgbG9jYWxPcHRpb25zLmpzcykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBjYW5ub3QgdXNlIHRoZSBqc3MgYW5kIGluamVjdEZpcnN0IHByb3BzIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250ZXh0Lmpzcy5vcHRpb25zLmluc2VydGlvblBvaW50ICYmIGluamVjdEZpcnN0ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKCFpbmplY3RGaXJzdE5vZGUpIHtcbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZDtcbiAgICAgIGluamVjdEZpcnN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ211aS1pbmplY3QtZmlyc3QnKTtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGluamVjdEZpcnN0Tm9kZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmpzcyA9IGNyZWF0ZSh7XG4gICAgICBwbHVnaW5zOiBqc3NQcmVzZXQoKS5wbHVnaW5zLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IGluamVjdEZpcnN0Tm9kZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlc0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCBjaGlsZHJlbik7XG59XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdHlsZXNQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBZb3VyIGNvbXBvbmVudCB0cmVlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZGlzYWJsZSB0aGUgZ2VuZXJhdGlvbiBvZiB0aGUgc3R5bGVzIHdpdGggdGhpcyBvcHRpb24uXG4gICAqIEl0IGNhbiBiZSB1c2VmdWwgd2hlbiB0cmF2ZXJzaW5nIHRoZSBSZWFjdCB0cmVlIG91dHNpZGUgb2YgdGhlIEhUTUxcbiAgICogcmVuZGVyaW5nIHN0ZXAgb24gdGhlIHNlcnZlci5cbiAgICogTGV0J3Mgc2F5IHlvdSBhcmUgdXNpbmcgcmVhY3QtYXBvbGxvIHRvIGV4dHJhY3QgYWxsXG4gICAqIHRoZSBxdWVyaWVzIG1hZGUgYnkgdGhlIGludGVyZmFjZSBzZXJ2ZXItc2lkZSAtIHlvdSBjYW4gc2lnbmlmaWNhbnRseSBzcGVlZCB1cCB0aGUgdHJhdmVyc2FsIHdpdGggdGhpcyBwcm9wLlxuICAgKi9cbiAgZGlzYWJsZUdlbmVyYXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBKU1MncyBjbGFzcyBuYW1lIGdlbmVyYXRvci5cbiAgICovXG4gIGdlbmVyYXRlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgbGFzdCBpbiB0aGUgPGhlYWQ+IGVsZW1lbnQgb2YgdGhlIHBhZ2UuXG4gICAqIEFzIGEgcmVzdWx0LCB0aGV5IGdhaW4gbW9yZSBzcGVjaWZpY2l0eSB0aGFuIGFueSBvdGhlciBzdHlsZSBzaGVldC5cbiAgICogSWYgeW91IHdhbnQgdG8gb3ZlcnJpZGUgTWF0ZXJpYWwtVUkncyBzdHlsZXMsIHNldCB0aGlzIHByb3AuXG4gICAqL1xuICBpbmplY3RGaXJzdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEpTUydzIGluc3RhbmNlLlxuICAgKi9cbiAganNzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXJ2ZXJHZW5lcmF0ZUNsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogQmV0YSBmZWF0dXJlLlxuICAgKlxuICAgKiBDYWNoZSBmb3IgdGhlIHNoZWV0cy5cbiAgICovXG4gIHNoZWV0c0NhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIFRoZSBzaGVldHNNYW5hZ2VyIGlzIHVzZWQgdG8gZGVkdXBsaWNhdGUgc3R5bGUgc2hlZXQgaW5qZWN0aW9uIGluIHRoZSBwYWdlLlxuICAgKiBJdCdzIGRlZHVwbGljYXRpbmcgdXNpbmcgdGhlICh0aGVtZSwgc3R5bGVzKSBjb3VwbGUuXG4gICAqIE9uIHRoZSBzZXJ2ZXIsIHlvdSBzaG91bGQgcHJvdmlkZSBhIG5ldyBpbnN0YW5jZSBmb3IgZWFjaCByZXF1ZXN0LlxuICAgKi9cbiAgc2hlZXRzTWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBDb2xsZWN0IHRoZSBzaGVldHMuXG4gICAqL1xuICBzaGVldHNSZWdpc3RyeTogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3R5bGVzUHJvdmlkZXIucHJvcFR5cGVzID0gZXhhY3RQcm9wKFN0eWxlc1Byb3ZpZGVyLnByb3BUeXBlcykgOiB2b2lkIDA7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3R5bGVzUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9TdHlsZXNQcm92aWRlcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4YWN0UHJvcCB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL3VzZVRoZW1lL1RoZW1lQ29udGV4dCc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vdXNlVGhlbWUnO1xuaW1wb3J0IG5lc3RlZCBmcm9tICcuL25lc3RlZCc7IC8vIFRvIHN1cHBvcnQgY29tcG9zaXRpb24gb2YgdGhlbWUuXG5cbmZ1bmN0aW9uIG1lcmdlT3V0ZXJMb2NhbFRoZW1lKG91dGVyVGhlbWUsIGxvY2FsVGhlbWUpIHtcbiAgaWYgKHR5cGVvZiBsb2NhbFRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG1lcmdlZFRoZW1lID0gbG9jYWxUaGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIW1lcmdlZFRoZW1lKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogWW91IHNob3VsZCByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciB0aGVtZSBmdW5jdGlvbiwgaS5lLicsICc8VGhlbWVQcm92aWRlciB0aGVtZT17KCkgPT4gKHt9KX0gLz4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvdXRlclRoZW1lLCBsb2NhbFRoZW1lKTtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgdGFrZXMgYSBgdGhlbWVgIHByb3AuXG4gKiBJdCBtYWtlcyB0aGUgYHRoZW1lYCBhdmFpbGFibGUgZG93biB0aGUgUmVhY3QgdHJlZSB0aGFua3MgdG8gUmVhY3QgY29udGV4dC5cbiAqIFRoaXMgY29tcG9uZW50IHNob3VsZCBwcmVmZXJhYmx5IGJlIHVzZWQgYXQgKip0aGUgcm9vdCBvZiB5b3VyIGNvbXBvbmVudCB0cmVlKiouXG4gKi9cblxuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgbG9jYWxUaGVtZSA9IHByb3BzLnRoZW1lO1xuICB2YXIgb3V0ZXJUaGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAob3V0ZXJUaGVtZSA9PT0gbnVsbCAmJiB0eXBlb2YgbG9jYWxUaGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3UgYXJlIHByb3ZpZGluZyBhIHRoZW1lIGZ1bmN0aW9uIHByb3AgdG8gdGhlIFRoZW1lUHJvdmlkZXIgY29tcG9uZW50OicsICc8VGhlbWVQcm92aWRlciB0aGVtZT17b3V0ZXJUaGVtZSA9PiBvdXRlclRoZW1lfSAvPicsICcnLCAnSG93ZXZlciwgbm8gb3V0ZXIgdGhlbWUgaXMgcHJlc2VudC4nLCAnTWFrZSBzdXJlIGEgdGhlbWUgaXMgYWxyZWFkeSBpbmplY3RlZCBoaWdoZXIgaW4gdGhlIFJlYWN0IHRyZWUgJyArICdvciBwcm92aWRlIGEgdGhlbWUgb2JqZWN0LiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGhlbWUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3V0cHV0ID0gb3V0ZXJUaGVtZSA9PT0gbnVsbCA/IGxvY2FsVGhlbWUgOiBtZXJnZU91dGVyTG9jYWxUaGVtZShvdXRlclRoZW1lLCBsb2NhbFRoZW1lKTtcblxuICAgIGlmIChvdXRwdXQgIT0gbnVsbCkge1xuICAgICAgb3V0cHV0W25lc3RlZF0gPSBvdXRlclRoZW1lICE9PSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH0sIFtsb2NhbFRoZW1lLCBvdXRlclRoZW1lXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdGhlbWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUaGVtZVByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFlvdXIgY29tcG9uZW50IHRyZWUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQSB0aGVtZSBvYmplY3QuIFlvdSBjYW4gcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGV4dGVuZCB0aGUgb3V0ZXIgdGhlbWUuXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUaGVtZVByb3ZpZGVyLnByb3BUeXBlcyA9IGV4YWN0UHJvcChUaGVtZVByb3ZpZGVyLnByb3BUeXBlcykgOiB2b2lkIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lUHJvdmlkZXI7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7IiwidmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbmV4cG9ydCBkZWZhdWx0IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ211aS5uZXN0ZWQnKSA6ICdfX1RIRU1FX05FU1RFRF9fJzsiLCJpbXBvcnQgbmVzdGVkIGZyb20gJy4uL1RoZW1lUHJvdmlkZXIvbmVzdGVkJztcbi8qKlxuICogVGhpcyBpcyB0aGUgbGlzdCBvZiB0aGUgc3R5bGUgcnVsZSBuYW1lIHdlIHVzZSBhcyBkcm9wIGluIHJlcGxhY2VtZW50IGZvciB0aGUgYnVpbHQtaW5cbiAqIHBzZXVkbyBjbGFzc2VzICg6Y2hlY2tlZCwgOmRpc2FibGVkLCA6Zm9jdXNlZCwgZXRjLikuXG4gKlxuICogV2h5IGRvIHRoZXkgZXhpc3QgaW4gdGhlIGZpcnN0IHBsYWNlP1xuICogVGhlc2UgY2xhc3NlcyBhcmUgdXNlZCBhdCBhIHNwZWNpZmljaXR5IG9mIDIuXG4gKiBJdCBhbGxvd3MgdGhlbSB0byBvdmVycmlkZSBwcmV2aW91c2x5IGRlZmluaWVkIHN0eWxlcyBhcyB3ZWxsIGFzXG4gKiBiZWluZyB1bnRvdWNoZWQgYnkgc2ltcGxlIHVzZXIgb3ZlcnJpZGVzLlxuICovXG5cbnZhciBwc2V1ZG9DbGFzc2VzID0gWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZvY3VzZWQnLCAnZm9jdXNWaXNpYmxlJywgJ3JlcXVpcmVkJywgJ2V4cGFuZGVkJywgJ3NlbGVjdGVkJ107IC8vIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCBnZW5lcmF0ZXMgdW5pcXVlIGNsYXNzIG5hbWVzIGJhc2VkIG9uIGNvdW50ZXJzLlxuLy8gV2hlbiBuZXcgZ2VuZXJhdG9yIGZ1bmN0aW9uIGlzIGNyZWF0ZWQsIHJ1bGUgY291bnRlciBpcyByZXNldC5cbi8vIFdlIG5lZWQgdG8gcmVzZXQgdGhlIHJ1bGUgY291bnRlciBmb3IgU1NSIGZvciBlYWNoIHJlcXVlc3QuXG4vL1xuLy8gSXQncyBpbnNwaXJlZCBieVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2Jsb2IvNGU2YTA1ZGQzZjdiNjU3MmZkZDNhYjIxNjg2MWQ5ZTQ0NmMyMDMzMS9zcmMvdXRpbHMvY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUuanNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIF9vcHRpb25zJGRpc2FibGVHbG9iYSA9IG9wdGlvbnMuZGlzYWJsZUdsb2JhbCxcbiAgICAgIGRpc2FibGVHbG9iYWwgPSBfb3B0aW9ucyRkaXNhYmxlR2xvYmEgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZGlzYWJsZUdsb2JhLFxuICAgICAgX29wdGlvbnMkcHJvZHVjdGlvblByID0gb3B0aW9ucy5wcm9kdWN0aW9uUHJlZml4LFxuICAgICAgcHJvZHVjdGlvblByZWZpeCA9IF9vcHRpb25zJHByb2R1Y3Rpb25QciA9PT0gdm9pZCAwID8gJ2pzcycgOiBfb3B0aW9ucyRwcm9kdWN0aW9uUHIsXG4gICAgICBfb3B0aW9ucyRzZWVkID0gb3B0aW9ucy5zZWVkLFxuICAgICAgc2VlZCA9IF9vcHRpb25zJHNlZWQgPT09IHZvaWQgMCA/ICcnIDogX29wdGlvbnMkc2VlZDtcbiAgdmFyIHNlZWRQcmVmaXggPSBzZWVkID09PSAnJyA/ICcnIDogXCJcIi5jb25jYXQoc2VlZCwgXCItXCIpO1xuICB2YXIgcnVsZUNvdW50ZXIgPSAwO1xuXG4gIHZhciBnZXROZXh0Q291bnRlcklkID0gZnVuY3Rpb24gZ2V0TmV4dENvdW50ZXJJZCgpIHtcbiAgICBydWxlQ291bnRlciArPSAxO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChydWxlQ291bnRlciA+PSAxZTEwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLicsICdUaGUgcnVsZUNvdW50ZXIgaXMgbm90IHN1cHBvc2VkIHRvIGdyb3cgdGhhdCBtdWNoLiddLmpvaW4oJycpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZUNvdW50ZXI7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChydWxlLCBzdHlsZVNoZWV0KSB7XG4gICAgdmFyIG5hbWUgPSBzdHlsZVNoZWV0Lm9wdGlvbnMubmFtZTsgLy8gSXMgYSBnbG9iYWwgc3RhdGljIE1VSSBzdHlsZT9cblxuICAgIGlmIChuYW1lICYmIG5hbWUuaW5kZXhPZignTXVpJykgPT09IDAgJiYgIXN0eWxlU2hlZXQub3B0aW9ucy5saW5rICYmICFkaXNhYmxlR2xvYmFsKSB7XG4gICAgICAvLyBXZSBjYW4gdXNlIGEgc2hvcnRoYW5kIGNsYXNzIG5hbWUsIHdlIG5ldmVyIHVzZSB0aGUga2V5cyB0byBzdHlsZSB0aGUgY29tcG9uZW50cy5cbiAgICAgIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2YocnVsZS5rZXkpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gXCJNdWktXCIuY29uY2F0KHJ1bGUua2V5KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZWZpeCA9IFwiXCIuY29uY2F0KHNlZWRQcmVmaXgpLmNvbmNhdChuYW1lLCBcIi1cIikuY29uY2F0KHJ1bGUua2V5KTtcblxuICAgICAgaWYgKCFzdHlsZVNoZWV0Lm9wdGlvbnMudGhlbWVbbmVzdGVkXSB8fCBzZWVkICE9PSAnJykge1xuICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4LCBcIi1cIikuY29uY2F0KGdldE5leHRDb3VudGVySWQoKSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWVkUHJlZml4KS5jb25jYXQocHJvZHVjdGlvblByZWZpeCkuY29uY2F0KGdldE5leHRDb3VudGVySWQoKSk7XG4gICAgfVxuXG4gICAgdmFyIHN1ZmZpeCA9IFwiXCIuY29uY2F0KHJ1bGUua2V5LCBcIi1cIikuY29uY2F0KGdldE5leHRDb3VudGVySWQoKSk7IC8vIEhlbHAgd2l0aCBkZWJ1Z2dhYmlsaXR5LlxuXG4gICAgaWYgKHN0eWxlU2hlZXQub3B0aW9ucy5jbGFzc05hbWVQcmVmaXgpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWVkUHJlZml4KS5jb25jYXQoc3R5bGVTaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCwgXCItXCIpLmNvbmNhdChzdWZmaXgpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWVkUHJlZml4KS5jb25jYXQoc3VmZml4KTtcbiAgfTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gc3R5bGVzO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IG5vb3BUaGVtZSBmcm9tICcuL25vb3BUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdHlsZXNDcmVhdG9yKHN0eWxlc09yQ3JlYXRvcikge1xuICB2YXIgdGhlbWluZ0VuYWJsZWQgPSB0eXBlb2Ygc3R5bGVzT3JDcmVhdG9yID09PSAnZnVuY3Rpb24nO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKF90eXBlb2Yoc3R5bGVzT3JDcmVhdG9yKSAhPT0gJ29iamVjdCcgJiYgIXRoZW1pbmdFbmFibGVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgc3R5bGVzYCBhcmd1bWVudCBwcm92aWRlZCBpcyBpbnZhbGlkLicsICdZb3UgbmVlZCB0byBwcm92aWRlIGEgZnVuY3Rpb24gZ2VuZXJhdGluZyB0aGUgc3R5bGVzIG9yIGEgc3R5bGVzIG9iamVjdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSh0aGVtZSwgbmFtZSkge1xuICAgICAgdmFyIHN0eWxlcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3R5bGVzID0gdGhlbWluZ0VuYWJsZWQgPyBzdHlsZXNPckNyZWF0b3IodGhlbWUpIDogc3R5bGVzT3JDcmVhdG9yO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHRoZW1pbmdFbmFibGVkID09PSB0cnVlICYmIHRoZW1lID09PSBub29wVGhlbWUpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByZXBlbmQgZXJyb3IgbWVzc2FnZS9uYW1lIGluc3RlYWRcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBzdHlsZXNgIGFyZ3VtZW50IHByb3ZpZGVkIGlzIGludmFsaWQuJywgJ1lvdSBhcmUgcHJvdmlkaW5nIGEgZnVuY3Rpb24gd2l0aG91dCBhIHRoZW1lIGluIHRoZSBjb250ZXh0LicsICdPbmUgb2YgdGhlIHBhcmVudCBlbGVtZW50cyBuZWVkcyB0byB1c2UgYSBUaGVtZVByb3ZpZGVyLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGlmICghbmFtZSB8fCAhdGhlbWUub3ZlcnJpZGVzIHx8ICF0aGVtZS5vdmVycmlkZXNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH1cblxuICAgICAgdmFyIG92ZXJyaWRlcyA9IHRoZW1lLm92ZXJyaWRlc1tuYW1lXTtcblxuICAgICAgdmFyIHN0eWxlc1dpdGhPdmVycmlkZXMgPSBfZXh0ZW5kcyh7fSwgc3R5bGVzKTtcblxuICAgICAgT2JqZWN0LmtleXMob3ZlcnJpZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAoIXN0eWxlc1dpdGhPdmVycmlkZXNba2V5XSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFlvdSBhcmUgdHJ5aW5nIHRvIG92ZXJyaWRlIGEgc3R5bGUgdGhhdCBkb2VzIG5vdCBleGlzdC4nLCBcIkZpeCB0aGUgYFwiLmNvbmNhdChrZXksIFwiYCBrZXkgb2YgYHRoZW1lLm92ZXJyaWRlcy5cIikuY29uY2F0KG5hbWUsIFwiYC5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZXNXaXRoT3ZlcnJpZGVzW2tleV0gPSBkZWVwbWVyZ2Uoc3R5bGVzV2l0aE92ZXJyaWRlc1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHlsZXNXaXRoT3ZlcnJpZGVzO1xuICAgIH0sXG4gICAgb3B0aW9uczoge31cbiAgfTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9nZXRTdHlsZXNDcmVhdG9yJzsiLCIvLyBXZSB1c2UgdGhlIHNhbWUgZW1wdHkgb2JqZWN0IHRvIHJlZiBjb3VudCB0aGUgc3R5bGVzIHRoYXQgZG9uJ3QgbmVlZCBhIHRoZW1lIG9iamVjdC5cbnZhciBub29wVGhlbWUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IG5vb3BUaGVtZTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGhlbWVQcm9wcyhwYXJhbXMpIHtcbiAgdmFyIHRoZW1lID0gcGFyYW1zLnRoZW1lLFxuICAgICAgbmFtZSA9IHBhcmFtcy5uYW1lLFxuICAgICAgcHJvcHMgPSBwYXJhbXMucHJvcHM7XG5cbiAgaWYgKCF0aGVtZSB8fCAhdGhlbWUucHJvcHMgfHwgIXRoZW1lLnByb3BzW25hbWVdKSB7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wcywgY29kZSBib3Jyb3cgZnJvbSBSZWFjdCBzb3VyY2UuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzE1YThmMDMxODM4YTU1M2U0MWMwYjY2ZWIxYmNmMWRhODQ0ODEwNGQvcGFja2FnZXMvcmVhY3Qvc3JjL1JlYWN0RWxlbWVudC5qcyNMMjIxXG5cblxuICB2YXIgZGVmYXVsdFByb3BzID0gdGhlbWUucHJvcHNbbmFtZV07XG4gIHZhciBwcm9wTmFtZTtcblxuICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vZ2V0VGhlbWVQcm9wcyc7IiwiLyoqIEBsaWNlbnNlIE1hdGVyaWFsLVVJIHY0LjExLjVcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4cG9ydCAqL1xuaW1wb3J0IHsgcG9ueWZpbGxHbG9iYWwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuLyogV2FybmluZyBpZiB0aGVyZSBhcmUgc2V2ZXJhbCBpbnN0YW5jZXMgb2YgQG1hdGVyaWFsLXVpL3N0eWxlcyAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHBvbnlmaWxsR2xvYmFsWydfX0BtYXRlcmlhbC11aS9zdHlsZXMtaW5pdF9fJ10gPSBwb255ZmlsbEdsb2JhbFsnX19AbWF0ZXJpYWwtdWkvc3R5bGVzLWluaXRfXyddIHx8IDA7XG5cbiAgaWYgKHBvbnlmaWxsR2xvYmFsWydfX0BtYXRlcmlhbC11aS9zdHlsZXMtaW5pdF9fJ10gPT09IDEpIHtcbiAgICBjb25zb2xlLndhcm4oWydJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiBgQG1hdGVyaWFsLXVpL3N0eWxlc2AgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4nLCAnVGhpcyBtYXkgY2F1c2UgdGhlbWUgcHJvcGFnYXRpb24gaXNzdWVzLCBicm9rZW4gY2xhc3MgbmFtZXMsICcgKyAnc3BlY2lmaWNpdHkgaXNzdWVzLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBhIGdvb2QgcmVhc29uLicsICcnLCAnU2VlIGh0dHBzOi8vbXVpLmNvbS9yL3N0eWxlcy1pbnN0YW5jZS13YXJuaW5nIGZvciBtb3JlIGluZm8uJ10uam9pbignXFxuJykpO1xuICB9XG5cbiAgcG9ueWZpbGxHbG9iYWxbJ19fQG1hdGVyaWFsLXVpL3N0eWxlcy1pbml0X18nXSArPSAxO1xufVxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lIH0gZnJvbSAnLi9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSc7XG5leHBvcnQgKiBmcm9tICcuL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3R5bGVzIH0gZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRUaGVtZVByb3BzIH0gZnJvbSAnLi9nZXRUaGVtZVByb3BzJztcbmV4cG9ydCAqIGZyb20gJy4vZ2V0VGhlbWVQcm9wcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzc1ByZXNldCB9IGZyb20gJy4vanNzUHJlc2V0JztcbmV4cG9ydCAqIGZyb20gJy4vanNzUHJlc2V0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFrZVN0eWxlcyB9IGZyb20gJy4vbWFrZVN0eWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL21ha2VTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZUNsYXNzZXMgfSBmcm9tICcuL21lcmdlQ2xhc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL21lcmdlQ2xhc3Nlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZlclN0eWxlU2hlZXRzIH0gZnJvbSAnLi9TZXJ2ZXJTdHlsZVNoZWV0cyc7XG5leHBvcnQgKiBmcm9tICcuL1NlcnZlclN0eWxlU2hlZXRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdHlsZXNQcm92aWRlciB9IGZyb20gJy4vU3R5bGVzUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9TdHlsZXNQcm92aWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICcuL3VzZVRoZW1lJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoU3R5bGVzIH0gZnJvbSAnLi93aXRoU3R5bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCAqIGZyb20gJy4vd2l0aFRoZW1lJzsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9qc3NQcmVzZXQnOyIsImltcG9ydCBmdW5jdGlvbnMgZnJvbSAnanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uJztcbmltcG9ydCBnbG9iYWwgZnJvbSAnanNzLXBsdWdpbi1nbG9iYWwnO1xuaW1wb3J0IG5lc3RlZCBmcm9tICdqc3MtcGx1Z2luLW5lc3RlZCc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2pzcy1wbHVnaW4tY2FtZWwtY2FzZSc7XG5pbXBvcnQgZGVmYXVsdFVuaXQgZnJvbSAnanNzLXBsdWdpbi1kZWZhdWx0LXVuaXQnO1xuaW1wb3J0IHZlbmRvclByZWZpeGVyIGZyb20gJ2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyJztcbmltcG9ydCBwcm9wc1NvcnQgZnJvbSAnanNzLXBsdWdpbi1wcm9wcy1zb3J0JzsgLy8gU3Vic2V0IG9mIGpzcy1wcmVzZXQtZGVmYXVsdCB3aXRoIG9ubHkgdGhlIHBsdWdpbnMgdGhlIE1hdGVyaWFsLVVJIGNvbXBvbmVudHMgYXJlIHVzaW5nLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBqc3NQcmVzZXQoKSB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW2Z1bmN0aW9ucygpLCBnbG9iYWwoKSwgbmVzdGVkKCksIGNhbWVsQ2FzZSgpLCBkZWZhdWx0VW5pdCgpLCAvLyBEaXNhYmxlIHRoZSB2ZW5kb3IgcHJlZml4ZXIgc2VydmVyLXNpZGUsIGl0IGRvZXMgbm90aGluZy5cbiAgICAvLyBUaGlzIHdheSwgd2UgY2FuIGdldCBhIHBlcmZvcm1hbmNlIGJvb3N0LlxuICAgIC8vIEluIHRoZSBkb2N1bWVudGF0aW9uLCB3ZSBhcmUgdXNpbmcgYGF1dG9wcmVmaXhlcmAgdG8gc29sdmUgdGhpcyBwcm9ibGVtLlxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHZlbmRvclByZWZpeGVyKCksIHByb3BzU29ydCgpXVxuICB9O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL21ha2VTdHlsZXMnOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8vIEdsb2JhbCBpbmRleCBjb3VudGVyIHRvIHByZXNlcnZlIHNvdXJjZSBvcmRlci5cbi8vIFdlIGNyZWF0ZSB0aGUgc3R5bGUgc2hlZXQgZHVyaW5nIHRoZSBjcmVhdGlvbiBvZiB0aGUgY29tcG9uZW50LFxuLy8gY2hpbGRyZW4gYXJlIGhhbmRsZWQgYWZ0ZXIgdGhlIHBhcmVudHMsIHNvIHRoZSBvcmRlciBvZiBzdHlsZSBlbGVtZW50cyB3b3VsZCBiZSBwYXJlbnQtPmNoaWxkLlxuLy8gSXQgaXMgYSBwcm9ibGVtIHRob3VnaCB3aGVuIGEgcGFyZW50IHBhc3NlcyBhIGNsYXNzTmFtZVxuLy8gd2hpY2ggbmVlZHMgdG8gb3ZlcnJpZGUgYW55IGNoaWxkJ3Mgc3R5bGVzLlxuLy8gU3R5bGVTaGVldCBvZiB0aGUgY2hpbGQgaGFzIGEgaGlnaGVyIHNwZWNpZmljaXR5LCBiZWNhdXNlIG9mIHRoZSBzb3VyY2Ugb3JkZXIuXG4vLyBTbyBvdXIgc29sdXRpb24gaXMgdG8gcmVuZGVyIHNoZWV0cyB0aGVtIGluIHRoZSByZXZlcnNlIG9yZGVyIGNoaWxkLT5zaGVldCwgc29cbi8vIHRoYXQgcGFyZW50IGhhcyBhIGhpZ2hlciBzcGVjaWZpY2l0eS5cbnZhciBpbmRleENvdW50ZXIgPSAtMWU5O1xuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgaW5kZXhDb3VudGVyICs9IDE7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaW5kZXhDb3VudGVyID49IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLicsICdUaGUgaW5kZXhDb3VudGVyIGlzIG5vdCBzdXBwb3NlZCB0byBncm93IHRoYXQgbXVjaC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4Q291bnRlcjtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RHluYW1pY1N0eWxlcyB9IGZyb20gJ2pzcyc7XG5pbXBvcnQgbWVyZ2VDbGFzc2VzIGZyb20gJy4uL21lcmdlQ2xhc3Nlcyc7XG5pbXBvcnQgbXVsdGlLZXlTdG9yZSBmcm9tICcuL211bHRpS2V5U3RvcmUnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3VzZVRoZW1lJztcbmltcG9ydCB7IFN0eWxlc0NvbnRleHQgfSBmcm9tICcuLi9TdHlsZXNQcm92aWRlcic7XG5pbXBvcnQgeyBpbmNyZW1lbnQgfSBmcm9tICcuL2luZGV4Q291bnRlcic7XG5pbXBvcnQgZ2V0U3R5bGVzQ3JlYXRvciBmcm9tICcuLi9nZXRTdHlsZXNDcmVhdG9yJztcbmltcG9ydCBub29wVGhlbWUgZnJvbSAnLi4vZ2V0U3R5bGVzQ3JlYXRvci9ub29wVGhlbWUnO1xuXG5mdW5jdGlvbiBnZXRDbGFzc2VzKF9yZWYsIGNsYXNzZXMsIENvbXBvbmVudCkge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgc3R5bGVzT3B0aW9ucyA9IF9yZWYuc3R5bGVzT3B0aW9ucztcblxuICBpZiAoc3R5bGVzT3B0aW9ucy5kaXNhYmxlR2VuZXJhdGlvbikge1xuICAgIHJldHVybiBjbGFzc2VzIHx8IHt9O1xuICB9XG5cbiAgaWYgKCFzdGF0ZS5jYWNoZUNsYXNzZXMpIHtcbiAgICBzdGF0ZS5jYWNoZUNsYXNzZXMgPSB7XG4gICAgICAvLyBDYWNoZSBmb3IgdGhlIGZpbmFsaXplZCBjbGFzc2VzIHZhbHVlLlxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAvLyBDYWNoZSBmb3IgdGhlIGxhc3QgdXNlZCBjbGFzc2VzIHByb3AgcG9pbnRlci5cbiAgICAgIGxhc3RQcm9wOiBudWxsLFxuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBsYXN0IHVzZWQgcmVuZGVyZWQgY2xhc3NlcyBwb2ludGVyLlxuICAgICAgbGFzdEpTUzoge31cbiAgICB9O1xuICB9IC8vIFRyYWNrcyBpZiBlaXRoZXIgdGhlIHJlbmRlcmVkIGNsYXNzZXMgb3IgY2xhc3NlcyBwcm9wIGhhcyBjaGFuZ2VkLFxuICAvLyByZXF1aXJpbmcgdGhlIGdlbmVyYXRpb24gb2YgYSBuZXcgZmluYWxpemVkIGNsYXNzZXMgb2JqZWN0LlxuXG5cbiAgdmFyIGdlbmVyYXRlID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLmNsYXNzZXMgIT09IHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RKU1MgPSBzdGF0ZS5jbGFzc2VzO1xuICAgIGdlbmVyYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjbGFzc2VzICE9PSBzdGF0ZS5jYWNoZUNsYXNzZXMubGFzdFByb3ApIHtcbiAgICBzdGF0ZS5jYWNoZUNsYXNzZXMubGFzdFByb3AgPSBjbGFzc2VzO1xuICAgIGdlbmVyYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChnZW5lcmF0ZSkge1xuICAgIHN0YXRlLmNhY2hlQ2xhc3Nlcy52YWx1ZSA9IG1lcmdlQ2xhc3Nlcyh7XG4gICAgICBiYXNlQ2xhc3Nlczogc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RKU1MsXG4gICAgICBuZXdDbGFzc2VzOiBjbGFzc2VzLFxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5jYWNoZUNsYXNzZXMudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaChfcmVmMiwgcHJvcHMpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICB0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgc3R5bGVzT3B0aW9ucyA9IF9yZWYyLnN0eWxlc09wdGlvbnMsXG4gICAgICBzdHlsZXNDcmVhdG9yID0gX3JlZjIuc3R5bGVzQ3JlYXRvcixcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuXG4gIGlmIChzdHlsZXNPcHRpb25zLmRpc2FibGVHZW5lcmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNoZWV0TWFuYWdlciA9IG11bHRpS2V5U3RvcmUuZ2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuXG4gIGlmICghc2hlZXRNYW5hZ2VyKSB7XG4gICAgc2hlZXRNYW5hZ2VyID0ge1xuICAgICAgcmVmczogMCxcbiAgICAgIHN0YXRpY1NoZWV0OiBudWxsLFxuICAgICAgZHluYW1pY1N0eWxlczogbnVsbFxuICAgIH07XG4gICAgbXVsdGlLZXlTdG9yZS5zZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNNYW5hZ2VyLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSwgc2hlZXRNYW5hZ2VyKTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIHN0eWxlc0NyZWF0b3Iub3B0aW9ucywgc3R5bGVzT3B0aW9ucywge1xuICAgIHRoZW1lOiB0aGVtZSxcbiAgICBmbGlwOiB0eXBlb2Ygc3R5bGVzT3B0aW9ucy5mbGlwID09PSAnYm9vbGVhbicgPyBzdHlsZXNPcHRpb25zLmZsaXAgOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnXG4gIH0pO1xuXG4gIG9wdGlvbnMuZ2VuZXJhdGVJZCA9IG9wdGlvbnMuc2VydmVyR2VuZXJhdGVDbGFzc05hbWUgfHwgb3B0aW9ucy5nZW5lcmF0ZUNsYXNzTmFtZTtcbiAgdmFyIHNoZWV0c1JlZ2lzdHJ5ID0gc3R5bGVzT3B0aW9ucy5zaGVldHNSZWdpc3RyeTtcblxuICBpZiAoc2hlZXRNYW5hZ2VyLnJlZnMgPT09IDApIHtcbiAgICB2YXIgc3RhdGljU2hlZXQ7XG5cbiAgICBpZiAoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSkge1xuICAgICAgc3RhdGljU2hlZXQgPSBtdWx0aUtleVN0b3JlLmdldChzdHlsZXNPcHRpb25zLnNoZWV0c0NhY2hlLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlcyA9IHN0eWxlc0NyZWF0b3IuY3JlYXRlKHRoZW1lLCBuYW1lKTtcblxuICAgIGlmICghc3RhdGljU2hlZXQpIHtcbiAgICAgIHN0YXRpY1NoZWV0ID0gc3R5bGVzT3B0aW9ucy5qc3MuY3JlYXRlU3R5bGVTaGVldChzdHlsZXMsIF9leHRlbmRzKHtcbiAgICAgICAgbGluazogZmFsc2VcbiAgICAgIH0sIG9wdGlvbnMpKTtcbiAgICAgIHN0YXRpY1NoZWV0LmF0dGFjaCgpO1xuXG4gICAgICBpZiAoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSkge1xuICAgICAgICBtdWx0aUtleVN0b3JlLnNldChzdHlsZXNPcHRpb25zLnNoZWV0c0NhY2hlLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSwgc3RhdGljU2hlZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkuYWRkKHN0YXRpY1NoZWV0KTtcbiAgICB9XG5cbiAgICBzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQgPSBzdGF0aWNTaGVldDtcbiAgICBzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcyA9IGdldER5bmFtaWNTdHlsZXMoc3R5bGVzKTtcbiAgfVxuXG4gIGlmIChzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcykge1xuICAgIHZhciBkeW5hbWljU2hlZXQgPSBzdHlsZXNPcHRpb25zLmpzcy5jcmVhdGVTdHlsZVNoZWV0KHNoZWV0TWFuYWdlci5keW5hbWljU3R5bGVzLCBfZXh0ZW5kcyh7XG4gICAgICBsaW5rOiB0cnVlXG4gICAgfSwgb3B0aW9ucykpO1xuICAgIGR5bmFtaWNTaGVldC51cGRhdGUocHJvcHMpO1xuICAgIGR5bmFtaWNTaGVldC5hdHRhY2goKTtcbiAgICBzdGF0ZS5keW5hbWljU2hlZXQgPSBkeW5hbWljU2hlZXQ7XG4gICAgc3RhdGUuY2xhc3NlcyA9IG1lcmdlQ2xhc3Nlcyh7XG4gICAgICBiYXNlQ2xhc3Nlczogc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0LmNsYXNzZXMsXG4gICAgICBuZXdDbGFzc2VzOiBkeW5hbWljU2hlZXQuY2xhc3Nlc1xuICAgIH0pO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5hZGQoZHluYW1pY1NoZWV0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUuY2xhc3NlcyA9IHNoZWV0TWFuYWdlci5zdGF0aWNTaGVldC5jbGFzc2VzO1xuICB9XG5cbiAgc2hlZXRNYW5hZ2VyLnJlZnMgKz0gMTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKF9yZWYzLCBwcm9wcykge1xuICB2YXIgc3RhdGUgPSBfcmVmMy5zdGF0ZTtcblxuICBpZiAoc3RhdGUuZHluYW1pY1NoZWV0KSB7XG4gICAgc3RhdGUuZHluYW1pY1NoZWV0LnVwZGF0ZShwcm9wcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICAgIHN0eWxlc09wdGlvbnMgPSBfcmVmNC5zdHlsZXNPcHRpb25zLFxuICAgICAgc3R5bGVzQ3JlYXRvciA9IF9yZWY0LnN0eWxlc0NyZWF0b3I7XG5cbiAgaWYgKHN0eWxlc09wdGlvbnMuZGlzYWJsZUdlbmVyYXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc2hlZXRNYW5hZ2VyID0gbXVsdGlLZXlTdG9yZS5nZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNNYW5hZ2VyLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSk7XG4gIHNoZWV0TWFuYWdlci5yZWZzIC09IDE7XG4gIHZhciBzaGVldHNSZWdpc3RyeSA9IHN0eWxlc09wdGlvbnMuc2hlZXRzUmVnaXN0cnk7XG5cbiAgaWYgKHNoZWV0TWFuYWdlci5yZWZzID09PSAwKSB7XG4gICAgbXVsdGlLZXlTdG9yZS5kZWxldGUoc3R5bGVzT3B0aW9ucy5zaGVldHNNYW5hZ2VyLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSk7XG4gICAgc3R5bGVzT3B0aW9ucy5qc3MucmVtb3ZlU3R5bGVTaGVldChzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQpO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5yZW1vdmUoc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUuZHluYW1pY1NoZWV0KSB7XG4gICAgc3R5bGVzT3B0aW9ucy5qc3MucmVtb3ZlU3R5bGVTaGVldChzdGF0ZS5keW5hbWljU2hlZXQpO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5yZW1vdmUoc3RhdGUuZHluYW1pY1NoZWV0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlU3luY2hyb25vdXNFZmZlY3QoZnVuYywgdmFsdWVzKSB7XG4gIHZhciBrZXkgPSBSZWFjdC51c2VSZWYoW10pO1xuICB2YXIgb3V0cHV0OyAvLyBTdG9yZSBcImdlbmVyYXRpb25cIiBrZXkuIEp1c3QgcmV0dXJucyBhIG5ldyBvYmplY3QgZXZlcnkgdGltZVxuXG4gIHZhciBjdXJyZW50S2V5ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LCB2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAvLyBcInRoZSBmaXJzdCByZW5kZXJcIiwgb3IgXCJtZW1vIGRyb3BwZWQgdGhlIHZhbHVlXCJcblxuICBpZiAoa2V5LmN1cnJlbnQgIT09IGN1cnJlbnRLZXkpIHtcbiAgICBrZXkuY3VycmVudCA9IGN1cnJlbnRLZXk7XG4gICAgb3V0cHV0ID0gZnVuYygpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICBvdXRwdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbY3VycmVudEtleV0gLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lLFxuICAgICAgY2xhc3NOYW1lUHJlZml4T3B0aW9uID0gb3B0aW9ucy5jbGFzc05hbWVQcmVmaXgsXG4gICAgICBDb21wb25lbnQgPSBvcHRpb25zLkNvbXBvbmVudCxcbiAgICAgIF9vcHRpb25zJGRlZmF1bHRUaGVtZSA9IG9wdGlvbnMuZGVmYXVsdFRoZW1lLFxuICAgICAgZGVmYXVsdFRoZW1lID0gX29wdGlvbnMkZGVmYXVsdFRoZW1lID09PSB2b2lkIDAgPyBub29wVGhlbWUgOiBfb3B0aW9ucyRkZWZhdWx0VGhlbWUsXG4gICAgICBzdHlsZXNPcHRpb25zMiA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJuYW1lXCIsIFwiY2xhc3NOYW1lUHJlZml4XCIsIFwiQ29tcG9uZW50XCIsIFwiZGVmYXVsdFRoZW1lXCJdKTtcblxuICB2YXIgc3R5bGVzQ3JlYXRvciA9IGdldFN0eWxlc0NyZWF0b3Ioc3R5bGVzT3JDcmVhdG9yKTtcbiAgdmFyIGNsYXNzTmFtZVByZWZpeCA9IG5hbWUgfHwgY2xhc3NOYW1lUHJlZml4T3B0aW9uIHx8ICdtYWtlU3R5bGVzJztcbiAgc3R5bGVzQ3JlYXRvci5vcHRpb25zID0ge1xuICAgIGluZGV4OiBpbmNyZW1lbnQoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIG1ldGE6IGNsYXNzTmFtZVByZWZpeCxcbiAgICBjbGFzc05hbWVQcmVmaXg6IGNsYXNzTmFtZVByZWZpeFxuICB9O1xuXG4gIHZhciB1c2VTdHlsZXMgPSBmdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpIHx8IGRlZmF1bHRUaGVtZTtcblxuICAgIHZhciBzdHlsZXNPcHRpb25zID0gX2V4dGVuZHMoe30sIFJlYWN0LnVzZUNvbnRleHQoU3R5bGVzQ29udGV4dCksIHN0eWxlc09wdGlvbnMyKTtcblxuICAgIHZhciBpbnN0YW5jZSA9IFJlYWN0LnVzZVJlZigpO1xuICAgIHZhciBzaG91bGRVcGRhdGUgPSBSZWFjdC51c2VSZWYoKTtcbiAgICB1c2VTeW5jaHJvbm91c0VmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgc3RhdGU6IHt9LFxuICAgICAgICBzdHlsZXNDcmVhdG9yOiBzdHlsZXNDcmVhdG9yLFxuICAgICAgICBzdHlsZXNPcHRpb25zOiBzdHlsZXNPcHRpb25zLFxuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH07XG4gICAgICBhdHRhY2goY3VycmVudCwgcHJvcHMpO1xuICAgICAgc2hvdWxkVXBkYXRlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGluc3RhbmNlLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGV0YWNoKGN1cnJlbnQpO1xuICAgICAgfTtcbiAgICB9LCBbdGhlbWUsIHN0eWxlc0NyZWF0b3JdKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZS5jdXJyZW50KSB7XG4gICAgICAgIHVwZGF0ZShpbnN0YW5jZS5jdXJyZW50LCBwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHNob3VsZFVwZGF0ZS5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB2YXIgY2xhc3NlcyA9IGdldENsYXNzZXMoaW5zdGFuY2UuY3VycmVudCwgcHJvcHMuY2xhc3NlcywgQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH07XG5cbiAgcmV0dXJuIHVzZVN0eWxlcztcbn0iLCIvLyBVc2VkIGh0dHBzOi8vZ2l0aHViLmNvbS90aGlua2xvb3AvbXVsdGkta2V5LWNhY2hlIGFzIGluc3BpcmF0aW9uXG52YXIgbXVsdGlLZXlTdG9yZSA9IHtcbiAgc2V0OiBmdW5jdGlvbiBzZXQoY2FjaGUsIGtleTEsIGtleTIsIHZhbHVlKSB7XG4gICAgdmFyIHN1YkNhY2hlID0gY2FjaGUuZ2V0KGtleTEpO1xuXG4gICAgaWYgKCFzdWJDYWNoZSkge1xuICAgICAgc3ViQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICBjYWNoZS5zZXQoa2V5MSwgc3ViQ2FjaGUpO1xuICAgIH1cblxuICAgIHN1YkNhY2hlLnNldChrZXkyLCB2YWx1ZSk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24gZ2V0KGNhY2hlLCBrZXkxLCBrZXkyKSB7XG4gICAgdmFyIHN1YkNhY2hlID0gY2FjaGUuZ2V0KGtleTEpO1xuICAgIHJldHVybiBzdWJDYWNoZSA/IHN1YkNhY2hlLmdldChrZXkyKSA6IHVuZGVmaW5lZDtcbiAgfSxcbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKGNhY2hlLCBrZXkxLCBrZXkyKSB7XG4gICAgdmFyIHN1YkNhY2hlID0gY2FjaGUuZ2V0KGtleTEpO1xuICAgIHN1YkNhY2hlLmRlbGV0ZShrZXkyKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IG11bHRpS2V5U3RvcmU7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vbWVyZ2VDbGFzc2VzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcygpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgYmFzZUNsYXNzZXMgPSBvcHRpb25zLmJhc2VDbGFzc2VzLFxuICAgICAgbmV3Q2xhc3NlcyA9IG9wdGlvbnMubmV3Q2xhc3NlcyxcbiAgICAgIENvbXBvbmVudCA9IG9wdGlvbnMuQ29tcG9uZW50O1xuXG4gIGlmICghbmV3Q2xhc3Nlcykge1xuICAgIHJldHVybiBiYXNlQ2xhc3NlcztcbiAgfVxuXG4gIHZhciBuZXh0Q2xhc3NlcyA9IF9leHRlbmRzKHt9LCBiYXNlQ2xhc3Nlcyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIG5ld0NsYXNzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgYFwiLmNvbmNhdChuZXdDbGFzc2VzLCBcImAgXCIpICsgXCJwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wIG9mIFwiLmNvbmNhdChnZXREaXNwbGF5TmFtZShDb21wb25lbnQpLCBcIiBpcyBpbmNvcnJlY3QuXCIpLCAnWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHRoZSBjbGFzc05hbWUgcHJvcCBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3NlcztcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhuZXdDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFiYXNlQ2xhc3Nlc1trZXldICYmIG5ld0NsYXNzZXNba2V5XSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUga2V5IGBcIi5jb25jYXQoa2V5LCBcImAgXCIpICsgXCJwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiBcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIuXCIpLCBcIllvdSBjYW4gb25seSBvdmVycmlkZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogXCIuY29uY2F0KE9iamVjdC5rZXlzKGJhc2VDbGFzc2VzKS5qb2luKCcsJyksIFwiLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3Q2xhc3Nlc1trZXldICYmIHR5cGVvZiBuZXdDbGFzc2VzW2tleV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBrZXkgYFwiLmNvbmNhdChrZXksIFwiYCBcIikgKyBcInByb3ZpZGVkIHRvIHRoZSBjbGFzc2VzIHByb3AgaXMgbm90IHZhbGlkIGZvciBcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIuXCIpLCBcIllvdSBuZWVkIHRvIHByb3ZpZGUgYSBub24gZW1wdHkgc3RyaW5nIGluc3RlYWQgb2Y6IFwiLmNvbmNhdChuZXdDbGFzc2VzW2tleV0sIFwiLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdDbGFzc2VzW2tleV0pIHtcbiAgICAgIG5leHRDbGFzc2VzW2tleV0gPSBcIlwiLmNvbmNhdChiYXNlQ2xhc3Nlc1trZXldLCBcIiBcIikuY29uY2F0KG5ld0NsYXNzZXNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5leHRDbGFzc2VzO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3N0eWxlZCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzLCBnZXREaXNwbGF5TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnLi4vbWFrZVN0eWxlcyc7XG5cbmZ1bmN0aW9uIG9taXQoaW5wdXQsIGZpZWxkcykge1xuICB2YXIgb3V0cHV0ID0ge307XG4gIE9iamVjdC5rZXlzKGlucHV0KS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKGZpZWxkcy5pbmRleE9mKHByb3ApID09PSAtMSkge1xuICAgICAgb3V0cHV0W3Byb3BdID0gaW5wdXRbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn0gLy8gc3R5bGVkLWNvbXBvbmVudHMncyBBUEkgcmVtb3ZlcyB0aGUgbWFwcGluZyBiZXR3ZWVuIGNvbXBvbmVudHMgYW5kIHN0eWxlcy5cbi8vIFVzaW5nIGNvbXBvbmVudHMgYXMgYSBsb3ctbGV2ZWwgc3R5bGluZyBjb25zdHJ1Y3QgY2FuIGJlIHNpbXBsZXIuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVkKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50Q3JlYXRvciA9IGZ1bmN0aW9uIGNvbXBvbmVudENyZWF0b3Ioc3R5bGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSxcbiAgICAgICAgc3R5bGVzT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJuYW1lXCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIENvbXBvbmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoWydZb3UgYXJlIGNhbGxpbmcgc3R5bGVkKENvbXBvbmVudCkoc3R5bGUpIHdpdGggYW4gdW5kZWZpbmVkIGNvbXBvbmVudC4nLCAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBpbXBvcnQgaXQuJ10uam9pbignXFxuJykpO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWVQcmVmaXggPSBuYW1lO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAvLyBQcm92aWRlIGEgYmV0dGVyIERYIG91dHNpZGUgcHJvZHVjdGlvbi5cbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZGlzcGxheU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNsYXNzTmFtZVByZWZpeCA9IGRpc3BsYXlOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlc09yQ3JlYXRvciA9IHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJyA/IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9vdDogZnVuY3Rpb24gcm9vdChwcm9wcykge1xuICAgICAgICAgIHJldHVybiBzdHlsZShfZXh0ZW5kcyh7XG4gICAgICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgICAgICB9LCBwcm9wcykpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gOiB7XG4gICAgICByb290OiBzdHlsZVxuICAgIH07XG4gICAgdmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgICAgIG5hbWU6IG5hbWUgfHwgQ29tcG9uZW50LmRpc3BsYXlOYW1lLFxuICAgICAgY2xhc3NOYW1lUHJlZml4OiBjbGFzc05hbWVQcmVmaXhcbiAgICB9LCBzdHlsZXNPcHRpb25zKSk7XG4gICAgdmFyIGZpbHRlclByb3BzO1xuICAgIHZhciBwcm9wVHlwZXMgPSB7fTtcblxuICAgIGlmIChzdHlsZS5maWx0ZXJQcm9wcykge1xuICAgICAgZmlsdGVyUHJvcHMgPSBzdHlsZS5maWx0ZXJQcm9wcztcbiAgICAgIGRlbGV0ZSBzdHlsZS5maWx0ZXJQcm9wcztcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLWZvcmVpZ24tcHJvcC10eXBlcyAqL1xuXG5cbiAgICBpZiAoc3R5bGUucHJvcFR5cGVzKSB7XG4gICAgICBwcm9wVHlwZXMgPSBzdHlsZS5wcm9wVHlwZXM7XG4gICAgICBkZWxldGUgc3R5bGUucHJvcFR5cGVzO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L2ZvcmJpZC1mb3JlaWduLXByb3AtdHlwZXMgKi9cblxuXG4gICAgdmFyIFN0eWxlZENvbXBvbmVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudChwcm9wcywgcmVmKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWVQcm9wID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsb25lID0gcHJvcHMuY2xvbmUsXG4gICAgICAgICAgQ29tcG9uZW50UHJvcCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9uZVwiLCBcImNvbXBvbmVudFwiXSk7XG5cbiAgICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKHByb3BzKTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lUHJvcCk7XG4gICAgICB2YXIgc3ByZWFkID0gb3RoZXI7XG5cbiAgICAgIGlmIChmaWx0ZXJQcm9wcykge1xuICAgICAgICBzcHJlYWQgPSBvbWl0KHNwcmVhZCwgZmlsdGVyUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xvbmUpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIF9leHRlbmRzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsc3goY2hpbGRyZW4ucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpXG4gICAgICAgIH0sIHNwcmVhZCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfSwgc3ByZWFkKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBGaW5hbENvbXBvbmVudCA9IENvbXBvbmVudFByb3AgfHwgQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZpbmFsQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgfSwgc3ByZWFkKSwgY2hpbGRyZW4pO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFN0eWxlZENvbXBvbmVudC5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAvKipcbiAgICAgICAqIEEgcmVuZGVyIGZ1bmN0aW9uIG9yIG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgICAgLyoqXG4gICAgICAgKiBAaWdub3JlXG4gICAgICAgKi9cbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCByZWN5Y2xlIGl0J3MgY2hpbGRyZW4gSFRNTCBlbGVtZW50LlxuICAgICAgICogSXQncyB1c2luZyBgUmVhY3QuY2xvbmVFbGVtZW50YCBpbnRlcm5hbGx5LlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgcHJvcCB3aWxsIGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gdjVcbiAgICAgICAqL1xuICAgICAgY2xvbmU6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5ib29sLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmNsb25lICYmIHByb3BzLmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBjYW4gbm90IHVzZSB0aGUgY2xvbmUgYW5kIGNvbXBvbmVudCBwcm9wIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICAgICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gICAgICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gICAgICAuZWxlbWVudFR5cGVcbiAgICB9LCBwcm9wVHlwZXMpIDogdm9pZCAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIFN0eWxlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiU3R5bGVkKFwiLmNvbmNhdChjbGFzc05hbWVQcmVmaXgsIFwiKVwiKTtcbiAgICB9XG5cbiAgICBob2lzdE5vblJlYWN0U3RhdGljcyhTdHlsZWRDb21wb25lbnQsIENvbXBvbmVudCk7XG4gICAgcmV0dXJuIFN0eWxlZENvbXBvbmVudDtcbiAgfTtcblxuICByZXR1cm4gY29tcG9uZW50Q3JlYXRvcjtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRoZW1lQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdUaGVtZUNvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUNvbnRleHQ7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vdXNlVGhlbWUnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4vVGhlbWVDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi93aXRoU3R5bGVzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcywgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnLi4vbWFrZVN0eWxlcyc7XG5pbXBvcnQgZ2V0VGhlbWVQcm9wcyBmcm9tICcuLi9nZXRUaGVtZVByb3BzJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7IC8vIExpbmsgYSBzdHlsZSBzaGVldCB3aXRoIGEgY29tcG9uZW50LlxuLy8gSXQgZG9lcyBub3QgbW9kaWZ5IHRoZSBjb21wb25lbnQgcGFzc2VkIHRvIGl0O1xuLy8gaW5zdGVhZCwgaXQgcmV0dXJucyBhIG5ldyBjb21wb25lbnQsIHdpdGggYSBgY2xhc3Nlc2AgcHJvcGVydHkuXG5cbnZhciB3aXRoU3R5bGVzID0gZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIHZhciBkZWZhdWx0VGhlbWUgPSBvcHRpb25zLmRlZmF1bHRUaGVtZSxcbiAgICAgICAgX29wdGlvbnMkd2l0aFRoZW1lID0gb3B0aW9ucy53aXRoVGhlbWUsXG4gICAgICAgIHdpdGhUaGVtZSA9IF9vcHRpb25zJHdpdGhUaGVtZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyR3aXRoVGhlbWUsXG4gICAgICAgIG5hbWUgPSBvcHRpb25zLm5hbWUsXG4gICAgICAgIHN0eWxlc09wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wiZGVmYXVsdFRoZW1lXCIsIFwid2l0aFRoZW1lXCIsIFwibmFtZVwiXSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKENvbXBvbmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihbJ1lvdSBhcmUgY2FsbGluZyB3aXRoU3R5bGVzKHN0eWxlcykoQ29tcG9uZW50KSB3aXRoIGFuIHVuZGVmaW5lZCBjb21wb25lbnQuJywgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lUHJlZml4ID0gbmFtZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgLy8gUHJvdmlkZSBhIGJldHRlciBEWCBvdXRzaWRlIHByb2R1Y3Rpb24uXG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKENvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGRpc3BsYXlOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjbGFzc05hbWVQcmVmaXggPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlc09yQ3JlYXRvciwgX2V4dGVuZHMoe1xuICAgICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWUsXG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgICAgIG5hbWU6IG5hbWUgfHwgQ29tcG9uZW50LmRpc3BsYXlOYW1lLFxuICAgICAgY2xhc3NOYW1lUHJlZml4OiBjbGFzc05hbWVQcmVmaXhcbiAgICB9LCBzdHlsZXNPcHRpb25zKSk7XG4gICAgdmFyIFdpdGhTdHlsZXMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBXaXRoU3R5bGVzKHByb3BzLCByZWYpIHtcbiAgICAgIHZhciBjbGFzc2VzUHJvcCA9IHByb3BzLmNsYXNzZXMsXG4gICAgICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImlubmVyUmVmXCJdKTsgLy8gVGhlIHdyYXBwZXIgcmVjZWl2ZXMgb25seSB1c2VyIHN1cHBsaWVkIHByb3BzLCB3aGljaCBjb3VsZCBiZSBhIHN1YnNldCBvZlxuICAgICAgLy8gdGhlIGFjdHVhbCBwcm9wcyBDb21wb25lbnQgbWlnaHQgcmVjZWl2ZSBkdWUgdG8gbWVyZ2luZyB3aXRoIGRlZmF1bHRQcm9wcy5cbiAgICAgIC8vIFNvIGNvcHlpbmcgaXQgaGVyZSB3b3VsZCBnaXZlIHVzIHRoZSBzYW1lIHJlc3VsdCBpbiB0aGUgd3JhcHBlciBhcyB3ZWxsLlxuXG5cbiAgICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKF9leHRlbmRzKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCBwcm9wcykpO1xuICAgICAgdmFyIHRoZW1lO1xuICAgICAgdmFyIG1vcmUgPSBvdGhlcjtcblxuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyB8fCB3aXRoVGhlbWUpIHtcbiAgICAgICAgLy8gbmFtZSBhbmQgd2l0aFRoZW1lIGFyZSBpbnZhcmlhbnQgaW4gdGhlIG91dGVyIHNjb3BlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICB0aGVtZSA9IHVzZVRoZW1lKCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgbW9yZSA9IGdldFRoZW1lUHJvcHMoe1xuICAgICAgICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHByb3BzOiBvdGhlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFByb3ZpZGUgdGhlIHRoZW1lIHRvIHRoZSB3cmFwcGVkIGNvbXBvbmVudC5cbiAgICAgICAgLy8gU28gd2UgZG9uJ3QgaGF2ZSB0byB1c2UgdGhlIGB3aXRoVGhlbWUoKWAgSGlnaGVyLW9yZGVyIENvbXBvbmVudC5cblxuXG4gICAgICAgIGlmICh3aXRoVGhlbWUgJiYgIW1vcmUudGhlbWUpIHtcbiAgICAgICAgICBtb3JlLnRoZW1lID0gdGhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IGlubmVyUmVmIHx8IHJlZixcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgfSwgbW9yZSkpO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFdpdGhTdHlsZXMucHJvcFR5cGVzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlIHRoYXQgcHJvcCB0byBwYXNzIGEgcmVmIHRvIHRoZSBkZWNvcmF0ZWQgY29tcG9uZW50LlxuICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAqL1xuICAgICAgaW5uZXJSZWY6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksIGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaW5uZXJSZWYgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIC8vICAgJ01hdGVyaWFsLVVJOiBUaGUgYGlubmVyUmVmYCBwcm9wIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS4gJyArXG4gICAgICAgIC8vICAgICAnUmVmcyBhcmUgbm93IGF1dG9tYXRpY2FsbHkgZm9yd2FyZGVkIHRvIHRoZSBpbm5lciBjb21wb25lbnQuJyxcbiAgICAgICAgLy8gKTtcbiAgICAgIH0pXG4gICAgfSA6IHZvaWQgMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBXaXRoU3R5bGVzLmRpc3BsYXlOYW1lID0gXCJXaXRoU3R5bGVzKFwiLmNvbmNhdChnZXREaXNwbGF5TmFtZShDb21wb25lbnQpLCBcIilcIik7XG4gICAgfVxuXG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aFN0eWxlcywgQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBFeHBvc2VkIGZvciB0ZXN0IHB1cnBvc2VzLlxuICAgICAgV2l0aFN0eWxlcy5OYWtlZCA9IENvbXBvbmVudDtcbiAgICAgIFdpdGhTdHlsZXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBXaXRoU3R5bGVzLnVzZVN0eWxlcyA9IHVzZVN0eWxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gV2l0aFN0eWxlcztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCAqIGZyb20gJy4vd2l0aFRoZW1lJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcywgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3VzZVRoZW1lJztcbmV4cG9ydCBmdW5jdGlvbiB3aXRoVGhlbWVDcmVhdG9yKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkZWZhdWx0VGhlbWUgPSBvcHRpb25zLmRlZmF1bHRUaGVtZTtcblxuICB2YXIgd2l0aFRoZW1lID0gZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoQ29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFsnWW91IGFyZSBjYWxsaW5nIHdpdGhUaGVtZShDb21wb25lbnQpIHdpdGggYW4gdW5kZWZpbmVkIGNvbXBvbmVudC4nLCAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBpbXBvcnQgaXQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBXaXRoVGhlbWUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBXaXRoVGhlbWUocHJvcHMsIHJlZikge1xuICAgICAgdmFyIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcblxuICAgICAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKSB8fCBkZWZhdWx0VGhlbWU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgcmVmOiBpbm5lclJlZiB8fCByZWZcbiAgICAgIH0sIG90aGVyKSk7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gV2l0aFRoZW1lLnByb3BUeXBlcyA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVXNlIHRoYXQgcHJvcCB0byBwYXNzIGEgcmVmIHRvIHRoZSBkZWNvcmF0ZWQgY29tcG9uZW50LlxuICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAqL1xuICAgICAgaW5uZXJSZWY6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksIGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaW5uZXJSZWYgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTWF0ZXJpYWwtVUk6IFRoZSBgaW5uZXJSZWZgIHByb3AgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHY1LiAnICsgJ1JlZnMgYXJlIG5vdyBhdXRvbWF0aWNhbGx5IGZvcndhcmRlZCB0byB0aGUgaW5uZXIgY29tcG9uZW50LicpO1xuICAgICAgfSlcbiAgICB9IDogdm9pZCAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9IFwiV2l0aFRoZW1lKFwiLmNvbmNhdChnZXREaXNwbGF5TmFtZShDb21wb25lbnQpLCBcIilcIik7XG4gICAgfVxuXG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aFRoZW1lLCBDb21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIEV4cG9zZWQgZm9yIHRlc3QgcHVycG9zZXMuXG4gICAgICBXaXRoVGhlbWUuTmFrZWQgPSBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhUaGVtZTtcbiAgfTtcblxuICByZXR1cm4gd2l0aFRoZW1lO1xufSAvLyBQcm92aWRlIHRoZSB0aGVtZSBvYmplY3QgYXMgYSBwcm9wIHRvIHRoZSBpbnB1dCBjb21wb25lbnQuXG4vLyBJdCdzIGFuIGFsdGVybmF0aXZlIEFQSSB0byB1c2VUaGVtZSgpLlxuLy8gV2UgZW5jb3VyYWdlIHRoZSB1c2FnZSBvZiB1c2VUaGVtZSgpIHdoZXJlIHBvc3NpYmxlLlxuXG52YXIgd2l0aFRoZW1lID0gd2l0aFRoZW1lQ3JlYXRvcigpO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5cbmZ1bmN0aW9uIGdldEJvcmRlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweCBzb2xpZFwiKTtcbn1cblxuZXhwb3J0IHZhciBib3JkZXIgPSBzdHlsZSh7XG4gIHByb3A6ICdib3JkZXInLFxuICB0aGVtZUtleTogJ2JvcmRlcnMnLFxuICB0cmFuc2Zvcm06IGdldEJvcmRlclxufSk7XG5leHBvcnQgdmFyIGJvcmRlclRvcCA9IHN0eWxlKHtcbiAgcHJvcDogJ2JvcmRlclRvcCcsXG4gIHRoZW1lS2V5OiAnYm9yZGVycycsXG4gIHRyYW5zZm9ybTogZ2V0Qm9yZGVyXG59KTtcbmV4cG9ydCB2YXIgYm9yZGVyUmlnaHQgPSBzdHlsZSh7XG4gIHByb3A6ICdib3JkZXJSaWdodCcsXG4gIHRoZW1lS2V5OiAnYm9yZGVycycsXG4gIHRyYW5zZm9ybTogZ2V0Qm9yZGVyXG59KTtcbmV4cG9ydCB2YXIgYm9yZGVyQm90dG9tID0gc3R5bGUoe1xuICBwcm9wOiAnYm9yZGVyQm90dG9tJyxcbiAgdGhlbWVLZXk6ICdib3JkZXJzJyxcbiAgdHJhbnNmb3JtOiBnZXRCb3JkZXJcbn0pO1xuZXhwb3J0IHZhciBib3JkZXJMZWZ0ID0gc3R5bGUoe1xuICBwcm9wOiAnYm9yZGVyTGVmdCcsXG4gIHRoZW1lS2V5OiAnYm9yZGVycycsXG4gIHRyYW5zZm9ybTogZ2V0Qm9yZGVyXG59KTtcbmV4cG9ydCB2YXIgYm9yZGVyQ29sb3IgPSBzdHlsZSh7XG4gIHByb3A6ICdib3JkZXJDb2xvcicsXG4gIHRoZW1lS2V5OiAncGFsZXR0ZSdcbn0pO1xuZXhwb3J0IHZhciBib3JkZXJSYWRpdXMgPSBzdHlsZSh7XG4gIHByb3A6ICdib3JkZXJSYWRpdXMnLFxuICB0aGVtZUtleTogJ3NoYXBlJ1xufSk7XG52YXIgYm9yZGVycyA9IGNvbXBvc2UoYm9yZGVyLCBib3JkZXJUb3AsIGJvcmRlclJpZ2h0LCBib3JkZXJCb3R0b20sIGJvcmRlckxlZnQsIGJvcmRlckNvbG9yLCBib3JkZXJSYWRpdXMpO1xuZXhwb3J0IGRlZmF1bHQgYm9yZGVyczsiLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnOyAvLyBUaGUgYnJlYWtwb2ludCAqKnN0YXJ0KiogYXQgdGhpcyB2YWx1ZS5cbi8vIEZvciBpbnN0YW5jZSB3aXRoIHRoZSBmaXJzdCBicmVha3BvaW50IHhzOiBbeHMsIHNtWy5cblxudmFyIHZhbHVlcyA9IHtcbiAgeHM6IDAsXG4gIHNtOiA2MDAsXG4gIG1kOiA5NjAsXG4gIGxnOiAxMjgwLFxuICB4bDogMTkyMFxufTtcbnZhciBkZWZhdWx0QnJlYWtwb2ludHMgPSB7XG4gIC8vIFNvcnRlZCBBU0MgYnkgc2l6ZS4gVGhhdCdzIGltcG9ydGFudC5cbiAgLy8gSXQgY2FuJ3QgYmUgY29uZmlndXJlZCBhcyBpdCdzIHVzZWQgc3RhdGljYWxseSBmb3IgcHJvcFR5cGVzLlxuICBrZXlzOiBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10sXG4gIHVwOiBmdW5jdGlvbiB1cChrZXkpIHtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodmFsdWVzW2tleV0sIFwicHgpXCIpO1xuICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUJyZWFrcG9pbnRzKHByb3BzLCBwcm9wVmFsdWUsIHN0eWxlRnJvbVByb3BWYWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghcHJvcHMudGhlbWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgYXJlIGNhbGxpbmcgYSBzdHlsZSBmdW5jdGlvbiB3aXRob3V0IGEgdGhlbWUgdmFsdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgIHZhciB0aGVtZUJyZWFrcG9pbnRzID0gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMgfHwgZGVmYXVsdEJyZWFrcG9pbnRzO1xuICAgIHJldHVybiBwcm9wVmFsdWUucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGl0ZW0sIGluZGV4KSB7XG4gICAgICBhY2NbdGhlbWVCcmVha3BvaW50cy51cCh0aGVtZUJyZWFrcG9pbnRzLmtleXNbaW5kZXhdKV0gPSBzdHlsZUZyb21Qcm9wVmFsdWUocHJvcFZhbHVlW2luZGV4XSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKHByb3BWYWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIF90aGVtZUJyZWFrcG9pbnRzID0gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMgfHwgZGVmYXVsdEJyZWFrcG9pbnRzO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BWYWx1ZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGJyZWFrcG9pbnQpIHtcbiAgICAgIGFjY1tfdGhlbWVCcmVha3BvaW50cy51cChicmVha3BvaW50KV0gPSBzdHlsZUZyb21Qcm9wVmFsdWUocHJvcFZhbHVlW2JyZWFrcG9pbnRdKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgdmFyIG91dHB1dCA9IHN0eWxlRnJvbVByb3BWYWx1ZShwcm9wVmFsdWUpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBicmVha3BvaW50cyhzdHlsZUZ1bmN0aW9uKSB7XG4gIHZhciBuZXdTdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24gbmV3U3R5bGVGdW5jdGlvbihwcm9wcykge1xuICAgIHZhciBiYXNlID0gc3R5bGVGdW5jdGlvbihwcm9wcyk7XG4gICAgdmFyIHRoZW1lQnJlYWtwb2ludHMgPSBwcm9wcy50aGVtZS5icmVha3BvaW50cyB8fCBkZWZhdWx0QnJlYWtwb2ludHM7XG4gICAgdmFyIGV4dGVuZGVkID0gdGhlbWVCcmVha3BvaW50cy5rZXlzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgIGlmIChwcm9wc1trZXldKSB7XG4gICAgICAgIGFjYyA9IGFjYyB8fCB7fTtcbiAgICAgICAgYWNjW3RoZW1lQnJlYWtwb2ludHMudXAoa2V5KV0gPSBzdHlsZUZ1bmN0aW9uKF9leHRlbmRzKHtcbiAgICAgICAgICB0aGVtZTogcHJvcHMudGhlbWVcbiAgICAgICAgfSwgcHJvcHNba2V5XSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG51bGwpO1xuICAgIHJldHVybiBtZXJnZShiYXNlLCBleHRlbmRlZCk7XG4gIH07XG5cbiAgbmV3U3R5bGVGdW5jdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2V4dGVuZHMoe30sIHN0eWxlRnVuY3Rpb24ucHJvcFR5cGVzLCB7XG4gICAgeHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc206IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGc6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgeGw6IFByb3BUeXBlcy5vYmplY3RcbiAgfSkgOiB7fTtcbiAgbmV3U3R5bGVGdW5jdGlvbi5maWx0ZXJQcm9wcyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHN0eWxlRnVuY3Rpb24uZmlsdGVyUHJvcHMpKTtcbiAgcmV0dXJuIG5ld1N0eWxlRnVuY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJyZWFrcG9pbnRzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnO1xuXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0eWxlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBmbiA9IGZ1bmN0aW9uIGZuKHByb3BzKSB7XG4gICAgcmV0dXJuIHN0eWxlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGUpIHtcbiAgICAgIHZhciBvdXRwdXQgPSBzdHlsZShwcm9wcyk7XG5cbiAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlKGFjYywgb3V0cHV0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07IC8vIEFsdGVybmF0aXZlIGFwcHJvYWNoIHRoYXQgZG9lc24ndCB5aWVsZCBhbnkgcGVyZm9ybWFuY2UgZ2Fpbi5cbiAgLy8gY29uc3QgaGFuZGxlcnMgPSBzdHlsZXMucmVkdWNlKChhY2MsIHN0eWxlKSA9PiB7XG4gIC8vICAgc3R5bGUuZmlsdGVyUHJvcHMuZm9yRWFjaChwcm9wID0+IHtcbiAgLy8gICAgIGFjY1twcm9wXSA9IHN0eWxlO1xuICAvLyAgIH0pO1xuICAvLyAgIHJldHVybiBhY2M7XG4gIC8vIH0sIHt9KTtcbiAgLy8gY29uc3QgZm4gPSBwcm9wcyA9PiB7XG4gIC8vICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAvLyAgICAgaWYgKGhhbmRsZXJzW3Byb3BdKSB7XG4gIC8vICAgICAgIHJldHVybiBtZXJnZShhY2MsIGhhbmRsZXJzW3Byb3BdKHByb3BzKSk7XG4gIC8vICAgICB9XG4gIC8vICAgICByZXR1cm4gYWNjO1xuICAvLyAgIH0sIHt9KTtcbiAgLy8gfTtcblxuXG4gIGZuLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBzdHlsZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKGFjYywgc3R5bGUucHJvcFR5cGVzKTtcbiAgfSwge30pIDoge307XG4gIGZuLmZpbHRlclByb3BzID0gc3R5bGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHN0eWxlLmZpbHRlclByb3BzKTtcbiAgfSwgW10pO1xuICByZXR1cm4gZm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcbmV4cG9ydCB2YXIgZGlzcGxheVByaW50ID0gc3R5bGUoe1xuICBwcm9wOiAnZGlzcGxheVByaW50JyxcbiAgY3NzUHJvcGVydHk6IGZhbHNlLFxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgICBkaXNwbGF5OiB2YWx1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cbn0pO1xuZXhwb3J0IHZhciBkaXNwbGF5UmF3ID0gc3R5bGUoe1xuICBwcm9wOiAnZGlzcGxheSdcbn0pO1xuZXhwb3J0IHZhciBvdmVyZmxvdyA9IHN0eWxlKHtcbiAgcHJvcDogJ292ZXJmbG93J1xufSk7XG5leHBvcnQgdmFyIHRleHRPdmVyZmxvdyA9IHN0eWxlKHtcbiAgcHJvcDogJ3RleHRPdmVyZmxvdydcbn0pO1xuZXhwb3J0IHZhciB2aXNpYmlsaXR5ID0gc3R5bGUoe1xuICBwcm9wOiAndmlzaWJpbGl0eSdcbn0pO1xuZXhwb3J0IHZhciB3aGl0ZVNwYWNlID0gc3R5bGUoe1xuICBwcm9wOiAnd2hpdGVTcGFjZSdcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShkaXNwbGF5UHJpbnQsIGRpc3BsYXlSYXcsIG92ZXJmbG93LCB0ZXh0T3ZlcmZsb3csIHZpc2liaWxpdHksIHdoaXRlU3BhY2UpOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5leHBvcnQgdmFyIGZsZXhCYXNpcyA9IHN0eWxlKHtcbiAgcHJvcDogJ2ZsZXhCYXNpcydcbn0pO1xuZXhwb3J0IHZhciBmbGV4RGlyZWN0aW9uID0gc3R5bGUoe1xuICBwcm9wOiAnZmxleERpcmVjdGlvbidcbn0pO1xuZXhwb3J0IHZhciBmbGV4V3JhcCA9IHN0eWxlKHtcbiAgcHJvcDogJ2ZsZXhXcmFwJ1xufSk7XG5leHBvcnQgdmFyIGp1c3RpZnlDb250ZW50ID0gc3R5bGUoe1xuICBwcm9wOiAnanVzdGlmeUNvbnRlbnQnXG59KTtcbmV4cG9ydCB2YXIgYWxpZ25JdGVtcyA9IHN0eWxlKHtcbiAgcHJvcDogJ2FsaWduSXRlbXMnXG59KTtcbmV4cG9ydCB2YXIgYWxpZ25Db250ZW50ID0gc3R5bGUoe1xuICBwcm9wOiAnYWxpZ25Db250ZW50J1xufSk7XG5leHBvcnQgdmFyIG9yZGVyID0gc3R5bGUoe1xuICBwcm9wOiAnb3JkZXInXG59KTtcbmV4cG9ydCB2YXIgZmxleCA9IHN0eWxlKHtcbiAgcHJvcDogJ2ZsZXgnXG59KTtcbmV4cG9ydCB2YXIgZmxleEdyb3cgPSBzdHlsZSh7XG4gIHByb3A6ICdmbGV4R3Jvdydcbn0pO1xuZXhwb3J0IHZhciBmbGV4U2hyaW5rID0gc3R5bGUoe1xuICBwcm9wOiAnZmxleFNocmluaydcbn0pO1xuZXhwb3J0IHZhciBhbGlnblNlbGYgPSBzdHlsZSh7XG4gIHByb3A6ICdhbGlnblNlbGYnXG59KTtcbmV4cG9ydCB2YXIganVzdGlmeUl0ZW1zID0gc3R5bGUoe1xuICBwcm9wOiAnanVzdGlmeUl0ZW1zJ1xufSk7XG5leHBvcnQgdmFyIGp1c3RpZnlTZWxmID0gc3R5bGUoe1xuICBwcm9wOiAnanVzdGlmeVNlbGYnXG59KTtcbnZhciBmbGV4Ym94ID0gY29tcG9zZShmbGV4QmFzaXMsIGZsZXhEaXJlY3Rpb24sIGZsZXhXcmFwLCBqdXN0aWZ5Q29udGVudCwgYWxpZ25JdGVtcywgYWxpZ25Db250ZW50LCBvcmRlciwgZmxleCwgZmxleEdyb3csIGZsZXhTaHJpbmssIGFsaWduU2VsZiwganVzdGlmeUl0ZW1zLCBqdXN0aWZ5U2VsZik7XG5leHBvcnQgZGVmYXVsdCBmbGV4Ym94OyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5leHBvcnQgdmFyIGdyaWRHYXAgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkR2FwJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRDb2x1bW5HYXAgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkQ29sdW1uR2FwJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRSb3dHYXAgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkUm93R2FwJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRDb2x1bW4gPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkQ29sdW1uJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRSb3cgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkUm93J1xufSk7XG5leHBvcnQgdmFyIGdyaWRBdXRvRmxvdyA9IHN0eWxlKHtcbiAgcHJvcDogJ2dyaWRBdXRvRmxvdydcbn0pO1xuZXhwb3J0IHZhciBncmlkQXV0b0NvbHVtbnMgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkQXV0b0NvbHVtbnMnXG59KTtcbmV4cG9ydCB2YXIgZ3JpZEF1dG9Sb3dzID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZEF1dG9Sb3dzJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkVGVtcGxhdGVDb2x1bW5zJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRUZW1wbGF0ZVJvd3MgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkVGVtcGxhdGVSb3dzJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRUZW1wbGF0ZUFyZWFzID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZFRlbXBsYXRlQXJlYXMnXG59KTtcbmV4cG9ydCB2YXIgZ3JpZEFyZWEgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkQXJlYSdcbn0pO1xudmFyIGdyaWQgPSBjb21wb3NlKGdyaWRHYXAsIGdyaWRDb2x1bW5HYXAsIGdyaWRSb3dHYXAsIGdyaWRDb2x1bW4sIGdyaWRSb3csIGdyaWRBdXRvRmxvdywgZ3JpZEF1dG9Db2x1bW5zLCBncmlkQXV0b1Jvd3MsIGdyaWRUZW1wbGF0ZUNvbHVtbnMsIGdyaWRUZW1wbGF0ZVJvd3MsIGdyaWRUZW1wbGF0ZUFyZWFzLCBncmlkQXJlYSk7XG5leHBvcnQgZGVmYXVsdCBncmlkOyIsIi8qKiBAbGljZW5zZSBNYXRlcmlhbC1VSSB2NC4xMi4yXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm9yZGVycyB9IGZyb20gJy4vYm9yZGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2JvcmRlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBicmVha3BvaW50cyB9IGZyb20gJy4vYnJlYWtwb2ludHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlIH0gZnJvbSAnLi9jb21wb3NlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVGdW5jdGlvblN4IH0gZnJvbSAnLi9zdHlsZUZ1bmN0aW9uU3gnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZUZ1bmN0aW9uU3gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxleGJveCB9IGZyb20gJy4vZmxleGJveCc7XG5leHBvcnQgKiBmcm9tICcuL2ZsZXhib3gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncmlkIH0gZnJvbSAnLi9ncmlkJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JpZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhbGV0dGUgfSBmcm9tICcuL3BhbGV0dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWxldHRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9zaXRpb25zIH0gZnJvbSAnLi9wb3NpdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3NpdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaGFkb3dzIH0gZnJvbSAnLi9zaGFkb3dzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2l6aW5nIH0gZnJvbSAnLi9zaXppbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9zaXppbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzcGFjaW5nIH0gZnJvbSAnLi9zcGFjaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vc3BhY2luZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlIH0gZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHR5cG9ncmFwaHkgfSBmcm9tICcuL3R5cG9ncmFwaHknO1xuZXhwb3J0ICogZnJvbSAnLi90eXBvZ3JhcGh5JzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufSIsImltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5cbmZ1bmN0aW9uIG1lcmdlKGFjYywgaXRlbSkge1xuICBpZiAoIWl0ZW0pIHtcbiAgICByZXR1cm4gYWNjO1xuICB9XG5cbiAgcmV0dXJuIGRlZXBtZXJnZShhY2MsIGl0ZW0sIHtcbiAgICBjbG9uZTogZmFsc2UgLy8gTm8gbmVlZCB0byBjbG9uZSBkZWVwLCBpdCdzIHdheSBmYXN0ZXIuXG5cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5leHBvcnQgdmFyIGNvbG9yID0gc3R5bGUoe1xuICBwcm9wOiAnY29sb3InLFxuICB0aGVtZUtleTogJ3BhbGV0dGUnXG59KTtcbmV4cG9ydCB2YXIgYmdjb2xvciA9IHN0eWxlKHtcbiAgcHJvcDogJ2JnY29sb3InLFxuICBjc3NQcm9wZXJ0eTogJ2JhY2tncm91bmRDb2xvcicsXG4gIHRoZW1lS2V5OiAncGFsZXR0ZSdcbn0pO1xudmFyIHBhbGV0dGUgPSBjb21wb3NlKGNvbG9yLCBiZ2NvbG9yKTtcbmV4cG9ydCBkZWZhdWx0IHBhbGV0dGU7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSBzdHlsZSh7XG4gIHByb3A6ICdwb3NpdGlvbidcbn0pO1xuZXhwb3J0IHZhciB6SW5kZXggPSBzdHlsZSh7XG4gIHByb3A6ICd6SW5kZXgnLFxuICB0aGVtZUtleTogJ3pJbmRleCdcbn0pO1xuZXhwb3J0IHZhciB0b3AgPSBzdHlsZSh7XG4gIHByb3A6ICd0b3AnXG59KTtcbmV4cG9ydCB2YXIgcmlnaHQgPSBzdHlsZSh7XG4gIHByb3A6ICdyaWdodCdcbn0pO1xuZXhwb3J0IHZhciBib3R0b20gPSBzdHlsZSh7XG4gIHByb3A6ICdib3R0b20nXG59KTtcbmV4cG9ydCB2YXIgbGVmdCA9IHN0eWxlKHtcbiAgcHJvcDogJ2xlZnQnXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UocG9zaXRpb24sIHpJbmRleCwgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xudmFyIHJlc3BvbnNpdmVQcm9wVHlwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXldKSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2l2ZVByb3BUeXBlOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbnZhciBib3hTaGFkb3cgPSBzdHlsZSh7XG4gIHByb3A6ICdib3hTaGFkb3cnLFxuICB0aGVtZUtleTogJ3NoYWRvd3MnXG59KTtcbmV4cG9ydCBkZWZhdWx0IGJveFNoYWRvdzsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDw9IDEgPyBcIlwiLmNvbmNhdCh2YWx1ZSAqIDEwMCwgXCIlXCIpIDogdmFsdWU7XG59XG5cbmV4cG9ydCB2YXIgd2lkdGggPSBzdHlsZSh7XG4gIHByb3A6ICd3aWR0aCcsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59KTtcbmV4cG9ydCB2YXIgbWF4V2lkdGggPSBzdHlsZSh7XG4gIHByb3A6ICdtYXhXaWR0aCcsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59KTtcbmV4cG9ydCB2YXIgbWluV2lkdGggPSBzdHlsZSh7XG4gIHByb3A6ICdtaW5XaWR0aCcsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59KTtcbmV4cG9ydCB2YXIgaGVpZ2h0ID0gc3R5bGUoe1xuICBwcm9wOiAnaGVpZ2h0JyxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbn0pO1xuZXhwb3J0IHZhciBtYXhIZWlnaHQgPSBzdHlsZSh7XG4gIHByb3A6ICdtYXhIZWlnaHQnLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufSk7XG5leHBvcnQgdmFyIG1pbkhlaWdodCA9IHN0eWxlKHtcbiAgcHJvcDogJ21pbkhlaWdodCcsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59KTtcbmV4cG9ydCB2YXIgc2l6ZVdpZHRoID0gc3R5bGUoe1xuICBwcm9wOiAnc2l6ZScsXG4gIGNzc1Byb3BlcnR5OiAnd2lkdGgnLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufSk7XG5leHBvcnQgdmFyIHNpemVIZWlnaHQgPSBzdHlsZSh7XG4gIHByb3A6ICdzaXplJyxcbiAgY3NzUHJvcGVydHk6ICdoZWlnaHQnLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufSk7XG5leHBvcnQgdmFyIGJveFNpemluZyA9IHN0eWxlKHtcbiAgcHJvcDogJ2JveFNpemluZydcbn0pO1xudmFyIHNpemluZyA9IGNvbXBvc2Uod2lkdGgsIG1heFdpZHRoLCBtaW5XaWR0aCwgaGVpZ2h0LCBtYXhIZWlnaHQsIG1pbkhlaWdodCwgYm94U2l6aW5nKTtcbmV4cG9ydCBkZWZhdWx0IHNpemluZzsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCByZXNwb25zaXZlUHJvcFR5cGUgZnJvbSAnLi9yZXNwb25zaXZlUHJvcFR5cGUnO1xuaW1wb3J0IHsgaGFuZGxlQnJlYWtwb2ludHMgfSBmcm9tICcuL2JyZWFrcG9pbnRzJztcbmltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJztcbmltcG9ydCBtZW1vaXplIGZyb20gJy4vbWVtb2l6ZSc7XG52YXIgcHJvcGVydGllcyA9IHtcbiAgbTogJ21hcmdpbicsXG4gIHA6ICdwYWRkaW5nJ1xufTtcbnZhciBkaXJlY3Rpb25zID0ge1xuICB0OiAnVG9wJyxcbiAgcjogJ1JpZ2h0JyxcbiAgYjogJ0JvdHRvbScsXG4gIGw6ICdMZWZ0JyxcbiAgeDogWydMZWZ0JywgJ1JpZ2h0J10sXG4gIHk6IFsnVG9wJywgJ0JvdHRvbSddXG59O1xudmFyIGFsaWFzZXMgPSB7XG4gIG1hcmdpblg6ICdteCcsXG4gIG1hcmdpblk6ICdteScsXG4gIHBhZGRpbmdYOiAncHgnLFxuICBwYWRkaW5nWTogJ3B5J1xufTsgLy8gbWVtb2l6ZSgpIGltcGFjdDpcbi8vIEZyb20gMzAwLDAwMCBvcHMvc2VjXG4vLyBUbyAzNTAsMDAwIG9wcy9zZWNcblxudmFyIGdldENzc1Byb3BlcnRpZXMgPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIC8vIEl0J3Mgbm90IGEgc2hvcnRoYW5kIG5vdGF0aW9uLlxuICBpZiAocHJvcC5sZW5ndGggPiAyKSB7XG4gICAgaWYgKGFsaWFzZXNbcHJvcF0pIHtcbiAgICAgIHByb3AgPSBhbGlhc2VzW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvcCRzcGxpdCA9IHByb3Auc3BsaXQoJycpLFxuICAgICAgX3Byb3Akc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3Byb3Akc3BsaXQsIDIpLFxuICAgICAgYSA9IF9wcm9wJHNwbGl0MlswXSxcbiAgICAgIGIgPSBfcHJvcCRzcGxpdDJbMV07XG5cbiAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1thXTtcbiAgdmFyIGRpcmVjdGlvbiA9IGRpcmVjdGlvbnNbYl0gfHwgJyc7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGRpcmVjdGlvbikgPyBkaXJlY3Rpb24ubWFwKGZ1bmN0aW9uIChkaXIpIHtcbiAgICByZXR1cm4gcHJvcGVydHkgKyBkaXI7XG4gIH0pIDogW3Byb3BlcnR5ICsgZGlyZWN0aW9uXTtcbn0pO1xudmFyIHNwYWNpbmdLZXlzID0gWydtJywgJ210JywgJ21yJywgJ21iJywgJ21sJywgJ214JywgJ215JywgJ3AnLCAncHQnLCAncHInLCAncGInLCAncGwnLCAncHgnLCAncHknLCAnbWFyZ2luJywgJ21hcmdpblRvcCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5YJywgJ21hcmdpblknLCAncGFkZGluZycsICdwYWRkaW5nVG9wJywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdYJywgJ3BhZGRpbmdZJ107XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVW5hcnlTcGFjaW5nKHRoZW1lKSB7XG4gIHZhciB0aGVtZVNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nIHx8IDg7XG5cbiAgaWYgKHR5cGVvZiB0aGVtZVNwYWNpbmcgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhYnMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWJzICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogRXhwZWN0ZWQgc3BhY2luZyBhcmd1bWVudCB0byBiZSBhIG51bWJlciwgZ290IFwiLmNvbmNhdChhYnMsIFwiLlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoZW1lU3BhY2luZyAqIGFicztcbiAgICB9O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodGhlbWVTcGFjaW5nKSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYWJzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYWJzID4gdGhlbWVTcGFjaW5nLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgKFwiLmNvbmNhdChhYnMsIFwiKSBvdmVyZmxvd3MuXCIpLCBcIlRoZSBzdXBwb3J0ZWQgdmFsdWVzIGFyZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHRoZW1lU3BhY2luZyksIFwiLlwiKSwgXCJcIi5jb25jYXQoYWJzLCBcIiA+IFwiKS5jb25jYXQodGhlbWVTcGFjaW5nLmxlbmd0aCAtIDEsIFwiLCB5b3UgbmVlZCB0byBhZGQgdGhlIG1pc3NpbmcgdmFsdWVzLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVtZVNwYWNpbmdbYWJzXTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0aGVtZVNwYWNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhlbWVTcGFjaW5nO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnNwYWNpbmdgIHZhbHVlIChcIi5jb25jYXQodGhlbWVTcGFjaW5nLCBcIikgaXMgaW52YWxpZC5cIiksICdJdCBzaG91bGQgYmUgYSBudW1iZXIsIGFuIGFycmF5IG9yIGEgZnVuY3Rpb24uJ10uam9pbignXFxuJykpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSh0cmFuc2Zvcm1lciwgcHJvcFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnc3RyaW5nJyB8fCBwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBwcm9wVmFsdWU7XG4gIH1cblxuICB2YXIgYWJzID0gTWF0aC5hYnMocHJvcFZhbHVlKTtcbiAgdmFyIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZXIoYWJzKTtcblxuICBpZiAocHJvcFZhbHVlID49IDApIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHRyYW5zZm9ybWVkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAtdHJhbnNmb3JtZWQ7XG4gIH1cblxuICByZXR1cm4gXCItXCIuY29uY2F0KHRyYW5zZm9ybWVkKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVGcm9tUHJvcFZhbHVlKGNzc1Byb3BlcnRpZXMsIHRyYW5zZm9ybWVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcFZhbHVlKSB7XG4gICAgcmV0dXJuIGNzc1Byb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNzc1Byb3BlcnR5KSB7XG4gICAgICBhY2NbY3NzUHJvcGVydHldID0gZ2V0VmFsdWUodHJhbnNmb3JtZXIsIHByb3BWYWx1ZSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3BhY2luZyhwcm9wcykge1xuICB2YXIgdGhlbWUgPSBwcm9wcy50aGVtZTtcbiAgdmFyIHRyYW5zZm9ybWVyID0gY3JlYXRlVW5hcnlTcGFjaW5nKHRoZW1lKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAvLyBVc2luZyBhIGhhc2ggY29tcHV0YXRpb24gb3ZlciBhbiBhcnJheSBpdGVyYXRpb24gY291bGQgYmUgZmFzdGVyLCBidXQgd2l0aCBvbmx5IDI4IGl0ZW1zLFxuICAgIC8vIGl0J3MgZG9lc24ndCB3b3J0aCB0aGUgYnVuZGxlIHNpemUuXG4gICAgaWYgKHNwYWNpbmdLZXlzLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY3NzUHJvcGVydGllcyA9IGdldENzc1Byb3BlcnRpZXMocHJvcCk7XG4gICAgdmFyIHN0eWxlRnJvbVByb3BWYWx1ZSA9IGdldFN0eWxlRnJvbVByb3BWYWx1ZShjc3NQcm9wZXJ0aWVzLCB0cmFuc2Zvcm1lcik7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgIHJldHVybiBoYW5kbGVCcmVha3BvaW50cyhwcm9wcywgcHJvcFZhbHVlLCBzdHlsZUZyb21Qcm9wVmFsdWUpO1xuICB9KS5yZWR1Y2UobWVyZ2UsIHt9KTtcbn1cblxuc3BhY2luZy5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gc3BhY2luZ0tleXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICBvYmpba2V5XSA9IHJlc3BvbnNpdmVQcm9wVHlwZTtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KSA6IHt9O1xuc3BhY2luZy5maWx0ZXJQcm9wcyA9IHNwYWNpbmdLZXlzO1xuZXhwb3J0IGRlZmF1bHQgc3BhY2luZzsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IHJlc3BvbnNpdmVQcm9wVHlwZSBmcm9tICcuL3Jlc3BvbnNpdmVQcm9wVHlwZSc7XG5pbXBvcnQgeyBoYW5kbGVCcmVha3BvaW50cyB9IGZyb20gJy4vYnJlYWtwb2ludHMnO1xuXG5mdW5jdGlvbiBnZXRQYXRoKG9iaiwgcGF0aCkge1xuICBpZiAoIXBhdGggfHwgdHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtKSB7XG4gICAgcmV0dXJuIGFjYyAmJiBhY2NbaXRlbV0gPyBhY2NbaXRlbV0gOiBudWxsO1xuICB9LCBvYmopO1xufVxuXG5mdW5jdGlvbiBzdHlsZShvcHRpb25zKSB7XG4gIHZhciBwcm9wID0gb3B0aW9ucy5wcm9wLFxuICAgICAgX29wdGlvbnMkY3NzUHJvcGVydHkgPSBvcHRpb25zLmNzc1Byb3BlcnR5LFxuICAgICAgY3NzUHJvcGVydHkgPSBfb3B0aW9ucyRjc3NQcm9wZXJ0eSA9PT0gdm9pZCAwID8gb3B0aW9ucy5wcm9wIDogX29wdGlvbnMkY3NzUHJvcGVydHksXG4gICAgICB0aGVtZUtleSA9IG9wdGlvbnMudGhlbWVLZXksXG4gICAgICB0cmFuc2Zvcm0gPSBvcHRpb25zLnRyYW5zZm9ybTtcblxuICB2YXIgZm4gPSBmdW5jdGlvbiBmbihwcm9wcykge1xuICAgIGlmIChwcm9wc1twcm9wXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcF07XG4gICAgdmFyIHRoZW1lID0gcHJvcHMudGhlbWU7XG4gICAgdmFyIHRoZW1lTWFwcGluZyA9IGdldFBhdGgodGhlbWUsIHRoZW1lS2V5KSB8fCB7fTtcblxuICAgIHZhciBzdHlsZUZyb21Qcm9wVmFsdWUgPSBmdW5jdGlvbiBzdHlsZUZyb21Qcm9wVmFsdWUocHJvcFZhbHVlRmluYWwpIHtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGVtZU1hcHBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSB0aGVtZU1hcHBpbmcocHJvcFZhbHVlRmluYWwpO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoZW1lTWFwcGluZykpIHtcbiAgICAgICAgdmFsdWUgPSB0aGVtZU1hcHBpbmdbcHJvcFZhbHVlRmluYWxdIHx8IHByb3BWYWx1ZUZpbmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBnZXRQYXRoKHRoZW1lTWFwcGluZywgcHJvcFZhbHVlRmluYWwpIHx8IHByb3BWYWx1ZUZpbmFsO1xuXG4gICAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgICB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNzc1Byb3BlcnR5ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBoYW5kbGVCcmVha3BvaW50cyhwcm9wcywgcHJvcFZhbHVlLCBzdHlsZUZyb21Qcm9wVmFsdWUpO1xuICB9O1xuXG4gIGZuLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfZGVmaW5lUHJvcGVydHkoe30sIHByb3AsIHJlc3BvbnNpdmVQcm9wVHlwZSkgOiB7fTtcbiAgZm4uZmlsdGVyUHJvcHMgPSBbcHJvcF07XG4gIHJldHVybiBmbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGU7IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJztcblxuZnVuY3Rpb24gb21pdChpbnB1dCwgZmllbGRzKSB7XG4gIHZhciBvdXRwdXQgPSB7fTtcbiAgT2JqZWN0LmtleXMoaW5wdXQpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoZmllbGRzLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICBvdXRwdXRbcHJvcF0gPSBpbnB1dFtwcm9wXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uU3goc3R5bGVGdW5jdGlvbikge1xuICB2YXIgbmV3U3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIG5ld1N0eWxlRnVuY3Rpb24ocHJvcHMpIHtcbiAgICB2YXIgb3V0cHV0ID0gc3R5bGVGdW5jdGlvbihwcm9wcyk7XG5cbiAgICBpZiAocHJvcHMuY3NzKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG1lcmdlKG91dHB1dCwgc3R5bGVGdW5jdGlvbihfZXh0ZW5kcyh7XG4gICAgICAgIHRoZW1lOiBwcm9wcy50aGVtZVxuICAgICAgfSwgcHJvcHMuY3NzKSkpLCBvbWl0KHByb3BzLmNzcywgW3N0eWxlRnVuY3Rpb24uZmlsdGVyUHJvcHNdKSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLnN4KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG1lcmdlKG91dHB1dCwgc3R5bGVGdW5jdGlvbihfZXh0ZW5kcyh7XG4gICAgICAgIHRoZW1lOiBwcm9wcy50aGVtZVxuICAgICAgfSwgcHJvcHMuc3gpKSksIG9taXQocHJvcHMuc3gsIFtzdHlsZUZ1bmN0aW9uLmZpbHRlclByb3BzXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgbmV3U3R5bGVGdW5jdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2V4dGVuZHMoe30sIHN0eWxlRnVuY3Rpb24ucHJvcFR5cGVzLCB7XG4gICAgY3NzOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub2JqZWN0LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIGlmICghd2FybmVkT25jZSAmJiBwcm9wcy5jc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTWF0ZXJpYWwtVUk6IFRoZSBgY3NzYCBwcm9wIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdGhlIGBzeGAgcHJvcCBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KSxcbiAgICBzeDogUHJvcFR5cGVzLm9iamVjdFxuICB9KSA6IHt9O1xuICBuZXdTdHlsZUZ1bmN0aW9uLmZpbHRlclByb3BzID0gWydjc3MnLCAnc3gnXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHN0eWxlRnVuY3Rpb24uZmlsdGVyUHJvcHMpKTtcbiAgcmV0dXJuIG5ld1N0eWxlRnVuY3Rpb247XG59XG4vKipcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogVGhlIGNzcyBzdHlsZSBmdW5jdGlvbiBpcyBkZXByZWNhdGVkLiBVc2UgdGhlIGBzdHlsZUZ1bmN0aW9uU3hgIGluc3RlYWQuXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3NzKHN0eWxlRnVuY3Rpb24pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLndhcm4oJ01hdGVyaWFsLVVJOiBUaGUgYGNzc2AgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZC4gVXNlIHRoZSBgc3R5bGVGdW5jdGlvblN4YCBpbnN0ZWFkLicpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlRnVuY3Rpb25TeChzdHlsZUZ1bmN0aW9uKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0eWxlRnVuY3Rpb25TeDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuZXhwb3J0IHZhciBmb250RmFtaWx5ID0gc3R5bGUoe1xuICBwcm9wOiAnZm9udEZhbWlseScsXG4gIHRoZW1lS2V5OiAndHlwb2dyYXBoeSdcbn0pO1xuZXhwb3J0IHZhciBmb250U2l6ZSA9IHN0eWxlKHtcbiAgcHJvcDogJ2ZvbnRTaXplJyxcbiAgdGhlbWVLZXk6ICd0eXBvZ3JhcGh5J1xufSk7XG5leHBvcnQgdmFyIGZvbnRTdHlsZSA9IHN0eWxlKHtcbiAgcHJvcDogJ2ZvbnRTdHlsZScsXG4gIHRoZW1lS2V5OiAndHlwb2dyYXBoeSdcbn0pO1xuZXhwb3J0IHZhciBmb250V2VpZ2h0ID0gc3R5bGUoe1xuICBwcm9wOiAnZm9udFdlaWdodCcsXG4gIHRoZW1lS2V5OiAndHlwb2dyYXBoeSdcbn0pO1xuZXhwb3J0IHZhciBsZXR0ZXJTcGFjaW5nID0gc3R5bGUoe1xuICBwcm9wOiAnbGV0dGVyU3BhY2luZydcbn0pO1xuZXhwb3J0IHZhciBsaW5lSGVpZ2h0ID0gc3R5bGUoe1xuICBwcm9wOiAnbGluZUhlaWdodCdcbn0pO1xuZXhwb3J0IHZhciB0ZXh0QWxpZ24gPSBzdHlsZSh7XG4gIHByb3A6ICd0ZXh0QWxpZ24nXG59KTtcbnZhciB0eXBvZ3JhcGh5ID0gY29tcG9zZShmb250RmFtaWx5LCBmb250U2l6ZSwgZm9udFN0eWxlLCBmb250V2VpZ2h0LCBsZXR0ZXJTcGFjaW5nLCBsaW5lSGVpZ2h0LCB0ZXh0QWxpZ24pO1xuZXhwb3J0IGRlZmF1bHQgdHlwb2dyYXBoeTsiLCJpbXBvcnQgaHlwaGVuYXRlIGZyb20gJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJztcblxuLyoqXG4gKiBDb252ZXJ0IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIHRvIGRhc2ggc2VwYXJhdGVkLlxuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnRDYXNlKHN0eWxlKSB7XG4gIHZhciBjb252ZXJ0ZWQgPSB7fTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgdmFyIGtleSA9IHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCA/IHByb3AgOiBoeXBoZW5hdGUocHJvcCk7XG4gICAgY29udmVydGVkW2tleV0gPSBzdHlsZVtwcm9wXTtcbiAgfVxuXG4gIGlmIChzdHlsZS5mYWxsYmFja3MpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZS5mYWxsYmFja3MpKSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gc3R5bGUuZmFsbGJhY2tzLm1hcChjb252ZXJ0Q2FzZSk7ZWxzZSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gY29udmVydENhc2Uoc3R5bGUuZmFsbGJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0ZWQ7XG59XG4vKipcbiAqIEFsbG93IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIGJ5IGNvbnZlcnRpbmcgdGhlbSBiYWNrIHRvIGRhc2hlcml6ZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBjYW1lbENhc2UoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAvLyBIYW5kbGUgcnVsZXMgbGlrZSBAZm9udC1mYWNlLCB3aGljaCBjYW4gaGF2ZSBtdWx0aXBsZSBzdHlsZXMgaW4gYW4gYXJyYXlcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgc3R5bGVbaW5kZXhdID0gY29udmVydENhc2Uoc3R5bGVbaW5kZXhdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHJldHVybiBjb252ZXJ0Q2FzZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgaWYgKHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBoeXBoZW5hdGVkUHJvcCA9IGh5cGhlbmF0ZShwcm9wKTsgLy8gVGhlcmUgd2FzIG5vIGNhbWVsIGNhc2UgaW4gcGxhY2VcblxuICAgIGlmIChwcm9wID09PSBoeXBoZW5hdGVkUHJvcCkgcmV0dXJuIHZhbHVlO1xuICAgIHJ1bGUucHJvcChoeXBoZW5hdGVkUHJvcCwgdmFsdWUpOyAvLyBDb3JlIHdpbGwgaWdub3JlIHRoYXQgcHJvcGVydHkgdmFsdWUgd2Ugc2V0IHRoZSBwcm9wZXIgb25lIGFib3ZlLlxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSxcbiAgICBvbkNoYW5nZVZhbHVlOiBvbkNoYW5nZVZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVsQ2FzZTtcbiIsImltcG9ydCB7IGhhc0NTU1RPTVN1cHBvcnQgfSBmcm9tICdqc3MnO1xuXG52YXIgcHggPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5weCA6ICdweCc7XG52YXIgbXMgPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5tcyA6ICdtcyc7XG52YXIgcGVyY2VudCA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLnBlcmNlbnQgOiAnJSc7XG4vKipcbiAqIEdlbmVyYXRlZCBqc3MtcGx1Z2luLWRlZmF1bHQtdW5pdCBDU1MgcHJvcGVydHkgdW5pdHNcbiAqL1xuXG52YXIgZGVmYXVsdFVuaXRzID0ge1xuICAvLyBBbmltYXRpb24gcHJvcGVydGllc1xuICAnYW5pbWF0aW9uLWRlbGF5JzogbXMsXG4gICdhbmltYXRpb24tZHVyYXRpb24nOiBtcyxcbiAgLy8gQmFja2dyb3VuZCBwcm9wZXJ0aWVzXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcHgsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiBweCxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6IHB4LFxuICAnYmFja2dyb3VuZC1zaXplJzogcHgsXG4gIC8vIEJvcmRlciBQcm9wZXJ0aWVzXG4gIGJvcmRlcjogcHgsXG4gICdib3JkZXItYm90dG9tJzogcHgsXG4gICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWxlZnQnOiBweCxcbiAgJ2JvcmRlci1sZWZ0LXdpZHRoJzogcHgsXG4gICdib3JkZXItcmFkaXVzJzogcHgsXG4gICdib3JkZXItcmlnaHQnOiBweCxcbiAgJ2JvcmRlci1yaWdodC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXRvcCc6IHB4LFxuICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci10b3Atd2lkdGgnOiBweCxcbiAgJ2JvcmRlci13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrJzogcHgsXG4gICdib3JkZXItYmxvY2stZW5kJzogcHgsXG4gICdib3JkZXItYmxvY2stZW5kLXdpZHRoJzogcHgsXG4gICdib3JkZXItYmxvY2stc3RhcnQnOiBweCxcbiAgJ2JvcmRlci1ibG9jay1zdGFydC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrLXdpZHRoJzogcHgsXG4gICdib3JkZXItaW5saW5lJzogcHgsXG4gICdib3JkZXItaW5saW5lLWVuZCc6IHB4LFxuICAnYm9yZGVyLWlubGluZS1lbmQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtc3RhcnQnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1zdGFydC1lbmQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItZW5kLXN0YXJ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWVuZC1lbmQtcmFkaXVzJzogcHgsXG4gIC8vIE1hcmdpbiBwcm9wZXJ0aWVzXG4gIG1hcmdpbjogcHgsXG4gICdtYXJnaW4tYm90dG9tJzogcHgsXG4gICdtYXJnaW4tbGVmdCc6IHB4LFxuICAnbWFyZ2luLXJpZ2h0JzogcHgsXG4gICdtYXJnaW4tdG9wJzogcHgsXG4gICdtYXJnaW4tYmxvY2snOiBweCxcbiAgJ21hcmdpbi1ibG9jay1lbmQnOiBweCxcbiAgJ21hcmdpbi1ibG9jay1zdGFydCc6IHB4LFxuICAnbWFyZ2luLWlubGluZSc6IHB4LFxuICAnbWFyZ2luLWlubGluZS1lbmQnOiBweCxcbiAgJ21hcmdpbi1pbmxpbmUtc3RhcnQnOiBweCxcbiAgLy8gUGFkZGluZyBwcm9wZXJ0aWVzXG4gIHBhZGRpbmc6IHB4LFxuICAncGFkZGluZy1ib3R0b20nOiBweCxcbiAgJ3BhZGRpbmctbGVmdCc6IHB4LFxuICAncGFkZGluZy1yaWdodCc6IHB4LFxuICAncGFkZGluZy10b3AnOiBweCxcbiAgJ3BhZGRpbmctYmxvY2snOiBweCxcbiAgJ3BhZGRpbmctYmxvY2stZW5kJzogcHgsXG4gICdwYWRkaW5nLWJsb2NrLXN0YXJ0JzogcHgsXG4gICdwYWRkaW5nLWlubGluZSc6IHB4LFxuICAncGFkZGluZy1pbmxpbmUtZW5kJzogcHgsXG4gICdwYWRkaW5nLWlubGluZS1zdGFydCc6IHB4LFxuICAvLyBNYXNrIHByb3BlcnRpZXNcbiAgJ21hc2stcG9zaXRpb24teCc6IHB4LFxuICAnbWFzay1wb3NpdGlvbi15JzogcHgsXG4gICdtYXNrLXNpemUnOiBweCxcbiAgLy8gV2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gIGhlaWdodDogcHgsXG4gIHdpZHRoOiBweCxcbiAgJ21pbi1oZWlnaHQnOiBweCxcbiAgJ21heC1oZWlnaHQnOiBweCxcbiAgJ21pbi13aWR0aCc6IHB4LFxuICAnbWF4LXdpZHRoJzogcHgsXG4gIC8vIFBvc2l0aW9uIHByb3BlcnRpZXNcbiAgYm90dG9tOiBweCxcbiAgbGVmdDogcHgsXG4gIHRvcDogcHgsXG4gIHJpZ2h0OiBweCxcbiAgaW5zZXQ6IHB4LFxuICAnaW5zZXQtYmxvY2snOiBweCxcbiAgJ2luc2V0LWJsb2NrLWVuZCc6IHB4LFxuICAnaW5zZXQtYmxvY2stc3RhcnQnOiBweCxcbiAgJ2luc2V0LWlubGluZSc6IHB4LFxuICAnaW5zZXQtaW5saW5lLWVuZCc6IHB4LFxuICAnaW5zZXQtaW5saW5lLXN0YXJ0JzogcHgsXG4gIC8vIFNoYWRvdyBwcm9wZXJ0aWVzXG4gICdib3gtc2hhZG93JzogcHgsXG4gICd0ZXh0LXNoYWRvdyc6IHB4LFxuICAvLyBDb2x1bW4gcHJvcGVydGllc1xuICAnY29sdW1uLWdhcCc6IHB4LFxuICAnY29sdW1uLXJ1bGUnOiBweCxcbiAgJ2NvbHVtbi1ydWxlLXdpZHRoJzogcHgsXG4gICdjb2x1bW4td2lkdGgnOiBweCxcbiAgLy8gRm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzXG4gICdmb250LXNpemUnOiBweCxcbiAgJ2ZvbnQtc2l6ZS1kZWx0YSc6IHB4LFxuICAnbGV0dGVyLXNwYWNpbmcnOiBweCxcbiAgJ3RleHQtZGVjb3JhdGlvbi10aGlja25lc3MnOiBweCxcbiAgJ3RleHQtaW5kZW50JzogcHgsXG4gICd0ZXh0LXN0cm9rZSc6IHB4LFxuICAndGV4dC1zdHJva2Utd2lkdGgnOiBweCxcbiAgJ3dvcmQtc3BhY2luZyc6IHB4LFxuICAvLyBNb3Rpb24gcHJvcGVydGllc1xuICBtb3Rpb246IHB4LFxuICAnbW90aW9uLW9mZnNldCc6IHB4LFxuICAvLyBPdXRsaW5lIHByb3BlcnRpZXNcbiAgb3V0bGluZTogcHgsXG4gICdvdXRsaW5lLW9mZnNldCc6IHB4LFxuICAnb3V0bGluZS13aWR0aCc6IHB4LFxuICAvLyBQZXJzcGVjdGl2ZSBwcm9wZXJ0aWVzXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbi14JzogcGVyY2VudCxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbi15JzogcGVyY2VudCxcbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi14JzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teSc6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXonOiBwZXJjZW50LFxuICAvLyBUcmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgJ3RyYW5zaXRpb24tZGVsYXknOiBtcyxcbiAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiBtcyxcbiAgLy8gQWxpZ25tZW50IHByb3BlcnRpZXNcbiAgJ3ZlcnRpY2FsLWFsaWduJzogcHgsXG4gICdmbGV4LWJhc2lzJzogcHgsXG4gIC8vIFNvbWUgcmFuZG9tIHByb3BlcnRpZXNcbiAgJ3NoYXBlLW1hcmdpbic6IHB4LFxuICBzaXplOiBweCxcbiAgZ2FwOiBweCxcbiAgLy8gR3JpZCBwcm9wZXJ0aWVzXG4gIGdyaWQ6IHB4LFxuICAnZ3JpZC1nYXAnOiBweCxcbiAgJ3Jvdy1nYXAnOiBweCxcbiAgJ2dyaWQtcm93LWdhcCc6IHB4LFxuICAnZ3JpZC1jb2x1bW4tZ2FwJzogcHgsXG4gICdncmlkLXRlbXBsYXRlLXJvd3MnOiBweCxcbiAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyc6IHB4LFxuICAnZ3JpZC1hdXRvLXJvd3MnOiBweCxcbiAgJ2dyaWQtYXV0by1jb2x1bW5zJzogcHgsXG4gIC8vIE5vdCBleGlzdGluZyBwcm9wZXJ0aWVzLlxuICAvLyBVc2VkIHRvIGF2b2lkIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tZXhwYW5kIGludGVncmF0aW9uLlxuICAnYm94LXNoYWRvdy14JzogcHgsXG4gICdib3gtc2hhZG93LXknOiBweCxcbiAgJ2JveC1zaGFkb3ctYmx1cic6IHB4LFxuICAnYm94LXNoYWRvdy1zcHJlYWQnOiBweCxcbiAgJ2ZvbnQtbGluZS1oZWlnaHQnOiBweCxcbiAgJ3RleHQtc2hhZG93LXgnOiBweCxcbiAgJ3RleHQtc2hhZG93LXknOiBweCxcbiAgJ3RleHQtc2hhZG93LWJsdXInOiBweFxufTtcblxuLyoqXG4gKiBDbG9uZXMgdGhlIG9iamVjdCBhbmQgYWRkcyBhIGNhbWVsIGNhc2VkIHByb3BlcnR5IHZlcnNpb24uXG4gKi9cblxuZnVuY3Rpb24gYWRkQ2FtZWxDYXNlZFZlcnNpb24ob2JqKSB7XG4gIHZhciByZWdFeHAgPSAvKC1bYS16XSkvZztcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0clsxXS50b1VwcGVyQ2FzZSgpO1xuICB9O1xuXG4gIHZhciBuZXdPYmogPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICBuZXdPYmpba2V5LnJlcGxhY2UocmVnRXhwLCByZXBsYWNlKV0gPSBvYmpba2V5XTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbnZhciB1bml0cyA9IGFkZENhbWVsQ2FzZWRWZXJzaW9uKGRlZmF1bHRVbml0cyk7XG4vKipcbiAqIFJlY3Vyc2l2ZSBkZWVwIHN0eWxlIHBhc3NpbmcgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBpdGVyYXRlKHByb3AsIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVbaV0gPSBpdGVyYXRlKHByb3AsIHZhbHVlW2ldLCBvcHRpb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJykge1xuICAgICAgZm9yICh2YXIgaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcF0gPSBpdGVyYXRlKGlubmVyUHJvcCwgdmFsdWVbaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pbm5lclByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWVbX2lubmVyUHJvcF0gPSBpdGVyYXRlKHByb3AgKyBcIi1cIiArIF9pbm5lclByb3AsIHZhbHVlW19pbm5lclByb3BdLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcblxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpID09PSBmYWxzZSkge1xuICAgIHZhciB1bml0ID0gb3B0aW9uc1twcm9wXSB8fCB1bml0c1twcm9wXTsgLy8gQWRkIHRoZSB1bml0IGlmIGF2YWlsYWJsZSwgZXhjZXB0IGZvciB0aGUgc3BlY2lhbCBjYXNlIG9mIDBweC5cblxuICAgIGlmICh1bml0ICYmICEodmFsdWUgPT09IDAgJiYgdW5pdCA9PT0gcHgpKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHVuaXQgPT09ICdmdW5jdGlvbicgPyB1bml0KHZhbHVlKS50b1N0cmluZygpIDogXCJcIiArIHZhbHVlICsgdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQWRkIHVuaXQgdG8gbnVtZXJpYyB2YWx1ZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBkZWZhdWx0VW5pdChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgY2FtZWxDYXNlZE9wdGlvbnMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihvcHRpb25zKTtcblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHN0eWxlW3Byb3BdID0gaXRlcmF0ZShwcm9wLCBzdHlsZVtwcm9wXSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3ApIHtcbiAgICByZXR1cm4gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VW5pdDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IFJ1bGVMaXN0IH0gZnJvbSAnanNzJztcblxudmFyIGF0ID0gJ0BnbG9iYWwnO1xudmFyIGF0UHJlZml4ID0gJ0BnbG9iYWwgJztcblxudmFyIEdsb2JhbENvbnRhaW5lclJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxDb250YWluZXJSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ2dsb2JhbCc7XG4gICAgdGhpcy5hdCA9IGF0O1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QoX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pKTtcblxuICAgIGZvciAodmFyIHNlbGVjdG9yIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQoc2VsZWN0b3IsIHN0eWxlc1tzZWxlY3Rvcl0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBHbG9iYWxDb250YWluZXJSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UnVsZSA9IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuZCByZWdpc3RlciBydWxlLCBydW4gcGx1Z2lucy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlLCBvcHRpb25zKTtcbiAgICBpZiAocnVsZSkgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2UgcnVsZSwgcnVuIHBsdWdpbnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlcGxhY2VSdWxlID0gZnVuY3Rpb24gcmVwbGFjZVJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbmV3UnVsZSA9IHRoaXMucnVsZXMucmVwbGFjZShuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgaWYgKG5ld1J1bGUpIHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vblByb2Nlc3NSdWxlKG5ld1J1bGUpO1xuICAgIHJldHVybiBuZXdSdWxlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihydWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuaW5kZXhPZihydWxlKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbENvbnRhaW5lclJ1bGU7XG59KCk7XG5cbnZhciBHbG9iYWxQcmVmaXhlZFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxQcmVmaXhlZFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdnbG9iYWwnO1xuICAgIHRoaXMuYXQgPSBhdDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB2YXIgc2VsZWN0b3IgPSBrZXkuc3Vic3RyKGF0UHJlZml4Lmxlbmd0aCk7XG4gICAgdGhpcy5ydWxlID0gb3B0aW9ucy5qc3MuY3JlYXRlUnVsZShzZWxlY3Rvciwgc3R5bGUsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IEdsb2JhbFByZWZpeGVkUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlID8gdGhpcy5ydWxlLnRvU3RyaW5nKG9wdGlvbnMpIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbFByZWZpeGVkUnVsZTtcbn0oKTtcblxudmFyIHNlcGFyYXRvclJlZ0V4cCA9IC9cXHMqLFxccyovZztcblxuZnVuY3Rpb24gYWRkU2NvcGUoc2VsZWN0b3IsIHNjb3BlKSB7XG4gIHZhciBwYXJ0cyA9IHNlbGVjdG9yLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gIHZhciBzY29wZWQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2NvcGVkICs9IHNjb3BlICsgXCIgXCIgKyBwYXJ0c1tpXS50cmltKCk7XG4gICAgaWYgKHBhcnRzW2kgKyAxXSkgc2NvcGVkICs9ICcsICc7XG4gIH1cblxuICByZXR1cm4gc2NvcGVkO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUsIHNoZWV0KSB7XG4gIHZhciBvcHRpb25zID0gcnVsZS5vcHRpb25zLFxuICAgICAgc3R5bGUgPSBydWxlLnN0eWxlO1xuICB2YXIgcnVsZXMgPSBzdHlsZSA/IHN0eWxlW2F0XSA6IG51bGw7XG4gIGlmICghcnVsZXMpIHJldHVybjtcblxuICBmb3IgKHZhciBuYW1lIGluIHJ1bGVzKSB7XG4gICAgc2hlZXQuYWRkUnVsZShuYW1lLCBydWxlc1tuYW1lXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHNlbGVjdG9yOiBhZGRTY29wZShuYW1lLCBydWxlLnNlbGVjdG9yKVxuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZSBzdHlsZVthdF07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByZWZpeGVkR2xvYmFsUnVsZShydWxlLCBzaGVldCkge1xuICB2YXIgb3B0aW9ucyA9IHJ1bGUub3B0aW9ucyxcbiAgICAgIHN0eWxlID0gcnVsZS5zdHlsZTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgaWYgKHByb3BbMF0gIT09ICdAJyB8fCBwcm9wLnN1YnN0cigwLCBhdC5sZW5ndGgpICE9PSBhdCkgY29udGludWU7XG4gICAgdmFyIHNlbGVjdG9yID0gYWRkU2NvcGUocHJvcC5zdWJzdHIoYXQubGVuZ3RoKSwgcnVsZS5zZWxlY3Rvcik7XG4gICAgc2hlZXQuYWRkUnVsZShzZWxlY3Rvciwgc3R5bGVbcHJvcF0sIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcbiAgICB9KSk7XG4gICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICB9XG59XG4vKipcbiAqIENvbnZlcnQgbmVzdGVkIHJ1bGVzIHRvIHNlcGFyYXRlLCByZW1vdmUgdGhlbSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGpzc0dsb2JhbCgpIHtcbiAgZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucykge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAobmFtZSA9PT0gYXQpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsQ29udGFpbmVyUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChuYW1lWzBdID09PSAnQCcgJiYgbmFtZS5zdWJzdHIoMCwgYXRQcmVmaXgubGVuZ3RoKSA9PT0gYXRQcmVmaXgpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsUHJlZml4ZWRSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnZ2xvYmFsJyB8fCBwYXJlbnQub3B0aW9ucy5wYXJlbnQgJiYgcGFyZW50Lm9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdnbG9iYWwnKSB7XG4gICAgICAgIG9wdGlvbnMuc2NvcGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLnNlbGVjdG9yICYmIG9wdGlvbnMuc2NvcGVkID09PSBmYWxzZSkge1xuICAgICAgb3B0aW9ucy5zZWxlY3RvciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJyB8fCAhc2hlZXQpIHJldHVybjtcbiAgICBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUsIHNoZWV0KTtcbiAgICBoYW5kbGVQcmVmaXhlZEdsb2JhbFJ1bGUocnVsZSwgc2hlZXQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbkNyZWF0ZVJ1bGU6IG9uQ3JlYXRlUnVsZSxcbiAgICBvblByb2Nlc3NSdWxlOiBvblByb2Nlc3NSdWxlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc0dsb2JhbDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5cbnZhciBzZXBhcmF0b3JSZWdFeHAgPSAvXFxzKixcXHMqL2c7XG52YXIgcGFyZW50UmVnRXhwID0gLyYvZztcbnZhciByZWZSZWdFeHAgPSAvXFwkKFtcXHctXSspL2c7XG4vKipcbiAqIENvbnZlcnQgbmVzdGVkIHJ1bGVzIHRvIHNlcGFyYXRlLCByZW1vdmUgdGhlbSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqL1xuXG5mdW5jdGlvbiBqc3NOZXN0ZWQoKSB7XG4gIC8vIEdldCBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yICRyZWYgcmVwbGFjZW1lbnQuXG4gIGZ1bmN0aW9uIGdldFJlcGxhY2VSZWYoY29udGFpbmVyLCBzaGVldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGtleSkge1xuICAgICAgdmFyIHJ1bGUgPSBjb250YWluZXIuZ2V0UnVsZShrZXkpIHx8IHNoZWV0ICYmIHNoZWV0LmdldFJ1bGUoa2V5KTtcblxuICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGUuc2VsZWN0b3I7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gQ291bGQgbm90IGZpbmQgdGhlIHJlZmVyZW5jZWQgcnVsZSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaW4gXFxcIlwiICsgKGNvbnRhaW5lci5vcHRpb25zLm1ldGEgfHwgY29udGFpbmVyLnRvU3RyaW5nKCkpICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VQYXJlbnRSZWZzKG5lc3RlZFByb3AsIHBhcmVudFByb3ApIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0b3JzID0gcGFyZW50UHJvcC5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuICAgIHZhciBuZXN0ZWRTZWxlY3RvcnMgPSBuZXN0ZWRQcm9wLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRTZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnRTZWxlY3RvcnNbaV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmVzdGVkU2VsZWN0b3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBuZXN0ZWQgPSBuZXN0ZWRTZWxlY3RvcnNbal07XG4gICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnLCAnOyAvLyBSZXBsYWNlIGFsbCAmIGJ5IHRoZSBwYXJlbnQgb3IgcHJlZml4ICYgd2l0aCB0aGUgcGFyZW50LlxuXG4gICAgICAgIHJlc3VsdCArPSBuZXN0ZWQuaW5kZXhPZignJicpICE9PSAtMSA/IG5lc3RlZC5yZXBsYWNlKHBhcmVudFJlZ0V4cCwgcGFyZW50KSA6IHBhcmVudCArIFwiIFwiICsgbmVzdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25zKHJ1bGUsIGNvbnRhaW5lciwgcHJldk9wdGlvbnMpIHtcbiAgICAvLyBPcHRpb25zIGhhcyBiZWVuIGFscmVhZHkgY3JlYXRlZCwgbm93IHdlIG9ubHkgaW5jcmVhc2UgaW5kZXguXG4gICAgaWYgKHByZXZPcHRpb25zKSByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZPcHRpb25zLCB7XG4gICAgICBpbmRleDogcHJldk9wdGlvbnMuaW5kZXggKyAxXG4gICAgfSk7XG4gICAgdmFyIG5lc3RpbmdMZXZlbCA9IHJ1bGUub3B0aW9ucy5uZXN0aW5nTGV2ZWw7XG4gICAgbmVzdGluZ0xldmVsID0gbmVzdGluZ0xldmVsID09PSB1bmRlZmluZWQgPyAxIDogbmVzdGluZ0xldmVsICsgMTtcblxuICAgIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIHJ1bGUub3B0aW9ucywge1xuICAgICAgbmVzdGluZ0xldmVsOiBuZXN0aW5nTGV2ZWwsXG4gICAgICBpbmRleDogY29udGFpbmVyLmluZGV4T2YocnVsZSkgKyAxIC8vIFdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCBuYW1lIHRvIGJlIHNldCBvcHRpb25zIGZvciBjaGxpZC5cblxuICAgIH0pO1xuXG4gICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgY29udGFpbmVyID0gc3R5bGVSdWxlLm9wdGlvbnMucGFyZW50O1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciByZXBsYWNlUmVmO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIGlzTmVzdGVkID0gcHJvcC5pbmRleE9mKCcmJykgIT09IC0xO1xuICAgICAgdmFyIGlzTmVzdGVkQ29uZGl0aW9uYWwgPSBwcm9wWzBdID09PSAnQCc7XG4gICAgICBpZiAoIWlzTmVzdGVkICYmICFpc05lc3RlZENvbmRpdGlvbmFsKSBjb250aW51ZTtcbiAgICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKHN0eWxlUnVsZSwgY29udGFpbmVyLCBvcHRpb25zKTtcblxuICAgICAgaWYgKGlzTmVzdGVkKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHJlcGxhY2VQYXJlbnRSZWZzKHByb3AsIHN0eWxlUnVsZS5zZWxlY3Rvcik7IC8vIExhemlseSBjcmVhdGUgdGhlIHJlZiByZXBsYWNlciBmdW5jdGlvbiBqdXN0IG9uY2UgZm9yXG4gICAgICAgIC8vIGFsbCBuZXN0ZWQgcnVsZXMgd2l0aGluIHRoZSBzaGVldC5cblxuICAgICAgICBpZiAoIXJlcGxhY2VSZWYpIHJlcGxhY2VSZWYgPSBnZXRSZXBsYWNlUmVmKGNvbnRhaW5lciwgc2hlZXQpOyAvLyBSZXBsYWNlIGFsbCAkcmVmcy5cblxuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UocmVmUmVnRXhwLCByZXBsYWNlUmVmKTtcbiAgICAgICAgdmFyIG5hbWUgPSBzdHlsZVJ1bGUua2V5ICsgXCItXCIgKyBwcm9wO1xuXG4gICAgICAgIGlmICgncmVwbGFjZVJ1bGUnIGluIGNvbnRhaW5lcikge1xuICAgICAgICAgIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VSdWxlKG5hbWUsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRSdWxlKG5hbWUsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTmVzdGVkQ29uZGl0aW9uYWwpIHtcbiAgICAgICAgLy8gUGxhY2UgY29uZGl0aW9uYWwgcmlnaHQgYWZ0ZXIgdGhlIHBhcmVudCBydWxlIHRvIGVuc3VyZSByaWdodCBvcmRlcmluZy5cbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUocHJvcCwge30sIG9wdGlvbnMpLmFkZFJ1bGUoc3R5bGVSdWxlLmtleSwgc3R5bGVbcHJvcF0sIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc3R5bGVSdWxlLnNlbGVjdG9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzTmVzdGVkO1xuIiwiLyoqXG4gKiBTb3J0IHByb3BzIGJ5IGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24ganNzUHJvcHNTb3J0KCkge1xuICB2YXIgc29ydCA9IGZ1bmN0aW9uIHNvcnQocHJvcDAsIHByb3AxKSB7XG4gICAgaWYgKHByb3AwLmxlbmd0aCA9PT0gcHJvcDEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcHJvcDAgPiBwcm9wMSA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDAubGVuZ3RoIC0gcHJvcDEubGVuZ3RoO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgbmV3U3R5bGUgPSB7fTtcbiAgICAgIHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKS5zb3J0KHNvcnQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld1N0eWxlW3Byb3BzW2ldXSA9IHN0eWxlW3Byb3BzW2ldXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0eWxlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzUHJvcHNTb3J0O1xuIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCB7IGNyZWF0ZVJ1bGUgfSBmcm9tICdqc3MnO1xuXG52YXIgbm93ID0gRGF0ZS5ub3coKTtcbnZhciBmblZhbHVlc05zID0gXCJmblZhbHVlc1wiICsgbm93O1xudmFyIGZuUnVsZU5zID0gXCJmblN0eWxlXCIgKyArK25vdztcblxudmFyIGZ1bmN0aW9uUGx1Z2luID0gZnVuY3Rpb24gZnVuY3Rpb25QbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZiBkZWNsICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShuYW1lLCB7fSwgb3B0aW9ucyk7XG4gICAgICBydWxlW2ZuUnVsZU5zXSA9IGRlY2w7XG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9LFxuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBleHRyYWN0IGZ1bmN0aW9uIHZhbHVlcyBmcm9tIHRoZSBkZWNsYXJhdGlvbiwgc28gdGhhdCB3ZSBjYW4ga2VlcCBjb3JlIHVuYXdhcmUgb2YgdGhlbS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gZG8gdGhhdCBvbmx5IG9uY2UuXG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGV4dHJhY3QgZnVuY3Rpb25zIG9uIGVhY2ggc3R5bGUgdXBkYXRlLCBzaW5jZSB0aGlzIGNhbiBoYXBwZW4gb25seSBvbmNlLlxuICAgICAgLy8gV2UgZG9uJ3Qgc3VwcG9ydCBmdW5jdGlvbiB2YWx1ZXMgaW5zaWRlIG9mIGZ1bmN0aW9uIHJ1bGVzLlxuICAgICAgaWYgKGZuVmFsdWVzTnMgaW4gcnVsZSB8fCBmblJ1bGVOcyBpbiBydWxlKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgZm5WYWx1ZXMgPSB7fTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG4gICAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICAgICAgZm5WYWx1ZXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcnVsZVtmblZhbHVlc05zXSA9IGZuVmFsdWVzO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKGRhdGEsIHJ1bGUsIHNoZWV0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICAgIHZhciBmblJ1bGUgPSBzdHlsZVJ1bGVbZm5SdWxlTnNdOyAvLyBJZiB3ZSBoYXZlIGEgc3R5bGUgZnVuY3Rpb24sIHRoZSBlbnRpcmUgcnVsZSBpcyBkeW5hbWljIGFuZCBzdHlsZSBvYmplY3RcbiAgICAgIC8vIHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGF0IGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoZm5SdWxlKSB7XG4gICAgICAgIC8vIEVtcHR5IG9iamVjdCB3aWxsIHJlbW92ZSBhbGwgY3VycmVudGx5IGRlZmluZWQgcHJvcHNcbiAgICAgICAgLy8gaW4gY2FzZSBmdW5jdGlvbiBydWxlIHJldHVybnMgYSBmYWxzeSB2YWx1ZS5cbiAgICAgICAgc3R5bGVSdWxlLnN0eWxlID0gZm5SdWxlKGRhdGEpIHx8IHt9O1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVSdWxlLnN0eWxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlUnVsZS5zdHlsZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gRnVuY3Rpb24gdmFsdWVzIGluc2lkZSBmdW5jdGlvbiBydWxlcyBhcmUgbm90IHN1cHBvcnRlZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBmblZhbHVlcyA9IHN0eWxlUnVsZVtmblZhbHVlc05zXTsgLy8gSWYgd2UgaGF2ZSBhIGZuIHZhbHVlcyBtYXAsIGl0IGlzIGEgcnVsZSB3aXRoIGZ1bmN0aW9uIHZhbHVlcy5cblxuICAgICAgaWYgKGZuVmFsdWVzKSB7XG4gICAgICAgIGZvciAodmFyIF9wcm9wIGluIGZuVmFsdWVzKSB7XG4gICAgICAgICAgc3R5bGVSdWxlLnByb3AoX3Byb3AsIGZuVmFsdWVzW19wcm9wXShkYXRhKSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvblBsdWdpbjtcbiIsImltcG9ydCB7IHN1cHBvcnRlZEtleWZyYW1lcywgc3VwcG9ydGVkVmFsdWUsIHN1cHBvcnRlZFByb3BlcnR5IH0gZnJvbSAnY3NzLXZlbmRvcic7XG5pbXBvcnQgeyB0b0Nzc1ZhbHVlIH0gZnJvbSAnanNzJztcblxuLyoqXG4gKiBBZGQgdmVuZG9yIHByZWZpeCB0byBhIHByb3BlcnR5IG5hbWUgd2hlbiBuZWVkZWQuXG4gKi9cblxuZnVuY3Rpb24ganNzVmVuZG9yUHJlZml4ZXIoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICB2YXIgYXRSdWxlID0gcnVsZTtcbiAgICAgIGF0UnVsZS5hdCA9IHN1cHBvcnRlZEtleWZyYW1lcyhhdFJ1bGUuYXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeFN0eWxlKHN0eWxlKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJyAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBzdHlsZVtwcm9wXSA9IHZhbHVlLm1hcChwcmVmaXhTdHlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlUHJvcCA9IGZhbHNlO1xuICAgICAgdmFyIHN1cHBvcnRlZFByb3AgPSBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRQcm9wICYmIHN1cHBvcnRlZFByb3AgIT09IHByb3ApIGNoYW5nZVByb3AgPSB0cnVlO1xuICAgICAgdmFyIGNoYW5nZVZhbHVlID0gZmFsc2U7XG4gICAgICB2YXIgc3VwcG9ydGVkVmFsdWUkMSA9IHN1cHBvcnRlZFZhbHVlKHN1cHBvcnRlZFByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRWYWx1ZSQxICYmIHN1cHBvcnRlZFZhbHVlJDEgIT09IHZhbHVlKSBjaGFuZ2VWYWx1ZSA9IHRydWU7XG5cbiAgICAgIGlmIChjaGFuZ2VQcm9wIHx8IGNoYW5nZVZhbHVlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VQcm9wKSBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICAgIHN0eWxlW3N1cHBvcnRlZFByb3AgfHwgcHJvcF0gPSBzdXBwb3J0ZWRWYWx1ZSQxIHx8IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgIHJldHVybiBwcmVmaXhTdHlsZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRlZFZhbHVlKHByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKSB8fCB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzUnVsZTogb25Qcm9jZXNzUnVsZSxcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NWZW5kb3JQcmVmaXhlcjtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5cbnZhciBwbGFpbk9iamVjdENvbnN0cnVyY3RvciA9IHt9LmNvbnN0cnVjdG9yO1xuZnVuY3Rpb24gY2xvbmVTdHlsZShzdHlsZSkge1xuICBpZiAoc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2Ygc3R5bGUgIT09ICdvYmplY3QnKSByZXR1cm4gc3R5bGU7XG4gIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkgcmV0dXJuIHN0eWxlLm1hcChjbG9uZVN0eWxlKTtcbiAgaWYgKHN0eWxlLmNvbnN0cnVjdG9yICE9PSBwbGFpbk9iamVjdENvbnN0cnVyY3RvcikgcmV0dXJuIHN0eWxlO1xuICB2YXIgbmV3U3R5bGUgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIHN0eWxlKSB7XG4gICAgbmV3U3R5bGVbbmFtZV0gPSBjbG9uZVN0eWxlKHN0eWxlW25hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdHlsZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBydWxlIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgbmFtZSA9ICd1bm5hbWVkJztcbiAgfVxuXG4gIHZhciBqc3MgPSBvcHRpb25zLmpzcztcbiAgdmFyIGRlY2xDb3B5ID0gY2xvbmVTdHlsZShkZWNsKTtcbiAgdmFyIHJ1bGUgPSBqc3MucGx1Z2lucy5vbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbENvcHksIG9wdGlvbnMpO1xuICBpZiAocnVsZSkgcmV0dXJuIHJ1bGU7IC8vIEl0IGlzIGFuIGF0LXJ1bGUgYW5kIGl0IGhhcyBubyBpbnN0YW5jZS5cblxuICBpZiAobmFtZVswXSA9PT0gJ0AnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBVbmtub3duIHJ1bGUgXCIgKyBuYW1lKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgam9pbiA9IGZ1bmN0aW9uIGpvaW4odmFsdWUsIGJ5KSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gUmVtb3ZlICFpbXBvcnRhbnQgZnJvbSB0aGUgdmFsdWUsIGl0IHdpbGwgYmUgcmVhZGRlZCBsYXRlci5cbiAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGJ5O1xuICAgIHJlc3VsdCArPSB2YWx1ZVtpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBKU1MgYXJyYXkgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nLlxuICpcbiAqIGBtYXJnaW46IFtbJzVweCcsICcxMHB4J11dYCA+IGBtYXJnaW46IDVweCAxMHB4O2BcbiAqIGBib3JkZXI6IFsnMXB4JywgJzJweCddYCA+IGBib3JkZXI6IDFweCwgMnB4O2BcbiAqIGBtYXJnaW46IFtbJzVweCcsICcxMHB4J10sICchaW1wb3J0YW50J11gID4gYG1hcmdpbjogNXB4IDEwcHggIWltcG9ydGFudDtgXG4gKiBgY29sb3I6IFsncmVkJywgIWltcG9ydGFudF1gID4gYGNvbG9yOiByZWQgIWltcG9ydGFudDtgXG4gKi9cblxuXG52YXIgdG9Dc3NWYWx1ZSA9IGZ1bmN0aW9uIHRvQ3NzVmFsdWUodmFsdWUpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB2YXIgY3NzVmFsdWUgPSAnJzsgLy8gU3VwcG9ydCBzcGFjZSBzZXBhcmF0ZWQgdmFsdWVzIHZpYSBgW1snNXB4JywgJzEwcHgnXV1gLlxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZVtpXSA9PT0gJyFpbXBvcnRhbnQnKSBicmVhaztcbiAgICAgIGlmIChjc3NWYWx1ZSkgY3NzVmFsdWUgKz0gJywgJztcbiAgICAgIGNzc1ZhbHVlICs9IGpvaW4odmFsdWVbaV0sICcgJyk7XG4gICAgfVxuICB9IGVsc2UgY3NzVmFsdWUgPSBqb2luKHZhbHVlLCAnLCAnKTsgLy8gQWRkICFpbXBvcnRhbnQsIGJlY2F1c2UgaXQgd2FzIGlnbm9yZWQuXG5cblxuICBpZiAodmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICchaW1wb3J0YW50Jykge1xuICAgIGNzc1ZhbHVlICs9ICcgIWltcG9ydGFudCc7XG4gIH1cblxuICByZXR1cm4gY3NzVmFsdWU7XG59O1xuXG5mdW5jdGlvbiBnZXRXaGl0ZXNwYWNlU3ltYm9scyhvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZm9ybWF0ID09PSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lYnJlYWs6ICcnLFxuICAgICAgc3BhY2U6ICcnXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGluZWJyZWFrOiAnXFxuJyxcbiAgICBzcGFjZTogJyAnXG4gIH07XG59XG5cbi8qKlxuICogSW5kZW50IGEgc3RyaW5nLlxuICogaHR0cDovL2pzcGVyZi5jb20vYXJyYXktam9pbi12cy1mb3JcbiAqL1xuXG5mdW5jdGlvbiBpbmRlbnRTdHIoc3RyLCBpbmRlbnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBpbmRlbnQ7IGluZGV4KyspIHtcbiAgICByZXN1bHQgKz0gJyAgJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzdHI7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgUnVsZSB0byBDU1Mgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gdG9Dc3Moc2VsZWN0b3IsIHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICghc3R5bGUpIHJldHVybiByZXN1bHQ7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRpbmRlbnQgPSBfb3B0aW9ucy5pbmRlbnQsXG4gICAgICBpbmRlbnQgPSBfb3B0aW9ucyRpbmRlbnQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRpbmRlbnQ7XG4gIHZhciBmYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3M7XG5cbiAgaWYgKG9wdGlvbnMuZm9ybWF0ID09PSBmYWxzZSkge1xuICAgIGluZGVudCA9IC1JbmZpbml0eTtcbiAgfVxuXG4gIHZhciBfZ2V0V2hpdGVzcGFjZVN5bWJvbHMgPSBnZXRXaGl0ZXNwYWNlU3ltYm9scyhvcHRpb25zKSxcbiAgICAgIGxpbmVicmVhayA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5saW5lYnJlYWssXG4gICAgICBzcGFjZSA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5zcGFjZTtcblxuICBpZiAoc2VsZWN0b3IpIGluZGVudCsrOyAvLyBBcHBseSBmYWxsYmFja3MgZmlyc3QuXG5cbiAgaWYgKGZhbGxiYWNrcykge1xuICAgIC8vIEFycmF5IHN5bnRheCB7ZmFsbGJhY2tzOiBbe3Byb3A6IHZhbHVlfV19XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmFsbGJhY2tzKSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGZhbGxiYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGZhbGxiYWNrID0gZmFsbGJhY2tzW2luZGV4XTtcblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIGZhbGxiYWNrKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZmFsbGJhY2tbcHJvcF07XG5cbiAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGxpbmVicmVhaztcbiAgICAgICAgICAgIHJlc3VsdCArPSBpbmRlbnRTdHIocHJvcCArIFwiOlwiICsgc3BhY2UgKyB0b0Nzc1ZhbHVlKHZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3Qgc3ludGF4IHtmYWxsYmFja3M6IHtwcm9wOiB2YWx1ZX19XG4gICAgICBmb3IgKHZhciBfcHJvcCBpbiBmYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IGZhbGxiYWNrc1tfcHJvcF07XG5cbiAgICAgICAgaWYgKF92YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGxpbmVicmVhaztcbiAgICAgICAgICByZXN1bHQgKz0gaW5kZW50U3RyKF9wcm9wICsgXCI6XCIgKyBzcGFjZSArIHRvQ3NzVmFsdWUoX3ZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX3Byb3AyIGluIHN0eWxlKSB7XG4gICAgdmFyIF92YWx1ZTIgPSBzdHlsZVtfcHJvcDJdO1xuXG4gICAgaWYgKF92YWx1ZTIgIT0gbnVsbCAmJiBfcHJvcDIgIT09ICdmYWxsYmFja3MnKSB7XG4gICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gbGluZWJyZWFrO1xuICAgICAgcmVzdWx0ICs9IGluZGVudFN0cihfcHJvcDIgKyBcIjpcIiArIHNwYWNlICsgdG9Dc3NWYWx1ZShfdmFsdWUyKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgIH1cbiAgfSAvLyBBbGxvdyBlbXB0eSBzdHlsZSBpbiB0aGlzIGNhc2UsIGJlY2F1c2UgcHJvcGVydGllcyB3aWxsIGJlIGFkZGVkIGR5bmFtaWNhbGx5LlxuXG5cbiAgaWYgKCFyZXN1bHQgJiYgIW9wdGlvbnMuYWxsb3dFbXB0eSkgcmV0dXJuIHJlc3VsdDsgLy8gV2hlbiBydWxlIGlzIGJlaW5nIHN0cmluZ2lmaWVkIGJlZm9yZSBzZWxlY3RvciB3YXMgZGVmaW5lZC5cblxuICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gcmVzdWx0O1xuICBpbmRlbnQtLTtcbiAgaWYgKHJlc3VsdCkgcmVzdWx0ID0gXCJcIiArIGxpbmVicmVhayArIHJlc3VsdCArIGxpbmVicmVhaztcbiAgcmV0dXJuIGluZGVudFN0cihcIlwiICsgc2VsZWN0b3IgKyBzcGFjZSArIFwie1wiICsgcmVzdWx0LCBpbmRlbnQpICsgaW5kZW50U3RyKCd9JywgaW5kZW50KTtcbn1cblxudmFyIGVzY2FwZVJlZ2V4ID0gLyhbW1xcXS4jKiQ+PCt+PXxeOigpLFwiJ2BcXHNdKS9nO1xudmFyIG5hdGl2ZUVzY2FwZSA9IHR5cGVvZiBDU1MgIT09ICd1bmRlZmluZWQnICYmIENTUy5lc2NhcGU7XG52YXIgZXNjYXBlID0gKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIG5hdGl2ZUVzY2FwZSA/IG5hdGl2ZUVzY2FwZShzdHIpIDogc3RyLnJlcGxhY2UoZXNjYXBlUmVnZXgsICdcXFxcJDEnKTtcbn0pO1xuXG52YXIgQmFzZVN0eWxlUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJhc2VTdHlsZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdzdHlsZSc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHZhciBzaGVldCA9IG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIFJlbmRlcmVyID0gb3B0aW9ucy5SZW5kZXJlcjtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICBpZiAoc2hlZXQpIHRoaXMucmVuZGVyZXIgPSBzaGVldC5yZW5kZXJlcjtlbHNlIGlmIChSZW5kZXJlcikgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgb3Igc2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEJhc2VTdHlsZVJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5wcm9wID0gZnVuY3Rpb24gcHJvcChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIC8vIEl0J3MgYSBnZXR0ZXIuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnN0eWxlW25hbWVdOyAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGUgdmFsdWUgaGFzIG5vdCBjaGFuZ2VkLlxuXG4gICAgdmFyIGZvcmNlID0gb3B0aW9ucyA/IG9wdGlvbnMuZm9yY2UgOiBmYWxzZTtcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuc3R5bGVbbmFtZV0gPT09IHZhbHVlKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICghb3B0aW9ucyB8fCBvcHRpb25zLnByb2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vbkNoYW5nZVZhbHVlKHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgaXNFbXB0eSA9IG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT09IGZhbHNlO1xuICAgIHZhciBpc0RlZmluZWQgPSBuYW1lIGluIHRoaXMuc3R5bGU7IC8vIFZhbHVlIGlzIGVtcHR5IGFuZCB3YXNuJ3QgZGVmaW5lZCBiZWZvcmUuXG5cbiAgICBpZiAoaXNFbXB0eSAmJiAhaXNEZWZpbmVkICYmICFmb3JjZSkgcmV0dXJuIHRoaXM7IC8vIFdlIGFyZSBnb2luZyB0byByZW1vdmUgdGhpcyB2YWx1ZS5cblxuICAgIHZhciByZW1vdmUgPSBpc0VtcHR5ICYmIGlzRGVmaW5lZDtcbiAgICBpZiAocmVtb3ZlKSBkZWxldGUgdGhpcy5zdHlsZVtuYW1lXTtlbHNlIHRoaXMuc3R5bGVbbmFtZV0gPSBuZXdWYWx1ZTsgLy8gUmVuZGVyYWJsZSBpcyBkZWZpbmVkIGlmIFN0eWxlU2hlZXQgb3B0aW9uIGBsaW5rYCBpcyB0cnVlLlxuXG4gICAgaWYgKHRoaXMucmVuZGVyYWJsZSAmJiB0aGlzLnJlbmRlcmVyKSB7XG4gICAgICBpZiAocmVtb3ZlKSB0aGlzLnJlbmRlcmVyLnJlbW92ZVByb3BlcnR5KHRoaXMucmVuZGVyYWJsZSwgbmFtZSk7ZWxzZSB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMucmVuZGVyYWJsZSwgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LmF0dGFjaGVkKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gUnVsZSBpcyBub3QgbGlua2VkLiBNaXNzaW5nIHNoZWV0IG9wdGlvbiBcImxpbms6IHRydWVcIi4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gQmFzZVN0eWxlUnVsZTtcbn0oKTtcbnZhciBTdHlsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFN0eWxlUnVsZSwgX0Jhc2VTdHlsZVJ1bGUpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQmFzZVN0eWxlUnVsZS5jYWxsKHRoaXMsIGtleSwgc3R5bGUsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgdmFyIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcbiAgICAgICAgc2NvcGVkID0gb3B0aW9ucy5zY29wZWQsXG4gICAgICAgIHNoZWV0ID0gb3B0aW9ucy5zaGVldCxcbiAgICAgICAgZ2VuZXJhdGVJZCA9IG9wdGlvbnMuZ2VuZXJhdGVJZDtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgX3RoaXMuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XG4gICAgfSBlbHNlIGlmIChzY29wZWQgIT09IGZhbHNlKSB7XG4gICAgICBfdGhpcy5pZCA9IGdlbmVyYXRlSWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIHNoZWV0KTtcbiAgICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IFwiLlwiICsgZXNjYXBlKF90aGlzLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RvciBzdHJpbmcuXG4gICAqIEF0dGVudGlvbjogdXNlIHRoaXMgd2l0aCBjYXV0aW9uLiBNb3N0IGJyb3dzZXJzIGRpZG4ndCBpbXBsZW1lbnRcbiAgICogc2VsZWN0b3JUZXh0IHNldHRlciwgc28gdGhpcyBtYXkgcmVzdWx0IGluIHJlcmVuZGVyaW5nIG9mIGVudGlyZSBTdHlsZSBTaGVldC5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvMiA9IFN0eWxlUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEFwcGx5IHJ1bGUgdG8gYW4gZWxlbWVudCBpbmxpbmUuXG4gICAqL1xuICBfcHJvdG8yLmFwcGx5VG8gPSBmdW5jdGlvbiBhcHBseVRvKHJlbmRlcmFibGUpIHtcbiAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICB2YXIganNvbiA9IHRoaXMudG9KU09OKCk7XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4ganNvbikge1xuICAgICAgICByZW5kZXJlci5zZXRQcm9wZXJ0eShyZW5kZXJhYmxlLCBwcm9wLCBqc29uW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBydWxlLlxuICAgKiBGYWxsYmFja3MgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAqIFVzZWZ1bCBmb3IgaW5saW5lIHN0eWxlcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICB2YXIganNvbiA9IHt9O1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0eWxlW3Byb3BdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIGpzb25bcHJvcF0gPSB2YWx1ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkganNvbltwcm9wXSA9IHRvQ3NzVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90bzIudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5zZWxlY3RvclRleHQsIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVJ1bGUsIFt7XG4gICAga2V5OiBcInNlbGVjdG9yXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChzZWxlY3RvciA9PT0gdGhpcy5zZWxlY3RvclRleHQpIHJldHVybjtcbiAgICAgIHRoaXMuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XG4gICAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLFxuICAgICAgICAgIHJlbmRlcmFibGUgPSB0aGlzLnJlbmRlcmFibGU7XG4gICAgICBpZiAoIXJlbmRlcmFibGUgfHwgIXJlbmRlcmVyKSByZXR1cm47XG4gICAgICB2YXIgaGFzQ2hhbmdlZCA9IHJlbmRlcmVyLnNldFNlbGVjdG9yKHJlbmRlcmFibGUsIHNlbGVjdG9yKTsgLy8gSWYgc2VsZWN0b3Igc2V0dGVyIGlzIG5vdCBpbXBsZW1lbnRlZCwgcmVyZW5kZXIgdGhlIHJ1bGUuXG5cbiAgICAgIGlmICghaGFzQ2hhbmdlZCkge1xuICAgICAgICByZW5kZXJlci5yZXBsYWNlUnVsZShyZW5kZXJhYmxlLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHNlbGVjdG9yIHN0cmluZy5cbiAgICAgKi9cbiAgICAsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RvclRleHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlUnVsZTtcbn0oQmFzZVN0eWxlUnVsZSk7XG52YXIgcGx1Z2luU3R5bGVSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKGtleVswXSA9PT0gJ0AnIHx8IG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFN0eWxlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKTtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRUb1N0cmluZ09wdGlvbnMgPSB7XG4gIGluZGVudDogMSxcbiAgY2hpbGRyZW46IHRydWVcbn07XG52YXIgYXRSZWdFeHAgPSAvQChbXFx3LV0rKS87XG4vKipcbiAqIENvbmRpdGlvbmFsIHJ1bGUgZm9yIEBtZWRpYSwgQHN1cHBvcnRzXG4gKi9cblxudmFyIENvbmRpdGlvbmFsUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbmRpdGlvbmFsUnVsZShrZXksIHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdjb25kaXRpb25hbCc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHZhciBhdE1hdGNoID0ga2V5Lm1hdGNoKGF0UmVnRXhwKTtcbiAgICB0aGlzLmF0ID0gYXRNYXRjaCA/IGF0TWF0Y2hbMV0gOiAndW5rbm93bic7IC8vIEtleSBtaWdodCBjb250YWluIGEgdW5pcXVlIHN1ZmZpeCBpbiBjYXNlIHRoZSBgbmFtZWAgcGFzc2VkIGJ5IHVzZXIgd2FzIGR1cGxpY2F0ZS5cblxuICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLm5hbWUgfHwgXCJAXCIgKyB0aGlzLmF0O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IENvbmRpdGlvbmFsUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUsIHJ1biBwbHVnaW5zLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlID0gZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2UgcnVsZSwgcnVuIHBsdWdpbnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlcGxhY2VSdWxlID0gZnVuY3Rpb24gcmVwbGFjZVJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbmV3UnVsZSA9IHRoaXMucnVsZXMucmVwbGFjZShuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgaWYgKG5ld1J1bGUpIHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vblByb2Nlc3NSdWxlKG5ld1J1bGUpO1xuICAgIHJldHVybiBuZXdSdWxlO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgX2dldFdoaXRlc3BhY2VTeW1ib2xzID0gZ2V0V2hpdGVzcGFjZVN5bWJvbHMob3B0aW9ucyksXG4gICAgICAgIGxpbmVicmVhayA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5saW5lYnJlYWs7XG5cbiAgICBpZiAob3B0aW9ucy5pbmRlbnQgPT0gbnVsbCkgb3B0aW9ucy5pbmRlbnQgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zLmluZGVudDtcbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PSBudWxsKSBvcHRpb25zLmNoaWxkcmVuID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucy5jaGlsZHJlbjtcblxuICAgIGlmIChvcHRpb25zLmNoaWxkcmVuID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXMucXVlcnkgKyBcIiB7fVwiO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgcmV0dXJuIGNoaWxkcmVuID8gdGhpcy5xdWVyeSArIFwiIHtcIiArIGxpbmVicmVhayArIGNoaWxkcmVuICsgbGluZWJyZWFrICsgXCJ9XCIgOiAnJztcbiAgfTtcblxuICByZXR1cm4gQ29uZGl0aW9uYWxSdWxlO1xufSgpO1xudmFyIGtleVJlZ0V4cCA9IC9AY29udGFpbmVyfEBtZWRpYXxAc3VwcG9ydHNcXHMrLztcbnZhciBwbHVnaW5Db25kaXRpb25hbFJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleVJlZ0V4cC50ZXN0KGtleSkgPyBuZXcgQ29uZGl0aW9uYWxSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDEgPSB7XG4gIGluZGVudDogMSxcbiAgY2hpbGRyZW46IHRydWVcbn07XG52YXIgbmFtZVJlZ0V4cCA9IC9Aa2V5ZnJhbWVzXFxzKyhbXFx3LV0rKS87XG4vKipcbiAqIFJ1bGUgZm9yIEBrZXlmcmFtZXNcbiAqL1xuXG52YXIgS2V5ZnJhbWVzUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAna2V5ZnJhbWVzJztcbiAgICB0aGlzLmF0ID0gJ0BrZXlmcmFtZXMnO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB2YXIgbmFtZU1hdGNoID0ga2V5Lm1hdGNoKG5hbWVSZWdFeHApO1xuXG4gICAgaWYgKG5hbWVNYXRjaCAmJiBuYW1lTWF0Y2hbMV0pIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVNYXRjaFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lID0gJ25vbmFtZSc7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIEJhZCBrZXlmcmFtZXMgbmFtZSBcIiArIGtleSkgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdGhpcy5rZXkgPSB0aGlzLnR5cGUgKyBcIi1cIiArIHRoaXMubmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHZhciBzY29wZWQgPSBvcHRpb25zLnNjb3BlZCxcbiAgICAgICAgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBnZW5lcmF0ZUlkID0gb3B0aW9ucy5nZW5lcmF0ZUlkO1xuICAgIHRoaXMuaWQgPSBzY29wZWQgPT09IGZhbHNlID8gdGhpcy5uYW1lIDogZXNjYXBlKGdlbmVyYXRlSWQodGhpcywgc2hlZXQpKTtcbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIGZyYW1lcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgZnJhbWVzW25hbWVdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDE7XG4gICAgfVxuXG4gICAgdmFyIF9nZXRXaGl0ZXNwYWNlU3ltYm9scyA9IGdldFdoaXRlc3BhY2VTeW1ib2xzKG9wdGlvbnMpLFxuICAgICAgICBsaW5lYnJlYWsgPSBfZ2V0V2hpdGVzcGFjZVN5bWJvbHMubGluZWJyZWFrO1xuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmluZGVudDtcbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PSBudWxsKSBvcHRpb25zLmNoaWxkcmVuID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICBpZiAoY2hpbGRyZW4pIGNoaWxkcmVuID0gXCJcIiArIGxpbmVicmVhayArIGNoaWxkcmVuICsgbGluZWJyZWFrO1xuICAgIHJldHVybiB0aGlzLmF0ICsgXCIgXCIgKyB0aGlzLmlkICsgXCIge1wiICsgY2hpbGRyZW4gKyBcIn1cIjtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVzUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAkMSA9IC9Aa2V5ZnJhbWVzXFxzKy87XG52YXIgcmVmUmVnRXhwID0gL1xcJChbXFx3LV0rKS9nO1xuXG52YXIgZmluZFJlZmVyZW5jZWRLZXlmcmFtZSA9IGZ1bmN0aW9uIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsLCBrZXlmcmFtZXMpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbC5yZXBsYWNlKHJlZlJlZ0V4cCwgZnVuY3Rpb24gKG1hdGNoLCBuYW1lKSB7XG4gICAgICBpZiAobmFtZSBpbiBrZXlmcmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIGtleWZyYW1lc1tuYW1lXTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBSZWZlcmVuY2VkIGtleWZyYW1lcyBydWxlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQuXCIpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG4vKipcbiAqIFJlcGxhY2UgdGhlIHJlZmVyZW5jZSBmb3IgYSBhbmltYXRpb24gbmFtZS5cbiAqL1xuXG5cbnZhciByZXBsYWNlUmVmID0gZnVuY3Rpb24gcmVwbGFjZVJlZihzdHlsZSwgcHJvcCwga2V5ZnJhbWVzKSB7XG4gIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuICB2YXIgcmVmS2V5ZnJhbWUgPSBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbHVlLCBrZXlmcmFtZXMpO1xuXG4gIGlmIChyZWZLZXlmcmFtZSAhPT0gdmFsdWUpIHtcbiAgICBzdHlsZVtwcm9wXSA9IHJlZktleWZyYW1lO1xuICB9XG59O1xuXG52YXIgcGx1Z2luS2V5ZnJhbWVzUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5UmVnRXhwJDEudGVzdChrZXkpID8gbmV3IEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgfSxcbiAgLy8gQW5pbWF0aW9uIG5hbWUgcmVmIHJlcGxhY2VyLlxuICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJyB8fCAhc2hlZXQpIHJldHVybiBzdHlsZTtcbiAgICBpZiAoJ2FuaW1hdGlvbi1uYW1lJyBpbiBzdHlsZSkgcmVwbGFjZVJlZihzdHlsZSwgJ2FuaW1hdGlvbi1uYW1lJywgc2hlZXQua2V5ZnJhbWVzKTtcbiAgICBpZiAoJ2FuaW1hdGlvbicgaW4gc3R5bGUpIHJlcGxhY2VSZWYoc3R5bGUsICdhbmltYXRpb24nLCBzaGVldC5rZXlmcmFtZXMpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfSxcbiAgb25DaGFuZ2VWYWx1ZTogZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWwsIHByb3AsIHJ1bGUpIHtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBpZiAoIXNoZWV0KSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgcmV0dXJuIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsLCBzaGVldC5rZXlmcmFtZXMpO1xuXG4gICAgICBjYXNlICdhbmltYXRpb24tbmFtZSc6XG4gICAgICAgIHJldHVybiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwgc2hlZXQua2V5ZnJhbWVzKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBLZXlmcmFtZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKEtleWZyYW1lUnVsZSwgX0Jhc2VTdHlsZVJ1bGUpO1xuXG4gIGZ1bmN0aW9uIEtleWZyYW1lUnVsZSgpIHtcbiAgICByZXR1cm4gX0Jhc2VTdHlsZVJ1bGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEtleWZyYW1lUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5rZXksIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpbktleWZyYW1lUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgcmV0dXJuIG5ldyBLZXlmcmFtZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbnZhciBGb250RmFjZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdmb250LWZhY2UnO1xuICAgIHRoaXMuYXQgPSAnQGZvbnQtZmFjZSc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBGb250RmFjZVJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICB2YXIgX2dldFdoaXRlc3BhY2VTeW1ib2xzID0gZ2V0V2hpdGVzcGFjZVN5bWJvbHMob3B0aW9ucyksXG4gICAgICAgIGxpbmVicmVhayA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5saW5lYnJlYWs7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnN0eWxlKSkge1xuICAgICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgc3RyICs9IHRvQ3NzKHRoaXMuYXQsIHRoaXMuc3R5bGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGVbaW5kZXggKyAxXSkgc3RyICs9IGxpbmVicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9Dc3ModGhpcy5hdCwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIEZvbnRGYWNlUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAkMiA9IC9AZm9udC1mYWNlLztcbnZhciBwbHVnaW5Gb250RmFjZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwJDIudGVzdChrZXkpID8gbmV3IEZvbnRGYWNlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBWaWV3cG9ydFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICd2aWV3cG9ydCc7XG4gICAgdGhpcy5hdCA9ICdAdmlld3BvcnQnO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gVmlld3BvcnRSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMua2V5LCB0aGlzLnN0eWxlLCBvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gVmlld3BvcnRSdWxlO1xufSgpO1xudmFyIHBsdWdpblZpZXdwb3J0UnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBrZXkgPT09ICdAdmlld3BvcnQnIHx8IGtleSA9PT0gJ0AtbXMtdmlld3BvcnQnID8gbmV3IFZpZXdwb3J0UnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBTaW1wbGVSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2ltcGxlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ3NpbXBsZSc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICB2YXIgX3Byb3RvID0gU2ltcGxlUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHIgKz0gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWVbaW5kZXhdICsgXCI7XCI7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlW2luZGV4ICsgMV0pIHN0ciArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWUgKyBcIjtcIjtcbiAgfTtcblxuICByZXR1cm4gU2ltcGxlUnVsZTtcbn0oKTtcbnZhciBrZXlzTWFwID0ge1xuICAnQGNoYXJzZXQnOiB0cnVlLFxuICAnQGltcG9ydCc6IHRydWUsXG4gICdAbmFtZXNwYWNlJzogdHJ1ZVxufTtcbnZhciBwbHVnaW5TaW1wbGVSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleSBpbiBrZXlzTWFwID8gbmV3IFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgcGx1Z2lucyA9IFtwbHVnaW5TdHlsZVJ1bGUsIHBsdWdpbkNvbmRpdGlvbmFsUnVsZSwgcGx1Z2luS2V5ZnJhbWVzUnVsZSwgcGx1Z2luS2V5ZnJhbWVSdWxlLCBwbHVnaW5Gb250RmFjZVJ1bGUsIHBsdWdpblZpZXdwb3J0UnVsZSwgcGx1Z2luU2ltcGxlUnVsZV07XG5cbnZhciBkZWZhdWx0VXBkYXRlT3B0aW9ucyA9IHtcbiAgcHJvY2VzczogdHJ1ZVxufTtcbnZhciBmb3JjZVVwZGF0ZU9wdGlvbnMgPSB7XG4gIGZvcmNlOiB0cnVlLFxuICBwcm9jZXNzOiB0cnVlXG4gIC8qKlxuICAgKiBDb250YWlucyBydWxlcyBvYmplY3RzIGFuZCBhbGxvd3MgYWRkaW5nL3JlbW92aW5nIGV0Yy5cbiAgICogSXMgdXNlZCBmb3IgZS5nLiBieSBgU3R5bGVTaGVldGAgb3IgYENvbmRpdGlvbmFsUnVsZWAuXG4gICAqL1xuXG59O1xuXG52YXIgUnVsZUxpc3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvLyBSdWxlcyByZWdpc3RyeSBmb3IgYWNjZXNzIGJ5IC5nZXQoKSBtZXRob2QuXG4gIC8vIEl0IGNvbnRhaW5zIHRoZSBzYW1lIHJ1bGUgcmVnaXN0ZXJlZCBieSBuYW1lIGFuZCBieSBzZWxlY3Rvci5cbiAgLy8gT3JpZ2luYWwgc3R5bGVzIG9iamVjdC5cbiAgLy8gVXNlZCB0byBlbnN1cmUgY29ycmVjdCBydWxlcyBvcmRlci5cbiAgZnVuY3Rpb24gUnVsZUxpc3Qob3B0aW9ucykge1xuICAgIHRoaXMubWFwID0ge307XG4gICAgdGhpcy5yYXcgPSB7fTtcbiAgICB0aGlzLmluZGV4ID0gW107XG4gICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcztcbiAgICB0aGlzLmtleWZyYW1lcyA9IG9wdGlvbnMua2V5ZnJhbWVzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUuXG4gICAqXG4gICAqIFdpbGwgbm90IHJlbmRlciBhZnRlciBTdHlsZSBTaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFJ1bGVMaXN0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG5hbWUsIGRlY2wsIHJ1bGVPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBhcmVudCA9IF90aGlzJG9wdGlvbnMucGFyZW50LFxuICAgICAgICBzaGVldCA9IF90aGlzJG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGpzcyA9IF90aGlzJG9wdGlvbnMuanNzLFxuICAgICAgICBSZW5kZXJlciA9IF90aGlzJG9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBfdGhpcyRvcHRpb25zLmdlbmVyYXRlSWQsXG4gICAgICAgIHNjb3BlZCA9IF90aGlzJG9wdGlvbnMuc2NvcGVkO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIGpzczoganNzLFxuICAgICAgUmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgZ2VuZXJhdGVJZDogZ2VuZXJhdGVJZCxcbiAgICAgIHNjb3BlZDogc2NvcGVkLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGtleWZyYW1lczogdGhpcy5rZXlmcmFtZXMsXG4gICAgICBzZWxlY3RvcjogdW5kZWZpbmVkXG4gICAgfSwgcnVsZU9wdGlvbnMpOyAvLyBXaGVuIHVzZXIgdXNlcyAuY3JlYXRlU3R5bGVTaGVldCgpLCBkdXBsaWNhdGUgbmFtZXMgYXJlIG5vdCBwb3NzaWJsZSwgYnV0XG4gICAgLy8gYHNoZWV0LmFkZFJ1bGUoKWAgb3BlbnMgdGhlIGRvb3IgZm9yIGFueSBkdXBsaWNhdGUgcnVsZSBuYW1lLiBXaGVuIHRoaXMgaGFwcGVuc1xuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSB0aGUga2V5IHVuaXF1ZSB3aXRoaW4gdGhpcyBSdWxlTGlzdCBpbnN0YW5jZSBzY29wZS5cblxuXG4gICAgdmFyIGtleSA9IG5hbWU7XG5cbiAgICBpZiAobmFtZSBpbiB0aGlzLnJhdykge1xuICAgICAga2V5ID0gbmFtZSArIFwiLWRcIiArIHRoaXMuY291bnRlcisrO1xuICAgIH0gLy8gV2UgbmVlZCB0byBzYXZlIHRoZSBvcmlnaW5hbCBkZWNsIGJlZm9yZSBjcmVhdGluZyB0aGUgcnVsZVxuICAgIC8vIGJlY2F1c2UgY2FjaGUgcGx1Z2luIG5lZWRzIHRvIHVzZSBpdCBhcyBhIGtleSB0byByZXR1cm4gYSBjYWNoZWQgcnVsZS5cblxuXG4gICAgdGhpcy5yYXdba2V5XSA9IGRlY2w7XG5cbiAgICBpZiAoa2V5IGluIHRoaXMuY2xhc3Nlcykge1xuICAgICAgLy8gRS5nLiBydWxlcyBpbnNpZGUgb2YgQG1lZGlhIGNvbnRhaW5lclxuICAgICAgb3B0aW9ucy5zZWxlY3RvciA9IFwiLlwiICsgZXNjYXBlKHRoaXMuY2xhc3Nlc1trZXldKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUoa2V5LCBkZWNsLCBvcHRpb25zKTtcbiAgICBpZiAoIXJ1bGUpIHJldHVybiBudWxsO1xuICAgIHRoaXMucmVnaXN0ZXIocnVsZSk7XG4gICAgdmFyIGluZGV4ID0gb3B0aW9ucy5pbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbmRleC5sZW5ndGggOiBvcHRpb25zLmluZGV4O1xuICAgIHRoaXMuaW5kZXguc3BsaWNlKGluZGV4LCAwLCBydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZSBydWxlLlxuICAgKiBDcmVhdGUgYSBuZXcgcnVsZSBhbmQgcmVtb3ZlIG9sZCBvbmUgaW5zdGVhZCBvZiBvdmVyd3JpdGluZ1xuICAgKiBiZWNhdXNlIHdlIHdhbnQgdG8gaW52b2tlIG9uQ3JlYXRlUnVsZSBob29rIHRvIG1ha2UgcGx1Z2lucyB3b3JrLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShuYW1lLCBkZWNsLCBydWxlT3B0aW9ucykge1xuICAgIHZhciBvbGRSdWxlID0gdGhpcy5nZXQobmFtZSk7XG4gICAgdmFyIG9sZEluZGV4ID0gdGhpcy5pbmRleC5pbmRleE9mKG9sZFJ1bGUpO1xuXG4gICAgaWYgKG9sZFJ1bGUpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG9sZFJ1bGUpO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0gcnVsZU9wdGlvbnM7XG4gICAgaWYgKG9sZEluZGV4ICE9PSAtMSkgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBydWxlT3B0aW9ucywge1xuICAgICAgaW5kZXg6IG9sZEluZGV4XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlIGJ5IG5hbWUgb3Igc2VsZWN0b3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChuYW1lT3JTZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLm1hcFtuYW1lT3JTZWxlY3Rvcl07XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShydWxlKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKHJ1bGUpO1xuICAgIGRlbGV0ZSB0aGlzLnJhd1tydWxlLmtleV07XG4gICAgdGhpcy5pbmRleC5zcGxpY2UodGhpcy5pbmRleC5pbmRleE9mKHJ1bGUpLCAxKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLmluZGV4LmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJ1biBgb25Qcm9jZXNzUnVsZSgpYCBwbHVnaW5zIG9uIGV2ZXJ5IHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgIHZhciBwbHVnaW5zID0gdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zOyAvLyBXZSBuZWVkIHRvIGNsb25lIGFycmF5IGJlY2F1c2UgaWYgd2UgbW9kaWZ5IHRoZSBpbmRleCBzb21ld2hlcmUgZWxzZSBkdXJpbmcgYSBsb29wXG4gICAgLy8gd2UgZW5kIHVwIHdpdGggdmVyeSBoYXJkLXRvLXRyYWNrLWRvd24gc2lkZSBlZmZlY3RzLlxuXG4gICAgdGhpcy5pbmRleC5zbGljZSgwKS5mb3JFYWNoKHBsdWdpbnMub25Qcm9jZXNzUnVsZSwgcGx1Z2lucyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgcnVsZSBpbiBgLm1hcGAsIGAuY2xhc3Nlc2AgYW5kIGAua2V5ZnJhbWVzYCBtYXBzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKHJ1bGUpIHtcbiAgICB0aGlzLm1hcFtydWxlLmtleV0gPSBydWxlO1xuXG4gICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpIHtcbiAgICAgIHRoaXMubWFwW3J1bGUuc2VsZWN0b3JdID0gcnVsZTtcbiAgICAgIGlmIChydWxlLmlkKSB0aGlzLmNsYXNzZXNbcnVsZS5rZXldID0gcnVsZS5pZDtcbiAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBLZXlmcmFtZXNSdWxlICYmIHRoaXMua2V5ZnJhbWVzKSB7XG4gICAgICB0aGlzLmtleWZyYW1lc1tydWxlLm5hbWVdID0gcnVsZS5pZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlcihydWxlKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW3J1bGUua2V5XTtcblxuICAgIGlmIChydWxlIGluc3RhbmNlb2YgU3R5bGVSdWxlKSB7XG4gICAgICBkZWxldGUgdGhpcy5tYXBbcnVsZS5zZWxlY3Rvcl07XG4gICAgICBkZWxldGUgdGhpcy5jbGFzc2VzW3J1bGUua2V5XTtcbiAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBLZXlmcmFtZXNSdWxlKSB7XG4gICAgICBkZWxldGUgdGhpcy5rZXlmcmFtZXNbcnVsZS5uYW1lXTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBuYW1lO1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBvcHRpb25zO1xuXG4gICAgaWYgKHR5cGVvZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07XG4gICAgICBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTtcbiAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgICBuYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpcy51cGRhdGVPbmUodGhpcy5nZXQobmFtZSksIGRhdGEsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRleC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy51cGRhdGVPbmUodGhpcy5pbmRleFtpbmRleF0sIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRXhlY3V0ZSBwbHVnaW5zLCB1cGRhdGUgcnVsZSBwcm9wcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlT25lID0gZnVuY3Rpb24gdXBkYXRlT25lKHJ1bGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdFVwZGF0ZU9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJG9wdGlvbnMyID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBwbHVnaW5zID0gX3RoaXMkb3B0aW9uczIuanNzLnBsdWdpbnMsXG4gICAgICAgIHNoZWV0ID0gX3RoaXMkb3B0aW9uczIuc2hlZXQ7IC8vIEl0IGlzIGEgcnVsZXMgY29udGFpbmVyIGxpa2UgZm9yIGUuZy4gQ29uZGl0aW9uYWxSdWxlLlxuXG4gICAgaWYgKHJ1bGUucnVsZXMgaW5zdGFuY2VvZiBSdWxlTGlzdCkge1xuICAgICAgcnVsZS5ydWxlcy51cGRhdGUoZGF0YSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gcnVsZS5zdHlsZTtcbiAgICBwbHVnaW5zLm9uVXBkYXRlKGRhdGEsIHJ1bGUsIHNoZWV0LCBvcHRpb25zKTsgLy8gV2UgcmVseSBvbiBhIG5ldyBgc3R5bGVgIHJlZiBpbiBjYXNlIGl0IHdhcyBtdXRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLlxuXG4gICAgaWYgKG9wdGlvbnMucHJvY2VzcyAmJiBzdHlsZSAmJiBzdHlsZSAhPT0gcnVsZS5zdHlsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBydW4gdGhlIHBsdWdpbnMgaW4gY2FzZSBuZXcgYHN0eWxlYCByZWxpZXMgb24gc3ludGF4IHBsdWdpbnMuXG4gICAgICBwbHVnaW5zLm9uUHJvY2Vzc1N0eWxlKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTsgLy8gVXBkYXRlIGFuZCBhZGQgcHJvcHMuXG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gcnVsZS5zdHlsZSkge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gcnVsZS5zdHlsZVtwcm9wXTtcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHN0eWxlW3Byb3BdOyAvLyBXZSBuZWVkIHRvIHVzZSBgZm9yY2U6IHRydWVgIGJlY2F1c2UgYHJ1bGUuc3R5bGVgIGhhcyBiZWVuIHVwZGF0ZWQgZHVyaW5nIG9uVXBkYXRlIGhvb2ssIHNvIGBydWxlLnByb3AoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBDU1NPTSBydWxlLlxuICAgICAgICAvLyBXZSBkbyB0aGlzIGNvbXBhcmlzb24gdG8gYXZvaWQgdW5uZWVkZWQgYHJ1bGUucHJvcCgpYCBjYWxscywgc2luY2Ugd2UgaGF2ZSB0aGUgb2xkIGBzdHlsZWAgb2JqZWN0IGhlcmUuXG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAhPT0gcHJldlZhbHVlKSB7XG4gICAgICAgICAgcnVsZS5wcm9wKHByb3AsIG5leHRWYWx1ZSwgZm9yY2VVcGRhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZW1vdmUgcHJvcHMuXG5cblxuICAgICAgZm9yICh2YXIgX3Byb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgdmFyIF9uZXh0VmFsdWUgPSBydWxlLnN0eWxlW19wcm9wXTtcbiAgICAgICAgdmFyIF9wcmV2VmFsdWUgPSBzdHlsZVtfcHJvcF07IC8vIFdlIG5lZWQgdG8gdXNlIGBmb3JjZTogdHJ1ZWAgYmVjYXVzZSBgcnVsZS5zdHlsZWAgaGFzIGJlZW4gdXBkYXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vaywgc28gYHJ1bGUucHJvcCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIENTU09NIHJ1bGUuXG4gICAgICAgIC8vIFdlIGRvIHRoaXMgY29tcGFyaXNvbiB0byBhdm9pZCB1bm5lZWRlZCBgcnVsZS5wcm9wKClgIGNhbGxzLCBzaW5jZSB3ZSBoYXZlIHRoZSBvbGQgYHN0eWxlYCBvYmplY3QgaGVyZS5cblxuICAgICAgICBpZiAoX25leHRWYWx1ZSA9PSBudWxsICYmIF9uZXh0VmFsdWUgIT09IF9wcmV2VmFsdWUpIHtcbiAgICAgICAgICBydWxlLnByb3AoX3Byb3AsIG51bGwsIGZvcmNlVXBkYXRlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgcnVsZXMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcblxuICAgIHZhciBfZ2V0V2hpdGVzcGFjZVN5bWJvbHMgPSBnZXRXaGl0ZXNwYWNlU3ltYm9scyhvcHRpb25zKSxcbiAgICAgICAgbGluZWJyZWFrID0gX2dldFdoaXRlc3BhY2VTeW1ib2xzLmxpbmVicmVhaztcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmluZGV4W2luZGV4XTtcbiAgICAgIHZhciBjc3MgPSBydWxlLnRvU3RyaW5nKG9wdGlvbnMpOyAvLyBObyBuZWVkIHRvIHJlbmRlciBhbiBlbXB0eSBydWxlLlxuXG4gICAgICBpZiAoIWNzcyAmJiAhbGluaykgY29udGludWU7XG4gICAgICBpZiAoc3RyKSBzdHIgKz0gbGluZWJyZWFrO1xuICAgICAgc3RyICs9IGNzcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiBSdWxlTGlzdDtcbn0oKTtcblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcGxveWVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGFzc2VzID0ge307XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgc2hlZXQ6IHRoaXMsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBrZXlmcmFtZXM6IHRoaXMua2V5ZnJhbWVzXG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy5SZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBvcHRpb25zLlJlbmRlcmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QodGhpcy5vcHRpb25zKTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZXNbbmFtZV0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBdHRhY2ggcmVuZGVyYWJsZSB0byB0aGUgcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHJldHVybiB0aGlzO1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLmF0dGFjaCgpO1xuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlOyAvLyBPcmRlciBpcyBpbXBvcnRhbnQsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGluc2VydFJ1bGUgQVBJIGlmIHN0eWxlIGVsZW1lbnQgaXMgbm90IGF0dGFjaGVkLlxuXG4gICAgaWYgKCF0aGlzLmRlcGxveWVkKSB0aGlzLmRlcGxveSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgcmVuZGVyYWJsZSBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5kZXRhY2goKTtcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHJ1bGUgdG8gdGhlIGN1cnJlbnQgc3R5bGVzaGVldC5cbiAgICogV2lsbCBpbnNlcnQgYSBydWxlIGFsc28gYWZ0ZXIgdGhlIHN0eWxlc2hlZXQgaGFzIGJlZW4gcmVuZGVyZWQgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWU7IC8vIFBsdWdpbnMgY2FuIGNyZWF0ZSBydWxlcy5cbiAgICAvLyBJbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgcmlnaHQgb3JkZXIsIHdlIG5lZWQgdG8gcXVldWUgYWxsIGAuYWRkUnVsZWAgY2FsbHMsXG4gICAgLy8gd2hpY2ggaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCBgcnVsZXMuYWRkKClgIGNhbGwuXG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCAmJiAhcXVldWUpIHRoaXMucXVldWUgPSBbXTtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgaWYgKCF0aGlzLmRlcGxveWVkKSByZXR1cm4gcnVsZTsgLy8gRG9uJ3QgaW5zZXJ0IHJ1bGUgZGlyZWN0bHkgaWYgdGhlcmUgaXMgbm8gc3RyaW5naWZpZWQgdmVyc2lvbiB5ZXQuXG4gICAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuXG4gICAgICBpZiAocXVldWUpIHF1ZXVlLnB1c2gocnVsZSk7ZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShydWxlKTtcblxuICAgICAgICBpZiAodGhpcy5xdWV1ZSkge1xuICAgICAgICAgIHRoaXMucXVldWUuZm9yRWFjaCh0aGlzLmluc2VydFJ1bGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0gLy8gV2UgY2FuJ3QgYWRkIHJ1bGVzIHRvIGEgZGV0YWNoZWQgc3R5bGUgbm9kZS5cbiAgICAvLyBXZSB3aWxsIHJlZGVwbG95IHRoZSBzaGVldCBvbmNlIHVzZXIgd2lsbCBhdHRhY2ggaXQuXG5cblxuICAgIHRoaXMuZGVwbG95ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZSBhIHJ1bGUgaW4gdGhlIGN1cnJlbnQgc3R5bGVzaGVldC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShuYW1lT3JTZWxlY3RvciwgZGVjbCwgb3B0aW9ucykge1xuICAgIHZhciBvbGRSdWxlID0gdGhpcy5ydWxlcy5nZXQobmFtZU9yU2VsZWN0b3IpO1xuICAgIGlmICghb2xkUnVsZSkgcmV0dXJuIHRoaXMuYWRkUnVsZShuYW1lT3JTZWxlY3RvciwgZGVjbCwgb3B0aW9ucyk7XG4gICAgdmFyIG5ld1J1bGUgPSB0aGlzLnJ1bGVzLnJlcGxhY2UobmFtZU9yU2VsZWN0b3IsIGRlY2wsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG5ld1J1bGUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vblByb2Nlc3NSdWxlKG5ld1J1bGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgICBpZiAoIXRoaXMuZGVwbG95ZWQpIHJldHVybiBuZXdSdWxlOyAvLyBEb24ndCByZXBsYWNlIC8gZGVsZXRlIHJ1bGUgZGlyZWN0bHkgaWYgdGhlcmUgaXMgbm8gc3RyaW5naWZpZWQgdmVyc2lvbiB5ZXQuXG4gICAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuXG4gICAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgICBpZiAoIW5ld1J1bGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmRlbGV0ZVJ1bGUob2xkUnVsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAob2xkUnVsZS5yZW5kZXJhYmxlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZXBsYWNlUnVsZShvbGRSdWxlLnJlbmRlcmFibGUsIG5ld1J1bGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdSdWxlO1xuICAgIH0gLy8gV2UgY2FuJ3QgcmVwbGFjZSBydWxlcyB0byBhIGRldGFjaGVkIHN0eWxlIG5vZGUuXG4gICAgLy8gV2Ugd2lsbCByZWRlcGxveSB0aGUgc2hlZXQgb25jZSB1c2VyIHdpbGwgYXR0YWNoIGl0LlxuXG5cbiAgICB0aGlzLmRlcGxveWVkID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ld1J1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBydWxlIGludG8gdGhlIFN0eWxlU2hlZXRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluc2VydFJ1bGUocnVsZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGFkZCBydWxlcy5cbiAgICogV2lsbCByZW5kZXIgYWxzbyBhZnRlciBTdHlsZSBTaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGVzID0gZnVuY3Rpb24gYWRkUnVsZXMoc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgdmFyIGFkZGVkID0gW107XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmFkZFJ1bGUobmFtZSwgc3R5bGVzW25hbWVdLCBvcHRpb25zKTtcbiAgICAgIGlmIChydWxlKSBhZGRlZC5wdXNoKHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRlZDtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZSBieSBuYW1lIG9yIHNlbGVjdG9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRSdWxlID0gZnVuY3Rpb24gZ2V0UnVsZShuYW1lT3JTZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lT3JTZWxlY3Rvcik7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUgYnkgbmFtZS5cbiAgICogUmV0dXJucyBgdHJ1ZWA6IGlmIHJ1bGUgaGFzIGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBET00uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKG5hbWUpIHtcbiAgICB2YXIgcnVsZSA9IHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyA/IG5hbWUgOiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcblxuICAgIGlmICghcnVsZSB8fCAvLyBTdHlsZSBzaGVldCB3YXMgY3JlYXRlZCB3aXRob3V0IGxpbms6IHRydWUgYW5kIGF0dGFjaGVkLCBpbiB0aGlzIGNhc2Ugd2VcbiAgICAvLyB3b24ndCBiZSBhYmxlIHRvIHJlbW92ZSB0aGUgQ1NTIHJ1bGUgZnJvbSB0aGUgRE9NLlxuICAgIHRoaXMuYXR0YWNoZWQgJiYgIXJ1bGUucmVuZGVyYWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucmVtb3ZlKHJ1bGUpO1xuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQgJiYgcnVsZS5yZW5kZXJhYmxlICYmIHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmRlbGV0ZVJ1bGUocnVsZS5yZW5kZXJhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlcGxveSBwdXJlIENTUyBzdHJpbmcgdG8gYSByZW5kZXJhYmxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXBsb3kgPSBmdW5jdGlvbiBkZXBsb3koKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHRoaXMucmVuZGVyZXIuZGVwbG95KCk7XG4gICAgdGhpcy5kZXBsb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfdGhpcyRydWxlcztcblxuICAgIChfdGhpcyRydWxlcyA9IHRoaXMucnVsZXMpLnVwZGF0ZS5hcHBseShfdGhpcyRydWxlcywgYXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgc2luZ2xlIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZU9uZSA9IGZ1bmN0aW9uIHVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdGhpcy5ydWxlcy51cGRhdGVPbmUocnVsZSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgcnVsZXMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxudmFyIFBsdWdpbnNSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdWdpbnNSZWdpc3RyeSgpIHtcbiAgICB0aGlzLnBsdWdpbnMgPSB7XG4gICAgICBpbnRlcm5hbDogW10sXG4gICAgICBleHRlcm5hbDogW11cbiAgICB9O1xuICAgIHRoaXMucmVnaXN0cnkgPSB7fTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQbHVnaW5zUmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBDYWxsIGBvbkNyZWF0ZVJ1bGVgIGhvb2tzIGFuZCByZXR1cm4gYW4gb2JqZWN0IGlmIHJldHVybmVkIGJ5IGEgaG9vay5cbiAgICovXG4gIF9wcm90by5vbkNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGVbaV0obmFtZSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgICBpZiAocnVsZSkgcmV0dXJuIHJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1J1bGVgIGhvb2tzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vblByb2Nlc3NSdWxlID0gZnVuY3Rpb24gb25Qcm9jZXNzUnVsZShydWxlKSB7XG4gICAgaWYgKHJ1bGUuaXNQcm9jZXNzZWQpIHJldHVybjtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzUnVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NSdWxlW2ldKHJ1bGUsIHNoZWV0KTtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5zdHlsZSkgdGhpcy5vblByb2Nlc3NTdHlsZShydWxlLnN0eWxlLCBydWxlLCBzaGVldCk7XG4gICAgcnVsZS5pc1Byb2Nlc3NlZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1N0eWxlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU3R5bGUgPSBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzU3R5bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJ1bGUuc3R5bGUgPSB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1N0eWxlW2ldKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1NoZWV0YCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU2hlZXQgPSBmdW5jdGlvbiBvblByb2Nlc3NTaGVldChzaGVldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldFtpXShzaGVldCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblVwZGF0ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVnaXN0cnkub25VcGRhdGVbaV0oZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25DaGFuZ2VWYWx1ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25DaGFuZ2VWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvY2Vzc2VkVmFsdWUgPSB0aGlzLnJlZ2lzdHJ5Lm9uQ2hhbmdlVmFsdWVbaV0ocHJvY2Vzc2VkVmFsdWUsIHByb3AsIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWRWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVzZSA9IGZ1bmN0aW9uIHVzZShuZXdQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBxdWV1ZTogJ2V4dGVybmFsJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMucGx1Z2luc1tvcHRpb25zLnF1ZXVlXTsgLy8gQXZvaWRzIGFwcGx5aW5nIHNhbWUgcGx1Z2luIHR3aWNlLCBhdCBsZWFzdCBiYXNlZCBvbiByZWYuXG5cbiAgICBpZiAocGx1Z2lucy5pbmRleE9mKG5ld1BsdWdpbikgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGx1Z2lucy5wdXNoKG5ld1BsdWdpbik7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdLmNvbmNhdCh0aGlzLnBsdWdpbnMuZXh0ZXJuYWwsIHRoaXMucGx1Z2lucy5pbnRlcm5hbCkucmVkdWNlKGZ1bmN0aW9uIChyZWdpc3RyeSwgcGx1Z2luKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbikge1xuICAgICAgICBpZiAobmFtZSBpbiByZWdpc3RyeSkge1xuICAgICAgICAgIHJlZ2lzdHJ5W25hbWVdLnB1c2gocGx1Z2luW25hbWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFVua25vd24gaG9vayBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVnaXN0cnk7XG4gICAgfSwge1xuICAgICAgb25DcmVhdGVSdWxlOiBbXSxcbiAgICAgIG9uUHJvY2Vzc1J1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU3R5bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU2hlZXQ6IFtdLFxuICAgICAgb25DaGFuZ2VWYWx1ZTogW10sXG4gICAgICBvblVwZGF0ZTogW11cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUGx1Z2luc1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFNoZWV0cyByZWdpc3RyeSB0byBhY2Nlc3MgYWxsIGluc3RhbmNlcyBpbiBvbmUgcGxhY2UuXG4gKi9cblxudmFyIFNoZWV0c1JlZ2lzdHJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2hlZXRzUmVnaXN0cnkoKSB7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNoZWV0c1JlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBTdHlsZSBTaGVldC5cbiAgICovXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoc2hlZXQpIHtcbiAgICB2YXIgcmVnaXN0cnkgPSB0aGlzLnJlZ2lzdHJ5O1xuICAgIHZhciBpbmRleCA9IHNoZWV0Lm9wdGlvbnMuaW5kZXg7XG4gICAgaWYgKHJlZ2lzdHJ5LmluZGV4T2Yoc2hlZXQpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgaWYgKHJlZ2lzdHJ5Lmxlbmd0aCA9PT0gMCB8fCBpbmRleCA+PSB0aGlzLmluZGV4KSB7XG4gICAgICByZWdpc3RyeS5wdXNoKHNoZWV0KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZpbmQgYSBwb3NpdGlvbi5cblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlZ2lzdHJ5W2ldLm9wdGlvbnMuaW5kZXggPiBpbmRleCkge1xuICAgICAgICByZWdpc3RyeS5zcGxpY2UoaSwgMCwgc2hlZXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcmVnaXN0cnkuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYSBTdHlsZSBTaGVldC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHNoZWV0KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5yZWdpc3RyeS5pbmRleE9mKHNoZWV0KTtcbiAgICB0aGlzLnJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgYWxsIGF0dGFjaGVkIHNoZWV0cyB0byBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBhdHRhY2hlZCA9IF9yZWYuYXR0YWNoZWQsXG4gICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhdHRhY2hlZFwiXSk7XG5cbiAgICB2YXIgX2dldFdoaXRlc3BhY2VTeW1ib2xzID0gZ2V0V2hpdGVzcGFjZVN5bWJvbHMob3B0aW9ucyksXG4gICAgICAgIGxpbmVicmVhayA9IF9nZXRXaGl0ZXNwYWNlU3ltYm9scy5saW5lYnJlYWs7XG5cbiAgICB2YXIgY3NzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMucmVnaXN0cnlbaV07XG5cbiAgICAgIGlmIChhdHRhY2hlZCAhPSBudWxsICYmIHNoZWV0LmF0dGFjaGVkICE9PSBhdHRhY2hlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNzcykgY3NzICs9IGxpbmVicmVhaztcbiAgICAgIGNzcyArPSBzaGVldC50b1N0cmluZyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNSZWdpc3RyeSwgW3tcbiAgICBrZXk6IFwiaW5kZXhcIixcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgaGlnaGVzdCBpbmRleCBudW1iZXIuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5yZWdpc3RyeVt0aGlzLnJlZ2lzdHJ5Lmxlbmd0aCAtIDFdLm9wdGlvbnMuaW5kZXg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNoZWV0c1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBnbG9iYWwgc2hlZXRzIHJlZ2lzdHJ5LiBPbmx5IERvbVJlbmRlcmVyIHdpbGwgYWRkIHNoZWV0cyB0byBpdC5cbiAqIE9uIHRoZSBzZXJ2ZXIgb25lIHNob3VsZCB1c2UgYW4gb3duIFNoZWV0c1JlZ2lzdHJ5IGluc3RhbmNlIGFuZCBhZGQgdGhlXG4gKiBzaGVldHMgdG8gaXQsIGJlY2F1c2UgeW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyByZWdpc3RyeSBmb3JcbiAqIGVhY2ggcmVxdWVzdCBpbiBvcmRlciB0byBub3QgbGVhayBzaGVldHMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5cbnZhciBzaGVldHMgPSBuZXcgU2hlZXRzUmVnaXN0cnkoKTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBOb3cgdGhhdCBgZ2xvYmFsVGhpc2AgaXMgYXZhaWxhYmxlIG9uIG1vc3QgcGxhdGZvcm1zXG4gKiAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZ2xvYmFsVGhpcyNicm93c2VyX2NvbXBhdGliaWxpdHkpXG4gKiB3ZSBjaGVjayBmb3IgYGdsb2JhbFRoaXNgIGZpcnN0LiBgZ2xvYmFsVGhpc2AgaXMgbmVjZXNzYXJ5IGZvciBqc3NcbiAqIHRvIHJ1biBpbiBBZ29yaWMncyBzZWN1cmUgdmVyc2lvbiBvZiBKYXZhU2NyaXB0IChTRVMpLiBVbmRlciBTRVMsXG4gKiBgZ2xvYmFsVGhpc2AgZXhpc3RzLCBidXQgYHdpbmRvd2AsIGBzZWxmYCwgYW5kIGBGdW5jdGlvbigncmV0dXJuXG4gKiB0aGlzJykoKWAgYXJlIGFsbCB1bmRlZmluZWQgZm9yIHNlY3VyaXR5IHJlYXNvbnMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbiAqL1xudmFyIGdsb2JhbFRoaXMkMSA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIG5zID0gJzJmMWFjYzZjM2E2MDZiMDgyZTVlZWY1ZTU0NDE0ZmZiJztcbmlmIChnbG9iYWxUaGlzJDFbbnNdID09IG51bGwpIGdsb2JhbFRoaXMkMVtuc10gPSAwOyAvLyBCdW5kbGUgbWF5IGNvbnRhaW4gbXVsdGlwbGUgSlNTIHZlcnNpb25zIGF0IHRoZSBzYW1lIHRpbWUuIEluIG9yZGVyIHRvIGlkZW50aWZ5XG4vLyB0aGUgY3VycmVudCB2ZXJzaW9uIHdpdGgganVzdCBvbmUgc2hvcnQgbnVtYmVyIGFuZCB1c2UgaXQgZm9yIGNsYXNzZXMgZ2VuZXJhdGlvblxuLy8gd2UgdXNlIGEgY291bnRlci4gQWxzbyBpdCBpcyBtb3JlIGFjY3VyYXRlLCBiZWNhdXNlIHVzZXIgY2FuIG1hbnVhbGx5IHJlZXZhbHVhdGVcbi8vIHRoZSBtb2R1bGUuXG5cbnZhciBtb2R1bGVJZCA9IGdsb2JhbFRoaXMkMVtuc10rKztcblxudmFyIG1heFJ1bGVzID0gMWUxMDtcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4gKiBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0ZWQuXG4gKiBXZSBuZWVkIHRvIHJlc2V0IHRoZSBydWxlIGNvdW50ZXIgZm9yIFNTUiBmb3IgZWFjaCByZXF1ZXN0LlxuICovXG5cbnZhciBjcmVhdGVHZW5lcmF0ZUlkID0gZnVuY3Rpb24gY3JlYXRlR2VuZXJhdGVJZChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcnVsZUNvdW50ZXIgPSAwO1xuXG4gIHZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZChydWxlLCBzaGVldCkge1xuICAgIHJ1bGVDb3VudGVyICs9IDE7XG5cbiAgICBpZiAocnVsZUNvdW50ZXIgPiBtYXhSdWxlcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLiBSdWxlIGNvdW50ZXIgaXMgYXQgXCIgKyBydWxlQ291bnRlciArIFwiLlwiKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICB2YXIganNzSWQgPSAnJztcbiAgICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgICBpZiAoc2hlZXQpIHtcbiAgICAgIGlmIChzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgICBwcmVmaXggPSBzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoZWV0Lm9wdGlvbnMuanNzLmlkICE9IG51bGwpIHtcbiAgICAgICAganNzSWQgPSBTdHJpbmcoc2hlZXQub3B0aW9ucy5qc3MuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1pbmlmeSkge1xuICAgICAgLy8gVXNpbmcgXCJjXCIgYmVjYXVzZSBhIG51bWJlciBjYW4ndCBiZSB0aGUgZmlyc3QgY2hhciBpbiBhIGNsYXNzIG5hbWUuXG4gICAgICByZXR1cm4gXCJcIiArIChwcmVmaXggfHwgJ2MnKSArIG1vZHVsZUlkICsganNzSWQgKyBydWxlQ291bnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ICsgcnVsZS5rZXkgKyBcIi1cIiArIG1vZHVsZUlkICsgKGpzc0lkID8gXCItXCIgKyBqc3NJZCA6ICcnKSArIFwiLVwiICsgcnVsZUNvdW50ZXI7XG4gIH07XG5cbiAgcmV0dXJuIGdlbmVyYXRlSWQ7XG59O1xuXG4vKipcbiAqIENhY2hlIHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCB0aW1lIGEgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICovXG5cbnZhciBtZW1vaXplID0gZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgdmFsdWU7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF2YWx1ZSkgdmFsdWUgPSBmbigpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG4vKipcbiAqIEdldCBhIHN0eWxlIHByb3BlcnR5IHZhbHVlLlxuICovXG5cblxudmFyIGdldFByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICAvLyBTdXBwb3J0IENTU1RPTS5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgcmV0dXJuIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuZ2V0KHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElFIG1heSB0aHJvdyBpZiBwcm9wZXJ0eSBpcyB1bmtub3duLlxuICAgIHJldHVybiAnJztcbiAgfVxufTtcbi8qKlxuICogU2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gKi9cblxuXG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eShjc3NSdWxlLCBwcm9wLCB2YWx1ZSkge1xuICB0cnkge1xuICAgIHZhciBjc3NWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjc3NWYWx1ZSA9IHRvQ3NzVmFsdWUodmFsdWUpO1xuICAgIH0gLy8gU3VwcG9ydCBDU1NUT00uXG5cblxuICAgIGlmIChjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwKSB7XG4gICAgICBjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwLnNldChwcm9wLCBjc3NWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbmRleE9mSW1wb3J0YW50RmxhZyA9IGNzc1ZhbHVlID8gY3NzVmFsdWUuaW5kZXhPZignIWltcG9ydGFudCcpIDogLTE7XG4gICAgICB2YXIgY3NzVmFsdWVXaXRob3V0SW1wb3J0YW50RmxhZyA9IGluZGV4T2ZJbXBvcnRhbnRGbGFnID4gLTEgPyBjc3NWYWx1ZS5zdWJzdHIoMCwgaW5kZXhPZkltcG9ydGFudEZsYWcgLSAxKSA6IGNzc1ZhbHVlO1xuICAgICAgY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBjc3NWYWx1ZVdpdGhvdXRJbXBvcnRhbnRGbGFnLCBpbmRleE9mSW1wb3J0YW50RmxhZyA+IC0xID8gJ2ltcG9ydGFudCcgOiAnJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJRSBtYXkgdGhyb3cgaWYgcHJvcGVydHkgaXMgdW5rbm93bi5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcbiAqIFJlbW92ZSBhIHN0eWxlIHByb3BlcnR5LlxuICovXG5cblxudmFyIHJlbW92ZVByb3BlcnR5ID0gZnVuY3Rpb24gcmVtb3ZlUHJvcGVydHkoY3NzUnVsZSwgcHJvcCkge1xuICB0cnkge1xuICAgIC8vIFN1cHBvcnQgQ1NTVE9NLlxuICAgIGlmIChjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwKSB7XG4gICAgICBjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwLmRlbGV0ZShwcm9wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gRE9NRXhjZXB0aW9uIFxcXCJcIiArIGVyci5tZXNzYWdlICsgXCJcXFwiIHdhcyB0aHJvd24uIFRyaWVkIHRvIHJlbW92ZSBwcm9wZXJ0eSBcXFwiXCIgKyBwcm9wICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgfVxufTtcbi8qKlxuICogU2V0IHRoZSBzZWxlY3Rvci5cbiAqL1xuXG5cbnZhciBzZXRTZWxlY3RvciA9IGZ1bmN0aW9uIHNldFNlbGVjdG9yKGNzc1J1bGUsIHNlbGVjdG9yVGV4dCkge1xuICBjc3NSdWxlLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dDsgLy8gUmV0dXJuIGZhbHNlIGlmIHNldHRlciB3YXMgbm90IHN1Y2Nlc3NmdWwuXG4gIC8vIEN1cnJlbnRseSB3b3JrcyBpbiBjaHJvbWUgb25seS5cblxuICByZXR1cm4gY3NzUnVsZS5zZWxlY3RvclRleHQgPT09IHNlbGVjdG9yVGV4dDtcbn07XG4vKipcbiAqIEdldHMgdGhlIGBoZWFkYCBlbGVtZW50IHVwb24gdGhlIGZpcnN0IGNhbGwgYW5kIGNhY2hlcyBpdC5cbiAqIFdlIGFzc3VtZSBpdCBjYW4ndCBiZSBudWxsLlxuICovXG5cblxudmFyIGdldEhlYWQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbn0pO1xuLyoqXG4gKiBGaW5kIGF0dGFjaGVkIHNoZWV0IHdpdGggYW4gaW5kZXggaGlnaGVyIHRoYW4gdGhlIHBhc3NlZCBvbmUuXG4gKi9cblxuZnVuY3Rpb24gZmluZEhpZ2hlclNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2hlZXQgPSByZWdpc3RyeVtpXTtcblxuICAgIGlmIChzaGVldC5hdHRhY2hlZCAmJiBzaGVldC5vcHRpb25zLmluZGV4ID4gb3B0aW9ucy5pbmRleCAmJiBzaGVldC5vcHRpb25zLmluc2VydGlvblBvaW50ID09PSBvcHRpb25zLmluc2VydGlvblBvaW50KSB7XG4gICAgICByZXR1cm4gc2hlZXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEZpbmQgYXR0YWNoZWQgc2hlZXQgd2l0aCB0aGUgaGlnaGVzdCBpbmRleC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXN0U2hlZXQocmVnaXN0cnksIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IHJlZ2lzdHJ5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHNoZWV0ID0gcmVnaXN0cnlbaV07XG5cbiAgICBpZiAoc2hlZXQuYXR0YWNoZWQgJiYgc2hlZXQub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9PT0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgcmV0dXJuIHNoZWV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBGaW5kIGEgY29tbWVudCB3aXRoIFwianNzXCIgaW5zaWRlLlxuICovXG5cblxuZnVuY3Rpb24gZmluZENvbW1lbnROb2RlKHRleHQpIHtcbiAgdmFyIGhlYWQgPSBnZXRIZWFkKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGhlYWQuY2hpbGROb2Rlc1tpXTtcblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4ICYmIG5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEZpbmQgYSBub2RlIGJlZm9yZSB3aGljaCB3ZSBjYW4gaW5zZXJ0IHRoZSBzaGVldC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRQcmV2Tm9kZShvcHRpb25zKSB7XG4gIHZhciByZWdpc3RyeSA9IHNoZWV0cy5yZWdpc3RyeTtcblxuICBpZiAocmVnaXN0cnkubGVuZ3RoID4gMCkge1xuICAgIC8vIFRyeSB0byBpbnNlcnQgYmVmb3JlIHRoZSBuZXh0IGhpZ2hlciBzaGVldC5cbiAgICB2YXIgc2hlZXQgPSBmaW5kSGlnaGVyU2hlZXQocmVnaXN0cnksIG9wdGlvbnMpO1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LnJlbmRlcmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJlbnQ6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgbm9kZTogc2hlZXQucmVuZGVyZXIuZWxlbWVudFxuICAgICAgfTtcbiAgICB9IC8vIE90aGVyd2lzZSBpbnNlcnQgYWZ0ZXIgdGhlIGxhc3QgYXR0YWNoZWQuXG5cblxuICAgIHNoZWV0ID0gZmluZEhpZ2hlc3RTaGVldChyZWdpc3RyeSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoc2hlZXQgJiYgc2hlZXQucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogc2hlZXQucmVuZGVyZXIuZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBzaGVldC5yZW5kZXJlci5lbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH1cbiAgfSAvLyBUcnkgdG8gZmluZCBhIGNvbW1lbnQgcGxhY2Vob2xkZXIgaWYgcmVnaXN0cnkgaXMgZW1wdHkuXG5cblxuICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuXG4gIGlmIChpbnNlcnRpb25Qb2ludCAmJiB0eXBlb2YgaW5zZXJ0aW9uUG9pbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGNvbW1lbnQgPSBmaW5kQ29tbWVudE5vZGUoaW5zZXJ0aW9uUG9pbnQpO1xuXG4gICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogY29tbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBjb21tZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdXNlciBzcGVjaWZpZXMgYW4gaW5zZXJ0aW9uIHBvaW50IGFuZCBpdCBjYW4ndCBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQgLVxuICAgIC8vIGJhZCBzcGVjaWZpY2l0eSBpc3N1ZXMgbWF5IGFwcGVhci5cblxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBJbnNlcnRpb24gcG9pbnQgXFxcIlwiICsgaW5zZXJ0aW9uUG9pbnQgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogSW5zZXJ0IHN0eWxlIGVsZW1lbnQgaW50byB0aGUgRE9NLlxuICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGUoc3R5bGUsIG9wdGlvbnMpIHtcbiAgdmFyIGluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgdmFyIG5leHROb2RlID0gZmluZFByZXZOb2RlKG9wdGlvbnMpO1xuXG4gIGlmIChuZXh0Tm9kZSAhPT0gZmFsc2UgJiYgbmV4dE5vZGUucGFyZW50KSB7XG4gICAgbmV4dE5vZGUucGFyZW50Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dE5vZGUubm9kZSk7XG4gICAgcmV0dXJuO1xuICB9IC8vIFdvcmtzIHdpdGggaWZyYW1lcyBhbmQgYW55IG5vZGUgdHlwZXMuXG5cblxuICBpZiAoaW5zZXJ0aW9uUG9pbnQgJiYgdHlwZW9mIGluc2VydGlvblBvaW50Lm5vZGVUeXBlID09PSAnbnVtYmVyJykge1xuICAgIHZhciBpbnNlcnRpb25Qb2ludEVsZW1lbnQgPSBpbnNlcnRpb25Qb2ludDtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGluc2VydGlvblBvaW50RWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgaW5zZXJ0aW9uUG9pbnRFbGVtZW50Lm5leHRTaWJsaW5nKTtlbHNlIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdbSlNTXSBJbnNlcnRpb24gcG9pbnQgaXMgbm90IGluIHRoZSBET00uJykgOiB2b2lkIDA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2V0SGVhZCgpLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbi8qKlxuICogUmVhZCBqc3Mgbm9uY2Ugc2V0dGluZyBmcm9tIHRoZSBwYWdlIGlmIHRoZSB1c2VyIGhhcyBzZXQgaXQuXG4gKi9cblxuXG52YXIgZ2V0Tm9uY2UgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwiY3NwLW5vbmNlXCJdJyk7XG4gIHJldHVybiBub2RlID8gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA6IG51bGw7XG59KTtcblxudmFyIF9pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShjb250YWluZXIsIHJ1bGUsIGluZGV4KSB7XG4gIHRyeSB7XG4gICAgaWYgKCdpbnNlcnRSdWxlJyBpbiBjb250YWluZXIpIHtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICB9IC8vIEtleWZyYW1lcyBydWxlLlxuICAgIGVsc2UgaWYgKCdhcHBlbmRSdWxlJyBpbiBjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZFJ1bGUocnVsZSk7XG4gICAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gXCIgKyBlcnIubWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lci5jc3NSdWxlc1tpbmRleF07XG59O1xuXG52YXIgZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXggPSBmdW5jdGlvbiBnZXRWYWxpZFJ1bGVJbnNlcnRpb25JbmRleChjb250YWluZXIsIGluZGV4KSB7XG4gIHZhciBtYXhJbmRleCA9IGNvbnRhaW5lci5jc3NSdWxlcy5sZW5ndGg7IC8vIEluIGNhc2UgcHJldmlvdXMgaW5zZXJ0aW9uIGZhaWxzLCBwYXNzZWQgaW5kZXggbWlnaHQgYmUgd3JvbmdcblxuICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA+IG1heEluZGV4KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmV0dXJuIG1heEluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufTtcblxudmFyIGNyZWF0ZVN0eWxlID0gZnVuY3Rpb24gY3JlYXRlU3R5bGUoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7IC8vIFdpdGhvdXQgaXQsIElFIHdpbGwgaGF2ZSBhIGJyb2tlbiBzb3VyY2Ugb3JkZXIgc3BlY2lmaWNpdHkgaWYgd2VcbiAgLy8gaW5zZXJ0IHJ1bGVzIGFmdGVyIHdlIGluc2VydCB0aGUgc3R5bGUgdGFnLlxuICAvLyBJdCBzZWVtcyB0byBraWNrLW9mZiB0aGUgc291cmNlIG9yZGVyIHNwZWNpZmljaXR5IGFsZ29yaXRobS5cblxuICBlbC50ZXh0Q29udGVudCA9ICdcXG4nO1xuICByZXR1cm4gZWw7XG59O1xuXG52YXIgRG9tUmVuZGVyZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvLyBXaWxsIGJlIGVtcHR5IGlmIGxpbms6IHRydWUgb3B0aW9uIGlzIG5vdCBzZXQsIGJlY2F1c2VcbiAgLy8gaXQgaXMgb25seSBmb3IgdXNlIHRvZ2V0aGVyIHdpdGggaW5zZXJ0UnVsZSBBUEkuXG4gIGZ1bmN0aW9uIERvbVJlbmRlcmVyKHNoZWV0KSB7XG4gICAgdGhpcy5nZXRQcm9wZXJ0eVZhbHVlID0gZ2V0UHJvcGVydHlWYWx1ZTtcbiAgICB0aGlzLnNldFByb3BlcnR5ID0gc2V0UHJvcGVydHk7XG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eSA9IHJlbW92ZVByb3BlcnR5O1xuICAgIHRoaXMuc2V0U2VsZWN0b3IgPSBzZXRTZWxlY3RvcjtcbiAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmNzc1J1bGVzID0gW107XG4gICAgLy8gVGhlcmUgaXMgbm8gc2hlZXQgd2hlbiB0aGUgcmVuZGVyZXIgaXMgdXNlZCBmcm9tIGEgc3RhbmRhbG9uZSBTdHlsZVJ1bGUuXG4gICAgaWYgKHNoZWV0KSBzaGVldHMuYWRkKHNoZWV0KTtcbiAgICB0aGlzLnNoZWV0ID0gc2hlZXQ7XG5cbiAgICB2YXIgX3JlZiA9IHRoaXMuc2hlZXQgPyB0aGlzLnNoZWV0Lm9wdGlvbnMgOiB7fSxcbiAgICAgICAgbWVkaWEgPSBfcmVmLm1lZGlhLFxuICAgICAgICBtZXRhID0gX3JlZi5tZXRhLFxuICAgICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCB8fCBjcmVhdGVTdHlsZSgpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanNzJywgJycpO1xuICAgIGlmIChtZWRpYSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgaWYgKG1ldGEpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0YScsIG1ldGEpO1xuICAgIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gICAgaWYgKG5vbmNlKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IHN0eWxlIGVsZW1lbnQgaW50byByZW5kZXIgdHJlZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gRG9tUmVuZGVyZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgLy8gSW4gdGhlIGNhc2UgdGhlIGVsZW1lbnQgbm9kZSBpcyBleHRlcm5hbCBhbmQgaXQgaXMgYWxyZWFkeSBpbiB0aGUgRE9NLlxuICAgIGlmICh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSB8fCAhdGhpcy5zaGVldCkgcmV0dXJuO1xuICAgIGluc2VydFN0eWxlKHRoaXMuZWxlbWVudCwgdGhpcy5zaGVldC5vcHRpb25zKTsgLy8gV2hlbiBydWxlcyBhcmUgaW5zZXJ0ZWQgdXNpbmcgYGluc2VydFJ1bGVgIEFQSSwgYWZ0ZXIgYHNoZWV0LmRldGFjaCgpLmF0dGFjaCgpYFxuICAgIC8vIG1vc3QgYnJvd3NlcnMgY3JlYXRlIGEgbmV3IENTU1N0eWxlU2hlZXQsIGV4Y2VwdCBvZiBhbGwgSUVzLlxuXG4gICAgdmFyIGRlcGxveWVkID0gQm9vbGVhbih0aGlzLnNoZWV0ICYmIHRoaXMuc2hlZXQuZGVwbG95ZWQpO1xuXG4gICAgaWYgKHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyAmJiBkZXBsb3llZCkge1xuICAgICAgdGhpcy5oYXNJbnNlcnRlZFJ1bGVzID0gZmFsc2U7XG4gICAgICB0aGlzLmRlcGxveSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIHN0eWxlIGVsZW1lbnQgZnJvbSByZW5kZXIgdHJlZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgIGlmICghdGhpcy5zaGVldCkgcmV0dXJuO1xuICAgIHZhciBwYXJlbnROb2RlID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTsgLy8gSW4gdGhlIG1vc3QgYnJvd3NlcnMsIHJ1bGVzIGluc2VydGVkIHVzaW5nIGluc2VydFJ1bGUoKSBBUEkgd2lsbCBiZSBsb3N0IHdoZW4gc3R5bGUgZWxlbWVudCBpcyByZW1vdmVkLlxuICAgIC8vIFRob3VnaCBJRSB3aWxsIGtlZXAgdGhlbSBhbmQgd2UgbmVlZCBhIGNvbnNpc3RlbnQgYmVoYXZpb3IuXG5cbiAgICBpZiAodGhpcy5zaGVldC5vcHRpb25zLmxpbmspIHtcbiAgICAgIHRoaXMuY3NzUnVsZXMgPSBbXTtcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdcXG4nO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5qZWN0IENTUyBzdHJpbmcgaW50byBlbGVtZW50LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXBsb3kgPSBmdW5jdGlvbiBkZXBsb3koKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5zaGVldDtcbiAgICBpZiAoIXNoZWV0KSByZXR1cm47XG5cbiAgICBpZiAoc2hlZXQub3B0aW9ucy5saW5rKSB7XG4gICAgICB0aGlzLmluc2VydFJ1bGVzKHNoZWV0LnJ1bGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlxcblwiICsgc2hlZXQudG9TdHJpbmcoKSArIFwiXFxuXCI7XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBSdWxlTGlzdCBpbnRvIGFuIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGVzID0gZnVuY3Rpb24gaW5zZXJ0UnVsZXMocnVsZXMsIG5hdGl2ZVBhcmVudCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMuaW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuaW5zZXJ0UnVsZShydWxlcy5pbmRleFtpXSwgaSwgbmF0aXZlUGFyZW50KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBhIHJ1bGUgaW50byBlbGVtZW50LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCwgbmF0aXZlUGFyZW50KSB7XG4gICAgaWYgKG5hdGl2ZVBhcmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBuYXRpdmVQYXJlbnQgPSB0aGlzLmVsZW1lbnQuc2hlZXQ7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUucnVsZXMpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBydWxlO1xuICAgICAgdmFyIGxhdGVzdE5hdGl2ZVBhcmVudCA9IG5hdGl2ZVBhcmVudDtcblxuICAgICAgaWYgKHJ1bGUudHlwZSA9PT0gJ2NvbmRpdGlvbmFsJyB8fCBydWxlLnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICAgIHZhciBfaW5zZXJ0aW9uSW5kZXggPSBnZXRWYWxpZFJ1bGVJbnNlcnRpb25JbmRleChuYXRpdmVQYXJlbnQsIGluZGV4KTsgLy8gV2UgbmVlZCB0byByZW5kZXIgdGhlIGNvbnRhaW5lciB3aXRob3V0IGNoaWxkcmVuIGZpcnN0LlxuXG5cbiAgICAgICAgbGF0ZXN0TmF0aXZlUGFyZW50ID0gX2luc2VydFJ1bGUobmF0aXZlUGFyZW50LCBwYXJlbnQudG9TdHJpbmcoe1xuICAgICAgICAgIGNoaWxkcmVuOiBmYWxzZVxuICAgICAgICB9KSwgX2luc2VydGlvbkluZGV4KTtcblxuICAgICAgICBpZiAobGF0ZXN0TmF0aXZlUGFyZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVmQ3NzUnVsZShydWxlLCBfaW5zZXJ0aW9uSW5kZXgsIGxhdGVzdE5hdGl2ZVBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zZXJ0UnVsZXMocGFyZW50LnJ1bGVzLCBsYXRlc3ROYXRpdmVQYXJlbnQpO1xuICAgICAgcmV0dXJuIGxhdGVzdE5hdGl2ZVBhcmVudDtcbiAgICB9XG5cbiAgICB2YXIgcnVsZVN0ciA9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICBpZiAoIXJ1bGVTdHIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgaW5zZXJ0aW9uSW5kZXggPSBnZXRWYWxpZFJ1bGVJbnNlcnRpb25JbmRleChuYXRpdmVQYXJlbnQsIGluZGV4KTtcblxuICAgIHZhciBuYXRpdmVSdWxlID0gX2luc2VydFJ1bGUobmF0aXZlUGFyZW50LCBydWxlU3RyLCBpbnNlcnRpb25JbmRleCk7XG5cbiAgICBpZiAobmF0aXZlUnVsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSB0cnVlO1xuICAgIHRoaXMucmVmQ3NzUnVsZShydWxlLCBpbnNlcnRpb25JbmRleCwgbmF0aXZlUnVsZSk7XG4gICAgcmV0dXJuIG5hdGl2ZVJ1bGU7XG4gIH07XG5cbiAgX3Byb3RvLnJlZkNzc1J1bGUgPSBmdW5jdGlvbiByZWZDc3NSdWxlKHJ1bGUsIGluZGV4LCBjc3NSdWxlKSB7XG4gICAgcnVsZS5yZW5kZXJhYmxlID0gY3NzUnVsZTsgLy8gV2Ugb25seSB3YW50IHRvIHJlZmVyZW5jZSB0aGUgdG9wIGxldmVsIHJ1bGVzLCBkZWxldGVSdWxlIEFQSSBkb2Vzbid0IHN1cHBvcnQgcmVtb3ZpbmcgbmVzdGVkIHJ1bGVzXG4gICAgLy8gbGlrZSBydWxlcyBpbnNpZGUgbWVkaWEgcXVlcmllcyBvciBrZXlmcmFtZXNcblxuICAgIGlmIChydWxlLm9wdGlvbnMucGFyZW50IGluc3RhbmNlb2YgU3R5bGVTaGVldCkge1xuICAgICAgdGhpcy5jc3NSdWxlcy5zcGxpY2UoaW5kZXgsIDAsIGNzc1J1bGUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGVsZXRlIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoY3NzUnVsZSkge1xuICAgIHZhciBzaGVldCA9IHRoaXMuZWxlbWVudC5zaGVldDtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgQ1NTIFJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKGNzc1J1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5jc3NSdWxlcy5pbmRleE9mKGNzc1J1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIG5ldyBDU1MgcnVsZSBhbmQgcmVwbGFjZSB0aGUgZXhpc3Rpbmcgb25lLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXBsYWNlUnVsZSA9IGZ1bmN0aW9uIHJlcGxhY2VSdWxlKGNzc1J1bGUsIHJ1bGUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbGwgcnVsZXMgZWxlbWVudHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5zaGVldC5jc3NSdWxlcztcbiAgfTtcblxuICByZXR1cm4gRG9tUmVuZGVyZXI7XG59KCk7XG5cbnZhciBpbnN0YW5jZUNvdW50ZXIgPSAwO1xuXG52YXIgSnNzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSnNzKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gaW5zdGFuY2VDb3VudGVyKys7XG4gICAgdGhpcy52ZXJzaW9uID0gXCIxMC4xMC4wXCI7XG4gICAgdGhpcy5wbHVnaW5zID0gbmV3IFBsdWdpbnNSZWdpc3RyeSgpO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIG1pbmlmeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjcmVhdGVHZW5lcmF0ZUlkOiBjcmVhdGVHZW5lcmF0ZUlkLFxuICAgICAgUmVuZGVyZXI6IGlzSW5Ccm93c2VyID8gRG9tUmVuZGVyZXIgOiBudWxsLFxuICAgICAgcGx1Z2luczogW11cbiAgICB9O1xuICAgIHRoaXMuZ2VuZXJhdGVJZCA9IGNyZWF0ZUdlbmVyYXRlSWQoe1xuICAgICAgbWluaWZ5OiBmYWxzZVxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBsdWdpbnMudXNlKHBsdWdpbnNbaV0sIHtcbiAgICAgICAgcXVldWU6ICdpbnRlcm5hbCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dXAob3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIFByZXBhcmVzIHZhcmlvdXMgb3B0aW9ucywgYXBwbGllcyBwbHVnaW5zLlxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgdHdpY2Ugb24gdGhlIHNhbWUgaW5zdGFuY2UsIGJlY2F1c2UgdGhlcmUgaXMgbm8gcGx1Z2luc1xuICAgKiBkZWR1cGxpY2F0aW9uIGxvZ2ljLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBKc3MucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXR1cCA9IGZ1bmN0aW9uIHNldHVwKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQgPSBvcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pZCA9IF9leHRlbmRzKHt9LCB0aGlzLm9wdGlvbnMuaWQsIG9wdGlvbnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQgfHwgb3B0aW9ucy5pZCkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUlkID0gdGhpcy5vcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQodGhpcy5vcHRpb25zLmlkKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5pbnNlcnRpb25Qb2ludCAhPSBudWxsKSB0aGlzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuXG4gICAgaWYgKCdSZW5kZXJlcicgaW4gb3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLlJlbmRlcmVyID0gb3B0aW9ucy5SZW5kZXJlcjtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG5cblxuICAgIGlmIChvcHRpb25zLnBsdWdpbnMpIHRoaXMudXNlLmFwcGx5KHRoaXMsIG9wdGlvbnMucGx1Z2lucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFN0eWxlIFNoZWV0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jcmVhdGVTdHlsZVNoZWV0ID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldChzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgaW5kZXggPSBfb3B0aW9ucy5pbmRleDtcblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHNoZWV0cy5pbmRleCA9PT0gMCA/IDAgOiBzaGVldHMuaW5kZXggKyAxO1xuICAgIH1cblxuICAgIHZhciBzaGVldCA9IG5ldyBTdHlsZVNoZWV0KHN0eWxlcywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGpzczogdGhpcyxcbiAgICAgIGdlbmVyYXRlSWQ6IG9wdGlvbnMuZ2VuZXJhdGVJZCB8fCB0aGlzLmdlbmVyYXRlSWQsXG4gICAgICBpbnNlcnRpb25Qb2ludDogdGhpcy5vcHRpb25zLmluc2VydGlvblBvaW50LFxuICAgICAgUmVuZGVyZXI6IHRoaXMub3B0aW9ucy5SZW5kZXJlcixcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pKTtcbiAgICB0aGlzLnBsdWdpbnMub25Qcm9jZXNzU2hlZXQoc2hlZXQpO1xuICAgIHJldHVybiBzaGVldDtcbiAgfVxuICAvKipcbiAgICogRGV0YWNoIHRoZSBTdHlsZSBTaGVldCBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIHJlZ2lzdHJ5LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmVTdHlsZVNoZWV0ID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVTaGVldChzaGVldCkge1xuICAgIHNoZWV0LmRldGFjaCgpO1xuICAgIHNoZWV0cy5yZW1vdmUoc2hlZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBydWxlIHdpdGhvdXQgYSBTdHlsZSBTaGVldC5cbiAgICogW0RlcHJlY2F0ZWRdIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jcmVhdGVSdWxlID0gZnVuY3Rpb24gY3JlYXRlUnVsZSQxKG5hbWUsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHN0eWxlID09PSB2b2lkIDApIHtcbiAgICAgIHN0eWxlID0ge307XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIC8vIEVuYWJsZSBydWxlIHdpdGhvdXQgbmFtZSBmb3IgaW5saW5lIHN0eWxlcy5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVSdWxlKHVuZGVmaW5lZCwgbmFtZSwgc3R5bGUpO1xuICAgIH1cblxuICAgIHZhciBydWxlT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAganNzOiB0aGlzLFxuICAgICAgUmVuZGVyZXI6IHRoaXMub3B0aW9ucy5SZW5kZXJlclxuICAgIH0pO1xuXG4gICAgaWYgKCFydWxlT3B0aW9ucy5nZW5lcmF0ZUlkKSBydWxlT3B0aW9ucy5nZW5lcmF0ZUlkID0gdGhpcy5nZW5lcmF0ZUlkO1xuICAgIGlmICghcnVsZU9wdGlvbnMuY2xhc3NlcykgcnVsZU9wdGlvbnMuY2xhc3NlcyA9IHt9O1xuICAgIGlmICghcnVsZU9wdGlvbnMua2V5ZnJhbWVzKSBydWxlT3B0aW9ucy5rZXlmcmFtZXMgPSB7fTtcblxuICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShuYW1lLCBzdHlsZSwgcnVsZU9wdGlvbnMpO1xuXG4gICAgaWYgKHJ1bGUpIHRoaXMucGx1Z2lucy5vblByb2Nlc3NSdWxlKHJ1bGUpO1xuICAgIHJldHVybiBydWxlO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciBwbHVnaW4uIFBhc3NlZCBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2l0aCBhIHJ1bGUgaW5zdGFuY2UuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVzZSA9IGZ1bmN0aW9uIHVzZSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBwbHVnaW5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBfdGhpcy5wbHVnaW5zLnVzZShwbHVnaW4pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBKc3M7XG59KCk7XG5cbnZhciBjcmVhdGVKc3MgPSBmdW5jdGlvbiBjcmVhdGVKc3Mob3B0aW9ucykge1xuICByZXR1cm4gbmV3IEpzcyhvcHRpb25zKTtcbn07XG5cbi8qKlxuICogU2hlZXRzTWFuYWdlciBpcyBsaWtlIGEgV2Vha01hcCB3aGljaCBpcyBkZXNpZ25lZCB0byBjb3VudCBTdHlsZVNoZWV0XG4gKiBpbnN0YW5jZXMgYW5kIGF0dGFjaC9kZXRhY2ggYXV0b21hdGljYWxseS5cbiAqIFVzZWQgaW4gcmVhY3QtanNzLlxuICovXG5cbnZhciBTaGVldHNNYW5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2hlZXRzTWFuYWdlcigpIHtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zaGVldHMgPSBuZXcgV2Vha01hcCgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNoZWV0c01hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnNoZWV0O1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCBzaGVldCkge1xuICAgIGlmICh0aGlzLnNoZWV0cy5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubGVuZ3RoKys7XG4gICAgdGhpcy5zaGVldHMuc2V0KGtleSwge1xuICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgcmVmczogMFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2UgPSBmdW5jdGlvbiBtYW5hZ2Uoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG5cbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGlmIChlbnRyeS5yZWZzID09PSAwKSB7XG4gICAgICAgIGVudHJ5LnNoZWV0LmF0dGFjaCgpO1xuICAgICAgfVxuXG4gICAgICBlbnRyeS5yZWZzKys7XG4gICAgICByZXR1cm4gZW50cnkuc2hlZXQ7XG4gICAgfVxuXG4gICAgd2FybmluZyhmYWxzZSwgXCJbSlNTXSBTaGVldHNNYW5hZ2VyOiBjYW4ndCBmaW5kIHNoZWV0IHRvIG1hbmFnZVwiKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by51bm1hbmFnZSA9IGZ1bmN0aW9uIHVubWFuYWdlKGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuXG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBpZiAoZW50cnkucmVmcyA+IDApIHtcbiAgICAgICAgZW50cnkucmVmcy0tO1xuICAgICAgICBpZiAoZW50cnkucmVmcyA9PT0gMCkgZW50cnkuc2hlZXQuZGV0YWNoKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiU2hlZXRzTWFuYWdlcjogY2FuJ3QgZmluZCBzaGVldCB0byB1bm1hbmFnZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFNoZWV0c01hbmFnZXIsIFt7XG4gICAga2V5OiBcInNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2hlZXRzTWFuYWdlcjtcbn0oKTtcblxuLyoqXG4qIEV4cG9ydCBhIGNvbnN0YW50IGluZGljYXRpbmcgaWYgdGhpcyBicm93c2VyIGhhcyBDU1NUT00gc3VwcG9ydC5cbiogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxOC8wMy9jc3NvbVxuKi9cbnZhciBoYXNDU1NUT01TdXBwb3J0ID0gdHlwZW9mIENTUyA9PT0gJ29iamVjdCcgJiYgQ1NTICE9IG51bGwgJiYgJ251bWJlcicgaW4gQ1NTO1xuXG4vKipcbiAqIEV4dHJhY3RzIGEgc3R5bGVzIG9iamVjdCB3aXRoIG9ubHkgcHJvcHMgdGhhdCBjb250YWluIGZ1bmN0aW9uIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0RHluYW1pY1N0eWxlcyhzdHlsZXMpIHtcbiAgdmFyIHRvID0gbnVsbDtcblxuICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKCF0bykgdG8gPSB7fTtcbiAgICAgIHRvW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFyIGV4dHJhY3RlZCA9IGdldER5bmFtaWNTdHlsZXModmFsdWUpO1xuXG4gICAgICBpZiAoZXh0cmFjdGVkKSB7XG4gICAgICAgIGlmICghdG8pIHRvID0ge307XG4gICAgICAgIHRvW2tleV0gPSBleHRyYWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIEEgYmV0dGVyIGFic3RyYWN0aW9uIG92ZXIgQ1NTLlxuICpcbiAqIEBjb3B5cmlnaHQgT2xlZyBJc29uZW4gKFNsb2JvZHNrb2kpIC8gSXNvbmVuIDIwMTQtcHJlc2VudFxuICogQHdlYnNpdGUgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xudmFyIGluZGV4ID0gY3JlYXRlSnNzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuZXhwb3J0IHsgUnVsZUxpc3QsIFNoZWV0c01hbmFnZXIsIFNoZWV0c1JlZ2lzdHJ5LCBjcmVhdGVKc3MgYXMgY3JlYXRlLCBjcmVhdGVHZW5lcmF0ZUlkLCBjcmVhdGVSdWxlLCBnZXREeW5hbWljU3R5bGVzLCBoYXNDU1NUT01TdXBwb3J0LCBzaGVldHMsIHRvQ3NzVmFsdWUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhUTUxFbGVtZW50VHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBzYWZlUHJvcE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocHJvcFZhbHVlICYmIHByb3BWYWx1ZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIFwiLmNvbmNhdChsb2NhdGlvbiwgXCIgYFwiKS5jb25jYXQoc2FmZVByb3BOYW1lLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLiBcIikgKyBcIkV4cGVjdGVkIGFuIEhUTUxFbGVtZW50LlwiKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYWluUHJvcFR5cGVzKHByb3BUeXBlMSwgcHJvcFR5cGUyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHByb3BUeXBlMS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykgfHwgcHJvcFR5cGUyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW0gJiYgX3R5cGVvZihpdGVtKSA9PT0gJ29iamVjdCcgJiYgaXRlbS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgY2xvbmU6IHRydWVcbiAgfTtcbiAgdmFyIG91dHB1dCA9IG9wdGlvbnMuY2xvbmUgPyBfZXh0ZW5kcyh7fSwgdGFyZ2V0KSA6IHRhcmdldDtcblxuICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIGlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBBdm9pZCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNoYWluUHJvcFR5cGVzIGZyb20gJy4vY2hhaW5Qcm9wVHlwZXMnO1xuXG5mdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGVsZW1lbnRUeXBlKSB7XG4gIC8vIGVsZW1lbnRUeXBlLnByb3RvdHlwZT8uaXNSZWFjdENvbXBvbmVudFxuICB2YXIgX2VsZW1lbnRUeXBlJHByb3RvdHlwID0gZWxlbWVudFR5cGUucHJvdG90eXBlLFxuICAgICAgcHJvdG90eXBlID0gX2VsZW1lbnRUeXBlJHByb3RvdHlwID09PSB2b2lkIDAgPyB7fSA6IF9lbGVtZW50VHlwZSRwcm90b3R5cDtcbiAgcmV0dXJuIEJvb2xlYW4ocHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBhY2NlcHRpbmdSZWYocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBlbGVtZW50ID0gcHJvcHNbcHJvcE5hbWVdO1xuICB2YXIgc2FmZVByb3BOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB3YXJuaW5nSGludDtcbiAgdmFyIGVsZW1lbnRUeXBlID0gZWxlbWVudC50eXBlO1xuICAvKipcbiAgICogQmxhY2tsaXN0aW5nIGluc3RlYWQgb2Ygd2hpdGVsaXN0aW5nXG4gICAqXG4gICAqIEJsYWNrbGlzdGluZyB3aWxsIG1pc3Mgc29tZSBjb21wb25lbnRzLCBzdWNoIGFzIFJlYWN0LkZyYWdtZW50LiBUaG9zZSB3aWxsIGF0IGxlYXN0XG4gICAqIHRyaWdnZXIgYSB3YXJuaW5nIGluIFJlYWN0LlxuICAgKiBXZSBjYW4ndCB3aGl0ZWxpc3QgYmVjYXVzZSB0aGVyZSBpcyBubyBzYWZlIHdheSB0byBkZXRlY3QgUmVhY3QuZm9yd2FyZFJlZlxuICAgKiBvciBjbGFzcyBjb21wb25lbnRzLiBcIlNhZmVcIiBtZWFucyB0aGVyZSdzIG5vIHB1YmxpYyBBUEkuXG4gICAqXG4gICAqL1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdmdW5jdGlvbicgJiYgIWlzQ2xhc3NDb21wb25lbnQoZWxlbWVudFR5cGUpKSB7XG4gICAgd2FybmluZ0hpbnQgPSAnRGlkIHlvdSBhY2NpZGVudGFsbHkgdXNlIGEgcGxhaW4gZnVuY3Rpb24gY29tcG9uZW50IGZvciBhbiBlbGVtZW50IGluc3RlYWQ/JztcbiAgfVxuXG4gIGlmICh3YXJuaW5nSGludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgXCIuY29uY2F0KGxvY2F0aW9uLCBcIiBgXCIpLmNvbmNhdChzYWZlUHJvcE5hbWUsIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAuIFwiKSArIFwiRXhwZWN0ZWQgYW4gZWxlbWVudCB0aGF0IGNhbiBob2xkIGEgcmVmLiBcIi5jb25jYXQod2FybmluZ0hpbnQsIFwiIFwiKSArICdGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgaHR0cHM6Ly9tdWkuY29tL3IvY2F2ZWF0LXdpdGgtcmVmcy1ndWlkZScpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBlbGVtZW50QWNjZXB0aW5nUmVmID0gY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLmVsZW1lbnQsIGFjY2VwdGluZ1JlZik7XG5lbGVtZW50QWNjZXB0aW5nUmVmLmlzUmVxdWlyZWQgPSBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLCBhY2NlcHRpbmdSZWYpO1xuZXhwb3J0IGRlZmF1bHQgZWxlbWVudEFjY2VwdGluZ1JlZjsiLCJpbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2hhaW5Qcm9wVHlwZXMgZnJvbSAnLi9jaGFpblByb3BUeXBlcyc7XG5cbmZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoZWxlbWVudFR5cGUpIHtcbiAgLy8gZWxlbWVudFR5cGUucHJvdG90eXBlPy5pc1JlYWN0Q29tcG9uZW50XG4gIHZhciBfZWxlbWVudFR5cGUkcHJvdG90eXAgPSBlbGVtZW50VHlwZS5wcm90b3R5cGUsXG4gICAgICBwcm90b3R5cGUgPSBfZWxlbWVudFR5cGUkcHJvdG90eXAgPT09IHZvaWQgMCA/IHt9IDogX2VsZW1lbnRUeXBlJHByb3RvdHlwO1xuICByZXR1cm4gQm9vbGVhbihwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICB2YXIgc2FmZVByb3BOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHdhcm5pbmdIaW50O1xuICAvKipcbiAgICogQmxhY2tsaXN0aW5nIGluc3RlYWQgb2Ygd2hpdGVsaXN0aW5nXG4gICAqXG4gICAqIEJsYWNrbGlzdGluZyB3aWxsIG1pc3Mgc29tZSBjb21wb25lbnRzLCBzdWNoIGFzIFJlYWN0LkZyYWdtZW50LiBUaG9zZSB3aWxsIGF0IGxlYXN0XG4gICAqIHRyaWdnZXIgYSB3YXJuaW5nIGluIFJlYWN0LlxuICAgKiBXZSBjYW4ndCB3aGl0ZWxpc3QgYmVjYXVzZSB0aGVyZSBpcyBubyBzYWZlIHdheSB0byBkZXRlY3QgUmVhY3QuZm9yd2FyZFJlZlxuICAgKiBvciBjbGFzcyBjb21wb25lbnRzLiBcIlNhZmVcIiBtZWFucyB0aGVyZSdzIG5vIHB1YmxpYyBBUEkuXG4gICAqXG4gICAqL1xuXG4gIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnZnVuY3Rpb24nICYmICFpc0NsYXNzQ29tcG9uZW50KHByb3BWYWx1ZSkpIHtcbiAgICB3YXJuaW5nSGludCA9ICdEaWQgeW91IGFjY2lkZW50YWxseSBwcm92aWRlIGEgcGxhaW4gZnVuY3Rpb24gY29tcG9uZW50IGluc3RlYWQ/JztcbiAgfVxuXG4gIGlmICh3YXJuaW5nSGludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgXCIuY29uY2F0KGxvY2F0aW9uLCBcIiBgXCIpLmNvbmNhdChzYWZlUHJvcE5hbWUsIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAuIFwiKSArIFwiRXhwZWN0ZWQgYW4gZWxlbWVudCB0eXBlIHRoYXQgY2FuIGhvbGQgYSByZWYuIFwiLmNvbmNhdCh3YXJuaW5nSGludCwgXCIgXCIpICsgJ0ZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSBodHRwczovL211aS5jb20vci9jYXZlYXQtd2l0aC1yZWZzLWd1aWRlJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBlbGVtZW50VHlwZUFjY2VwdGluZ1JlZik7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gVGhpcyBtb2R1bGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2FpcmJuYi9wcm9wLXR5cGVzLWV4YWN0IHJlcG9zaXRvcnkuXG4vLyBIb3dldmVyLCBpbiBvcmRlciB0byByZWR1Y2UgdGhlIG51bWJlciBvZiBkZXBlbmRlbmNpZXMgYW5kIHRvIHJlbW92ZSBzb21lIGV4dHJhIHNhZmUgY2hlY2tzXG4vLyB0aGUgbW9kdWxlIHdhcyBmb3JrZWQuXG4vLyBPbmx5IGV4cG9ydGVkIGZvciB0ZXN0IHB1cnBvc2VzLlxuZXhwb3J0IHZhciBzcGVjaWFsUHJvcGVydHkgPSBcImV4YWN0LXByb3A6IFxcdTIwMEJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4YWN0UHJvcChwcm9wVHlwZXMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gcHJvcFR5cGVzO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wVHlwZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc3BlY2lhbFByb3BlcnR5LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgdW5zdXBwb3J0ZWRQcm9wcyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiAhcHJvcFR5cGVzLmhhc093blByb3BlcnR5KHByb3ApO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuc3VwcG9ydGVkUHJvcHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBmb2xsb3dpbmcgcHJvcHMgYXJlIG5vdCBzdXBwb3J0ZWQ6IFwiLmNvbmNhdCh1bnN1cHBvcnRlZFByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gXCJgXCIuY29uY2F0KHByb3AsIFwiYFwiKTtcbiAgICAgIH0pLmpvaW4oJywgJyksIFwiLiBQbGVhc2UgcmVtb3ZlIHRoZW0uXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSkpO1xufSIsIi8qKlxuICogV0FSTklORzogRG9uJ3QgaW1wb3J0IHRoaXMgZGlyZWN0bHkuXG4gKiBVc2UgYE11aUVycm9yYCBmcm9tIGBAbWF0ZXJpYWwtdWkvdXRpbHMvbWFjcm9zL011aUVycm9yLm1hY3JvYCBpbnN0ZWFkLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvZGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TXVpRXJyb3JNZXNzYWdlKGNvZGUpIHtcbiAgLy8gQXBwbHkgYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS10ZW1wbGF0ZS1saXRlcmFscyBpbiBsb29zZSBtb2RlXG4gIC8vIGxvb3NlIG1vZGUgaXMgc2FmZSBpZmYgd2UncmUgY29uY2F0ZW5hdGluZyBwcmltaXRpdmVzXG4gIC8vIHNlZSBodHRwczovL2JhYmVsanMuaW8vZG9jcy9lbi9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXRlbXBsYXRlLWxpdGVyYWxzI2xvb3NlXG5cbiAgLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXRlbXBsYXRlICovXG4gIHZhciB1cmwgPSAnaHR0cHM6Ly9tdWkuY29tL3Byb2R1Y3Rpb24tZXJyb3IvP2NvZGU9JyArIGNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyByZXN0IHBhcmFtcyBvdmVyLXRyYW5zcGlsZSBmb3IgdGhpcyBjYXNlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHVybCArPSAnJmFyZ3NbXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4gJ01pbmlmaWVkIE1hdGVyaWFsLVVJIGVycm9yICMnICsgY29kZSArICc7IHZpc2l0ICcgKyB1cmwgKyAnIGZvciB0aGUgZnVsbCBtZXNzYWdlLic7XG4gIC8qIGVzbGludC1lbmFibGUgcHJlZmVyLXRlbXBsYXRlICovXG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgRm9yd2FyZFJlZiwgTWVtbyB9IGZyb20gJ3JlYWN0LWlzJzsgLy8gU2ltcGxpZmllZCBwb2x5ZmlsbCBmb3IgSUUgMTEgc3VwcG9ydFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9GdW5jdGlvbi5uYW1lL2Jsb2IvNThiMzE0ZDRhOTgzMTEwYzM2ODJmMTIyOGY4NDVkMzljY2NhMTgxNy9GdW5jdGlvbi5uYW1lLmpzI0wzXG5cbnZhciBmbk5hbWVNYXRjaFJlZ2V4ID0gL15cXHMqZnVuY3Rpb24oPzpcXHN8XFxzKlxcL1xcKi4qXFwqXFwvXFxzKikrKFteKFxccy9dKilcXHMqLztcbmV4cG9ydCBmdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWUoZm4pIHtcbiAgdmFyIG1hdGNoID0gXCJcIi5jb25jYXQoZm4pLm1hdGNoKGZuTmFtZU1hdGNoUmVnZXgpO1xuICB2YXIgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICByZXR1cm4gbmFtZSB8fCAnJztcbn1cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gQ29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZmFsbGJhY2tcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25Db21wb25lbnROYW1lKENvbXBvbmVudCkge1xuICB2YXIgZmFsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8IGdldEZ1bmN0aW9uTmFtZShDb21wb25lbnQpIHx8IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uQ29tcG9uZW50TmFtZShpbm5lclR5cGUpO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gXCJcIi5jb25jYXQod3JhcHBlck5hbWUsIFwiKFwiKS5jb25jYXQoZnVuY3Rpb25OYW1lLCBcIilcIikgOiB3cmFwcGVyTmFtZSk7XG59XG4vKipcbiAqIGNoZXJyeS1waWNrIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzc2OWIxZjI3MGUxMjUxZDlkYmRjZTBmY2JkOWU5MmU1MDJkMDU5YjgvcGFja2FnZXMvc2hhcmVkL2dldENvbXBvbmVudE5hbWUuanNcbiAqIG9yaWdpbmFsbHkgZm9ya2VkIGZyb20gcmVjb21wb3NlL2dldERpc3BsYXlOYW1lIHdpdGggYWRkZWQgSUUgMTEgc3VwcG9ydFxuICpcbiAqIEBwYXJhbSB7UmVhY3QuUmVhY3RUeXBlfSBDb21wb25lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgaWYgKENvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnZXRGdW5jdGlvbkNvbXBvbmVudE5hbWUoQ29tcG9uZW50LCAnQ29tcG9uZW50Jyk7XG4gIH1cblxuICBpZiAoX3R5cGVvZihDb21wb25lbnQpID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAoQ29tcG9uZW50LiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIEZvcndhcmRSZWY6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZShDb21wb25lbnQsIENvbXBvbmVudC5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgTWVtbzpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKENvbXBvbmVudCwgQ29tcG9uZW50LnR5cGUsICdtZW1vJyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCIvKiogQGxpY2Vuc2UgTWF0ZXJpYWwtVUkgdjQuMTEuM1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYWluUHJvcFR5cGVzIH0gZnJvbSAnLi9jaGFpblByb3BUeXBlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZXBtZXJnZSB9IGZyb20gJy4vZGVlcG1lcmdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWxlbWVudEFjY2VwdGluZ1JlZiB9IGZyb20gJy4vZWxlbWVudEFjY2VwdGluZ1JlZic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmIH0gZnJvbSAnLi9lbGVtZW50VHlwZUFjY2VwdGluZ1JlZic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4YWN0UHJvcCB9IGZyb20gJy4vZXhhY3RQcm9wJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9mb3JtYXRNdWlFcnJvck1lc3NhZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJy4vZ2V0RGlzcGxheU5hbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICcuL0hUTUxFbGVtZW50VHlwZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvbnlmaWxsR2xvYmFsIH0gZnJvbSAnLi9wb255ZmlsbEdsb2JhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZlR5cGUgfSBmcm9tICcuL3JlZlR5cGUnOyIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xudmFyIHJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgcmVmVHlwZTsiLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCJpbXBvcnQgaXNJbkJyb3dzZXIgZnJvbSAnaXMtaW4tYnJvd3Nlcic7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5JztcblxuLy8gRXhwb3J0IGphdmFzY3JpcHQgc3R5bGUgYW5kIGNzcyBzdHlsZSB2ZW5kb3IgcHJlZml4ZXMuXG52YXIganMgPSAnJztcbnZhciBjc3MgPSAnJztcbnZhciB2ZW5kb3IgPSAnJztcbnZhciBicm93c2VyID0gJyc7XG52YXIgaXNUb3VjaCA9IGlzSW5Ccm93c2VyICYmICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLy8gV2Ugc2hvdWxkIG5vdCBkbyBhbnl0aGluZyBpZiByZXF1aXJlZCBzZXJ2ZXJzaWRlLlxuXG5pZiAoaXNJbkJyb3dzZXIpIHtcbiAgLy8gT3JkZXIgbWF0dGVycy4gV2UgbmVlZCB0byBjaGVjayBXZWJraXQgdGhlIGxhc3Qgb25lIGJlY2F1c2VcbiAgLy8gb3RoZXIgdmVuZG9ycyB1c2UgdG8gYWRkIFdlYmtpdCBwcmVmaXhlcyB0byBzb21lIHByb3BlcnRpZXNcbiAgdmFyIGpzQ3NzTWFwID0ge1xuICAgIE1vejogJy1tb3otJyxcbiAgICBtczogJy1tcy0nLFxuICAgIE86ICctby0nLFxuICAgIFdlYmtpdDogJy13ZWJraXQtJ1xuICB9O1xuXG4gIHZhciBfZG9jdW1lbnQkY3JlYXRlRWxlbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICBzdHlsZSA9IF9kb2N1bWVudCRjcmVhdGVFbGVtZS5zdHlsZTtcblxuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcblxuICBmb3IgKHZhciBrZXkgaW4ganNDc3NNYXApIHtcbiAgICBpZiAoa2V5ICsgdGVzdFByb3AgaW4gc3R5bGUpIHtcbiAgICAgIGpzID0ga2V5O1xuICAgICAgY3NzID0ganNDc3NNYXBba2V5XTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSAvLyBDb3JyZWN0bHkgZGV0ZWN0IHRoZSBFZGdlIGJyb3dzZXIuXG5cblxuICBpZiAoanMgPT09ICdXZWJraXQnICYmICdtc0h5cGhlbnMnIGluIHN0eWxlKSB7XG4gICAganMgPSAnbXMnO1xuICAgIGNzcyA9IGpzQ3NzTWFwLm1zO1xuICAgIGJyb3dzZXIgPSAnZWRnZSc7XG4gIH0gLy8gQ29ycmVjdGx5IGRldGVjdCB0aGUgU2FmYXJpIGJyb3dzZXIuXG5cblxuICBpZiAoanMgPT09ICdXZWJraXQnICYmICctYXBwbGUtdHJhaWxpbmctd29yZCcgaW4gc3R5bGUpIHtcbiAgICB2ZW5kb3IgPSAnYXBwbGUnO1xuICB9XG59XG4vKipcbiAqIFZlbmRvciBwcmVmaXggc3RyaW5nIGZvciB0aGUgY3VycmVudCBicm93c2VyLlxuICpcbiAqIEB0eXBlIHt7anM6IFN0cmluZywgY3NzOiBTdHJpbmcsIHZlbmRvcjogU3RyaW5nLCBicm93c2VyOiBTdHJpbmd9fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbnZhciBwcmVmaXggPSB7XG4gIGpzOiBqcyxcbiAgY3NzOiBjc3MsXG4gIHZlbmRvcjogdmVuZG9yLFxuICBicm93c2VyOiBicm93c2VyLFxuICBpc1RvdWNoOiBpc1RvdWNoXG59O1xuXG4vKipcbiAqIFRlc3QgaWYgYSBrZXlmcmFtZSBhdC1ydWxlIHNob3VsZCBiZSBwcmVmaXhlZCBvciBub3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmVuZG9yIHByZWZpeCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZEtleWZyYW1lcyhrZXkpIHtcbiAgLy8gS2V5ZnJhbWVzIGlzIGFscmVhZHkgcHJlZml4ZWQuIGUuZy4ga2V5ID0gJ0Atd2Via2l0LWtleWZyYW1lcyBhJ1xuICBpZiAoa2V5WzFdID09PSAnLScpIHJldHVybiBrZXk7IC8vIE5vIG5lZWQgdG8gcHJlZml4IElFL0VkZ2UuIE9sZGVyIGJyb3dzZXJzIHdpbGwgaWdub3JlIHVuc3VwcG9ydGVkIHJ1bGVzLlxuICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9a2V5ZnJhbWVzXG5cbiAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykgcmV0dXJuIGtleTtcbiAgcmV0dXJuIFwiQFwiICsgcHJlZml4LmNzcyArIFwia2V5ZnJhbWVzXCIgKyBrZXkuc3Vic3RyKDEwKTtcbn1cblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWFwcGVhcmFuY2VcblxudmFyIGFwcGVhcmVuY2UgPSB7XG4gIG5vUHJlZmlsbDogWydhcHBlYXJhbmNlJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICdhcHBlYXJhbmNlJykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdtcycpIHJldHVybiBcIi13ZWJraXQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWNvbG9yLWFkanVzdFxuXG52YXIgY29sb3JBZGp1c3QgPSB7XG4gIG5vUHJlZmlsbDogWydjb2xvci1hZGp1c3QnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ2NvbG9yLWFkanVzdCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0JykgcmV0dXJuIHByZWZpeC5jc3MgKyBcInByaW50LVwiICsgcHJvcDtcbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxudmFyIHJlZ0V4cCA9IC9bLVxcc10rKC4pPy9nO1xuLyoqXG4gKiBSZXBsYWNlcyB0aGUgbGV0dGVyIHdpdGggdGhlIGNhcGl0YWwgbGV0dGVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1hdGNoXG4gKiBAcGFyYW0ge1N0cmluZ30gY1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdG9VcHBlcihtYXRjaCwgYykge1xuICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnO1xufVxuLyoqXG4gKiBDb252ZXJ0IGRhc2ggc2VwYXJhdGVkIHN0cmluZ3MgdG8gY2FtZWwtY2FzZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ0V4cCwgdG9VcHBlcik7XG59XG5cbi8qKlxuICogQ29udmVydCBkYXNoIHNlcGFyYXRlZCBzdHJpbmdzIHRvIHBhc2NhbCBjYXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXNjYWxpemUoc3RyKSB7XG4gIHJldHVybiBjYW1lbGl6ZShcIi1cIiArIHN0cik7XG59XG5cbi8vIGJ1dCB3ZSBjYW4gdXNlIGEgbG9uZ2hhbmQgcHJvcGVydHkgaW5zdGVhZC5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1tYXNrXG5cbnZhciBtYXNrID0ge1xuICBub1ByZWZpbGw6IFsnbWFzayddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICBpZiAoIS9ebWFzay8udGVzdChwcm9wKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ1dlYmtpdCcpIHtcbiAgICAgIHZhciBsb25naGFuZCA9ICdtYXNrLWltYWdlJztcblxuICAgICAgaWYgKGNhbWVsaXplKGxvbmdoYW5kKSBpbiBzdHlsZSkge1xuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZWZpeC5qcyArIHBhc2NhbGl6ZShsb25naGFuZCkgaW4gc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dGV4dC1vcmllbnRhdGlvblxuXG52YXIgdGV4dE9yaWVudGF0aW9uID0ge1xuICBub1ByZWZpbGw6IFsndGV4dC1vcmllbnRhdGlvbiddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAndGV4dC1vcmllbnRhdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXgudmVuZG9yID09PSAnYXBwbGUnICYmICFwcmVmaXguaXNUb3VjaCkge1xuICAgICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dHJhbnNmb3JtXG5cbnZhciB0cmFuc2Zvcm0gPSB7XG4gIG5vUHJlZmlsbDogWyd0cmFuc2Zvcm0nXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb3AgIT09ICd0cmFuc2Zvcm0nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAob3B0aW9ucy50cmFuc2Zvcm0pIHtcbiAgICAgIHJldHVybiBwcm9wO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXRyYW5zaXRpb25cblxudmFyIHRyYW5zaXRpb24gPSB7XG4gIG5vUHJlZmlsbDogWyd0cmFuc2l0aW9uJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChwcm9wICE9PSAndHJhbnNpdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiBwcm9wO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXdyaXRpbmctbW9kZVxuXG52YXIgd3JpdGluZ01vZGUgPSB7XG4gIG5vUHJlZmlsbDogWyd3cml0aW5nLW1vZGUnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ3dyaXRpbmctbW9kZScpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnIHx8IHByZWZpeC5qcyA9PT0gJ21zJyAmJiBwcmVmaXguYnJvd3NlciAhPT0gJ2VkZ2UnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD11c2VyLXNlbGVjdFxuXG52YXIgdXNlclNlbGVjdCA9IHtcbiAgbm9QcmVmaWxsOiBbJ3VzZXItc2VsZWN0J10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICd1c2VyLXNlbGVjdCcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onIHx8IHByZWZpeC5qcyA9PT0gJ21zJyB8fCBwcmVmaXgudmVuZG9yID09PSAnYXBwbGUnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1tdWx0aWNvbHVtblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy80OTFcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvMTc3XG5cbnZhciBicmVha1Byb3BzT2xkID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICBpZiAoIS9eYnJlYWstLy50ZXN0KHByb3ApKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0Jykge1xuICAgICAgdmFyIGpzUHJvcCA9IFwiV2Via2l0Q29sdW1uXCIgKyBwYXNjYWxpemUocHJvcCk7XG4gICAgICByZXR1cm4ganNQcm9wIGluIHN0eWxlID8gcHJlZml4LmNzcyArIFwiY29sdW1uLVwiICsgcHJvcCA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onKSB7XG4gICAgICB2YXIgX2pzUHJvcCA9IFwicGFnZVwiICsgcGFzY2FsaXplKHByb3ApO1xuXG4gICAgICByZXR1cm4gX2pzUHJvcCBpbiBzdHlsZSA/IFwicGFnZS1cIiArIHByb3AgOiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzMyNC5cblxudmFyIGlubGluZUxvZ2ljYWxPbGQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL14oYm9yZGVyfG1hcmdpbnxwYWRkaW5nKS1pbmxpbmUvLnRlc3QocHJvcCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJlZml4LmpzID09PSAnTW96JykgcmV0dXJuIHByb3A7XG4gICAgdmFyIG5ld1Byb3AgPSBwcm9wLnJlcGxhY2UoJy1pbmxpbmUnLCAnJyk7XG4gICAgcmV0dXJuIHByZWZpeC5qcyArIHBhc2NhbGl6ZShuZXdQcm9wKSBpbiBzdHlsZSA/IHByZWZpeC5jc3MgKyBuZXdQcm9wIDogZmFsc2U7XG4gIH1cbn07XG5cbi8vIENhbWVsaXphdGlvbiBpcyByZXF1aXJlZCBiZWNhdXNlIHdlIGNhbid0IHRlc3QgdXNpbmcuXG4vLyBDU1Mgc3ludGF4IGZvciBlLmcuIGluIEZGLlxuXG52YXIgdW5wcmVmaXhlZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgcmV0dXJuIGNhbWVsaXplKHByb3ApIGluIHN0eWxlID8gcHJvcCA6IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcHJlZml4ZWQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIHZhciBwYXNjYWxpemVkID0gcGFzY2FsaXplKHByb3ApOyAvLyBSZXR1cm4gY3VzdG9tIENTUyB2YXJpYWJsZSB3aXRob3V0IHByZWZpeGluZy5cblxuICAgIGlmIChwcm9wWzBdID09PSAnLScpIHJldHVybiBwcm9wOyAvLyBSZXR1cm4gYWxyZWFkeSBwcmVmaXhlZCB2YWx1ZSB3aXRob3V0IHByZWZpeGluZy5cblxuICAgIGlmIChwcm9wWzBdID09PSAnLScgJiYgcHJvcFsxXSA9PT0gJy0nKSByZXR1cm4gcHJvcDtcbiAgICBpZiAocHJlZml4LmpzICsgcGFzY2FsaXplZCBpbiBzdHlsZSkgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wOyAvLyBUcnkgd2Via2l0IGZhbGxiYWNrLlxuXG4gICAgaWYgKHByZWZpeC5qcyAhPT0gJ1dlYmtpdCcgJiYgXCJXZWJraXRcIiArIHBhc2NhbGl6ZWQgaW4gc3R5bGUpIHJldHVybiBcIi13ZWJraXQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNjcm9sbC1zbmFwXG5cbnZhciBzY3JvbGxTbmFwID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wLnN1YnN0cmluZygwLCAxMSkgIT09ICdzY3JvbGwtc25hcCcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdtcycpIHtcbiAgICAgIHJldHVybiBcIlwiICsgcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1vdmVyc2Nyb2xsLWJlaGF2aW9yXG5cbnZhciBvdmVyc2Nyb2xsQmVoYXZpb3IgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICdvdmVyc2Nyb2xsLWJlaGF2aW9yJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIHByZWZpeC5jc3MgKyBcInNjcm9sbC1jaGFpbmluZ1wiO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG52YXIgcHJvcE1hcCA9IHtcbiAgJ2ZsZXgtZ3Jvdyc6ICdmbGV4LXBvc2l0aXZlJyxcbiAgJ2ZsZXgtc2hyaW5rJzogJ2ZsZXgtbmVnYXRpdmUnLFxuICAnZmxleC1iYXNpcyc6ICdmbGV4LXByZWZlcnJlZC1zaXplJyxcbiAgJ2p1c3RpZnktY29udGVudCc6ICdmbGV4LXBhY2snLFxuICBvcmRlcjogJ2ZsZXgtb3JkZXInLFxuICAnYWxpZ24taXRlbXMnOiAnZmxleC1hbGlnbicsXG4gICdhbGlnbi1jb250ZW50JzogJ2ZsZXgtbGluZS1wYWNrJyAvLyAnYWxpZ24tc2VsZicgaXMgaGFuZGxlZCBieSAnYWxpZ24tc2VsZicgcGx1Z2luLlxuXG59OyAvLyBTdXBwb3J0IG9sZCBmbGV4IHNwZWMgZnJvbSAyMDEyLlxuXG52YXIgZmxleDIwMTIgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIHZhciBuZXdQcm9wID0gcHJvcE1hcFtwcm9wXTtcbiAgICBpZiAoIW5ld1Byb3ApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgfVxufTtcblxudmFyIHByb3BNYXAkMSA9IHtcbiAgZmxleDogJ2JveC1mbGV4JyxcbiAgJ2ZsZXgtZ3Jvdyc6ICdib3gtZmxleCcsXG4gICdmbGV4LWRpcmVjdGlvbic6IFsnYm94LW9yaWVudCcsICdib3gtZGlyZWN0aW9uJ10sXG4gIG9yZGVyOiAnYm94LW9yZGluYWwtZ3JvdXAnLFxuICAnYWxpZ24taXRlbXMnOiAnYm94LWFsaWduJyxcbiAgJ2ZsZXgtZmxvdyc6IFsnYm94LW9yaWVudCcsICdib3gtZGlyZWN0aW9uJ10sXG4gICdqdXN0aWZ5LWNvbnRlbnQnOiAnYm94LXBhY2snXG59O1xudmFyIHByb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcE1hcCQxKTtcblxudmFyIHByZWZpeENzcyA9IGZ1bmN0aW9uIHByZWZpeENzcyhwKSB7XG4gIHJldHVybiBwcmVmaXguY3NzICsgcDtcbn07IC8vIFN1cHBvcnQgb2xkIGZsZXggc3BlYyBmcm9tIDIwMDkuXG5cblxudmFyIGZsZXgyMDA5ID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUsIF9yZWYpIHtcbiAgICB2YXIgbXVsdGlwbGUgPSBfcmVmLm11bHRpcGxlO1xuXG4gICAgaWYgKHByb3BLZXlzLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgdmFyIG5ld1Byb3AgPSBwcm9wTWFwJDFbcHJvcF07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShuZXdQcm9wKSkge1xuICAgICAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtdWx0aXBsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld1Byb3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCEocHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3BbMF0pIGluIHN0eWxlKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3UHJvcC5tYXAocHJlZml4Q3NzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8vIHBsdWdpbnMgPSBbXG4vLyAgIC4uLnBsdWdpbnMsXG4vLyAgICBicmVha1Byb3BzT2xkLFxuLy8gICAgaW5saW5lTG9naWNhbE9sZCxcbi8vICAgIHVucHJlZml4ZWQsXG4vLyAgICBwcmVmaXhlZCxcbi8vICAgIHNjcm9sbFNuYXAsXG4vLyAgICBmbGV4MjAxMixcbi8vICAgIGZsZXgyMDA5XG4vLyBdXG4vLyBQbHVnaW5zIHdpdGhvdXQgJ25vUHJlZmlsbCcgdmFsdWUsIGdvaW5nIGxhc3QuXG4vLyAnZmxleC0qJyBwbHVnaW5zIHNob3VsZCBiZSBhdCB0aGUgYm90dG9tLlxuLy8gJ2ZsZXgyMDA5JyBnb2luZyBhZnRlciAnZmxleDIwMTInLlxuLy8gJ3ByZWZpeGVkJyBnb2luZyBhZnRlciAndW5wcmVmaXhlZCdcblxudmFyIHBsdWdpbnMgPSBbYXBwZWFyZW5jZSwgY29sb3JBZGp1c3QsIG1hc2ssIHRleHRPcmllbnRhdGlvbiwgdHJhbnNmb3JtLCB0cmFuc2l0aW9uLCB3cml0aW5nTW9kZSwgdXNlclNlbGVjdCwgYnJlYWtQcm9wc09sZCwgaW5saW5lTG9naWNhbE9sZCwgdW5wcmVmaXhlZCwgcHJlZml4ZWQsIHNjcm9sbFNuYXAsIG92ZXJzY3JvbGxCZWhhdmlvciwgZmxleDIwMTIsIGZsZXgyMDA5XTtcbnZhciBwcm9wZXJ0eURldGVjdG9ycyA9IHBsdWdpbnMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnN1cHBvcnRlZFByb3BlcnR5O1xufSkubWFwKGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnN1cHBvcnRlZFByb3BlcnR5O1xufSk7XG52YXIgbm9QcmVmaWxsID0gcGx1Z2lucy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAubm9QcmVmaWxsO1xufSkucmVkdWNlKGZ1bmN0aW9uIChhLCBwKSB7XG4gIGEucHVzaC5hcHBseShhLCBfdG9Db25zdW1hYmxlQXJyYXkocC5ub1ByZWZpbGwpKTtcbiAgcmV0dXJuIGE7XG59LCBbXSk7XG5cbnZhciBlbDtcbnZhciBjYWNoZSA9IHt9O1xuXG5pZiAoaXNJbkJyb3dzZXIpIHtcbiAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vIFdlIHRlc3QgZXZlcnkgcHJvcGVydHkgb24gdmVuZG9yIHByZWZpeCByZXF1aXJlbWVudC5cbiAgLy8gT25jZSB0ZXN0ZWQsIHJlc3VsdCBpcyBjYWNoZWQuIEl0IGdpdmVzIHVzIHVwIHRvIDcwJSBwZXJmIGJvb3N0LlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9lbGVtZW50LXN0eWxlLW9iamVjdC1hY2Nlc3MtdnMtcGxhaW4tb2JqZWN0XG4gIC8vXG4gIC8vIFByZWZpbGwgY2FjaGUgd2l0aCBrbm93biBjc3MgcHJvcGVydGllcyB0byByZWR1Y2UgYW1vdW50IG9mXG4gIC8vIHByb3BlcnRpZXMgd2UgbmVlZCB0byBmZWF0dXJlIHRlc3QgYXQgcnVudGltZS5cbiAgLy8gaHR0cDovL2Rhdmlkd2Fsc2gubmFtZS92ZW5kb3ItcHJlZml4XG5cbiAgdmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnJyk7XG5cbiAgZm9yICh2YXIga2V5JDEgaW4gY29tcHV0ZWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgaWYgKCFpc05hTihrZXkkMSkpIGNhY2hlW2NvbXB1dGVkW2tleSQxXV0gPSBjb21wdXRlZFtrZXkkMV07XG4gIH0gLy8gUHJvcGVydGllcyB0aGF0IGNhbm5vdCBiZSBjb3JyZWN0bHkgZGV0ZWN0ZWQgdXNpbmcgdGhlXG4gIC8vIGNhY2hlIHByZWZpbGwgbWV0aG9kLlxuXG5cbiAgbm9QcmVmaWxsLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gZGVsZXRlIGNhY2hlW3hdO1xuICB9KTtcbn1cbi8qKlxuICogVGVzdCBpZiBhIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgcmV0dXJucyBzdXBwb3J0ZWQgcHJvcGVydHkgd2l0aCB2ZW5kb3JcbiAqIHByZWZpeCBpZiByZXF1aXJlZC4gUmV0dXJucyBgZmFsc2VgIGlmIG5vdCBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgZGFzaCBzZXBhcmF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIC8vIEZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gIGlmICghZWwpIHJldHVybiBwcm9wOyAvLyBSZW1vdmUgY2FjaGUgZm9yIGJlbmNobWFyayB0ZXN0cyBvciByZXR1cm4gcHJvcGVydHkgZnJvbSB0aGUgY2FjaGUuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnYmVuY2htYXJrJyAmJiBjYWNoZVtwcm9wXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICB9IC8vIENoZWNrIGlmICd0cmFuc2l0aW9uJyBvciAndHJhbnNmb3JtJyBuYXRpdmVseSBzdXBwb3J0ZWQgaW4gYnJvd3Nlci5cblxuXG4gIGlmIChwcm9wID09PSAndHJhbnNpdGlvbicgfHwgcHJvcCA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICBvcHRpb25zW3Byb3BdID0gcHJvcCBpbiBlbC5zdHlsZTtcbiAgfSAvLyBGaW5kIGEgcGx1Z2luIGZvciBjdXJyZW50IHByZWZpeCBwcm9wZXJ0eS5cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlEZXRlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjYWNoZVtwcm9wXSA9IHByb3BlcnR5RGV0ZWN0b3JzW2ldKHByb3AsIGVsLnN0eWxlLCBvcHRpb25zKTsgLy8gQnJlYWsgbG9vcCwgaWYgdmFsdWUgZm91bmQuXG5cbiAgICBpZiAoY2FjaGVbcHJvcF0pIGJyZWFrO1xuICB9IC8vIFJlc2V0IHN0eWxlcyBmb3IgY3VycmVudCBwcm9wZXJ0eS5cbiAgLy8gRmlyZWZveCBjYW4gZXZlbiB0aHJvdyBhbiBlcnJvciBmb3IgaW52YWxpZCBwcm9wZXJ0aWVzLCBlLmcuLCBcIjBcIi5cblxuXG4gIHRyeSB7XG4gICAgZWwuc3R5bGVbcHJvcF0gPSAnJztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW3Byb3BdO1xufVxuXG52YXIgY2FjaGUkMSA9IHt9O1xudmFyIHRyYW5zaXRpb25Qcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiAxLFxuICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6IDEsXG4gICctd2Via2l0LXRyYW5zaXRpb24nOiAxLFxuICAnLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5JzogMVxufTtcbnZhciB0cmFuc1Byb3BzUmVnRXhwID0gLyheXFxzKltcXHctXSspfCwgKFxccypbXFx3LV0rKSg/IVteKCldKlxcKSkvZztcbnZhciBlbCQxO1xuLyoqXG4gKiBSZXR1cm5zIHByZWZpeGVkIHZhbHVlIHRyYW5zaXRpb24vdHJhbnNmb3JtIGlmIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBwMVxuICogQHBhcmFtIHtTdHJpbmd9IHAyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwcmVmaXhUcmFuc2l0aW9uQ2FsbGJhY2sobWF0Y2gsIHAxLCBwMikge1xuICBpZiAocDEgPT09ICd2YXInKSByZXR1cm4gJ3Zhcic7XG4gIGlmIChwMSA9PT0gJ2FsbCcpIHJldHVybiAnYWxsJztcbiAgaWYgKHAyID09PSAnYWxsJykgcmV0dXJuICcsIGFsbCc7XG4gIHZhciBwcmVmaXhlZFZhbHVlID0gcDEgPyBzdXBwb3J0ZWRQcm9wZXJ0eShwMSkgOiBcIiwgXCIgKyBzdXBwb3J0ZWRQcm9wZXJ0eShwMik7XG4gIGlmICghcHJlZml4ZWRWYWx1ZSkgcmV0dXJuIHAxIHx8IHAyO1xuICByZXR1cm4gcHJlZml4ZWRWYWx1ZTtcbn1cblxuaWYgKGlzSW5Ccm93c2VyKSBlbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuLyoqXG4gKiBSZXR1cm5zIHByZWZpeGVkIHZhbHVlIGlmIG5lZWRlZC4gUmV0dXJucyBgZmFsc2VgIGlmIHZhbHVlIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gRm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgdmFyIHByZWZpeGVkVmFsdWUgPSB2YWx1ZTtcbiAgaWYgKCFlbCQxIHx8IHByb3BlcnR5ID09PSAnY29udGVudCcpIHJldHVybiB2YWx1ZTsgLy8gSXQgaXMgYSBzdHJpbmcgb3IgYSBudW1iZXIgYXMgYSBzdHJpbmcgbGlrZSAnMScuXG4gIC8vIFdlIHdhbnQgb25seSBwcmVmaXhhYmxlIHZhbHVlcyBoZXJlLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXhlZFZhbHVlICE9PSAnc3RyaW5nJyB8fCAhaXNOYU4ocGFyc2VJbnQocHJlZml4ZWRWYWx1ZSwgMTApKSkge1xuICAgIHJldHVybiBwcmVmaXhlZFZhbHVlO1xuICB9IC8vIENyZWF0ZSBjYWNoZSBrZXkgZm9yIGN1cnJlbnQgdmFsdWUuXG5cblxuICB2YXIgY2FjaGVLZXkgPSBwcm9wZXJ0eSArIHByZWZpeGVkVmFsdWU7IC8vIFJlbW92ZSBjYWNoZSBmb3IgYmVuY2htYXJrIHRlc3RzIG9yIHJldHVybiB2YWx1ZSBmcm9tIGNhY2hlLlxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2JlbmNobWFyaycgJiYgY2FjaGUkMVtjYWNoZUtleV0gIT0gbnVsbCkge1xuICAgIHJldHVybiBjYWNoZSQxW2NhY2hlS2V5XTtcbiAgfSAvLyBJRSBjYW4gZXZlbiB0aHJvdyBhbiBlcnJvciBpbiBzb21lIGNhc2VzLCBmb3IgZS5nLiBzdHlsZS5jb250ZW50ID0gJ2JhcicuXG5cblxuICB0cnkge1xuICAgIC8vIFRlc3QgdmFsdWUgYXMgaXQgaXMuXG4gICAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSBwcmVmaXhlZFZhbHVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBSZXR1cm4gZmFsc2UgaWYgdmFsdWUgbm90IHN1cHBvcnRlZC5cbiAgICBjYWNoZSQxW2NhY2hlS2V5XSA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJZiAndHJhbnNpdGlvbicgb3IgJ3RyYW5zaXRpb24tcHJvcGVydHknIHByb3BlcnR5LlxuXG5cbiAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgIHByZWZpeGVkVmFsdWUgPSBwcmVmaXhlZFZhbHVlLnJlcGxhY2UodHJhbnNQcm9wc1JlZ0V4cCwgcHJlZml4VHJhbnNpdGlvbkNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmIChlbCQxLnN0eWxlW3Byb3BlcnR5XSA9PT0gJycpIHtcbiAgICAvLyBWYWx1ZSB3aXRoIGEgdmVuZG9yIHByZWZpeC5cbiAgICBwcmVmaXhlZFZhbHVlID0gcHJlZml4LmNzcyArIHByZWZpeGVkVmFsdWU7IC8vIEhhcmRjb2RlIHRlc3QgdG8gY29udmVydCBcImZsZXhcIiB0byBcIi1tcy1mbGV4Ym94XCIgZm9yIElFMTAuXG5cbiAgICBpZiAocHJlZml4ZWRWYWx1ZSA9PT0gJy1tcy1mbGV4JykgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSAnLW1zLWZsZXhib3gnOyAvLyBUZXN0IHByZWZpeGVkIHZhbHVlLlxuXG4gICAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSBwcmVmaXhlZFZhbHVlOyAvLyBSZXR1cm4gZmFsc2UgaWYgdmFsdWUgbm90IHN1cHBvcnRlZC5cblxuICAgIGlmIChlbCQxLnN0eWxlW3Byb3BlcnR5XSA9PT0gJycpIHtcbiAgICAgIGNhY2hlJDFbY2FjaGVLZXldID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IC8vIFJlc2V0IHN0eWxlcyBmb3IgY3VycmVudCBwcm9wZXJ0eS5cblxuXG4gIGVsJDEuc3R5bGVbcHJvcGVydHldID0gJyc7IC8vIFdyaXRlIGN1cnJlbnQgdmFsdWUgdG8gY2FjaGUuXG5cbiAgY2FjaGUkMVtjYWNoZUtleV0gPSBwcmVmaXhlZFZhbHVlO1xuICByZXR1cm4gY2FjaGUkMVtjYWNoZUtleV07XG59XG5cbmV4cG9ydCB7IHByZWZpeCwgc3VwcG9ydGVkS2V5ZnJhbWVzLCBzdXBwb3J0ZWRQcm9wZXJ0eSwgc3VwcG9ydGVkVmFsdWUgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciwgcHJlZmVyLXRlbXBsYXRlICovXG52YXIgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nXG52YXIgbXNQYXR0ZXJuID0gL15tcy0vXG52YXIgY2FjaGUgPSB7fVxuXG5mdW5jdGlvbiB0b0h5cGhlbkxvd2VyKG1hdGNoKSB7XG4gIHJldHVybiAnLScgKyBtYXRjaC50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShuYW1lKSB7XG4gIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHJldHVybiBjYWNoZVtuYW1lXVxuICB9XG5cbiAgdmFyIGhOYW1lID0gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sIHRvSHlwaGVuTG93ZXIpXG4gIHJldHVybiAoY2FjaGVbbmFtZV0gPSBtc1BhdHRlcm4udGVzdChoTmFtZSkgPyAnLScgKyBoTmFtZSA6IGhOYW1lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoeXBoZW5hdGVTdHlsZU5hbWVcbiIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0IHZhciBpc0Jyb3dzZXIgPSAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSBcIm9iamVjdFwiICYmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihkb2N1bWVudCkpID09PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5ub2RlVHlwZSA9PT0gOTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCcm93c2VyO1xuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IFwiV2FybmluZzogXCIgKyBtZXNzYWdlO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKHRleHQpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aHJvdyBFcnJvcih0ZXh0KTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhcm5pbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vLi4vc3RhdGljL2Nzcy9taW5lLmNzcydcbmltcG9ydCB7ZGF0YVNlcnZpY2V9IGZyb20gXCIuLi8uLi9tb2RlbC9EYXRhU2VydmljZVwiO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IF9sb2Rhc2ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7aHR0cFJlcX0gZnJvbSBcIi4uLy4uL21vZGVsL1JlcVwiO1xuXG5sZXQgdm0gPSBudWxsO1xuY2xhc3MgR2V0UG9pbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB2bSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFyZ2VIaXN0b3J5IDogZGF0YVNlcnZpY2UuY2hhcmdlSGlzdG9yeSxcbiAgICAgICAgICAgIGNvbnRlbnRfY29udGludWVfY250IDogMCxcbiAgICAgICAgICAgIHJldmlld19jb250aW51ZV9jbnQgOiAwLFxuICAgICAgICAgICAgYWR2ZXJ0X2NvbnRpbnVlX2NudCA6IDAsXG4gICAgICAgICAgICBmb2xsb3dfY29udGludWVfY250IDogMCxcbiAgICAgICAgICAgIGludml0ZV9jb250aW51ZV9jbnQgOiAwLFxuXG4gICAgICAgICAgICBhdHRlbmRCdG5EaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zZXR0aW5nIHx8ICF0aGlzLnByb3BzLnNldHRpbmcuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRTZXR0aW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0X2ZyZWVfcG9pbnRfaW5mbygpLnRoZW4oXG4gICAgICAgICAgICAocmVzKT0+e1xuICAgICAgICAgICAgICAgIHZtLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudF9jb250aW51ZV9jbnQgOiByZXMuY29udGVudD9yZXMuY29udGVudDowLFxuICAgICAgICAgICAgICAgICAgICByZXZpZXdfY29udGludWVfY250IDogcmVzLnJldmlldz9yZXMucmV2aWV3OjAsXG4gICAgICAgICAgICAgICAgICAgIGFkdmVydF9jb250aW51ZV9jbnQgOiByZXMuYWR2ZXJ0P3Jlcy5hZHZlcnQ6MCxcbiAgICAgICAgICAgICAgICAgICAgZm9sbG93X2NvbnRpbnVlX2NudCA6IHJlcy5mb2xsb3c/cmVzLmZvbGxvdzowLFxuICAgICAgICAgICAgICAgICAgICBpbnZpdGVfY29udGludWVfY250IDogcmVzLmludml0ZT9yZXMuaW52aXRlOjAsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBleGNoYW5nZU1vbmV5KG1vbmV5KSB7XG4gICAgICAgIGFsZXJ0KG1vbmV5KTtcbiAgICB9XG5cbiAgICBmdW5jQ2xpY2tBdHRlbmQoKSB7XG4gICAgICAgIGNvbnN0IHt1cGRhdGVNaSwgc3lzdGVtLCBzZXRBcHBNb2RhbFN0YXRlLCB0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB0b2tlbiA9IHN5c3RlbSYmc3lzdGVtLmFpJiZzeXN0ZW0uYWkudG9rZW47XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3RoaW5nIHRva2VuLi4uLicpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaHR0cFJlcSgnL2FwaS91c2VyL3ByZXNlbnQnLCAncG9zdCcsIHt0b2tlbjp0b2tlbn0pLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5tc2cgPT09ICdkb25lJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRBcHBNb2RhbFN0YXRlKCdhbGVydCcsIHQoJ01JU1NJT05fU1VDQ0VTUycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5tc2cgPT09ICdzYW1lIGRheScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXBwTW9kYWxTdGF0ZSgnYWxlcnQnLCB0KCdBTFJFQURZX0FUVEVORCcpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWkoe3N0YXQ6e2xvZ2luX2NvbnRpbnVlOnJlcy5yZXN1bHR9fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2F0dGVuZEJ0bkRpc2FibGVkOiF0aGlzLnN0YXRlLmF0dGVuZEJ0bkRpc2FibGVkfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1bmNDbGlja0F0dGVuZCBzdWNjZXNzJywgcmVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2h0dHBSZXEgZXJyJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb2ludF9jb250ZW50LFxuICAgICAgICAgICAgICAgIHBvaW50X2NvbnRlbnRfY250LFxuICAgICAgICAgICAgICAgIHBvaW50X3JldmlldyxcbiAgICAgICAgICAgICAgICBwb2ludF9yZXZpZXdfY250LFxuICAgICAgICAgICAgICAgIHBvaW50X2FkdmVydCxcbiAgICAgICAgICAgICAgICBwb2ludF9hZHZlcnRfY250LFxuICAgICAgICAgICAgICAgIHBvaW50X2F0dGVuZCwvL2FycmF5XG4gICAgICAgICAgICAgICAgcG9pbnRfaW52aXRlLFxuICAgICAgICAgICAgICAgIHBvaW50X2ZvbGxvdyxcbiAgICAgICAgICAgICAgICBwb2ludF9mb2xsb3dfY250LFxuICAgICAgICAgICAgfT0gdGhpcy5wcm9wcy5zZXR0aW5nLmRhdGEsXG4gICAgICAgICAgICB7bWksIHR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHRvdGFsR2V0UG9pbnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBwb2ludF9hdHRlbmQpIHtcbiAgICAgICAgICAgIHRvdGFsR2V0UG9pbnQgKz0gcG9pbnRfYXR0ZW5kW2luZGV4XS5wb2ludDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG90YWxfYXR0ZW5kX2RheSA9IHBvaW50X2F0dGVuZCYmcG9pbnRfYXR0ZW5kW3BvaW50X2F0dGVuZC5sZW5ndGgtMV0mJnBvaW50X2F0dGVuZFtwb2ludF9hdHRlbmQubGVuZ3RoLTFdLmRheTtcbiAgICAgICAgbGV0IHRvZGF5X2dldF9wb2ludF9hdHRlbmQgPSAwO1xuICAgICAgICBsZXQgdG90YWxfZ2V0X3BvaW50X2xvZ2luID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gcG9pbnRfYXR0ZW5kKSB7XG4gICAgICAgICAgICB0b3RhbF9nZXRfcG9pbnRfbG9naW4gPSBwb2ludF9hdHRlbmRbaW5kZXhdJiZwb2ludF9hdHRlbmRbaW5kZXhdLnBvaW50P3BvaW50X2F0dGVuZFtpbmRleF0ucG9pbnQ6MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWkmJm1pLnN0YXQmJm1pLnN0YXQubG9naW5fY29udGludWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IHRvZGF5X2F0dGVuZF9kYXRhID1fbG9kYXNoLmZpbmQocG9pbnRfYXR0ZW5kJiZwb2ludF9hdHRlbmQ/cG9pbnRfYXR0ZW5kOltdLCB7ZGF5OihtaS5zdGF0LmxvZ2luX2NvbnRpbnVlICsgMSl9KTtcbiAgICAgICAgICAgIHRvZGF5X2dldF9wb2ludF9hdHRlbmQgPSB0b2RheV9hdHRlbmRfZGF0YT90b2RheV9hdHRlbmRfZGF0YS5wb2ludDowO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X2NvbHVtbic+XG4gICAgICAgICAgICAgICAgey8q7Jew7IaNIOuhnOq3uOyduCovfVxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci0wXCIgc3R5bGU9e3ttYXJnaW46MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMTcwLDE5NCwwLjQ4KScsIHBhZGRpbmc6MTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZGl2X3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nIHN0eWxlPXt7ZmxleDoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luOiAnNXB4IDAnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ0VWRVJZREFZTE9HSU4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6dG90YWxfYXR0ZW5kX2RheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRfZGF5Om1pJiZtaS5zdGF0JiZtaS5zdGF0LmxvZ2luX2NvbnRpbnVlP21pLnN0YXQubG9naW5fY29udGludWU6MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQoJ1RPVEFMX1BPSU5UJywge3BvaW50OnRvdGFsX2dldF9wb2ludF9sb2dpbn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3ttYXJnaW46JzVweCAwJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdHRVRfUE9JTlRfQVRURU5EJywge3BvaW50OnRvZGF5X2dldF9wb2ludF9hdHRlbmR9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjEsIGFsaWduSXRlbXM6J2NlbnRlcid9fSBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuYXR0ZW5kQnRuRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLmZ1bmNDbGlja0F0dGVuZCgpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ0NIRUNLX0FUVEVORCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICB7Lyrtmozsm5DstpTsspwqL31cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItMFwiIHN0eWxlPXt7bWFyZ2luOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDE3MCwxOTQsMC40OCknLCBwYWRkaW5nOjE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGRpdl9yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfY29sdW1uJyBzdHlsZT17e2ZsZXg6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9yb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbjogJzVweCAwJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdSRUNPTU1FTkRfVVNFUicse3VzZXJfY250OnRoaXMuc3RhdGUuaW52aXRlX2NvbnRpbnVlX2NudCx9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X3JvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7bWFyZ2luOic1cHggMCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnUkVDT01NRU5EX1VTRVJfQUxFUlQnLCB7Y29pbjpwb2ludF9pbnZpdGV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OjEsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19IGNsYXNzTmFtZT0nZGl2X2NvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdHQUlOUycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwb2ludF9pbnZpdGUqdGhpcy5zdGF0ZS5pbnZpdGVfY29udGludWVfY250KSArIHQoJ0NPSU4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgey8q6rKM7Iuc6riAIOyekeyEsSovfVxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci0wXCIgc3R5bGU9e3ttYXJnaW46MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT0ncC0wJyBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQzLDI0MSwyNTUsMC42KScsIHBhZGRpbmc6MTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZGl2X3Jvdycgc3R5bGU9e3ttYXJnaW5Ub3A6NX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfY29sdW1uJyBzdHlsZT17e2ZsZXg6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9yb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbjonNXB4IDAnfX0+e3QoJ01BS0VTT0NJQUwnLCB7dG90YWxfY250OnBvaW50X2NvbnRlbnRfY250P3BvaW50X2NvbnRlbnRfY250OjEwLCBjb250ZW50X2NudDp0aGlzLnN0YXRlLmNvbnRlbnRfY29udGludWVfY250fSl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyBzdHlsZT17e2hlaWdodDoxMCwgbWFyZ2luUmlnaHQ6NX19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudF9jb250aW51ZV9jbnQvKHBvaW50X2NvbnRlbnRfY250P3BvaW50X2NvbnRlbnRfY250OjEwKSoxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17e21hcmdpbjonMTBweCAwIDAgMCd9fT57dCgnTUFLRV9TT0NJQUxfQUxFUlQnLCB7Y250OnBvaW50X2NvbnRlbnRfY250LCBwb2ludDpwb2ludF9jb250ZW50X2NudCpwb2ludF9jb250ZW50fSl9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnR0FJTlMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocG9pbnRfY29udGVudCp0aGlzLnN0YXRlLmNvbnRlbnRfY29udGludWVfY250KSArIHQoJ1BPSU5UJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIHsvKuuMk+q4gCDsnpHshLEqL31cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItMFwiIHN0eWxlPXt7bWFyZ2luOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9J3AtMCcgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE1NSwyMzIsMTgzLDAuNTgpJywgcGFkZGluZzoxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkaXZfcm93JyBzdHlsZT17e21hcmdpblRvcDo1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nIHN0eWxlPXt7ZmxleDoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luOic1cHggMCd9fT57dCgnTUFLRUNPTU1FTicsIHt0b3RhbF9jbnQ6cG9pbnRfcmV2aWV3X2NudCwgY29tbWVudF9jbnQ6dGhpcy5zdGF0ZS5yZXZpZXdfY29udGludWVfY250fSl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyBzdHlsZT17e2hlaWdodDoxMCwgbWFyZ2luUmlnaHQ6NX19IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUucmV2aWV3X2NvbnRpbnVlX2NudC8ocG9pbnRfcmV2aWV3X2NudD9wb2ludF9yZXZpZXdfY250OjEwKSoxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17e21hcmdpbjonMTBweCAwIDAgMCd9fT57dCgnTUFLRV9DT01NRU5UX0FMRVJUJywge2NvbW1lbnRfY250OnBvaW50X3Jldmlld19jbnQsIHRvdGFsX3BvaW50OnBvaW50X3Jldmlld19jbnQqcG9pbnRfcmV2aWV3fSl9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDoxLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSBjbGFzc05hbWU9J2Rpdl9jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnR0FJTlMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocG9pbnRfcmV2aWV3KnRoaXMuc3RhdGUucmV2aWV3X2NvbnRpbnVlX2NudCkgKyB0KCdQT0lOVCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICB7LyrqtJHqs6Ag67O06riwKi99XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIiBzdHlsZT17e21hcmdpbjoxMH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPSdwLTAnIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjE5LDE3MSwwLjU4KScsIHBhZGRpbmc6MTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZGl2X3Jvdycgc3R5bGU9e3ttYXJnaW5Ub3A6NX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfY29sdW1uJyBzdHlsZT17e2ZsZXg6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdl9yb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbjonNXB4IDAnfX0+e3QoJ1NIT1dfQURWRVJUJywge2FkdmVydF9jbnQ6dGhpcy5zdGF0ZS5hZHZlcnRfY29udGludWVfY250LCB0b3RhbF9jbnQ6cG9pbnRfYWR2ZXJ0X2NudH0pfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3Mgc3R5bGU9e3toZWlnaHQ6MTAsIG1hcmdpblJpZ2h0OjV9fSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmFkdmVydF9jb250aW51ZV9jbnQvKHBvaW50X2FkdmVydF9jbnQ/cG9pbnRfYWR2ZXJ0X2NudDoxMCkqMTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3ttYXJnaW46JzEwcHggMCAwIDAnfX0+e3QoJ1NIT1dfQURWRVJUX0FMRVJUJywgeyB0b3RhbF9wb2ludDpwb2ludF9hZHZlcnRfY250KnBvaW50X2FkdmVydH0pfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6MSwgYWxpZ25JdGVtczpcImNlbnRlclwifX0gY2xhc3NOYW1lPSdkaXZfY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ0dBSU5TJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBvaW50X2FkdmVydCp0aGlzLnN0YXRlLmFkdmVydF9jb250aW51ZV9jbnQpICsgdCgnUE9JTlQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgICB7LyrtjJTroZzsnokqL31cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItMFwiIHN0eWxlPXt7bWFyZ2luOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9J3AtMCcgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE0MywyNDEsMjU1LDAuNiknLCBwYWRkaW5nOjE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGRpdl9yb3cnIHN0eWxlPXt7bWFyZ2luVG9wOjV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2X2NvbHVtbicgc3R5bGU9e3tmbGV4OjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZfcm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3ttYXJnaW46JzVweCAwJ319Pnt0KCdGT0xMT1cnKSArICcoJyArIGAke3RoaXMuc3RhdGUuZm9sbG93X2NvbnRpbnVlX2NudH0vJHtwb2ludF9mb2xsb3dfY250P3BvaW50X2ZvbGxvd19jbnQ6MTIzfWAgKyAnKScgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3Mgc3R5bGU9e3toZWlnaHQ6MTAsIG1hcmdpblJpZ2h0OjV9fSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZvbGxvd19jb250aW51ZV9jbnQvKHBvaW50X2ZvbGxvd19jbnQ/cG9pbnRfZm9sbG93X2NudDoxMjMpKjEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7bWFyZ2luOicxMHB4IDAgMCAwJ319Pnt0KCdGT0xMT1dfQUxFUlQnLCB7dXNlcl9jbnQ6cG9pbnRfZm9sbG93X2NudD9wb2ludF9mb2xsb3dfY250OjEyMywgdG90YWxfcG9pbnQ6KHBvaW50X2ZvbGxvd19jbnQ/cG9pbnRfZm9sbG93X2NudDoxMjMpKnBvaW50X2ZvbGxvd30pfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6MSwgYWxpZ25JdGVtczpcImNlbnRlclwifX0gY2xhc3NOYW1lPSdkaXZfY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ0dBSU5TJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBvaW50X2ZvbGxvdyp0aGlzLnN0YXRlLmZvbGxvd19jb250aW51ZV9jbnQpICsgdCgnUE9JTlQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdldFBvaW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==