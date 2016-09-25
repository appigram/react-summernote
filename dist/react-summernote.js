(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSummernote"] = factory(require("jquery"), require("react"));
	else
		root["ReactSummernote"] = factory(root["jquery"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(7);

	__webpack_require__(15);

	var _react = __webpack_require__(17);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $ */

	var ReactSummernote = function (_React$Component) {
		_inherits(ReactSummernote, _React$Component);

		_createClass(ReactSummernote, null, [{
			key: "reset",
			value: function reset() {
				this.editor.summernote("reset");
			}
		}, {
			key: "insertImage",
			value: function insertImage(url, filenameOrCallback) {
				this.editor.summernote("insertImage", url, filenameOrCallback);
			}
		}, {
			key: "insertNode",
			value: function insertNode(node) {
				this.editor.summernote("insertNode", node);
			}
		}, {
			key: "insertText",
			value: function insertText(text) {
				this.editor.summernote("insertText", text);
			}
		}]);

		function ReactSummernote(props) {
			_classCallCheck(this, ReactSummernote);

			var _this = _possibleConstructorReturn(this, (ReactSummernote.__proto__ || Object.getPrototypeOf(ReactSummernote)).call(this, props));

			_this.uid = "react-summernote-" + Date.now();
			_this.editor = {};

			ReactSummernote.insertImage = ReactSummernote.insertImage.bind(_this);
			ReactSummernote.insertNode = ReactSummernote.insertNode.bind(_this);
			ReactSummernote.insertText = ReactSummernote.insertText.bind(_this);
			return _this;
		}

		_createClass(ReactSummernote, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var options = this.props.options;
				options.callbacks = this.callbacks;

				this.editor = $("#" + this.uid);
				this.editor.summernote(options);
				this.manageModalScroll(true);
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate() {
				return false;
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				if (this.editor) this.editor.summernote("destroy");
				this.manageModalScroll(false);
			}
		}, {
			key: "manageModalScroll",
			value: function manageModalScroll(mount) {
				var $body = $("body");
				var hasClassName = false;
				if (mount) {
					$(".note-editor .modal").on("show.bs.modal", function () {
						hasClassName = $body.hasClass("modal-open");
					});
					$(".note-editor .modal").on("hidden.bs.modal", function () {
						$body.toggleClass("modal-open", hasClassName);
					});
				} else {
					$(".note-editor .modal").off("show.bs.modal");
					$(".note-editor .modal").off("hidden.bs.modal");
				}
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement("div", { id: this.uid, dangerouslySetInnerHTML: { __html: this.props.value } });
			}
		}, {
			key: "callbacks",
			get: function get() {
				return {
					onInit: this.props.onInit,
					onEnter: this.props.onEnter,
					onFocus: this.props.onFocus,
					onBlur: this.props.onBlur,
					onKeyup: this.props.onKeyUp,
					onKeydown: this.props.onKeyDown,
					onPaste: this.props.onPaste,
					onChange: this.props.onChange,
					onImageUpload: this.props.onImageUpload
				};
			}
		}]);

		return ReactSummernote;
	}(_react2.default.Component);

	ReactSummernote.propTypes = {
		value: _react2.default.PropTypes.string,
		options: _react2.default.PropTypes.object,
		onInit: _react2.default.PropTypes.func,
		onEnter: _react2.default.PropTypes.func,
		onFocus: _react2.default.PropTypes.func,
		onBlur: _react2.default.PropTypes.func,
		onKeyUp: _react2.default.PropTypes.func,
		onKeyDown: _react2.default.PropTypes.func,
		onPaste: _react2.default.PropTypes.func,
		onChange: _react2.default.PropTypes.func,
		onImageUpload: _react2.default.PropTypes.func
	};

	exports.default = ReactSummernote;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Modal = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'modal';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.modal';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 300;
	  var BACKDROP_TRANSITION_DURATION = 150;
	  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

	  var Default = {
	    backdrop: true,
	    keyboard: true,
	    focus: true,
	    show: true
	  };

	  var DefaultType = {
	    backdrop: '(boolean|string)',
	    keyboard: 'boolean',
	    focus: 'boolean',
	    show: 'boolean'
	  };

	  var Event = {
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    FOCUSIN: 'focusin' + EVENT_KEY,
	    RESIZE: 'resize' + EVENT_KEY,
	    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
	    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
	    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
	    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
	    BACKDROP: 'modal-backdrop',
	    OPEN: 'modal-open',
	    FADE: 'fade',
	    IN: 'in'
	  };

	  var Selector = {
	    DIALOG: '.modal-dialog',
	    DATA_TOGGLE: '[data-toggle="modal"]',
	    DATA_DISMISS: '[data-dismiss="modal"]',
	    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Modal = (function () {
	    function Modal(element, config) {
	      _classCallCheck(this, Modal);

	      this._config = this._getConfig(config);
	      this._element = element;
	      this._dialog = $(element).find(Selector.DIALOG)[0];
	      this._backdrop = null;
	      this._isShown = false;
	      this._isBodyOverflowing = false;
	      this._ignoreBackdropClick = false;
	      this._originalBodyPadding = 0;
	      this._scrollbarWidth = 0;
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Modal, [{
	      key: 'toggle',

	      // public

	      value: function toggle(relatedTarget) {
	        return this._isShown ? this.hide() : this.show(relatedTarget);
	      }
	    }, {
	      key: 'show',
	      value: function show(relatedTarget) {
	        var _this = this;

	        var showEvent = $.Event(Event.SHOW, {
	          relatedTarget: relatedTarget
	        });

	        $(this._element).trigger(showEvent);

	        if (this._isShown || showEvent.isDefaultPrevented()) {
	          return;
	        }

	        this._isShown = true;

	        this._checkScrollbar();
	        this._setScrollbar();

	        $(document.body).addClass(ClassName.OPEN);

	        this._setEscapeEvent();
	        this._setResizeEvent();

	        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

	        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
	          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
	            if ($(event.target).is(_this._element)) {
	              _this._ignoreBackdropClick = true;
	            }
	          });
	        });

	        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
	      }
	    }, {
	      key: 'hide',
	      value: function hide(event) {
	        if (event) {
	          event.preventDefault();
	        }

	        var hideEvent = $.Event(Event.HIDE);

	        $(this._element).trigger(hideEvent);

	        if (!this._isShown || hideEvent.isDefaultPrevented()) {
	          return;
	        }

	        this._isShown = false;

	        this._setEscapeEvent();
	        this._setResizeEvent();

	        $(document).off(Event.FOCUSIN);

	        $(this._element).removeClass(ClassName.IN);

	        $(this._element).off(Event.CLICK_DISMISS);
	        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

	        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {

	          $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          this._hideModal();
	        }
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeData(this._element, DATA_KEY);

	        $(window).off(EVENT_KEY);
	        $(document).off(EVENT_KEY);
	        $(this._element).off(EVENT_KEY);
	        $(this._backdrop).off(EVENT_KEY);

	        this._config = null;
	        this._element = null;
	        this._dialog = null;
	        this._backdrop = null;
	        this._isShown = null;
	        this._isBodyOverflowing = null;
	        this._ignoreBackdropClick = null;
	        this._originalBodyPadding = null;
	        this._scrollbarWidth = null;
	      }

	      // private

	    }, {
	      key: '_getConfig',
	      value: function _getConfig(config) {
	        config = $.extend({}, Default, config);
	        Util.typeCheckConfig(NAME, config, DefaultType);
	        return config;
	      }
	    }, {
	      key: '_showElement',
	      value: function _showElement(relatedTarget) {
	        var _this2 = this;

	        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

	        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
	          // don't move modals dom position
	          document.body.appendChild(this._element);
	        }

	        this._element.style.display = 'block';
	        this._element.removeAttribute('aria-hidden');
	        this._element.scrollTop = 0;

	        if (transition) {
	          Util.reflow(this._element);
	        }

	        $(this._element).addClass(ClassName.IN);

	        if (this._config.focus) {
	          this._enforceFocus();
	        }

	        var shownEvent = $.Event(Event.SHOWN, {
	          relatedTarget: relatedTarget
	        });

	        var transitionComplete = function transitionComplete() {
	          if (_this2._config.focus) {
	            _this2._element.focus();
	          }
	          $(_this2._element).trigger(shownEvent);
	        };

	        if (transition) {
	          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          transitionComplete();
	        }
	      }
	    }, {
	      key: '_enforceFocus',
	      value: function _enforceFocus() {
	        var _this3 = this;

	        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
	        .on(Event.FOCUSIN, function (event) {
	          if (document !== event.target && _this3._element !== event.target && !$(_this3._element).has(event.target).length) {
	            _this3._element.focus();
	          }
	        });
	      }
	    }, {
	      key: '_setEscapeEvent',
	      value: function _setEscapeEvent() {
	        var _this4 = this;

	        if (this._isShown && this._config.keyboard) {
	          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
	            if (event.which === ESCAPE_KEYCODE) {
	              _this4.hide();
	            }
	          });
	        } else if (!this._isShown) {
	          $(this._element).off(Event.KEYDOWN_DISMISS);
	        }
	      }
	    }, {
	      key: '_setResizeEvent',
	      value: function _setResizeEvent() {
	        if (this._isShown) {
	          $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
	        } else {
	          $(window).off(Event.RESIZE);
	        }
	      }
	    }, {
	      key: '_hideModal',
	      value: function _hideModal() {
	        var _this5 = this;

	        this._element.style.display = 'none';
	        this._element.setAttribute('aria-hidden', 'true');
	        this._showBackdrop(function () {
	          $(document.body).removeClass(ClassName.OPEN);
	          _this5._resetAdjustments();
	          _this5._resetScrollbar();
	          $(_this5._element).trigger(Event.HIDDEN);
	        });
	      }
	    }, {
	      key: '_removeBackdrop',
	      value: function _removeBackdrop() {
	        if (this._backdrop) {
	          $(this._backdrop).remove();
	          this._backdrop = null;
	        }
	      }
	    }, {
	      key: '_showBackdrop',
	      value: function _showBackdrop(callback) {
	        var _this6 = this;

	        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

	        if (this._isShown && this._config.backdrop) {
	          var doAnimate = Util.supportsTransitionEnd() && animate;

	          this._backdrop = document.createElement('div');
	          this._backdrop.className = ClassName.BACKDROP;

	          if (animate) {
	            $(this._backdrop).addClass(animate);
	          }

	          $(this._backdrop).appendTo(document.body);

	          $(this._element).on(Event.CLICK_DISMISS, function (event) {
	            if (_this6._ignoreBackdropClick) {
	              _this6._ignoreBackdropClick = false;
	              return;
	            }
	            if (event.target !== event.currentTarget) {
	              return;
	            }
	            if (_this6._config.backdrop === 'static') {
	              _this6._element.focus();
	            } else {
	              _this6.hide();
	            }
	          });

	          if (doAnimate) {
	            Util.reflow(this._backdrop);
	          }

	          $(this._backdrop).addClass(ClassName.IN);

	          if (!callback) {
	            return;
	          }

	          if (!doAnimate) {
	            callback();
	            return;
	          }

	          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	        } else if (!this._isShown && this._backdrop) {
	          $(this._backdrop).removeClass(ClassName.IN);

	          var callbackRemove = function callbackRemove() {
	            _this6._removeBackdrop();
	            if (callback) {
	              callback();
	            }
	          };

	          if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
	            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	          } else {
	            callbackRemove();
	          }
	        } else if (callback) {
	          callback();
	        }
	      }

	      // ----------------------------------------------------------------------
	      // the following methods are used to handle overflowing modals
	      // todo (fat): these should probably be refactored out of modal.js
	      // ----------------------------------------------------------------------

	    }, {
	      key: '_handleUpdate',
	      value: function _handleUpdate() {
	        this._adjustDialog();
	      }
	    }, {
	      key: '_adjustDialog',
	      value: function _adjustDialog() {
	        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

	        if (!this._isBodyOverflowing && isModalOverflowing) {
	          this._element.style.paddingLeft = this._scrollbarWidth + 'px';
	        }

	        if (this._isBodyOverflowing && !isModalOverflowing) {
	          this._element.style.paddingRight = this._scrollbarWidth + 'px';
	        }
	      }
	    }, {
	      key: '_resetAdjustments',
	      value: function _resetAdjustments() {
	        this._element.style.paddingLeft = '';
	        this._element.style.paddingRight = '';
	      }
	    }, {
	      key: '_checkScrollbar',
	      value: function _checkScrollbar() {
	        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
	        this._scrollbarWidth = this._getScrollbarWidth();
	      }
	    }, {
	      key: '_setScrollbar',
	      value: function _setScrollbar() {
	        var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

	        this._originalBodyPadding = document.body.style.paddingRight || '';

	        if (this._isBodyOverflowing) {
	          document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
	        }
	      }
	    }, {
	      key: '_resetScrollbar',
	      value: function _resetScrollbar() {
	        document.body.style.paddingRight = this._originalBodyPadding;
	      }
	    }, {
	      key: '_getScrollbarWidth',
	      value: function _getScrollbarWidth() {
	        // thx d.walsh
	        var scrollDiv = document.createElement('div');
	        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
	        document.body.appendChild(scrollDiv);
	        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        document.body.removeChild(scrollDiv);
	        return scrollbarWidth;
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config, relatedTarget) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);
	          var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

	          if (!data) {
	            data = new Modal(this, _config);
	            $(this).data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config](relatedTarget);
	          } else if (_config.show) {
	            data.show(relatedTarget);
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }]);

	    return Modal;
	  })();

	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    var _this7 = this;

	    var target = undefined;
	    var selector = Util.getSelectorFromElement(this);

	    if (selector) {
	      target = $(selector)[0];
	    }

	    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

	    if (this.tagName === 'A') {
	      event.preventDefault();
	    }

	    var $target = $(target).one(Event.SHOW, function (showEvent) {
	      if (showEvent.isDefaultPrevented()) {
	        // only register focus restorer if modal will actually get shown
	        return;
	      }

	      $target.one(Event.HIDDEN, function () {
	        if ($(_this7).is(':visible')) {
	          _this7.focus();
	        }
	      });
	    });

	    Modal._jQueryInterface.call($(target), config, this);
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Modal._jQueryInterface;
	  $.fn[NAME].Constructor = Modal;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Modal._jQueryInterface;
	  };

	  return Modal;
	})(jQuery);
	//# sourceMappingURL=modal.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* global Tether */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): tooltip.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Tooltip = (function ($) {

	  /**
	   * Check for Tether dependency
	   * Tether - http://github.hubspot.com/tether/
	   */
	  if (window.Tether === undefined) {
	    throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)');
	  }

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'tooltip';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.tooltip';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 150;
	  var CLASS_PREFIX = 'bs-tether';

	  var Default = {
	    animation: true,
	    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    selector: false,
	    placement: 'top',
	    offset: '0 0',
	    constraints: []
	  };

	  var DefaultType = {
	    animation: 'boolean',
	    template: 'string',
	    title: '(string|element|function)',
	    trigger: 'string',
	    delay: '(number|object)',
	    html: 'boolean',
	    selector: '(string|boolean)',
	    placement: '(string|function)',
	    offset: 'string',
	    constraints: 'array'
	  };

	  var AttachmentMap = {
	    TOP: 'bottom center',
	    RIGHT: 'middle left',
	    BOTTOM: 'top center',
	    LEFT: 'middle right'
	  };

	  var HoverState = {
	    IN: 'in',
	    OUT: 'out'
	  };

	  var Event = {
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    INSERTED: 'inserted' + EVENT_KEY,
	    CLICK: 'click' + EVENT_KEY,
	    FOCUSIN: 'focusin' + EVENT_KEY,
	    FOCUSOUT: 'focusout' + EVENT_KEY,
	    MOUSEENTER: 'mouseenter' + EVENT_KEY,
	    MOUSELEAVE: 'mouseleave' + EVENT_KEY
	  };

	  var ClassName = {
	    FADE: 'fade',
	    IN: 'in'
	  };

	  var Selector = {
	    TOOLTIP: '.tooltip',
	    TOOLTIP_INNER: '.tooltip-inner'
	  };

	  var TetherClass = {
	    element: false,
	    enabled: false
	  };

	  var Trigger = {
	    HOVER: 'hover',
	    FOCUS: 'focus',
	    CLICK: 'click',
	    MANUAL: 'manual'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Tooltip = (function () {
	    function Tooltip(element, config) {
	      _classCallCheck(this, Tooltip);

	      // private
	      this._isEnabled = true;
	      this._timeout = 0;
	      this._hoverState = '';
	      this._activeTrigger = {};
	      this._tether = null;

	      // protected
	      this.element = element;
	      this.config = this._getConfig(config);
	      this.tip = null;

	      this._setListeners();
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Tooltip, [{
	      key: 'enable',

	      // public

	      value: function enable() {
	        this._isEnabled = true;
	      }
	    }, {
	      key: 'disable',
	      value: function disable() {
	        this._isEnabled = false;
	      }
	    }, {
	      key: 'toggleEnabled',
	      value: function toggleEnabled() {
	        this._isEnabled = !this._isEnabled;
	      }
	    }, {
	      key: 'toggle',
	      value: function toggle(event) {
	        if (event) {
	          var dataKey = this.constructor.DATA_KEY;
	          var context = $(event.currentTarget).data(dataKey);

	          if (!context) {
	            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	            $(event.currentTarget).data(dataKey, context);
	          }

	          context._activeTrigger.click = !context._activeTrigger.click;

	          if (context._isWithActiveTrigger()) {
	            context._enter(null, context);
	          } else {
	            context._leave(null, context);
	          }
	        } else {

	          if ($(this.getTipElement()).hasClass(ClassName.IN)) {
	            this._leave(null, this);
	            return;
	          }

	          this._enter(null, this);
	        }
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        clearTimeout(this._timeout);

	        this.cleanupTether();

	        $.removeData(this.element, this.constructor.DATA_KEY);

	        $(this.element).off(this.constructor.EVENT_KEY);

	        if (this.tip) {
	          $(this.tip).remove();
	        }

	        this._isEnabled = null;
	        this._timeout = null;
	        this._hoverState = null;
	        this._activeTrigger = null;
	        this._tether = null;

	        this.element = null;
	        this.config = null;
	        this.tip = null;
	      }
	    }, {
	      key: 'show',
	      value: function show() {
	        var _this = this;

	        var showEvent = $.Event(this.constructor.Event.SHOW);

	        if (this.isWithContent() && this._isEnabled) {
	          $(this.element).trigger(showEvent);

	          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

	          if (showEvent.isDefaultPrevented() || !isInTheDom) {
	            return;
	          }

	          var tip = this.getTipElement();
	          var tipId = Util.getUID(this.constructor.NAME);

	          tip.setAttribute('id', tipId);
	          this.element.setAttribute('aria-describedby', tipId);

	          this.setContent();

	          if (this.config.animation) {
	            $(tip).addClass(ClassName.FADE);
	          }

	          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

	          var attachment = this._getAttachment(placement);

	          $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);

	          $(this.element).trigger(this.constructor.Event.INSERTED);

	          this._tether = new Tether({
	            attachment: attachment,
	            element: tip,
	            target: this.element,
	            classes: TetherClass,
	            classPrefix: CLASS_PREFIX,
	            offset: this.config.offset,
	            constraints: this.config.constraints,
	            addTargetClasses: false
	          });

	          Util.reflow(tip);
	          this._tether.position();

	          $(tip).addClass(ClassName.IN);

	          var complete = function complete() {
	            var prevHoverState = _this._hoverState;
	            _this._hoverState = null;

	            $(_this.element).trigger(_this.constructor.Event.SHOWN);

	            if (prevHoverState === HoverState.OUT) {
	              _this._leave(null, _this);
	            }
	          };

	          if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
	            $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
	            return;
	          }

	          complete();
	        }
	      }
	    }, {
	      key: 'hide',
	      value: function hide(callback) {
	        var _this2 = this;

	        var tip = this.getTipElement();
	        var hideEvent = $.Event(this.constructor.Event.HIDE);
	        var complete = function complete() {
	          if (_this2._hoverState !== HoverState.IN && tip.parentNode) {
	            tip.parentNode.removeChild(tip);
	          }

	          _this2.element.removeAttribute('aria-describedby');
	          $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
	          _this2.cleanupTether();

	          if (callback) {
	            callback();
	          }
	        };

	        $(this.element).trigger(hideEvent);

	        if (hideEvent.isDefaultPrevented()) {
	          return;
	        }

	        $(tip).removeClass(ClassName.IN);

	        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

	          $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          complete();
	        }

	        this._hoverState = '';
	      }

	      // protected

	    }, {
	      key: 'isWithContent',
	      value: function isWithContent() {
	        return Boolean(this.getTitle());
	      }
	    }, {
	      key: 'getTipElement',
	      value: function getTipElement() {
	        return this.tip = this.tip || $(this.config.template)[0];
	      }
	    }, {
	      key: 'setContent',
	      value: function setContent() {
	        var $tip = $(this.getTipElement());

	        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

	        $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

	        this.cleanupTether();
	      }
	    }, {
	      key: 'setElementContent',
	      value: function setElementContent($element, content) {
	        var html = this.config.html;
	        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
	          // content is a DOM node or a jQuery
	          if (html) {
	            if (!$(content).parent().is($element)) {
	              $element.empty().append(content);
	            }
	          } else {
	            $element.text($(content).text());
	          }
	        } else {
	          $element[html ? 'html' : 'text'](content);
	        }
	      }
	    }, {
	      key: 'getTitle',
	      value: function getTitle() {
	        var title = this.element.getAttribute('data-original-title');

	        if (!title) {
	          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
	        }

	        return title;
	      }
	    }, {
	      key: 'cleanupTether',
	      value: function cleanupTether() {
	        if (this._tether) {
	          this._tether.destroy();
	        }
	      }

	      // private

	    }, {
	      key: '_getAttachment',
	      value: function _getAttachment(placement) {
	        return AttachmentMap[placement.toUpperCase()];
	      }
	    }, {
	      key: '_setListeners',
	      value: function _setListeners() {
	        var _this3 = this;

	        var triggers = this.config.trigger.split(' ');

	        triggers.forEach(function (trigger) {
	          if (trigger === 'click') {
	            $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, $.proxy(_this3.toggle, _this3));
	          } else if (trigger !== Trigger.MANUAL) {
	            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
	            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;

	            $(_this3.element).on(eventIn, _this3.config.selector, $.proxy(_this3._enter, _this3)).on(eventOut, _this3.config.selector, $.proxy(_this3._leave, _this3));
	          }
	        });

	        if (this.config.selector) {
	          this.config = $.extend({}, this.config, {
	            trigger: 'manual',
	            selector: ''
	          });
	        } else {
	          this._fixTitle();
	        }
	      }
	    }, {
	      key: '_fixTitle',
	      value: function _fixTitle() {
	        var titleType = typeof this.element.getAttribute('data-original-title');
	        if (this.element.getAttribute('title') || titleType !== 'string') {
	          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
	          this.element.setAttribute('title', '');
	        }
	      }
	    }, {
	      key: '_enter',
	      value: function _enter(event, context) {
	        var dataKey = this.constructor.DATA_KEY;

	        context = context || $(event.currentTarget).data(dataKey);

	        if (!context) {
	          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	          $(event.currentTarget).data(dataKey, context);
	        }

	        if (event) {
	          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
	        }

	        if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {
	          context._hoverState = HoverState.IN;
	          return;
	        }

	        clearTimeout(context._timeout);

	        context._hoverState = HoverState.IN;

	        if (!context.config.delay || !context.config.delay.show) {
	          context.show();
	          return;
	        }

	        context._timeout = setTimeout(function () {
	          if (context._hoverState === HoverState.IN) {
	            context.show();
	          }
	        }, context.config.delay.show);
	      }
	    }, {
	      key: '_leave',
	      value: function _leave(event, context) {
	        var dataKey = this.constructor.DATA_KEY;

	        context = context || $(event.currentTarget).data(dataKey);

	        if (!context) {
	          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	          $(event.currentTarget).data(dataKey, context);
	        }

	        if (event) {
	          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
	        }

	        if (context._isWithActiveTrigger()) {
	          return;
	        }

	        clearTimeout(context._timeout);

	        context._hoverState = HoverState.OUT;

	        if (!context.config.delay || !context.config.delay.hide) {
	          context.hide();
	          return;
	        }

	        context._timeout = setTimeout(function () {
	          if (context._hoverState === HoverState.OUT) {
	            context.hide();
	          }
	        }, context.config.delay.hide);
	      }
	    }, {
	      key: '_isWithActiveTrigger',
	      value: function _isWithActiveTrigger() {
	        for (var trigger in this._activeTrigger) {
	          if (this._activeTrigger[trigger]) {
	            return true;
	          }
	        }

	        return false;
	      }
	    }, {
	      key: '_getConfig',
	      value: function _getConfig(config) {
	        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

	        if (config.delay && typeof config.delay === 'number') {
	          config.delay = {
	            show: config.delay,
	            hide: config.delay
	          };
	        }

	        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

	        return config;
	      }
	    }, {
	      key: '_getDelegateConfig',
	      value: function _getDelegateConfig() {
	        var config = {};

	        if (this.config) {
	          for (var key in this.config) {
	            if (this.constructor.Default[key] !== this.config[key]) {
	              config[key] = this.config[key];
	            }
	          }
	        }

	        return config;
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);
	          var _config = typeof config === 'object' ? config : null;

	          if (!data && /destroy|hide/.test(config)) {
	            return;
	          }

	          if (!data) {
	            data = new Tooltip(this, _config);
	            $(this).data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config]();
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }, {
	      key: 'NAME',
	      get: function get() {
	        return NAME;
	      }
	    }, {
	      key: 'DATA_KEY',
	      get: function get() {
	        return DATA_KEY;
	      }
	    }, {
	      key: 'Event',
	      get: function get() {
	        return Event;
	      }
	    }, {
	      key: 'EVENT_KEY',
	      get: function get() {
	        return EVENT_KEY;
	      }
	    }, {
	      key: 'DefaultType',
	      get: function get() {
	        return DefaultType;
	      }
	    }]);

	    return Tooltip;
	  })();

	  $.fn[NAME] = Tooltip._jQueryInterface;
	  $.fn[NAME].Constructor = Tooltip;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Tooltip._jQueryInterface;
	  };

	  return Tooltip;
	})(jQuery);
	//# sourceMappingURL=tooltip.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Super simple wysiwyg editor v0.8.2
	 * http://summernote.org/
	 *
	 * summernote.js
	 * Copyright 2013-2016 Alan Hong. and other contributors
	 * summernote may be freely distributed under the MIT license./
	 *
	 * Date: 2016-05-27T13:00Z
	 */
	(function (factory) {
	  /* global define */
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node/CommonJS
	    module.exports = factory(require('jquery'));
	  } else {
	    // Browser globals
	    factory(window.jQuery);
	  }
	}(function ($) {
	  'use strict';

	  /**
	   * @class core.func
	   *
	   * func utils (for high-order func's arg)
	   *
	   * @singleton
	   * @alternateClassName func
	   */
	  var func = (function () {
	    var eq = function (itemA) {
	      return function (itemB) {
	        return itemA === itemB;
	      };
	    };

	    var eq2 = function (itemA, itemB) {
	      return itemA === itemB;
	    };

	    var peq2 = function (propName) {
	      return function (itemA, itemB) {
	        return itemA[propName] === itemB[propName];
	      };
	    };

	    var ok = function () {
	      return true;
	    };

	    var fail = function () {
	      return false;
	    };

	    var not = function (f) {
	      return function () {
	        return !f.apply(f, arguments);
	      };
	    };

	    var and = function (fA, fB) {
	      return function (item) {
	        return fA(item) && fB(item);
	      };
	    };

	    var self = function (a) {
	      return a;
	    };

	    var invoke = function (obj, method) {
	      return function () {
	        return obj[method].apply(obj, arguments);
	      };
	    };

	    var idCounter = 0;

	    /**
	     * generate a globally-unique id
	     *
	     * @param {String} [prefix]
	     */
	    var uniqueId = function (prefix) {
	      var id = ++idCounter + '';
	      return prefix ? prefix + id : id;
	    };

	    /**
	     * returns bnd (bounds) from rect
	     *
	     * - IE Compatibility Issue: http://goo.gl/sRLOAo
	     * - Scroll Issue: http://goo.gl/sNjUc
	     *
	     * @param {Rect} rect
	     * @return {Object} bounds
	     * @return {Number} bounds.top
	     * @return {Number} bounds.left
	     * @return {Number} bounds.width
	     * @return {Number} bounds.height
	     */
	    var rect2bnd = function (rect) {
	      var $document = $(document);
	      return {
	        top: rect.top + $document.scrollTop(),
	        left: rect.left + $document.scrollLeft(),
	        width: rect.right - rect.left,
	        height: rect.bottom - rect.top
	      };
	    };

	    /**
	     * returns a copy of the object where the keys have become the values and the values the keys.
	     * @param {Object} obj
	     * @return {Object}
	     */
	    var invertObject = function (obj) {
	      var inverted = {};
	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          inverted[obj[key]] = key;
	        }
	      }
	      return inverted;
	    };

	    /**
	     * @param {String} namespace
	     * @param {String} [prefix]
	     * @return {String}
	     */
	    var namespaceToCamel = function (namespace, prefix) {
	      prefix = prefix || '';
	      return prefix + namespace.split('.').map(function (name) {
	        return name.substring(0, 1).toUpperCase() + name.substring(1);
	      }).join('');
	    };

	    return {
	      eq: eq,
	      eq2: eq2,
	      peq2: peq2,
	      ok: ok,
	      fail: fail,
	      self: self,
	      not: not,
	      and: and,
	      invoke: invoke,
	      uniqueId: uniqueId,
	      rect2bnd: rect2bnd,
	      invertObject: invertObject,
	      namespaceToCamel: namespaceToCamel
	    };
	  })();

	  /**
	   * @class core.list
	   *
	   * list utils
	   *
	   * @singleton
	   * @alternateClassName list
	   */
	  var list = (function () {
	    /**
	     * returns the first item of an array.
	     *
	     * @param {Array} array
	     */
	    var head = function (array) {
	      return array[0];
	    };

	    /**
	     * returns the last item of an array.
	     *
	     * @param {Array} array
	     */
	    var last = function (array) {
	      return array[array.length - 1];
	    };

	    /**
	     * returns everything but the last entry of the array.
	     *
	     * @param {Array} array
	     */
	    var initial = function (array) {
	      return array.slice(0, array.length - 1);
	    };

	    /**
	     * returns the rest of the items in an array.
	     *
	     * @param {Array} array
	     */
	    var tail = function (array) {
	      return array.slice(1);
	    };

	    /**
	     * returns item of array
	     */
	    var find = function (array, pred) {
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        var item = array[idx];
	        if (pred(item)) {
	          return item;
	        }
	      }
	    };

	    /**
	     * returns true if all of the values in the array pass the predicate truth test.
	     */
	    var all = function (array, pred) {
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (!pred(array[idx])) {
	          return false;
	        }
	      }
	      return true;
	    };

	    /**
	     * returns index of item
	     */
	    var indexOf = function (array, item) {
	      return $.inArray(item, array);
	    };

	    /**
	     * returns true if the value is present in the list.
	     */
	    var contains = function (array, item) {
	      return indexOf(array, item) !== -1;
	    };

	    /**
	     * get sum from a list
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - iterator
	     */
	    var sum = function (array, fn) {
	      fn = fn || func.self;
	      return array.reduce(function (memo, v) {
	        return memo + fn(v);
	      }, 0);
	    };
	  
	    /**
	     * returns a copy of the collection with array type.
	     * @param {Collection} collection - collection eg) node.childNodes, ...
	     */
	    var from = function (collection) {
	      var result = [], idx = -1, length = collection.length;
	      while (++idx < length) {
	        result[idx] = collection[idx];
	      }
	      return result;
	    };

	    /**
	     * returns whether list is empty or not
	     */
	    var isEmpty = function (array) {
	      return !array || !array.length;
	    };
	  
	    /**
	     * cluster elements by predicate function.
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - predicate function for cluster rule
	     * @param {Array[]}
	     */
	    var clusterBy = function (array, fn) {
	      if (!array.length) { return []; }
	      var aTail = tail(array);
	      return aTail.reduce(function (memo, v) {
	        var aLast = last(memo);
	        if (fn(last(aLast), v)) {
	          aLast[aLast.length] = v;
	        } else {
	          memo[memo.length] = [v];
	        }
	        return memo;
	      }, [[head(array)]]);
	    };
	  
	    /**
	     * returns a copy of the array with all falsy values removed
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - predicate function for cluster rule
	     */
	    var compact = function (array) {
	      var aResult = [];
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (array[idx]) { aResult.push(array[idx]); }
	      }
	      return aResult;
	    };

	    /**
	     * produces a duplicate-free version of the array
	     *
	     * @param {Array} array
	     */
	    var unique = function (array) {
	      var results = [];

	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (!contains(results, array[idx])) {
	          results.push(array[idx]);
	        }
	      }

	      return results;
	    };

	    /**
	     * returns next item.
	     * @param {Array} array
	     */
	    var next = function (array, item) {
	      var idx = indexOf(array, item);
	      if (idx === -1) { return null; }

	      return array[idx + 1];
	    };

	    /**
	     * returns prev item.
	     * @param {Array} array
	     */
	    var prev = function (array, item) {
	      var idx = indexOf(array, item);
	      if (idx === -1) { return null; }

	      return array[idx - 1];
	    };

	    return { head: head, last: last, initial: initial, tail: tail,
	             prev: prev, next: next, find: find, contains: contains,
	             all: all, sum: sum, from: from, isEmpty: isEmpty,
	             clusterBy: clusterBy, compact: compact, unique: unique };
	  })();

	  var isSupportAmd = "function" === 'function' && __webpack_require__(5);

	  /**
	   * returns whether font is installed or not.
	   *
	   * @param {String} fontName
	   * @return {Boolean}
	   */
	  var isFontInstalled = function (fontName) {
	    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
	    var $tester = $('<div>').css({
	      position: 'absolute',
	      left: '-9999px',
	      top: '-9999px',
	      fontSize: '200px'
	    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);

	    var originalWidth = $tester.css('fontFamily', testFontName).width();
	    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();

	    $tester.remove();

	    return originalWidth !== width;
	  };

	  var userAgent = navigator.userAgent;
	  var isMSIE = /MSIE|Trident/i.test(userAgent);
	  var browserVersion;
	  if (isMSIE) {
	    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
	    if (matches) {
	      browserVersion = parseFloat(matches[1]);
	    }
	    matches = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent);
	    if (matches) {
	      browserVersion = parseFloat(matches[1]);
	    }
	  }

	  var isEdge = /Edge\/\d+/.test(userAgent);

	  var hasCodeMirror = !!window.CodeMirror;
	  if (!hasCodeMirror && isSupportAmd && "function" !== 'undefined') {
	    if (true) {
	      try {
	        // If CodeMirror can't be resolved, `require.resolve` will throw an
	        // exception and `hasCodeMirror` won't be set to `true`.
	        /*require.resolve*/(6);
	        hasCodeMirror = true;
	      } catch (e) {
	        // Do nothing.
	      }
	    } else if (typeof eval('require').specified !== 'undefined') {
	      hasCodeMirror = eval('require').specified('codemirror');
	    }
	  }

	  /**
	   * @class core.agent
	   *
	   * Object which check platform and agent
	   *
	   * @singleton
	   * @alternateClassName agent
	   */
	  var agent = {
	    isMac: navigator.appVersion.indexOf('Mac') > -1,
	    isMSIE: isMSIE,
	    isEdge: isEdge,
	    isFF: !isEdge && /firefox/i.test(userAgent),
	    isPhantom: /PhantomJS/i.test(userAgent),
	    isWebkit: !isEdge && /webkit/i.test(userAgent),
	    isChrome: !isEdge && /chrome/i.test(userAgent),
	    isSafari: !isEdge && /safari/i.test(userAgent),
	    browserVersion: browserVersion,
	    jqueryVersion: parseFloat($.fn.jquery),
	    isSupportAmd: isSupportAmd,
	    hasCodeMirror: hasCodeMirror,
	    isFontInstalled: isFontInstalled,
	    isW3CRangeSupport: !!document.createRange
	  };


	  var NBSP_CHAR = String.fromCharCode(160);
	  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';

	  /**
	   * @class core.dom
	   *
	   * Dom functions
	   *
	   * @singleton
	   * @alternateClassName dom
	   */
	  var dom = (function () {
	    /**
	     * @method isEditable
	     *
	     * returns whether node is `note-editable` or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isEditable = function (node) {
	      return node && $(node).hasClass('note-editable');
	    };

	    /**
	     * @method isControlSizing
	     *
	     * returns whether node is `note-control-sizing` or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isControlSizing = function (node) {
	      return node && $(node).hasClass('note-control-sizing');
	    };

	    /**
	     * @method makePredByNodeName
	     *
	     * returns predicate which judge whether nodeName is same
	     *
	     * @param {String} nodeName
	     * @return {Function}
	     */
	    var makePredByNodeName = function (nodeName) {
	      nodeName = nodeName.toUpperCase();
	      return function (node) {
	        return node && node.nodeName.toUpperCase() === nodeName;
	      };
	    };

	    /**
	     * @method isText
	     *
	     *
	     *
	     * @param {Node} node
	     * @return {Boolean} true if node's type is text(3)
	     */
	    var isText = function (node) {
	      return node && node.nodeType === 3;
	    };

	    /**
	     * @method isElement
	     *
	     *
	     *
	     * @param {Node} node
	     * @return {Boolean} true if node's type is element(1)
	     */
	    var isElement = function (node) {
	      return node && node.nodeType === 1;
	    };

	    /**
	     * ex) br, col, embed, hr, img, input, ...
	     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
	     */
	    var isVoid = function (node) {
	      return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(node.nodeName.toUpperCase());
	    };

	    var isPara = function (node) {
	      if (isEditable(node)) {
	        return false;
	      }

	      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
	      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
	    };

	    var isHeading = function (node) {
	      return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
	    };

	    var isPre = makePredByNodeName('PRE');

	    var isLi = makePredByNodeName('LI');

	    var isPurePara = function (node) {
	      return isPara(node) && !isLi(node);
	    };

	    var isTable = makePredByNodeName('TABLE');

	    var isData = makePredByNodeName('DATA');

	    var isInline = function (node) {
	      return !isBodyContainer(node) &&
	             !isList(node) &&
	             !isHr(node) &&
	             !isPara(node) &&
	             !isTable(node) &&
	             !isBlockquote(node) &&
	             !isData(node);
	    };

	    var isList = function (node) {
	      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
	    };

	    var isHr = makePredByNodeName('HR');

	    var isCell = function (node) {
	      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
	    };

	    var isBlockquote = makePredByNodeName('BLOCKQUOTE');

	    var isBodyContainer = function (node) {
	      return isCell(node) || isBlockquote(node) || isEditable(node);
	    };

	    var isAnchor = makePredByNodeName('A');

	    var isParaInline = function (node) {
	      return isInline(node) && !!ancestor(node, isPara);
	    };

	    var isBodyInline = function (node) {
	      return isInline(node) && !ancestor(node, isPara);
	    };

	    var isBody = makePredByNodeName('BODY');

	    /**
	     * returns whether nodeB is closest sibling of nodeA
	     *
	     * @param {Node} nodeA
	     * @param {Node} nodeB
	     * @return {Boolean}
	     */
	    var isClosestSibling = function (nodeA, nodeB) {
	      return nodeA.nextSibling === nodeB ||
	             nodeA.previousSibling === nodeB;
	    };

	    /**
	     * returns array of closest siblings with node
	     *
	     * @param {Node} node
	     * @param {function} [pred] - predicate function
	     * @return {Node[]}
	     */
	    var withClosestSiblings = function (node, pred) {
	      pred = pred || func.ok;

	      var siblings = [];
	      if (node.previousSibling && pred(node.previousSibling)) {
	        siblings.push(node.previousSibling);
	      }
	      siblings.push(node);
	      if (node.nextSibling && pred(node.nextSibling)) {
	        siblings.push(node.nextSibling);
	      }
	      return siblings;
	    };

	    /**
	     * blank HTML for cursor position
	     * - [workaround] old IE only works with &nbsp;
	     * - [workaround] IE11 and other browser works with bogus br
	     */
	    var blankHTML = agent.isMSIE && agent.browserVersion < 11 ? '&nbsp;' : '<br>';

	    /**
	     * @method nodeLength
	     *
	     * returns #text's text size or element's childNodes size
	     *
	     * @param {Node} node
	     */
	    var nodeLength = function (node) {
	      if (isText(node)) {
	        return node.nodeValue.length;
	      }
	      
	      if (node) {
	        return node.childNodes.length;
	      }
	      
	      return 0;
	      
	    };

	    /**
	     * returns whether node is empty or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isEmpty = function (node) {
	      var len = nodeLength(node);

	      if (len === 0) {
	        return true;
	      } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
	        // ex) <p><br></p>, <span><br></span>
	        return true;
	      } else if (list.all(node.childNodes, isText) && node.innerHTML === '') {
	        // ex) <p></p>, <span></span>
	        return true;
	      }

	      return false;
	    };

	    /**
	     * padding blankHTML if node is empty (for cursor position)
	     */
	    var paddingBlankHTML = function (node) {
	      if (!isVoid(node) && !nodeLength(node)) {
	        node.innerHTML = blankHTML;
	      }
	    };

	    /**
	     * find nearest ancestor predicate hit
	     *
	     * @param {Node} node
	     * @param {Function} pred - predicate function
	     */
	    var ancestor = function (node, pred) {
	      while (node) {
	        if (pred(node)) { return node; }
	        if (isEditable(node)) { break; }

	        node = node.parentNode;
	      }
	      return null;
	    };

	    /**
	     * find nearest ancestor only single child blood line and predicate hit
	     *
	     * @param {Node} node
	     * @param {Function} pred - predicate function
	     */
	    var singleChildAncestor = function (node, pred) {
	      node = node.parentNode;

	      while (node) {
	        if (nodeLength(node) !== 1) { break; }
	        if (pred(node)) { return node; }
	        if (isEditable(node)) { break; }

	        node = node.parentNode;
	      }
	      return null;
	    };

	    /**
	     * returns new array of ancestor nodes (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [optional] pred - predicate function
	     */
	    var listAncestor = function (node, pred) {
	      pred = pred || func.fail;

	      var ancestors = [];
	      ancestor(node, function (el) {
	        if (!isEditable(el)) {
	          ancestors.push(el);
	        }

	        return pred(el);
	      });
	      return ancestors;
	    };

	    /**
	     * find farthest ancestor predicate hit
	     */
	    var lastAncestor = function (node, pred) {
	      var ancestors = listAncestor(node);
	      return list.last(ancestors.filter(pred));
	    };

	    /**
	     * returns common ancestor node between two nodes.
	     *
	     * @param {Node} nodeA
	     * @param {Node} nodeB
	     */
	    var commonAncestor = function (nodeA, nodeB) {
	      var ancestors = listAncestor(nodeA);
	      for (var n = nodeB; n; n = n.parentNode) {
	        if ($.inArray(n, ancestors) > -1) { return n; }
	      }
	      return null; // difference document area
	    };

	    /**
	     * listing all previous siblings (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [optional] pred - predicate function
	     */
	    var listPrev = function (node, pred) {
	      pred = pred || func.fail;

	      var nodes = [];
	      while (node) {
	        if (pred(node)) { break; }
	        nodes.push(node);
	        node = node.previousSibling;
	      }
	      return nodes;
	    };

	    /**
	     * listing next siblings (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [pred] - predicate function
	     */
	    var listNext = function (node, pred) {
	      pred = pred || func.fail;

	      var nodes = [];
	      while (node) {
	        if (pred(node)) { break; }
	        nodes.push(node);
	        node = node.nextSibling;
	      }
	      return nodes;
	    };

	    /**
	     * listing descendant nodes
	     *
	     * @param {Node} node
	     * @param {Function} [pred] - predicate function
	     */
	    var listDescendant = function (node, pred) {
	      var descendants = [];
	      pred = pred || func.ok;

	      // start DFS(depth first search) with node
	      (function fnWalk(current) {
	        if (node !== current && pred(current)) {
	          descendants.push(current);
	        }
	        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
	          fnWalk(current.childNodes[idx]);
	        }
	      })(node);

	      return descendants;
	    };

	    /**
	     * wrap node with new tag.
	     *
	     * @param {Node} node
	     * @param {Node} tagName of wrapper
	     * @return {Node} - wrapper
	     */
	    var wrap = function (node, wrapperName) {
	      var parent = node.parentNode;
	      var wrapper = $('<' + wrapperName + '>')[0];

	      parent.insertBefore(wrapper, node);
	      wrapper.appendChild(node);

	      return wrapper;
	    };

	    /**
	     * insert node after preceding
	     *
	     * @param {Node} node
	     * @param {Node} preceding - predicate function
	     */
	    var insertAfter = function (node, preceding) {
	      var next = preceding.nextSibling, parent = preceding.parentNode;
	      if (next) {
	        parent.insertBefore(node, next);
	      } else {
	        parent.appendChild(node);
	      }
	      return node;
	    };

	    /**
	     * append elements.
	     *
	     * @param {Node} node
	     * @param {Collection} aChild
	     */
	    var appendChildNodes = function (node, aChild) {
	      $.each(aChild, function (idx, child) {
	        node.appendChild(child);
	      });
	      return node;
	    };

	    /**
	     * returns whether boundaryPoint is left edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isLeftEdgePoint = function (point) {
	      return point.offset === 0;
	    };

	    /**
	     * returns whether boundaryPoint is right edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isRightEdgePoint = function (point) {
	      return point.offset === nodeLength(point.node);
	    };

	    /**
	     * returns whether boundaryPoint is edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isEdgePoint = function (point) {
	      return isLeftEdgePoint(point) || isRightEdgePoint(point);
	    };

	    /**
	     * returns whether node is left edge of ancestor or not.
	     *
	     * @param {Node} node
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isLeftEdgeOf = function (node, ancestor) {
	      while (node && node !== ancestor) {
	        if (position(node) !== 0) {
	          return false;
	        }
	        node = node.parentNode;
	      }

	      return true;
	    };

	    /**
	     * returns whether node is right edge of ancestor or not.
	     *
	     * @param {Node} node
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isRightEdgeOf = function (node, ancestor) {
	      if (!ancestor) {
	        return false;
	      }
	      while (node && node !== ancestor) {
	        if (position(node) !== nodeLength(node.parentNode) - 1) {
	          return false;
	        }
	        node = node.parentNode;
	      }

	      return true;
	    };

	    /**
	     * returns whether point is left edge of ancestor or not.
	     * @param {BoundaryPoint} point
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isLeftEdgePointOf = function (point, ancestor) {
	      return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
	    };

	    /**
	     * returns whether point is right edge of ancestor or not.
	     * @param {BoundaryPoint} point
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isRightEdgePointOf = function (point, ancestor) {
	      return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
	    };

	    /**
	     * returns offset from parent.
	     *
	     * @param {Node} node
	     */
	    var position = function (node) {
	      var offset = 0;
	      while ((node = node.previousSibling)) {
	        offset += 1;
	      }
	      return offset;
	    };

	    var hasChildren = function (node) {
	      return !!(node && node.childNodes && node.childNodes.length);
	    };

	    /**
	     * returns previous boundaryPoint
	     *
	     * @param {BoundaryPoint} point
	     * @param {Boolean} isSkipInnerOffset
	     * @return {BoundaryPoint}
	     */
	    var prevPoint = function (point, isSkipInnerOffset) {
	      var node, offset;

	      if (point.offset === 0) {
	        if (isEditable(point.node)) {
	          return null;
	        }

	        node = point.node.parentNode;
	        offset = position(point.node);
	      } else if (hasChildren(point.node)) {
	        node = point.node.childNodes[point.offset - 1];
	        offset = nodeLength(node);
	      } else {
	        node = point.node;
	        offset = isSkipInnerOffset ? 0 : point.offset - 1;
	      }

	      return {
	        node: node,
	        offset: offset
	      };
	    };

	    /**
	     * returns next boundaryPoint
	     *
	     * @param {BoundaryPoint} point
	     * @param {Boolean} isSkipInnerOffset
	     * @return {BoundaryPoint}
	     */
	    var nextPoint = function (point, isSkipInnerOffset) {
	      var node, offset;

	      if (nodeLength(point.node) === point.offset) {
	        if (isEditable(point.node)) {
	          return null;
	        }

	        node = point.node.parentNode;
	        offset = position(point.node) + 1;
	      } else if (hasChildren(point.node)) {
	        node = point.node.childNodes[point.offset];
	        offset = 0;
	      } else {
	        node = point.node;
	        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
	      }

	      return {
	        node: node,
	        offset: offset
	      };
	    };

	    /**
	     * returns whether pointA and pointB is same or not.
	     *
	     * @param {BoundaryPoint} pointA
	     * @param {BoundaryPoint} pointB
	     * @return {Boolean}
	     */
	    var isSamePoint = function (pointA, pointB) {
	      return pointA.node === pointB.node && pointA.offset === pointB.offset;
	    };

	    /**
	     * returns whether point is visible (can set cursor) or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isVisiblePoint = function (point) {
	      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
	        return true;
	      }

	      var leftNode = point.node.childNodes[point.offset - 1];
	      var rightNode = point.node.childNodes[point.offset];
	      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
	        return true;
	      }

	      return false;
	    };

	    /**
	     * @method prevPointUtil
	     *
	     * @param {BoundaryPoint} point
	     * @param {Function} pred
	     * @return {BoundaryPoint}
	     */
	    var prevPointUntil = function (point, pred) {
	      while (point) {
	        if (pred(point)) {
	          return point;
	        }

	        point = prevPoint(point);
	      }

	      return null;
	    };

	    /**
	     * @method nextPointUntil
	     *
	     * @param {BoundaryPoint} point
	     * @param {Function} pred
	     * @return {BoundaryPoint}
	     */
	    var nextPointUntil = function (point, pred) {
	      while (point) {
	        if (pred(point)) {
	          return point;
	        }

	        point = nextPoint(point);
	      }

	      return null;
	    };

	    /**
	     * returns whether point has character or not.
	     *
	     * @param {Point} point
	     * @return {Boolean}
	     */
	    var isCharPoint = function (point) {
	      if (!isText(point.node)) {
	        return false;
	      }

	      var ch = point.node.nodeValue.charAt(point.offset - 1);
	      return ch && (ch !== ' ' && ch !== NBSP_CHAR);
	    };

	    /**
	     * @method walkPoint
	     *
	     * @param {BoundaryPoint} startPoint
	     * @param {BoundaryPoint} endPoint
	     * @param {Function} handler
	     * @param {Boolean} isSkipInnerOffset
	     */
	    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {
	      var point = startPoint;

	      while (point) {
	        handler(point);

	        if (isSamePoint(point, endPoint)) {
	          break;
	        }

	        var isSkipOffset = isSkipInnerOffset &&
	                           startPoint.node !== point.node &&
	                           endPoint.node !== point.node;
	        point = nextPoint(point, isSkipOffset);
	      }
	    };

	    /**
	     * @method makeOffsetPath
	     *
	     * return offsetPath(array of offset) from ancestor
	     *
	     * @param {Node} ancestor - ancestor node
	     * @param {Node} node
	     */
	    var makeOffsetPath = function (ancestor, node) {
	      var ancestors = listAncestor(node, func.eq(ancestor));
	      return ancestors.map(position).reverse();
	    };

	    /**
	     * @method fromOffsetPath
	     *
	     * return element from offsetPath(array of offset)
	     *
	     * @param {Node} ancestor - ancestor node
	     * @param {array} offsets - offsetPath
	     */
	    var fromOffsetPath = function (ancestor, offsets) {
	      var current = ancestor;
	      for (var i = 0, len = offsets.length; i < len; i++) {
	        if (current.childNodes.length <= offsets[i]) {
	          current = current.childNodes[current.childNodes.length - 1];
	        } else {
	          current = current.childNodes[offsets[i]];
	        }
	      }
	      return current;
	    };

	    /**
	     * @method splitNode
	     *
	     * split element or #text
	     *
	     * @param {BoundaryPoint} point
	     * @param {Object} [options]
	     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
	     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
	     * @return {Node} right node of boundaryPoint
	     */
	    var splitNode = function (point, options) {
	      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
	      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;

	      // edge case
	      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
	        if (isLeftEdgePoint(point)) {
	          return point.node;
	        } else if (isRightEdgePoint(point)) {
	          return point.node.nextSibling;
	        }
	      }

	      // split #text
	      if (isText(point.node)) {
	        return point.node.splitText(point.offset);
	      } else {
	        var childNode = point.node.childNodes[point.offset];
	        var clone = insertAfter(point.node.cloneNode(false), point.node);
	        appendChildNodes(clone, listNext(childNode));

	        if (!isSkipPaddingBlankHTML) {
	          paddingBlankHTML(point.node);
	          paddingBlankHTML(clone);
	        }

	        return clone;
	      }
	    };

	    /**
	     * @method splitTree
	     *
	     * split tree by point
	     *
	     * @param {Node} root - split root
	     * @param {BoundaryPoint} point
	     * @param {Object} [options]
	     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
	     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
	     * @return {Node} right node of boundaryPoint
	     */
	    var splitTree = function (root, point, options) {
	      // ex) [#text, <span>, <p>]
	      var ancestors = listAncestor(point.node, func.eq(root));

	      if (!ancestors.length) {
	        return null;
	      } else if (ancestors.length === 1) {
	        return splitNode(point, options);
	      }

	      return ancestors.reduce(function (node, parent) {
	        if (node === point.node) {
	          node = splitNode(point, options);
	        }

	        return splitNode({
	          node: parent,
	          offset: node ? dom.position(node) : nodeLength(parent)
	        }, options);
	      });
	    };

	    /**
	     * split point
	     *
	     * @param {Point} point
	     * @param {Boolean} isInline
	     * @return {Object}
	     */
	    var splitPoint = function (point, isInline) {
	      // find splitRoot, container
	      //  - inline: splitRoot is a child of paragraph
	      //  - block: splitRoot is a child of bodyContainer
	      var pred = isInline ? isPara : isBodyContainer;
	      var ancestors = listAncestor(point.node, pred);
	      var topAncestor = list.last(ancestors) || point.node;

	      var splitRoot, container;
	      if (pred(topAncestor)) {
	        splitRoot = ancestors[ancestors.length - 2];
	        container = topAncestor;
	      } else {
	        splitRoot = topAncestor;
	        container = splitRoot.parentNode;
	      }

	      // if splitRoot is exists, split with splitTree
	      var pivot = splitRoot && splitTree(splitRoot, point, {
	        isSkipPaddingBlankHTML: isInline,
	        isNotSplitEdgePoint: isInline
	      });

	      // if container is point.node, find pivot with point.offset
	      if (!pivot && container === point.node) {
	        pivot = point.node.childNodes[point.offset];
	      }

	      return {
	        rightNode: pivot,
	        container: container
	      };
	    };

	    var create = function (nodeName) {
	      return document.createElement(nodeName);
	    };

	    var createText = function (text) {
	      return document.createTextNode(text);
	    };

	    /**
	     * @method remove
	     *
	     * remove node, (isRemoveChild: remove child or not)
	     *
	     * @param {Node} node
	     * @param {Boolean} isRemoveChild
	     */
	    var remove = function (node, isRemoveChild) {
	      if (!node || !node.parentNode) { return; }
	      if (node.removeNode) { return node.removeNode(isRemoveChild); }

	      var parent = node.parentNode;
	      if (!isRemoveChild) {
	        var nodes = [];
	        var i, len;
	        for (i = 0, len = node.childNodes.length; i < len; i++) {
	          nodes.push(node.childNodes[i]);
	        }

	        for (i = 0, len = nodes.length; i < len; i++) {
	          parent.insertBefore(nodes[i], node);
	        }
	      }

	      parent.removeChild(node);
	    };

	    /**
	     * @method removeWhile
	     *
	     * @param {Node} node
	     * @param {Function} pred
	     */
	    var removeWhile = function (node, pred) {
	      while (node) {
	        if (isEditable(node) || !pred(node)) {
	          break;
	        }

	        var parent = node.parentNode;
	        remove(node);
	        node = parent;
	      }
	    };

	    /**
	     * @method replace
	     *
	     * replace node with provided nodeName
	     *
	     * @param {Node} node
	     * @param {String} nodeName
	     * @return {Node} - new node
	     */
	    var replace = function (node, nodeName) {
	      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
	        return node;
	      }

	      var newNode = create(nodeName);

	      if (node.style.cssText) {
	        newNode.style.cssText = node.style.cssText;
	      }

	      appendChildNodes(newNode, list.from(node.childNodes));
	      insertAfter(newNode, node);
	      remove(node);

	      return newNode;
	    };

	    var isTextarea = makePredByNodeName('TEXTAREA');

	    /**
	     * @param {jQuery} $node
	     * @param {Boolean} [stripLinebreaks] - default: false
	     */
	    var value = function ($node, stripLinebreaks) {
	      var val = isTextarea($node[0]) ? $node.val() : $node.html();
	      if (stripLinebreaks) {
	        return val.replace(/[\n\r]/g, '');
	      }
	      return val;
	    };

	    /**
	     * @method html
	     *
	     * get the HTML contents of node
	     *
	     * @param {jQuery} $node
	     * @param {Boolean} [isNewlineOnBlock]
	     */
	    var html = function ($node, isNewlineOnBlock) {
	      var markup = value($node);

	      if (isNewlineOnBlock) {
	        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
	        markup = markup.replace(regexTag, function (match, endSlash, name) {
	          name = name.toUpperCase();
	          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
	                                       !!endSlash;
	          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);

	          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
	        });
	        markup = $.trim(markup);
	      }

	      return markup;
	    };

	    var posFromPlaceholder = function (placeholder) {
	      var $placeholder = $(placeholder);
	      var pos = $placeholder.offset();
	      var height = $placeholder.outerHeight(true); // include margin

	      return {
	        left: pos.left,
	        top: pos.top + height
	      };
	    };

	    var attachEvents = function ($node, events) {
	      Object.keys(events).forEach(function (key) {
	        $node.on(key, events[key]);
	      });
	    };

	    var detachEvents = function ($node, events) {
	      Object.keys(events).forEach(function (key) {
	        $node.off(key, events[key]);
	      });
	    };

	    return {
	      /** @property {String} NBSP_CHAR */
	      NBSP_CHAR: NBSP_CHAR,
	      /** @property {String} ZERO_WIDTH_NBSP_CHAR */
	      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
	      /** @property {String} blank */
	      blank: blankHTML,
	      /** @property {String} emptyPara */
	      emptyPara: '<p>' + blankHTML + '</p>',
	      makePredByNodeName: makePredByNodeName,
	      isEditable: isEditable,
	      isControlSizing: isControlSizing,
	      isText: isText,
	      isElement: isElement,
	      isVoid: isVoid,
	      isPara: isPara,
	      isPurePara: isPurePara,
	      isHeading: isHeading,
	      isInline: isInline,
	      isBlock: func.not(isInline),
	      isBodyInline: isBodyInline,
	      isBody: isBody,
	      isParaInline: isParaInline,
	      isPre: isPre,
	      isList: isList,
	      isTable: isTable,
	      isData: isData,
	      isCell: isCell,
	      isBlockquote: isBlockquote,
	      isBodyContainer: isBodyContainer,
	      isAnchor: isAnchor,
	      isDiv: makePredByNodeName('DIV'),
	      isLi: isLi,
	      isBR: makePredByNodeName('BR'),
	      isSpan: makePredByNodeName('SPAN'),
	      isB: makePredByNodeName('B'),
	      isU: makePredByNodeName('U'),
	      isS: makePredByNodeName('S'),
	      isI: makePredByNodeName('I'),
	      isImg: makePredByNodeName('IMG'),
	      isTextarea: isTextarea,
	      isEmpty: isEmpty,
	      isEmptyAnchor: func.and(isAnchor, isEmpty),
	      isClosestSibling: isClosestSibling,
	      withClosestSiblings: withClosestSiblings,
	      nodeLength: nodeLength,
	      isLeftEdgePoint: isLeftEdgePoint,
	      isRightEdgePoint: isRightEdgePoint,
	      isEdgePoint: isEdgePoint,
	      isLeftEdgeOf: isLeftEdgeOf,
	      isRightEdgeOf: isRightEdgeOf,
	      isLeftEdgePointOf: isLeftEdgePointOf,
	      isRightEdgePointOf: isRightEdgePointOf,
	      prevPoint: prevPoint,
	      nextPoint: nextPoint,
	      isSamePoint: isSamePoint,
	      isVisiblePoint: isVisiblePoint,
	      prevPointUntil: prevPointUntil,
	      nextPointUntil: nextPointUntil,
	      isCharPoint: isCharPoint,
	      walkPoint: walkPoint,
	      ancestor: ancestor,
	      singleChildAncestor: singleChildAncestor,
	      listAncestor: listAncestor,
	      lastAncestor: lastAncestor,
	      listNext: listNext,
	      listPrev: listPrev,
	      listDescendant: listDescendant,
	      commonAncestor: commonAncestor,
	      wrap: wrap,
	      insertAfter: insertAfter,
	      appendChildNodes: appendChildNodes,
	      position: position,
	      hasChildren: hasChildren,
	      makeOffsetPath: makeOffsetPath,
	      fromOffsetPath: fromOffsetPath,
	      splitTree: splitTree,
	      splitPoint: splitPoint,
	      create: create,
	      createText: createText,
	      remove: remove,
	      removeWhile: removeWhile,
	      replace: replace,
	      html: html,
	      value: value,
	      posFromPlaceholder: posFromPlaceholder,
	      attachEvents: attachEvents,
	      detachEvents: detachEvents
	    };
	  })();

	  /**
	   * @param {jQuery} $note
	   * @param {Object} options
	   * @return {Context}
	   */
	  var Context = function ($note, options) {
	    var self = this;

	    var ui = $.summernote.ui;
	    this.memos = {};
	    this.modules = {};
	    this.layoutInfo = {};
	    this.options = options;

	    /**
	     * create layout and initialize modules and other resources
	     */
	    this.initialize = function () {
	      this.layoutInfo = ui.createLayout($note, options);
	      this._initialize();
	      $note.hide();
	      return this;
	    };

	    /**
	     * destroy modules and other resources and remove layout
	     */
	    this.destroy = function () {
	      this._destroy();
	      $note.removeData('summernote');
	      ui.removeLayout($note, this.layoutInfo);
	    };

	    /**
	     * destory modules and other resources and initialize it again
	     */
	    this.reset = function () {
	      var disabled = self.isDisabled();
	      this.code(dom.emptyPara);
	      this._destroy();
	      this._initialize();

	      if (disabled) {
	        self.disable();
	      }
	    };

	    this._initialize = function () {
	      // add optional buttons
	      var buttons = $.extend({}, this.options.buttons);
	      Object.keys(buttons).forEach(function (key) {
	        self.memo('button.' + key, buttons[key]);
	      });

	      var modules = $.extend({}, this.options.modules, $.summernote.plugins || {});

	      // add and initialize modules
	      Object.keys(modules).forEach(function (key) {
	        self.module(key, modules[key], true);
	      });

	      Object.keys(this.modules).forEach(function (key) {
	        self.initializeModule(key);
	      });
	    };

	    this._destroy = function () {
	      // destroy modules with reversed order
	      Object.keys(this.modules).reverse().forEach(function (key) {
	        self.removeModule(key);
	      });

	      Object.keys(this.memos).forEach(function (key) {
	        self.removeMemo(key);
	      });
	    };

	    this.code = function (html) {
	      var isActivated = this.invoke('codeview.isActivated');

	      if (html === undefined) {
	        this.invoke('codeview.sync');
	        return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
	      } else {
	        if (isActivated) {
	          this.layoutInfo.codable.val(html);
	        } else {
	          this.layoutInfo.editable.html(html);
	        }
	        $note.val(html);
	        this.triggerEvent('change', html);
	      }
	    };

	    this.isDisabled = function () {
	      return this.layoutInfo.editable.attr('contenteditable') === 'false';
	    };

	    this.enable = function () {
	      this.layoutInfo.editable.attr('contenteditable', true);
	      this.invoke('toolbar.activate', true);
	    };

	    this.disable = function () {
	      // close codeview if codeview is opend
	      if (this.invoke('codeview.isActivated')) {
	        this.invoke('codeview.deactivate');
	      }
	      this.layoutInfo.editable.attr('contenteditable', false);
	      this.invoke('toolbar.deactivate', true);
	    };

	    this.triggerEvent = function () {
	      var namespace = list.head(arguments);
	      var args = list.tail(list.from(arguments));

	      var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
	      if (callback) {
	        callback.apply($note[0], args);
	      }
	      $note.trigger('summernote.' + namespace, args);
	    };

	    this.initializeModule = function (key) {
	      var module = this.modules[key];
	      module.shouldInitialize = module.shouldInitialize || func.ok;
	      if (!module.shouldInitialize()) {
	        return;
	      }

	      // initialize module
	      if (module.initialize) {
	        module.initialize();
	      }

	      // attach events
	      if (module.events) {
	        dom.attachEvents($note, module.events);
	      }
	    };

	    this.module = function (key, ModuleClass, withoutIntialize) {
	      if (arguments.length === 1) {
	        return this.modules[key];
	      }

	      this.modules[key] = new ModuleClass(this);

	      if (!withoutIntialize) {
	        this.initializeModule(key);
	      }
	    };

	    this.removeModule = function (key) {
	      var module = this.modules[key];
	      if (module.shouldInitialize()) {
	        if (module.events) {
	          dom.detachEvents($note, module.events);
	        }

	        if (module.destroy) {
	          module.destroy();
	        }
	      }

	      delete this.modules[key];
	    };

	    this.memo = function (key, obj) {
	      if (arguments.length === 1) {
	        return this.memos[key];
	      }
	      this.memos[key] = obj;
	    };

	    this.removeMemo = function (key) {
	      if (this.memos[key] && this.memos[key].destroy) {
	        this.memos[key].destroy();
	      }

	      delete this.memos[key];
	    };

	    this.createInvokeHandler = function (namespace, value) {
	      return function (event) {
	        event.preventDefault();
	        self.invoke(namespace, value || $(event.target).closest('[data-value]').data('value'));
	      };
	    };

	    this.invoke = function () {
	      var namespace = list.head(arguments);
	      var args = list.tail(list.from(arguments));

	      var splits = namespace.split('.');
	      var hasSeparator = splits.length > 1;
	      var moduleName = hasSeparator && list.head(splits);
	      var methodName = hasSeparator ? list.last(splits) : list.head(splits);

	      var module = this.modules[moduleName || 'editor'];
	      if (!moduleName && this[methodName]) {
	        return this[methodName].apply(this, args);
	      } else if (module && module[methodName] && module.shouldInitialize()) {
	        return module[methodName].apply(module, args);
	      }
	    };

	    return this.initialize();
	  };

	  $.fn.extend({
	    /**
	     * Summernote API
	     *
	     * @param {Object|String}
	     * @return {this}
	     */
	    summernote: function () {
	      var type = $.type(list.head(arguments));
	      var isExternalAPICalled = type === 'string';
	      var hasInitOptions = type === 'object';

	      var options = hasInitOptions ? list.head(arguments) : {};

	      options = $.extend({}, $.summernote.options, options);
	      options.langInfo = $.extend(true, {}, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);
	      options.icons = $.extend(true, {}, $.summernote.options.icons, options.icons);

	      this.each(function (idx, note) {
	        var $note = $(note);
	        if (!$note.data('summernote')) {
	          var context = new Context($note, options);
	          $note.data('summernote', context);
	          $note.data('summernote').triggerEvent('init', context.layoutInfo);
	        }
	      });

	      var $note = this.first();
	      if ($note.length) {
	        var context = $note.data('summernote');
	        if (isExternalAPICalled) {
	          return context.invoke.apply(context, list.from(arguments));
	        } else if (options.focus) {
	          context.invoke('editor.focus');
	        }
	      }

	      return this;
	    }
	  });


	  var Renderer = function (markup, children, options, callback) {
	    this.render = function ($parent) {
	      var $node = $(markup);

	      if (options && options.contents) {
	        $node.html(options.contents);
	      }

	      if (options && options.className) {
	        $node.addClass(options.className);
	      }

	      if (options && options.data) {
	        $.each(options.data, function (k, v) {
	          $node.attr('data-' + k, v);
	        });
	      }

	      if (options && options.click) {
	        $node.on('click', options.click);
	      }

	      if (children) {
	        var $container = $node.find('.note-children-container');
	        children.forEach(function (child) {
	          child.render($container.length ? $container : $node);
	        });
	      }

	      if (callback) {
	        callback($node, options);
	      }

	      if (options && options.callback) {
	        options.callback($node);
	      }

	      if ($parent) {
	        $parent.append($node);
	      }

	      return $node;
	    };
	  };

	  var renderer = {
	    create: function (markup, callback) {
	      return function () {
	        var children = $.isArray(arguments[0]) ? arguments[0] : [];
	        var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
	        if (options && options.children) {
	          children = options.children;
	        }
	        return new Renderer(markup, children, options, callback);
	      };
	    }
	  };

	  var editor = renderer.create('<div class="note-editor note-frame panel panel-default"/>');
	  var toolbar = renderer.create('<div class="note-toolbar panel-heading"/>');
	  var editingArea = renderer.create('<div class="note-editing-area"/>');
	  var codable = renderer.create('<textarea class="note-codable"/>');
	  var editable = renderer.create('<div class="note-editable panel-body" contentEditable="true"/>');
	  var statusbar = renderer.create([
	    '<div class="note-statusbar">',
	    '  <div class="note-resizebar">',
	    '    <div class="note-icon-bar"/>',
	    '    <div class="note-icon-bar"/>',
	    '    <div class="note-icon-bar"/>',
	    '  </div>',
	    '</div>'
	  ].join(''));

	  var airEditor = renderer.create('<div class="note-editor"/>');
	  var airEditable = renderer.create('<div class="note-editable" contentEditable="true"/>');

	  var buttonGroup = renderer.create('<div class="note-btn-group btn-group">');
	  var button = renderer.create('<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1">', function ($node, options) {
	    if (options && options.tooltip) {
	      $node.attr({
	        title: options.tooltip
	      }).tooltip({
	        container: 'body',
	        trigger: 'hover',
	        placement: 'bottom'
	      });
	    }
	  });

	  var dropdown = renderer.create('<div class="dropdown-menu">', function ($node, options) {
	    var markup = $.isArray(options.items) ? options.items.map(function (item) {
	      var value = (typeof item === 'string') ? item : (item.value || '');
	      var content = options.template ? options.template(item) : item;
	      return '<li><a href="#" data-value="' + value + '">' + content + '</a></li>';
	    }).join('') : options.items;

	    $node.html(markup);
	  });

	  var dropdownCheck = renderer.create('<div class="dropdown-menu note-check">', function ($node, options) {
	    var markup = $.isArray(options.items) ? options.items.map(function (item) {
	      var value = (typeof item === 'string') ? item : (item.value || '');
	      var content = options.template ? options.template(item) : item;
	      return '<li><a href="#" data-value="' + value + '">' + icon(options.checkClassName) + ' ' + content + '</a></li>';
	    }).join('') : options.items;
	    $node.html(markup);
	  });

	  var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
	    var contents = [];
	    for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
	      var eventName = options.eventName;
	      var colors = options.colors[row];
	      var buttons = [];
	      for (var col = 0, colSize = colors.length; col < colSize; col++) {
	        var color = colors[col];
	        buttons.push([
	          '<button type="button" class="note-color-btn"',
	          'style="background-color:', color, '" ',
	          'data-event="', eventName, '" ',
	          'data-value="', color, '" ',
	          'title="', color, '" ',
	          'data-toggle="button" tabindex="-1"></button>'
	        ].join(''));
	      }
	      contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
	    }
	    $node.html(contents.join(''));

	    $node.find('.note-color-btn').tooltip({
	      container: 'body',
	      trigger: 'hover',
	      placement: 'bottom'
	    });
	  });

	  var dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function ($node, options) {
	    if (options.fade) {
	      $node.addClass('fade');
	    }
	    $node.html([
	      '<div class="modal-dialog">',
	      '  <div class="modal-content">',
	      (options.title ?
	      '    <div class="modal-header">' +
	      '      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
	      '      <h4 class="modal-title">' + options.title + '</h4>' +
	      '    </div>' : ''
	      ),
	      '    <div class="modal-body">' + options.body + '</div>',
	      (options.footer ?
	      '    <div class="modal-footer">' + options.footer + '</div>' : ''
	      ),
	      '  </div>',
	      '</div>'
	    ].join(''));
	  });

	  var popover = renderer.create([
	    '<div class="note-popover popover in">',
	    '  <div class="arrow"/>',
	    '  <div class="popover-content note-children-container"/>',
	    '</div>'
	  ].join(''), function ($node, options) {
	    var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';

	    $node.addClass(direction);

	    if (options.hideArrow) {
	      $node.find('.arrow').hide();
	    }
	  });

	  var icon = function (iconClassName, tagName) {
	    tagName = tagName || 'i';
	    return '<' + tagName + ' class="' + iconClassName + '"/>';
	  };

	  var ui = {
	    editor: editor,
	    toolbar: toolbar,
	    editingArea: editingArea,
	    codable: codable,
	    editable: editable,
	    statusbar: statusbar,
	    airEditor: airEditor,
	    airEditable: airEditable,
	    buttonGroup: buttonGroup,
	    button: button,
	    dropdown: dropdown,
	    dropdownCheck: dropdownCheck,
	    palette: palette,
	    dialog: dialog,
	    popover: popover,
	    icon: icon,

	    toggleBtn: function ($btn, isEnable) {
	      $btn.toggleClass('disabled', !isEnable);
	      $btn.attr('disabled', !isEnable);
	    },

	    toggleBtnActive: function ($btn, isActive) {
	      $btn.toggleClass('active', isActive);
	    },

	    onDialogShown: function ($dialog, handler) {
	      $dialog.one('shown.bs.modal', handler);
	    },

	    onDialogHidden: function ($dialog, handler) {
	      $dialog.one('hidden.bs.modal', handler);
	    },

	    showDialog: function ($dialog) {
	      $dialog.modal('show');
	    },

	    hideDialog: function ($dialog) {
	      $dialog.modal('hide');
	    },

	    createLayout: function ($note, options) {
	      var $editor = (options.airMode ? ui.airEditor([
	        ui.editingArea([
	          ui.airEditable()
	        ])
	      ]) : ui.editor([
	        ui.toolbar(),
	        ui.editingArea([
	          ui.codable(),
	          ui.editable()
	        ]),
	        ui.statusbar()
	      ])).render();

	      $editor.insertAfter($note);

	      return {
	        note: $note,
	        editor: $editor,
	        toolbar: $editor.find('.note-toolbar'),
	        editingArea: $editor.find('.note-editing-area'),
	        editable: $editor.find('.note-editable'),
	        codable: $editor.find('.note-codable'),
	        statusbar: $editor.find('.note-statusbar')
	      };
	    },

	    removeLayout: function ($note, layoutInfo) {
	      $note.html(layoutInfo.editable.html());
	      layoutInfo.editor.remove();
	      $note.show();
	    }
	  };

	  $.summernote = $.summernote || {
	    lang: {}
	  };

	  $.extend($.summernote.lang, {
	    'en-US': {
	      font: {
	        bold: 'Bold',
	        italic: 'Italic',
	        underline: 'Underline',
	        clear: 'Remove Font Style',
	        height: 'Line Height',
	        name: 'Font Family',
	        strikethrough: 'Strikethrough',
	        subscript: 'Subscript',
	        superscript: 'Superscript',
	        size: 'Font Size'
	      },
	      image: {
	        image: 'Picture',
	        insert: 'Insert Image',
	        resizeFull: 'Resize Full',
	        resizeHalf: 'Resize Half',
	        resizeQuarter: 'Resize Quarter',
	        floatLeft: 'Float Left',
	        floatRight: 'Float Right',
	        floatNone: 'Float None',
	        shapeRounded: 'Shape: Rounded',
	        shapeCircle: 'Shape: Circle',
	        shapeThumbnail: 'Shape: Thumbnail',
	        shapeNone: 'Shape: None',
	        dragImageHere: 'Drag image or text here',
	        dropImage: 'Drop image or Text',
	        selectFromFiles: 'Select from files',
	        maximumFileSize: 'Maximum file size',
	        maximumFileSizeError: 'Maximum file size exceeded.',
	        url: 'Image URL',
	        remove: 'Remove Image'
	      },
	      video: {
	        video: 'Video',
	        videoLink: 'Video Link',
	        insert: 'Insert Video',
	        url: 'Video URL?',
	        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
	      },
	      link: {
	        link: 'Link',
	        insert: 'Insert Link',
	        unlink: 'Unlink',
	        edit: 'Edit',
	        textToDisplay: 'Text to display',
	        url: 'To what URL should this link go?',
	        openInNewWindow: 'Open in new window'
	      },
	      table: {
	        table: 'Table'
	      },
	      hr: {
	        insert: 'Insert Horizontal Rule'
	      },
	      style: {
	        style: 'Style',
	        normal: 'Normal',
	        blockquote: 'Quote',
	        pre: 'Code',
	        h1: 'Header 1',
	        h2: 'Header 2',
	        h3: 'Header 3',
	        h4: 'Header 4',
	        h5: 'Header 5',
	        h6: 'Header 6'
	      },
	      lists: {
	        unordered: 'Unordered list',
	        ordered: 'Ordered list'
	      },
	      options: {
	        help: 'Help',
	        fullscreen: 'Full Screen',
	        codeview: 'Code View'
	      },
	      paragraph: {
	        paragraph: 'Paragraph',
	        outdent: 'Outdent',
	        indent: 'Indent',
	        left: 'Align left',
	        center: 'Align center',
	        right: 'Align right',
	        justify: 'Justify full'
	      },
	      color: {
	        recent: 'Recent Color',
	        more: 'More Color',
	        background: 'Background Color',
	        foreground: 'Foreground Color',
	        transparent: 'Transparent',
	        setTransparent: 'Set transparent',
	        reset: 'Reset',
	        resetToDefault: 'Reset to default'
	      },
	      shortcut: {
	        shortcuts: 'Keyboard shortcuts',
	        close: 'Close',
	        textFormatting: 'Text formatting',
	        action: 'Action',
	        paragraphFormatting: 'Paragraph formatting',
	        documentStyle: 'Document Style',
	        extraKeys: 'Extra keys'
	      },
	      help: {
	        'insertParagraph': 'Insert Paragraph',
	        'undo': 'Undoes the last command',
	        'redo': 'Redoes the last command',
	        'tab': 'Tab',
	        'untab': 'Untab',
	        'bold': 'Set a bold style',
	        'italic': 'Set a italic style',
	        'underline': 'Set a underline style',
	        'strikethrough': 'Set a strikethrough style',
	        'removeFormat': 'Clean a style',
	        'justifyLeft': 'Set left align',
	        'justifyCenter': 'Set center align',
	        'justifyRight': 'Set right align',
	        'justifyFull': 'Set full align',
	        'insertUnorderedList': 'Toggle unordered list',
	        'insertOrderedList': 'Toggle ordered list',
	        'outdent': 'Outdent on current paragraph',
	        'indent': 'Indent on current paragraph',
	        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
	        'formatH1': 'Change current block\'s format as H1',
	        'formatH2': 'Change current block\'s format as H2',
	        'formatH3': 'Change current block\'s format as H3',
	        'formatH4': 'Change current block\'s format as H4',
	        'formatH5': 'Change current block\'s format as H5',
	        'formatH6': 'Change current block\'s format as H6',
	        'insertHorizontalRule': 'Insert horizontal rule',
	        'linkDialog.show': 'Show Link Dialog'
	      },
	      history: {
	        undo: 'Undo',
	        redo: 'Redo'
	      },
	      specialChar: {
	        specialChar: 'SPECIAL CHARACTERS',
	        select: 'Select Special characters'
	      }
	    }
	  });


	  /**
	   * @class core.key
	   *
	   * Object for keycodes.
	   *
	   * @singleton
	   * @alternateClassName key
	   */
	  var key = (function () {
	    var keyMap = {
	      'BACKSPACE': 8,
	      'TAB': 9,
	      'ENTER': 13,
	      'SPACE': 32,

	      // Arrow
	      'LEFT': 37,
	      'UP': 38,
	      'RIGHT': 39,
	      'DOWN': 40,

	      // Number: 0-9
	      'NUM0': 48,
	      'NUM1': 49,
	      'NUM2': 50,
	      'NUM3': 51,
	      'NUM4': 52,
	      'NUM5': 53,
	      'NUM6': 54,
	      'NUM7': 55,
	      'NUM8': 56,

	      // Alphabet: a-z
	      'B': 66,
	      'E': 69,
	      'I': 73,
	      'J': 74,
	      'K': 75,
	      'L': 76,
	      'R': 82,
	      'S': 83,
	      'U': 85,
	      'V': 86,
	      'Y': 89,
	      'Z': 90,

	      'SLASH': 191,
	      'LEFTBRACKET': 219,
	      'BACKSLASH': 220,
	      'RIGHTBRACKET': 221
	    };

	    return {
	      /**
	       * @method isEdit
	       *
	       * @param {Number} keyCode
	       * @return {Boolean}
	       */
	      isEdit: function (keyCode) {
	        return list.contains([
	          keyMap.BACKSPACE,
	          keyMap.TAB,
	          keyMap.ENTER,
	          keyMap.SPACE
	        ], keyCode);
	      },
	      /**
	       * @method isMove
	       *
	       * @param {Number} keyCode
	       * @return {Boolean}
	       */
	      isMove: function (keyCode) {
	        return list.contains([
	          keyMap.LEFT,
	          keyMap.UP,
	          keyMap.RIGHT,
	          keyMap.DOWN
	        ], keyCode);
	      },
	      /**
	       * @property {Object} nameFromCode
	       * @property {String} nameFromCode.8 "BACKSPACE"
	       */
	      nameFromCode: func.invertObject(keyMap),
	      code: keyMap
	    };
	  })();

	  var range = (function () {

	    /**
	     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
	     *
	     * @param {TextRange} textRange
	     * @param {Boolean} isStart
	     * @return {BoundaryPoint}
	     *
	     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
	     */
	    var textRangeToPoint = function (textRange, isStart) {
	      var container = textRange.parentElement(), offset;
	  
	      var tester = document.body.createTextRange(), prevContainer;
	      var childNodes = list.from(container.childNodes);
	      for (offset = 0; offset < childNodes.length; offset++) {
	        if (dom.isText(childNodes[offset])) {
	          continue;
	        }
	        tester.moveToElementText(childNodes[offset]);
	        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
	          break;
	        }
	        prevContainer = childNodes[offset];
	      }
	  
	      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
	        var textRangeStart = document.body.createTextRange(), curTextNode = null;
	        textRangeStart.moveToElementText(prevContainer || container);
	        textRangeStart.collapse(!prevContainer);
	        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
	  
	        var pointTester = textRange.duplicate();
	        pointTester.setEndPoint('StartToStart', textRangeStart);
	        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
	  
	        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
	          textCount -= curTextNode.nodeValue.length;
	          curTextNode = curTextNode.nextSibling;
	        }
	  
	        /* jshint ignore:start */
	        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack
	        /* jshint ignore:end */
	  
	        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
	            textCount === curTextNode.nodeValue.length) {
	          textCount -= curTextNode.nodeValue.length;
	          curTextNode = curTextNode.nextSibling;
	        }
	  
	        container = curTextNode;
	        offset = textCount;
	      }
	  
	      return {
	        cont: container,
	        offset: offset
	      };
	    };
	    
	    /**
	     * return TextRange from boundary point (inspired by google closure-library)
	     * @param {BoundaryPoint} point
	     * @return {TextRange}
	     */
	    var pointToTextRange = function (point) {
	      var textRangeInfo = function (container, offset) {
	        var node, isCollapseToStart;
	  
	        if (dom.isText(container)) {
	          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
	          var prevContainer = list.last(prevTextNodes).previousSibling;
	          node =  prevContainer || container.parentNode;
	          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);
	          isCollapseToStart = !prevContainer;
	        } else {
	          node = container.childNodes[offset] || container;
	          if (dom.isText(node)) {
	            return textRangeInfo(node, 0);
	          }
	  
	          offset = 0;
	          isCollapseToStart = false;
	        }
	  
	        return {
	          node: node,
	          collapseToStart: isCollapseToStart,
	          offset: offset
	        };
	      };
	  
	      var textRange = document.body.createTextRange();
	      var info = textRangeInfo(point.node, point.offset);
	  
	      textRange.moveToElementText(info.node);
	      textRange.collapse(info.collapseToStart);
	      textRange.moveStart('character', info.offset);
	      return textRange;
	    };
	    
	    /**
	     * Wrapped Range
	     *
	     * @constructor
	     * @param {Node} sc - start container
	     * @param {Number} so - start offset
	     * @param {Node} ec - end container
	     * @param {Number} eo - end offset
	     */
	    var WrappedRange = function (sc, so, ec, eo) {
	      this.sc = sc;
	      this.so = so;
	      this.ec = ec;
	      this.eo = eo;
	  
	      // nativeRange: get nativeRange from sc, so, ec, eo
	      var nativeRange = function () {
	        if (agent.isW3CRangeSupport) {
	          var w3cRange = document.createRange();
	          w3cRange.setStart(sc, so);
	          w3cRange.setEnd(ec, eo);

	          return w3cRange;
	        } else {
	          var textRange = pointToTextRange({
	            node: sc,
	            offset: so
	          });

	          textRange.setEndPoint('EndToEnd', pointToTextRange({
	            node: ec,
	            offset: eo
	          }));

	          return textRange;
	        }
	      };

	      this.getPoints = function () {
	        return {
	          sc: sc,
	          so: so,
	          ec: ec,
	          eo: eo
	        };
	      };

	      this.getStartPoint = function () {
	        return {
	          node: sc,
	          offset: so
	        };
	      };

	      this.getEndPoint = function () {
	        return {
	          node: ec,
	          offset: eo
	        };
	      };

	      /**
	       * select update visible range
	       */
	      this.select = function () {
	        var nativeRng = nativeRange();
	        if (agent.isW3CRangeSupport) {
	          var selection = document.getSelection();
	          if (selection.rangeCount > 0) {
	            selection.removeAllRanges();
	          }
	          selection.addRange(nativeRng);
	        } else {
	          nativeRng.select();
	        }
	        
	        return this;
	      };

	      /**
	       * Moves the scrollbar to start container(sc) of current range
	       *
	       * @return {WrappedRange}
	       */
	      this.scrollIntoView = function (container) {
	        var height = $(container).height();
	        if (container.scrollTop + height < this.sc.offsetTop) {
	          container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
	        }

	        return this;
	      };

	      /**
	       * @return {WrappedRange}
	       */
	      this.normalize = function () {

	        /**
	         * @param {BoundaryPoint} point
	         * @param {Boolean} isLeftToRight
	         * @return {BoundaryPoint}
	         */
	        var getVisiblePoint = function (point, isLeftToRight) {
	          if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
	              (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
	              (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
	              (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
	            return point;
	          }

	          // point on block's edge
	          var block = dom.ancestor(point.node, dom.isBlock);
	          if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
	              ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {

	            // returns point already on visible point
	            if (dom.isVisiblePoint(point)) {
	              return point;
	            }
	            // reverse direction 
	            isLeftToRight = !isLeftToRight;
	          }

	          var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) :
	                                          dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
	          return nextPoint || point;
	        };

	        var endPoint = getVisiblePoint(this.getEndPoint(), false);
	        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);

	        return new WrappedRange(
	          startPoint.node,
	          startPoint.offset,
	          endPoint.node,
	          endPoint.offset
	        );
	      };

	      /**
	       * returns matched nodes on range
	       *
	       * @param {Function} [pred] - predicate function
	       * @param {Object} [options]
	       * @param {Boolean} [options.includeAncestor]
	       * @param {Boolean} [options.fullyContains]
	       * @return {Node[]}
	       */
	      this.nodes = function (pred, options) {
	        pred = pred || func.ok;

	        var includeAncestor = options && options.includeAncestor;
	        var fullyContains = options && options.fullyContains;

	        // TODO compare points and sort
	        var startPoint = this.getStartPoint();
	        var endPoint = this.getEndPoint();

	        var nodes = [];
	        var leftEdgeNodes = [];

	        dom.walkPoint(startPoint, endPoint, function (point) {
	          if (dom.isEditable(point.node)) {
	            return;
	          }

	          var node;
	          if (fullyContains) {
	            if (dom.isLeftEdgePoint(point)) {
	              leftEdgeNodes.push(point.node);
	            }
	            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {
	              node = point.node;
	            }
	          } else if (includeAncestor) {
	            node = dom.ancestor(point.node, pred);
	          } else {
	            node = point.node;
	          }

	          if (node && pred(node)) {
	            nodes.push(node);
	          }
	        }, true);

	        return list.unique(nodes);
	      };

	      /**
	       * returns commonAncestor of range
	       * @return {Element} - commonAncestor
	       */
	      this.commonAncestor = function () {
	        return dom.commonAncestor(sc, ec);
	      };

	      /**
	       * returns expanded range by pred
	       *
	       * @param {Function} pred - predicate function
	       * @return {WrappedRange}
	       */
	      this.expand = function (pred) {
	        var startAncestor = dom.ancestor(sc, pred);
	        var endAncestor = dom.ancestor(ec, pred);

	        if (!startAncestor && !endAncestor) {
	          return new WrappedRange(sc, so, ec, eo);
	        }

	        var boundaryPoints = this.getPoints();

	        if (startAncestor) {
	          boundaryPoints.sc = startAncestor;
	          boundaryPoints.so = 0;
	        }

	        if (endAncestor) {
	          boundaryPoints.ec = endAncestor;
	          boundaryPoints.eo = dom.nodeLength(endAncestor);
	        }

	        return new WrappedRange(
	          boundaryPoints.sc,
	          boundaryPoints.so,
	          boundaryPoints.ec,
	          boundaryPoints.eo
	        );
	      };

	      /**
	       * @param {Boolean} isCollapseToStart
	       * @return {WrappedRange}
	       */
	      this.collapse = function (isCollapseToStart) {
	        if (isCollapseToStart) {
	          return new WrappedRange(sc, so, sc, so);
	        } else {
	          return new WrappedRange(ec, eo, ec, eo);
	        }
	      };

	      /**
	       * splitText on range
	       */
	      this.splitText = function () {
	        var isSameContainer = sc === ec;
	        var boundaryPoints = this.getPoints();

	        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {
	          ec.splitText(eo);
	        }

	        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {
	          boundaryPoints.sc = sc.splitText(so);
	          boundaryPoints.so = 0;

	          if (isSameContainer) {
	            boundaryPoints.ec = boundaryPoints.sc;
	            boundaryPoints.eo = eo - so;
	          }
	        }

	        return new WrappedRange(
	          boundaryPoints.sc,
	          boundaryPoints.so,
	          boundaryPoints.ec,
	          boundaryPoints.eo
	        );
	      };

	      /**
	       * delete contents on range
	       * @return {WrappedRange}
	       */
	      this.deleteContents = function () {
	        if (this.isCollapsed()) {
	          return this;
	        }

	        var rng = this.splitText();
	        var nodes = rng.nodes(null, {
	          fullyContains: true
	        });

	        // find new cursor point
	        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
	          return !list.contains(nodes, point.node);
	        });

	        var emptyParents = [];
	        $.each(nodes, function (idx, node) {
	          // find empty parents
	          var parent = node.parentNode;
	          if (point.node !== parent && dom.nodeLength(parent) === 1) {
	            emptyParents.push(parent);
	          }
	          dom.remove(node, false);
	        });

	        // remove empty parents
	        $.each(emptyParents, function (idx, node) {
	          dom.remove(node, false);
	        });

	        return new WrappedRange(
	          point.node,
	          point.offset,
	          point.node,
	          point.offset
	        ).normalize();
	      };
	      
	      /**
	       * makeIsOn: return isOn(pred) function
	       */
	      var makeIsOn = function (pred) {
	        return function () {
	          var ancestor = dom.ancestor(sc, pred);
	          return !!ancestor && (ancestor === dom.ancestor(ec, pred));
	        };
	      };
	  
	      // isOnEditable: judge whether range is on editable or not
	      this.isOnEditable = makeIsOn(dom.isEditable);
	      // isOnList: judge whether range is on list node or not
	      this.isOnList = makeIsOn(dom.isList);
	      // isOnAnchor: judge whether range is on anchor node or not
	      this.isOnAnchor = makeIsOn(dom.isAnchor);
	      // isOnCell: judge whether range is on cell node or not
	      this.isOnCell = makeIsOn(dom.isCell);
	      // isOnData: judge whether range is on data node or not
	      this.isOnData = makeIsOn(dom.isData);

	      /**
	       * @param {Function} pred
	       * @return {Boolean}
	       */
	      this.isLeftEdgeOf = function (pred) {
	        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
	          return false;
	        }

	        var node = dom.ancestor(this.sc, pred);
	        return node && dom.isLeftEdgeOf(this.sc, node);
	      };

	      /**
	       * returns whether range was collapsed or not
	       */
	      this.isCollapsed = function () {
	        return sc === ec && so === eo;
	      };

	      /**
	       * wrap inline nodes which children of body with paragraph
	       *
	       * @return {WrappedRange}
	       */
	      this.wrapBodyInlineWithPara = function () {
	        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {
	          sc.innerHTML = dom.emptyPara;
	          return new WrappedRange(sc.firstChild, 0, sc.firstChild, 0);
	        }

	        /**
	         * [workaround] firefox often create range on not visible point. so normalize here.
	         *  - firefox: |<p>text</p>|
	         *  - chrome: <p>|text|</p>
	         */
	        var rng = this.normalize();
	        if (dom.isParaInline(sc) || dom.isPara(sc)) {
	          return rng;
	        }

	        // find inline top ancestor
	        var topAncestor;
	        if (dom.isInline(rng.sc)) {
	          var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
	          topAncestor = list.last(ancestors);
	          if (!dom.isInline(topAncestor)) {
	            topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
	          }
	        } else {
	          topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
	        }

	        // siblings not in paragraph
	        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
	        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));

	        // wrap with paragraph
	        if (inlineSiblings.length) {
	          var para = dom.wrap(list.head(inlineSiblings), 'p');
	          dom.appendChildNodes(para, list.tail(inlineSiblings));
	        }

	        return this.normalize();
	      };

	      /**
	       * insert node at current cursor
	       *
	       * @param {Node} node
	       * @return {Node}
	       */
	      this.insertNode = function (node) {
	        var rng = this.wrapBodyInlineWithPara().deleteContents();
	        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

	        if (info.rightNode) {
	          info.rightNode.parentNode.insertBefore(node, info.rightNode);
	        } else {
	          info.container.appendChild(node);
	        }

	        return node;
	      };

	      /**
	       * insert html at current cursor
	       */
	      this.pasteHTML = function (markup) {
	        var contentsContainer = $('<div></div>').html(markup)[0];
	        var childNodes = list.from(contentsContainer.childNodes);

	        var rng = this.wrapBodyInlineWithPara().deleteContents();

	        return childNodes.reverse().map(function (childNode) {
	          return rng.insertNode(childNode);
	        }).reverse();
	      };
	  
	      /**
	       * returns text in range
	       *
	       * @return {String}
	       */
	      this.toString = function () {
	        var nativeRng = nativeRange();
	        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
	      };

	      /**
	       * returns range for word before cursor
	       *
	       * @param {Boolean} [findAfter] - find after cursor, default: false
	       * @return {WrappedRange}
	       */
	      this.getWordRange = function (findAfter) {
	        var endPoint = this.getEndPoint();

	        if (!dom.isCharPoint(endPoint)) {
	          return this;
	        }

	        var startPoint = dom.prevPointUntil(endPoint, function (point) {
	          return !dom.isCharPoint(point);
	        });

	        if (findAfter) {
	          endPoint = dom.nextPointUntil(endPoint, function (point) {
	            return !dom.isCharPoint(point);
	          });
	        }

	        return new WrappedRange(
	          startPoint.node,
	          startPoint.offset,
	          endPoint.node,
	          endPoint.offset
	        );
	      };
	  
	      /**
	       * create offsetPath bookmark
	       *
	       * @param {Node} editable
	       */
	      this.bookmark = function (editable) {
	        return {
	          s: {
	            path: dom.makeOffsetPath(editable, sc),
	            offset: so
	          },
	          e: {
	            path: dom.makeOffsetPath(editable, ec),
	            offset: eo
	          }
	        };
	      };

	      /**
	       * create offsetPath bookmark base on paragraph
	       *
	       * @param {Node[]} paras
	       */
	      this.paraBookmark = function (paras) {
	        return {
	          s: {
	            path: list.tail(dom.makeOffsetPath(list.head(paras), sc)),
	            offset: so
	          },
	          e: {
	            path: list.tail(dom.makeOffsetPath(list.last(paras), ec)),
	            offset: eo
	          }
	        };
	      };

	      /**
	       * getClientRects
	       * @return {Rect[]}
	       */
	      this.getClientRects = function () {
	        var nativeRng = nativeRange();
	        return nativeRng.getClientRects();
	      };
	    };

	  /**
	   * @class core.range
	   *
	   * Data structure
	   *  * BoundaryPoint: a point of dom tree
	   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
	   *
	   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
	   *
	   * @singleton
	   * @alternateClassName range
	   */
	    return {
	      /**
	       * create Range Object From arguments or Browser Selection
	       *
	       * @param {Node} sc - start container
	       * @param {Number} so - start offset
	       * @param {Node} ec - end container
	       * @param {Number} eo - end offset
	       * @return {WrappedRange}
	       */
	      create: function (sc, so, ec, eo) {
	        if (arguments.length === 4) {
	          return new WrappedRange(sc, so, ec, eo);
	        } else if (arguments.length === 2) { //collapsed
	          ec = sc;
	          eo = so;
	          return new WrappedRange(sc, so, ec, eo);
	        } else {
	          var wrappedRange = this.createFromSelection();
	          if (!wrappedRange && arguments.length === 1) {
	            wrappedRange = this.createFromNode(arguments[0]);
	            return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
	          }
	          return wrappedRange;
	        }
	      },

	      createFromSelection: function () {
	        var sc, so, ec, eo;
	        if (agent.isW3CRangeSupport) {
	          var selection = document.getSelection();
	          if (!selection || selection.rangeCount === 0) {
	            return null;
	          } else if (dom.isBody(selection.anchorNode)) {
	            // Firefox: returns entire body as range on initialization.
	            // We won't never need it.
	            return null;
	          }

	          var nativeRng = selection.getRangeAt(0);
	          sc = nativeRng.startContainer;
	          so = nativeRng.startOffset;
	          ec = nativeRng.endContainer;
	          eo = nativeRng.endOffset;
	        } else { // IE8: TextRange
	          var textRange = document.selection.createRange();
	          var textRangeEnd = textRange.duplicate();
	          textRangeEnd.collapse(false);
	          var textRangeStart = textRange;
	          textRangeStart.collapse(true);

	          var startPoint = textRangeToPoint(textRangeStart, true),
	          endPoint = textRangeToPoint(textRangeEnd, false);

	          // same visible point case: range was collapsed.
	          if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
	              dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
	              endPoint.node.nextSibling === startPoint.node) {
	            startPoint = endPoint;
	          }

	          sc = startPoint.cont;
	          so = startPoint.offset;
	          ec = endPoint.cont;
	          eo = endPoint.offset;
	        }

	        return new WrappedRange(sc, so, ec, eo);
	      },

	      /**
	       * @method 
	       * 
	       * create WrappedRange from node
	       *
	       * @param {Node} node
	       * @return {WrappedRange}
	       */
	      createFromNode: function (node) {
	        var sc = node;
	        var so = 0;
	        var ec = node;
	        var eo = dom.nodeLength(ec);

	        // browsers can't target a picture or void node
	        if (dom.isVoid(sc)) {
	          so = dom.listPrev(sc).length - 1;
	          sc = sc.parentNode;
	        }
	        if (dom.isBR(ec)) {
	          eo = dom.listPrev(ec).length - 1;
	          ec = ec.parentNode;
	        } else if (dom.isVoid(ec)) {
	          eo = dom.listPrev(ec).length;
	          ec = ec.parentNode;
	        }

	        return this.create(sc, so, ec, eo);
	      },

	      /**
	       * create WrappedRange from node after position
	       *
	       * @param {Node} node
	       * @return {WrappedRange}
	       */
	      createFromNodeBefore: function (node) {
	        return this.createFromNode(node).collapse(true);
	      },

	      /**
	       * create WrappedRange from node after position
	       *
	       * @param {Node} node
	       * @return {WrappedRange}
	       */
	      createFromNodeAfter: function (node) {
	        return this.createFromNode(node).collapse();
	      },

	      /**
	       * @method 
	       * 
	       * create WrappedRange from bookmark
	       *
	       * @param {Node} editable
	       * @param {Object} bookmark
	       * @return {WrappedRange}
	       */
	      createFromBookmark: function (editable, bookmark) {
	        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
	        var so = bookmark.s.offset;
	        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
	        var eo = bookmark.e.offset;
	        return new WrappedRange(sc, so, ec, eo);
	      },

	      /**
	       * @method 
	       *
	       * create WrappedRange from paraBookmark
	       *
	       * @param {Object} bookmark
	       * @param {Node[]} paras
	       * @return {WrappedRange}
	       */
	      createFromParaBookmark: function (bookmark, paras) {
	        var so = bookmark.s.offset;
	        var eo = bookmark.e.offset;
	        var sc = dom.fromOffsetPath(list.head(paras), bookmark.s.path);
	        var ec = dom.fromOffsetPath(list.last(paras), bookmark.e.path);

	        return new WrappedRange(sc, so, ec, eo);
	      }
	    };
	  })();

	  /**
	   * @class core.async
	   *
	   * Async functions which returns `Promise`
	   *
	   * @singleton
	   * @alternateClassName async
	   */
	  var async = (function () {
	    /**
	     * @method readFileAsDataURL
	     *
	     * read contents of file as representing URL
	     *
	     * @param {File} file
	     * @return {Promise} - then: dataUrl
	     */
	    var readFileAsDataURL = function (file) {
	      return $.Deferred(function (deferred) {
	        $.extend(new FileReader(), {
	          onload: function (e) {
	            var dataURL = e.target.result;
	            deferred.resolve(dataURL);
	          },
	          onerror: function () {
	            deferred.reject(this);
	          }
	        }).readAsDataURL(file);
	      }).promise();
	    };
	  
	    /**
	     * @method createImage
	     *
	     * create `<image>` from url string
	     *
	     * @param {String} url
	     * @return {Promise} - then: $image
	     */
	    var createImage = function (url) {
	      return $.Deferred(function (deferred) {
	        var $img = $('<img>');

	        $img.one('load', function () {
	          $img.off('error abort');
	          deferred.resolve($img);
	        }).one('error abort', function () {
	          $img.off('load').detach();
	          deferred.reject($img);
	        }).css({
	          display: 'none'
	        }).appendTo(document.body).attr('src', url);
	      }).promise();
	    };

	    return {
	      readFileAsDataURL: readFileAsDataURL,
	      createImage: createImage
	    };
	  })();

	  /**
	   * @class editing.History
	   *
	   * Editor History
	   *
	   */
	  var History = function ($editable) {
	    var stack = [], stackOffset = -1;
	    var editable = $editable[0];

	    var makeSnapshot = function () {
	      var rng = range.create(editable);
	      var emptyBookmark = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};

	      return {
	        contents: $editable.html(),
	        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)
	      };
	    };

	    var applySnapshot = function (snapshot) {
	      if (snapshot.contents !== null) {
	        $editable.html(snapshot.contents);
	      }
	      if (snapshot.bookmark !== null) {
	        range.createFromBookmark(editable, snapshot.bookmark).select();
	      }
	    };

	    /**
	    * @method rewind
	    * Rewinds the history stack back to the first snapshot taken.
	    * Leaves the stack intact, so that "Redo" can still be used.
	    */
	    this.rewind = function () {
	      // Create snap shot if not yet recorded
	      if ($editable.html() !== stack[stackOffset].contents) {
	        this.recordUndo();
	      }

	      // Return to the first available snapshot.
	      stackOffset = 0;

	      // Apply that snapshot.
	      applySnapshot(stack[stackOffset]);
	    };

	    /**
	    * @method reset
	    * Resets the history stack completely; reverting to an empty editor.
	    */
	    this.reset = function () {
	      // Clear the stack.
	      stack = [];

	      // Restore stackOffset to its original value.
	      stackOffset = -1;

	      // Clear the editable area.
	      $editable.html('');

	      // Record our first snapshot (of nothing).
	      this.recordUndo();
	    };

	    /**
	     * undo
	     */
	    this.undo = function () {
	      // Create snap shot if not yet recorded
	      if ($editable.html() !== stack[stackOffset].contents) {
	        this.recordUndo();
	      }

	      if (0 < stackOffset) {
	        stackOffset--;
	        applySnapshot(stack[stackOffset]);
	      }
	    };

	    /**
	     * redo
	     */
	    this.redo = function () {
	      if (stack.length - 1 > stackOffset) {
	        stackOffset++;
	        applySnapshot(stack[stackOffset]);
	      }
	    };

	    /**
	     * recorded undo
	     */
	    this.recordUndo = function () {
	      stackOffset++;

	      // Wash out stack after stackOffset
	      if (stack.length > stackOffset) {
	        stack = stack.slice(0, stackOffset);
	      }

	      // Create new snapshot and push it to the end
	      stack.push(makeSnapshot());
	    };
	  };

	  /**
	   * @class editing.Style
	   *
	   * Style
	   *
	   */
	  var Style = function () {
	    /**
	     * @method jQueryCSS
	     *
	     * [workaround] for old jQuery
	     * passing an array of style properties to .css()
	     * will result in an object of property-value pairs.
	     * (compability with version < 1.9)
	     *
	     * @private
	     * @param  {jQuery} $obj
	     * @param  {Array} propertyNames - An array of one or more CSS properties.
	     * @return {Object}
	     */
	    var jQueryCSS = function ($obj, propertyNames) {
	      if (agent.jqueryVersion < 1.9) {
	        var result = {};
	        $.each(propertyNames, function (idx, propertyName) {
	          result[propertyName] = $obj.css(propertyName);
	        });
	        return result;
	      }
	      return $obj.css.call($obj, propertyNames);
	    };

	    /**
	     * returns style object from node
	     *
	     * @param {jQuery} $node
	     * @return {Object}
	     */
	    this.fromNode = function ($node) {
	      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
	      var styleInfo = jQueryCSS($node, properties) || {};
	      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
	      return styleInfo;
	    };

	    /**
	     * paragraph level style
	     *
	     * @param {WrappedRange} rng
	     * @param {Object} styleInfo
	     */
	    this.stylePara = function (rng, styleInfo) {
	      $.each(rng.nodes(dom.isPara, {
	        includeAncestor: true
	      }), function (idx, para) {
	        $(para).css(styleInfo);
	      });
	    };

	    /**
	     * insert and returns styleNodes on range.
	     *
	     * @param {WrappedRange} rng
	     * @param {Object} [options] - options for styleNodes
	     * @param {String} [options.nodeName] - default: `SPAN`
	     * @param {Boolean} [options.expandClosestSibling] - default: `false`
	     * @param {Boolean} [options.onlyPartialContains] - default: `false`
	     * @return {Node[]}
	     */
	    this.styleNodes = function (rng, options) {
	      rng = rng.splitText();

	      var nodeName = options && options.nodeName || 'SPAN';
	      var expandClosestSibling = !!(options && options.expandClosestSibling);
	      var onlyPartialContains = !!(options && options.onlyPartialContains);

	      if (rng.isCollapsed()) {
	        return [rng.insertNode(dom.create(nodeName))];
	      }

	      var pred = dom.makePredByNodeName(nodeName);
	      var nodes = rng.nodes(dom.isText, {
	        fullyContains: true
	      }).map(function (text) {
	        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
	      });

	      if (expandClosestSibling) {
	        if (onlyPartialContains) {
	          var nodesInRange = rng.nodes();
	          // compose with partial contains predication
	          pred = func.and(pred, function (node) {
	            return list.contains(nodesInRange, node);
	          });
	        }

	        return nodes.map(function (node) {
	          var siblings = dom.withClosestSiblings(node, pred);
	          var head = list.head(siblings);
	          var tails = list.tail(siblings);
	          $.each(tails, function (idx, elem) {
	            dom.appendChildNodes(head, elem.childNodes);
	            dom.remove(elem);
	          });
	          return list.head(siblings);
	        });
	      } else {
	        return nodes;
	      }
	    };

	    /**
	     * get current style on cursor
	     *
	     * @param {WrappedRange} rng
	     * @return {Object} - object contains style properties.
	     */
	    this.current = function (rng) {
	      var $cont = $(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
	      var styleInfo = this.fromNode($cont);

	      // document.queryCommandState for toggle state
	      // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
	      try {
	        styleInfo = $.extend(styleInfo, {
	          'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
	          'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
	          'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
	          'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
	          'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
	          'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal'
	        });
	      } catch (e) {}

	      // list-style-type to list-style(unordered, ordered)
	      if (!rng.isOnList()) {
	        styleInfo['list-style'] = 'none';
	      } else {
	        var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
	        var isUnordered = $.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
	        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
	      }

	      var para = dom.ancestor(rng.sc, dom.isPara);
	      if (para && para.style['line-height']) {
	        styleInfo['line-height'] = para.style.lineHeight;
	      } else {
	        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
	        styleInfo['line-height'] = lineHeight.toFixed(1);
	      }

	      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
	      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
	      styleInfo.range = rng;

	      return styleInfo;
	    };
	  };


	  /**
	   * @class editing.Bullet
	   *
	   * @alternateClassName Bullet
	   */
	  var Bullet = function () {
	    var self = this;

	    /**
	     * toggle ordered list
	     */
	    this.insertOrderedList = function (editable) {
	      this.toggleList('OL', editable);
	    };

	    /**
	     * toggle unordered list
	     */
	    this.insertUnorderedList = function (editable) {
	      this.toggleList('UL', editable);
	    };

	    /**
	     * indent
	     */
	    this.indent = function (editable) {
	      var self = this;
	      var rng = range.create(editable).wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        if (dom.isLi(head)) {
	          self.wrapList(paras, head.parentNode.nodeName);
	        } else {
	          $.each(paras, function (idx, para) {
	            $(para).css('marginLeft', function (idx, val) {
	              return (parseInt(val, 10) || 0) + 25;
	            });
	          });
	        }
	      });

	      rng.select();
	    };

	    /**
	     * outdent
	     */
	    this.outdent = function (editable) {
	      var self = this;
	      var rng = range.create(editable).wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        if (dom.isLi(head)) {
	          self.releaseList([paras]);
	        } else {
	          $.each(paras, function (idx, para) {
	            $(para).css('marginLeft', function (idx, val) {
	              val = (parseInt(val, 10) || 0);
	              return val > 25 ? val - 25 : '';
	            });
	          });
	        }
	      });

	      rng.select();
	    };

	    /**
	     * toggle list
	     *
	     * @param {String} listName - OL or UL
	     */
	    this.toggleList = function (listName, editable) {
	      var rng = range.create(editable).wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var bookmark = rng.paraBookmark(paras);
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      // paragraph to list
	      if (list.find(paras, dom.isPurePara)) {
	        var wrappedParas = [];
	        $.each(clustereds, function (idx, paras) {
	          wrappedParas = wrappedParas.concat(self.wrapList(paras, listName));
	        });
	        paras = wrappedParas;
	      // list to paragraph or change list style
	      } else {
	        var diffLists = rng.nodes(dom.isList, {
	          includeAncestor: true
	        }).filter(function (listNode) {
	          return !$.nodeName(listNode, listName);
	        });

	        if (diffLists.length) {
	          $.each(diffLists, function (idx, listNode) {
	            dom.replace(listNode, listName);
	          });
	        } else {
	          paras = this.releaseList(clustereds, true);
	        }
	      }

	      range.createFromParaBookmark(bookmark, paras).select();
	    };

	    /**
	     * @param {Node[]} paras
	     * @param {String} listName
	     * @return {Node[]}
	     */
	    this.wrapList = function (paras, listName) {
	      var head = list.head(paras);
	      var last = list.last(paras);

	      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
	      var nextList = dom.isList(last.nextSibling) && last.nextSibling;

	      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);

	      // P to LI
	      paras = paras.map(function (para) {
	        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
	      });

	      // append to list(<ul>, <ol>)
	      dom.appendChildNodes(listNode, paras);

	      if (nextList) {
	        dom.appendChildNodes(listNode, list.from(nextList.childNodes));
	        dom.remove(nextList);
	      }

	      return paras;
	    };

	    /**
	     * @method releaseList
	     *
	     * @param {Array[]} clustereds
	     * @param {Boolean} isEscapseToBody
	     * @return {Node[]}
	     */
	    this.releaseList = function (clustereds, isEscapseToBody) {
	      var releasedParas = [];

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        var last = list.last(paras);

	        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :
	                                         head.parentNode;
	        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
	          node: last.parentNode,
	          offset: dom.position(last) + 1
	        }, {
	          isSkipPaddingBlankHTML: true
	        }) : null;

	        var middleList = dom.splitTree(headList, {
	          node: head.parentNode,
	          offset: dom.position(head)
	        }, {
	          isSkipPaddingBlankHTML: true
	        });

	        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :
	                                  list.from(middleList.childNodes).filter(dom.isLi);

	        // LI to P
	        if (isEscapseToBody || !dom.isList(headList.parentNode)) {
	          paras = paras.map(function (para) {
	            return dom.replace(para, 'P');
	          });
	        }

	        $.each(list.from(paras).reverse(), function (idx, para) {
	          dom.insertAfter(para, headList);
	        });

	        // remove empty lists
	        var rootLists = list.compact([headList, middleList, lastList]);
	        $.each(rootLists, function (idx, rootList) {
	          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
	          $.each(listNodes.reverse(), function (idx, listNode) {
	            if (!dom.nodeLength(listNode)) {
	              dom.remove(listNode, true);
	            }
	          });
	        });

	        releasedParas = releasedParas.concat(paras);
	      });

	      return releasedParas;
	    };
	  };


	  /**
	   * @class editing.Typing
	   *
	   * Typing
	   *
	   */
	  var Typing = function () {

	    // a Bullet instance to toggle lists off
	    var bullet = new Bullet();

	    /**
	     * insert tab
	     *
	     * @param {WrappedRange} rng
	     * @param {Number} tabsize
	     */
	    this.insertTab = function (rng, tabsize) {
	      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
	      rng = rng.deleteContents();
	      rng.insertNode(tab, true);

	      rng = range.create(tab, tabsize);
	      rng.select();
	    };

	    /**
	     * insert paragraph
	     */
	    this.insertParagraph = function (editable) {
	      var rng = range.create(editable);

	      // deleteContents on range.
	      rng = rng.deleteContents();

	      // Wrap range if it needs to be wrapped by paragraph
	      rng = rng.wrapBodyInlineWithPara();

	      // finding paragraph
	      var splitRoot = dom.ancestor(rng.sc, dom.isPara);

	      var nextPara;
	      // on paragraph: split paragraph
	      if (splitRoot) {
	        // if it is an empty line with li
	        if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
	          // toogle UL/OL and escape
	          bullet.toggleList(splitRoot.parentNode.nodeName);
	          return;
	        // if it is an empty line with para on blockquote
	        } else if (dom.isEmpty(splitRoot) && dom.isPara(splitRoot) && dom.isBlockquote(splitRoot.parentNode)) {
	          // escape blockquote
	          dom.insertAfter(splitRoot, splitRoot.parentNode);
	          nextPara = splitRoot;
	        // if new line has content (not a line break)
	        } else {
	          nextPara = dom.splitTree(splitRoot, rng.getStartPoint());

	          var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
	          emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));

	          $.each(emptyAnchors, function (idx, anchor) {
	            dom.remove(anchor);
	          });

	          // replace empty heading or pre with P tag
	          if ((dom.isHeading(nextPara) || dom.isPre(nextPara)) && dom.isEmpty(nextPara)) {
	            nextPara = dom.replace(nextPara, 'p');
	          }
	        }
	      // no paragraph: insert empty paragraph
	      } else {
	        var next = rng.sc.childNodes[rng.so];
	        nextPara = $(dom.emptyPara)[0];
	        if (next) {
	          rng.sc.insertBefore(nextPara, next);
	        } else {
	          rng.sc.appendChild(nextPara);
	        }
	      }

	      range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
	    };
	  };

	  /**
	   * @class editing.Table
	   *
	   * Table
	   *
	   */
	  var Table = function () {
	    /**
	     * handle tab key
	     *
	     * @param {WrappedRange} rng
	     * @param {Boolean} isShift
	     */
	    this.tab = function (rng, isShift) {
	      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
	      var table = dom.ancestor(cell, dom.isTable);
	      var cells = dom.listDescendant(table, dom.isCell);

	      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);
	      if (nextCell) {
	        range.create(nextCell, 0).select();
	      }
	    };

	    /**
	     * create empty table element
	     *
	     * @param {Number} rowCount
	     * @param {Number} colCount
	     * @return {Node}
	     */
	    this.createTable = function (colCount, rowCount, options) {
	      var tds = [], tdHTML;
	      for (var idxCol = 0; idxCol < colCount; idxCol++) {
	        tds.push('<td>' + dom.blank + '</td>');
	      }
	      tdHTML = tds.join('');

	      var trs = [], trHTML;
	      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
	        trs.push('<tr>' + tdHTML + '</tr>');
	      }
	      trHTML = trs.join('');
	      var $table = $('<table>' + trHTML + '</table>');
	      if (options && options.tableClassName) {
	        $table.addClass(options.tableClassName);
	      }

	      return $table[0];
	    };
	  };


	  var KEY_BOGUS = 'bogus';

	  /**
	   * @class Editor
	   */
	  var Editor = function (context) {
	    var self = this;

	    var $note = context.layoutInfo.note;
	    var $editor = context.layoutInfo.editor;
	    var $editable = context.layoutInfo.editable;
	    var options = context.options;
	    var lang = options.langInfo;

	    var editable = $editable[0];
	    var lastRange = null;

	    var style = new Style();
	    var table = new Table();
	    var typing = new Typing();
	    var bullet = new Bullet();
	    var history = new History($editable);

	    this.initialize = function () {
	      // bind custom events
	      $editable.on('keydown', function (event) {
	        if (event.keyCode === key.code.ENTER) {
	          context.triggerEvent('enter', event);
	        }
	        context.triggerEvent('keydown', event);

	        if (!event.isDefaultPrevented()) {
	          if (options.shortcuts) {
	            self.handleKeyMap(event);
	          } else {
	            self.preventDefaultEditableShortCuts(event);
	          }
	        }
	      }).on('keyup', function (event) {
	        context.triggerEvent('keyup', event);
	      }).on('focus', function (event) {
	        context.triggerEvent('focus', event);
	      }).on('blur', function (event) {
	        context.triggerEvent('blur', event);
	      }).on('mousedown', function (event) {
	        context.triggerEvent('mousedown', event);
	      }).on('mouseup', function (event) {
	        context.triggerEvent('mouseup', event);
	      }).on('scroll', function (event) {
	        context.triggerEvent('scroll', event);
	      }).on('paste', function (event) {
	        context.triggerEvent('paste', event);
	      });

	      // init content before set event
	      $editable.html(dom.html($note) || dom.emptyPara);

	      // [workaround] IE doesn't have input events for contentEditable
	      // - see: https://goo.gl/4bfIvA
	      var changeEventName = agent.isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
	      $editable.on(changeEventName, function () {
	        context.triggerEvent('change', $editable.html());
	      });

	      $editor.on('focusin', function (event) {
	        context.triggerEvent('focusin', event);
	      }).on('focusout', function (event) {
	        context.triggerEvent('focusout', event);
	      });

	      if (!options.airMode) {
	        if (options.width) {
	          $editor.outerWidth(options.width);
	        }
	        if (options.height) {
	          $editable.outerHeight(options.height);
	        }
	        if (options.maxHeight) {
	          $editable.css('max-height', options.maxHeight);
	        }
	        if (options.minHeight) {
	          $editable.css('min-height', options.minHeight);
	        }
	      }

	      history.recordUndo();
	    };

	    this.destroy = function () {
	      $editable.off();
	    };

	    this.handleKeyMap = function (event) {
	      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
	      var keys = [];

	      if (event.metaKey) { keys.push('CMD'); }
	      if (event.ctrlKey && !event.altKey) { keys.push('CTRL'); }
	      if (event.shiftKey) { keys.push('SHIFT'); }

	      var keyName = key.nameFromCode[event.keyCode];
	      if (keyName) {
	        keys.push(keyName);
	      }

	      var eventName = keyMap[keys.join('+')];
	      if (eventName) {
	        event.preventDefault();
	        context.invoke(eventName);
	      } else if (key.isEdit(event.keyCode)) {
	        this.afterCommand();
	      }
	    };

	    this.preventDefaultEditableShortCuts = function (event) {
	      // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
	      if ((event.ctrlKey || event.metaKey) &&
	        list.contains([66, 73, 85], event.keyCode)) {
	        event.preventDefault();
	      }
	    };

	    /**
	     * create range
	     * @return {WrappedRange}
	     */
	    this.createRange = function () {
	      this.focus();
	      return range.create(editable);
	    };

	    /**
	     * saveRange
	     *
	     * save current range
	     *
	     * @param {Boolean} [thenCollapse=false]
	     */
	    this.saveRange = function (thenCollapse) {
	      lastRange = this.createRange();
	      if (thenCollapse) {
	        lastRange.collapse().select();
	      }
	    };

	    /**
	     * restoreRange
	     *
	     * restore lately range
	     */
	    this.restoreRange = function () {
	      if (lastRange) {
	        lastRange.select();
	        this.focus();
	      }
	    };

	    this.saveTarget = function (node) {
	      $editable.data('target', node);
	    };

	    this.clearTarget = function () {
	      $editable.removeData('target');
	    };

	    this.restoreTarget = function () {
	      return $editable.data('target');
	    };

	    /**
	     * currentStyle
	     *
	     * current style
	     * @return {Object|Boolean} unfocus
	     */
	    this.currentStyle = function () {
	      var rng = range.create();
	      if (rng) {
	        rng = rng.normalize();
	      }
	      return rng ? style.current(rng) : style.fromNode($editable);
	    };

	    /**
	     * style from node
	     *
	     * @param {jQuery} $node
	     * @return {Object}
	     */
	    this.styleFromNode = function ($node) {
	      return style.fromNode($node);
	    };

	    /**
	     * undo
	     */
	    this.undo = function () {
	      context.triggerEvent('before.command', $editable.html());
	      history.undo();
	      context.triggerEvent('change', $editable.html());
	    };
	    context.memo('help.undo', lang.help.undo);

	    /**
	     * redo
	     */
	    this.redo = function () {
	      context.triggerEvent('before.command', $editable.html());
	      history.redo();
	      context.triggerEvent('change', $editable.html());
	    };
	    context.memo('help.redo', lang.help.redo);

	    /**
	     * before command
	     */
	    var beforeCommand = this.beforeCommand = function () {
	      context.triggerEvent('before.command', $editable.html());
	      // keep focus on editable before command execution
	      self.focus();
	    };

	    /**
	     * after command
	     * @param {Boolean} isPreventTrigger
	     */
	    var afterCommand = this.afterCommand = function (isPreventTrigger) {
	      history.recordUndo();
	      if (!isPreventTrigger) {
	        context.triggerEvent('change', $editable.html());
	      }
	    };

	    /* jshint ignore:start */
	    // native commands(with execCommand), generate function for execCommand
	    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
	                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
	                    'formatBlock', 'removeFormat',
	                    'backColor', 'foreColor', 'fontName'];

	    for (var idx = 0, len = commands.length; idx < len; idx ++) {
	      this[commands[idx]] = (function (sCmd) {
	        return function (value) {
	          beforeCommand();
	          document.execCommand(sCmd, false, value);
	          afterCommand(true);
	        };
	      })(commands[idx]);
	      context.memo('help.' + commands[idx], lang.help[commands[idx]]);
	    }
	    /* jshint ignore:end */

	    /**
	     * handle tab key
	     */
	    this.tab = function () {
	      var rng = this.createRange();
	      if (rng.isCollapsed() && rng.isOnCell()) {
	        table.tab(rng);
	      } else {
	        beforeCommand();
	        typing.insertTab(rng, options.tabSize);
	        afterCommand();
	      }
	    };
	    context.memo('help.tab', lang.help.tab);

	    /**
	     * handle shift+tab key
	     */
	    this.untab = function () {
	      var rng = this.createRange();
	      if (rng.isCollapsed() && rng.isOnCell()) {
	        table.tab(rng, true);
	      }
	    };
	    context.memo('help.untab', lang.help.untab);

	    /**
	     * run given function between beforeCommand and afterCommand
	     */
	    this.wrapCommand = function (fn) {
	      return function () {
	        beforeCommand();
	        fn.apply(self, arguments);
	        afterCommand();
	      };
	    };

	    /**
	     * insert paragraph
	     */
	    this.insertParagraph = this.wrapCommand(function () {
	      typing.insertParagraph(editable);
	    });
	    context.memo('help.insertParagraph', lang.help.insertParagraph);

	    this.insertOrderedList = this.wrapCommand(function () {
	      bullet.insertOrderedList(editable);
	    });
	    context.memo('help.insertOrderedList', lang.help.insertOrderedList);

	    this.insertUnorderedList = this.wrapCommand(function () {
	      bullet.insertUnorderedList(editable);
	    });
	    context.memo('help.insertUnorderedList', lang.help.insertUnorderedList);

	    this.indent = this.wrapCommand(function () {
	      bullet.indent(editable);
	    });
	    context.memo('help.indent', lang.help.indent);

	    this.outdent = this.wrapCommand(function () {
	      bullet.outdent(editable);
	    });
	    context.memo('help.outdent', lang.help.outdent);

	    /**
	     * insert image
	     *
	     * @param {String} src
	     * @param {String|Function} param
	     * @return {Promise}
	     */
	    this.insertImage = function (src, param) {
	      return async.createImage(src, param).then(function ($image) {
	        beforeCommand();

	        if (typeof param === 'function') {
	          param($image);
	        } else {
	          if (typeof param === 'string') {
	            $image.attr('data-filename', param);
	          }
	          $image.css('width', Math.min($editable.width(), $image.width()));
	        }

	        $image.show();
	        range.create(editable).insertNode($image[0]);
	        range.createFromNodeAfter($image[0]).select();
	        afterCommand();
	      }).fail(function (e) {
	        context.triggerEvent('image.upload.error', e);
	      });
	    };

	    /**
	     * insertImages
	     * @param {File[]} files
	     */
	    this.insertImages = function (files) {
	      $.each(files, function (idx, file) {
	        var filename = file.name;
	        if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {
	          context.triggerEvent('image.upload.error', lang.image.maximumFileSizeError);
	        } else {
	          async.readFileAsDataURL(file).then(function (dataURL) {
	            return self.insertImage(dataURL, filename);
	          }).fail(function () {
	            context.triggerEvent('image.upload.error');
	          });
	        }
	      });
	    };

	    /**
	     * insertImagesOrCallback
	     * @param {File[]} files
	     */
	    this.insertImagesOrCallback = function (files) {
	      var callbacks = options.callbacks;

	      // If onImageUpload options setted
	      if (callbacks.onImageUpload) {
	        context.triggerEvent('image.upload', files);
	      // else insert Image as dataURL
	      } else {
	        this.insertImages(files);
	      }
	    };

	    /**
	     * insertNode
	     * insert node
	     * @param {Node} node
	     */
	    this.insertNode = this.wrapCommand(function (node) {
	      var rng = this.createRange();
	      rng.insertNode(node);
	      range.createFromNodeAfter(node).select();
	    });

	    /**
	     * insert text
	     * @param {String} text
	     */
	    this.insertText = this.wrapCommand(function (text) {
	      var rng = this.createRange();
	      var textNode = rng.insertNode(dom.createText(text));
	      range.create(textNode, dom.nodeLength(textNode)).select();
	    });

	    /**
	     * return selected plain text
	     * @return {String} text
	     */
	    this.getSelectedText = function () {
	      var rng = this.createRange();

	      // if range on anchor, expand range with anchor
	      if (rng.isOnAnchor()) {
	        rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
	      }

	      return rng.toString();
	    };

	    /**
	     * paste HTML
	     * @param {String} markup
	     */
	    this.pasteHTML = this.wrapCommand(function (markup) {
	      var contents = this.createRange().pasteHTML(markup);
	      range.createFromNodeAfter(list.last(contents)).select();
	    });

	    /**
	     * formatBlock
	     *
	     * @param {String} tagName
	     */
	    this.formatBlock = this.wrapCommand(function (tagName) {
	      // [workaround] for MSIE, IE need `<`
	      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;
	      document.execCommand('FormatBlock', false, tagName);
	    });

	    this.formatPara = function () {
	      this.formatBlock('P');
	    };
	    context.memo('help.formatPara', lang.help.formatPara);

	    /* jshint ignore:start */
	    for (var idx = 1; idx <= 6; idx ++) {
	      this['formatH' + idx] = function (idx) {
	        return function () {
	          this.formatBlock('H' + idx);
	        };
	      }(idx);
	      context.memo('help.formatH'+idx, lang.help['formatH' + idx]);
	    };
	    /* jshint ignore:end */

	    /**
	     * fontSize
	     *
	     * @param {String} value - px
	     */
	    this.fontSize = function (value) {
	      var rng = this.createRange();

	      if (rng && rng.isCollapsed()) {
	        var spans = style.styleNodes(rng);
	        var firstSpan = list.head(spans);

	        $(spans).css({
	          'font-size': value + 'px'
	        });

	        // [workaround] added styled bogus span for style
	        //  - also bogus character needed for cursor position
	        if (firstSpan && !dom.nodeLength(firstSpan)) {
	          firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
	          range.createFromNodeAfter(firstSpan.firstChild).select();
	          $editable.data(KEY_BOGUS, firstSpan);
	        }
	      } else {
	        beforeCommand();
	        $(style.styleNodes(rng)).css({
	          'font-size': value + 'px'
	        });
	        afterCommand();
	      }
	    };

	    /**
	     * insert horizontal rule
	     */
	    this.insertHorizontalRule = this.wrapCommand(function () {
	      var hrNode = this.createRange().insertNode(dom.create('HR'));
	      if (hrNode.nextSibling) {
	        range.create(hrNode.nextSibling, 0).normalize().select();
	      }
	    });
	    context.memo('help.insertHorizontalRule', lang.help.insertHorizontalRule);

	    /**
	     * remove bogus node and character
	     */
	    this.removeBogus = function () {
	      var bogusNode = $editable.data(KEY_BOGUS);
	      if (!bogusNode) {
	        return;
	      }

	      var textNode = list.find(list.from(bogusNode.childNodes), dom.isText);

	      var bogusCharIdx = textNode.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR);
	      if (bogusCharIdx !== -1) {
	        textNode.deleteData(bogusCharIdx, 1);
	      }

	      if (dom.isEmpty(bogusNode)) {
	        dom.remove(bogusNode);
	      }

	      $editable.removeData(KEY_BOGUS);
	    };

	    /**
	     * lineHeight
	     * @param {String} value
	     */
	    this.lineHeight = this.wrapCommand(function (value) {
	      style.stylePara(this.createRange(), {
	        lineHeight: value
	      });
	    });

	    /**
	     * unlink
	     *
	     * @type command
	     */
	    this.unlink = function () {
	      var rng = this.createRange();
	      if (rng.isOnAnchor()) {
	        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
	        rng = range.createFromNode(anchor);
	        rng.select();

	        beforeCommand();
	        document.execCommand('unlink');
	        afterCommand();
	      }
	    };

	    /**
	     * create link (command)
	     *
	     * @param {Object} linkInfo
	     */
	    this.createLink = this.wrapCommand(function (linkInfo) {
	      var linkUrl = linkInfo.url;
	      var linkText = linkInfo.text;
	      var isNewWindow = linkInfo.isNewWindow;
	      var rng = linkInfo.range || this.createRange();
	      var isTextChanged = rng.toString() !== linkText;

	      if (options.onCreateLink) {
	        linkUrl = options.onCreateLink(linkUrl);
	      }

	      var anchors = [];
	      if (isTextChanged) {
	        rng = rng.deleteContents();
	        var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0]);
	        anchors.push(anchor);
	      } else {
	        anchors = style.styleNodes(rng, {
	          nodeName: 'A',
	          expandClosestSibling: true,
	          onlyPartialContains: true
	        });
	      }

	      $.each(anchors, function (idx, anchor) {
	        $(anchor).attr('href', linkUrl);
	        if (isNewWindow) {
	          $(anchor).attr('target', '_blank');
	        } else {
	          $(anchor).removeAttr('target');
	        }
	      });

	      var startRange = range.createFromNodeBefore(list.head(anchors));
	      var startPoint = startRange.getStartPoint();
	      var endRange = range.createFromNodeAfter(list.last(anchors));
	      var endPoint = endRange.getEndPoint();

	      range.create(
	        startPoint.node,
	        startPoint.offset,
	        endPoint.node,
	        endPoint.offset
	      ).select();
	    });

	    /**
	     * returns link info
	     *
	     * @return {Object}
	     * @return {WrappedRange} return.range
	     * @return {String} return.text
	     * @return {Boolean} [return.isNewWindow=true]
	     * @return {String} [return.url=""]
	     */
	    this.getLinkInfo = function () {
	      var rng = this.createRange().expand(dom.isAnchor);

	      // Get the first anchor on range(for edit).
	      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));

	      return {
	        range: rng,
	        text: rng.toString(),
	        isNewWindow: $anchor.length ? $anchor.attr('target') === '_blank' : false,
	        url: $anchor.length ? $anchor.attr('href') : ''
	      };
	    };

	    /**
	     * setting color
	     *
	     * @param {Object} sObjColor  color code
	     * @param {String} sObjColor.foreColor foreground color
	     * @param {String} sObjColor.backColor background color
	     */
	    this.color = this.wrapCommand(function (colorInfo) {
	      var foreColor = colorInfo.foreColor;
	      var backColor = colorInfo.backColor;

	      if (foreColor) { document.execCommand('foreColor', false, foreColor); }
	      if (backColor) { document.execCommand('backColor', false, backColor); }
	    });

	    /**
	     * insert Table
	     *
	     * @param {String} dimension of table (ex : "5x5")
	     */
	    this.insertTable = this.wrapCommand(function (dim) {
	      var dimension = dim.split('x');

	      var rng = this.createRange().deleteContents();
	      rng.insertNode(table.createTable(dimension[0], dimension[1], options));
	    });

	    /**
	     * float me
	     *
	     * @param {String} value
	     */
	    this.floatMe = this.wrapCommand(function (value) {
	      var $target = $(this.restoreTarget());
	      $target.css('float', value);
	    });

	    /**
	     * resize overlay element
	     * @param {String} value
	     */
	    this.resize = this.wrapCommand(function (value) {
	      var $target = $(this.restoreTarget());
	      $target.css({
	        width: value * 100 + '%',
	        height: ''
	      });
	    });

	    /**
	     * @param {Position} pos
	     * @param {jQuery} $target - target element
	     * @param {Boolean} [bKeepRatio] - keep ratio
	     */
	    this.resizeTo = function (pos, $target, bKeepRatio) {
	      var imageSize;
	      if (bKeepRatio) {
	        var newRatio = pos.y / pos.x;
	        var ratio = $target.data('ratio');
	        imageSize = {
	          width: ratio > newRatio ? pos.x : pos.y / ratio,
	          height: ratio > newRatio ? pos.x * ratio : pos.y
	        };
	      } else {
	        imageSize = {
	          width: pos.x,
	          height: pos.y
	        };
	      }

	      $target.css(imageSize);
	    };

	    /**
	     * remove media object
	     */
	    this.removeMedia = this.wrapCommand(function () {
	      var $target = $(this.restoreTarget()).detach();
	      context.triggerEvent('media.delete', $target, $editable);
	    });

	    /**
	     * returns whether editable area has focus or not.
	     */
	    this.hasFocus = function () {
	      return $editable.is(':focus');
	    };

	    /**
	     * set focus
	     */
	    this.focus = function () {
	      // [workaround] Screen will move when page is scolled in IE.
	      //  - do focus when not focused
	      if (!this.hasFocus()) {
	        $editable.focus();
	      }
	    };

	    /**
	     * returns whether contents is empty or not.
	     * @return {Boolean}
	     */
	    this.isEmpty = function () {
	      return dom.isEmpty($editable[0]) || dom.emptyPara === $editable.html();
	    };

	    /**
	     * Removes all contents and restores the editable instance to an _emptyPara_.
	     */
	    this.empty = function () {
	      context.invoke('code', dom.emptyPara);
	    };
	  };

	  var Clipboard = function (context) {
	    var self = this;

	    var $editable = context.layoutInfo.editable;

	    this.events = {
	      'summernote.keydown': function (we, e) {
	        if (self.needKeydownHook()) {
	          if ((e.ctrlKey || e.metaKey) && e.keyCode === key.code.V) {
	            context.invoke('editor.saveRange');
	            self.$paste.focus();

	            setTimeout(function () {
	              self.pasteByHook();
	            }, 0);
	          }
	        }
	      }
	    };

	    this.needKeydownHook = function () {
	      return (agent.isMSIE && agent.browserVersion > 10) || agent.isFF;
	    };

	    this.initialize = function () {
	      // [workaround] getting image from clipboard
	      //  - IE11 and Firefox: CTRL+v hook
	      //  - Webkit: event.clipboardData
	      if (this.needKeydownHook()) {
	        this.$paste = $('<div tabindex="-1" />').attr('contenteditable', true).css({
	          position: 'absolute',
	          left: -100000,
	          opacity: 0
	        });
	        $editable.before(this.$paste);

	        this.$paste.on('paste', function (event) {
	          context.triggerEvent('paste', event);
	        });
	      } else {
	        $editable.on('paste', this.pasteByEvent);
	      }
	    };

	    this.destroy = function () {
	      if (this.needKeydownHook()) {
	        this.$paste.remove();
	        this.$paste = null;
	      }
	    };

	    this.pasteByHook = function () {
	      var node = this.$paste[0].firstChild;

	      if (dom.isImg(node)) {
	        var dataURI = node.src;
	        var decodedData = atob(dataURI.split(',')[1]);
	        var array = new Uint8Array(decodedData.length);
	        for (var i = 0; i < decodedData.length; i++) {
	          array[i] = decodedData.charCodeAt(i);
	        }

	        var blob = new Blob([array], { type: 'image/png' });
	        blob.name = 'clipboard.png';

	        context.invoke('editor.restoreRange');
	        context.invoke('editor.focus');
	        context.invoke('editor.insertImagesOrCallback', [blob]);
	      } else {
	        var pasteContent = $('<div />').html(this.$paste.html()).html();
	        context.invoke('editor.restoreRange');
	        context.invoke('editor.focus');

	        if (pasteContent) {
	          context.invoke('editor.pasteHTML', pasteContent);
	        }
	      }

	      this.$paste.empty();
	    };

	    /**
	     * paste by clipboard event
	     *
	     * @param {Event} event
	     */
	    this.pasteByEvent = function (event) {
	      var clipboardData = event.originalEvent.clipboardData;
	      if (clipboardData && clipboardData.items && clipboardData.items.length) {
	        var item = list.head(clipboardData.items);
	        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
	          context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
	        }
	        context.invoke('editor.afterCommand');
	      }
	    };
	  };

	  var Dropzone = function (context) {
	    var $document = $(document);
	    var $editor = context.layoutInfo.editor;
	    var $editable = context.layoutInfo.editable;
	    var options = context.options;
	    var lang = options.langInfo;

	    var $dropzone = $([
	      '<div class="note-dropzone">',
	      '  <div class="note-dropzone-message"/>',
	      '</div>'
	    ].join('')).prependTo($editor);

	    /**
	     * attach Drag and Drop Events
	     */
	    this.initialize = function () {
	      if (options.disableDragAndDrop) {
	        // prevent default drop event
	        $document.on('drop', function (e) {
	          e.preventDefault();
	        });
	      } else {
	        this.attachDragAndDropEvent();
	      }
	    };

	    /**
	     * attach Drag and Drop Events
	     */
	    this.attachDragAndDropEvent = function () {
	      var collection = $(),
	          $dropzoneMessage = $dropzone.find('.note-dropzone-message');

	      // show dropzone on dragenter when dragging a object to document
	      // -but only if the editor is visible, i.e. has a positive width and height
	      $document.on('dragenter', function (e) {
	        var isCodeview = context.invoke('codeview.isActivated');
	        var hasEditorSize = $editor.width() > 0 && $editor.height() > 0;
	        if (!isCodeview && !collection.length && hasEditorSize) {
	          $editor.addClass('dragover');
	          $dropzone.width($editor.width());
	          $dropzone.height($editor.height());
	          $dropzoneMessage.text(lang.image.dragImageHere);
	        }
	        collection = collection.add(e.target);
	      }).on('dragleave', function (e) {
	        collection = collection.not(e.target);
	        if (!collection.length) {
	          $editor.removeClass('dragover');
	        }
	      }).on('drop', function () {
	        collection = $();
	        $editor.removeClass('dragover');
	      });

	      // change dropzone's message on hover.
	      $dropzone.on('dragenter', function () {
	        $dropzone.addClass('hover');
	        $dropzoneMessage.text(lang.image.dropImage);
	      }).on('dragleave', function () {
	        $dropzone.removeClass('hover');
	        $dropzoneMessage.text(lang.image.dragImageHere);
	      });

	      // attach dropImage
	      $dropzone.on('drop', function (event) {
	        var dataTransfer = event.originalEvent.dataTransfer;

	        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
	          event.preventDefault();
	          $editable.focus();
	          context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
	        } else {
	          $.each(dataTransfer.types, function (idx, type) {
	            var content = dataTransfer.getData(type);

	            if (type.toLowerCase().indexOf('text') > -1) {
	              context.invoke('editor.pasteHTML', content);
	            } else {
	              $(content).each(function () {
	                context.invoke('editor.insertNode', this);
	              });
	            }
	          });
	        }
	      }).on('dragover', false); // prevent default dragover event
	    };
	  };


	  var CodeMirror;
	  if (agent.hasCodeMirror) {
	    if (agent.isSupportAmd) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(6)]; (function (cm) {
	        CodeMirror = cm;
	      }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	    } else {
	      CodeMirror = window.CodeMirror;
	    }
	  }

	  /**
	   * @class Codeview
	   */
	  var Codeview = function (context) {
	    var $editor = context.layoutInfo.editor;
	    var $editable = context.layoutInfo.editable;
	    var $codable = context.layoutInfo.codable;
	    var options = context.options;

	    this.sync = function () {
	      var isCodeview = this.isActivated();
	      if (isCodeview && agent.hasCodeMirror) {
	        $codable.data('cmEditor').save();
	      }
	    };

	    /**
	     * @return {Boolean}
	     */
	    this.isActivated = function () {
	      return $editor.hasClass('codeview');
	    };

	    /**
	     * toggle codeview
	     */
	    this.toggle = function () {
	      if (this.isActivated()) {
	        this.deactivate();
	      } else {
	        this.activate();
	      }
	      context.triggerEvent('codeview.toggled');
	    };

	    /**
	     * activate code view
	     */
	    this.activate = function () {
	      $codable.val(dom.html($editable, options.prettifyHtml));
	      $codable.height($editable.height());

	      context.invoke('toolbar.updateCodeview', true);
	      $editor.addClass('codeview');
	      $codable.focus();

	      // activate CodeMirror as codable
	      if (agent.hasCodeMirror) {
	        var cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);

	        // CodeMirror TernServer
	        if (options.codemirror.tern) {
	          var server = new CodeMirror.TernServer(options.codemirror.tern);
	          cmEditor.ternServer = server;
	          cmEditor.on('cursorActivity', function (cm) {
	            server.updateArgHints(cm);
	          });
	        }

	        // CodeMirror hasn't Padding.
	        cmEditor.setSize(null, $editable.outerHeight());
	        $codable.data('cmEditor', cmEditor);
	      }
	    };

	    /**
	     * deactivate code view
	     */
	    this.deactivate = function () {
	      // deactivate CodeMirror as codable
	      if (agent.hasCodeMirror) {
	        var cmEditor = $codable.data('cmEditor');
	        $codable.val(cmEditor.getValue());
	        cmEditor.toTextArea();
	      }

	      var value = dom.value($codable, options.prettifyHtml) || dom.emptyPara;
	      var isChange = $editable.html() !== value;

	      $editable.html(value);
	      $editable.height(options.height ? $codable.height() : 'auto');
	      $editor.removeClass('codeview');

	      if (isChange) {
	        context.triggerEvent('change', $editable.html(), $editable);
	      }

	      $editable.focus();

	      context.invoke('toolbar.updateCodeview', false);
	    };

	    this.destroy = function () {
	      if (this.isActivated()) {
	        this.deactivate();
	      }
	    };
	  };

	  var EDITABLE_PADDING = 24;

	  var Statusbar = function (context) {
	    var $document = $(document);
	    var $statusbar = context.layoutInfo.statusbar;
	    var $editable = context.layoutInfo.editable;
	    var options = context.options;

	    this.initialize = function () {
	      if (options.airMode || options.disableResizeEditor) {
	        return;
	      }

	      $statusbar.on('mousedown', function (event) {
	        event.preventDefault();
	        event.stopPropagation();

	        var editableTop = $editable.offset().top - $document.scrollTop();

	        $document.on('mousemove', function (event) {
	          var height = event.clientY - (editableTop + EDITABLE_PADDING);

	          height = (options.minheight > 0) ? Math.max(height, options.minheight) : height;
	          height = (options.maxHeight > 0) ? Math.min(height, options.maxHeight) : height;

	          $editable.height(height);
	        }).one('mouseup', function () {
	          $document.off('mousemove');
	        });
	      });
	    };

	    this.destroy = function () {
	      $statusbar.off();
	      $statusbar.remove();
	    };
	  };

	  var Fullscreen = function (context) {
	    var $editor = context.layoutInfo.editor;
	    var $toolbar = context.layoutInfo.toolbar;
	    var $editable = context.layoutInfo.editable;
	    var $codable = context.layoutInfo.codable;

	    var $window = $(window);
	    var $scrollbar = $('html, body');

	    /**
	     * toggle fullscreen
	     */
	    this.toggle = function () {
	      var resize = function (size) {
	        $editable.css('height', size.h);
	        $codable.css('height', size.h);
	        if ($codable.data('cmeditor')) {
	          $codable.data('cmeditor').setsize(null, size.h);
	        }
	      };

	      $editor.toggleClass('fullscreen');
	      if (this.isFullscreen()) {
	        $editable.data('orgHeight', $editable.css('height'));

	        $window.on('resize', function () {
	          resize({
	            h: $window.height() - $toolbar.outerHeight()
	          });
	        }).trigger('resize');

	        $scrollbar.css('overflow', 'hidden');
	      } else {
	        $window.off('resize');
	        resize({
	          h: $editable.data('orgHeight')
	        });
	        $scrollbar.css('overflow', 'visible');
	      }

	      context.invoke('toolbar.updateFullscreen', this.isFullscreen());
	    };

	    this.isFullscreen = function () {
	      return $editor.hasClass('fullscreen');
	    };
	  };

	  var Handle = function (context) {
	    var self = this;

	    var $document = $(document);
	    var $editingArea = context.layoutInfo.editingArea;
	    var options = context.options;

	    this.events = {
	      'summernote.mousedown': function (we, e) {
	        if (self.update(e.target)) {
	          e.preventDefault();
	        }
	      },
	      'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
	        self.update();
	      }
	    };

	    this.initialize = function () {
	      this.$handle = $([
	        '<div class="note-handle">',
	        '<div class="note-control-selection">',
	        '<div class="note-control-selection-bg"></div>',
	        '<div class="note-control-holder note-control-nw"></div>',
	        '<div class="note-control-holder note-control-ne"></div>',
	        '<div class="note-control-holder note-control-sw"></div>',
	        '<div class="',
	        (options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
	        ' note-control-se"></div>',
	        (options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
	        '</div>',
	        '</div>'
	      ].join('')).prependTo($editingArea);

	      this.$handle.on('mousedown', function (event) {
	        if (dom.isControlSizing(event.target)) {
	          event.preventDefault();
	          event.stopPropagation();

	          var $target = self.$handle.find('.note-control-selection').data('target'),
	              posStart = $target.offset(),
	              scrollTop = $document.scrollTop();

	          $document.on('mousemove', function (event) {
	            context.invoke('editor.resizeTo', {
	              x: event.clientX - posStart.left,
	              y: event.clientY - (posStart.top - scrollTop)
	            }, $target, !event.shiftKey);

	            self.update($target[0]);
	          }).one('mouseup', function (e) {
	            e.preventDefault();
	            $document.off('mousemove');
	            context.invoke('editor.afterCommand');
	          });

	          if (!$target.data('ratio')) { // original ratio.
	            $target.data('ratio', $target.height() / $target.width());
	          }
	        }
	      });
	    };

	    this.destroy = function () {
	      this.$handle.remove();
	    };

	    this.update = function (target) {
	      var isImage = dom.isImg(target);
	      var $selection = this.$handle.find('.note-control-selection');

	      context.invoke('imagePopover.update', target);

	      if (isImage) {
	        var $image = $(target);
	        var pos = $image.position();

	        // include margin
	        var imageSize = {
	          w: $image.outerWidth(true),
	          h: $image.outerHeight(true)
	        };

	        $selection.css({
	          display: 'block',
	          left: pos.left,
	          top: pos.top,
	          width: imageSize.w,
	          height: imageSize.h
	        }).data('target', $image); // save current image element.

	        var sizingText = imageSize.w + 'x' + imageSize.h;
	        $selection.find('.note-control-selection-info').text(sizingText);
	        context.invoke('editor.saveTarget', target);
	      } else {
	        this.hide();
	      }

	      return isImage;
	    };

	    /**
	     * hide
	     *
	     * @param {jQuery} $handle
	     */
	    this.hide = function () {
	      context.invoke('editor.clearTarget');
	      this.$handle.children().hide();
	    };
	  };

	  var AutoLink = function (context) {
	    var self = this;
	    var defaultScheme = 'http://';
	    var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

	    this.events = {
	      'summernote.keyup': function (we, e) {
	        if (!e.isDefaultPrevented()) {
	          self.handleKeyup(e);
	        }
	      },
	      'summernote.keydown': function (we, e) {
	        self.handleKeydown(e);
	      }
	    };

	    this.initialize = function () {
	      this.lastWordRange = null;
	    };

	    this.destroy = function () {
	      this.lastWordRange = null;
	    };

	    this.replace = function () {
	      if (!this.lastWordRange) {
	        return;
	      }

	      var keyword = this.lastWordRange.toString();
	      var match = keyword.match(linkPattern);

	      if (match && (match[1] || match[2])) {
	        var link = match[1] ? keyword : defaultScheme + keyword;
	        var node = $('<a />').html(keyword).attr('href', link)[0];

	        this.lastWordRange.insertNode(node);
	        this.lastWordRange = null;
	        context.invoke('editor.focus');
	      }

	    };

	    this.handleKeydown = function (e) {
	      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
	        var wordRange = context.invoke('editor.createRange').getWordRange();
	        this.lastWordRange = wordRange;
	      }
	    };

	    this.handleKeyup = function (e) {
	      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
	        this.replace();
	      }
	    };
	  };

	  /**
	   * textarea auto sync.
	   */
	  var AutoSync = function (context) {
	    var $note = context.layoutInfo.note;

	    this.events = {
	      'summernote.change': function () {
	        $note.val(context.invoke('code'));
	      }
	    };

	    this.shouldInitialize = function () {
	      return dom.isTextarea($note[0]);
	    };
	  };

	  var Placeholder = function (context) {
	    var self = this;
	    var $editingArea = context.layoutInfo.editingArea;
	    var options = context.options;

	    this.events = {
	      'summernote.init summernote.change': function () {
	        self.update();
	      },
	      'summernote.codeview.toggled': function () {
	        self.update();
	      }
	    };

	    this.shouldInitialize = function () {
	      return !!options.placeholder;
	    };

	    this.initialize = function () {
	      this.$placeholder = $('<div class="note-placeholder">');
	      this.$placeholder.on('click', function () {
	        context.invoke('focus');
	      }).text(options.placeholder).prependTo($editingArea);
	    };

	    this.destroy = function () {
	      this.$placeholder.remove();
	    };

	    this.update = function () {
	      var isShow = !context.invoke('codeview.isActivated') && context.invoke('editor.isEmpty');
	      this.$placeholder.toggle(isShow);
	    };
	  };

	  var Buttons = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var $toolbar = context.layoutInfo.toolbar;
	    var options = context.options;
	    var lang = options.langInfo;

	    var invertedKeyMap = func.invertObject(options.keyMap[agent.isMac ? 'mac' : 'pc']);

	    var representShortcut = this.representShortcut = function (editorMethod) {
	      if (!options.shortcuts) {
	        return '';
	      }
	      var shortcut = invertedKeyMap[editorMethod];
	      if (agent.isMac) {
	        shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
	      }

	      shortcut = shortcut.replace('BACKSLASH', '\\')
	                         .replace('SLASH', '/')
	                         .replace('LEFTBRACKET', '[')
	                         .replace('RIGHTBRACKET', ']');

	      return ' (' + shortcut + ')';
	    };

	    this.initialize = function () {
	      this.addToolbarButtons();
	      this.addImagePopoverButtons();
	      this.addLinkPopoverButtons();
	      this.fontInstalledMap = {};
	    };

	    this.destroy = function () {
	      delete this.fontInstalledMap;
	    };

	    this.isFontInstalled = function (name) {
	      if (!self.fontInstalledMap.hasOwnProperty(name)) {
	        self.fontInstalledMap[name] = agent.isFontInstalled(name) ||
	          list.contains(options.fontNamesIgnoreCheck, name);
	      }

	      return self.fontInstalledMap[name];
	    };

	    this.addToolbarButtons = function () {
	      context.memo('button.style', function () {
	        return ui.buttonGroup([
	          ui.button({
	            className: 'dropdown-toggle',
	            contents: ui.icon(options.icons.magic) + ' ' + ui.icon(options.icons.caret, 'span'),
	            tooltip: lang.style.style,
	            data: {
	              toggle: 'dropdown'
	            }
	          }),
	          ui.dropdown({
	            className: 'dropdown-style',
	            items: context.options.styleTags,
	            template: function (item) {

	              if (typeof item === 'string') {
	                item = { tag: item, title: (lang.style.hasOwnProperty(item) ? lang.style[item] : item) };
	              }

	              var tag = item.tag;
	              var title = item.title;
	              var style = item.style ? ' style="' + item.style + '" ' : '';
	              var className = item.className ? ' className="' + item.className + '"' : '';

	              return '<' + tag + style + className + '>' + title + '</' + tag +  '>';
	            },
	            click: context.createInvokeHandler('editor.formatBlock')
	          })
	        ]).render();
	      });

	      context.memo('button.bold', function () {
	        return ui.button({
	          className: 'note-btn-bold',
	          contents: ui.icon(options.icons.bold),
	          tooltip: lang.font.bold + representShortcut('bold'),
	          click: context.createInvokeHandler('editor.bold')
	        }).render();
	      });

	      context.memo('button.italic', function () {
	        return ui.button({
	          className: 'note-btn-italic',
	          contents: ui.icon(options.icons.italic),
	          tooltip: lang.font.italic + representShortcut('italic'),
	          click: context.createInvokeHandler('editor.italic')
	        }).render();
	      });

	      context.memo('button.underline', function () {
	        return ui.button({
	          className: 'note-btn-underline',
	          contents: ui.icon(options.icons.underline),
	          tooltip: lang.font.underline + representShortcut('underline'),
	          click: context.createInvokeHandler('editor.underline')
	        }).render();
	      });

	      context.memo('button.clear', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.eraser),
	          tooltip: lang.font.clear + representShortcut('removeFormat'),
	          click: context.createInvokeHandler('editor.removeFormat')
	        }).render();
	      });

	      context.memo('button.strikethrough', function () {
	        return ui.button({
	          className: 'note-btn-strikethrough',
	          contents: ui.icon(options.icons.strikethrough),
	          tooltip: lang.font.strikethrough + representShortcut('strikethrough'),
	          click: context.createInvokeHandler('editor.strikethrough')
	        }).render();
	      });

	      context.memo('button.superscript', function () {
	        return ui.button({
	          className: 'note-btn-superscript',
	          contents: ui.icon(options.icons.superscript),
	          tooltip: lang.font.superscript,
	          click: context.createInvokeHandler('editor.superscript')
	        }).render();
	      });

	      context.memo('button.subscript', function () {
	        return ui.button({
	          className: 'note-btn-subscript',
	          contents: ui.icon(options.icons.subscript),
	          tooltip: lang.font.subscript,
	          click: context.createInvokeHandler('editor.subscript')
	        }).render();
	      });

	      context.memo('button.fontname', function () {
	        return ui.buttonGroup([
	          ui.button({
	            className: 'dropdown-toggle',
	            contents: '<span class="note-current-fontname"/> ' + ui.icon(options.icons.caret, 'span'),
	            tooltip: lang.font.name,
	            data: {
	              toggle: 'dropdown'
	            }
	          }),
	          ui.dropdownCheck({
	            className: 'dropdown-fontname',
	            checkClassName: options.icons.menuCheck,
	            items: options.fontNames.filter(self.isFontInstalled),
	            template: function (item) {
	              return '<span style="font-family:' + item + '">' + item + '</span>';
	            },
	            click: context.createInvokeHandler('editor.fontName')
	          })
	        ]).render();
	      });

	      context.memo('button.fontsize', function () {
	        return ui.buttonGroup([
	          ui.button({
	            className: 'dropdown-toggle',
	            contents: '<span class="note-current-fontsize"/>' + ui.icon(options.icons.caret, 'span'),
	            tooltip: lang.font.size,
	            data: {
	              toggle: 'dropdown'
	            }
	          }),
	          ui.dropdownCheck({
	            className: 'dropdown-fontsize',
	            checkClassName: options.icons.menuCheck,
	            items: options.fontSizes,
	            click: context.createInvokeHandler('editor.fontSize')
	          })
	        ]).render();
	      });

	      context.memo('button.color', function () {
	        return ui.buttonGroup({
	          className: 'note-color',
	          children: [
	            ui.button({
	              className: 'note-current-color-button',
	              contents: ui.icon(options.icons.font + ' note-recent-color'),
	              tooltip: lang.color.recent,
	              click: function (e) {
	                var $button = $(e.currentTarget);
	                context.invoke('editor.color', {
	                  backColor: $button.attr('data-backColor'),
	                  foreColor: $button.attr('data-foreColor')
	                });
	              },
	              callback: function ($button) {
	                var $recentColor = $button.find('.note-recent-color');
	                $recentColor.css('background-color', '#FFFF00');
	                $button.attr('data-backColor', '#FFFF00');
	              }
	            }),
	            ui.button({
	              className: 'dropdown-toggle',
	              contents: ui.icon(options.icons.caret, 'span'),
	              tooltip: lang.color.more,
	              data: {
	                toggle: 'dropdown'
	              }
	            }),
	            ui.dropdown({
	              items: [
	                '<li>',
	                '<div class="btn-group">',
	                '  <div class="note-palette-title">' + lang.color.background + '</div>',
	                '  <div>',
	                '    <button type="button" class="note-color-reset btn btn-default" data-event="backColor" data-value="inherit">',
	                lang.color.transparent,
	                '    </button>',
	                '  </div>',
	                '  <div class="note-holder" data-event="backColor"/>',
	                '</div>',
	                '<div class="btn-group">',
	                '  <div class="note-palette-title">' + lang.color.foreground + '</div>',
	                '  <div>',
	                '    <button type="button" class="note-color-reset btn btn-default" data-event="removeFormat" data-value="foreColor">',
	                lang.color.resetToDefault,
	                '    </button>',
	                '  </div>',
	                '  <div class="note-holder" data-event="foreColor"/>',
	                '</div>',
	                '</li>'
	              ].join(''),
	              callback: function ($dropdown) {
	                $dropdown.find('.note-holder').each(function () {
	                  var $holder = $(this);
	                  $holder.append(ui.palette({
	                    colors: options.colors,
	                    eventName: $holder.data('event')
	                  }).render());
	                });
	              },
	              click: function (event) {
	                var $button = $(event.target);
	                var eventName = $button.data('event');
	                var value = $button.data('value');

	                if (eventName && value) {
	                  var key = eventName === 'backColor' ? 'background-color' : 'color';
	                  var $color = $button.closest('.note-color').find('.note-recent-color');
	                  var $currentButton = $button.closest('.note-color').find('.note-current-color-button');

	                  $color.css(key, value);
	                  $currentButton.attr('data-' + eventName, value);
	                  context.invoke('editor.' + eventName, value);
	                }
	              }
	            })
	          ]
	        }).render();
	      });

	      context.memo('button.ul',  function () {
	        return ui.button({
	          contents: ui.icon(options.icons.unorderedlist),
	          tooltip: lang.lists.unordered + representShortcut('insertUnorderedList'),
	          click: context.createInvokeHandler('editor.insertUnorderedList')
	        }).render();
	      });

	      context.memo('button.ol', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.orderedlist),
	          tooltip: lang.lists.ordered + representShortcut('insertOrderedList'),
	          click:  context.createInvokeHandler('editor.insertOrderedList')
	        }).render();
	      });

	      var justifyLeft = ui.button({
	        contents: ui.icon(options.icons.alignLeft),
	        tooltip: lang.paragraph.left + representShortcut('justifyLeft'),
	        click: context.createInvokeHandler('editor.justifyLeft')
	      });

	      var justifyCenter = ui.button({
	        contents: ui.icon(options.icons.alignCenter),
	        tooltip: lang.paragraph.center + representShortcut('justifyCenter'),
	        click: context.createInvokeHandler('editor.justifyCenter')
	      });

	      var justifyRight = ui.button({
	        contents: ui.icon(options.icons.alignRight),
	        tooltip: lang.paragraph.right + representShortcut('justifyRight'),
	        click: context.createInvokeHandler('editor.justifyRight')
	      });

	      var justifyFull = ui.button({
	        contents: ui.icon(options.icons.alignJustify),
	        tooltip: lang.paragraph.justify + representShortcut('justifyFull'),
	        click: context.createInvokeHandler('editor.justifyFull')
	      });

	      var outdent = ui.button({
	        contents: ui.icon(options.icons.outdent),
	        tooltip: lang.paragraph.outdent + representShortcut('outdent'),
	        click: context.createInvokeHandler('editor.outdent')
	      });

	      var indent = ui.button({
	        contents: ui.icon(options.icons.indent),
	        tooltip: lang.paragraph.indent + representShortcut('indent'),
	        click: context.createInvokeHandler('editor.indent')
	      });

	      context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
	      context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
	      context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
	      context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
	      context.memo('button.outdent', func.invoke(outdent, 'render'));
	      context.memo('button.indent', func.invoke(indent, 'render'));

	      context.memo('button.paragraph', function () {
	        return ui.buttonGroup([
	          ui.button({
	            className: 'dropdown-toggle',
	            contents: ui.icon(options.icons.alignLeft) + ' ' + ui.icon(options.icons.caret, 'span'),
	            tooltip: lang.paragraph.paragraph,
	            data: {
	              toggle: 'dropdown'
	            }
	          }),
	          ui.dropdown([
	            ui.buttonGroup({
	              className: 'note-align',
	              children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
	            }),
	            ui.buttonGroup({
	              className: 'note-list',
	              children: [outdent, indent]
	            })
	          ])
	        ]).render();
	      });

	      context.memo('button.height', function () {
	        return ui.buttonGroup([
	          ui.button({
	            className: 'dropdown-toggle',
	            contents: ui.icon(options.icons.textHeight) + ' ' + ui.icon(options.icons.caret, 'span'),
	            tooltip: lang.font.height,
	            data: {
	              toggle: 'dropdown'
	            }
	          }),
	          ui.dropdownCheck({
	            items: options.lineHeights,
	            checkClassName: options.icons.menuCheck,
	            className: 'dropdown-line-height',
	            click: context.createInvokeHandler('editor.lineHeight')
	          })
	        ]).render();
	      });

	      context.memo('button.table', function () {
	        return ui.buttonGroup([
	          ui.button({
	            className: 'dropdown-toggle',
	            contents: ui.icon(options.icons.table) + ' ' + ui.icon(options.icons.caret, 'span'),
	            tooltip: lang.table.table,
	            data: {
	              toggle: 'dropdown'
	            }
	          }),
	          ui.dropdown({
	            className: 'note-table',
	            items: [
	              '<div class="note-dimension-picker">',
	              '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
	              '  <div class="note-dimension-picker-highlighted"/>',
	              '  <div class="note-dimension-picker-unhighlighted"/>',
	              '</div>',
	              '<div class="note-dimension-display">1 x 1</div>'
	            ].join('')
	          })
	        ], {
	          callback: function ($node) {
	            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
	            $catcher.css({
	              width: options.insertTableMaxSize.col + 'em',
	              height: options.insertTableMaxSize.row + 'em'
	            }).mousedown(context.createInvokeHandler('editor.insertTable'))
	              .on('mousemove', self.tableMoveHandler);
	          }
	        }).render();
	      });

	      context.memo('button.link', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.link),
	          tooltip: lang.link.link + representShortcut('linkDialog.show'),
	          click: context.createInvokeHandler('linkDialog.show')
	        }).render();
	      });

	      context.memo('button.picture', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.picture),
	          tooltip: lang.image.image,
	          click: context.createInvokeHandler('imageDialog.show')
	        }).render();
	      });

	      context.memo('button.video', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.video),
	          tooltip: lang.video.video,
	          click: context.createInvokeHandler('videoDialog.show')
	        }).render();
	      });

	      context.memo('button.hr', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.minus),
	          tooltip: lang.hr.insert + representShortcut('insertHorizontalRule'),
	          click: context.createInvokeHandler('editor.insertHorizontalRule')
	        }).render();
	      });

	      context.memo('button.fullscreen', function () {
	        return ui.button({
	          className: 'btn-fullscreen',
	          contents: ui.icon(options.icons.arrowsAlt),
	          tooltip: lang.options.fullscreen,
	          click: context.createInvokeHandler('fullscreen.toggle')
	        }).render();
	      });

	      context.memo('button.codeview', function () {
	        return ui.button({
	          className: 'btn-codeview',
	          contents: ui.icon(options.icons.code),
	          tooltip: lang.options.codeview,
	          click: context.createInvokeHandler('codeview.toggle')
	        }).render();
	      });

	      context.memo('button.redo', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.redo),
	          tooltip: lang.history.redo + representShortcut('redo'),
	          click: context.createInvokeHandler('editor.redo')
	        }).render();
	      });

	      context.memo('button.undo', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.undo),
	          tooltip: lang.history.undo + representShortcut('undo'),
	          click: context.createInvokeHandler('editor.undo')
	        }).render();
	      });

	      context.memo('button.help', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.question),
	          tooltip: lang.options.help,
	          click: context.createInvokeHandler('helpDialog.show')
	        }).render();
	      });
	    };

	    /**
	     * image : [
	     *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
	     *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
	     *   ['remove', ['removeMedia']]
	     * ],
	     */
	    this.addImagePopoverButtons = function () {
	      // Image Size Buttons
	      context.memo('button.imageSize100', function () {
	        return ui.button({
	          contents: '<span class="note-fontsize-10">100%</span>',
	          tooltip: lang.image.resizeFull,
	          click: context.createInvokeHandler('editor.resize', '1')
	        }).render();
	      });
	      context.memo('button.imageSize50', function () {
	        return  ui.button({
	          contents: '<span class="note-fontsize-10">50%</span>',
	          tooltip: lang.image.resizeHalf,
	          click: context.createInvokeHandler('editor.resize', '0.5')
	        }).render();
	      });
	      context.memo('button.imageSize25', function () {
	        return ui.button({
	          contents: '<span class="note-fontsize-10">25%</span>',
	          tooltip: lang.image.resizeQuarter,
	          click: context.createInvokeHandler('editor.resize', '0.25')
	        }).render();
	      });

	      // Float Buttons
	      context.memo('button.floatLeft', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.alignLeft),
	          tooltip: lang.image.floatLeft,
	          click: context.createInvokeHandler('editor.floatMe', 'left')
	        }).render();
	      });

	      context.memo('button.floatRight', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.alignRight),
	          tooltip: lang.image.floatRight,
	          click: context.createInvokeHandler('editor.floatMe', 'right')
	        }).render();
	      });

	      context.memo('button.floatNone', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.alignJustify),
	          tooltip: lang.image.floatNone,
	          click: context.createInvokeHandler('editor.floatMe', 'none')
	        }).render();
	      });

	      // Remove Buttons
	      context.memo('button.removeMedia', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.trash),
	          tooltip: lang.image.remove,
	          click: context.createInvokeHandler('editor.removeMedia')
	        }).render();
	      });
	    };

	    this.addLinkPopoverButtons = function () {
	      context.memo('button.linkDialogShow', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.link),
	          tooltip: lang.link.edit,
	          click: context.createInvokeHandler('linkDialog.show')
	        }).render();
	      });

	      context.memo('button.unlink', function () {
	        return ui.button({
	          contents: ui.icon(options.icons.unlink),
	          tooltip: lang.link.unlink,
	          click: context.createInvokeHandler('editor.unlink')
	        }).render();
	      });
	    };

	    this.build = function ($container, groups) {
	      for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
	        var group = groups[groupIdx];
	        var groupName = group[0];
	        var buttons = group[1];

	        var $group = ui.buttonGroup({
	          className: 'note-' + groupName
	        }).render();

	        for (var idx = 0, len = buttons.length; idx < len; idx++) {
	          var button = context.memo('button.' + buttons[idx]);
	          if (button) {
	            $group.append(typeof button === 'function' ? button(context) : button);
	          }
	        }
	        $group.appendTo($container);
	      }
	    };

	    this.updateCurrentStyle = function () {
	      var styleInfo = context.invoke('editor.currentStyle');
	      this.updateBtnStates({
	        '.note-btn-bold': function () {
	          return styleInfo['font-bold'] === 'bold';
	        },
	        '.note-btn-italic': function () {
	          return styleInfo['font-italic'] === 'italic';
	        },
	        '.note-btn-underline': function () {
	          return styleInfo['font-underline'] === 'underline';
	        },
	        '.note-btn-subscript': function () {
	          return styleInfo['font-subscript'] === 'subscript';
	        },
	        '.note-btn-superscript': function () {
	          return styleInfo['font-superscript'] === 'superscript';
	        },
	        '.note-btn-strikethrough': function () {
	          return styleInfo['font-strikethrough'] === 'strikethrough';
	        }
	      });

	      if (styleInfo['font-family']) {
	        var fontNames = styleInfo['font-family'].split(',').map(function (name) {
	          return name.replace(/[\'\"]/g, '')
	            .replace(/\s+$/, '')
	            .replace(/^\s+/, '');
	        });
	        var fontName = list.find(fontNames, self.isFontInstalled);

	        $toolbar.find('.dropdown-fontname li a').each(function () {
	          // always compare string to avoid creating another func.
	          var isChecked = ($(this).data('value') + '') === (fontName + '');
	          this.className = isChecked ? 'checked' : '';
	        });
	        $toolbar.find('.note-current-fontname').text(fontName);
	      }

	      if (styleInfo['font-size']) {
	        var fontSize = styleInfo['font-size'];
	        $toolbar.find('.dropdown-fontsize li a').each(function () {
	          // always compare with string to avoid creating another func.
	          var isChecked = ($(this).data('value') + '') === (fontSize + '');
	          this.className = isChecked ? 'checked' : '';
	        });
	        $toolbar.find('.note-current-fontsize').text(fontSize);
	      }

	      if (styleInfo['line-height']) {
	        var lineHeight = styleInfo['line-height'];
	        $toolbar.find('.dropdown-line-height li a').each(function () {
	          // always compare with string to avoid creating another func.
	          var isChecked = ($(this).data('value') + '') === (lineHeight + '');
	          this.className = isChecked ? 'checked' : '';
	        });
	      }
	    };

	    this.updateBtnStates = function (infos) {
	      $.each(infos, function (selector, pred) {
	        ui.toggleBtnActive($toolbar.find(selector), pred());
	      });
	    };

	    this.tableMoveHandler = function (event) {
	      var PX_PER_EM = 18;
	      var $picker = $(event.target.parentNode); // target is mousecatcher
	      var $dimensionDisplay = $picker.next();
	      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
	      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
	      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');

	      var posOffset;
	      // HTML5 with jQuery - e.offsetX is undefined in Firefox
	      if (event.offsetX === undefined) {
	        var posCatcher = $(event.target).offset();
	        posOffset = {
	          x: event.pageX - posCatcher.left,
	          y: event.pageY - posCatcher.top
	        };
	      } else {
	        posOffset = {
	          x: event.offsetX,
	          y: event.offsetY
	        };
	      }

	      var dim = {
	        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
	        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
	      };

	      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
	      $catcher.data('value', dim.c + 'x' + dim.r);

	      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {
	        $unhighlighted.css({ width: dim.c + 1 + 'em'});
	      }

	      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {
	        $unhighlighted.css({ height: dim.r + 1 + 'em'});
	      }

	      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
	    };
	  };

	  var Toolbar = function (context) {
	    var ui = $.summernote.ui;

	    var $note = context.layoutInfo.note;
	    var $toolbar = context.layoutInfo.toolbar;
	    var options = context.options;

	    this.shouldInitialize = function () {
	      return !options.airMode;
	    };

	    this.initialize = function () {
	      options.toolbar = options.toolbar || [];

	      if (!options.toolbar.length) {
	        $toolbar.hide();
	      } else {
	        context.invoke('buttons.build', $toolbar, options.toolbar);
	      }

	      if (options.toolbarContainer) {
	        $toolbar.appendTo(options.toolbarContainer);
	      }

	      $note.on('summernote.keyup summernote.mouseup summernote.change', function () {
	        context.invoke('buttons.updateCurrentStyle');
	      });

	      context.invoke('buttons.updateCurrentStyle');
	    };

	    this.destroy = function () {
	      $toolbar.children().remove();
	    };

	    this.updateFullscreen = function (isFullscreen) {
	      ui.toggleBtnActive($toolbar.find('.btn-fullscreen'), isFullscreen);
	    };

	    this.updateCodeview = function (isCodeview) {
	      ui.toggleBtnActive($toolbar.find('.btn-codeview'), isCodeview);
	      if (isCodeview) {
	        this.deactivate();
	      } else {
	        this.activate();
	      }
	    };

	    this.activate = function (isIncludeCodeview) {
	      var $btn = $toolbar.find('button');
	      if (!isIncludeCodeview) {
	        $btn = $btn.not('.btn-codeview');
	      }
	      ui.toggleBtn($btn, true);
	    };

	    this.deactivate = function (isIncludeCodeview) {
	      var $btn = $toolbar.find('button');
	      if (!isIncludeCodeview) {
	        $btn = $btn.not('.btn-codeview');
	      }
	      ui.toggleBtn($btn, false);
	    };
	  };

	  var LinkDialog = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var $editor = context.layoutInfo.editor;
	    var options = context.options;
	    var lang = options.langInfo;

	    this.initialize = function () {
	      var $container = options.dialogsInBody ? $(document.body) : $editor;

	      var body = '<div class="form-group">' +
	                   '<label>' + lang.link.textToDisplay + '</label>' +
	                   '<input class="note-link-text form-control" type="text" />' +
	                 '</div>' +
	                 '<div class="form-group">' +
	                   '<label>' + lang.link.url + '</label>' +
	                   '<input class="note-link-url form-control" type="text" value="http://" />' +
	                 '</div>' +
	                 (!options.disableLinkTarget ?
	                   '<div class="checkbox">' +
	                     '<label>' + '<input type="checkbox" checked> ' + lang.link.openInNewWindow + '</label>' +
	                   '</div>' : ''
	                 );
	      var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';

	      this.$dialog = ui.dialog({
	        className: 'link-dialog',
	        title: lang.link.insert,
	        fade: options.dialogsFade,
	        body: body,
	        footer: footer
	      }).render().appendTo($container);
	    };

	    this.destroy = function () {
	      ui.hideDialog(this.$dialog);
	      this.$dialog.remove();
	    };

	    this.bindEnterKey = function ($input, $btn) {
	      $input.on('keypress', function (event) {
	        if (event.keyCode === key.code.ENTER) {
	          $btn.trigger('click');
	        }
	      });
	    };

	    /**
	     * Show link dialog and set event handlers on dialog controls.
	     *
	     * @param {Object} linkInfo
	     * @return {Promise}
	     */
	    this.showLinkDialog = function (linkInfo) {
	      return $.Deferred(function (deferred) {
	        var $linkText = self.$dialog.find('.note-link-text'),
	        $linkUrl = self.$dialog.find('.note-link-url'),
	        $linkBtn = self.$dialog.find('.note-link-btn'),
	        $openInNewWindow = self.$dialog.find('input[type=checkbox]');

	        ui.onDialogShown(self.$dialog, function () {
	          context.triggerEvent('dialog.shown');

	          $linkText.val(linkInfo.text);

	          $linkText.on('input', function () {
	            ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
	            // if linktext was modified by keyup,
	            // stop cloning text from linkUrl
	            linkInfo.text = $linkText.val();
	          });

	          // if no url was given, copy text to url
	          if (!linkInfo.url) {
	            linkInfo.url = linkInfo.text || 'http://';
	            ui.toggleBtn($linkBtn, linkInfo.text);
	          }

	          $linkUrl.on('input', function () {
	            ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
	            // display same link on `Text to display` input
	            // when create a new link
	            if (!linkInfo.text) {
	              $linkText.val($linkUrl.val());
	            }
	          }).val(linkInfo.url).trigger('focus');

	          self.bindEnterKey($linkUrl, $linkBtn);
	          self.bindEnterKey($linkText, $linkBtn);

	          $openInNewWindow.prop('checked', linkInfo.isNewWindow);

	          $linkBtn.one('click', function (event) {
	            event.preventDefault();

	            deferred.resolve({
	              range: linkInfo.range,
	              url: $linkUrl.val(),
	              text: $linkText.val(),
	              isNewWindow: $openInNewWindow.is(':checked')
	            });
	            self.$dialog.modal('hide');
	          });
	        });

	        ui.onDialogHidden(self.$dialog, function () {
	          // detach events
	          $linkText.off('input keypress');
	          $linkUrl.off('input keypress');
	          $linkBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        });

	        ui.showDialog(self.$dialog);
	      }).promise();
	    };

	    /**
	     * @param {Object} layoutInfo
	     */
	    this.show = function () {
	      var linkInfo = context.invoke('editor.getLinkInfo');

	      context.invoke('editor.saveRange');
	      this.showLinkDialog(linkInfo).then(function (linkInfo) {
	        context.invoke('editor.restoreRange');
	        context.invoke('editor.createLink', linkInfo);
	      }).fail(function () {
	        context.invoke('editor.restoreRange');
	      });
	    };
	    context.memo('help.linkDialog.show', options.langInfo.help['linkDialog.show']);
	  };

	  var LinkPopover = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var options = context.options;

	    this.events = {
	      'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
	        self.update();
	      },
	      'summernote.dialog.shown': function () {
	        self.hide();
	      }
	    };

	    this.shouldInitialize = function () {
	      return !list.isEmpty(options.popover.link);
	    };

	    this.initialize = function () {
	      this.$popover = ui.popover({
	        className: 'note-link-popover',
	        callback: function ($node) {
	          var $content = $node.find('.popover-content');
	          $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
	        }
	      }).render().appendTo('body');
	      var $content = this.$popover.find('.popover-content');

	      context.invoke('buttons.build', $content, options.popover.link);
	    };

	    this.destroy = function () {
	      this.$popover.remove();
	    };

	    this.update = function () {
	      // Prevent focusing on editable when invoke('code') is executed
	      if (!context.invoke('editor.hasFocus')) {
	        this.hide();
	        return;
	      }

	      var rng = context.invoke('editor.createRange');
	      if (rng.isCollapsed() && rng.isOnAnchor()) {
	        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
	        var href = $(anchor).attr('href');
	        this.$popover.find('a').attr('href', href).html(href);

	        var pos = dom.posFromPlaceholder(anchor);
	        this.$popover.css({
	          display: 'block',
	          left: pos.left,
	          top: pos.top
	        });
	      } else {
	        this.hide();
	      }
	    };

	    this.hide = function () {
	      this.$popover.hide();
	    };
	  };

	  var ImageDialog = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var $editor = context.layoutInfo.editor;
	    var options = context.options;
	    var lang = options.langInfo;

	    this.initialize = function () {
	      var $container = options.dialogsInBody ? $(document.body) : $editor;

	      var imageLimitation = '';
	      if (options.maximumImageFileSize) {
	        var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));
	        var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
	                           ' ' + ' KMGTP'[unit] + 'B';
	        imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';
	      }

	      var body = '<div class="form-group note-group-select-from-files">' +
	                   '<label>' + lang.image.selectFromFiles + '</label>' +
	                   '<input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' +
	                   imageLimitation +
	                 '</div>' +
	                 '<div class="form-group note-group-image-url" style="overflow:auto;">' +
	                   '<label>' + lang.image.url + '</label>' +
	                   '<input class="note-image-url form-control col-md-12" type="text" />' +
	                 '</div>';
	      var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';

	      this.$dialog = ui.dialog({
	        title: lang.image.insert,
	        fade: options.dialogsFade,
	        body: body,
	        footer: footer
	      }).render().appendTo($container);
	    };

	    this.destroy = function () {
	      ui.hideDialog(this.$dialog);
	      this.$dialog.remove();
	    };

	    this.bindEnterKey = function ($input, $btn) {
	      $input.on('keypress', function (event) {
	        if (event.keyCode === key.code.ENTER) {
	          $btn.trigger('click');
	        }
	      });
	    };

	    this.show = function () {
	      context.invoke('editor.saveRange');
	      this.showImageDialog().then(function (data) {
	        // [workaround] hide dialog before restore range for IE range focus
	        ui.hideDialog(self.$dialog);
	        context.invoke('editor.restoreRange');

	        if (typeof data === 'string') { // image url
	          context.invoke('editor.insertImage', data);
	        } else { // array of files
	          context.invoke('editor.insertImagesOrCallback', data);
	        }
	      }).fail(function () {
	        context.invoke('editor.restoreRange');
	      });
	    };

	    /**
	     * show image dialog
	     *
	     * @param {jQuery} $dialog
	     * @return {Promise}
	     */
	    this.showImageDialog = function () {
	      return $.Deferred(function (deferred) {
	        var $imageInput = self.$dialog.find('.note-image-input'),
	            $imageUrl = self.$dialog.find('.note-image-url'),
	            $imageBtn = self.$dialog.find('.note-image-btn');

	        ui.onDialogShown(self.$dialog, function () {
	          context.triggerEvent('dialog.shown');

	          // Cloning imageInput to clear element.
	          $imageInput.replaceWith($imageInput.clone()
	            .on('change', function () {
	              deferred.resolve(this.files || this.value);
	            })
	            .val('')
	          );

	          $imageBtn.click(function (event) {
	            event.preventDefault();

	            deferred.resolve($imageUrl.val());
	          });

	          $imageUrl.on('keyup paste', function () {
	            var url = $imageUrl.val();
	            ui.toggleBtn($imageBtn, url);
	          }).val('').trigger('focus');
	          self.bindEnterKey($imageUrl, $imageBtn);
	        });

	        ui.onDialogHidden(self.$dialog, function () {
	          $imageInput.off('change');
	          $imageUrl.off('keyup paste keypress');
	          $imageBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        });

	        ui.showDialog(self.$dialog);
	      });
	    };
	  };

	  var ImagePopover = function (context) {
	    var ui = $.summernote.ui;

	    var options = context.options;

	    this.shouldInitialize = function () {
	      return !list.isEmpty(options.popover.image);
	    };

	    this.initialize = function () {
	      this.$popover = ui.popover({
	        className: 'note-image-popover'
	      }).render().appendTo('body');
	      var $content = this.$popover.find('.popover-content');

	      context.invoke('buttons.build', $content, options.popover.image);
	    };

	    this.destroy = function () {
	      this.$popover.remove();
	    };

	    this.update = function (target) {
	      if (dom.isImg(target)) {
	        var pos = dom.posFromPlaceholder(target);
	        this.$popover.css({
	          display: 'block',
	          left: pos.left,
	          top: pos.top
	        });
	      } else {
	        this.hide();
	      }
	    };

	    this.hide = function () {
	      this.$popover.hide();
	    };
	  };

	  var VideoDialog = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var $editor = context.layoutInfo.editor;
	    var options = context.options;
	    var lang = options.langInfo;

	    this.initialize = function () {
	      var $container = options.dialogsInBody ? $(document.body) : $editor;

	      var body = '<div class="form-group row-fluid">' +
	          '<label>' + lang.video.url + ' <small class="text-muted">' + lang.video.providers + '</small></label>' +
	          '<input class="note-video-url form-control span12" type="text" />' +
	          '</div>';
	      var footer = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + lang.video.insert + '</button>';

	      this.$dialog = ui.dialog({
	        title: lang.video.insert,
	        fade: options.dialogsFade,
	        body: body,
	        footer: footer
	      }).render().appendTo($container);
	    };

	    this.destroy = function () {
	      ui.hideDialog(this.$dialog);
	      this.$dialog.remove();
	    };

	    this.bindEnterKey = function ($input, $btn) {
	      $input.on('keypress', function (event) {
	        if (event.keyCode === key.code.ENTER) {
	          $btn.trigger('click');
	        }
	      });
	    };

	    this.createVideoNode = function (url) {
	      // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
	      var ytRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	      var ytMatch = url.match(ytRegExp);

	      var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
	      var igMatch = url.match(igRegExp);

	      var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
	      var vMatch = url.match(vRegExp);

	      var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/;
	      var vimMatch = url.match(vimRegExp);

	      var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
	      var dmMatch = url.match(dmRegExp);

	      var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
	      var youkuMatch = url.match(youkuRegExp);

	      var mp4RegExp = /^.+.(mp4|m4v)$/;
	      var mp4Match = url.match(mp4RegExp);

	      var oggRegExp = /^.+.(ogg|ogv)$/;
	      var oggMatch = url.match(oggRegExp);

	      var webmRegExp = /^.+.(webm)$/;
	      var webmMatch = url.match(webmRegExp);

	      var $video;
	      if (ytMatch && ytMatch[1].length === 11) {
	        var youtubeId = ytMatch[1];
	        $video = $('<iframe>')
	            .attr('frameborder', 0)
	            .attr('src', '//www.youtube.com/embed/' + youtubeId)
	            .attr('width', '640').attr('height', '360');
	      } else if (igMatch && igMatch[0].length) {
	        $video = $('<iframe>')
	            .attr('frameborder', 0)
	            .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
	            .attr('width', '612').attr('height', '710')
	            .attr('scrolling', 'no')
	            .attr('allowtransparency', 'true');
	      } else if (vMatch && vMatch[0].length) {
	        $video = $('<iframe>')
	            .attr('frameborder', 0)
	            .attr('src', vMatch[0] + '/embed/simple')
	            .attr('width', '600').attr('height', '600')
	            .attr('class', 'vine-embed');
	      } else if (vimMatch && vimMatch[3].length) {
	        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
	            .attr('frameborder', 0)
	            .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
	            .attr('width', '640').attr('height', '360');
	      } else if (dmMatch && dmMatch[2].length) {
	        $video = $('<iframe>')
	            .attr('frameborder', 0)
	            .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
	            .attr('width', '640').attr('height', '360');
	      } else if (youkuMatch && youkuMatch[1].length) {
	        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
	            .attr('frameborder', 0)
	            .attr('height', '498')
	            .attr('width', '510')
	            .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
	      } else if (mp4Match || oggMatch || webmMatch) {
	        $video = $('<video controls>')
	            .attr('src', url)
	            .attr('width', '640').attr('height', '360');
	      } else {
	        // this is not a known video link. Now what, Cat? Now what?
	        return false;
	      }

	      $video.addClass('note-video-clip');

	      return $video[0];
	    };

	    this.show = function () {
	      var text = context.invoke('editor.getSelectedText');
	      context.invoke('editor.saveRange');
	      this.showVideoDialog(text).then(function (url) {
	        // [workaround] hide dialog before restore range for IE range focus
	        ui.hideDialog(self.$dialog);
	        context.invoke('editor.restoreRange');

	        // build node
	        var $node = self.createVideoNode(url);

	        if ($node) {
	          // insert video node
	          context.invoke('editor.insertNode', $node);
	        }
	      }).fail(function () {
	        context.invoke('editor.restoreRange');
	      });
	    };

	    /**
	     * show image dialog
	     *
	     * @param {jQuery} $dialog
	     * @return {Promise}
	     */
	    this.showVideoDialog = function (text) {
	      return $.Deferred(function (deferred) {
	        var $videoUrl = self.$dialog.find('.note-video-url'),
	            $videoBtn = self.$dialog.find('.note-video-btn');

	        ui.onDialogShown(self.$dialog, function () {
	          context.triggerEvent('dialog.shown');

	          $videoUrl.val(text).on('input', function () {
	            ui.toggleBtn($videoBtn, $videoUrl.val());
	          }).trigger('focus');

	          $videoBtn.click(function (event) {
	            event.preventDefault();

	            deferred.resolve($videoUrl.val());
	          });

	          self.bindEnterKey($videoUrl, $videoBtn);
	        });

	        ui.onDialogHidden(self.$dialog, function () {
	          $videoUrl.off('input');
	          $videoBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        });

	        ui.showDialog(self.$dialog);
	      });
	    };
	  };

	  var HelpDialog = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var $editor = context.layoutInfo.editor;
	    var options = context.options;
	    var lang = options.langInfo;

	    this.createShortCutList = function () {
	      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
	      return Object.keys(keyMap).map(function (key) {
	        var command = keyMap[key];
	        var $row = $('<div><div class="help-list-item"/></div>');
	        $row.append($('<label><kbd>' + key + '</kdb></label>').css({
	          'width': 180,
	          'margin-right': 10
	        })).append($('<span/>').html(context.memo('help.' + command) || command));
	        return $row.html();
	      }).join('');
	    };

	    this.initialize = function () {
	      var $container = options.dialogsInBody ? $(document.body) : $editor;

	      var body = [
	        '<p class="text-center">',
	        '<a href="http://summernote.org/" target="_blank">Summernote 0.8.2</a> · ',
	        '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
	        '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
	        '</p>'
	      ].join('');

	      this.$dialog = ui.dialog({
	        title: lang.options.help,
	        fade: options.dialogsFade,
	        body: this.createShortCutList(),
	        footer: body,
	        callback: function ($node) {
	          $node.find('.modal-body').css({
	            'max-height': 300,
	            'overflow': 'scroll'
	          });
	        }
	      }).render().appendTo($container);
	    };

	    this.destroy = function () {
	      ui.hideDialog(this.$dialog);
	      this.$dialog.remove();
	    };

	    /**
	     * show help dialog
	     *
	     * @return {Promise}
	     */
	    this.showHelpDialog = function () {
	      return $.Deferred(function (deferred) {
	        ui.onDialogShown(self.$dialog, function () {
	          context.triggerEvent('dialog.shown');
	          deferred.resolve();
	        });
	        ui.showDialog(self.$dialog);
	      }).promise();
	    };

	    this.show = function () {
	      context.invoke('editor.saveRange');
	      this.showHelpDialog().then(function () {
	        context.invoke('editor.restoreRange');
	      });
	    };
	  };

	  var AirPopover = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var options = context.options;

	    var AIR_MODE_POPOVER_X_OFFSET = 20;

	    this.events = {
	      'summernote.keyup summernote.mouseup summernote.scroll': function () {
	        self.update();
	      },
	      'summernote.change summernote.dialog.shown': function () {
	        self.hide();
	      },
	      'summernote.focusout': function (we, e) {
	        // [workaround] Firefox doesn't support relatedTarget on focusout
	        //  - Ignore hide action on focus out in FF.
	        if (agent.isFF) {
	          return;
	        }

	        if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(self.$popover[0]))) {
	          self.hide();
	        }
	      }
	    };

	    this.shouldInitialize = function () {
	      return options.airMode && !list.isEmpty(options.popover.air);
	    };

	    this.initialize = function () {
	      this.$popover = ui.popover({
	        className: 'note-air-popover'
	      }).render().appendTo('body');
	      var $content = this.$popover.find('.popover-content');

	      context.invoke('buttons.build', $content, options.popover.air);
	    };

	    this.destroy = function () {
	      this.$popover.remove();
	    };

	    this.update = function () {
	      var styleInfo = context.invoke('editor.currentStyle');
	      if (styleInfo.range && !styleInfo.range.isCollapsed()) {
	        var rect = list.last(styleInfo.range.getClientRects());
	        if (rect) {
	          var bnd = func.rect2bnd(rect);
	          this.$popover.css({
	            display: 'block',
	            left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
	            top: bnd.top + bnd.height
	          });
	        }
	      } else {
	        this.hide();
	      }
	    };

	    this.hide = function () {
	      this.$popover.hide();
	    };
	  };

	  var HintPopover = function (context) {
	    var self = this;
	    var ui = $.summernote.ui;

	    var POPOVER_DIST = 5;
	    var hint = context.options.hint || [];
	    var direction = context.options.hintDirection || 'bottom';
	    var hints = $.isArray(hint) ? hint : [hint];

	    this.events = {
	      'summernote.keyup': function (we, e) {
	        if (!e.isDefaultPrevented()) {
	          self.handleKeyup(e);
	        }
	      },
	      'summernote.keydown': function (we, e) {
	        self.handleKeydown(e);
	      },
	      'summernote.dialog.shown': function () {
	        self.hide();
	      }
	    };

	    this.shouldInitialize = function () {
	      return hints.length > 0;
	    };

	    this.initialize = function () {
	      this.lastWordRange = null;
	      this.$popover = ui.popover({
	        className: 'note-hint-popover',
	        hideArrow: true,
	        direction: ''
	      }).render().appendTo('body');

	      this.$popover.hide();

	      this.$content = this.$popover.find('.popover-content');

	      this.$content.on('click', '.note-hint-item', function () {
	        self.$content.find('.active').removeClass('active');
	        $(this).addClass('active');
	        self.replace();
	      });
	    };

	    this.destroy = function () {
	      this.$popover.remove();
	    };

	    this.selectItem = function ($item) {
	      this.$content.find('.active').removeClass('active');
	      $item.addClass('active');

	      this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
	    };

	    this.moveDown = function () {
	      var $current = this.$content.find('.note-hint-item.active');
	      var $next = $current.next();

	      if ($next.length) {
	        this.selectItem($next);
	      } else {
	        var $nextGroup = $current.parent().next();

	        if (!$nextGroup.length) {
	          $nextGroup = this.$content.find('.note-hint-group').first();
	        }

	        this.selectItem($nextGroup.find('.note-hint-item').first());
	      }
	    };

	    this.moveUp = function () {
	      var $current = this.$content.find('.note-hint-item.active');
	      var $prev = $current.prev();

	      if ($prev.length) {
	        this.selectItem($prev);
	      } else {
	        var $prevGroup = $current.parent().prev();

	        if (!$prevGroup.length) {
	          $prevGroup = this.$content.find('.note-hint-group').last();
	        }

	        this.selectItem($prevGroup.find('.note-hint-item').last());
	      }
	    };

	    this.replace = function () {
	      var $item = this.$content.find('.note-hint-item.active');

	      if ($item.length) {
	        var node = this.nodeFromItem($item);
	        this.lastWordRange.insertNode(node);
	        range.createFromNode(node).collapse().select();

	        this.lastWordRange = null;
	        this.hide();
	        context.invoke('editor.focus');
	      }

	    };

	    this.nodeFromItem = function ($item) {
	      var hint = hints[$item.data('index')];
	      var item = $item.data('item');
	      var node = hint.content ? hint.content(item) : item;
	      if (typeof node === 'string') {
	        node = dom.createText(node);
	      }
	      return node;
	    };

	    this.createItemTemplates = function (hintIdx, items) {
	      var hint = hints[hintIdx];
	      return items.map(function (item, idx) {
	        var $item = $('<div class="note-hint-item"/>');
	        $item.append(hint.template ? hint.template(item) : item + '');
	        $item.data({
	          'index': hintIdx,
	          'item': item
	        });

	        if (hintIdx === 0 && idx === 0) {
	          $item.addClass('active');
	        }
	        return $item;
	      });
	    };

	    this.handleKeydown = function (e) {
	      if (!this.$popover.is(':visible')) {
	        return;
	      }

	      if (e.keyCode === key.code.ENTER) {
	        e.preventDefault();
	        this.replace();
	      } else if (e.keyCode === key.code.UP) {
	        e.preventDefault();
	        this.moveUp();
	      } else if (e.keyCode === key.code.DOWN) {
	        e.preventDefault();
	        this.moveDown();
	      }
	    };

	    this.searchKeyword = function (index, keyword, callback) {
	      var hint = hints[index];
	      if (hint && hint.match.test(keyword) && hint.search) {
	        var matches = hint.match.exec(keyword);
	        hint.search(matches[1], callback);
	      } else {
	        callback();
	      }
	    };

	    this.createGroup = function (idx, keyword) {
	      var $group = $('<div class="note-hint-group note-hint-group-' + idx + '"/>');
	      this.searchKeyword(idx, keyword, function (items) {
	        items = items || [];
	        if (items.length) {
	          $group.html(self.createItemTemplates(idx, items));
	          self.show();
	        }
	      });

	      return $group;
	    };

	    this.handleKeyup = function (e) {
	      if (list.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
	        if (e.keyCode === key.code.ENTER) {
	          if (this.$popover.is(':visible')) {
	            return;
	          }
	        }
	      } else {
	        var wordRange = context.invoke('editor.createRange').getWordRange();
	        var keyword = wordRange.toString();
	        if (hints.length && keyword) {
	          this.$content.empty();

	          var bnd = func.rect2bnd(list.last(wordRange.getClientRects()));
	          if (bnd) {

	            this.$popover.hide();

	            this.lastWordRange = wordRange;

	            hints.forEach(function (hint, idx) {
	              if (hint.match.test(keyword)) {
	                self.createGroup(idx, keyword).appendTo(self.$content);
	              }
	            });

	            // set position for popover after group is created
	            if (direction === 'top') {
	              this.$popover.css({
	                left: bnd.left,
	                top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
	              });
	            } else {
	              this.$popover.css({
	                left: bnd.left,
	                top: bnd.top + bnd.height + POPOVER_DIST
	              });
	            }

	          }
	        } else {
	          this.hide();
	        }
	      }
	    };

	    this.show = function () {
	      this.$popover.show();
	    };

	    this.hide = function () {
	      this.$popover.hide();
	    };
	  };


	  $.summernote = $.extend($.summernote, {
	    version: '0.8.2',
	    ui: ui,
	    dom: dom,

	    plugins: {},

	    options: {
	      modules: {
	        'editor': Editor,
	        'clipboard': Clipboard,
	        'dropzone': Dropzone,
	        'codeview': Codeview,
	        'statusbar': Statusbar,
	        'fullscreen': Fullscreen,
	        'handle': Handle,
	        // FIXME: HintPopover must be front of autolink
	        //  - Script error about range when Enter key is pressed on hint popover
	        'hintPopover': HintPopover,
	        'autoLink': AutoLink,
	        'autoSync': AutoSync,
	        'placeholder': Placeholder,
	        'buttons': Buttons,
	        'toolbar': Toolbar,
	        'linkDialog': LinkDialog,
	        'linkPopover': LinkPopover,
	        'imageDialog': ImageDialog,
	        'imagePopover': ImagePopover,
	        'videoDialog': VideoDialog,
	        'helpDialog': HelpDialog,
	        'airPopover': AirPopover
	      },

	      buttons: {},
	      
	      lang: 'en-US',

	      // toolbar
	      toolbar: [
	        ['style', ['style']],
	        ['font', ['bold', 'underline', 'clear']],
	        ['fontname', ['fontname']],
	        ['color', ['color']],
	        ['para', ['ul', 'ol', 'paragraph']],
	        ['table', ['table']],
	        ['insert', ['link', 'picture', 'video']],
	        ['view', ['fullscreen', 'codeview', 'help']]
	      ],

	      // popover
	      popover: {
	        image: [
	          ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
	          ['float', ['floatLeft', 'floatRight', 'floatNone']],
	          ['remove', ['removeMedia']]
	        ],
	        link: [
	          ['link', ['linkDialogShow', 'unlink']]
	        ],
	        air: [
	          ['color', ['color']],
	          ['font', ['bold', 'underline', 'clear']],
	          ['para', ['ul', 'paragraph']],
	          ['table', ['table']],
	          ['insert', ['link', 'picture']]
	        ]
	      },

	      // air mode: inline editor
	      airMode: false,

	      width: null,
	      height: null,

	      focus: false,
	      tabSize: 4,
	      styleWithSpan: true,
	      shortcuts: true,
	      textareaAutoSync: true,
	      direction: null,

	      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

	      fontNames: [
	        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
	        'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
	        'Tahoma', 'Times New Roman', 'Verdana'
	      ],

	      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],

	      // pallete colors(n x n)
	      colors: [
	        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
	        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
	        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
	        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
	        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
	        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
	        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
	        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
	      ],

	      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

	      tableClassName: 'table table-bordered',

	      insertTableMaxSize: {
	        col: 10,
	        row: 10
	      },

	      dialogsInBody: false,
	      dialogsFade: false,

	      maximumImageFileSize: null,

	      callbacks: {
	        onInit: null,
	        onFocus: null,
	        onBlur: null,
	        onEnter: null,
	        onKeyup: null,
	        onKeydown: null,
	        onImageUpload: null,
	        onImageUploadError: null
	      },

	      codemirror: {
	        mode: 'text/html',
	        htmlMode: true,
	        lineNumbers: true
	      },

	      keyMap: {
	        pc: {
	          'ENTER': 'insertParagraph',
	          'CTRL+Z': 'undo',
	          'CTRL+Y': 'redo',
	          'TAB': 'tab',
	          'SHIFT+TAB': 'untab',
	          'CTRL+B': 'bold',
	          'CTRL+I': 'italic',
	          'CTRL+U': 'underline',
	          'CTRL+SHIFT+S': 'strikethrough',
	          'CTRL+BACKSLASH': 'removeFormat',
	          'CTRL+SHIFT+L': 'justifyLeft',
	          'CTRL+SHIFT+E': 'justifyCenter',
	          'CTRL+SHIFT+R': 'justifyRight',
	          'CTRL+SHIFT+J': 'justifyFull',
	          'CTRL+SHIFT+NUM7': 'insertUnorderedList',
	          'CTRL+SHIFT+NUM8': 'insertOrderedList',
	          'CTRL+LEFTBRACKET': 'outdent',
	          'CTRL+RIGHTBRACKET': 'indent',
	          'CTRL+NUM0': 'formatPara',
	          'CTRL+NUM1': 'formatH1',
	          'CTRL+NUM2': 'formatH2',
	          'CTRL+NUM3': 'formatH3',
	          'CTRL+NUM4': 'formatH4',
	          'CTRL+NUM5': 'formatH5',
	          'CTRL+NUM6': 'formatH6',
	          'CTRL+ENTER': 'insertHorizontalRule',
	          'CTRL+K': 'linkDialog.show'
	        },

	        mac: {
	          'ENTER': 'insertParagraph',
	          'CMD+Z': 'undo',
	          'CMD+SHIFT+Z': 'redo',
	          'TAB': 'tab',
	          'SHIFT+TAB': 'untab',
	          'CMD+B': 'bold',
	          'CMD+I': 'italic',
	          'CMD+U': 'underline',
	          'CMD+SHIFT+S': 'strikethrough',
	          'CMD+BACKSLASH': 'removeFormat',
	          'CMD+SHIFT+L': 'justifyLeft',
	          'CMD+SHIFT+E': 'justifyCenter',
	          'CMD+SHIFT+R': 'justifyRight',
	          'CMD+SHIFT+J': 'justifyFull',
	          'CMD+SHIFT+NUM7': 'insertUnorderedList',
	          'CMD+SHIFT+NUM8': 'insertOrderedList',
	          'CMD+LEFTBRACKET': 'outdent',
	          'CMD+RIGHTBRACKET': 'indent',
	          'CMD+NUM0': 'formatPara',
	          'CMD+NUM1': 'formatH1',
	          'CMD+NUM2': 'formatH2',
	          'CMD+NUM3': 'formatH3',
	          'CMD+NUM4': 'formatH4',
	          'CMD+NUM5': 'formatH5',
	          'CMD+NUM6': 'formatH6',
	          'CMD+ENTER': 'insertHorizontalRule',
	          'CMD+K': 'linkDialog.show'
	        }
	      },
	      icons: {
	        'align': 'note-icon-align',
	        'alignCenter': 'note-icon-align-center',
	        'alignJustify': 'note-icon-align-justify',
	        'alignLeft': 'note-icon-align-left',
	        'alignRight': 'note-icon-align-right',
	        'indent': 'note-icon-align-indent',
	        'outdent': 'note-icon-align-outdent',
	        'arrowsAlt': 'note-icon-arrows-alt',
	        'bold': 'note-icon-bold',
	        'caret': 'note-icon-caret',
	        'circle': 'note-icon-circle',
	        'close': 'note-icon-close',
	        'code': 'note-icon-code',
	        'eraser': 'note-icon-eraser',
	        'font': 'note-icon-font',
	        'frame': 'note-icon-frame',
	        'italic': 'note-icon-italic',
	        'link': 'note-icon-link',
	        'unlink': 'note-icon-chain-broken',
	        'magic': 'note-icon-magic',
	        'menuCheck': 'note-icon-check',
	        'minus': 'note-icon-minus',
	        'orderedlist': 'note-icon-orderedlist',
	        'pencil': 'note-icon-pencil',
	        'picture': 'note-icon-picture',
	        'question': 'note-icon-question',
	        'redo': 'note-icon-redo',
	        'square': 'note-icon-square',
	        'strikethrough': 'note-icon-strikethrough',
	        'subscript': 'note-icon-subscript',
	        'superscript': 'note-icon-superscript',
	        'table': 'note-icon-table',
	        'textHeight': 'note-icon-text-height',
	        'trash': 'note-icon-trash',
	        'underline': 'note-icon-underline',
	        'undo': 'note-icon-undo',
	        'unorderedlist': 'note-icon-unorderedlist',
	        'video': 'note-icon-video'
	      }
	    }
	  });

	}));


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod();
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod);
	  else // Plain browser env
	    (this || window).CodeMirror = mod();
	})(function() {
	  "use strict";

	  // BROWSER SNIFFING

	  // Kludges for bugs and behavior differences that can't be feature
	  // detected are enabled based on userAgent etc sniffing.
	  var userAgent = navigator.userAgent;
	  var platform = navigator.platform;

	  var gecko = /gecko\/\d/i.test(userAgent);
	  var ie_upto10 = /MSIE \d/.test(userAgent);
	  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
	  var ie = ie_upto10 || ie_11up;
	  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
	  var webkit = /WebKit\//.test(userAgent);
	  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
	  var chrome = /Chrome\//.test(userAgent);
	  var presto = /Opera\//.test(userAgent);
	  var safari = /Apple Computer/.test(navigator.vendor);
	  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
	  var phantom = /PhantomJS/.test(userAgent);

	  var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
	  // This is woefully incomplete. Suggestions for alternative methods welcome.
	  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
	  var mac = ios || /Mac/.test(platform);
	  var chromeOS = /\bCrOS\b/.test(userAgent);
	  var windows = /win/i.test(platform);

	  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
	  if (presto_version) presto_version = Number(presto_version[1]);
	  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	  var captureRightClick = gecko || (ie && ie_version >= 9);

	  // Optimize some code when these features are not used.
	  var sawReadOnlySpans = false, sawCollapsedSpans = false;

	  // EDITOR CONSTRUCTOR

	  // A CodeMirror instance represents an editor. This is the object
	  // that user code is usually dealing with.

	  function CodeMirror(place, options) {
	    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

	    this.options = options = options ? copyObj(options) : {};
	    // Determine effective options based on given values and defaults.
	    copyObj(defaults, options, false);
	    setGuttersForLineNumbers(options);

	    var doc = options.value;
	    if (typeof doc == "string") doc = new Doc(doc, options.mode, null, options.lineSeparator);
	    this.doc = doc;

	    var input = new CodeMirror.inputStyles[options.inputStyle](this);
	    var display = this.display = new Display(place, doc, input);
	    display.wrapper.CodeMirror = this;
	    updateGutters(this);
	    themeChanged(this);
	    if (options.lineWrapping)
	      this.display.wrapper.className += " CodeMirror-wrap";
	    if (options.autofocus && !mobile) display.input.focus();
	    initScrollbars(this);

	    this.state = {
	      keyMaps: [],  // stores maps added by addKeyMap
	      overlays: [], // highlighting overlays, as added by addOverlay
	      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	      overwrite: false,
	      delayingBlurEvent: false,
	      focused: false,
	      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	      selectingText: false,
	      draggingText: false,
	      highlight: new Delayed(), // stores highlight worker timeout
	      keySeq: null,  // Unfinished key sequence
	      specialChars: null
	    };

	    var cm = this;

	    // Override magic textarea content restore that IE sometimes does
	    // on our hidden textarea on reload
	    if (ie && ie_version < 11) setTimeout(function() { cm.display.input.reset(true); }, 20);

	    registerEventHandlers(this);
	    ensureGlobalHandlers();

	    startOperation(this);
	    this.curOp.forceUpdate = true;
	    attachDoc(this, doc);

	    if ((options.autofocus && !mobile) || cm.hasFocus())
	      setTimeout(bind(onFocus, this), 20);
	    else
	      onBlur(this);

	    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	      optionHandlers[opt](this, options[opt], Init);
	    maybeUpdateLineNumberWidth(this);
	    if (options.finishInit) options.finishInit(this);
	    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	    endOperation(this);
	    // Suppress optimizelegibility in Webkit, since it breaks text
	    // measuring on line wrapping boundaries.
	    if (webkit && options.lineWrapping &&
	        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	      display.lineDiv.style.textRendering = "auto";
	  }

	  // DISPLAY CONSTRUCTOR

	  // The display handles the DOM integration, both for input reading
	  // and content drawing. It holds references to DOM nodes and
	  // display-related state.

	  function Display(place, doc, input) {
	    var d = this;
	    this.input = input;

	    // Covers bottom-right square when both scrollbars are present.
	    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	    d.scrollbarFiller.setAttribute("cm-not-content", "true");
	    // Covers bottom of gutter when coverGutterNextToScrollbar is on
	    // and h scrollbar is present.
	    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	    d.gutterFiller.setAttribute("cm-not-content", "true");
	    // Will contain the actual code, positioned to cover the viewport.
	    d.lineDiv = elt("div", null, "CodeMirror-code");
	    // Elements are added to these to represent selection and cursors.
	    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	    // A visibility: hidden element used to find the size of things.
	    d.measure = elt("div", null, "CodeMirror-measure");
	    // When lines outside of the viewport are measured, they are drawn in this.
	    d.lineMeasure = elt("div", null, "CodeMirror-measure");
	    // Wraps everything that needs to exist inside the vertically-padded coordinate system
	    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                      null, "position: relative; outline: none");
	    // Moved around its parent to cover visible view.
	    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	    // Set to the height of the document, allowing scrolling.
	    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	    d.sizerWidth = null;
	    // Behavior of elts with overflow: auto and padding is
	    // inconsistent across browsers. This is used to ensure the
	    // scrollable area is big enough.
	    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	    // Will contain the gutters, if any.
	    d.gutters = elt("div", null, "CodeMirror-gutters");
	    d.lineGutter = null;
	    // Actual scrollable element.
	    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	    d.scroller.setAttribute("tabIndex", "-1");
	    // The element in which the editor lives.
	    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

	    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	    if (!webkit && !(gecko && mobile)) d.scroller.draggable = true;

	    if (place) {
	      if (place.appendChild) place.appendChild(d.wrapper);
	      else place(d.wrapper);
	    }

	    // Current rendered range (may be bigger than the view window).
	    d.viewFrom = d.viewTo = doc.first;
	    d.reportedViewFrom = d.reportedViewTo = doc.first;
	    // Information about the rendered lines.
	    d.view = [];
	    d.renderedView = null;
	    // Holds info about a single rendered line when it was rendered
	    // for measurement, while not in view.
	    d.externalMeasured = null;
	    // Empty space (in pixels) above the view
	    d.viewOffset = 0;
	    d.lastWrapHeight = d.lastWrapWidth = 0;
	    d.updateLineNumbers = null;

	    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	    d.scrollbarsClipped = false;

	    // Used to only resize the line number gutter when necessary (when
	    // the amount of lines crosses a boundary that makes its width change)
	    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	    // Set to true when a non-horizontal-scrolling line widget is
	    // added. As an optimization, line widget aligning is skipped when
	    // this is false.
	    d.alignWidgets = false;

	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

	    // Tracks the maximum line length so that the horizontal scrollbar
	    // can be kept static when scrolling.
	    d.maxLine = null;
	    d.maxLineLength = 0;
	    d.maxLineChanged = false;

	    // Used for measuring wheel scrolling granularity
	    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

	    // True when shift is held down.
	    d.shift = false;

	    // Used to track whether anything happened since the context menu
	    // was opened.
	    d.selForContextMenu = null;

	    d.activeTouch = null;

	    input.init(d);
	  }

	  // STATE UPDATES

	  // Used to get the editor into a consistent state again when options change.

	  function loadMode(cm) {
	    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	    resetModeState(cm);
	  }

	  function resetModeState(cm) {
	    cm.doc.iter(function(line) {
	      if (line.stateAfter) line.stateAfter = null;
	      if (line.styles) line.styles = null;
	    });
	    cm.doc.frontier = cm.doc.first;
	    startWorker(cm, 100);
	    cm.state.modeGen++;
	    if (cm.curOp) regChange(cm);
	  }

	  function wrappingChanged(cm) {
	    if (cm.options.lineWrapping) {
	      addClass(cm.display.wrapper, "CodeMirror-wrap");
	      cm.display.sizer.style.minWidth = "";
	      cm.display.sizerWidth = null;
	    } else {
	      rmClass(cm.display.wrapper, "CodeMirror-wrap");
	      findMaxLine(cm);
	    }
	    estimateLineHeights(cm);
	    regChange(cm);
	    clearCaches(cm);
	    setTimeout(function(){updateScrollbars(cm);}, 100);
	  }

	  // Returns a function that estimates the height of a line, to use as
	  // first approximation until the line becomes visible (and is thus
	  // properly measurable).
	  function estimateHeight(cm) {
	    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	    return function(line) {
	      if (lineIsHidden(cm.doc, line)) return 0;

	      var widgetsHeight = 0;
	      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
	        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	      }

	      if (wrapping)
	        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	      else
	        return widgetsHeight + th;
	    };
	  }

	  function estimateLineHeights(cm) {
	    var doc = cm.doc, est = estimateHeight(cm);
	    doc.iter(function(line) {
	      var estHeight = est(line);
	      if (estHeight != line.height) updateLineHeight(line, estHeight);
	    });
	  }

	  function themeChanged(cm) {
	    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	    clearCaches(cm);
	  }

	  function guttersChanged(cm) {
	    updateGutters(cm);
	    regChange(cm);
	    setTimeout(function(){alignHorizontally(cm);}, 20);
	  }

	  // Rebuild the gutter elements, ensure the margin to the left of the
	  // code matches their width.
	  function updateGutters(cm) {
	    var gutters = cm.display.gutters, specs = cm.options.gutters;
	    removeChildren(gutters);
	    for (var i = 0; i < specs.length; ++i) {
	      var gutterClass = specs[i];
	      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	      if (gutterClass == "CodeMirror-linenumbers") {
	        cm.display.lineGutter = gElt;
	        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	      }
	    }
	    gutters.style.display = i ? "" : "none";
	    updateGutterSpace(cm);
	  }

	  function updateGutterSpace(cm) {
	    var width = cm.display.gutters.offsetWidth;
	    cm.display.sizer.style.marginLeft = width + "px";
	  }

	  // Compute the character length of a line, taking into account
	  // collapsed ranges (see markText) that might hide parts, and join
	  // other lines onto it.
	  function lineLength(line) {
	    if (line.height == 0) return 0;
	    var len = line.text.length, merged, cur = line;
	    while (merged = collapsedSpanAtStart(cur)) {
	      var found = merged.find(0, true);
	      cur = found.from.line;
	      len += found.from.ch - found.to.ch;
	    }
	    cur = line;
	    while (merged = collapsedSpanAtEnd(cur)) {
	      var found = merged.find(0, true);
	      len -= cur.text.length - found.from.ch;
	      cur = found.to.line;
	      len += cur.text.length - found.to.ch;
	    }
	    return len;
	  }

	  // Find the longest line in the document.
	  function findMaxLine(cm) {
	    var d = cm.display, doc = cm.doc;
	    d.maxLine = getLine(doc, doc.first);
	    d.maxLineLength = lineLength(d.maxLine);
	    d.maxLineChanged = true;
	    doc.iter(function(line) {
	      var len = lineLength(line);
	      if (len > d.maxLineLength) {
	        d.maxLineLength = len;
	        d.maxLine = line;
	      }
	    });
	  }

	  // Make sure the gutters options contains the element
	  // "CodeMirror-linenumbers" when the lineNumbers option is true.
	  function setGuttersForLineNumbers(options) {
	    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	    if (found == -1 && options.lineNumbers) {
	      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	    } else if (found > -1 && !options.lineNumbers) {
	      options.gutters = options.gutters.slice(0);
	      options.gutters.splice(found, 1);
	    }
	  }

	  // SCROLLBARS

	  // Prepare DOM reads needed to update the scrollbars. Done in one
	  // shot to minimize update/measure roundtrips.
	  function measureForScrollbars(cm) {
	    var d = cm.display, gutterW = d.gutters.offsetWidth;
	    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	    return {
	      clientHeight: d.scroller.clientHeight,
	      viewHeight: d.wrapper.clientHeight,
	      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	      viewWidth: d.wrapper.clientWidth,
	      barLeft: cm.options.fixedGutter ? gutterW : 0,
	      docHeight: docH,
	      scrollHeight: docH + scrollGap(cm) + d.barHeight,
	      nativeBarWidth: d.nativeBarWidth,
	      gutterWidth: gutterW
	    };
	  }

	  function NativeScrollbars(place, scroll, cm) {
	    this.cm = cm;
	    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	    place(vert); place(horiz);

	    on(vert, "scroll", function() {
	      if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	    });
	    on(horiz, "scroll", function() {
	      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	    });

	    this.checkedZeroWidth = false;
	    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	    if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
	  }

	  NativeScrollbars.prototype = copyObj({
	    update: function(measure) {
	      var needsH = measure.scrollWidth > measure.clientWidth + 1;
	      var needsV = measure.scrollHeight > measure.clientHeight + 1;
	      var sWidth = measure.nativeBarWidth;

	      if (needsV) {
	        this.vert.style.display = "block";
	        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	        // A bug in IE8 can cause this value to be negative, so guard it.
	        this.vert.firstChild.style.height =
	          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	      } else {
	        this.vert.style.display = "";
	        this.vert.firstChild.style.height = "0";
	      }

	      if (needsH) {
	        this.horiz.style.display = "block";
	        this.horiz.style.right = needsV ? sWidth + "px" : "0";
	        this.horiz.style.left = measure.barLeft + "px";
	        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	        this.horiz.firstChild.style.width =
	          (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	      } else {
	        this.horiz.style.display = "";
	        this.horiz.firstChild.style.width = "0";
	      }

	      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	        if (sWidth == 0) this.zeroWidthHack();
	        this.checkedZeroWidth = true;
	      }

	      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	    },
	    setScrollLeft: function(pos) {
	      if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	      if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz);
	    },
	    setScrollTop: function(pos) {
	      if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	      if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert);
	    },
	    zeroWidthHack: function() {
	      var w = mac && !mac_geMountainLion ? "12px" : "18px";
	      this.horiz.style.height = this.vert.style.width = w;
	      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
	      this.disableHoriz = new Delayed;
	      this.disableVert = new Delayed;
	    },
	    enableZeroWidthBar: function(bar, delay) {
	      bar.style.pointerEvents = "auto";
	      function maybeDisable() {
	        // To find out whether the scrollbar is still visible, we
	        // check whether the element under the pixel in the bottom
	        // left corner of the scrollbar box is the scrollbar box
	        // itself (when the bar is still visible) or its filler child
	        // (when the bar is hidden). If it is still visible, we keep
	        // it enabled, if it's hidden, we disable pointer events.
	        var box = bar.getBoundingClientRect();
	        var elt = document.elementFromPoint(box.left + 1, box.bottom - 1);
	        if (elt != bar) bar.style.pointerEvents = "none";
	        else delay.set(1000, maybeDisable);
	      }
	      delay.set(1000, maybeDisable);
	    },
	    clear: function() {
	      var parent = this.horiz.parentNode;
	      parent.removeChild(this.horiz);
	      parent.removeChild(this.vert);
	    }
	  }, NativeScrollbars.prototype);

	  function NullScrollbars() {}

	  NullScrollbars.prototype = copyObj({
	    update: function() { return {bottom: 0, right: 0}; },
	    setScrollLeft: function() {},
	    setScrollTop: function() {},
	    clear: function() {}
	  }, NullScrollbars.prototype);

	  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

	  function initScrollbars(cm) {
	    if (cm.display.scrollbars) {
	      cm.display.scrollbars.clear();
	      if (cm.display.scrollbars.addClass)
	        rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	    }

	    cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	      // Prevent clicks in the scrollbars from killing focus
	      on(node, "mousedown", function() {
	        if (cm.state.focused) setTimeout(function() { cm.display.input.focus(); }, 0);
	      });
	      node.setAttribute("cm-not-content", "true");
	    }, function(pos, axis) {
	      if (axis == "horizontal") setScrollLeft(cm, pos);
	      else setScrollTop(cm, pos);
	    }, cm);
	    if (cm.display.scrollbars.addClass)
	      addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	  }

	  function updateScrollbars(cm, measure) {
	    if (!measure) measure = measureForScrollbars(cm);
	    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	    updateScrollbarsInner(cm, measure);
	    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	        updateHeightsInViewport(cm);
	      updateScrollbarsInner(cm, measureForScrollbars(cm));
	      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	    }
	  }

	  // Re-synchronize the fake scrollbars with the actual size of the
	  // content.
	  function updateScrollbarsInner(cm, measure) {
	    var d = cm.display;
	    var sizes = d.scrollbars.update(measure);

	    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
	    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

	    if (sizes.right && sizes.bottom) {
	      d.scrollbarFiller.style.display = "block";
	      d.scrollbarFiller.style.height = sizes.bottom + "px";
	      d.scrollbarFiller.style.width = sizes.right + "px";
	    } else d.scrollbarFiller.style.display = "";
	    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	      d.gutterFiller.style.display = "block";
	      d.gutterFiller.style.height = sizes.bottom + "px";
	      d.gutterFiller.style.width = measure.gutterWidth + "px";
	    } else d.gutterFiller.style.display = "";
	  }

	  // Compute the lines that are visible in a given viewport (defaults
	  // the the current scroll position). viewport may contain top,
	  // height, and ensure (see op.scrollToPos) properties.
	  function visibleLines(display, doc, viewport) {
	    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	    top = Math.floor(top - paddingTop(display));
	    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

	    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	    // forces those lines into the viewport (if possible).
	    if (viewport && viewport.ensure) {
	      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	      if (ensureFrom < from) {
	        from = ensureFrom;
	        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	        to = ensureTo;
	      }
	    }
	    return {from: from, to: Math.max(to, from + 1)};
	  }

	  // LINE NUMBERS

	  // Re-align line numbers and gutter marks to compensate for
	  // horizontal scrolling.
	  function alignHorizontally(cm) {
	    var display = cm.display, view = display.view;
	    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	    var gutterW = display.gutters.offsetWidth, left = comp + "px";
	    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	      if (cm.options.fixedGutter) {
	        if (view[i].gutter)
	          view[i].gutter.style.left = left;
	        if (view[i].gutterBackground)
	          view[i].gutterBackground.style.left = left;
	      }
	      var align = view[i].alignable;
	      if (align) for (var j = 0; j < align.length; j++)
	        align[j].style.left = left;
	    }
	    if (cm.options.fixedGutter)
	      display.gutters.style.left = (comp + gutterW) + "px";
	  }

	  // Used to ensure that the line number gutter is still the right
	  // size for the current document size. Returns true when an update
	  // is needed.
	  function maybeUpdateLineNumberWidth(cm) {
	    if (!cm.options.lineNumbers) return false;
	    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	    if (last.length != display.lineNumChars) {
	      var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	      display.lineGutter.style.width = "";
	      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	      display.lineNumWidth = display.lineNumInnerWidth + padding;
	      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	      display.lineGutter.style.width = display.lineNumWidth + "px";
	      updateGutterSpace(cm);
	      return true;
	    }
	    return false;
	  }

	  function lineNumberFor(options, i) {
	    return String(options.lineNumberFormatter(i + options.firstLineNumber));
	  }

	  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	  // but using getBoundingClientRect to get a sub-pixel-accurate
	  // result.
	  function compensateForHScroll(display) {
	    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
	  }

	  // DISPLAY DRAWING

	  function DisplayUpdate(cm, viewport, force) {
	    var display = cm.display;

	    this.viewport = viewport;
	    // Store some values that we'll need later (but don't want to force a relayout for)
	    this.visible = visibleLines(display, cm.doc, viewport);
	    this.editorIsHidden = !display.wrapper.offsetWidth;
	    this.wrapperHeight = display.wrapper.clientHeight;
	    this.wrapperWidth = display.wrapper.clientWidth;
	    this.oldDisplayWidth = displayWidth(cm);
	    this.force = force;
	    this.dims = getDimensions(cm);
	    this.events = [];
	  }

	  DisplayUpdate.prototype.signal = function(emitter, type) {
	    if (hasHandler(emitter, type))
	      this.events.push(arguments);
	  };
	  DisplayUpdate.prototype.finish = function() {
	    for (var i = 0; i < this.events.length; i++)
	      signal.apply(null, this.events[i]);
	  };

	  function maybeClipScrollbars(cm) {
	    var display = cm.display;
	    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	      display.heightForcer.style.height = scrollGap(cm) + "px";
	      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	      display.scrollbarsClipped = true;
	    }
	  }

	  // Does the actual updating of the line display. Bails out
	  // (returning false) when there is nothing to be done and forced is
	  // false.
	  function updateDisplayIfNeeded(cm, update) {
	    var display = cm.display, doc = cm.doc;

	    if (update.editorIsHidden) {
	      resetView(cm);
	      return false;
	    }

	    // Bail out if the visible area is already rendered and nothing changed.
	    if (!update.force &&
	        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	        display.renderedView == display.view && countDirtyView(cm) == 0)
	      return false;

	    if (maybeUpdateLineNumberWidth(cm)) {
	      resetView(cm);
	      update.dims = getDimensions(cm);
	    }

	    // Compute a suitable new viewport (from & to)
	    var end = doc.first + doc.size;
	    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	    if (sawCollapsedSpans) {
	      from = visualLineNo(cm.doc, from);
	      to = visualLineEndNo(cm.doc, to);
	    }

	    var different = from != display.viewFrom || to != display.viewTo ||
	      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	    adjustView(cm, from, to);

	    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	    // Position the mover div to align with the current scroll position
	    cm.display.mover.style.top = display.viewOffset + "px";

	    var toUpdate = countDirtyView(cm);
	    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	      return false;

	    // For big changes, we hide the enclosing element during the
	    // update, since that speeds up the operations on most browsers.
	    var focused = activeElt();
	    if (toUpdate > 4) display.lineDiv.style.display = "none";
	    patchDisplay(cm, display.updateLineNumbers, update.dims);
	    if (toUpdate > 4) display.lineDiv.style.display = "";
	    display.renderedView = display.view;
	    // There might have been a widget with a focused element that got
	    // hidden or updated, if so re-focus it.
	    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

	    // Prevent selection and cursors from interfering with the scroll
	    // width and height.
	    removeChildren(display.cursorDiv);
	    removeChildren(display.selectionDiv);
	    display.gutters.style.height = display.sizer.style.minHeight = 0;

	    if (different) {
	      display.lastWrapHeight = update.wrapperHeight;
	      display.lastWrapWidth = update.wrapperWidth;
	      startWorker(cm, 400);
	    }

	    display.updateLineNumbers = null;

	    return true;
	  }

	  function postUpdateDisplay(cm, update) {
	    var viewport = update.viewport;

	    for (var first = true;; first = false) {
	      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	        // Clip forced viewport to actual scrollable area.
	        if (viewport && viewport.top != null)
	          viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
	        // Updated line heights might result in the drawn area not
	        // actually covering the viewport. Keep looping until it does.
	        update.visible = visibleLines(cm.display, cm.doc, viewport);
	        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	          break;
	      }
	      if (!updateDisplayIfNeeded(cm, update)) break;
	      updateHeightsInViewport(cm);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	    }

	    update.signal(cm, "update", cm);
	    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	    }
	  }

	  function updateDisplaySimple(cm, viewport) {
	    var update = new DisplayUpdate(cm, viewport);
	    if (updateDisplayIfNeeded(cm, update)) {
	      updateHeightsInViewport(cm);
	      postUpdateDisplay(cm, update);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	      update.finish();
	    }
	  }

	  function setDocumentHeight(cm, measure) {
	    cm.display.sizer.style.minHeight = measure.docHeight + "px";
	    cm.display.heightForcer.style.top = measure.docHeight + "px";
	    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
	  }

	  // Read the actual heights of the rendered lines, and update their
	  // stored heights to match.
	  function updateHeightsInViewport(cm) {
	    var display = cm.display;
	    var prevBottom = display.lineDiv.offsetTop;
	    for (var i = 0; i < display.view.length; i++) {
	      var cur = display.view[i], height;
	      if (cur.hidden) continue;
	      if (ie && ie_version < 8) {
	        var bot = cur.node.offsetTop + cur.node.offsetHeight;
	        height = bot - prevBottom;
	        prevBottom = bot;
	      } else {
	        var box = cur.node.getBoundingClientRect();
	        height = box.bottom - box.top;
	      }
	      var diff = cur.line.height - height;
	      if (height < 2) height = textHeight(display);
	      if (diff > .001 || diff < -.001) {
	        updateLineHeight(cur.line, height);
	        updateWidgetHeight(cur.line);
	        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
	          updateWidgetHeight(cur.rest[j]);
	      }
	    }
	  }

	  // Read and store the height of line widgets associated with the
	  // given line.
	  function updateWidgetHeight(line) {
	    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	      line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight;
	  }

	  // Do a bulk-read of the DOM positions and sizes needed to draw the
	  // view, so that we don't interleave reading and writing to the DOM.
	  function getDimensions(cm) {
	    var d = cm.display, left = {}, width = {};
	    var gutterLeft = d.gutters.clientLeft;
	    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	      width[cm.options.gutters[i]] = n.clientWidth;
	    }
	    return {fixedPos: compensateForHScroll(d),
	            gutterTotalWidth: d.gutters.offsetWidth,
	            gutterLeft: left,
	            gutterWidth: width,
	            wrapperWidth: d.wrapper.clientWidth};
	  }

	  // Sync the actual display DOM structure with display.view, removing
	  // nodes for lines that are no longer in view, and creating the ones
	  // that are not there yet, and updating the ones that are out of
	  // date.
	  function patchDisplay(cm, updateNumbersFrom, dims) {
	    var display = cm.display, lineNumbers = cm.options.lineNumbers;
	    var container = display.lineDiv, cur = container.firstChild;

	    function rm(node) {
	      var next = node.nextSibling;
	      // Works around a throw-scroll bug in OS X Webkit
	      if (webkit && mac && cm.display.currentWheelTarget == node)
	        node.style.display = "none";
	      else
	        node.parentNode.removeChild(node);
	      return next;
	    }

	    var view = display.view, lineN = display.viewFrom;
	    // Loop over the elements in the view, syncing cur (the DOM nodes
	    // in display.lineDiv) with the view as we go.
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (lineView.hidden) {
	      } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	        var node = buildLineElement(cm, lineView, lineN, dims);
	        container.insertBefore(node, cur);
	      } else { // Already drawn
	        while (cur != lineView.node) cur = rm(cur);
	        var updateNumber = lineNumbers && updateNumbersFrom != null &&
	          updateNumbersFrom <= lineN && lineView.lineNumber;
	        if (lineView.changes) {
	          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
	          updateLineForChanges(cm, lineView, lineN, dims);
	        }
	        if (updateNumber) {
	          removeChildren(lineView.lineNumber);
	          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	        }
	        cur = lineView.node.nextSibling;
	      }
	      lineN += lineView.size;
	    }
	    while (cur) cur = rm(cur);
	  }

	  // When an aspect of a line changes, a string is added to
	  // lineView.changes. This updates the relevant part of the line's
	  // DOM structure.
	  function updateLineForChanges(cm, lineView, lineN, dims) {
	    for (var j = 0; j < lineView.changes.length; j++) {
	      var type = lineView.changes[j];
	      if (type == "text") updateLineText(cm, lineView);
	      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	      else if (type == "class") updateLineClasses(lineView);
	      else if (type == "widget") updateLineWidgets(cm, lineView, dims);
	    }
	    lineView.changes = null;
	  }

	  // Lines with gutter elements, widgets or a background class need to
	  // be wrapped, and have the extra elements added to the wrapper div
	  function ensureLineWrapped(lineView) {
	    if (lineView.node == lineView.text) {
	      lineView.node = elt("div", null, null, "position: relative");
	      if (lineView.text.parentNode)
	        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	      lineView.node.appendChild(lineView.text);
	      if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	    }
	    return lineView.node;
	  }

	  function updateLineBackground(lineView) {
	    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	    if (cls) cls += " CodeMirror-linebackground";
	    if (lineView.background) {
	      if (cls) lineView.background.className = cls;
	      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	    } else if (cls) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    }
	  }

	  // Wrapper around buildLineContent which will reuse the structure
	  // in display.externalMeasured when possible.
	  function getLineContent(cm, lineView) {
	    var ext = cm.display.externalMeasured;
	    if (ext && ext.line == lineView.line) {
	      cm.display.externalMeasured = null;
	      lineView.measure = ext.measure;
	      return ext.built;
	    }
	    return buildLineContent(cm, lineView);
	  }

	  // Redraw the line's text. Interacts with the background and text
	  // classes because the mode may output tokens that influence these
	  // classes.
	  function updateLineText(cm, lineView) {
	    var cls = lineView.text.className;
	    var built = getLineContent(cm, lineView);
	    if (lineView.text == lineView.node) lineView.node = built.pre;
	    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	    lineView.text = built.pre;
	    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	      lineView.bgClass = built.bgClass;
	      lineView.textClass = built.textClass;
	      updateLineClasses(lineView);
	    } else if (cls) {
	      lineView.text.className = cls;
	    }
	  }

	  function updateLineClasses(lineView) {
	    updateLineBackground(lineView);
	    if (lineView.line.wrapClass)
	      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	    else if (lineView.node != lineView.text)
	      lineView.node.className = "";
	    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	    lineView.text.className = textClass || "";
	  }

	  function updateLineGutter(cm, lineView, lineN, dims) {
	    if (lineView.gutter) {
	      lineView.node.removeChild(lineView.gutter);
	      lineView.gutter = null;
	    }
	    if (lineView.gutterBackground) {
	      lineView.node.removeChild(lineView.gutterBackground);
	      lineView.gutterBackground = null;
	    }
	    if (lineView.line.gutterClass) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                      "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
	                                      "px; width: " + dims.gutterTotalWidth + "px");
	      wrap.insertBefore(lineView.gutterBackground, lineView.text);
	    }
	    var markers = lineView.line.gutterMarkers;
	    if (cm.options.lineNumbers || markers) {
	      var wrap = ensureLineWrapped(lineView);
	      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
	                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
	      cm.display.input.setUneditable(gutterWrap);
	      wrap.insertBefore(gutterWrap, lineView.text);
	      if (lineView.line.gutterClass)
	        gutterWrap.className += " " + lineView.line.gutterClass;
	      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	        lineView.lineNumber = gutterWrap.appendChild(
	          elt("div", lineNumberFor(cm.options, lineN),
	              "CodeMirror-linenumber CodeMirror-gutter-elt",
	              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
	              + cm.display.lineNumInnerWidth + "px"));
	      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
	        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	        if (found)
	          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
	                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	      }
	    }
	  }

	  function updateLineWidgets(cm, lineView, dims) {
	    if (lineView.alignable) lineView.alignable = null;
	    for (var node = lineView.node.firstChild, next; node; node = next) {
	      var next = node.nextSibling;
	      if (node.className == "CodeMirror-linewidget")
	        lineView.node.removeChild(node);
	    }
	    insertLineWidgets(cm, lineView, dims);
	  }

	  // Build a line's DOM representation from scratch
	  function buildLineElement(cm, lineView, lineN, dims) {
	    var built = getLineContent(cm, lineView);
	    lineView.text = lineView.node = built.pre;
	    if (built.bgClass) lineView.bgClass = built.bgClass;
	    if (built.textClass) lineView.textClass = built.textClass;

	    updateLineClasses(lineView);
	    updateLineGutter(cm, lineView, lineN, dims);
	    insertLineWidgets(cm, lineView, dims);
	    return lineView.node;
	  }

	  // A lineView may contain multiple logical lines (when merged by
	  // collapsed spans). The widgets for all of them need to be drawn.
	  function insertLineWidgets(cm, lineView, dims) {
	    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	      insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
	  }

	  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	    if (!line.widgets) return;
	    var wrap = ensureLineWrapped(lineView);
	    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	      if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	      positionLineWidget(widget, node, lineView, dims);
	      cm.display.input.setUneditable(node);
	      if (allowAbove && widget.above)
	        wrap.insertBefore(node, lineView.gutter || lineView.text);
	      else
	        wrap.appendChild(node);
	      signalLater(widget, "redraw");
	    }
	  }

	  function positionLineWidget(widget, node, lineView, dims) {
	    if (widget.noHScroll) {
	      (lineView.alignable || (lineView.alignable = [])).push(node);
	      var width = dims.wrapperWidth;
	      node.style.left = dims.fixedPos + "px";
	      if (!widget.coverGutter) {
	        width -= dims.gutterTotalWidth;
	        node.style.paddingLeft = dims.gutterTotalWidth + "px";
	      }
	      node.style.width = width + "px";
	    }
	    if (widget.coverGutter) {
	      node.style.zIndex = 5;
	      node.style.position = "relative";
	      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	    }
	  }

	  // POSITION OBJECT

	  // A Pos instance represents a position within the text.
	  var Pos = CodeMirror.Pos = function(line, ch) {
	    if (!(this instanceof Pos)) return new Pos(line, ch);
	    this.line = line; this.ch = ch;
	  };

	  // Compare two positions, return 0 if they are the same, a negative
	  // number when a is less, and a positive number otherwise.
	  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

	  function copyPos(x) {return Pos(x.line, x.ch);}
	  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
	  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

	  // INPUT HANDLING

	  function ensureFocus(cm) {
	    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
	  }

	  // This will be set to a {lineWise: bool, text: [string]} object, so
	  // that, when pasting, we know what kind of selections the copied
	  // text was made out of.
	  var lastCopied = null;

	  function applyTextInput(cm, inserted, deleted, sel, origin) {
	    var doc = cm.doc;
	    cm.display.shift = false;
	    if (!sel) sel = doc.sel;

	    var paste = cm.state.pasteIncoming || origin == "paste";
	    var textLines = doc.splitLines(inserted), multiPaste = null
	    // When pasing N lines into N selections, insert one line per selection
	    if (paste && sel.ranges.length > 1) {
	      if (lastCopied && lastCopied.text.join("\n") == inserted) {
	        if (sel.ranges.length % lastCopied.text.length == 0) {
	          multiPaste = [];
	          for (var i = 0; i < lastCopied.text.length; i++)
	            multiPaste.push(doc.splitLines(lastCopied.text[i]));
	        }
	      } else if (textLines.length == sel.ranges.length) {
	        multiPaste = map(textLines, function(l) { return [l]; });
	      }
	    }

	    // Normal behavior is to insert the new text into every selection
	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      var from = range.from(), to = range.to();
	      if (range.empty()) {
	        if (deleted && deleted > 0) // Handle deletion
	          from = Pos(from.line, from.ch - deleted);
	        else if (cm.state.overwrite && !paste) // Handle overwrite
	          to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	        else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
	          from = to = Pos(from.line, 0)
	      }
	      var updateInput = cm.curOp.updateInput;
	      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
	                         origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	      makeChange(cm.doc, changeEvent);
	      signalLater(cm, "inputRead", cm, changeEvent);
	    }
	    if (inserted && !paste)
	      triggerElectric(cm, inserted);

	    ensureCursorVisible(cm);
	    cm.curOp.updateInput = updateInput;
	    cm.curOp.typing = true;
	    cm.state.pasteIncoming = cm.state.cutIncoming = false;
	  }

	  function handlePaste(e, cm) {
	    var pasted = e.clipboardData && e.clipboardData.getData("Text");
	    if (pasted) {
	      e.preventDefault();
	      if (!cm.isReadOnly() && !cm.options.disableInput)
	        runInOp(cm, function() { applyTextInput(cm, pasted, 0, null, "paste"); });
	      return true;
	    }
	  }

	  function triggerElectric(cm, inserted) {
	    // When an 'electric' character is inserted, immediately trigger a reindent
	    if (!cm.options.electricChars || !cm.options.smartIndent) return;
	    var sel = cm.doc.sel;

	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue;
	      var mode = cm.getModeAt(range.head);
	      var indented = false;
	      if (mode.electricChars) {
	        for (var j = 0; j < mode.electricChars.length; j++)
	          if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	            indented = indentLine(cm, range.head.line, "smart");
	            break;
	          }
	      } else if (mode.electricInput) {
	        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	          indented = indentLine(cm, range.head.line, "smart");
	      }
	      if (indented) signalLater(cm, "electricInput", cm, range.head.line);
	    }
	  }

	  function copyableRanges(cm) {
	    var text = [], ranges = [];
	    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	      var line = cm.doc.sel.ranges[i].head.line;
	      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	      ranges.push(lineRange);
	      text.push(cm.getRange(lineRange.anchor, lineRange.head));
	    }
	    return {text: text, ranges: ranges};
	  }

	  function disableBrowserMagic(field, spellcheck) {
	    field.setAttribute("autocorrect", "off");
	    field.setAttribute("autocapitalize", "off");
	    field.setAttribute("spellcheck", !!spellcheck);
	  }

	  // TEXTAREA INPUT STYLE

	  function TextareaInput(cm) {
	    this.cm = cm;
	    // See input.poll and input.reset
	    this.prevInput = "";

	    // Flag that indicates whether we expect input to appear real soon
	    // now (after some event like 'keypress' or 'input') and are
	    // polling intensively.
	    this.pollingFast = false;
	    // Self-resetting timeout for the poller
	    this.polling = new Delayed();
	    // Tracks when input.reset has punted to just putting a short
	    // string into the textarea instead of the full selection.
	    this.inaccurateSelection = false;
	    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	    this.hasSelection = false;
	    this.composing = null;
	  };

	  function hiddenTextarea() {
	    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
	    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	    // The textarea is kept positioned near the cursor to prevent the
	    // fact that it'll be scrolled into view on input from scrolling
	    // our fake cursor out of view. On webkit, when wrap=off, paste is
	    // very slow. So make the area wide instead.
	    if (webkit) te.style.width = "1000px";
	    else te.setAttribute("wrap", "off");
	    // If border: 0; -- iOS fails to open keyboard (issue #1287)
	    if (ios) te.style.border = "1px solid black";
	    disableBrowserMagic(te);
	    return div;
	  }

	  TextareaInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = this.cm;

	      // Wraps and hides input textarea
	      var div = this.wrapper = hiddenTextarea();
	      // The semihidden textarea that is focused when the editor is
	      // focused, and receives input.
	      var te = this.textarea = div.firstChild;
	      display.wrapper.insertBefore(div, display.wrapper.firstChild);

	      // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	      if (ios) te.style.width = "0px";

	      on(te, "input", function() {
	        if (ie && ie_version >= 9 && input.hasSelection) input.hasSelection = null;
	        input.poll();
	      });

	      on(te, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return

	        cm.state.pasteIncoming = true;
	        input.fastPoll();
	      });

	      function prepareCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = {lineWise: false, text: cm.getSelections()};
	          if (input.inaccurateSelection) {
	            input.prevInput = "";
	            input.inaccurateSelection = false;
	            te.value = lastCopied.text.join("\n");
	            selectInput(te);
	          }
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = {lineWise: true, text: ranges.text};
	          if (e.type == "cut") {
	            cm.setSelections(ranges.ranges, null, sel_dontScroll);
	          } else {
	            input.prevInput = "";
	            te.value = ranges.text.join("\n");
	            selectInput(te);
	          }
	        }
	        if (e.type == "cut") cm.state.cutIncoming = true;
	      }
	      on(te, "cut", prepareCopyCut);
	      on(te, "copy", prepareCopyCut);

	      on(display.scroller, "paste", function(e) {
	        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) return;
	        cm.state.pasteIncoming = true;
	        input.focus();
	      });

	      // Prevent normal selection in the editor (we handle our own)
	      on(display.lineSpace, "selectstart", function(e) {
	        if (!eventInWidget(display, e)) e_preventDefault(e);
	      });

	      on(te, "compositionstart", function() {
	        var start = cm.getCursor("from");
	        if (input.composing) input.composing.range.clear()
	        input.composing = {
	          start: start,
	          range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	        };
	      });
	      on(te, "compositionend", function() {
	        if (input.composing) {
	          input.poll();
	          input.composing.range.clear();
	          input.composing = null;
	        }
	      });
	    },

	    prepareSelection: function() {
	      // Redraw the selection and/or cursor
	      var cm = this.cm, display = cm.display, doc = cm.doc;
	      var result = prepareSelection(cm);

	      // Move the hidden textarea near the cursor to prevent scrolling artifacts
	      if (cm.options.moveInputWithCursor) {
	        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                            headPos.top + lineOff.top - wrapOff.top));
	        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                             headPos.left + lineOff.left - wrapOff.left));
	      }

	      return result;
	    },

	    showSelection: function(drawn) {
	      var cm = this.cm, display = cm.display;
	      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	      if (drawn.teTop != null) {
	        this.wrapper.style.top = drawn.teTop + "px";
	        this.wrapper.style.left = drawn.teLeft + "px";
	      }
	    },

	    // Reset the input to correspond to the selection (or to be empty,
	    // when not typing and nothing is selected)
	    reset: function(typing) {
	      if (this.contextMenuPending) return;
	      var minimal, selected, cm = this.cm, doc = cm.doc;
	      if (cm.somethingSelected()) {
	        this.prevInput = "";
	        var range = doc.sel.primary();
	        minimal = hasCopyEvent &&
	          (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
	        var content = minimal ? "-" : selected || cm.getSelection();
	        this.textarea.value = content;
	        if (cm.state.focused) selectInput(this.textarea);
	        if (ie && ie_version >= 9) this.hasSelection = content;
	      } else if (!typing) {
	        this.prevInput = this.textarea.value = "";
	        if (ie && ie_version >= 9) this.hasSelection = null;
	      }
	      this.inaccurateSelection = minimal;
	    },

	    getField: function() { return this.textarea; },

	    supportsTouch: function() { return false; },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	        try { this.textarea.focus(); }
	        catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	      }
	    },

	    blur: function() { this.textarea.blur(); },

	    resetPosition: function() {
	      this.wrapper.style.top = this.wrapper.style.left = 0;
	    },

	    receivedFocus: function() { this.slowPoll(); },

	    // Poll for input changes, using the normal rate of polling. This
	    // runs as long as the editor is focused.
	    slowPoll: function() {
	      var input = this;
	      if (input.pollingFast) return;
	      input.polling.set(this.cm.options.pollInterval, function() {
	        input.poll();
	        if (input.cm.state.focused) input.slowPoll();
	      });
	    },

	    // When an event has just come in that is likely to add or change
	    // something in the input textarea, we poll faster, to ensure that
	    // the change appears on the screen quickly.
	    fastPoll: function() {
	      var missed = false, input = this;
	      input.pollingFast = true;
	      function p() {
	        var changed = input.poll();
	        if (!changed && !missed) {missed = true; input.polling.set(60, p);}
	        else {input.pollingFast = false; input.slowPoll();}
	      }
	      input.polling.set(20, p);
	    },

	    // Read input from the textarea, and update the document to match.
	    // When something is selected, it is present in the textarea, and
	    // selected (unless it is huge, in which case a placeholder is
	    // used). When nothing is selected, the cursor sits after previously
	    // seen text (can be empty), which is stored in prevInput (we must
	    // not reset the textarea when typing, because that breaks IME).
	    poll: function() {
	      var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	      // Since this is called a *lot*, try to bail out as cheaply as
	      // possible when it is clear that nothing happened. hasSelection
	      // will be the case when there is a lot of text in the textarea,
	      // in which case reading its value would be expensive.
	      if (this.contextMenuPending || !cm.state.focused ||
	          (hasSelection(input) && !prevInput && !this.composing) ||
	          cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	        return false;

	      var text = input.value;
	      // If nothing changed, bail.
	      if (text == prevInput && !cm.somethingSelected()) return false;
	      // Work around nonsensical selection resetting in IE9/10, and
	      // inexplicable appearance of private area unicode characters on
	      // some key combos in Mac (#2689).
	      if (ie && ie_version >= 9 && this.hasSelection === text ||
	          mac && /[\uf700-\uf7ff]/.test(text)) {
	        cm.display.input.reset();
	        return false;
	      }

	      if (cm.doc.sel == cm.display.selForContextMenu) {
	        var first = text.charCodeAt(0);
	        if (first == 0x200b && !prevInput) prevInput = "\u200b";
	        if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo"); }
	      }
	      // Find the part of the input that is actually new
	      var same = 0, l = Math.min(prevInput.length, text.length);
	      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;

	      var self = this;
	      runInOp(cm, function() {
	        applyTextInput(cm, text.slice(same), prevInput.length - same,
	                       null, self.composing ? "*compose" : null);

	        // Don't leave long text in the textarea, since it makes further polling slow
	        if (text.length > 1000 || text.indexOf("\n") > -1) input.value = self.prevInput = "";
	        else self.prevInput = text;

	        if (self.composing) {
	          self.composing.range.clear();
	          self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"),
	                                             {className: "CodeMirror-composing"});
	        }
	      });
	      return true;
	    },

	    ensurePolled: function() {
	      if (this.pollingFast && this.poll()) this.pollingFast = false;
	    },

	    onKeyPress: function() {
	      if (ie && ie_version >= 9) this.hasSelection = null;
	      this.fastPoll();
	    },

	    onContextMenu: function(e) {
	      var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	      if (!pos || presto) return; // Opera is difficult.

	      // Reset the current text selection only if the click is done outside of the selection
	      // and 'resetSelectionOnContextMenu' option is true.
	      var reset = cm.options.resetSelectionOnContextMenu;
	      if (reset && cm.doc.sel.contains(pos) == -1)
	        operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

	      var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
	      input.wrapper.style.cssText = "position: absolute"
	      var wrapperBox = input.wrapper.getBoundingClientRect()
	      te.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - wrapperBox.top - 5) +
	        "px; left: " + (e.clientX - wrapperBox.left - 5) + "px; z-index: 1000; background: " +
	        (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
	        "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	      if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	      display.input.focus();
	      if (webkit) window.scrollTo(null, oldScrollY);
	      display.input.reset();
	      // Adds "Select all" to context menu in FF
	      if (!cm.somethingSelected()) te.value = input.prevInput = " ";
	      input.contextMenuPending = true;
	      display.selForContextMenu = cm.doc.sel;
	      clearTimeout(display.detectingSelectAll);

	      // Select-all will be greyed out if there's nothing to select, so
	      // this adds a zero-width space so that we can later check whether
	      // it got selected.
	      function prepareSelectAllHack() {
	        if (te.selectionStart != null) {
	          var selected = cm.somethingSelected();
	          var extval = "\u200b" + (selected ? te.value : "");
	          te.value = "\u21da"; // Used to catch context-menu undo
	          te.value = extval;
	          input.prevInput = selected ? "" : "\u200b";
	          te.selectionStart = 1; te.selectionEnd = extval.length;
	          // Re-set this, in case some other handler touched the
	          // selection in the meantime.
	          display.selForContextMenu = cm.doc.sel;
	        }
	      }
	      function rehide() {
	        input.contextMenuPending = false;
	        input.wrapper.style.cssText = oldWrapperCSS
	        te.style.cssText = oldCSS;
	        if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);

	        // Try to detect the user choosing select-all
	        if (te.selectionStart != null) {
	          if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
	          var i = 0, poll = function() {
	            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	                te.selectionEnd > 0 && input.prevInput == "\u200b")
	              operation(cm, commands.selectAll)(cm);
	            else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
	            else display.input.reset();
	          };
	          display.detectingSelectAll = setTimeout(poll, 200);
	        }
	      }

	      if (ie && ie_version >= 9) prepareSelectAllHack();
	      if (captureRightClick) {
	        e_stop(e);
	        var mouseup = function() {
	          off(window, "mouseup", mouseup);
	          setTimeout(rehide, 20);
	        };
	        on(window, "mouseup", mouseup);
	      } else {
	        setTimeout(rehide, 50);
	      }
	    },

	    readOnlyChanged: function(val) {
	      if (!val) this.reset();
	    },

	    setUneditable: nothing,

	    needsContentAttribute: false
	  }, TextareaInput.prototype);

	  // CONTENTEDITABLE INPUT STYLE

	  function ContentEditableInput(cm) {
	    this.cm = cm;
	    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	    this.polling = new Delayed();
	    this.gracePeriod = false;
	  }

	  ContentEditableInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = input.cm;
	      var div = input.div = display.lineDiv;
	      disableBrowserMagic(div, cm.options.spellcheck);

	      on(div, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return
	        // IE doesn't fire input events, so we schedule a read for the pasted content in this way
	        if (ie_version <= 11) setTimeout(operation(cm, function() {
	          if (!input.pollContent()) regChange(cm);
	        }), 20)
	      })

	      on(div, "compositionstart", function(e) {
	        var data = e.data;
	        input.composing = {sel: cm.doc.sel, data: data, startData: data};
	        if (!data) return;
	        var prim = cm.doc.sel.primary();
	        var line = cm.getLine(prim.head.line);
	        var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
	        if (found > -1 && found <= prim.head.ch)
	          input.composing.sel = simpleSelection(Pos(prim.head.line, found),
	                                                Pos(prim.head.line, found + data.length));
	      });
	      on(div, "compositionupdate", function(e) {
	        input.composing.data = e.data;
	      });
	      on(div, "compositionend", function(e) {
	        var ours = input.composing;
	        if (!ours) return;
	        if (e.data != ours.startData && !/\u200b/.test(e.data))
	          ours.data = e.data;
	        // Need a small delay to prevent other code (input event,
	        // selection polling) from doing damage when fired right after
	        // compositionend.
	        setTimeout(function() {
	          if (!ours.handled)
	            input.applyComposition(ours);
	          if (input.composing == ours)
	            input.composing = null;
	        }, 50);
	      });

	      on(div, "touchstart", function() {
	        input.forceCompositionEnd();
	      });

	      on(div, "input", function() {
	        if (input.composing) return;
	        if (cm.isReadOnly() || !input.pollContent())
	          runInOp(input.cm, function() {regChange(cm);});
	      });

	      function onCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = {lineWise: false, text: cm.getSelections()};
	          if (e.type == "cut") cm.replaceSelection("", null, "cut");
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = {lineWise: true, text: ranges.text};
	          if (e.type == "cut") {
	            cm.operation(function() {
	              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
	              cm.replaceSelection("", null, "cut");
	            });
	          }
	        }
	        if (e.clipboardData) {
	          e.clipboardData.clearData();
	          var content = lastCopied.text.join("\n")
	          // iOS exposes the clipboard API, but seems to discard content inserted into it
	          e.clipboardData.setData("Text", content);
	          if (e.clipboardData.getData("Text") == content) {
	            e.preventDefault();
	            return
	          }
	        }
	        // Old-fashioned briefly-focus-a-textarea hack
	        var kludge = hiddenTextarea(), te = kludge.firstChild;
	        cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
	        te.value = lastCopied.text.join("\n");
	        var hadFocus = document.activeElement;
	        selectInput(te);
	        setTimeout(function() {
	          cm.display.lineSpace.removeChild(kludge);
	          hadFocus.focus();
	          if (hadFocus == div) input.showPrimarySelection()
	        }, 50);
	      }
	      on(div, "copy", onCopyCut);
	      on(div, "cut", onCopyCut);
	    },

	    prepareSelection: function() {
	      var result = prepareSelection(this.cm, false);
	      result.focus = this.cm.state.focused;
	      return result;
	    },

	    showSelection: function(info, takeFocus) {
	      if (!info || !this.cm.display.view.length) return;
	      if (info.focus || takeFocus) this.showPrimarySelection();
	      this.showMultipleSelections(info);
	    },

	    showPrimarySelection: function() {
	      var sel = window.getSelection(), prim = this.cm.doc.sel.primary();
	      var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset);
	      var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
	      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	          cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	          cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	        return;

	      var start = posToDOM(this.cm, prim.from());
	      var end = posToDOM(this.cm, prim.to());
	      if (!start && !end) return;

	      var view = this.cm.display.view;
	      var old = sel.rangeCount && sel.getRangeAt(0);
	      if (!start) {
	        start = {node: view[0].measure.map[2], offset: 0};
	      } else if (!end) { // FIXME dangerously hacky
	        var measure = view[view.length - 1].measure;
	        var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
	        end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
	      }

	      try { var rng = range(start.node, start.offset, end.offset, end.node); }
	      catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	      if (rng) {
	        if (!gecko && this.cm.state.focused) {
	          sel.collapse(start.node, start.offset);
	          if (!rng.collapsed) sel.addRange(rng);
	        } else {
	          sel.removeAllRanges();
	          sel.addRange(rng);
	        }
	        if (old && sel.anchorNode == null) sel.addRange(old);
	        else if (gecko) this.startGracePeriod();
	      }
	      this.rememberSelection();
	    },

	    startGracePeriod: function() {
	      var input = this;
	      clearTimeout(this.gracePeriod);
	      this.gracePeriod = setTimeout(function() {
	        input.gracePeriod = false;
	        if (input.selectionChanged())
	          input.cm.operation(function() { input.cm.curOp.selectionChanged = true; });
	      }, 20);
	    },

	    showMultipleSelections: function(info) {
	      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	    },

	    rememberSelection: function() {
	      var sel = window.getSelection();
	      this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	      this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	    },

	    selectionInEditor: function() {
	      var sel = window.getSelection();
	      if (!sel.rangeCount) return false;
	      var node = sel.getRangeAt(0).commonAncestorContainer;
	      return contains(this.div, node);
	    },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor") this.div.focus();
	    },
	    blur: function() { this.div.blur(); },
	    getField: function() { return this.div; },

	    supportsTouch: function() { return true; },

	    receivedFocus: function() {
	      var input = this;
	      if (this.selectionInEditor())
	        this.pollSelection();
	      else
	        runInOp(this.cm, function() { input.cm.curOp.selectionChanged = true; });

	      function poll() {
	        if (input.cm.state.focused) {
	          input.pollSelection();
	          input.polling.set(input.cm.options.pollInterval, poll);
	        }
	      }
	      this.polling.set(this.cm.options.pollInterval, poll);
	    },

	    selectionChanged: function() {
	      var sel = window.getSelection();
	      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	        sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
	    },

	    pollSelection: function() {
	      if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
	        var sel = window.getSelection(), cm = this.cm;
	        this.rememberSelection();
	        var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	        var head = domToPos(cm, sel.focusNode, sel.focusOffset);
	        if (anchor && head) runInOp(cm, function() {
	          setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
	          if (anchor.bad || head.bad) cm.curOp.selectionChanged = true;
	        });
	      }
	    },

	    pollContent: function() {
	      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	      var from = sel.from(), to = sel.to();
	      if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false;

	      var fromIndex;
	      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	        var fromLine = lineNo(display.view[0].line);
	        var fromNode = display.view[0].node;
	      } else {
	        var fromLine = lineNo(display.view[fromIndex].line);
	        var fromNode = display.view[fromIndex - 1].node.nextSibling;
	      }
	      var toIndex = findViewIndex(cm, to.line);
	      if (toIndex == display.view.length - 1) {
	        var toLine = display.viewTo - 1;
	        var toNode = display.lineDiv.lastChild;
	      } else {
	        var toLine = lineNo(display.view[toIndex + 1].line) - 1;
	        var toNode = display.view[toIndex + 1].node.previousSibling;
	      }

	      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	      while (newText.length > 1 && oldText.length > 1) {
	        if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
	        else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
	        else break;
	      }

	      var cutFront = 0, cutEnd = 0;
	      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	        ++cutFront;
	      var newBot = lst(newText), oldBot = lst(oldText);
	      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                               oldBot.length - (oldText.length == 1 ? cutFront : 0));
	      while (cutEnd < maxCutEnd &&
	             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	        ++cutEnd;

	      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd);
	      newText[0] = newText[0].slice(cutFront);

	      var chFrom = Pos(fromLine, cutFront);
	      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
	        return true;
	      }
	    },

	    ensurePolled: function() {
	      this.forceCompositionEnd();
	    },
	    reset: function() {
	      this.forceCompositionEnd();
	    },
	    forceCompositionEnd: function() {
	      if (!this.composing || this.composing.handled) return;
	      this.applyComposition(this.composing);
	      this.composing.handled = true;
	      this.div.blur();
	      this.div.focus();
	    },
	    applyComposition: function(composing) {
	      if (this.cm.isReadOnly())
	        operation(this.cm, regChange)(this.cm)
	      else if (composing.data && composing.data != composing.startData)
	        operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
	    },

	    setUneditable: function(node) {
	      node.contentEditable = "false"
	    },

	    onKeyPress: function(e) {
	      e.preventDefault();
	      if (!this.cm.isReadOnly())
	        operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
	    },

	    readOnlyChanged: function(val) {
	      this.div.contentEditable = String(val != "nocursor")
	    },

	    onContextMenu: nothing,
	    resetPosition: nothing,

	    needsContentAttribute: true
	  }, ContentEditableInput.prototype);

	  function posToDOM(cm, pos) {
	    var view = findViewForLine(cm, pos.line);
	    if (!view || view.hidden) return null;
	    var line = getLine(cm.doc, pos.line);
	    var info = mapFromLineView(view, line, pos.line);

	    var order = getOrder(line), side = "left";
	    if (order) {
	      var partPos = getBidiPartAt(order, pos.ch);
	      side = partPos % 2 ? "right" : "left";
	    }
	    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	    result.offset = result.collapse == "right" ? result.end : result.start;
	    return result;
	  }

	  function badPos(pos, bad) { if (bad) pos.bad = true; return pos; }

	  function domToPos(cm, node, offset) {
	    var lineNode;
	    if (node == cm.display.lineDiv) {
	      lineNode = cm.display.lineDiv.childNodes[offset];
	      if (!lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
	      node = null; offset = 0;
	    } else {
	      for (lineNode = node;; lineNode = lineNode.parentNode) {
	        if (!lineNode || lineNode == cm.display.lineDiv) return null;
	        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
	      }
	    }
	    for (var i = 0; i < cm.display.view.length; i++) {
	      var lineView = cm.display.view[i];
	      if (lineView.node == lineNode)
	        return locateNodeInLineView(lineView, node, offset);
	    }
	  }

	  function locateNodeInLineView(lineView, node, offset) {
	    var wrapper = lineView.text.firstChild, bad = false;
	    if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), true);
	    if (node == wrapper) {
	      bad = true;
	      node = wrapper.childNodes[offset];
	      offset = 0;
	      if (!node) {
	        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
	        return badPos(Pos(lineNo(line), line.text.length), bad);
	      }
	    }

	    var textNode = node.nodeType == 3 ? node : null, topNode = node;
	    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	      textNode = node.firstChild;
	      if (offset) offset = textNode.nodeValue.length;
	    }
	    while (topNode.parentNode != wrapper) topNode = topNode.parentNode;
	    var measure = lineView.measure, maps = measure.maps;

	    function find(textNode, topNode, offset) {
	      for (var i = -1; i < (maps ? maps.length : 0); i++) {
	        var map = i < 0 ? measure.map : maps[i];
	        for (var j = 0; j < map.length; j += 3) {
	          var curNode = map[j + 2];
	          if (curNode == textNode || curNode == topNode) {
	            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
	            var ch = map[j] + offset;
	            if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)];
	            return Pos(line, ch);
	          }
	        }
	      }
	    }
	    var found = find(textNode, topNode, offset);
	    if (found) return badPos(found, bad);

	    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	      found = find(after, after.firstChild, 0);
	      if (found)
	        return badPos(Pos(found.line, found.ch - dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	    for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
	      found = find(before, before.firstChild, -1);
	      if (found)
	        return badPos(Pos(found.line, found.ch + dist), bad);
	      else
	        dist += before.textContent.length;
	    }
	  }

	  function domTextBetween(cm, from, to, fromLine, toLine) {
	    var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	    function recognizeMarker(id) { return function(marker) { return marker.id == id; }; }
	    function walk(node) {
	      if (node.nodeType == 1) {
	        var cmText = node.getAttribute("cm-text");
	        if (cmText != null) {
	          if (cmText == "") cmText = node.textContent.replace(/\u200b/g, "");
	          text += cmText;
	          return;
	        }
	        var markerID = node.getAttribute("cm-marker"), range;
	        if (markerID) {
	          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
	          if (found.length && (range = found[0].find()))
	            text += getBetween(cm.doc, range.from, range.to).join(lineSep);
	          return;
	        }
	        if (node.getAttribute("contenteditable") == "false") return;
	        for (var i = 0; i < node.childNodes.length; i++)
	          walk(node.childNodes[i]);
	        if (/^(pre|div|p)$/i.test(node.nodeName))
	          closing = true;
	      } else if (node.nodeType == 3) {
	        var val = node.nodeValue;
	        if (!val) return;
	        if (closing) {
	          text += lineSep;
	          closing = false;
	        }
	        text += val;
	      }
	    }
	    for (;;) {
	      walk(from);
	      if (from == to) break;
	      from = from.nextSibling;
	    }
	    return text;
	  }

	  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

	  // SELECTION / CURSOR

	  // Selection objects are immutable. A new one is created every time
	  // the selection changes. A selection is one or more non-overlapping
	  // (and non-touching) ranges, sorted, and an integer that indicates
	  // which one is the primary selection (the one that's scrolled into
	  // view, that getCursor returns, etc).
	  function Selection(ranges, primIndex) {
	    this.ranges = ranges;
	    this.primIndex = primIndex;
	  }

	  Selection.prototype = {
	    primary: function() { return this.ranges[this.primIndex]; },
	    equals: function(other) {
	      if (other == this) return true;
	      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var here = this.ranges[i], there = other.ranges[i];
	        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	      }
	      return true;
	    },
	    deepCopy: function() {
	      for (var out = [], i = 0; i < this.ranges.length; i++)
	        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	      return new Selection(out, this.primIndex);
	    },
	    somethingSelected: function() {
	      for (var i = 0; i < this.ranges.length; i++)
	        if (!this.ranges[i].empty()) return true;
	      return false;
	    },
	    contains: function(pos, end) {
	      if (!end) end = pos;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	          return i;
	      }
	      return -1;
	    }
	  };

	  function Range(anchor, head) {
	    this.anchor = anchor; this.head = head;
	  }

	  Range.prototype = {
	    from: function() { return minPos(this.anchor, this.head); },
	    to: function() { return maxPos(this.anchor, this.head); },
	    empty: function() {
	      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	    }
	  };

	  // Take an unsorted, potentially overlapping set of ranges, and
	  // build a selection out of it. 'Consumes' ranges array (modifying
	  // it).
	  function normalizeSelection(ranges, primIndex) {
	    var prim = ranges[primIndex];
	    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	    primIndex = indexOf(ranges, prim);
	    for (var i = 1; i < ranges.length; i++) {
	      var cur = ranges[i], prev = ranges[i - 1];
	      if (cmp(prev.to(), cur.from()) >= 0) {
	        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	        if (i <= primIndex) --primIndex;
	        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	      }
	    }
	    return new Selection(ranges, primIndex);
	  }

	  function simpleSelection(anchor, head) {
	    return new Selection([new Range(anchor, head || anchor)], 0);
	  }

	  // Most of the external API clips given positions to make sure they
	  // actually exist within the document.
	  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
	  function clipPos(doc, pos) {
	    if (pos.line < doc.first) return Pos(doc.first, 0);
	    var last = doc.first + doc.size - 1;
	    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	    return clipToLen(pos, getLine(doc, pos.line).text.length);
	  }
	  function clipToLen(pos, linelen) {
	    var ch = pos.ch;
	    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	    else if (ch < 0) return Pos(pos.line, 0);
	    else return pos;
	  }
	  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
	  function clipPosArray(doc, array) {
	    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	    return out;
	  }

	  // SELECTION UPDATES

	  // The 'scroll' parameter given to many of these indicated whether
	  // the new cursor position should be scrolled into view after
	  // modifying the selection.

	  // If shift is held or the extend flag is set, extends a range to
	  // include a given position (and optionally a second position).
	  // Otherwise, simply returns the range between the given positions.
	  // Used for cursor motion and such.
	  function extendRange(doc, range, head, other) {
	    if (doc.cm && doc.cm.display.shift || doc.extend) {
	      var anchor = range.anchor;
	      if (other) {
	        var posBefore = cmp(head, anchor) < 0;
	        if (posBefore != (cmp(other, anchor) < 0)) {
	          anchor = head;
	          head = other;
	        } else if (posBefore != (cmp(head, other) < 0)) {
	          head = other;
	        }
	      }
	      return new Range(anchor, head);
	    } else {
	      return new Range(other || head, head);
	    }
	  }

	  // Extend the primary selection range, discard the rest.
	  function extendSelection(doc, head, other, options) {
	    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
	  }

	  // Extend all selections (pos is an array of selections with length
	  // equal the number of selections)
	  function extendSelections(doc, heads, options) {
	    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	    var newSel = normalizeSelection(out, doc.sel.primIndex);
	    setSelection(doc, newSel, options);
	  }

	  // Updates a single range in the selection.
	  function replaceOneSelection(doc, i, range, options) {
	    var ranges = doc.sel.ranges.slice(0);
	    ranges[i] = range;
	    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	  }

	  // Reset the selection to a single range.
	  function setSimpleSelection(doc, anchor, head, options) {
	    setSelection(doc, simpleSelection(anchor, head), options);
	  }

	  // Give beforeSelectionChange handlers a change to influence a
	  // selection update.
	  function filterSelectionChange(doc, sel, options) {
	    var obj = {
	      ranges: sel.ranges,
	      update: function(ranges) {
	        this.ranges = [];
	        for (var i = 0; i < ranges.length; i++)
	          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                     clipPos(doc, ranges[i].head));
	      },
	      origin: options && options.origin
	    };
	    signal(doc, "beforeSelectionChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	    else return sel;
	  }

	  function setSelectionReplaceHistory(doc, sel, options) {
	    var done = doc.history.done, last = lst(done);
	    if (last && last.ranges) {
	      done[done.length - 1] = sel;
	      setSelectionNoUndo(doc, sel, options);
	    } else {
	      setSelection(doc, sel, options);
	    }
	  }

	  // Set a new selection.
	  function setSelection(doc, sel, options) {
	    setSelectionNoUndo(doc, sel, options);
	    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	  }

	  function setSelectionNoUndo(doc, sel, options) {
	    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	      sel = filterSelectionChange(doc, sel, options);

	    var bias = options && options.bias ||
	      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

	    if (!(options && options.scroll === false) && doc.cm)
	      ensureCursorVisible(doc.cm);
	  }

	  function setSelectionInner(doc, sel) {
	    if (sel.equals(doc.sel)) return;

	    doc.sel = sel;

	    if (doc.cm) {
	      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	      signalCursorActivity(doc.cm);
	    }
	    signalLater(doc, "cursorActivity", doc);
	  }

	  // Verify that the selection does not partially select any atomic
	  // marked ranges.
	  function reCheckSelection(doc) {
	    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
	  }

	  // Return a selection that does not partially select any atomic
	  // ranges.
	  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	    var out;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i];
	      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
	      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
	      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
	      if (out || newAnchor != range.anchor || newHead != range.head) {
	        if (!out) out = sel.ranges.slice(0, i);
	        out[i] = new Range(newAnchor, newHead);
	      }
	    }
	    return out ? normalizeSelection(out, sel.primIndex) : sel;
	  }

	  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	    var line = getLine(doc, pos.line);
	    if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	      var sp = line.markedSpans[i], m = sp.marker;
	      if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	          (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	        if (mayClear) {
	          signal(m, "beforeCursorEnter");
	          if (m.explicitlyCleared) {
	            if (!line.markedSpans) break;
	            else {--i; continue;}
	          }
	        }
	        if (!m.atomic) continue;

	        if (oldPos) {
	          var near = m.find(dir < 0 ? 1 : -1), diff;
	          if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	            near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null);
	          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	            return skipAtomicInner(doc, near, pos, dir, mayClear);
	        }

	        var far = m.find(dir < 0 ? -1 : 1);
	        if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	          far = movePos(doc, far, dir, far.line == pos.line ? line : null);
	        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
	      }
	    }
	    return pos;
	  }

	  // Ensure a given position is not inside an atomic range.
	  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	    var dir = bias || 1;
	    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
	    if (!found) {
	      doc.cantEdit = true;
	      return Pos(doc.first, 0);
	    }
	    return found;
	  }

	  function movePos(doc, pos, dir, line) {
	    if (dir < 0 && pos.ch == 0) {
	      if (pos.line > doc.first) return clipPos(doc, Pos(pos.line - 1));
	      else return null;
	    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	      if (pos.line < doc.first + doc.size - 1) return Pos(pos.line + 1, 0);
	      else return null;
	    } else {
	      return new Pos(pos.line, pos.ch + dir);
	    }
	  }

	  // SELECTION DRAWING

	  function updateSelection(cm) {
	    cm.display.input.showSelection(cm.display.input.prepareSelection());
	  }

	  function prepareSelection(cm, primary) {
	    var doc = cm.doc, result = {};
	    var curFragment = result.cursors = document.createDocumentFragment();
	    var selFragment = result.selection = document.createDocumentFragment();

	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      if (primary === false && i == doc.sel.primIndex) continue;
	      var range = doc.sel.ranges[i];
	      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) continue;
	      var collapsed = range.empty();
	      if (collapsed || cm.options.showCursorWhenSelecting)
	        drawSelectionCursor(cm, range.head, curFragment);
	      if (!collapsed)
	        drawSelectionRange(cm, range, selFragment);
	    }
	    return result;
	  }

	  // Draws a cursor for the given range
	  function drawSelectionCursor(cm, head, output) {
	    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

	    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	    cursor.style.left = pos.left + "px";
	    cursor.style.top = pos.top + "px";
	    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

	    if (pos.other) {
	      // Secondary cursor, shown when on a 'jump' in bi-directional text
	      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	      otherCursor.style.display = "";
	      otherCursor.style.left = pos.other.left + "px";
	      otherCursor.style.top = pos.other.top + "px";
	      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	    }
	  }

	  // Draws the given range as a highlighted selection
	  function drawSelectionRange(cm, range, output) {
	    var display = cm.display, doc = cm.doc;
	    var fragment = document.createDocumentFragment();
	    var padding = paddingH(cm.display), leftSide = padding.left;
	    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

	    function add(left, top, width, bottom) {
	      if (top < 0) top = 0;
	      top = Math.round(top);
	      bottom = Math.round(bottom);
	      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
	                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
	                               "px; height: " + (bottom - top) + "px"));
	    }

	    function drawForLine(line, fromArg, toArg) {
	      var lineObj = getLine(doc, line);
	      var lineLen = lineObj.text.length;
	      var start, end;
	      function coords(ch, bias) {
	        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	      }

	      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
	        var leftPos = coords(from, "left"), rightPos, left, right;
	        if (from == to) {
	          rightPos = leftPos;
	          left = right = leftPos.left;
	        } else {
	          rightPos = coords(to - 1, "right");
	          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	          left = leftPos.left;
	          right = rightPos.right;
	        }
	        if (fromArg == null && from == 0) left = leftSide;
	        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	          add(left, leftPos.top, null, leftPos.bottom);
	          left = leftSide;
	          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
	        }
	        if (toArg == null && to == lineLen) right = rightSide;
	        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	          start = leftPos;
	        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	          end = rightPos;
	        if (left < leftSide + 1) left = leftSide;
	        add(left, rightPos.top, right - left, rightPos.bottom);
	      });
	      return {start: start, end: end};
	    }

	    var sFrom = range.from(), sTo = range.to();
	    if (sFrom.line == sTo.line) {
	      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	    } else {
	      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	      var singleVLine = visualLine(fromLine) == visualLine(toLine);
	      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	      if (singleVLine) {
	        if (leftEnd.top < rightStart.top - 2) {
	          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	        } else {
	          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	        }
	      }
	      if (leftEnd.bottom < rightStart.top)
	        add(leftSide, leftEnd.bottom, null, rightStart.top);
	    }

	    output.appendChild(fragment);
	  }

	  // Cursor-blinking
	  function restartBlink(cm) {
	    if (!cm.state.focused) return;
	    var display = cm.display;
	    clearInterval(display.blinker);
	    var on = true;
	    display.cursorDiv.style.visibility = "";
	    if (cm.options.cursorBlinkRate > 0)
	      display.blinker = setInterval(function() {
	        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	      }, cm.options.cursorBlinkRate);
	    else if (cm.options.cursorBlinkRate < 0)
	      display.cursorDiv.style.visibility = "hidden";
	  }

	  // HIGHLIGHT WORKER

	  function startWorker(cm, time) {
	    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	      cm.state.highlight.set(time, bind(highlightWorker, cm));
	  }

	  function highlightWorker(cm) {
	    var doc = cm.doc;
	    if (doc.frontier < doc.first) doc.frontier = doc.first;
	    if (doc.frontier >= cm.display.viewTo) return;
	    var end = +new Date + cm.options.workTime;
	    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	    var changedLines = [];

	    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	      if (doc.frontier >= cm.display.viewFrom) { // Visible
	        var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength;
	        var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true);
	        line.styles = highlighted.styles;
	        var oldCls = line.styleClasses, newCls = highlighted.classes;
	        if (newCls) line.styleClasses = newCls;
	        else if (oldCls) line.styleClasses = null;
	        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
	        if (ischange) changedLines.push(doc.frontier);
	        line.stateAfter = tooLong ? state : copyState(doc.mode, state);
	      } else {
	        if (line.text.length <= cm.options.maxHighlightLength)
	          processLine(cm, line.text, state);
	        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	      }
	      ++doc.frontier;
	      if (+new Date > end) {
	        startWorker(cm, cm.options.workDelay);
	        return true;
	      }
	    });
	    if (changedLines.length) runInOp(cm, function() {
	      for (var i = 0; i < changedLines.length; i++)
	        regLineChange(cm, changedLines[i], "text");
	    });
	  }

	  // Finds the line to start with when starting a parse. Tries to
	  // find a line with a stateAfter, so that it can start with a
	  // valid state. If that fails, it returns the line with the
	  // smallest indentation, which tends to need the least context to
	  // parse correctly.
	  function findStartLine(cm, n, precise) {
	    var minindent, minline, doc = cm.doc;
	    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	    for (var search = n; search > lim; --search) {
	      if (search <= doc.first) return doc.first;
	      var line = getLine(doc, search - 1);
	      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	      var indented = countColumn(line.text, null, cm.options.tabSize);
	      if (minline == null || minindent > indented) {
	        minline = search - 1;
	        minindent = indented;
	      }
	    }
	    return minline;
	  }

	  function getStateBefore(cm, n, precise) {
	    var doc = cm.doc, display = cm.display;
	    if (!doc.mode.startState) return true;
	    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	    if (!state) state = startState(doc.mode);
	    else state = copyState(doc.mode, state);
	    doc.iter(pos, n, function(line) {
	      processLine(cm, line.text, state);
	      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	      line.stateAfter = save ? copyState(doc.mode, state) : null;
	      ++pos;
	    });
	    if (precise) doc.frontier = pos;
	    return state;
	  }

	  // POSITION MEASUREMENT

	  function paddingTop(display) {return display.lineSpace.offsetTop;}
	  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
	  function paddingH(display) {
	    if (display.cachedPaddingH) return display.cachedPaddingH;
	    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	    return data;
	  }

	  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
	  function displayWidth(cm) {
	    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
	  }
	  function displayHeight(cm) {
	    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
	  }

	  // Ensure the lineView.wrapping.heights array is populated. This is
	  // an array of bottom offsets for the lines that make up a drawn
	  // line. When lineWrapping is on, there might be more than one
	  // height.
	  function ensureLineHeights(cm, lineView, rect) {
	    var wrapping = cm.options.lineWrapping;
	    var curWidth = wrapping && displayWidth(cm);
	    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	      var heights = lineView.measure.heights = [];
	      if (wrapping) {
	        lineView.measure.width = curWidth;
	        var rects = lineView.text.firstChild.getClientRects();
	        for (var i = 0; i < rects.length - 1; i++) {
	          var cur = rects[i], next = rects[i + 1];
	          if (Math.abs(cur.bottom - next.bottom) > 2)
	            heights.push((cur.bottom + next.top) / 2 - rect.top);
	        }
	      }
	      heights.push(rect.bottom - rect.top);
	    }
	  }

	  // Find a line map (mapping character offsets to text nodes) and a
	  // measurement cache for the given line number. (A line view might
	  // contain multiple lines when collapsed ranges are present.)
	  function mapFromLineView(lineView, line, lineN) {
	    if (lineView.line == line)
	      return {map: lineView.measure.map, cache: lineView.measure.cache};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineView.rest[i] == line)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineNo(lineView.rest[i]) > lineN)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
	  }

	  // Render a line into the hidden node display.externalMeasured. Used
	  // when measurement is needed for a line that's not in the viewport.
	  function updateExternalMeasurement(cm, line) {
	    line = visualLine(line);
	    var lineN = lineNo(line);
	    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	    view.lineN = lineN;
	    var built = view.built = buildLineContent(cm, view);
	    view.text = built.pre;
	    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	    return view;
	  }

	  // Get a {top, bottom, left, right} box (in line-local coordinates)
	  // for a given character.
	  function measureChar(cm, line, ch, bias) {
	    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
	  }

	  // Find a line view that corresponds to the given line number.
	  function findViewForLine(cm, lineN) {
	    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	      return cm.display.view[findViewIndex(cm, lineN)];
	    var ext = cm.display.externalMeasured;
	    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	      return ext;
	  }

	  // Measurement can be split in two steps, the set-up work that
	  // applies to the whole line, and the measurement of the actual
	  // character. Functions like coordsChar, that need to do a lot of
	  // measurements in a row, can thus ensure that the set-up work is
	  // only done once.
	  function prepareMeasureForLine(cm, line) {
	    var lineN = lineNo(line);
	    var view = findViewForLine(cm, lineN);
	    if (view && !view.text) {
	      view = null;
	    } else if (view && view.changes) {
	      updateLineForChanges(cm, view, lineN, getDimensions(cm));
	      cm.curOp.forceUpdate = true;
	    }
	    if (!view)
	      view = updateExternalMeasurement(cm, line);

	    var info = mapFromLineView(view, line, lineN);
	    return {
	      line: line, view: view, rect: null,
	      map: info.map, cache: info.cache, before: info.before,
	      hasHeights: false
	    };
	  }

	  // Given a prepared measurement object, measures the position of an
	  // actual character (or fetches it from the cache).
	  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	    if (prepared.before) ch = -1;
	    var key = ch + (bias || ""), found;
	    if (prepared.cache.hasOwnProperty(key)) {
	      found = prepared.cache[key];
	    } else {
	      if (!prepared.rect)
	        prepared.rect = prepared.view.text.getBoundingClientRect();
	      if (!prepared.hasHeights) {
	        ensureLineHeights(cm, prepared.view, prepared.rect);
	        prepared.hasHeights = true;
	      }
	      found = measureCharInner(cm, prepared, ch, bias);
	      if (!found.bogus) prepared.cache[key] = found;
	    }
	    return {left: found.left, right: found.right,
	            top: varHeight ? found.rtop : found.top,
	            bottom: varHeight ? found.rbottom : found.bottom};
	  }

	  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

	  function nodeAndOffsetInLineMap(map, ch, bias) {
	    var node, start, end, collapse;
	    // First, search the line map for the text node corresponding to,
	    // or closest to, the target character.
	    for (var i = 0; i < map.length; i += 3) {
	      var mStart = map[i], mEnd = map[i + 1];
	      if (ch < mStart) {
	        start = 0; end = 1;
	        collapse = "left";
	      } else if (ch < mEnd) {
	        start = ch - mStart;
	        end = start + 1;
	      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	        end = mEnd - mStart;
	        start = end - 1;
	        if (ch >= mEnd) collapse = "right";
	      }
	      if (start != null) {
	        node = map[i + 2];
	        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	          collapse = bias;
	        if (bias == "left" && start == 0)
	          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	            node = map[(i -= 3) + 2];
	            collapse = "left";
	          }
	        if (bias == "right" && start == mEnd - mStart)
	          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	            node = map[(i += 3) + 2];
	            collapse = "right";
	          }
	        break;
	      }
	    }
	    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd};
	  }

	  function getUsefulRect(rects, bias) {
	    var rect = nullRect
	    if (bias == "left") for (var i = 0; i < rects.length; i++) {
	      if ((rect = rects[i]).left != rect.right) break
	    } else for (var i = rects.length - 1; i >= 0; i--) {
	      if ((rect = rects[i]).left != rect.right) break
	    }
	    return rect
	  }

	  function measureCharInner(cm, prepared, ch, bias) {
	    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

	    var rect;
	    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	      for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) --start;
	        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) ++end;
	        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
	          rect = node.parentNode.getBoundingClientRect();
	        else
	          rect = getUsefulRect(range(node, start, end).getClientRects(), bias)
	        if (rect.left || rect.right || start == 0) break;
	        end = start;
	        start = start - 1;
	        collapse = "right";
	      }
	      if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	    } else { // If it is a widget, simply get the box for the whole widget.
	      if (start > 0) collapse = bias = "right";
	      var rects;
	      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	        rect = rects[bias == "right" ? rects.length - 1 : 0];
	      else
	        rect = node.getBoundingClientRect();
	    }
	    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	      var rSpan = node.parentNode.getClientRects()[0];
	      if (rSpan)
	        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	      else
	        rect = nullRect;
	    }

	    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	    var mid = (rtop + rbot) / 2;
	    var heights = prepared.view.measure.heights;
	    for (var i = 0; i < heights.length - 1; i++)
	      if (mid < heights[i]) break;
	    var top = i ? heights[i - 1] : 0, bot = heights[i];
	    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                  top: top, bottom: bot};
	    if (!rect.left && !rect.right) result.bogus = true;
	    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

	    return result;
	  }

	  // Work around problem with bounding client rects on ranges being
	  // returned incorrectly when zoomed on IE10 and below.
	  function maybeUpdateRectForZooming(measure, rect) {
	    if (!window.screen || screen.logicalXDPI == null ||
	        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	      return rect;
	    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	    return {left: rect.left * scaleX, right: rect.right * scaleX,
	            top: rect.top * scaleY, bottom: rect.bottom * scaleY};
	  }

	  function clearLineMeasurementCacheFor(lineView) {
	    if (lineView.measure) {
	      lineView.measure.cache = {};
	      lineView.measure.heights = null;
	      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	        lineView.measure.caches[i] = {};
	    }
	  }

	  function clearLineMeasurementCache(cm) {
	    cm.display.externalMeasure = null;
	    removeChildren(cm.display.lineMeasure);
	    for (var i = 0; i < cm.display.view.length; i++)
	      clearLineMeasurementCacheFor(cm.display.view[i]);
	  }

	  function clearCaches(cm) {
	    clearLineMeasurementCache(cm);
	    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	    cm.display.lineNumChars = null;
	  }

	  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
	  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

	  // Converts a {top, bottom, left, right} box from line-local
	  // coordinates into another coordinate system. Context may be one of
	  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
	  // or "page".
	  function intoCoordSystem(cm, lineObj, rect, context) {
	    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	      var size = widgetHeight(lineObj.widgets[i]);
	      rect.top += size; rect.bottom += size;
	    }
	    if (context == "line") return rect;
	    if (!context) context = "local";
	    var yOff = heightAtLine(lineObj);
	    if (context == "local") yOff += paddingTop(cm.display);
	    else yOff -= cm.display.viewOffset;
	    if (context == "page" || context == "window") {
	      var lOff = cm.display.lineSpace.getBoundingClientRect();
	      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	      rect.left += xOff; rect.right += xOff;
	    }
	    rect.top += yOff; rect.bottom += yOff;
	    return rect;
	  }

	  // Coverts a box from "div" coords to another coordinate system.
	  // Context may be "window", "page", "div", or "local"/null.
	  function fromCoordSystem(cm, coords, context) {
	    if (context == "div") return coords;
	    var left = coords.left, top = coords.top;
	    // First move into "page" coordinate system
	    if (context == "page") {
	      left -= pageScrollX();
	      top -= pageScrollY();
	    } else if (context == "local" || !context) {
	      var localBox = cm.display.sizer.getBoundingClientRect();
	      left += localBox.left;
	      top += localBox.top;
	    }

	    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
	  }

	  function charCoords(cm, pos, context, lineObj, bias) {
	    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
	  }

	  // Returns a box for a given cursor position, which may have an
	  // 'other' property containing the position of the secondary cursor
	  // on a bidi boundary.
	  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	    lineObj = lineObj || getLine(cm.doc, pos.line);
	    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	    function get(ch, right) {
	      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	      if (right) m.left = m.right; else m.right = m.left;
	      return intoCoordSystem(cm, lineObj, m, context);
	    }
	    function getBidi(ch, partPos) {
	      var part = order[partPos], right = part.level % 2;
	      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	        part = order[--partPos];
	        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
	        right = true;
	      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	        part = order[++partPos];
	        ch = bidiLeft(part) - part.level % 2;
	        right = false;
	      }
	      if (right && ch == part.to && ch > part.from) return get(ch - 1);
	      return get(ch, right);
	    }
	    var order = getOrder(lineObj), ch = pos.ch;
	    if (!order) return get(ch);
	    var partPos = getBidiPartAt(order, ch);
	    var val = getBidi(ch, partPos);
	    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	    return val;
	  }

	  // Used to cheaply estimate the coordinates for a position. Used for
	  // intermediate scroll updates.
	  function estimateCoords(cm, pos) {
	    var left = 0, pos = clipPos(cm.doc, pos);
	    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	    var lineObj = getLine(cm.doc, pos.line);
	    var top = heightAtLine(lineObj) + paddingTop(cm.display);
	    return {left: left, right: left, top: top, bottom: top + lineObj.height};
	  }

	  // Positions returned by coordsChar contain some extra information.
	  // xRel is the relative x position of the input coordinates compared
	  // to the found position (so xRel > 0 means the coordinates are to
	  // the right of the character position, for example). When outside
	  // is true, that means the coordinates lie outside the line's
	  // vertical range.
	  function PosWithInfo(line, ch, outside, xRel) {
	    var pos = Pos(line, ch);
	    pos.xRel = xRel;
	    if (outside) pos.outside = true;
	    return pos;
	  }

	  // Compute the character position closest to the given coordinates.
	  // Input must be lineSpace-local ("div" coordinate system).
	  function coordsChar(cm, x, y) {
	    var doc = cm.doc;
	    y += cm.display.viewOffset;
	    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	    if (lineN > last)
	      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	    if (x < 0) x = 0;

	    var lineObj = getLine(doc, lineN);
	    for (;;) {
	      var found = coordsCharInner(cm, lineObj, lineN, x, y);
	      var merged = collapsedSpanAtEnd(lineObj);
	      var mergedPos = merged && merged.find(0, true);
	      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	        lineN = lineNo(lineObj = mergedPos.to.line);
	      else
	        return found;
	    }
	  }

	  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	    var innerOff = y - heightAtLine(lineObj);
	    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	    var preparedMeasure = prepareMeasureForLine(cm, lineObj);

	    function getX(ch) {
	      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	      wrongLine = true;
	      if (innerOff > sp.bottom) return sp.left - adjust;
	      else if (innerOff < sp.top) return sp.left + adjust;
	      else wrongLine = false;
	      return sp.left;
	    }

	    var bidi = getOrder(lineObj), dist = lineObj.text.length;
	    var from = lineLeft(lineObj), to = lineRight(lineObj);
	    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

	    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	    // Do a binary search between these bounds.
	    for (;;) {
	      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	        var ch = x < fromX || x - fromX <= toX - x ? from : to;
	        var outside = ch == from ? fromOutside : toOutside
	        var xDiff = x - (ch == from ? fromX : toX);
	        // This is a kludge to handle the case where the coordinates
	        // are after a line-wrapped line. We should replace it with a
	        // more general handling of cursor positions around line
	        // breaks. (Issue #4078)
	        if (toOutside && !bidi && !/\s/.test(lineObj.text.charAt(ch)) && xDiff > 0 &&
	            ch < lineObj.text.length && preparedMeasure.view.measure.heights.length > 1) {
	          var charSize = measureCharPrepared(cm, preparedMeasure, ch, "right");
	          if (innerOff <= charSize.bottom && innerOff >= charSize.top && Math.abs(x - charSize.right) < xDiff) {
	            outside = false
	            ch++
	            xDiff = x - charSize.right
	          }
	        }
	        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
	        var pos = PosWithInfo(lineNo, ch, outside, xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
	        return pos;
	      }
	      var step = Math.ceil(dist / 2), middle = from + step;
	      if (bidi) {
	        middle = from;
	        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	      }
	      var middleX = getX(middle);
	      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	    }
	  }

	  var measureText;
	  // Compute the default text height.
	  function textHeight(display) {
	    if (display.cachedTextHeight != null) return display.cachedTextHeight;
	    if (measureText == null) {
	      measureText = elt("pre");
	      // Measure a bunch of lines, for browsers that compute
	      // fractional heights.
	      for (var i = 0; i < 49; ++i) {
	        measureText.appendChild(document.createTextNode("x"));
	        measureText.appendChild(elt("br"));
	      }
	      measureText.appendChild(document.createTextNode("x"));
	    }
	    removeChildrenAndAdd(display.measure, measureText);
	    var height = measureText.offsetHeight / 50;
	    if (height > 3) display.cachedTextHeight = height;
	    removeChildren(display.measure);
	    return height || 1;
	  }

	  // Compute the default character width.
	  function charWidth(display) {
	    if (display.cachedCharWidth != null) return display.cachedCharWidth;
	    var anchor = elt("span", "xxxxxxxxxx");
	    var pre = elt("pre", [anchor]);
	    removeChildrenAndAdd(display.measure, pre);
	    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	    if (width > 2) display.cachedCharWidth = width;
	    return width || 10;
	  }

	  // OPERATIONS

	  // Operations are used to wrap a series of changes to the editor
	  // state in such a way that each change won't have to update the
	  // cursor and display (which would be awkward, slow, and
	  // error-prone). Instead, display updates are batched and then all
	  // combined and executed at once.

	  var operationGroup = null;

	  var nextOpId = 0;
	  // Start a new operation.
	  function startOperation(cm) {
	    cm.curOp = {
	      cm: cm,
	      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	      startHeight: cm.doc.height, // Used to detect need to update scrollbar
	      forceUpdate: false,      // Used to force a redraw
	      updateInput: null,       // Whether to reset the input textarea
	      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	      changeObjs: null,        // Accumulated changes, for firing change events
	      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	      selectionChanged: false, // Whether the selection needs to be redrawn
	      updateMaxLine: false,    // Set when the widest line needs to be determined anew
	      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	      scrollToPos: null,       // Used to scroll to a specific position
	      focus: false,
	      id: ++nextOpId           // Unique ID
	    };
	    if (operationGroup) {
	      operationGroup.ops.push(cm.curOp);
	    } else {
	      cm.curOp.ownsGroup = operationGroup = {
	        ops: [cm.curOp],
	        delayedCallbacks: []
	      };
	    }
	  }

	  function fireCallbacksForOps(group) {
	    // Calls delayed callbacks and cursorActivity handlers until no
	    // new ones appear
	    var callbacks = group.delayedCallbacks, i = 0;
	    do {
	      for (; i < callbacks.length; i++)
	        callbacks[i].call(null);
	      for (var j = 0; j < group.ops.length; j++) {
	        var op = group.ops[j];
	        if (op.cursorActivityHandlers)
	          while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	            op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
	      }
	    } while (i < callbacks.length);
	  }

	  // Finish an operation, updating the display and signalling delayed events
	  function endOperation(cm) {
	    var op = cm.curOp, group = op.ownsGroup;
	    if (!group) return;

	    try { fireCallbacksForOps(group); }
	    finally {
	      operationGroup = null;
	      for (var i = 0; i < group.ops.length; i++)
	        group.ops[i].cm.curOp = null;
	      endOperations(group);
	    }
	  }

	  // The DOM updates done when an operation finishes are batched so
	  // that the minimum number of relayouts are required.
	  function endOperations(group) {
	    var ops = group.ops;
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_finish(ops[i]);
	  }

	  function endOperation_R1(op) {
	    var cm = op.cm, display = cm.display;
	    maybeClipScrollbars(cm);
	    if (op.updateMaxLine) findMaxLine(cm);

	    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                         op.scrollToPos.to.line >= display.viewTo) ||
	      display.maxLineChanged && cm.options.lineWrapping;
	    op.update = op.mustUpdate &&
	      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	  }

	  function endOperation_W1(op) {
	    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	  }

	  function endOperation_R2(op) {
	    var cm = op.cm, display = cm.display;
	    if (op.updatedDisplay) updateHeightsInViewport(cm);

	    op.barMeasure = measureForScrollbars(cm);

	    // If the max line changed since it was last measured, measure it,
	    // and ensure the document's width matches it.
	    // updateDisplay_W2 will use these properties to do the actual resizing
	    if (display.maxLineChanged && !cm.options.lineWrapping) {
	      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	      cm.display.sizerWidth = op.adjustWidthTo;
	      op.barMeasure.scrollWidth =
	        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	    }

	    if (op.updatedDisplay || op.selectionChanged)
	      op.preparedSelection = display.input.prepareSelection(op.focus);
	  }

	  function endOperation_W2(op) {
	    var cm = op.cm;

	    if (op.adjustWidthTo != null) {
	      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	      if (op.maxScrollLeft < cm.doc.scrollLeft)
	        setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	      cm.display.maxLineChanged = false;
	    }

	    var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
	    if (op.preparedSelection)
	      cm.display.input.showSelection(op.preparedSelection, takeFocus);
	    if (op.updatedDisplay || op.startHeight != cm.doc.height)
	      updateScrollbars(cm, op.barMeasure);
	    if (op.updatedDisplay)
	      setDocumentHeight(cm, op.barMeasure);

	    if (op.selectionChanged) restartBlink(cm);

	    if (cm.state.focused && op.updateInput)
	      cm.display.input.reset(op.typing);
	    if (takeFocus) ensureFocus(op.cm);
	  }

	  function endOperation_finish(op) {
	    var cm = op.cm, display = cm.display, doc = cm.doc;

	    if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

	    // Abort mouse wheel delta measurement, when scrolling explicitly
	    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	      display.wheelStartX = display.wheelStartY = null;

	    // Propagate the scroll position to the actual DOM scroller
	    if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	      doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	      display.scrollbars.setScrollTop(doc.scrollTop);
	      display.scroller.scrollTop = doc.scrollTop;
	    }
	    if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	      doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft));
	      display.scrollbars.setScrollLeft(doc.scrollLeft);
	      display.scroller.scrollLeft = doc.scrollLeft;
	      alignHorizontally(cm);
	    }
	    // If we need to scroll a specific position into view, do so.
	    if (op.scrollToPos) {
	      var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	    }

	    // Fire events for markers that are hidden/unidden by editing or
	    // undoing
	    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	    if (hidden) for (var i = 0; i < hidden.length; ++i)
	      if (!hidden[i].lines.length) signal(hidden[i], "hide");
	    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

	    if (display.wrapper.offsetHeight)
	      doc.scrollTop = cm.display.scroller.scrollTop;

	    // Fire change events, and delayed event handlers
	    if (op.changeObjs)
	      signal(cm, "changes", cm, op.changeObjs);
	    if (op.update)
	      op.update.finish();
	  }

	  // Run the given function in an operation
	  function runInOp(cm, f) {
	    if (cm.curOp) return f();
	    startOperation(cm);
	    try { return f(); }
	    finally { endOperation(cm); }
	  }
	  // Wraps a function in an operation. Returns the wrapped function.
	  function operation(cm, f) {
	    return function() {
	      if (cm.curOp) return f.apply(cm, arguments);
	      startOperation(cm);
	      try { return f.apply(cm, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	  // Used to add methods to editor and doc instances, wrapping them in
	  // operations.
	  function methodOp(f) {
	    return function() {
	      if (this.curOp) return f.apply(this, arguments);
	      startOperation(this);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(this); }
	    };
	  }
	  function docMethodOp(f) {
	    return function() {
	      var cm = this.cm;
	      if (!cm || cm.curOp) return f.apply(this, arguments);
	      startOperation(cm);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(cm); }
	    };
	  }

	  // VIEW TRACKING

	  // These objects are used to represent the visible (currently drawn)
	  // part of the document. A LineView may correspond to multiple
	  // logical lines, if those are connected by collapsed ranges.
	  function LineView(doc, line, lineN) {
	    // The starting line
	    this.line = line;
	    // Continuing lines, if any
	    this.rest = visualLineContinued(line);
	    // Number of logical lines in this visual line
	    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	    this.node = this.text = null;
	    this.hidden = lineIsHidden(doc, line);
	  }

	  // Create a range of LineView objects for the given lines.
	  function buildViewArray(cm, from, to) {
	    var array = [], nextPos;
	    for (var pos = from; pos < to; pos = nextPos) {
	      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	      nextPos = pos + view.size;
	      array.push(view);
	    }
	    return array;
	  }

	  // Updates the display.view data structure for a given change to the
	  // document. From and to are in pre-change coordinates. Lendiff is
	  // the amount of lines added or subtracted by the change. This is
	  // used for changes that span multiple lines, or change the way
	  // lines are divided into visual lines. regLineChange (below)
	  // registers single-line changes.
	  function regChange(cm, from, to, lendiff) {
	    if (from == null) from = cm.doc.first;
	    if (to == null) to = cm.doc.first + cm.doc.size;
	    if (!lendiff) lendiff = 0;

	    var display = cm.display;
	    if (lendiff && to < display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers > from))
	      display.updateLineNumbers = from;

	    cm.curOp.viewChanged = true;

	    if (from >= display.viewTo) { // Change after
	      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	        resetView(cm);
	    } else if (to <= display.viewFrom) { // Change before
	      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	        resetView(cm);
	      } else {
	        display.viewFrom += lendiff;
	        display.viewTo += lendiff;
	      }
	    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	      resetView(cm);
	    } else if (from <= display.viewFrom) { // Top overlap
	      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cut) {
	        display.view = display.view.slice(cut.index);
	        display.viewFrom = cut.lineN;
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    } else if (to >= display.viewTo) { // Bottom overlap
	      var cut = viewCuttingPoint(cm, from, from, -1);
	      if (cut) {
	        display.view = display.view.slice(0, cut.index);
	        display.viewTo = cut.lineN;
	      } else {
	        resetView(cm);
	      }
	    } else { // Gap in the middle
	      var cutTop = viewCuttingPoint(cm, from, from, -1);
	      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cutTop && cutBot) {
	        display.view = display.view.slice(0, cutTop.index)
	          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	          .concat(display.view.slice(cutBot.index));
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    }

	    var ext = display.externalMeasured;
	    if (ext) {
	      if (to < ext.lineN)
	        ext.lineN += lendiff;
	      else if (from < ext.lineN + ext.size)
	        display.externalMeasured = null;
	    }
	  }

	  // Register a change to a single line. Type must be one of "text",
	  // "gutter", "class", "widget"
	  function regLineChange(cm, line, type) {
	    cm.curOp.viewChanged = true;
	    var display = cm.display, ext = cm.display.externalMeasured;
	    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	      display.externalMeasured = null;

	    if (line < display.viewFrom || line >= display.viewTo) return;
	    var lineView = display.view[findViewIndex(cm, line)];
	    if (lineView.node == null) return;
	    var arr = lineView.changes || (lineView.changes = []);
	    if (indexOf(arr, type) == -1) arr.push(type);
	  }

	  // Clear the view.
	  function resetView(cm) {
	    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	    cm.display.view = [];
	    cm.display.viewOffset = 0;
	  }

	  // Find the view element corresponding to a given line. Return null
	  // when the line isn't visible.
	  function findViewIndex(cm, n) {
	    if (n >= cm.display.viewTo) return null;
	    n -= cm.display.viewFrom;
	    if (n < 0) return null;
	    var view = cm.display.view;
	    for (var i = 0; i < view.length; i++) {
	      n -= view[i].size;
	      if (n < 0) return i;
	    }
	  }

	  function viewCuttingPoint(cm, oldN, newN, dir) {
	    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	      return {index: index, lineN: newN};
	    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	      n += view[i].size;
	    if (n != oldN) {
	      if (dir > 0) {
	        if (index == view.length - 1) return null;
	        diff = (n + view[index].size) - oldN;
	        index++;
	      } else {
	        diff = n - oldN;
	      }
	      oldN += diff; newN += diff;
	    }
	    while (visualLineNo(cm.doc, newN) != newN) {
	      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	      index += dir;
	    }
	    return {index: index, lineN: newN};
	  }

	  // Force the view to cover a given range, adding empty view element
	  // or clipping off existing ones as needed.
	  function adjustView(cm, from, to) {
	    var display = cm.display, view = display.view;
	    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	      display.view = buildViewArray(cm, from, to);
	      display.viewFrom = from;
	    } else {
	      if (display.viewFrom > from)
	        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	      else if (display.viewFrom < from)
	        display.view = display.view.slice(findViewIndex(cm, from));
	      display.viewFrom = from;
	      if (display.viewTo < to)
	        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	      else if (display.viewTo > to)
	        display.view = display.view.slice(0, findViewIndex(cm, to));
	    }
	    display.viewTo = to;
	  }

	  // Count the number of lines in the view whose DOM representation is
	  // out of date (or nonexistent).
	  function countDirtyView(cm) {
	    var view = cm.display.view, dirty = 0;
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	    }
	    return dirty;
	  }

	  // EVENT HANDLERS

	  // Attach the necessary event handlers when initializing the editor
	  function registerEventHandlers(cm) {
	    var d = cm.display;
	    on(d.scroller, "mousedown", operation(cm, onMouseDown));
	    // Older IE's will not fire a second mousedown for a double click
	    if (ie && ie_version < 11)
	      on(d.scroller, "dblclick", operation(cm, function(e) {
	        if (signalDOMEvent(cm, e)) return;
	        var pos = posFromMouse(cm, e);
	        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
	        e_preventDefault(e);
	        var word = cm.findWordAt(pos);
	        extendSelection(cm.doc, word.anchor, word.head);
	      }));
	    else
	      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	    // Some browsers fire contextmenu *after* opening the menu, at
	    // which point we can't mess with it anymore. Context menu is
	    // handled in onMouseDown for these browsers.
	    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

	    // Used to suppress mouse event handling when a touch happens
	    var touchFinished, prevTouch = {end: 0};
	    function finishTouch() {
	      if (d.activeTouch) {
	        touchFinished = setTimeout(function() {d.activeTouch = null;}, 1000);
	        prevTouch = d.activeTouch;
	        prevTouch.end = +new Date;
	      }
	    };
	    function isMouseLikeTouchEvent(e) {
	      if (e.touches.length != 1) return false;
	      var touch = e.touches[0];
	      return touch.radiusX <= 1 && touch.radiusY <= 1;
	    }
	    function farAway(touch, other) {
	      if (other.left == null) return true;
	      var dx = other.left - touch.left, dy = other.top - touch.top;
	      return dx * dx + dy * dy > 20 * 20;
	    }
	    on(d.scroller, "touchstart", function(e) {
	      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	        clearTimeout(touchFinished);
	        var now = +new Date;
	        d.activeTouch = {start: now, moved: false,
	                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
	        if (e.touches.length == 1) {
	          d.activeTouch.left = e.touches[0].pageX;
	          d.activeTouch.top = e.touches[0].pageY;
	        }
	      }
	    });
	    on(d.scroller, "touchmove", function() {
	      if (d.activeTouch) d.activeTouch.moved = true;
	    });
	    on(d.scroller, "touchend", function(e) {
	      var touch = d.activeTouch;
	      if (touch && !eventInWidget(d, e) && touch.left != null &&
	          !touch.moved && new Date - touch.start < 300) {
	        var pos = cm.coordsChar(d.activeTouch, "page"), range;
	        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	          range = new Range(pos, pos);
	        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	          range = cm.findWordAt(pos);
	        else // Triple tap
	          range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
	        cm.setSelection(range.anchor, range.head);
	        cm.focus();
	        e_preventDefault(e);
	      }
	      finishTouch();
	    });
	    on(d.scroller, "touchcancel", finishTouch);

	    // Sync scrolling between fake scrollbars and real scrollable
	    // area, ensure viewport is updated when scrolling.
	    on(d.scroller, "scroll", function() {
	      if (d.scroller.clientHeight) {
	        setScrollTop(cm, d.scroller.scrollTop);
	        setScrollLeft(cm, d.scroller.scrollLeft, true);
	        signal(cm, "scroll", cm);
	      }
	    });

	    // Listen to wheel events in order to try and update the viewport on time.
	    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

	    // Prevent wrapper from ever scrolling
	    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

	    d.dragFunctions = {
	      enter: function(e) {if (!signalDOMEvent(cm, e)) e_stop(e);},
	      over: function(e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	      start: function(e){onDragStart(cm, e);},
	      drop: operation(cm, onDrop),
	      leave: function(e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
	    };

	    var inp = d.input.getField();
	    on(inp, "keyup", function(e) { onKeyUp.call(cm, e); });
	    on(inp, "keydown", operation(cm, onKeyDown));
	    on(inp, "keypress", operation(cm, onKeyPress));
	    on(inp, "focus", function (e) { onFocus(cm, e); });
	    on(inp, "blur", function (e) { onBlur(cm, e); });
	  }

	  function dragDropChanged(cm, value, old) {
	    var wasOn = old && old != CodeMirror.Init;
	    if (!value != !wasOn) {
	      var funcs = cm.display.dragFunctions;
	      var toggle = value ? on : off;
	      toggle(cm.display.scroller, "dragstart", funcs.start);
	      toggle(cm.display.scroller, "dragenter", funcs.enter);
	      toggle(cm.display.scroller, "dragover", funcs.over);
	      toggle(cm.display.scroller, "dragleave", funcs.leave);
	      toggle(cm.display.scroller, "drop", funcs.drop);
	    }
	  }

	  // Called when the window resizes
	  function onResize(cm) {
	    var d = cm.display;
	    if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	      return;
	    // Might be a text scaling operation, clear size caches.
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	    d.scrollbarsClipped = false;
	    cm.setSize();
	  }

	  // MOUSE EVENTS

	  // Return true when the given mouse event happened in a widget
	  function eventInWidget(display, e) {
	    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	          (n.parentNode == display.sizer && n != display.mover))
	        return true;
	    }
	  }

	  // Given a mouse event, find the corresponding position. If liberal
	  // is false, it checks whether a gutter or scrollbar was clicked,
	  // and returns null if it was. forRect is used by rectangular
	  // selections, and tries to estimate a character position even for
	  // coordinates beyond the right of the text.
	  function posFromMouse(cm, e, liberal, forRect) {
	    var display = cm.display;
	    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") return null;

	    var x, y, space = display.lineSpace.getBoundingClientRect();
	    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	    try { x = e.clientX - space.left; y = e.clientY - space.top; }
	    catch (e) { return null; }
	    var coords = coordsChar(cm, x, y), line;
	    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	    }
	    return coords;
	  }

	  // A mouse down can be a single click, double click, triple click,
	  // start of selection drag, start of text drag, new cursor
	  // (ctrl-click), rectangle drag (alt-drag), or xwin
	  // middle-click-paste. Or it might be a click on something we should
	  // not interfere with, such as a scrollbar or widget.
	  function onMouseDown(e) {
	    var cm = this, display = cm.display;
	    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) return;
	    display.shift = e.shiftKey;

	    if (eventInWidget(display, e)) {
	      if (!webkit) {
	        // Briefly turn off draggability, to allow widgets to do
	        // normal dragging things.
	        display.scroller.draggable = false;
	        setTimeout(function(){display.scroller.draggable = true;}, 100);
	      }
	      return;
	    }
	    if (clickInGutter(cm, e)) return;
	    var start = posFromMouse(cm, e);
	    window.focus();

	    switch (e_button(e)) {
	    case 1:
	      // #3261: make sure, that we're not starting a second selection
	      if (cm.state.selectingText)
	        cm.state.selectingText(e);
	      else if (start)
	        leftButtonDown(cm, e, start);
	      else if (e_target(e) == display.scroller)
	        e_preventDefault(e);
	      break;
	    case 2:
	      if (webkit) cm.state.lastMiddleDown = +new Date;
	      if (start) extendSelection(cm.doc, start);
	      setTimeout(function() {display.input.focus();}, 20);
	      e_preventDefault(e);
	      break;
	    case 3:
	      if (captureRightClick) onContextMenu(cm, e);
	      else delayBlurEvent(cm);
	      break;
	    }
	  }

	  var lastClick, lastDoubleClick;
	  function leftButtonDown(cm, e, start) {
	    if (ie) setTimeout(bind(ensureFocus, cm), 0);
	    else cm.curOp.focus = activeElt();

	    var now = +new Date, type;
	    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	      type = "triple";
	    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	      type = "double";
	      lastDoubleClick = {time: now, pos: start};
	    } else {
	      type = "single";
	      lastClick = {time: now, pos: start};
	    }

	    var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	        type == "single" && (contained = sel.contains(start)) > -1 &&
	        (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	        (cmp(contained.to(), start) > 0 || start.xRel < 0))
	      leftButtonStartDrag(cm, e, start, modifier);
	    else
	      leftButtonSelect(cm, e, start, type, modifier);
	  }

	  // Start a text drag. When it ends, see if any dragging actually
	  // happen, and treat as a click if it didn't.
	  function leftButtonStartDrag(cm, e, start, modifier) {
	    var display = cm.display, startTime = +new Date;
	    var dragEnd = operation(cm, function(e2) {
	      if (webkit) display.scroller.draggable = false;
	      cm.state.draggingText = false;
	      off(document, "mouseup", dragEnd);
	      off(display.scroller, "drop", dragEnd);
	      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	        e_preventDefault(e2);
	        if (!modifier && +new Date - 200 < startTime)
	          extendSelection(cm.doc, start);
	        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	        if (webkit || ie && ie_version == 9)
	          setTimeout(function() {document.body.focus(); display.input.focus();}, 20);
	        else
	          display.input.focus();
	      }
	    });
	    // Let the drag handler handle this.
	    if (webkit) display.scroller.draggable = true;
	    cm.state.draggingText = dragEnd;
	    dragEnd.copy = mac ? e.altKey : e.ctrlKey
	    // IE's approach to draggable
	    if (display.scroller.dragDrop) display.scroller.dragDrop();
	    on(document, "mouseup", dragEnd);
	    on(display.scroller, "drop", dragEnd);
	  }

	  // Normal selection, as opposed to text dragging.
	  function leftButtonSelect(cm, e, start, type, addNew) {
	    var display = cm.display, doc = cm.doc;
	    e_preventDefault(e);

	    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	    if (addNew && !e.shiftKey) {
	      ourIndex = doc.sel.contains(start);
	      if (ourIndex > -1)
	        ourRange = ranges[ourIndex];
	      else
	        ourRange = new Range(start, start);
	    } else {
	      ourRange = doc.sel.primary();
	      ourIndex = doc.sel.primIndex;
	    }

	    if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
	      type = "rect";
	      if (!addNew) ourRange = new Range(start, start);
	      start = posFromMouse(cm, e, true, true);
	      ourIndex = -1;
	    } else if (type == "double") {
	      var word = cm.findWordAt(start);
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	      else
	        ourRange = word;
	    } else if (type == "triple") {
	      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	      else
	        ourRange = line;
	    } else {
	      ourRange = extendRange(doc, ourRange, start);
	    }

	    if (!addNew) {
	      ourIndex = 0;
	      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	      startSel = doc.sel;
	    } else if (ourIndex == -1) {
	      ourIndex = ranges.length;
	      setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                   {scroll: false, origin: "*mouse"});
	    } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	      setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                   {scroll: false, origin: "*mouse"});
	      startSel = doc.sel;
	    } else {
	      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	    }

	    var lastPos = start;
	    function extendTo(pos) {
	      if (cmp(lastPos, pos) == 0) return;
	      lastPos = pos;

	      if (type == "rect") {
	        var ranges = [], tabSize = cm.options.tabSize;
	        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	             line <= end; line++) {
	          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	          if (left == right)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
	          else if (text.length > leftPos)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
	        }
	        if (!ranges.length) ranges.push(new Range(start, start));
	        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                     {origin: "*mouse", scroll: false});
	        cm.scrollIntoView(pos);
	      } else {
	        var oldRange = ourRange;
	        var anchor = oldRange.anchor, head = pos;
	        if (type != "single") {
	          if (type == "double")
	            var range = cm.findWordAt(pos);
	          else
	            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
	          if (cmp(range.anchor, anchor) > 0) {
	            head = range.head;
	            anchor = minPos(oldRange.from(), range.anchor);
	          } else {
	            head = range.anchor;
	            anchor = maxPos(oldRange.to(), range.head);
	          }
	        }
	        var ranges = startSel.ranges.slice(0);
	        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
	        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	      }
	    }

	    var editorSize = display.wrapper.getBoundingClientRect();
	    // Used to ensure timeout re-tries don't fire when another extend
	    // happened in the meantime (clearTimeout isn't reliable -- at
	    // least on Chrome, the timeouts still happen even when cleared,
	    // if the clear happens after their scheduled firing time).
	    var counter = 0;

	    function extend(e) {
	      var curCount = ++counter;
	      var cur = posFromMouse(cm, e, true, type == "rect");
	      if (!cur) return;
	      if (cmp(cur, lastPos) != 0) {
	        cm.curOp.focus = activeElt();
	        extendTo(cur);
	        var visible = visibleLines(display, doc);
	        if (cur.line >= visible.to || cur.line < visible.from)
	          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	      } else {
	        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	        if (outside) setTimeout(operation(cm, function() {
	          if (counter != curCount) return;
	          display.scroller.scrollTop += outside;
	          extend(e);
	        }), 50);
	      }
	    }

	    function done(e) {
	      cm.state.selectingText = false;
	      counter = Infinity;
	      e_preventDefault(e);
	      display.input.focus();
	      off(document, "mousemove", move);
	      off(document, "mouseup", up);
	      doc.history.lastSelOrigin = null;
	    }

	    var move = operation(cm, function(e) {
	      if (!e_button(e)) done(e);
	      else extend(e);
	    });
	    var up = operation(cm, done);
	    cm.state.selectingText = up;
	    on(document, "mousemove", move);
	    on(document, "mouseup", up);
	  }

	  // Determines whether an event happened in the gutter, and fires the
	  // handlers for the corresponding event.
	  function gutterEvent(cm, e, type, prevent) {
	    try { var mX = e.clientX, mY = e.clientY; }
	    catch(e) { return false; }
	    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	    if (prevent) e_preventDefault(e);

	    var display = cm.display;
	    var lineBox = display.lineDiv.getBoundingClientRect();

	    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	    mY -= lineBox.top - display.viewOffset;

	    for (var i = 0; i < cm.options.gutters.length; ++i) {
	      var g = display.gutters.childNodes[i];
	      if (g && g.getBoundingClientRect().right >= mX) {
	        var line = lineAtHeight(cm.doc, mY);
	        var gutter = cm.options.gutters[i];
	        signal(cm, type, cm, line, gutter, e);
	        return e_defaultPrevented(e);
	      }
	    }
	  }

	  function clickInGutter(cm, e) {
	    return gutterEvent(cm, e, "gutterClick", true);
	  }

	  // Kludge to work around strange IE behavior where it'll sometimes
	  // re-fire a series of drag-related events right after the drop (#1551)
	  var lastDrop = 0;

	  function onDrop(e) {
	    var cm = this;
	    clearDragCursor(cm);
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	      return;
	    e_preventDefault(e);
	    if (ie) lastDrop = +new Date;
	    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	    if (!pos || cm.isReadOnly()) return;
	    // Might be a file drop, in which case we simply extract the text
	    // and insert it.
	    if (files && files.length && window.FileReader && window.File) {
	      var n = files.length, text = Array(n), read = 0;
	      var loadFile = function(file, i) {
	        if (cm.options.allowDropFileTypes &&
	            indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	          return;

	        var reader = new FileReader;
	        reader.onload = operation(cm, function() {
	          var content = reader.result;
	          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) content = "";
	          text[i] = content;
	          if (++read == n) {
	            pos = clipPos(cm.doc, pos);
	            var change = {from: pos, to: pos,
	                          text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                          origin: "paste"};
	            makeChange(cm.doc, change);
	            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	          }
	        });
	        reader.readAsText(file);
	      };
	      for (var i = 0; i < n; ++i) loadFile(files[i], i);
	    } else { // Normal drop
	      // Don't do a replace if the drop happened inside of the selected text.
	      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	        cm.state.draggingText(e);
	        // Ensure the editor is re-focused
	        setTimeout(function() {cm.display.input.focus();}, 20);
	        return;
	      }
	      try {
	        var text = e.dataTransfer.getData("Text");
	        if (text) {
	          if (cm.state.draggingText && !cm.state.draggingText.copy)
	            var selected = cm.listSelections();
	          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	          if (selected) for (var i = 0; i < selected.length; ++i)
	            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
	          cm.replaceSelection(text, "around", "paste");
	          cm.display.input.focus();
	        }
	      }
	      catch(e){}
	    }
	  }

	  function onDragStart(cm, e) {
	    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

	    e.dataTransfer.setData("Text", cm.getSelection());
	    e.dataTransfer.effectAllowed = "copyMove"

	    // Use dummy image instead of default browsers image.
	    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	    if (e.dataTransfer.setDragImage && !safari) {
	      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	      if (presto) {
	        img.width = img.height = 1;
	        cm.display.wrapper.appendChild(img);
	        // Force a relayout, or Opera won't use our image for some obscure reason
	        img._top = img.offsetTop;
	      }
	      e.dataTransfer.setDragImage(img, 0, 0);
	      if (presto) img.parentNode.removeChild(img);
	    }
	  }

	  function onDragOver(cm, e) {
	    var pos = posFromMouse(cm, e);
	    if (!pos) return;
	    var frag = document.createDocumentFragment();
	    drawSelectionCursor(cm, pos, frag);
	    if (!cm.display.dragCursor) {
	      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	    }
	    removeChildrenAndAdd(cm.display.dragCursor, frag);
	  }

	  function clearDragCursor(cm) {
	    if (cm.display.dragCursor) {
	      cm.display.lineSpace.removeChild(cm.display.dragCursor);
	      cm.display.dragCursor = null;
	    }
	  }

	  // SCROLL EVENTS

	  // Sync the scrollable area and scrollbars, ensure the viewport
	  // covers the visible area.
	  function setScrollTop(cm, val) {
	    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	    cm.doc.scrollTop = val;
	    if (!gecko) updateDisplaySimple(cm, {top: val});
	    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	    cm.display.scrollbars.setScrollTop(val);
	    if (gecko) updateDisplaySimple(cm);
	    startWorker(cm, 100);
	  }
	  // Sync scroller and scrollbar, ensure the gutter elements are
	  // aligned.
	  function setScrollLeft(cm, val, isScroller) {
	    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	    cm.doc.scrollLeft = val;
	    alignHorizontally(cm);
	    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	    cm.display.scrollbars.setScrollLeft(val);
	  }

	  // Since the delta values reported on mouse wheel events are
	  // unstandardized between browsers and even browser versions, and
	  // generally horribly unpredictable, this code starts by measuring
	  // the scroll effect that the first few mouse wheel events have,
	  // and, from that, detects the way it can convert deltas to pixel
	  // offsets afterwards.
	  //
	  // The reason we want to know the amount a wheel event will scroll
	  // is that it gives us a chance to update the display before the
	  // actual scrolling happens, reducing flickering.

	  var wheelSamples = 0, wheelPixelsPerUnit = null;
	  // Fill in a browser-detected starting value on browsers where we
	  // know one. These don't have to be accurate -- the result of them
	  // being wrong would just be a slight flicker on the first wheel
	  // scroll (if it is large enough).
	  if (ie) wheelPixelsPerUnit = -.53;
	  else if (gecko) wheelPixelsPerUnit = 15;
	  else if (chrome) wheelPixelsPerUnit = -.7;
	  else if (safari) wheelPixelsPerUnit = -1/3;

	  var wheelEventDelta = function(e) {
	    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	    else if (dy == null) dy = e.wheelDelta;
	    return {x: dx, y: dy};
	  };
	  CodeMirror.wheelEventPixels = function(e) {
	    var delta = wheelEventDelta(e);
	    delta.x *= wheelPixelsPerUnit;
	    delta.y *= wheelPixelsPerUnit;
	    return delta;
	  };

	  function onScrollWheel(cm, e) {
	    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

	    var display = cm.display, scroll = display.scroller;
	    // Quit if there's nothing to scroll here
	    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
	    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
	    if (!(dx && canScrollX || dy && canScrollY)) return;

	    // Webkit browsers on OS X abort momentum scrolls when the target
	    // of the scroll event is removed from the scrollable element.
	    // This hack (see related code in patchDisplay) makes sure the
	    // element is kept around.
	    if (dy && mac && webkit) {
	      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	        for (var i = 0; i < view.length; i++) {
	          if (view[i].node == cur) {
	            cm.display.currentWheelTarget = cur;
	            break outer;
	          }
	        }
	      }
	    }

	    // On some browsers, horizontal scrolling will cause redraws to
	    // happen before the gutter has been realigned, causing it to
	    // wriggle around in a most unseemly way. When we have an
	    // estimated pixels/delta value, we just handle horizontal
	    // scrolling entirely here. It'll be slightly off from native, but
	    // better than glitching out.
	    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	      if (dy && canScrollY)
	        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	      // Only prevent default scrolling if vertical scrolling is
	      // actually possible. Otherwise, it causes vertical scroll
	      // jitter on OSX trackpads when deltaX is small and deltaY
	      // is large (issue #3579)
	      if (!dy || (dy && canScrollY))
	        e_preventDefault(e);
	      display.wheelStartX = null; // Abort measurement, if in progress
	      return;
	    }

	    // 'Project' the visible viewport to cover the area that is being
	    // scrolled into view (if we know enough to estimate it).
	    if (dy && wheelPixelsPerUnit != null) {
	      var pixels = dy * wheelPixelsPerUnit;
	      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	      if (pixels < 0) top = Math.max(0, top + pixels - 50);
	      else bot = Math.min(cm.doc.height, bot + pixels + 50);
	      updateDisplaySimple(cm, {top: top, bottom: bot});
	    }

	    if (wheelSamples < 20) {
	      if (display.wheelStartX == null) {
	        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	        display.wheelDX = dx; display.wheelDY = dy;
	        setTimeout(function() {
	          if (display.wheelStartX == null) return;
	          var movedX = scroll.scrollLeft - display.wheelStartX;
	          var movedY = scroll.scrollTop - display.wheelStartY;
	          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	            (movedX && display.wheelDX && movedX / display.wheelDX);
	          display.wheelStartX = display.wheelStartY = null;
	          if (!sample) return;
	          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	          ++wheelSamples;
	        }, 200);
	      } else {
	        display.wheelDX += dx; display.wheelDY += dy;
	      }
	    }
	  }

	  // KEY EVENTS

	  // Run a handler that was bound to a key.
	  function doHandleBinding(cm, bound, dropShift) {
	    if (typeof bound == "string") {
	      bound = commands[bound];
	      if (!bound) return false;
	    }
	    // Ensure previous input has been read, so that the handler sees a
	    // consistent view of the document
	    cm.display.input.ensurePolled();
	    var prevShift = cm.display.shift, done = false;
	    try {
	      if (cm.isReadOnly()) cm.state.suppressEdits = true;
	      if (dropShift) cm.display.shift = false;
	      done = bound(cm) != Pass;
	    } finally {
	      cm.display.shift = prevShift;
	      cm.state.suppressEdits = false;
	    }
	    return done;
	  }

	  function lookupKeyForEditor(cm, name, handle) {
	    for (var i = 0; i < cm.state.keyMaps.length; i++) {
	      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	      if (result) return result;
	    }
	    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	      || lookupKey(name, cm.options.keyMap, handle, cm);
	  }

	  var stopSeq = new Delayed;
	  function dispatchKey(cm, name, e, handle) {
	    var seq = cm.state.keySeq;
	    if (seq) {
	      if (isModifierKey(name)) return "handled";
	      stopSeq.set(50, function() {
	        if (cm.state.keySeq == seq) {
	          cm.state.keySeq = null;
	          cm.display.input.reset();
	        }
	      });
	      name = seq + " " + name;
	    }
	    var result = lookupKeyForEditor(cm, name, handle);

	    if (result == "multi")
	      cm.state.keySeq = name;
	    if (result == "handled")
	      signalLater(cm, "keyHandled", cm, name, e);

	    if (result == "handled" || result == "multi") {
	      e_preventDefault(e);
	      restartBlink(cm);
	    }

	    if (seq && !result && /\'$/.test(name)) {
	      e_preventDefault(e);
	      return true;
	    }
	    return !!result;
	  }

	  // Handle a key from the keydown event.
	  function handleKeyBinding(cm, e) {
	    var name = keyName(e, true);
	    if (!name) return false;

	    if (e.shiftKey && !cm.state.keySeq) {
	      // First try to resolve full name (including 'Shift-'). Failing
	      // that, see if there is a cursor-motion command (starting with
	      // 'go') bound to the keyname without 'Shift-'.
	      return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
	          || dispatchKey(cm, name, e, function(b) {
	               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	                 return doHandleBinding(cm, b);
	             });
	    } else {
	      return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	    }
	  }

	  // Handle a key from the keypress event
	  function handleCharBinding(cm, e, ch) {
	    return dispatchKey(cm, "'" + ch + "'", e,
	                       function(b) { return doHandleBinding(cm, b, true); });
	  }

	  var lastStoppedKey = null;
	  function onKeyDown(e) {
	    var cm = this;
	    cm.curOp.focus = activeElt();
	    if (signalDOMEvent(cm, e)) return;
	    // IE does strange things with escape.
	    if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	    var code = e.keyCode;
	    cm.display.shift = code == 16 || e.shiftKey;
	    var handled = handleKeyBinding(cm, e);
	    if (presto) {
	      lastStoppedKey = handled ? code : null;
	      // Opera has no cut event... we try to at least catch the key combo
	      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	        cm.replaceSelection("", null, "cut");
	    }

	    // Turn mouse into crosshair when Alt is held on Mac.
	    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	      showCrossHair(cm);
	  }

	  function showCrossHair(cm) {
	    var lineDiv = cm.display.lineDiv;
	    addClass(lineDiv, "CodeMirror-crosshair");

	    function up(e) {
	      if (e.keyCode == 18 || !e.altKey) {
	        rmClass(lineDiv, "CodeMirror-crosshair");
	        off(document, "keyup", up);
	        off(document, "mouseover", up);
	      }
	    }
	    on(document, "keyup", up);
	    on(document, "mouseover", up);
	  }

	  function onKeyUp(e) {
	    if (e.keyCode == 16) this.doc.sel.shift = false;
	    signalDOMEvent(this, e);
	  }

	  function onKeyPress(e) {
	    var cm = this;
	    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	    var keyCode = e.keyCode, charCode = e.charCode;
	    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return;
	    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	    if (handleCharBinding(cm, e, ch)) return;
	    cm.display.input.onKeyPress(e);
	  }

	  // FOCUS/BLUR EVENTS

	  function delayBlurEvent(cm) {
	    cm.state.delayingBlurEvent = true;
	    setTimeout(function() {
	      if (cm.state.delayingBlurEvent) {
	        cm.state.delayingBlurEvent = false;
	        onBlur(cm);
	      }
	    }, 100);
	  }

	  function onFocus(cm, e) {
	    if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false;

	    if (cm.options.readOnly == "nocursor") return;
	    if (!cm.state.focused) {
	      signal(cm, "focus", cm, e);
	      cm.state.focused = true;
	      addClass(cm.display.wrapper, "CodeMirror-focused");
	      // This test prevents this from firing when a context
	      // menu is closed (since the input reset would kill the
	      // select-all detection hack)
	      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	        cm.display.input.reset();
	        if (webkit) setTimeout(function() { cm.display.input.reset(true); }, 20); // Issue #1730
	      }
	      cm.display.input.receivedFocus();
	    }
	    restartBlink(cm);
	  }
	  function onBlur(cm, e) {
	    if (cm.state.delayingBlurEvent) return;

	    if (cm.state.focused) {
	      signal(cm, "blur", cm, e);
	      cm.state.focused = false;
	      rmClass(cm.display.wrapper, "CodeMirror-focused");
	    }
	    clearInterval(cm.display.blinker);
	    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
	  }

	  // CONTEXT MENU HANDLING

	  // To make the context menu work, we need to briefly unhide the
	  // textarea (making it as unobtrusive as possible) to let the
	  // right-click take effect on it.
	  function onContextMenu(cm, e) {
	    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) return;
	    if (signalDOMEvent(cm, e, "contextmenu")) return;
	    cm.display.input.onContextMenu(e);
	  }

	  function contextMenuInGutter(cm, e) {
	    if (!hasHandler(cm, "gutterContextMenu")) return false;
	    return gutterEvent(cm, e, "gutterContextMenu", false);
	  }

	  // UPDATING

	  // Compute the position of the end of a change (its 'to' property
	  // refers to the pre-change end).
	  var changeEnd = CodeMirror.changeEnd = function(change) {
	    if (!change.text) return change.to;
	    return Pos(change.from.line + change.text.length - 1,
	               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	  };

	  // Adjust a position to refer to the post-change position of the
	  // same text, or the end of the change if the change covers it.
	  function adjustForChange(pos, change) {
	    if (cmp(pos, change.from) < 0) return pos;
	    if (cmp(pos, change.to) <= 0) return changeEnd(change);

	    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	    return Pos(line, ch);
	  }

	  function computeSelAfterChange(doc, change) {
	    var out = [];
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      out.push(new Range(adjustForChange(range.anchor, change),
	                         adjustForChange(range.head, change)));
	    }
	    return normalizeSelection(out, doc.sel.primIndex);
	  }

	  function offsetPos(pos, old, nw) {
	    if (pos.line == old.line)
	      return Pos(nw.line, pos.ch - old.ch + nw.ch);
	    else
	      return Pos(nw.line + (pos.line - old.line), pos.ch);
	  }

	  // Used by replaceSelections to allow moving the selection to the
	  // start or around the replaced test. Hint may be "start" or "around".
	  function computeReplacedSel(doc, changes, hint) {
	    var out = [];
	    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	    for (var i = 0; i < changes.length; i++) {
	      var change = changes[i];
	      var from = offsetPos(change.from, oldPrev, newPrev);
	      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	      oldPrev = change.to;
	      newPrev = to;
	      if (hint == "around") {
	        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	        out[i] = new Range(inv ? to : from, inv ? from : to);
	      } else {
	        out[i] = new Range(from, from);
	      }
	    }
	    return new Selection(out, doc.sel.primIndex);
	  }

	  // Allow "beforeChange" event handlers to influence a change
	  function filterChange(doc, change, update) {
	    var obj = {
	      canceled: false,
	      from: change.from,
	      to: change.to,
	      text: change.text,
	      origin: change.origin,
	      cancel: function() { this.canceled = true; }
	    };
	    if (update) obj.update = function(from, to, text, origin) {
	      if (from) this.from = clipPos(doc, from);
	      if (to) this.to = clipPos(doc, to);
	      if (text) this.text = text;
	      if (origin !== undefined) this.origin = origin;
	    };
	    signal(doc, "beforeChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

	    if (obj.canceled) return null;
	    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
	  }

	  // Apply a change to a document, and add it to the document's
	  // history, and propagating it to all linked documents.
	  function makeChange(doc, change, ignoreReadOnly) {
	    if (doc.cm) {
	      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	      if (doc.cm.state.suppressEdits) return;
	    }

	    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	      change = filterChange(doc, change, true);
	      if (!change) return;
	    }

	    // Possibly split or suppress the update based on the presence
	    // of read-only spans in its range.
	    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	    if (split) {
	      for (var i = split.length - 1; i >= 0; --i)
	        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	    } else {
	      makeChangeInner(doc, change);
	    }
	  }

	  function makeChangeInner(doc, change) {
	    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	    var selAfter = computeSelAfterChange(doc, change);
	    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

	    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	    var rebased = [];

	    linkedDocs(doc, function(doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	    });
	  }

	  // Revert a change stored in a document's history.
	  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	    if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) return;

	    var hist = doc.history, event, selAfter = doc.sel;
	    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

	    // Verify that there is a useable event (so that ctrl-z won't
	    // needlessly clear selection events)
	    for (var i = 0; i < source.length; i++) {
	      event = source[i];
	      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	        break;
	    }
	    if (i == source.length) return;
	    hist.lastOrigin = hist.lastSelOrigin = null;

	    for (;;) {
	      event = source.pop();
	      if (event.ranges) {
	        pushSelectionToHistory(event, dest);
	        if (allowSelectionOnly && !event.equals(doc.sel)) {
	          setSelection(doc, event, {clearRedo: false});
	          return;
	        }
	        selAfter = event;
	      }
	      else break;
	    }

	    // Build up a reverse change object to add to the opposite history
	    // stack (redo when undoing, and vice versa).
	    var antiChanges = [];
	    pushSelectionToHistory(selAfter, dest);
	    dest.push({changes: antiChanges, generation: hist.generation});
	    hist.generation = event.generation || ++hist.maxGeneration;

	    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

	    for (var i = event.changes.length - 1; i >= 0; --i) {
	      var change = event.changes[i];
	      change.origin = type;
	      if (filter && !filterChange(doc, change, false)) {
	        source.length = 0;
	        return;
	      }

	      antiChanges.push(historyChangeFromChange(doc, change));

	      var after = i ? computeSelAfterChange(doc, change) : lst(source);
	      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	      if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	      var rebased = [];

	      // Propagate to the linked documents
	      linkedDocs(doc, function(doc, sharedHist) {
	        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	          rebaseHist(doc.history, change);
	          rebased.push(doc.history);
	        }
	        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	      });
	    }
	  }

	  // Sub-views need their line numbers shifted when text is added
	  // above or below them in the parent document.
	  function shiftDoc(doc, distance) {
	    if (distance == 0) return;
	    doc.first += distance;
	    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
	                       Pos(range.head.line + distance, range.head.ch));
	    }), doc.sel.primIndex);
	    if (doc.cm) {
	      regChange(doc.cm, doc.first, doc.first - distance, distance);
	      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	        regLineChange(doc.cm, l, "gutter");
	    }
	  }

	  // More lower-level change function, handling only a single document
	  // (not linked ones).
	  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	    if (doc.cm && !doc.cm.curOp)
	      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

	    if (change.to.line < doc.first) {
	      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	      return;
	    }
	    if (change.from.line > doc.lastLine()) return;

	    // Clip the change to the size of this doc
	    if (change.from.line < doc.first) {
	      var shift = change.text.length - 1 - (doc.first - change.from.line);
	      shiftDoc(doc, shift);
	      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	                text: [lst(change.text)], origin: change.origin};
	    }
	    var last = doc.lastLine();
	    if (change.to.line > last) {
	      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	                text: [change.text[0]], origin: change.origin};
	    }

	    change.removed = getBetween(doc, change.from, change.to);

	    if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	    else updateDoc(doc, change, spans);
	    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	  }

	  // Handle the interaction of a change to a document with the editor
	  // that this document is part of.
	  function makeChangeSingleDocInEditor(cm, change, spans) {
	    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

	    var recomputeMaxLength = false, checkWidthStart = from.line;
	    if (!cm.options.lineWrapping) {
	      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	      doc.iter(checkWidthStart, to.line + 1, function(line) {
	        if (line == display.maxLine) {
	          recomputeMaxLength = true;
	          return true;
	        }
	      });
	    }

	    if (doc.sel.contains(change.from, change.to) > -1)
	      signalCursorActivity(cm);

	    updateDoc(doc, change, spans, estimateHeight(cm));

	    if (!cm.options.lineWrapping) {
	      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
	        var len = lineLength(line);
	        if (len > display.maxLineLength) {
	          display.maxLine = line;
	          display.maxLineLength = len;
	          display.maxLineChanged = true;
	          recomputeMaxLength = false;
	        }
	      });
	      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	    }

	    // Adjust frontier, schedule worker
	    doc.frontier = Math.min(doc.frontier, from.line);
	    startWorker(cm, 400);

	    var lendiff = change.text.length - (to.line - from.line) - 1;
	    // Remember that these lines changed, for updating the display
	    if (change.full)
	      regChange(cm);
	    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	      regLineChange(cm, from.line, "text");
	    else
	      regChange(cm, from.line, to.line + 1, lendiff);

	    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	    if (changeHandler || changesHandler) {
	      var obj = {
	        from: from, to: to,
	        text: change.text,
	        removed: change.removed,
	        origin: change.origin
	      };
	      if (changeHandler) signalLater(cm, "change", cm, obj);
	      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	    }
	    cm.display.selForContextMenu = null;
	  }

	  function replaceRange(doc, code, from, to, origin) {
	    if (!to) to = from;
	    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	    if (typeof code == "string") code = doc.splitLines(code);
	    makeChange(doc, {from: from, to: to, text: code, origin: origin});
	  }

	  // SCROLLING THINGS INTO VIEW

	  // If an editor sits on the top or bottom of the window, partially
	  // scrolled out of view, this ensures that the cursor is visible.
	  function maybeScrollWindow(cm, coords) {
	    if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

	    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	    if (coords.top + box.top < 0) doScroll = true;
	    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	    if (doScroll != null && !phantom) {
	      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
	                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
	                           (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
	                           coords.left + "px; width: 2px;");
	      cm.display.lineSpace.appendChild(scrollNode);
	      scrollNode.scrollIntoView(doScroll);
	      cm.display.lineSpace.removeChild(scrollNode);
	    }
	  }

	  // Scroll a given position into view (immediately), verifying that
	  // it actually became visible (as line heights are accurately
	  // measured, the position of something may 'drift' during drawing).
	  function scrollPosIntoView(cm, pos, end, margin) {
	    if (margin == null) margin = 0;
	    for (var limit = 0; limit < 5; limit++) {
	      var changed = false, coords = cursorCoords(cm, pos);
	      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                         Math.min(coords.top, endCoords.top) - margin,
	                                         Math.max(coords.left, endCoords.left),
	                                         Math.max(coords.bottom, endCoords.bottom) + margin);
	      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	      if (scrollPos.scrollTop != null) {
	        setScrollTop(cm, scrollPos.scrollTop);
	        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	      }
	      if (scrollPos.scrollLeft != null) {
	        setScrollLeft(cm, scrollPos.scrollLeft);
	        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	      }
	      if (!changed) break;
	    }
	    return coords;
	  }

	  // Scroll a given set of coordinates into view (immediately).
	  function scrollIntoView(cm, x1, y1, x2, y2) {
	    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	  }

	  // Calculate a new scroll position needed to scroll the given
	  // rectangle into view. Returns an object with scrollTop and
	  // scrollLeft properties. When these are undefined, the
	  // vertical/horizontal position does not need to be adjusted.
	  function calculateScrollPos(cm, x1, y1, x2, y2) {
	    var display = cm.display, snapMargin = textHeight(cm.display);
	    if (y1 < 0) y1 = 0;
	    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	    var screen = displayHeight(cm), result = {};
	    if (y2 - y1 > screen) y2 = y1 + screen;
	    var docBottom = cm.doc.height + paddingVert(display);
	    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	    if (y1 < screentop) {
	      result.scrollTop = atTop ? 0 : y1;
	    } else if (y2 > screentop + screen) {
	      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	      if (newTop != screentop) result.scrollTop = newTop;
	    }

	    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	    var tooWide = x2 - x1 > screenw;
	    if (tooWide) x2 = x1 + screenw;
	    if (x1 < 10)
	      result.scrollLeft = 0;
	    else if (x1 < screenleft)
	      result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	    else if (x2 > screenw + screenleft - 3)
	      result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	    return result;
	  }

	  // Store a relative adjustment to the scroll position in the current
	  // operation (to be applied when the operation finishes).
	  function addToScrollPos(cm, left, top) {
	    if (left != null || top != null) resolveScrollToPos(cm);
	    if (left != null)
	      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	    if (top != null)
	      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	  }

	  // Make sure that at the end of the operation the current cursor is
	  // shown.
	  function ensureCursorVisible(cm) {
	    resolveScrollToPos(cm);
	    var cur = cm.getCursor(), from = cur, to = cur;
	    if (!cm.options.lineWrapping) {
	      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	      to = Pos(cur.line, cur.ch + 1);
	    }
	    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
	  }

	  // When an operation has its scrollToPos property set, and another
	  // scroll action is applied before the end of the operation, this
	  // 'simulates' scrolling that position into view in a cheap way, so
	  // that the effect of intermediate scroll commands is not ignored.
	  function resolveScrollToPos(cm) {
	    var range = cm.curOp.scrollToPos;
	    if (range) {
	      cm.curOp.scrollToPos = null;
	      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                    Math.min(from.top, to.top) - range.margin,
	                                    Math.max(from.right, to.right),
	                                    Math.max(from.bottom, to.bottom) + range.margin);
	      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	    }
	  }

	  // API UTILITIES

	  // Indent the given line. The how parameter can be "smart",
	  // "add"/null, "subtract", or "prev". When aggressive is false
	  // (typically set to true for forced single-line indents), empty
	  // lines are not indented, and places where the mode returns Pass
	  // are left alone.
	  function indentLine(cm, n, how, aggressive) {
	    var doc = cm.doc, state;
	    if (how == null) how = "add";
	    if (how == "smart") {
	      // Fall back to "prev" when the mode doesn't have an indentation
	      // method.
	      if (!doc.mode.indent) how = "prev";
	      else state = getStateBefore(cm, n);
	    }

	    var tabSize = cm.options.tabSize;
	    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	    if (line.stateAfter) line.stateAfter = null;
	    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	    if (!aggressive && !/\S/.test(line.text)) {
	      indentation = 0;
	      how = "not";
	    } else if (how == "smart") {
	      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	      if (indentation == Pass || indentation > 150) {
	        if (!aggressive) return;
	        how = "prev";
	      }
	    }
	    if (how == "prev") {
	      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	      else indentation = 0;
	    } else if (how == "add") {
	      indentation = curSpace + cm.options.indentUnit;
	    } else if (how == "subtract") {
	      indentation = curSpace - cm.options.indentUnit;
	    } else if (typeof how == "number") {
	      indentation = curSpace + how;
	    }
	    indentation = Math.max(0, indentation);

	    var indentString = "", pos = 0;
	    if (cm.options.indentWithTabs)
	      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	    if (pos < indentation) indentString += spaceStr(indentation - pos);

	    if (indentString != curSpaceString) {
	      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	      line.stateAfter = null;
	      return true;
	    } else {
	      // Ensure that, if the cursor was in the whitespace at the start
	      // of the line, it is moved to the end of that space.
	      for (var i = 0; i < doc.sel.ranges.length; i++) {
	        var range = doc.sel.ranges[i];
	        if (range.head.line == n && range.head.ch < curSpaceString.length) {
	          var pos = Pos(n, curSpaceString.length);
	          replaceOneSelection(doc, i, new Range(pos, pos));
	          break;
	        }
	      }
	    }
	  }

	  // Utility for applying a change to a line by handle or number,
	  // returning the number and optionally registering the line as
	  // changed.
	  function changeLine(doc, handle, changeType, op) {
	    var no = handle, line = handle;
	    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	    else no = lineNo(handle);
	    if (no == null) return null;
	    if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	    return line;
	  }

	  // Helper for deleting text near the selection(s), used to implement
	  // backspace, delete, and similar functionality.
	  function deleteNearSelection(cm, compute) {
	    var ranges = cm.doc.sel.ranges, kill = [];
	    // Build up a set of ranges to kill first, merging overlapping
	    // ranges.
	    for (var i = 0; i < ranges.length; i++) {
	      var toKill = compute(ranges[i]);
	      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	        var replaced = kill.pop();
	        if (cmp(replaced.from, toKill.from) < 0) {
	          toKill.from = replaced.from;
	          break;
	        }
	      }
	      kill.push(toKill);
	    }
	    // Next, remove those actual ranges.
	    runInOp(cm, function() {
	      for (var i = kill.length - 1; i >= 0; i--)
	        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	      ensureCursorVisible(cm);
	    });
	  }

	  // Used for horizontal relative motion. Dir is -1 or 1 (left or
	  // right), unit can be "char", "column" (like char, but doesn't
	  // cross line boundaries), "word" (across next word), or "group" (to
	  // the start of next group of word or non-word-non-whitespace
	  // chars). The visually param controls whether, in right-to-left
	  // text, direction 1 means to move towards the next index in the
	  // string, or towards the character to the right of the current
	  // position. The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosH(doc, pos, dir, unit, visually) {
	    var line = pos.line, ch = pos.ch, origDir = dir;
	    var lineObj = getLine(doc, line);
	    function findNextLine() {
	      var l = line + dir;
	      if (l < doc.first || l >= doc.first + doc.size) return false
	      line = l;
	      return lineObj = getLine(doc, l);
	    }
	    function moveOnce(boundToLine) {
	      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	      if (next == null) {
	        if (!boundToLine && findNextLine()) {
	          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
	          else ch = dir < 0 ? lineObj.text.length : 0;
	        } else return false
	      } else ch = next;
	      return true;
	    }

	    if (unit == "char") {
	      moveOnce()
	    } else if (unit == "column") {
	      moveOnce(true)
	    } else if (unit == "word" || unit == "group") {
	      var sawType = null, group = unit == "group";
	      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	      for (var first = true;; first = false) {
	        if (dir < 0 && !moveOnce(!first)) break;
	        var cur = lineObj.text.charAt(ch) || "\n";
	        var type = isWordChar(cur, helper) ? "w"
	          : group && cur == "\n" ? "n"
	          : !group || /\s/.test(cur) ? null
	          : "p";
	        if (group && !first && !type) type = "s";
	        if (sawType && sawType != type) {
	          if (dir < 0) {dir = 1; moveOnce();}
	          break;
	        }

	        if (type) sawType = type;
	        if (dir > 0 && !moveOnce(!first)) break;
	      }
	    }
	    var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true);
	    if (!cmp(pos, result)) result.hitSide = true;
	    return result;
	  }

	  // For relative vertical movement. Dir may be -1 or 1. Unit can be
	  // "page" or "line". The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosV(cm, pos, dir, unit) {
	    var doc = cm.doc, x = pos.left, y;
	    if (unit == "page") {
	      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
	      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
	    } else if (unit == "line") {
	      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	    }
	    for (;;) {
	      var target = coordsChar(cm, x, y);
	      if (!target.outside) break;
	      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	      y += dir * 5;
	    }
	    return target;
	  }

	  // EDITOR METHODS

	  // The publicly visible API. Note that methodOp(f) means
	  // 'wrap f in an operation, performed on its `this` parameter'.

	  // This is not the complete set of editor methods. Most of the
	  // methods defined on the Doc type are also injected into
	  // CodeMirror.prototype, for backwards compatibility and
	  // convenience.

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus();},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") return;
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        operation(this, optionHandlers[option])(this, value, old);
	    },

	    getOption: function(option) {return this.options[option];},
	    getDoc: function() {return this.doc;},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) throw new Error("Overlays may not be stateful.");
	      insertSorted(this.state.overlays,
	                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
	                    priority: (options && options.priority) || 0},
	                   function(overlay) { return overlay.priority })
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this.state.modeGen++;
	          regChange(this);
	          return;
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
	        else dir = dir ? "add" : "subtract";
	      }
	      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	    }),
	    indentSelection: methodOp(function(how) {
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (!range.empty()) {
	          var from = range.from(), to = range.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            indentLine(this, j, how);
	          var newRanges = this.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
	        } else if (range.head.line > end) {
	          indentLine(this, range.head.line, how, true);
	          end = range.head.line;
	          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise);
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true);
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) type = styles[2];
	      else for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
	        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
	        else { type = styles[mid * 2 + 2]; break; }
	      }
	      var cut = type ? type.indexOf("cm-overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) return mode;
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0];
	    },

	    getHelpers: function(pos, type) {
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) return found;
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) found.push(help[mode[type]]);
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) found.push(val);
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i = 0; i < help._global.length; i++) {
	        var cur = help._global[i];
	        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
	          found.push(cur.val);
	      }
	      return found;
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getStateBefore(this, line + 1, precise);
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary();
	      if (start == null) pos = range.head;
	      else if (typeof start == "object") pos = clipPos(this.doc, start);
	      else pos = start ? range.from() : range.to();
	      return cursorCoords(this, pos, mode || "page");
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page");
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top);
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset);
	    },
	    heightAtLine: function(line, mode) {
	      var end = false, lineObj;
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1;
	        if (line < this.doc.first) line = this.doc.first;
	        else if (line > last) { line = last; end = true; }
	        lineObj = getLine(this.doc, line);
	      } else {
	        lineObj = line;
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0);
	    },

	    defaultTextHeight: function() { return textHeight(this.display); },
	    defaultCharWidth: function() { return charWidth(this.display); },

	    setGutterMarker: methodOp(function(line, gutterID, value) {
	      return changeLine(this.doc, line, "gutter", function(line) {
	        var markers = line.gutterMarkers || (line.gutterMarkers = {});
	        markers[gutterID] = value;
	        if (!value && isEmpty(markers)) line.gutterMarkers = null;
	        return true;
	      });
	    }),

	    clearGutter: methodOp(function(gutterID) {
	      var cm = this, doc = cm.doc, i = doc.first;
	      doc.iter(function(line) {
	        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	          line.gutterMarkers[gutterID] = null;
	          regLineChange(cm, i, "gutter");
	          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
	        }
	        ++i;
	      });
	    }),

	    lineInfo: function(line) {
	      if (typeof line == "number") {
	        if (!isLine(this.doc, line)) return null;
	        var n = line;
	        line = getLine(this.doc, line);
	        if (!line) return null;
	      } else {
	        var n = lineNo(line);
	        if (n == null) return null;
	      }
	      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	              widgets: line.widgets};
	    },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      this.display.input.setUneditable(node);
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          top = pos.top - node.offsetHeight;
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          top = pos.bottom;
	        if (left + node.offsetWidth > hspace)
	          left = hspace - node.offsetWidth;
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") left = 0;
	        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        return commands[cmd].call(null, this);
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

	    findPosH: function(from, amount, unit, visually) {
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        cur = findPosH(this.doc, cur, dir, unit, visually);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveH: methodOp(function(dir, unit) {
	      var cm = this;
	      cm.extendSelectionsBy(function(range) {
	        if (cm.display.shift || cm.doc.extend || range.empty())
	          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
	        else
	          return dir < 0 ? range.from() : range.to();
	      }, sel_move);
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        doc.replaceSelection("", null, "+delete");
	      else
	        deleteNearSelection(this, function(range) {
	          var other = findPosH(doc, range.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
	        });
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        var coords = cursorCoords(this, cur, "div");
	        if (x == null) x = coords.left;
	        else coords.left = x;
	        cur = findPosV(this, coords, dir, unit);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveV: methodOp(function(dir, unit) {
	      var cm = this, doc = this.doc, goals = [];
	      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function(range) {
	        if (collapse)
	          return dir < 0 ? range.from() : range.to();
	        var headPos = cursorCoords(cm, range.head, "div");
	        if (range.goalColumn != null) headPos.left = range.goalColumn;
	        goals.push(headPos.left);
	        var pos = findPosV(cm, headPos, dir, unit);
	        if (unit == "page" && range == doc.sel.primary())
	          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
	        return pos;
	      }, sel_move);
	      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
	        doc.sel.ranges[i].goalColumn = goals[i];
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function(ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
	          : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
	        while (start > 0 && check(line.charAt(start - 1))) --start;
	        while (end < line.length && check(line.charAt(end))) ++end;
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end));
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) return;
	      if (this.state.overwrite = !this.state.overwrite)
	        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	      else
	        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt(); },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit); },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) resolveScrollToPos(this);
	      if (x != null) this.curOp.scrollLeft = x;
	      if (y != null) this.curOp.scrollTop = y;
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) margin = this.options.cursorScrollMargin;
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null};
	      } else if (range.from == null) {
	        range = {from: range, to: null};
	      }
	      if (!range.to) range.to = range.from;
	      range.margin = margin || 0;

	      if (range.from.line != null) {
	        resolveScrollToPos(this);
	        this.curOp.scrollToPos = range;
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var cm = this;
	      function interpret(val) {
	        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	      }
	      if (width != null) cm.display.wrapper.style.width = interpret(width);
	      if (height != null) cm.display.wrapper.style.height = interpret(height);
	      if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	      var lineNo = cm.display.viewFrom;
	      cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
	        if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
	          if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
	        ++lineNo;
	      });
	      cm.curOp.forceUpdate = true;
	      signal(cm, "refresh", this);
	    }),

	    operation: function(f){return runInOp(this, f);},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        estimateLineHeights(this);
	      signal(this, "refresh", this);
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      this.display.input.reset();
	      this.scrollTo(doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old;
	    }),

	    getInputField: function(){return this.display.input.getField();},
	    getWrapperElement: function(){return this.display.wrapper;},
	    getScrollerElement: function(){return this.display.scroller;},
	    getGutterElement: function(){return this.display.gutters;}
	  };
	  eventMixin(CodeMirror);

	  // OPTION DEFAULTS

	  // The default configuration options.
	  var defaults = CodeMirror.defaults = {};
	  // Functions to run when options are changed.
	  var optionHandlers = CodeMirror.optionHandlers = {};

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) optionHandlers[name] =
	      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
	  }

	  // Passed to option handlers when there is no old value.
	  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function(cm, val) {
	    cm.setValue(val);
	  }, true);
	  option("mode", null, function(cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);

	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function(cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("lineSeparator", null, function(cm, val) {
	    cm.doc.lineSep = val;
	    if (!val) return;
	    var newBreaks = [], lineNo = cm.doc.first;
	    cm.doc.iter(function(line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos);
	        if (found == -1) break;
	        pos = found + val.length;
	        newBreaks.push(Pos(lineNo, found));
	      }
	      lineNo++;
	    });
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length))
	  });
	  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    if (old != CodeMirror.Init) cm.refresh();
	  });
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
	  option("electricChars", true);
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
	    throw new Error("inputStyle can not (yet) be changed in a running editor"); // FIXME
	  }, true);
	  option("spellcheck", false, function(cm, val) {
	    cm.getInputField().spellcheck = val
	  }, true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);

	  option("theme", "default", function(cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function(cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != CodeMirror.Init && getKeyMap(old);
	    if (prev && prev.detach) prev.detach(cm, next);
	    if (next.attach) next.attach(cm, prev || null);
	  });
	  option("extraKeys", null);

	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function(cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
	  option("scrollbarStyle", "native", function(cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);

	  option("resetSelectionOnContextMenu", true);
	  option("lineWiseCopyCut", true);

	  option("readOnly", false, function(cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	      cm.display.disabled = true;
	    } else {
	      cm.display.disabled = false;
	    }
	    cm.display.input.readOnlyChanged(val)
	  });
	  option("disableInput", false, function(cm, val) {if (!val) cm.display.input.reset();}, true);
	  option("dragDrop", true, dragDropChanged);
	  option("allowDropFileTypes", null);

	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function(cm, val) {
	    if (!val) cm.display.input.resetPosition();
	  });

	  option("tabindex", null, function(cm, val) {
	    cm.display.input.getField().tabIndex = val || "";
	  });
	  option("autofocus", null);

	  // MODE DEFINITION AND QUERYING

	  // Known modes, by name and by MIME
	  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

	  // Extra arguments are stored as the mode's dependencies, which is
	  // used by (legacy) mechanisms like loadmode.js to automatically
	  // load a mode. (Preferred mechanism is the require/define calls.)
	  CodeMirror.defineMode = function(name, mode) {
	    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	    if (arguments.length > 2)
	      mode.dependencies = Array.prototype.slice.call(arguments, 2);
	    modes[name] = mode;
	  };

	  CodeMirror.defineMIME = function(mime, spec) {
	    mimeModes[mime] = spec;
	  };

	  // Given a MIME type, a {name, ...options} config object, or a name
	  // string, return a mode config object.
	  CodeMirror.resolveMode = function(spec) {
	    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	      spec = mimeModes[spec];
	    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	      var found = mimeModes[spec.name];
	      if (typeof found == "string") found = {name: found};
	      spec = createObj(found, spec);
	      spec.name = found.name;
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	      return CodeMirror.resolveMode("application/xml");
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
	      return CodeMirror.resolveMode("application/json");
	    }
	    if (typeof spec == "string") return {name: spec};
	    else return spec || {name: "null"};
	  };

	  // Given a mode spec (anything that resolveMode accepts), find and
	  // initialize an actual mode object.
	  CodeMirror.getMode = function(options, spec) {
	    var spec = CodeMirror.resolveMode(spec);
	    var mfactory = modes[spec.name];
	    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	    var modeObj = mfactory(options, spec);
	    if (modeExtensions.hasOwnProperty(spec.name)) {
	      var exts = modeExtensions[spec.name];
	      for (var prop in exts) {
	        if (!exts.hasOwnProperty(prop)) continue;
	        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
	        modeObj[prop] = exts[prop];
	      }
	    }
	    modeObj.name = spec.name;
	    if (spec.helperType) modeObj.helperType = spec.helperType;
	    if (spec.modeProps) for (var prop in spec.modeProps)
	      modeObj[prop] = spec.modeProps[prop];

	    return modeObj;
	  };

	  // Minimal default mode.
	  CodeMirror.defineMode("null", function() {
	    return {token: function(stream) {stream.skipToEnd();}};
	  });
	  CodeMirror.defineMIME("text/plain", "null");

	  // This can be used to attach properties to mode objects from
	  // outside the actual mode definition.
	  var modeExtensions = CodeMirror.modeExtensions = {};
	  CodeMirror.extendMode = function(mode, properties) {
	    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	    copyObj(properties, exts);
	  };

	  // EXTENSIONS

	  CodeMirror.defineExtension = function(name, func) {
	    CodeMirror.prototype[name] = func;
	  };
	  CodeMirror.defineDocExtension = function(name, func) {
	    Doc.prototype[name] = func;
	  };
	  CodeMirror.defineOption = option;

	  var initHooks = [];
	  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

	  var helpers = CodeMirror.helpers = {};
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };

	  // MODE STATE HANDLING

	  // Utility functions for working with state. Exported because nested
	  // modes need to do this for their inner modes.

	  var copyState = CodeMirror.copyState = function(mode, state) {
	    if (state === true) return state;
	    if (mode.copyState) return mode.copyState(state);
	    var nstate = {};
	    for (var n in state) {
	      var val = state[n];
	      if (val instanceof Array) val = val.concat([]);
	      nstate[n] = val;
	    }
	    return nstate;
	  };

	  var startState = CodeMirror.startState = function(mode, a1, a2) {
	    return mode.startState ? mode.startState(a1, a2) : true;
	  };

	  // Given a mode and a state (for that mode), find the inner mode and
	  // state at the position that the state refers to.
	  CodeMirror.innerMode = function(mode, state) {
	    while (mode.innerMode) {
	      var info = mode.innerMode(state);
	      if (!info || info.mode == mode) break;
	      state = info.state;
	      mode = info.mode;
	    }
	    return info || {mode: mode, state: state};
	  };

	  // STANDARD COMMANDS

	  // Commands are parameter-less actions that can be performed on an
	  // editor, mostly used for keybindings.
	  var commands = CodeMirror.commands = {
	    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	    singleSelection: function(cm) {
	      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	    },
	    killLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        if (range.empty()) {
	          var len = getLine(cm.doc, range.head.line).text.length;
	          if (range.head.ch == len && range.head.line < cm.lastLine())
	            return {from: range.head, to: Pos(range.head.line + 1, 0)};
	          else
	            return {from: range.head, to: Pos(range.head.line, len)};
	        } else {
	          return {from: range.from(), to: range.to()};
	        }
	      });
	    },
	    deleteLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0),
	                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	      });
	    },
	    delLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0), to: range.from()};
	      });
	    },
	    delWrappedLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	        return {from: leftPos, to: range.from()};
	      });
	    },
	    delWrappedLineRight: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	        return {from: range.from(), to: rightPos };
	      });
	    },
	    undo: function(cm) {cm.undo();},
	    redo: function(cm) {cm.redo();},
	    undoSelection: function(cm) {cm.undoSelection();},
	    redoSelection: function(cm) {cm.redoSelection();},
	    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	    goLineStart: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
	                            {origin: "+move", bias: 1});
	    },
	    goLineStartSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        return lineStartSmart(cm, range.head);
	      }, {origin: "+move", bias: 1});
	    },
	    goLineEnd: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
	                            {origin: "+move", bias: -1});
	    },
	    goLineRight: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeft: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: 0, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeftSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var pos = cm.coordsChar({left: 0, top: top}, "div");
	        if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
	        return pos;
	      }, sel_move);
	    },
	    goLineUp: function(cm) {cm.moveV(-1, "line");},
	    goLineDown: function(cm) {cm.moveV(1, "line");},
	    goPageUp: function(cm) {cm.moveV(-1, "page");},
	    goPageDown: function(cm) {cm.moveV(1, "page");},
	    goCharLeft: function(cm) {cm.moveH(-1, "char");},
	    goCharRight: function(cm) {cm.moveH(1, "char");},
	    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	    goColumnRight: function(cm) {cm.moveH(1, "column");},
	    goWordLeft: function(cm) {cm.moveH(-1, "word");},
	    goGroupRight: function(cm) {cm.moveH(1, "group");},
	    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	    goWordRight: function(cm) {cm.moveH(1, "word");},
	    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	    delCharAfter: function(cm) {cm.deleteH(1, "char");},
	    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	    delWordAfter: function(cm) {cm.deleteH(1, "word");},
	    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	    indentAuto: function(cm) {cm.indentSelection("smart");},
	    indentMore: function(cm) {cm.indentSelection("add");},
	    indentLess: function(cm) {cm.indentSelection("subtract");},
	    insertTab: function(cm) {cm.replaceSelection("\t");},
	    insertSoftTab: function(cm) {
	      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	      for (var i = 0; i < ranges.length; i++) {
	        var pos = ranges[i].from();
	        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	        spaces.push(spaceStr(tabSize - col % tabSize));
	      }
	      cm.replaceSelections(spaces);
	    },
	    defaultTab: function(cm) {
	      if (cm.somethingSelected()) cm.indentSelection("add");
	      else cm.execCommand("insertTab");
	    },
	    transposeChars: function(cm) {
	      runInOp(cm, function() {
	        var ranges = cm.listSelections(), newSel = [];
	        for (var i = 0; i < ranges.length; i++) {
	          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	          if (line) {
	            if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
	            if (cur.ch > 0) {
	              cur = new Pos(cur.line, cur.ch + 1);
	              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
	            } else if (cur.line > cm.doc.first) {
	              var prev = getLine(cm.doc, cur.line - 1).text;
	              if (prev)
	                cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                                prev.charAt(prev.length - 1),
	                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
	            }
	          }
	          newSel.push(new Range(cur, cur));
	        }
	        cm.setSelections(newSel);
	      });
	    },
	    newlineAndIndent: function(cm) {
	      runInOp(cm, function() {
	        var len = cm.listSelections().length;
	        for (var i = 0; i < len; i++) {
	          var range = cm.listSelections()[i];
	          cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input");
	          cm.indentLine(range.from().line + 1, null, true);
	        }
	        ensureCursorVisible(cm);
	      });
	    },
	    openLine: function(cm) {cm.replaceSelection("\n", "start")},
	    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
	  };


	  // STANDARD KEYMAPS

	  var keyMap = CodeMirror.keyMap = {};

	  keyMap.basic = {
	    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	    "Esc": "singleSelection"
	  };
	  // Note that the save and find-related commands aren't defined by
	  // default. User code or addons can define them. Unknown commands
	  // are simply ignored.
	  keyMap.pcDefault = {
	    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	    fallthrough: "basic"
	  };
	  // Very basic readline/emacs-style bindings, which are standard on Mac.
	  keyMap.emacsy = {
	    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
	    "Ctrl-O": "openLine"
	  };
	  keyMap.macDefault = {
	    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	    fallthrough: ["basic", "emacsy"]
	  };
	  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

	  // KEYMAP DISPATCH

	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	    var alt, ctrl, shift, cmd;
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i];
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	      else if (/^a(lt)?$/i.test(mod)) alt = true;
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	      else if (/^s(hift)$/i.test(mod)) shift = true;
	      else throw new Error("Unrecognized modifier name: " + mod);
	    }
	    if (alt) name = "Alt-" + name;
	    if (ctrl) name = "Ctrl-" + name;
	    if (cmd) name = "Cmd-" + name;
	    if (shift) name = "Shift-" + name;
	    return name;
	  }

	  // This is a kludge to keep keymaps mostly working as raw objects
	  // (backwards compatibility) while at the same time support features
	  // like normalization and multi-stroke key bindings. It compiles a
	  // new normalized keymap, and then updates the old object to reflect
	  // this.
	  CodeMirror.normalizeKeyMap = function(keymap) {
	    var copy = {};
	    for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	      var value = keymap[keyname];
	      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	      if (value == "...") { delete keymap[keyname]; continue; }

	      var keys = map(keyname.split(" "), normalizeKeyName);
	      for (var i = 0; i < keys.length; i++) {
	        var val, name;
	        if (i == keys.length - 1) {
	          name = keys.join(" ");
	          val = value;
	        } else {
	          name = keys.slice(0, i + 1).join(" ");
	          val = "...";
	        }
	        var prev = copy[name];
	        if (!prev) copy[name] = val;
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	      }
	      delete keymap[keyname];
	    }
	    for (var prop in copy) keymap[prop] = copy[prop];
	    return keymap;
	  };

	  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	    map = getKeyMap(map);
	    var found = map.call ? map.call(key, context) : map[key];
	    if (found === false) return "nothing";
	    if (found === "...") return "multi";
	    if (found != null && handle(found)) return "handled";

	    if (map.fallthrough) {
	      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	        return lookupKey(key, map.fallthrough, handle, context);
	      for (var i = 0; i < map.fallthrough.length; i++) {
	        var result = lookupKey(key, map.fallthrough[i], handle, context);
	        if (result) return result;
	      }
	    }
	  };

	  // Modifier key presses don't count as 'real' key presses for the
	  // purpose of keymap fallthrough.
	  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	    var name = typeof value == "string" ? value : keyNames[value.keyCode];
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	  };

	  // Look up the name of a key as indicated by an event object.
	  var keyName = CodeMirror.keyName = function(event, noShift) {
	    if (presto && event.keyCode == 34 && event["char"]) return false;
	    var base = keyNames[event.keyCode], name = base;
	    if (name == null || event.altGraphKey) return false;
	    if (event.altKey && base != "Alt") name = "Alt-" + name;
	    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	    if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	    return name;
	  };

	  function getKeyMap(val) {
	    return typeof val == "string" ? keyMap[val] : val;
	  }

	  // FROMTEXTAREA

	  CodeMirror.fromTextArea = function(textarea, options) {
	    options = options ? copyObj(options) : {};
	    options.value = textarea.value;
	    if (!options.tabindex && textarea.tabIndex)
	      options.tabindex = textarea.tabIndex;
	    if (!options.placeholder && textarea.placeholder)
	      options.placeholder = textarea.placeholder;
	    // Set autofocus to true if this textarea is focused, or if it has
	    // autofocus and no other element is focused.
	    if (options.autofocus == null) {
	      var hasFocus = activeElt();
	      options.autofocus = hasFocus == textarea ||
	        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	    }

	    function save() {textarea.value = cm.getValue();}
	    if (textarea.form) {
	      on(textarea.form, "submit", save);
	      // Deplorable hack to make the submit method do the right thing.
	      if (!options.leaveSubmitMethodAlone) {
	        var form = textarea.form, realSubmit = form.submit;
	        try {
	          var wrappedSubmit = form.submit = function() {
	            save();
	            form.submit = realSubmit;
	            form.submit();
	            form.submit = wrappedSubmit;
	          };
	        } catch(e) {}
	      }
	    }

	    options.finishInit = function(cm) {
	      cm.save = save;
	      cm.getTextArea = function() { return textarea; };
	      cm.toTextArea = function() {
	        cm.toTextArea = isNaN; // Prevent this from being ran twice
	        save();
	        textarea.parentNode.removeChild(cm.getWrapperElement());
	        textarea.style.display = "";
	        if (textarea.form) {
	          off(textarea.form, "submit", save);
	          if (typeof textarea.form.submit == "function")
	            textarea.form.submit = realSubmit;
	        }
	      };
	    };

	    textarea.style.display = "none";
	    var cm = CodeMirror(function(node) {
	      textarea.parentNode.insertBefore(node, textarea.nextSibling);
	    }, options);
	    return cm;
	  };

	  // STRING STREAM

	  // Fed to the mode parsers, provides helper functions to make
	  // parsers more succinct.

	  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	    this.pos = this.start = 0;
	    this.string = string;
	    this.tabSize = tabSize || 8;
	    this.lastColumnPos = this.lastColumnValue = 0;
	    this.lineStart = 0;
	  };

	  StringStream.prototype = {
	    eol: function() {return this.pos >= this.string.length;},
	    sol: function() {return this.pos == this.lineStart;},
	    peek: function() {return this.string.charAt(this.pos) || undefined;},
	    next: function() {
	      if (this.pos < this.string.length)
	        return this.string.charAt(this.pos++);
	    },
	    eat: function(match) {
	      var ch = this.string.charAt(this.pos);
	      if (typeof match == "string") var ok = ch == match;
	      else var ok = ch && (match.test ? match.test(ch) : match(ch));
	      if (ok) {++this.pos; return ch;}
	    },
	    eatWhile: function(match) {
	      var start = this.pos;
	      while (this.eat(match)){}
	      return this.pos > start;
	    },
	    eatSpace: function() {
	      var start = this.pos;
	      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	      return this.pos > start;
	    },
	    skipToEnd: function() {this.pos = this.string.length;},
	    skipTo: function(ch) {
	      var found = this.string.indexOf(ch, this.pos);
	      if (found > -1) {this.pos = found; return true;}
	    },
	    backUp: function(n) {this.pos -= n;},
	    column: function() {
	      if (this.lastColumnPos < this.start) {
	        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	        this.lastColumnPos = this.start;
	      }
	      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    indentation: function() {
	      return countColumn(this.string, null, this.tabSize) -
	        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    match: function(pattern, consume, caseInsensitive) {
	      if (typeof pattern == "string") {
	        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
	        var substr = this.string.substr(this.pos, pattern.length);
	        if (cased(substr) == cased(pattern)) {
	          if (consume !== false) this.pos += pattern.length;
	          return true;
	        }
	      } else {
	        var match = this.string.slice(this.pos).match(pattern);
	        if (match && match.index > 0) return null;
	        if (match && consume !== false) this.pos += match[0].length;
	        return match;
	      }
	    },
	    current: function(){return this.string.slice(this.start, this.pos);},
	    hideFirstChars: function(n, inner) {
	      this.lineStart += n;
	      try { return inner(); }
	      finally { this.lineStart -= n; }
	    }
	  };

	  // TEXTMARKERS

	  // Created with markText and setBookmark methods. A TextMarker is a
	  // handle that can be used to clear or find a marked position in the
	  // document. Line objects hold arrays (markedSpans) containing
	  // {from, to, marker} object pointing to such marker objects, and
	  // indicating that such a marker is present on that line. Multiple
	  // lines may point to the same marker when it spans across lines.
	  // The spans will have null for their from/to properties when the
	  // marker continues beyond the start/end of the line. Markers have
	  // links back to the lines they currently touch.

	  var nextMarkerId = 0;

	  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	    this.lines = [];
	    this.type = type;
	    this.doc = doc;
	    this.id = ++nextMarkerId;
	  };
	  eventMixin(TextMarker);

	  // Clear the marker.
	  TextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    var cm = this.doc.cm, withOp = cm && !cm.curOp;
	    if (withOp) startOperation(cm);
	    if (hasHandler(this, "clear")) {
	      var found = this.find();
	      if (found) signalLater(this, "clear", found.from, found.to);
	    }
	    var min = null, max = null;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	      else if (cm) {
	        if (span.to != null) max = lineNo(line);
	        if (span.from != null) min = lineNo(line);
	      }
	      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
	        updateLineHeight(line, textHeight(cm.display));
	    }
	    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	      var visual = visualLine(this.lines[i]), len = lineLength(visual);
	      if (len > cm.display.maxLineLength) {
	        cm.display.maxLine = visual;
	        cm.display.maxLineLength = len;
	        cm.display.maxLineChanged = true;
	      }
	    }

	    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	    this.lines.length = 0;
	    this.explicitlyCleared = true;
	    if (this.atomic && this.doc.cantEdit) {
	      this.doc.cantEdit = false;
	      if (cm) reCheckSelection(cm.doc);
	    }
	    if (cm) signalLater(cm, "markerCleared", cm, this);
	    if (withOp) endOperation(cm);
	    if (this.parent) this.parent.clear();
	  };

	  // Find the position of the marker in the document. Returns a {from,
	  // to} object by default. Side can be passed to get a specific side
	  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	  // Pos objects returned contain a line object, rather than a line
	  // number (used to prevent looking up the same line twice).
	  TextMarker.prototype.find = function(side, lineObj) {
	    if (side == null && this.type == "bookmark") side = 1;
	    var from, to;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (span.from != null) {
	        from = Pos(lineObj ? line : lineNo(line), span.from);
	        if (side == -1) return from;
	      }
	      if (span.to != null) {
	        to = Pos(lineObj ? line : lineNo(line), span.to);
	        if (side == 1) return to;
	      }
	    }
	    return from && {from: from, to: to};
	  };

	  // Signals that the marker's widget changed, and surrounding layout
	  // should be recomputed.
	  TextMarker.prototype.changed = function() {
	    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	    if (!pos || !cm) return;
	    runInOp(cm, function() {
	      var line = pos.line, lineN = lineNo(pos.line);
	      var view = findViewForLine(cm, lineN);
	      if (view) {
	        clearLineMeasurementCacheFor(view);
	        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	      }
	      cm.curOp.updateMaxLine = true;
	      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	        var oldHeight = widget.height;
	        widget.height = null;
	        var dHeight = widgetHeight(widget) - oldHeight;
	        if (dHeight)
	          updateLineHeight(line, line.height + dHeight);
	      }
	    });
	  };

	  TextMarker.prototype.attachLine = function(line) {
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	    }
	    this.lines.push(line);
	  };
	  TextMarker.prototype.detachLine = function(line) {
	    this.lines.splice(indexOf(this.lines, line), 1);
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	    }
	  };

	  // Collapsed markers have unique ids, in order to be able to order
	  // them, which is needed for uniquely determining an outer marker
	  // when they overlap (they may nest, but not partially overlap).
	  var nextMarkerId = 0;

	  // Create a marker, wire it up to the right lines, and
	  function markText(doc, from, to, options, type) {
	    // Shared markers (across linked documents) are handled separately
	    // (markTextShared will call out to this again, once per
	    // document).
	    if (options && options.shared) return markTextShared(doc, from, to, options, type);
	    // Ensure we are in an operation.
	    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

	    var marker = new TextMarker(doc, type), diff = cmp(from, to);
	    if (options) copyObj(options, marker, false);
	    // Don't connect empty markers unless clearWhenEmpty is false
	    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	      return marker;
	    if (marker.replacedWith) {
	      // Showing up as a widget implies collapsed (widget replaces text)
	      marker.collapsed = true;
	      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	      if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	      if (options.insertLeft) marker.widgetNode.insertLeft = true;
	    }
	    if (marker.collapsed) {
	      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	        throw new Error("Inserting collapsed marker partially overlapping an existing one");
	      sawCollapsedSpans = true;
	    }

	    if (marker.addToHistory)
	      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

	    var curLine = from.line, cm = doc.cm, updateMaxLine;
	    doc.iter(curLine, to.line + 1, function(line) {
	      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	        updateMaxLine = true;
	      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	      addMarkedSpan(line, new MarkedSpan(marker,
	                                         curLine == from.line ? from.ch : null,
	                                         curLine == to.line ? to.ch : null));
	      ++curLine;
	    });
	    // lineIsHidden depends on the presence of the spans, so needs a second pass
	    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	    });

	    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

	    if (marker.readOnly) {
	      sawReadOnlySpans = true;
	      if (doc.history.done.length || doc.history.undone.length)
	        doc.clearHistory();
	    }
	    if (marker.collapsed) {
	      marker.id = ++nextMarkerId;
	      marker.atomic = true;
	    }
	    if (cm) {
	      // Sync editor state
	      if (updateMaxLine) cm.curOp.updateMaxLine = true;
	      if (marker.collapsed)
	        regChange(cm, from.line, to.line + 1);
	      else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	      if (marker.atomic) reCheckSelection(cm.doc);
	      signalLater(cm, "markerAdded", cm, marker);
	    }
	    return marker;
	  }

	  // SHARED TEXTMARKERS

	  // A shared marker spans multiple linked documents. It is
	  // implemented as a meta-marker-object controlling multiple normal
	  // markers.
	  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	    this.markers = markers;
	    this.primary = primary;
	    for (var i = 0; i < markers.length; ++i)
	      markers[i].parent = this;
	  };
	  eventMixin(SharedTextMarker);

	  SharedTextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    this.explicitlyCleared = true;
	    for (var i = 0; i < this.markers.length; ++i)
	      this.markers[i].clear();
	    signalLater(this, "clear");
	  };
	  SharedTextMarker.prototype.find = function(side, lineObj) {
	    return this.primary.find(side, lineObj);
	  };

	  function markTextShared(doc, from, to, options, type) {
	    options = copyObj(options);
	    options.shared = false;
	    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	    var widget = options.widgetNode;
	    linkedDocs(doc, function(doc) {
	      if (widget) options.widgetNode = widget.cloneNode(true);
	      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	      for (var i = 0; i < doc.linked.length; ++i)
	        if (doc.linked[i].isParent) return;
	      primary = lst(markers);
	    });
	    return new SharedTextMarker(markers, primary);
	  }

	  function findSharedMarkers(doc) {
	    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
	                         function(m) { return m.parent; });
	  }

	  function copySharedMarkers(doc, markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], pos = marker.find();
	      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	      if (cmp(mFrom, mTo)) {
	        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	        marker.markers.push(subMark);
	        subMark.parent = marker;
	      }
	    }
	  }

	  function detachSharedMarkers(markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], linked = [marker.primary.doc];;
	      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	      for (var j = 0; j < marker.markers.length; j++) {
	        var subMarker = marker.markers[j];
	        if (indexOf(linked, subMarker.doc) == -1) {
	          subMarker.parent = null;
	          marker.markers.splice(j--, 1);
	        }
	      }
	    }
	  }

	  // TEXTMARKER SPANS

	  function MarkedSpan(marker, from, to) {
	    this.marker = marker;
	    this.from = from; this.to = to;
	  }

	  // Search an array of spans for a span matching the given marker.
	  function getMarkedSpanFor(spans, marker) {
	    if (spans) for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.marker == marker) return span;
	    }
	  }
	  // Remove a span from an array, returning undefined if no spans are
	  // left (we don't store arrays for lines without spans).
	  function removeMarkedSpan(spans, span) {
	    for (var r, i = 0; i < spans.length; ++i)
	      if (spans[i] != span) (r || (r = [])).push(spans[i]);
	    return r;
	  }
	  // Add a span to a line.
	  function addMarkedSpan(line, span) {
	    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	    span.marker.attachLine(line);
	  }

	  // Used for the algorithm that adjusts markers for a change in the
	  // document. These functions cut an array of spans at a given
	  // character position, returning an array of remaining chunks (or
	  // undefined if nothing remains).
	  function markedSpansBefore(old, startCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	      }
	    }
	    return nw;
	  }
	  function markedSpansAfter(old, endCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                              span.to == null ? null : span.to - endCh));
	      }
	    }
	    return nw;
	  }

	  // Given a change object, compute the new set of marker spans that
	  // cover the line in which the change took place. Removes spans
	  // entirely within the change, reconnects spans belonging to the
	  // same marker that appear on both sides of the change, and cuts off
	  // spans partially within the change. Returns an array of span
	  // arrays with one element for each line in (after) the change.
	  function stretchSpansOverChange(doc, change) {
	    if (change.full) return null;
	    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	    if (!oldFirst && !oldLast) return null;

	    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	    // Get the spans that 'stick out' on both sides
	    var first = markedSpansBefore(oldFirst, startCh, isInsert);
	    var last = markedSpansAfter(oldLast, endCh, isInsert);

	    // Next, merge those two ends
	    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	    if (first) {
	      // Fix up .to properties of first
	      for (var i = 0; i < first.length; ++i) {
	        var span = first[i];
	        if (span.to == null) {
	          var found = getMarkedSpanFor(last, span.marker);
	          if (!found) span.to = startCh;
	          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
	        }
	      }
	    }
	    if (last) {
	      // Fix up .from in last (or move them into first in case of sameLine)
	      for (var i = 0; i < last.length; ++i) {
	        var span = last[i];
	        if (span.to != null) span.to += offset;
	        if (span.from == null) {
	          var found = getMarkedSpanFor(first, span.marker);
	          if (!found) {
	            span.from = offset;
	            if (sameLine) (first || (first = [])).push(span);
	          }
	        } else {
	          span.from += offset;
	          if (sameLine) (first || (first = [])).push(span);
	        }
	      }
	    }
	    // Make sure we didn't create any zero-length spans
	    if (first) first = clearEmptySpans(first);
	    if (last && last != first) last = clearEmptySpans(last);

	    var newMarkers = [first];
	    if (!sameLine) {
	      // Fill gap with whole-line-spans
	      var gap = change.text.length - 2, gapMarkers;
	      if (gap > 0 && first)
	        for (var i = 0; i < first.length; ++i)
	          if (first[i].to == null)
	            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	      for (var i = 0; i < gap; ++i)
	        newMarkers.push(gapMarkers);
	      newMarkers.push(last);
	    }
	    return newMarkers;
	  }

	  // Remove spans that are empty and don't have a clearWhenEmpty
	  // option of false.
	  function clearEmptySpans(spans) {
	    for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	        spans.splice(i--, 1);
	    }
	    if (!spans.length) return null;
	    return spans;
	  }

	  // Used for un/re-doing changes from the history. Combines the
	  // result of computing the existing spans with the set of spans that
	  // existed in the history (so that deleting around a span and then
	  // undoing brings back the span).
	  function mergeOldSpans(doc, change) {
	    var old = getOldSpans(doc, change);
	    var stretched = stretchSpansOverChange(doc, change);
	    if (!old) return stretched;
	    if (!stretched) return old;

	    for (var i = 0; i < old.length; ++i) {
	      var oldCur = old[i], stretchCur = stretched[i];
	      if (oldCur && stretchCur) {
	        spans: for (var j = 0; j < stretchCur.length; ++j) {
	          var span = stretchCur[j];
	          for (var k = 0; k < oldCur.length; ++k)
	            if (oldCur[k].marker == span.marker) continue spans;
	          oldCur.push(span);
	        }
	      } else if (stretchCur) {
	        old[i] = stretchCur;
	      }
	    }
	    return old;
	  }

	  // Used to 'clip' out readOnly ranges when making a change.
	  function removeReadOnlyRanges(doc, from, to) {
	    var markers = null;
	    doc.iter(from.line, to.line + 1, function(line) {
	      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	        var mark = line.markedSpans[i].marker;
	        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	          (markers || (markers = [])).push(mark);
	      }
	    });
	    if (!markers) return null;
	    var parts = [{from: from, to: to}];
	    for (var i = 0; i < markers.length; ++i) {
	      var mk = markers[i], m = mk.find(0);
	      for (var j = 0; j < parts.length; ++j) {
	        var p = parts[j];
	        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
	        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	          newParts.push({from: p.from, to: m.from});
	        if (dto > 0 || !mk.inclusiveRight && !dto)
	          newParts.push({from: m.to, to: p.to});
	        parts.splice.apply(parts, newParts);
	        j += newParts.length - 1;
	      }
	    }
	    return parts;
	  }

	  // Connect or disconnect spans from a line.
	  function detachMarkedSpans(line) {
	    var spans = line.markedSpans;
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.detachLine(line);
	    line.markedSpans = null;
	  }
	  function attachMarkedSpans(line, spans) {
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.attachLine(line);
	    line.markedSpans = spans;
	  }

	  // Helpers used when computing which overlapping collapsed span
	  // counts as the larger one.
	  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
	  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

	  // Returns a number indicating which of two overlapping collapsed
	  // spans is larger (and thus includes the other). Falls back to
	  // comparing ids when the spans cover exactly the same range.
	  function compareCollapsedMarkers(a, b) {
	    var lenDiff = a.lines.length - b.lines.length;
	    if (lenDiff != 0) return lenDiff;
	    var aPos = a.find(), bPos = b.find();
	    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	    if (fromCmp) return -fromCmp;
	    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	    if (toCmp) return toCmp;
	    return b.id - a.id;
	  }

	  // Find out whether a line ends or starts in a collapsed span. If
	  // so, return the marker for that span.
	  function collapsedSpanAtSide(line, start) {
	    var sps = sawCollapsedSpans && line.markedSpans, found;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	        found = sp.marker;
	    }
	    return found;
	  }
	  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
	  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

	  // Test whether there exists a collapsed span that partially
	  // overlaps (covers the start or end, but not both) of a new span.
	  // Such overlap is not allowed.
	  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	    var line = getLine(doc, lineNo);
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var i = 0; i < sps.length; ++i) {
	      var sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      var found = sp.marker.find(0);
	      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
	          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
	        return true;
	    }
	  }

	  // A visual line is a line as drawn on the screen. Folding, for
	  // example, can cause multiple logical lines to appear on the same
	  // visual line. This finds the start of the visual line that the
	  // given line is part of (usually that is the line itself).
	  function visualLine(line) {
	    var merged;
	    while (merged = collapsedSpanAtStart(line))
	      line = merged.find(-1, true).line;
	    return line;
	  }

	  // Returns an array of logical lines that continue the visual line
	  // started by the argument, or undefined if there are no such lines.
	  function visualLineContinued(line) {
	    var merged, lines;
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      (lines || (lines = [])).push(line);
	    }
	    return lines;
	  }

	  // Get the line number of the start of the visual line that the
	  // given line number is part of.
	  function visualLineNo(doc, lineN) {
	    var line = getLine(doc, lineN), vis = visualLine(line);
	    if (line == vis) return lineN;
	    return lineNo(vis);
	  }
	  // Get the line number of the start of the next visual line after
	  // the given line.
	  function visualLineEndNo(doc, lineN) {
	    if (lineN > doc.lastLine()) return lineN;
	    var line = getLine(doc, lineN), merged;
	    if (!lineIsHidden(doc, line)) return lineN;
	    while (merged = collapsedSpanAtEnd(line))
	      line = merged.find(1, true).line;
	    return lineNo(line) + 1;
	  }

	  // Compute whether a line is hidden. Lines count as hidden when they
	  // are part of a visual line that starts with another line, or when
	  // they are entirely covered by collapsed, non-widget span.
	  function lineIsHidden(doc, line) {
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      if (sp.from == null) return true;
	      if (sp.marker.widgetNode) continue;
	      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	        return true;
	    }
	  }
	  function lineIsHiddenInner(doc, line, span) {
	    if (span.to == null) {
	      var end = span.marker.find(1, true);
	      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	    }
	    if (span.marker.inclusiveRight && span.to == line.text.length)
	      return true;
	    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	      sp = line.markedSpans[i];
	      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	          (sp.to == null || sp.to != span.from) &&
	          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	          lineIsHiddenInner(doc, line, sp)) return true;
	    }
	  }

	  // LINE WIDGETS

	  // Line widgets are block elements displayed above or below a line.

	  var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
	    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	      this[opt] = options[opt];
	    this.doc = doc;
	    this.node = node;
	  };
	  eventMixin(LineWidget);

	  function adjustScrollWhenAboveVisible(cm, line, diff) {
	    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	      addToScrollPos(cm, null, diff);
	  }

	  LineWidget.prototype.clear = function() {
	    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	    if (no == null || !ws) return;
	    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	    if (!ws.length) line.widgets = null;
	    var height = widgetHeight(this);
	    updateLineHeight(line, Math.max(0, line.height - height));
	    if (cm) runInOp(cm, function() {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	    });
	  };
	  LineWidget.prototype.changed = function() {
	    var oldH = this.height, cm = this.doc.cm, line = this.line;
	    this.height = null;
	    var diff = widgetHeight(this) - oldH;
	    if (!diff) return;
	    updateLineHeight(line, line.height + diff);
	    if (cm) runInOp(cm, function() {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	    });
	  };

	  function widgetHeight(widget) {
	    if (widget.height != null) return widget.height;
	    var cm = widget.doc.cm;
	    if (!cm) return 0;
	    if (!contains(document.body, widget.node)) {
	      var parentStyle = "position: relative;";
	      if (widget.coverGutter)
	        parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
	      if (widget.noHScroll)
	        parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
	      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	    }
	    return widget.height = widget.node.parentNode.offsetHeight;
	  }

	  function addLineWidget(doc, handle, node, options) {
	    var widget = new LineWidget(doc, node, options);
	    var cm = doc.cm;
	    if (cm && widget.noHScroll) cm.display.alignWidgets = true;
	    changeLine(doc, handle, "widget", function(line) {
	      var widgets = line.widgets || (line.widgets = []);
	      if (widget.insertAt == null) widgets.push(widget);
	      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	      widget.line = line;
	      if (cm && !lineIsHidden(doc, line)) {
	        var aboveVisible = heightAtLine(line) < doc.scrollTop;
	        updateLineHeight(line, line.height + widgetHeight(widget));
	        if (aboveVisible) addToScrollPos(cm, null, widget.height);
	        cm.curOp.forceUpdate = true;
	      }
	      return true;
	    });
	    return widget;
	  }

	  // LINE DATA STRUCTURE

	  // Line objects. These hold state related to a line, including
	  // highlighting info (the styles array).
	  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	    this.text = text;
	    attachMarkedSpans(this, markedSpans);
	    this.height = estimateHeight ? estimateHeight(this) : 1;
	  };
	  eventMixin(Line);
	  Line.prototype.lineNo = function() { return lineNo(this); };

	  // Change the content (text, markers) of a line. Automatically
	  // invalidates cached information and tries to re-estimate the
	  // line's height.
	  function updateLine(line, text, markedSpans, estimateHeight) {
	    line.text = text;
	    if (line.stateAfter) line.stateAfter = null;
	    if (line.styles) line.styles = null;
	    if (line.order != null) line.order = null;
	    detachMarkedSpans(line);
	    attachMarkedSpans(line, markedSpans);
	    var estHeight = estimateHeight ? estimateHeight(line) : 1;
	    if (estHeight != line.height) updateLineHeight(line, estHeight);
	  }

	  // Detach a line from the document tree and its markers.
	  function cleanUpLine(line) {
	    line.parent = null;
	    detachMarkedSpans(line);
	  }

	  function extractLineClasses(type, output) {
	    if (type) for (;;) {
	      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	      if (!lineClass) break;
	      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	      var prop = lineClass[1] ? "bgClass" : "textClass";
	      if (output[prop] == null)
	        output[prop] = lineClass[2];
	      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	        output[prop] += " " + lineClass[2];
	    }
	    return type;
	  }

	  function callBlankLine(mode, state) {
	    if (mode.blankLine) return mode.blankLine(state);
	    if (!mode.innerMode) return;
	    var inner = CodeMirror.innerMode(mode, state);
	    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
	  }

	  function readToken(mode, stream, state, inner) {
	    for (var i = 0; i < 10; i++) {
	      if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	      var style = mode.token(stream, state);
	      if (stream.pos > stream.start) return style;
	    }
	    throw new Error("Mode " + mode.name + " failed to advance stream.");
	  }

	  // Utility for getTokenAt and getLineTokens
	  function takeToken(cm, pos, precise, asArray) {
	    function getObj(copy) {
	      return {start: stream.start, end: stream.pos,
	              string: stream.current(),
	              type: style || null,
	              state: copy ? copyState(doc.mode, state) : state};
	    }

	    var doc = cm.doc, mode = doc.mode, style;
	    pos = clipPos(doc, pos);
	    var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	    var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	    if (asArray) tokens = [];
	    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	      stream.start = stream.pos;
	      style = readToken(mode, stream, state);
	      if (asArray) tokens.push(getObj(true));
	    }
	    return asArray ? tokens : getObj();
	  }

	  // Run the given mode's parser over a line, calling f for each token.
	  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	    var flattenSpans = mode.flattenSpans;
	    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	    var curStart = 0, curStyle = null;
	    var stream = new StringStream(text, cm.options.tabSize), style;
	    var inner = cm.options.addModeClass && [null];
	    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	    while (!stream.eol()) {
	      if (stream.pos > cm.options.maxHighlightLength) {
	        flattenSpans = false;
	        if (forceToEnd) processLine(cm, text, state, stream.pos);
	        stream.pos = text.length;
	        style = null;
	      } else {
	        style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	      }
	      if (inner) {
	        var mName = inner[0].name;
	        if (mName) style = "m-" + (style ? mName + " " + style : mName);
	      }
	      if (!flattenSpans || curStyle != style) {
	        while (curStart < stream.start) {
	          curStart = Math.min(stream.start, curStart + 5000);
	          f(curStart, curStyle);
	        }
	        curStyle = style;
	      }
	      stream.start = stream.pos;
	    }
	    while (curStart < stream.pos) {
	      // Webkit seems to refuse to render text nodes longer than 57444
	      // characters, and returns inaccurate measurements in nodes
	      // starting around 5000 chars.
	      var pos = Math.min(stream.pos, curStart + 5000);
	      f(pos, curStyle);
	      curStart = pos;
	    }
	  }

	  // Compute a style array (an array starting with a mode generation
	  // -- for invalidation -- followed by pairs of end positions and
	  // style strings), which is used to highlight the tokens on the
	  // line.
	  function highlightLine(cm, line, state, forceToEnd) {
	    // A styles array always starts with a number identifying the
	    // mode/overlays that it is based on (for easy invalidation).
	    var st = [cm.state.modeGen], lineClasses = {};
	    // Compute the base array of styles
	    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	      st.push(end, style);
	    }, lineClasses, forceToEnd);

	    // Run overlays, adjust style array.
	    for (var o = 0; o < cm.state.overlays.length; ++o) {
	      var overlay = cm.state.overlays[o], i = 1, at = 0;
	      runMode(cm, line.text, overlay.mode, true, function(end, style) {
	        var start = i;
	        // Ensure there's a token end at the current position, and that i points at it
	        while (at < end) {
	          var i_end = st[i];
	          if (i_end > end)
	            st.splice(i, 1, end, st[i+1], i_end);
	          i += 2;
	          at = Math.min(end, i_end);
	        }
	        if (!style) return;
	        if (overlay.opaque) {
	          st.splice(start, i - start, end, "cm-overlay " + style);
	          i = start + 2;
	        } else {
	          for (; start < i; start += 2) {
	            var cur = st[start+1];
	            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
	          }
	        }
	      }, lineClasses);
	    }

	    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
	  }

	  function getLineStyles(cm, line, updateFrontier) {
	    if (!line.styles || line.styles[0] != cm.state.modeGen) {
	      var state = getStateBefore(cm, lineNo(line));
	      var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
	      line.stateAfter = state;
	      line.styles = result.styles;
	      if (result.classes) line.styleClasses = result.classes;
	      else if (line.styleClasses) line.styleClasses = null;
	      if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	    }
	    return line.styles;
	  }

	  // Lightweight form of highlight -- proceed over this line and
	  // update state, but don't save a style array. Used for lines that
	  // aren't currently visible.
	  function processLine(cm, text, state, startAt) {
	    var mode = cm.doc.mode;
	    var stream = new StringStream(text, cm.options.tabSize);
	    stream.start = stream.pos = startAt || 0;
	    if (text == "") callBlankLine(mode, state);
	    while (!stream.eol()) {
	      readToken(mode, stream, state);
	      stream.start = stream.pos;
	    }
	  }

	  // Convert a style as returned by a mode (either null, or a string
	  // containing one or more styles) to a CSS style. This is cached,
	  // and also looks for line-wide styles.
	  var styleToClassCache = {}, styleToClassCacheWithMode = {};
	  function interpretTokenStyle(style, options) {
	    if (!style || /^\s*$/.test(style)) return null;
	    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	    return cache[style] ||
	      (cache[style] = style.replace(/\S+/g, "cm-$&"));
	  }

	  // Render the DOM representation of the text of a line. Also builds
	  // up a 'line map', which points at the DOM nodes that represent
	  // specific stretches of text, and is used by the measuring code.
	  // The returned object contains the DOM node, this map, and
	  // information about line-wide styles that were set by the mode.
	  function buildLineContent(cm, lineView) {
	    // The padding-right forces the element to have a 'border', which
	    // is needed on Webkit to be able to get line-level bounding
	    // rectangles for it (in measureChar).
	    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	    var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                   col: 0, pos: 0, cm: cm,
	                   trailingSpace: false,
	                   splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	    lineView.measure = {};

	    // Iterate over the logical lines that make up this visual line.
	    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	      var line = i ? lineView.rest[i - 1] : lineView.line, order;
	      builder.pos = 0;
	      builder.addToken = buildToken;
	      // Optionally wire in some hacks into the token-rendering
	      // algorithm, to deal with browser quirks.
	      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	        builder.addToken = buildTokenBadBidi(builder.addToken, order);
	      builder.map = [];
	      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	      if (line.styleClasses) {
	        if (line.styleClasses.bgClass)
	          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
	        if (line.styleClasses.textClass)
	          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	      }

	      // Ensure at least a single node is present, for measuring.
	      if (builder.map.length == 0)
	        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

	      // Store the map and a cache object for the current logical line
	      if (i == 0) {
	        lineView.measure.map = builder.map;
	        lineView.measure.cache = {};
	      } else {
	        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
	        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
	      }
	    }

	    // See issue #2901
	    if (webkit) {
	      var last = builder.content.lastChild
	      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
	        builder.content.className = "cm-tab-wrap-hack";
	    }

	    signal(cm, "renderLine", cm, lineView.line, builder.pre);
	    if (builder.pre.className)
	      builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

	    return builder;
	  }

	  function defaultSpecialCharPlaceholder(ch) {
	    var token = elt("span", "\u2022", "cm-invalidchar");
	    token.title = "\\u" + ch.charCodeAt(0).toString(16);
	    token.setAttribute("aria-label", token.title);
	    return token;
	  }

	  // Build up the DOM representation for a single token, and add it to
	  // the line map. Takes care to render special characters separately.
	  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	    if (!text) return;
	    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
	    var special = builder.cm.state.specialChars, mustWrap = false;
	    if (!special.test(text)) {
	      builder.col += text.length;
	      var content = document.createTextNode(displayText);
	      builder.map.push(builder.pos, builder.pos + text.length, content);
	      if (ie && ie_version < 9) mustWrap = true;
	      builder.pos += text.length;
	    } else {
	      var content = document.createDocumentFragment(), pos = 0;
	      while (true) {
	        special.lastIndex = pos;
	        var m = special.exec(text);
	        var skipped = m ? m.index - pos : text.length - pos;
	        if (skipped) {
	          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.map.push(builder.pos, builder.pos + skipped, txt);
	          builder.col += skipped;
	          builder.pos += skipped;
	        }
	        if (!m) break;
	        pos += skipped + 1;
	        if (m[0] == "\t") {
	          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	          txt.setAttribute("role", "presentation");
	          txt.setAttribute("cm-text", "\t");
	          builder.col += tabWidth;
	        } else if (m[0] == "\r" || m[0] == "\n") {
	          var txt = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
	          txt.setAttribute("cm-text", m[0]);
	          builder.col += 1;
	        } else {
	          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
	          txt.setAttribute("cm-text", m[0]);
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.col += 1;
	        }
	        builder.map.push(builder.pos, builder.pos + 1, txt);
	        builder.pos++;
	      }
	    }
	    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
	    if (style || startStyle || endStyle || mustWrap || css) {
	      var fullStyle = style || "";
	      if (startStyle) fullStyle += startStyle;
	      if (endStyle) fullStyle += endStyle;
	      var token = elt("span", [content], fullStyle, css);
	      if (title) token.title = title;
	      return builder.content.appendChild(token);
	    }
	    builder.content.appendChild(content);
	  }

	  function splitSpaces(text, trailingBefore) {
	    if (text.length > 1 && !/  /.test(text)) return text
	    var spaceBefore = trailingBefore, result = ""
	    for (var i = 0; i < text.length; i++) {
	      var ch = text.charAt(i)
	      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
	        ch = "\u00a0"
	      result += ch
	      spaceBefore = ch == " "
	    }
	    return result
	  }

	  // Work around nonsense dimensions being reported for stretches of
	  // right-to-left text.
	  function buildTokenBadBidi(inner, order) {
	    return function(builder, text, style, startStyle, endStyle, title, css) {
	      style = style ? style + " cm-force-border" : "cm-force-border";
	      var start = builder.pos, end = start + text.length;
	      for (;;) {
	        // Find the part that overlaps with the start of this text
	        for (var i = 0; i < order.length; i++) {
	          var part = order[i];
	          if (part.to > start && part.from <= start) break;
	        }
	        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
	        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
	        startStyle = null;
	        text = text.slice(part.to - start);
	        start = part.to;
	      }
	    };
	  }

	  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	    var widget = !ignoreWidget && marker.widgetNode;
	    if (widget) builder.map.push(builder.pos, builder.pos + size, widget);
	    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	      if (!widget)
	        widget = builder.content.appendChild(document.createElement("span"));
	      widget.setAttribute("cm-marker", marker.id);
	    }
	    if (widget) {
	      builder.cm.display.input.setUneditable(widget);
	      builder.content.appendChild(widget);
	    }
	    builder.pos += size;
	    builder.trailingSpace = false
	  }

	  // Outputs a number of spans to make up a line, taking highlighting
	  // and marked text into account.
	  function insertLineContent(line, builder, styles) {
	    var spans = line.markedSpans, allText = line.text, at = 0;
	    if (!spans) {
	      for (var i = 1; i < styles.length; i+=2)
	        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	      return;
	    }

	    var len = allText.length, pos = 0, i = 1, text = "", style, css;
	    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	    for (;;) {
	      if (nextChange == pos) { // Update current marker set
	        spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	        collapsed = null; nextChange = Infinity;
	        var foundBookmarks = [], endStyles
	        for (var j = 0; j < spans.length; ++j) {
	          var sp = spans[j], m = sp.marker;
	          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	            foundBookmarks.push(m);
	          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	              nextChange = sp.to;
	              spanEndStyle = "";
	            }
	            if (m.className) spanStyle += " " + m.className;
	            if (m.css) css = (css ? css + ";" : "") + m.css;
	            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
	            if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
	            if (m.title && !title) title = m.title;
	            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	              collapsed = sp;
	          } else if (sp.from > pos && nextChange > sp.from) {
	            nextChange = sp.from;
	          }
	        }
	        if (endStyles) for (var j = 0; j < endStyles.length; j += 2)
	          if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]

	        if (!collapsed || collapsed.from == pos) for (var j = 0; j < foundBookmarks.length; ++j)
	          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	        if (collapsed && (collapsed.from || 0) == pos) {
	          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                             collapsed.marker, collapsed.from == null);
	          if (collapsed.to == null) return;
	          if (collapsed.to == pos) collapsed = false;
	        }
	      }
	      if (pos >= len) break;

	      var upto = Math.min(len, nextChange);
	      while (true) {
	        if (text) {
	          var end = pos + text.length;
	          if (!collapsed) {
	            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	          }
	          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
	          pos = end;
	          spanStartStyle = "";
	        }
	        text = allText.slice(at, at = styles[i++]);
	        style = interpretTokenStyle(styles[i++], builder.cm.options);
	      }
	    }
	  }

	  // DOCUMENT DATA STRUCTURE

	  // By default, updates that start and end at the beginning of a line
	  // are treated specially, in order to make the association of line
	  // widgets and marker elements with the text behave more intuitive.
	  function isWholeLineUpdate(doc, change) {
	    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
	  }

	  // Perform a change on the document data structure.
	  function updateDoc(doc, change, markedSpans, estimateHeight) {
	    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	    function update(line, text, spans) {
	      updateLine(line, text, spans, estimateHeight);
	      signalLater(line, "change", line, change);
	    }
	    function linesFor(start, end) {
	      for (var i = start, result = []; i < end; ++i)
	        result.push(new Line(text[i], spansFor(i), estimateHeight));
	      return result;
	    }

	    var from = change.from, to = change.to, text = change.text;
	    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

	    // Adjust the line structure
	    if (change.full) {
	      doc.insert(0, linesFor(0, text.length));
	      doc.remove(text.length, doc.size - text.length);
	    } else if (isWholeLineUpdate(doc, change)) {
	      // This is a whole-line replace. Treated specially to make
	      // sure line objects move the way they are supposed to.
	      var added = linesFor(0, text.length - 1);
	      update(lastLine, lastLine.text, lastSpans);
	      if (nlines) doc.remove(from.line, nlines);
	      if (added.length) doc.insert(from.line, added);
	    } else if (firstLine == lastLine) {
	      if (text.length == 1) {
	        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	      } else {
	        var added = linesFor(1, text.length - 1);
	        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
	        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	        doc.insert(from.line + 1, added);
	      }
	    } else if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	      doc.remove(from.line + 1, nlines);
	    } else {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	      var added = linesFor(1, text.length - 1);
	      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	      doc.insert(from.line + 1, added);
	    }

	    signalLater(doc, "change", doc, change);
	  }

	  // The document is represented as a BTree consisting of leaves, with
	  // chunk of lines in them, and branches, with up to ten leaves or
	  // other branch nodes below them. The top node is always a branch
	  // node, and is the document object itself (meaning it has
	  // additional methods and properties).
	  //
	  // All nodes have parent links. The tree is used both to go from
	  // line numbers to line objects, and to go from objects to numbers.
	  // It also indexes by height, and is used to convert between height
	  // and line object, and to find the total height of the document.
	  //
	  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	  function LeafChunk(lines) {
	    this.lines = lines;
	    this.parent = null;
	    for (var i = 0, height = 0; i < lines.length; ++i) {
	      lines[i].parent = this;
	      height += lines[i].height;
	    }
	    this.height = height;
	  }

	  LeafChunk.prototype = {
	    chunkSize: function() { return this.lines.length; },
	    // Remove the n lines at offset 'at'.
	    removeInner: function(at, n) {
	      for (var i = at, e = at + n; i < e; ++i) {
	        var line = this.lines[i];
	        this.height -= line.height;
	        cleanUpLine(line);
	        signalLater(line, "delete");
	      }
	      this.lines.splice(at, n);
	    },
	    // Helper used to collapse a small branch into a single leaf.
	    collapse: function(lines) {
	      lines.push.apply(lines, this.lines);
	    },
	    // Insert the given array of lines at offset 'at', count them as
	    // having the given height.
	    insertInner: function(at, lines, height) {
	      this.height += height;
	      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	    },
	    // Used to iterate over a part of the tree.
	    iterN: function(at, n, op) {
	      for (var e = at + n; at < e; ++at)
	        if (op(this.lines[at])) return true;
	    }
	  };

	  function BranchChunk(children) {
	    this.children = children;
	    var size = 0, height = 0;
	    for (var i = 0; i < children.length; ++i) {
	      var ch = children[i];
	      size += ch.chunkSize(); height += ch.height;
	      ch.parent = this;
	    }
	    this.size = size;
	    this.height = height;
	    this.parent = null;
	  }

	  BranchChunk.prototype = {
	    chunkSize: function() { return this.size; },
	    removeInner: function(at, n) {
	      this.size -= n;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var rm = Math.min(n, sz - at), oldHeight = child.height;
	          child.removeInner(at, rm);
	          this.height -= oldHeight - child.height;
	          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
	          if ((n -= rm) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	      // If the result is smaller than 25 lines, ensure that it is a
	      // single leaf node.
	      if (this.size - n < 25 &&
	          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	        var lines = [];
	        this.collapse(lines);
	        this.children = [new LeafChunk(lines)];
	        this.children[0].parent = this;
	      }
	    },
	    collapse: function(lines) {
	      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	    },
	    insertInner: function(at, lines, height) {
	      this.size += lines.length;
	      this.height += height;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at <= sz) {
	          child.insertInner(at, lines, height);
	          if (child.lines && child.lines.length > 50) {
	            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
	            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
	            var remaining = child.lines.length % 25 + 25
	            for (var pos = remaining; pos < child.lines.length;) {
	              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
	              child.height -= leaf.height;
	              this.children.splice(++i, 0, leaf);
	              leaf.parent = this;
	            }
	            child.lines = child.lines.slice(0, remaining);
	            this.maybeSpill();
	          }
	          break;
	        }
	        at -= sz;
	      }
	    },
	    // When a node has grown, check whether it should be split.
	    maybeSpill: function() {
	      if (this.children.length <= 10) return;
	      var me = this;
	      do {
	        var spilled = me.children.splice(me.children.length - 5, 5);
	        var sibling = new BranchChunk(spilled);
	        if (!me.parent) { // Become the parent node
	          var copy = new BranchChunk(me.children);
	          copy.parent = me;
	          me.children = [copy, sibling];
	          me = copy;
	       } else {
	          me.size -= sibling.size;
	          me.height -= sibling.height;
	          var myIndex = indexOf(me.parent.children, me);
	          me.parent.children.splice(myIndex + 1, 0, sibling);
	        }
	        sibling.parent = me.parent;
	      } while (me.children.length > 10);
	      me.parent.maybeSpill();
	    },
	    iterN: function(at, n, op) {
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var used = Math.min(n, sz - at);
	          if (child.iterN(at, used, op)) return true;
	          if ((n -= used) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	    }
	  };

	  var nextDocId = 0;
	  var Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
	    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
	    if (firstLine == null) firstLine = 0;

	    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	    this.first = firstLine;
	    this.scrollTop = this.scrollLeft = 0;
	    this.cantEdit = false;
	    this.cleanGeneration = 1;
	    this.frontier = firstLine;
	    var start = Pos(firstLine, 0);
	    this.sel = simpleSelection(start);
	    this.history = new History(null);
	    this.id = ++nextDocId;
	    this.modeOption = mode;
	    this.lineSep = lineSep;
	    this.extend = false;

	    if (typeof text == "string") text = this.splitLines(text);
	    updateDoc(this, {from: start, to: start, text: text});
	    setSelection(this, simpleSelection(start), sel_dontScroll);
	  };

	  Doc.prototype = createObj(BranchChunk.prototype, {
	    constructor: Doc,
	    // Iterate over the document. Supports two forms -- with only one
	    // argument, it calls that for each line in the document. With
	    // three, it iterates over the range given by the first two (with
	    // the second being non-inclusive).
	    iter: function(from, to, op) {
	      if (op) this.iterN(from - this.first, to - from, op);
	      else this.iterN(this.first, this.first + this.size, from);
	    },

	    // Non-public interface for adding and removing lines.
	    insert: function(at, lines) {
	      var height = 0;
	      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	      this.insertInner(at - this.first, lines, height);
	    },
	    remove: function(at, n) { this.removeInner(at - this.first, n); },

	    // From here, the methods are part of the public interface. Most
	    // are also available from CodeMirror (editor) instances.

	    getValue: function(lineSep) {
	      var lines = getLines(this, this.first, this.first + this.size);
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },
	    setValue: docMethodOp(function(code) {
	      var top = Pos(this.first, 0), last = this.first + this.size - 1;
	      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                        text: this.splitLines(code), origin: "setValue", full: true}, true);
	      setSelection(this, simpleSelection(top));
	    }),
	    replaceRange: function(code, from, to, origin) {
	      from = clipPos(this, from);
	      to = to ? clipPos(this, to) : from;
	      replaceRange(this, code, from, to, origin);
	    },
	    getRange: function(from, to, lineSep) {
	      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },

	    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

	    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	    getLineNumber: function(line) {return lineNo(line);},

	    getLineHandleVisualStart: function(line) {
	      if (typeof line == "number") line = getLine(this, line);
	      return visualLine(line);
	    },

	    lineCount: function() {return this.size;},
	    firstLine: function() {return this.first;},
	    lastLine: function() {return this.first + this.size - 1;},

	    clipPos: function(pos) {return clipPos(this, pos);},

	    getCursor: function(start) {
	      var range = this.sel.primary(), pos;
	      if (start == null || start == "head") pos = range.head;
	      else if (start == "anchor") pos = range.anchor;
	      else if (start == "end" || start == "to" || start === false) pos = range.to();
	      else pos = range.from();
	      return pos;
	    },
	    listSelections: function() { return this.sel.ranges; },
	    somethingSelected: function() {return this.sel.somethingSelected();},

	    setCursor: docMethodOp(function(line, ch, options) {
	      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	    }),
	    setSelection: docMethodOp(function(anchor, head, options) {
	      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	    }),
	    extendSelection: docMethodOp(function(head, other, options) {
	      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	    }),
	    extendSelections: docMethodOp(function(heads, options) {
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    extendSelectionsBy: docMethodOp(function(f, options) {
	      var heads = map(this.sel.ranges, f);
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    setSelections: docMethodOp(function(ranges, primary, options) {
	      if (!ranges.length) return;
	      for (var i = 0, out = []; i < ranges.length; i++)
	        out[i] = new Range(clipPos(this, ranges[i].anchor),
	                           clipPos(this, ranges[i].head));
	      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	      setSelection(this, normalizeSelection(out, primary), options);
	    }),
	    addSelection: docMethodOp(function(anchor, head, options) {
	      var ranges = this.sel.ranges.slice(0);
	      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	    }),

	    getSelection: function(lineSep) {
	      var ranges = this.sel.ranges, lines;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        lines = lines ? lines.concat(sel) : sel;
	      }
	      if (lineSep === false) return lines;
	      else return lines.join(lineSep || this.lineSeparator());
	    },
	    getSelections: function(lineSep) {
	      var parts = [], ranges = this.sel.ranges;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator());
	        parts[i] = sel;
	      }
	      return parts;
	    },
	    replaceSelection: function(code, collapse, origin) {
	      var dup = [];
	      for (var i = 0; i < this.sel.ranges.length; i++)
	        dup[i] = code;
	      this.replaceSelections(dup, collapse, origin || "+input");
	    },
	    replaceSelections: docMethodOp(function(code, collapse, origin) {
	      var changes = [], sel = this.sel;
	      for (var i = 0; i < sel.ranges.length; i++) {
	        var range = sel.ranges[i];
	        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
	      }
	      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	      for (var i = changes.length - 1; i >= 0; i--)
	        makeChange(this, changes[i]);
	      if (newSel) setSelectionReplaceHistory(this, newSel);
	      else if (this.cm) ensureCursorVisible(this.cm);
	    }),
	    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

	    setExtending: function(val) {this.extend = val;},
	    getExtending: function() {return this.extend;},

	    historySize: function() {
	      var hist = this.history, done = 0, undone = 0;
	      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	      return {undo: done, redo: undone};
	    },
	    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

	    markClean: function() {
	      this.cleanGeneration = this.changeGeneration(true);
	    },
	    changeGeneration: function(forceSplit) {
	      if (forceSplit)
	        this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	      return this.history.generation;
	    },
	    isClean: function (gen) {
	      return this.history.generation == (gen || this.cleanGeneration);
	    },

	    getHistory: function() {
	      return {done: copyHistoryArray(this.history.done),
	              undone: copyHistoryArray(this.history.undone)};
	    },
	    setHistory: function(histData) {
	      var hist = this.history = new History(this.history.maxGeneration);
	      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	    },

	    addLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        if (!line[prop]) line[prop] = cls;
	        else if (classTest(cls).test(line[prop])) return false;
	        else line[prop] += " " + cls;
	        return true;
	      });
	    }),
	    removeLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        var cur = line[prop];
	        if (!cur) return false;
	        else if (cls == null) line[prop] = null;
	        else {
	          var found = cur.match(classTest(cls));
	          if (!found) return false;
	          var end = found.index + found[0].length;
	          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	        }
	        return true;
	      });
	    }),

	    addLineWidget: docMethodOp(function(handle, node, options) {
	      return addLineWidget(this, handle, node, options);
	    }),
	    removeLineWidget: function(widget) { widget.clear(); },

	    markText: function(from, to, options) {
	      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
	    },
	    setBookmark: function(pos, options) {
	      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                      insertLeft: options && options.insertLeft,
	                      clearWhenEmpty: false, shared: options && options.shared,
	                      handleMouseEvents: options && options.handleMouseEvents};
	      pos = clipPos(this, pos);
	      return markText(this, pos, pos, realOpts, "bookmark");
	    },
	    findMarksAt: function(pos) {
	      pos = clipPos(this, pos);
	      var markers = [], spans = getLine(this, pos.line).markedSpans;
	      if (spans) for (var i = 0; i < spans.length; ++i) {
	        var span = spans[i];
	        if ((span.from == null || span.from <= pos.ch) &&
	            (span.to == null || span.to >= pos.ch))
	          markers.push(span.marker.parent || span.marker);
	      }
	      return markers;
	    },
	    findMarks: function(from, to, filter) {
	      from = clipPos(this, from); to = clipPos(this, to);
	      var found = [], lineNo = from.line;
	      this.iter(from.line, to.line + 1, function(line) {
	        var spans = line.markedSpans;
	        if (spans) for (var i = 0; i < spans.length; i++) {
	          var span = spans[i];
	          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
	                span.from == null && lineNo != from.line ||
	                span.from != null && lineNo == to.line && span.from >= to.ch) &&
	              (!filter || filter(span.marker)))
	            found.push(span.marker.parent || span.marker);
	        }
	        ++lineNo;
	      });
	      return found;
	    },
	    getAllMarks: function() {
	      var markers = [];
	      this.iter(function(line) {
	        var sps = line.markedSpans;
	        if (sps) for (var i = 0; i < sps.length; ++i)
	          if (sps[i].from != null) markers.push(sps[i].marker);
	      });
	      return markers;
	    },

	    posFromIndex: function(off) {
	      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
	      this.iter(function(line) {
	        var sz = line.text.length + sepSize;
	        if (sz > off) { ch = off; return true; }
	        off -= sz;
	        ++lineNo;
	      });
	      return clipPos(this, Pos(lineNo, ch));
	    },
	    indexFromPos: function (coords) {
	      coords = clipPos(this, coords);
	      var index = coords.ch;
	      if (coords.line < this.first || coords.ch < 0) return 0;
	      var sepSize = this.lineSeparator().length;
	      this.iter(this.first, coords.line, function (line) {
	        index += line.text.length + sepSize;
	      });
	      return index;
	    },

	    copy: function(copyHistory) {
	      var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                        this.modeOption, this.first, this.lineSep);
	      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	      doc.sel = this.sel;
	      doc.extend = false;
	      if (copyHistory) {
	        doc.history.undoDepth = this.history.undoDepth;
	        doc.setHistory(this.getHistory());
	      }
	      return doc;
	    },

	    linkedDoc: function(options) {
	      if (!options) options = {};
	      var from = this.first, to = this.first + this.size;
	      if (options.from != null && options.from > from) from = options.from;
	      if (options.to != null && options.to < to) to = options.to;
	      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
	      if (options.sharedHist) copy.history = this.history;
	      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	      copySharedMarkers(copy, findSharedMarkers(this));
	      return copy;
	    },
	    unlinkDoc: function(other) {
	      if (other instanceof CodeMirror) other = other.doc;
	      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
	        var link = this.linked[i];
	        if (link.doc != other) continue;
	        this.linked.splice(i, 1);
	        other.unlinkDoc(this);
	        detachSharedMarkers(findSharedMarkers(this));
	        break;
	      }
	      // If the histories were shared, split them again
	      if (other.history == this.history) {
	        var splitIds = [other.id];
	        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
	        other.history = new History(null);
	        other.history.done = copyHistoryArray(this.history.done, splitIds);
	        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	      }
	    },
	    iterLinkedDocs: function(f) {linkedDocs(this, f);},

	    getMode: function() {return this.mode;},
	    getEditor: function() {return this.cm;},

	    splitLines: function(str) {
	      if (this.lineSep) return str.split(this.lineSep);
	      return splitLinesAuto(str);
	    },
	    lineSeparator: function() { return this.lineSep || "\n"; }
	  });

	  // Public alias.
	  Doc.prototype.eachLine = Doc.prototype.iter;

	  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
	  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
	  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	    CodeMirror.prototype[prop] = (function(method) {
	      return function() {return method.apply(this.doc, arguments);};
	    })(Doc.prototype[prop]);

	  eventMixin(Doc);

	  // Call f for all linked documents.
	  function linkedDocs(doc, f, sharedHistOnly) {
	    function propagate(doc, skip, sharedHist) {
	      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
	        var rel = doc.linked[i];
	        if (rel.doc == skip) continue;
	        var shared = sharedHist && rel.sharedHist;
	        if (sharedHistOnly && !shared) continue;
	        f(rel.doc, shared);
	        propagate(rel.doc, doc, shared);
	      }
	    }
	    propagate(doc, null, true);
	  }

	  // Attach a document to an editor.
	  function attachDoc(cm, doc) {
	    if (doc.cm) throw new Error("This document is already in use.");
	    cm.doc = doc;
	    doc.cm = cm;
	    estimateLineHeights(cm);
	    loadMode(cm);
	    if (!cm.options.lineWrapping) findMaxLine(cm);
	    cm.options.mode = doc.modeOption;
	    regChange(cm);
	  }

	  // LINE UTILITIES

	  // Find the line object corresponding to the given line number.
	  function getLine(doc, n) {
	    n -= doc.first;
	    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	    for (var chunk = doc; !chunk.lines;) {
	      for (var i = 0;; ++i) {
	        var child = chunk.children[i], sz = child.chunkSize();
	        if (n < sz) { chunk = child; break; }
	        n -= sz;
	      }
	    }
	    return chunk.lines[n];
	  }

	  // Get the part of a document between two positions, as an array of
	  // strings.
	  function getBetween(doc, start, end) {
	    var out = [], n = start.line;
	    doc.iter(start.line, end.line + 1, function(line) {
	      var text = line.text;
	      if (n == end.line) text = text.slice(0, end.ch);
	      if (n == start.line) text = text.slice(start.ch);
	      out.push(text);
	      ++n;
	    });
	    return out;
	  }
	  // Get the lines between from and to, as array of strings.
	  function getLines(doc, from, to) {
	    var out = [];
	    doc.iter(from, to, function(line) { out.push(line.text); });
	    return out;
	  }

	  // Update the height of a line, propagating the height change
	  // upwards to parent nodes.
	  function updateLineHeight(line, height) {
	    var diff = height - line.height;
	    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
	  }

	  // Given a line object, find its line number by walking up through
	  // its parent links.
	  function lineNo(line) {
	    if (line.parent == null) return null;
	    var cur = line.parent, no = indexOf(cur.lines, line);
	    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	      for (var i = 0;; ++i) {
	        if (chunk.children[i] == cur) break;
	        no += chunk.children[i].chunkSize();
	      }
	    }
	    return no + cur.first;
	  }

	  // Find the line at the given vertical position, using the height
	  // information in the document tree.
	  function lineAtHeight(chunk, h) {
	    var n = chunk.first;
	    outer: do {
	      for (var i = 0; i < chunk.children.length; ++i) {
	        var child = chunk.children[i], ch = child.height;
	        if (h < ch) { chunk = child; continue outer; }
	        h -= ch;
	        n += child.chunkSize();
	      }
	      return n;
	    } while (!chunk.lines);
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i], lh = line.height;
	      if (h < lh) break;
	      h -= lh;
	    }
	    return n + i;
	  }


	  // Find the height above the given line.
	  function heightAtLine(lineObj) {
	    lineObj = visualLine(lineObj);

	    var h = 0, chunk = lineObj.parent;
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i];
	      if (line == lineObj) break;
	      else h += line.height;
	    }
	    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	      for (var i = 0; i < p.children.length; ++i) {
	        var cur = p.children[i];
	        if (cur == chunk) break;
	        else h += cur.height;
	      }
	    }
	    return h;
	  }

	  // Get the bidi ordering for the given line (and cache it). Returns
	  // false for lines that are fully left-to-right, and an array of
	  // BidiSpan objects otherwise.
	  function getOrder(line) {
	    var order = line.order;
	    if (order == null) order = line.order = bidiOrdering(line.text);
	    return order;
	  }

	  // HISTORY

	  function History(startGen) {
	    // Arrays of change events and selections. Doing something adds an
	    // event to done and clears undo. Undoing moves events from done
	    // to undone, redoing moves them in the other direction.
	    this.done = []; this.undone = [];
	    this.undoDepth = Infinity;
	    // Used to track when changes can be merged into a single undo
	    // event
	    this.lastModTime = this.lastSelTime = 0;
	    this.lastOp = this.lastSelOp = null;
	    this.lastOrigin = this.lastSelOrigin = null;
	    // Used by the isClean() method
	    this.generation = this.maxGeneration = startGen || 1;
	  }

	  // Create a history change event from an updateDoc-style change
	  // object.
	  function historyChangeFromChange(doc, change) {
	    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	    return histChange;
	  }

	  // Pop all selection events off the end of a history array. Stop at
	  // a change event.
	  function clearSelectionEvents(array) {
	    while (array.length) {
	      var last = lst(array);
	      if (last.ranges) array.pop();
	      else break;
	    }
	  }

	  // Find the top change event in the history. Pop off selection
	  // events that are in the way.
	  function lastChangeEvent(hist, force) {
	    if (force) {
	      clearSelectionEvents(hist.done);
	      return lst(hist.done);
	    } else if (hist.done.length && !lst(hist.done).ranges) {
	      return lst(hist.done);
	    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	      hist.done.pop();
	      return lst(hist.done);
	    }
	  }

	  // Register a change in the history. Merges changes that are within
	  // a single operation, or are close together with an origin that
	  // allows merging (starting with "+") into a single event.
	  function addChangeToHistory(doc, change, selAfter, opId) {
	    var hist = doc.history;
	    hist.undone.length = 0;
	    var time = +new Date, cur;

	    if ((hist.lastOp == opId ||
	         hist.lastOrigin == change.origin && change.origin &&
	         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	          change.origin.charAt(0) == "*")) &&
	        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	      // Merge this change into the last event
	      var last = lst(cur.changes);
	      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	        // Optimized case for simple insertion -- don't want to add
	        // new changesets for every character typed
	        last.to = changeEnd(change);
	      } else {
	        // Add new sub-event
	        cur.changes.push(historyChangeFromChange(doc, change));
	      }
	    } else {
	      // Can not be merged, start a new event.
	      var before = lst(hist.done);
	      if (!before || !before.ranges)
	        pushSelectionToHistory(doc.sel, hist.done);
	      cur = {changes: [historyChangeFromChange(doc, change)],
	             generation: hist.generation};
	      hist.done.push(cur);
	      while (hist.done.length > hist.undoDepth) {
	        hist.done.shift();
	        if (!hist.done[0].ranges) hist.done.shift();
	      }
	    }
	    hist.done.push(selAfter);
	    hist.generation = ++hist.maxGeneration;
	    hist.lastModTime = hist.lastSelTime = time;
	    hist.lastOp = hist.lastSelOp = opId;
	    hist.lastOrigin = hist.lastSelOrigin = change.origin;

	    if (!last) signal(doc, "historyAdded");
	  }

	  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	    var ch = origin.charAt(0);
	    return ch == "*" ||
	      ch == "+" &&
	      prev.ranges.length == sel.ranges.length &&
	      prev.somethingSelected() == sel.somethingSelected() &&
	      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
	  }

	  // Called whenever the selection changes, sets the new selection as
	  // the pending selection in the history, and pushes the old pending
	  // selection into the 'done' array when it was significantly
	  // different (in number of selected ranges, emptiness, or time).
	  function addSelectionToHistory(doc, sel, opId, options) {
	    var hist = doc.history, origin = options && options.origin;

	    // A new event is started when the previous origin does not match
	    // the current, or the origins don't allow matching. Origins
	    // starting with * are always merged, those starting with + are
	    // merged when similar and close together in time.
	    if (opId == hist.lastSelOp ||
	        (origin && hist.lastSelOrigin == origin &&
	         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	      hist.done[hist.done.length - 1] = sel;
	    else
	      pushSelectionToHistory(sel, hist.done);

	    hist.lastSelTime = +new Date;
	    hist.lastSelOrigin = origin;
	    hist.lastSelOp = opId;
	    if (options && options.clearRedo !== false)
	      clearSelectionEvents(hist.undone);
	  }

	  function pushSelectionToHistory(sel, dest) {
	    var top = lst(dest);
	    if (!(top && top.ranges && top.equals(sel)))
	      dest.push(sel);
	  }

	  // Used to store marked span information in the history.
	  function attachLocalSpans(doc, change, from, to) {
	    var existing = change["spans_" + doc.id], n = 0;
	    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	      if (line.markedSpans)
	        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	      ++n;
	    });
	  }

	  // When un/re-doing restores text containing marked spans, those
	  // that have been explicitly cleared should not be restored.
	  function removeClearedSpans(spans) {
	    if (!spans) return null;
	    for (var i = 0, out; i < spans.length; ++i) {
	      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	      else if (out) out.push(spans[i]);
	    }
	    return !out ? spans : out.length ? out : null;
	  }

	  // Retrieve and filter the old marked spans stored in a change event.
	  function getOldSpans(doc, change) {
	    var found = change["spans_" + doc.id];
	    if (!found) return null;
	    for (var i = 0, nw = []; i < change.text.length; ++i)
	      nw.push(removeClearedSpans(found[i]));
	    return nw;
	  }

	  // Used both to provide a JSON-safe object in .getHistory, and, when
	  // detaching a document, to split the history in two
	  function copyHistoryArray(events, newGroup, instantiateSel) {
	    for (var i = 0, copy = []; i < events.length; ++i) {
	      var event = events[i];
	      if (event.ranges) {
	        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	        continue;
	      }
	      var changes = event.changes, newChanges = [];
	      copy.push({changes: newChanges});
	      for (var j = 0; j < changes.length; ++j) {
	        var change = changes[j], m;
	        newChanges.push({from: change.from, to: change.to, text: change.text});
	        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
	          if (indexOf(newGroup, Number(m[1])) > -1) {
	            lst(newChanges)[prop] = change[prop];
	            delete change[prop];
	          }
	        }
	      }
	    }
	    return copy;
	  }

	  // Rebasing/resetting history to deal with externally-sourced changes

	  function rebaseHistSelSingle(pos, from, to, diff) {
	    if (to < pos.line) {
	      pos.line += diff;
	    } else if (from < pos.line) {
	      pos.line = from;
	      pos.ch = 0;
	    }
	  }

	  // Tries to rebase an array of history events given a change in the
	  // document. If the change touches the same lines as the event, the
	  // event, and everything 'behind' it, is discarded. If the change is
	  // before the event, the event's positions are updated. Uses a
	  // copy-on-write scheme for the positions, to avoid having to
	  // reallocate them all on every rebase, but also avoid problems with
	  // shared position objects being unsafely updated.
	  function rebaseHistArray(array, from, to, diff) {
	    for (var i = 0; i < array.length; ++i) {
	      var sub = array[i], ok = true;
	      if (sub.ranges) {
	        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	        for (var j = 0; j < sub.ranges.length; j++) {
	          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	        }
	        continue;
	      }
	      for (var j = 0; j < sub.changes.length; ++j) {
	        var cur = sub.changes[j];
	        if (to < cur.from.line) {
	          cur.from = Pos(cur.from.line + diff, cur.from.ch);
	          cur.to = Pos(cur.to.line + diff, cur.to.ch);
	        } else if (from <= cur.to.line) {
	          ok = false;
	          break;
	        }
	      }
	      if (!ok) {
	        array.splice(0, i + 1);
	        i = 0;
	      }
	    }
	  }

	  function rebaseHist(hist, change) {
	    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	    rebaseHistArray(hist.done, from, to, diff);
	    rebaseHistArray(hist.undone, from, to, diff);
	  }

	  // EVENT UTILITIES

	  // Due to the fact that we still support jurassic IE versions, some
	  // compatibility wrappers are needed.

	  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	  };
	  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	    if (e.stopPropagation) e.stopPropagation();
	    else e.cancelBubble = true;
	  };
	  function e_defaultPrevented(e) {
	    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	  }
	  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

	  function e_target(e) {return e.target || e.srcElement;}
	  function e_button(e) {
	    var b = e.which;
	    if (b == null) {
	      if (e.button & 1) b = 1;
	      else if (e.button & 2) b = 3;
	      else if (e.button & 4) b = 2;
	    }
	    if (mac && e.ctrlKey && b == 1) b = 3;
	    return b;
	  }

	  // EVENT HANDLING

	  // Lightweight event framework. on/off also work on DOM nodes,
	  // registering native DOM handlers.

	  var on = CodeMirror.on = function(emitter, type, f) {
	    if (emitter.addEventListener)
	      emitter.addEventListener(type, f, false);
	    else if (emitter.attachEvent)
	      emitter.attachEvent("on" + type, f);
	    else {
	      var map = emitter._handlers || (emitter._handlers = {});
	      var arr = map[type] || (map[type] = []);
	      arr.push(f);
	    }
	  };

	  var noHandlers = []
	  function getHandlers(emitter, type, copy) {
	    var arr = emitter._handlers && emitter._handlers[type]
	    if (copy) return arr && arr.length > 0 ? arr.slice() : noHandlers
	    else return arr || noHandlers
	  }

	  var off = CodeMirror.off = function(emitter, type, f) {
	    if (emitter.removeEventListener)
	      emitter.removeEventListener(type, f, false);
	    else if (emitter.detachEvent)
	      emitter.detachEvent("on" + type, f);
	    else {
	      var handlers = getHandlers(emitter, type, false)
	      for (var i = 0; i < handlers.length; ++i)
	        if (handlers[i] == f) { handlers.splice(i, 1); break; }
	    }
	  };

	  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	    var handlers = getHandlers(emitter, type, true)
	    if (!handlers.length) return;
	    var args = Array.prototype.slice.call(arguments, 2);
	    for (var i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
	  };

	  var orphanDelayedCallbacks = null;

	  // Often, we want to signal events at a point where we are in the
	  // middle of some work, but don't want the handler to start calling
	  // other methods on the editor, which might be in an inconsistent
	  // state or simply not expect any other events to happen.
	  // signalLater looks whether there are any handlers, and schedules
	  // them to be executed when the last operation ends, or, if no
	  // operation is active, when a timeout fires.
	  function signalLater(emitter, type /*, values...*/) {
	    var arr = getHandlers(emitter, type, false)
	    if (!arr.length) return;
	    var args = Array.prototype.slice.call(arguments, 2), list;
	    if (operationGroup) {
	      list = operationGroup.delayedCallbacks;
	    } else if (orphanDelayedCallbacks) {
	      list = orphanDelayedCallbacks;
	    } else {
	      list = orphanDelayedCallbacks = [];
	      setTimeout(fireOrphanDelayed, 0);
	    }
	    function bnd(f) {return function(){f.apply(null, args);};};
	    for (var i = 0; i < arr.length; ++i)
	      list.push(bnd(arr[i]));
	  }

	  function fireOrphanDelayed() {
	    var delayed = orphanDelayedCallbacks;
	    orphanDelayedCallbacks = null;
	    for (var i = 0; i < delayed.length; ++i) delayed[i]();
	  }

	  // The DOM events that CodeMirror handles can be overridden by
	  // registering a (non-DOM) handler on the editor for the event name,
	  // and preventDefault-ing the event in that handler.
	  function signalDOMEvent(cm, e, override) {
	    if (typeof e == "string")
	      e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	    signal(cm, override || e.type, cm, e);
	    return e_defaultPrevented(e) || e.codemirrorIgnore;
	  }

	  function signalCursorActivity(cm) {
	    var arr = cm._handlers && cm._handlers.cursorActivity;
	    if (!arr) return;
	    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	      set.push(arr[i]);
	  }

	  function hasHandler(emitter, type) {
	    return getHandlers(emitter, type).length > 0
	  }

	  // Add on and off methods to a constructor's prototype, to make
	  // registering events on such objects more convenient.
	  function eventMixin(ctor) {
	    ctor.prototype.on = function(type, f) {on(this, type, f);};
	    ctor.prototype.off = function(type, f) {off(this, type, f);};
	  }

	  // MISC UTILITIES

	  // Number of pixels added to scroller and sizer to hide scrollbar
	  var scrollerGap = 30;

	  // Returned or thrown by various protocols to signal 'I'm not
	  // handling this'.
	  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

	  // Reused option objects for setSelection & friends
	  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

	  function Delayed() {this.id = null;}
	  Delayed.prototype.set = function(ms, f) {
	    clearTimeout(this.id);
	    this.id = setTimeout(f, ms);
	  };

	  // Counts the column offset in a string, taking tabs into account.
	  // Used mostly to find indentation.
	  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	    if (end == null) {
	      end = string.search(/[^\s\u00a0]/);
	      if (end == -1) end = string.length;
	    }
	    for (var i = startIndex || 0, n = startValue || 0;;) {
	      var nextTab = string.indexOf("\t", i);
	      if (nextTab < 0 || nextTab >= end)
	        return n + (end - i);
	      n += nextTab - i;
	      n += tabSize - (n % tabSize);
	      i = nextTab + 1;
	    }
	  };

	  // The inverse of countColumn -- find the offset that corresponds to
	  // a particular column.
	  var findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
	    for (var pos = 0, col = 0;;) {
	      var nextTab = string.indexOf("\t", pos);
	      if (nextTab == -1) nextTab = string.length;
	      var skipped = nextTab - pos;
	      if (nextTab == string.length || col + skipped >= goal)
	        return pos + Math.min(skipped, goal - col);
	      col += nextTab - pos;
	      col += tabSize - (col % tabSize);
	      pos = nextTab + 1;
	      if (col >= goal) return pos;
	    }
	  }

	  var spaceStrs = [""];
	  function spaceStr(n) {
	    while (spaceStrs.length <= n)
	      spaceStrs.push(lst(spaceStrs) + " ");
	    return spaceStrs[n];
	  }

	  function lst(arr) { return arr[arr.length-1]; }

	  var selectInput = function(node) { node.select(); };
	  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
	  else if (ie) // Suppress mysterious IE10 errors
	    selectInput = function(node) { try { node.select(); } catch(_e) {} };

	  function indexOf(array, elt) {
	    for (var i = 0; i < array.length; ++i)
	      if (array[i] == elt) return i;
	    return -1;
	  }
	  function map(array, f) {
	    var out = [];
	    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	    return out;
	  }

	  function insertSorted(array, value, score) {
	    var pos = 0, priority = score(value)
	    while (pos < array.length && score(array[pos]) <= priority) pos++
	    array.splice(pos, 0, value)
	  }

	  function nothing() {}

	  function createObj(base, props) {
	    var inst;
	    if (Object.create) {
	      inst = Object.create(base);
	    } else {
	      nothing.prototype = base;
	      inst = new nothing();
	    }
	    if (props) copyObj(props, inst);
	    return inst;
	  };

	  function copyObj(obj, target, overwrite) {
	    if (!target) target = {};
	    for (var prop in obj)
	      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	        target[prop] = obj[prop];
	    return target;
	  }

	  function bind(f) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function(){return f.apply(null, args);};
	  }

	  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	    return /\w/.test(ch) || ch > "\x80" &&
	      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	  };
	  function isWordChar(ch, helper) {
	    if (!helper) return isWordCharBasic(ch);
	    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	    return helper.test(ch);
	  }

	  function isEmpty(obj) {
	    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	    return true;
	  }

	  // Extending unicode characters. A series of a non-extending char +
	  // any number of extending chars is treated as a single unit as far
	  // as editing and measuring is concerned. This is not fully correct,
	  // since some scripts/fonts/browsers also treat other configurations
	  // of code points as a group.
	  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

	  // DOM UTILITIES

	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }

	  var range;
	  if (document.createRange) range = function(node, start, end, endNode) {
	    var r = document.createRange();
	    r.setEnd(endNode || node, end);
	    r.setStart(node, start);
	    return r;
	  };
	  else range = function(node, start, end) {
	    var r = document.body.createTextRange();
	    try { r.moveToElementText(node.parentNode); }
	    catch(e) { return r; }
	    r.collapse(true);
	    r.moveEnd("character", end);
	    r.moveStart("character", start);
	    return r;
	  };

	  function removeChildren(e) {
	    for (var count = e.childNodes.length; count > 0; --count)
	      e.removeChild(e.firstChild);
	    return e;
	  }

	  function removeChildrenAndAdd(parent, e) {
	    return removeChildren(parent).appendChild(e);
	  }

	  var contains = CodeMirror.contains = function(parent, child) {
	    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	      child = child.parentNode;
	    if (parent.contains)
	      return parent.contains(child);
	    do {
	      if (child.nodeType == 11) child = child.host;
	      if (child == parent) return true;
	    } while (child = child.parentNode);
	  };

	  function activeElt() {
	    var activeElement = document.activeElement;
	    while (activeElement && activeElement.root && activeElement.root.activeElement)
	      activeElement = activeElement.root.activeElement;
	    return activeElement;
	  }
	  // Older versions of IE throws unspecified error when touching
	  // document.activeElement in some cases (during loading, in iframe)
	  if (ie && ie_version < 11) activeElt = function() {
	    try { return document.activeElement; }
	    catch(e) { return document.body; }
	  };

	  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
	  var rmClass = CodeMirror.rmClass = function(node, cls) {
	    var current = node.className;
	    var match = classTest(cls).exec(current);
	    if (match) {
	      var after = current.slice(match.index + match[0].length);
	      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	    }
	  };
	  var addClass = CodeMirror.addClass = function(node, cls) {
	    var current = node.className;
	    if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	  };
	  function joinClasses(a, b) {
	    var as = a.split(" ");
	    for (var i = 0; i < as.length; i++)
	      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	    return b;
	  }

	  // WINDOW-WIDE EVENTS

	  // These must be handled carefully, because naively registering a
	  // handler for each editor will cause the editors to never be
	  // garbage collected.

	  function forEachCodeMirror(f) {
	    if (!document.body.getElementsByClassName) return;
	    var byClass = document.body.getElementsByClassName("CodeMirror");
	    for (var i = 0; i < byClass.length; i++) {
	      var cm = byClass[i].CodeMirror;
	      if (cm) f(cm);
	    }
	  }

	  var globalsRegistered = false;
	  function ensureGlobalHandlers() {
	    if (globalsRegistered) return;
	    registerGlobalHandlers();
	    globalsRegistered = true;
	  }
	  function registerGlobalHandlers() {
	    // When the window resizes, we need to refresh active editors.
	    var resizeTimer;
	    on(window, "resize", function() {
	      if (resizeTimer == null) resizeTimer = setTimeout(function() {
	        resizeTimer = null;
	        forEachCodeMirror(onResize);
	      }, 100);
	    });
	    // When the window loses focus, we want to show the editor as blurred
	    on(window, "blur", function() {
	      forEachCodeMirror(onBlur);
	    });
	  }

	  // FEATURE DETECTION

	  // Detect drag-and-drop
	  var dragAndDrop = function() {
	    // There is *some* kind of drag-and-drop support in IE6-8, but I
	    // couldn't get it to work yet.
	    if (ie && ie_version < 9) return false;
	    var div = elt('div');
	    return "draggable" in div || "dragDrop" in div;
	  }();

	  var zwspSupported;
	  function zeroWidthElement(measure) {
	    if (zwspSupported == null) {
	      var test = elt("span", "\u200b");
	      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	      if (measure.firstChild.offsetHeight != 0)
	        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	    }
	    var node = zwspSupported ? elt("span", "\u200b") :
	      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	    node.setAttribute("cm-text", "");
	    return node;
	  }

	  // Feature-detect IE's crummy client rect reporting for bidi text
	  var badBidiRects;
	  function hasBadBidiRects(measure) {
	    if (badBidiRects != null) return badBidiRects;
	    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	    var r0 = range(txt, 0, 1).getBoundingClientRect();
	    var r1 = range(txt, 1, 2).getBoundingClientRect();
	    removeChildren(measure);
	    if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	    return badBidiRects = (r1.right - r0.right < 3);
	  }

	  // See if "".split is the broken IE version, if so, provide an
	  // alternative way to split lines.
	  var splitLinesAuto = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	    var pos = 0, result = [], l = string.length;
	    while (pos <= l) {
	      var nl = string.indexOf("\n", pos);
	      if (nl == -1) nl = string.length;
	      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	      var rt = line.indexOf("\r");
	      if (rt != -1) {
	        result.push(line.slice(0, rt));
	        pos += rt + 1;
	      } else {
	        result.push(line);
	        pos = nl + 1;
	      }
	    }
	    return result;
	  } : function(string){return string.split(/\r\n?|\n/);};

	  var hasSelection = window.getSelection ? function(te) {
	    try { return te.selectionStart != te.selectionEnd; }
	    catch(e) { return false; }
	  } : function(te) {
	    try {var range = te.ownerDocument.selection.createRange();}
	    catch(e) {}
	    if (!range || range.parentElement() != te) return false;
	    return range.compareEndPoints("StartToEnd", range) != 0;
	  };

	  var hasCopyEvent = (function() {
	    var e = elt("div");
	    if ("oncopy" in e) return true;
	    e.setAttribute("oncopy", "return;");
	    return typeof e.oncopy == "function";
	  })();

	  var badZoomedRects = null;
	  function hasBadZoomedRects(measure) {
	    if (badZoomedRects != null) return badZoomedRects;
	    var node = removeChildrenAndAdd(measure, elt("span", "x"));
	    var normal = node.getBoundingClientRect();
	    var fromRange = range(node, 0, 1).getBoundingClientRect();
	    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
	  }

	  // KEY NAMES

	  var keyNames = CodeMirror.keyNames = {
	    3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	  };
	  (function() {
	    // Number keys
	    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	    // Alphabetic keys
	    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	    // Function keys
	    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	  })();

	  // BIDI HELPERS

	  function iterateBidiSections(order, from, to, f) {
	    if (!order) return f(from, to, "ltr");
	    var found = false;
	    for (var i = 0; i < order.length; ++i) {
	      var part = order[i];
	      if (part.from < to && part.to > from || from == to && part.to == from) {
	        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	        found = true;
	      }
	    }
	    if (!found) f(from, to, "ltr");
	  }

	  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
	  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

	  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
	  function lineRight(line) {
	    var order = getOrder(line);
	    if (!order) return line.text.length;
	    return bidiRight(lst(order));
	  }

	  function lineStart(cm, lineN) {
	    var line = getLine(cm.doc, lineN);
	    var visual = visualLine(line);
	    if (visual != line) lineN = lineNo(visual);
	    var order = getOrder(visual);
	    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	    return Pos(lineN, ch);
	  }
	  function lineEnd(cm, lineN) {
	    var merged, line = getLine(cm.doc, lineN);
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      lineN = null;
	    }
	    var order = getOrder(line);
	    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	    return Pos(lineN == null ? lineNo(line) : lineN, ch);
	  }
	  function lineStartSmart(cm, pos) {
	    var start = lineStart(cm, pos.line);
	    var line = getLine(cm.doc, start.line);
	    var order = getOrder(line);
	    if (!order || order[0].level == 0) {
	      var firstNonWS = Math.max(0, line.text.search(/\S/));
	      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	      return Pos(start.line, inWS ? 0 : firstNonWS);
	    }
	    return start;
	  }

	  function compareBidiLevel(order, a, b) {
	    var linedir = order[0].level;
	    if (a == linedir) return true;
	    if (b == linedir) return false;
	    return a < b;
	  }
	  var bidiOther;
	  function getBidiPartAt(order, pos) {
	    bidiOther = null;
	    for (var i = 0, found; i < order.length; ++i) {
	      var cur = order[i];
	      if (cur.from < pos && cur.to > pos) return i;
	      if ((cur.from == pos || cur.to == pos)) {
	        if (found == null) {
	          found = i;
	        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	          if (cur.from != cur.to) bidiOther = found;
	          return i;
	        } else {
	          if (cur.from != cur.to) bidiOther = i;
	          return found;
	        }
	      }
	    }
	    return found;
	  }

	  function moveInLine(line, pos, dir, byUnit) {
	    if (!byUnit) return pos + dir;
	    do pos += dir;
	    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	    return pos;
	  }

	  // This is needed in order to move 'visually' through bi-directional
	  // text -- i.e., pressing left should make the cursor go left, even
	  // when in RTL text. The tricky part is the 'jumps', where RTL and
	  // LTR text touch each other. This often requires the cursor offset
	  // to move more than one unit, in order to visually move one unit.
	  function moveVisually(line, start, dir, byUnit) {
	    var bidi = getOrder(line);
	    if (!bidi) return moveLogically(line, start, dir, byUnit);
	    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

	    for (;;) {
	      if (target > part.from && target < part.to) return target;
	      if (target == part.from || target == part.to) {
	        if (getBidiPartAt(bidi, target) == pos) return target;
	        part = bidi[pos += dir];
	        return (dir > 0) == part.level % 2 ? part.to : part.from;
	      } else {
	        part = bidi[pos += dir];
	        if (!part) return null;
	        if ((dir > 0) == part.level % 2)
	          target = moveInLine(line, part.to, -1, byUnit);
	        else
	          target = moveInLine(line, part.from, 1, byUnit);
	      }
	    }
	  }

	  function moveLogically(line, start, dir, byUnit) {
	    var target = start + dir;
	    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	    return target < 0 || target > line.text.length ? null : target;
	  }

	  // Bidirectional ordering algorithm
	  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	  // that this (partially) implements.

	  // One-char codes used for character types:
	  // L (L):   Left-to-Right
	  // R (R):   Right-to-Left
	  // r (AL):  Right-to-Left Arabic
	  // 1 (EN):  European Number
	  // + (ES):  European Number Separator
	  // % (ET):  European Number Terminator
	  // n (AN):  Arabic Number
	  // , (CS):  Common Number Separator
	  // m (NSM): Non-Spacing Mark
	  // b (BN):  Boundary Neutral
	  // s (B):   Paragraph Separator
	  // t (S):   Segment Separator
	  // w (WS):  Whitespace
	  // N (ON):  Other Neutrals

	  // Returns null if characters are ordered as they appear
	  // (left-to-right), or an array of sections ({from, to, level}
	  // objects) in the order in which they occur visually.
	  var bidiOrdering = (function() {
	    // Character types for codepoints 0 to 0xff
	    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	    // Character types for codepoints 0x600 to 0x6ff
	    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	    function charType(code) {
	      if (code <= 0xf7) return lowTypes.charAt(code);
	      else if (0x590 <= code && code <= 0x5f4) return "R";
	      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	      else if (0x6ee <= code && code <= 0x8ac) return "r";
	      else if (0x2000 <= code && code <= 0x200b) return "w";
	      else if (code == 0x200c) return "b";
	      else return "L";
	    }

	    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	    // Browsers seem to always treat the boundaries of block elements as being L.
	    var outerType = "L";

	    function BidiSpan(level, from, to) {
	      this.level = level;
	      this.from = from; this.to = to;
	    }

	    return function(str) {
	      if (!bidiRE.test(str)) return false;
	      var len = str.length, types = [];
	      for (var i = 0, type; i < len; ++i)
	        types.push(type = charType(str.charCodeAt(i)));

	      // W1. Examine each non-spacing mark (NSM) in the level run, and
	      // change the type of the NSM to the type of the previous
	      // character. If the NSM is at the start of the level run, it will
	      // get the type of sor.
	      for (var i = 0, prev = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "m") types[i] = prev;
	        else prev = type;
	      }

	      // W2. Search backwards from each instance of a European number
	      // until the first strong type (R, L, AL, or sor) is found. If an
	      // AL is found, change the type of the European number to Arabic
	      // number.
	      // W3. Change all ALs to R.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "1" && cur == "r") types[i] = "n";
	        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	      }

	      // W4. A single European separator between two European numbers
	      // changes to a European number. A single common separator between
	      // two numbers of the same type changes to that type.
	      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
	        var type = types[i];
	        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
	        else if (type == "," && prev == types[i+1] &&
	                 (prev == "1" || prev == "n")) types[i] = prev;
	        prev = type;
	      }

	      // W5. A sequence of European terminators adjacent to European
	      // numbers changes to all European numbers.
	      // W6. Otherwise, separators and terminators change to Other
	      // Neutral.
	      for (var i = 0; i < len; ++i) {
	        var type = types[i];
	        if (type == ",") types[i] = "N";
	        else if (type == "%") {
	          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
	          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // W7. Search backwards from each instance of a European number
	      // until the first strong type (R, L, or sor) is found. If an L is
	      // found, then change the type of the European number to L.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (cur == "L" && type == "1") types[i] = "L";
	        else if (isStrong.test(type)) cur = type;
	      }

	      // N1. A sequence of neutrals takes the direction of the
	      // surrounding strong text if the text on both sides has the same
	      // direction. European and Arabic numbers act as if they were R in
	      // terms of their influence on neutrals. Start-of-level-run (sor)
	      // and end-of-level-run (eor) are used at level run boundaries.
	      // N2. Any remaining neutrals take the embedding direction.
	      for (var i = 0; i < len; ++i) {
	        if (isNeutral.test(types[i])) {
	          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
	          var before = (i ? types[i-1] : outerType) == "L";
	          var after = (end < len ? types[end] : outerType) == "L";
	          var replace = before || after ? "L" : "R";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // Here we depart from the documented algorithm, in order to avoid
	      // building up an actual levels array. Since there are only three
	      // levels (0, 1, 2) in an implementation that doesn't take
	      // explicit embedding into account, we can build up the order on
	      // the fly, without following the level-based algorithm.
	      var order = [], m;
	      for (var i = 0; i < len;) {
	        if (countsAsLeft.test(types[i])) {
	          var start = i;
	          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
	          order.push(new BidiSpan(0, start, i));
	        } else {
	          var pos = i, at = order.length;
	          for (++i; i < len && types[i] != "L"; ++i) {}
	          for (var j = pos; j < i;) {
	            if (countsAsNum.test(types[j])) {
	              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
	              var nstart = j;
	              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
	              order.splice(at, 0, new BidiSpan(2, nstart, j));
	              pos = j;
	            } else ++j;
	          }
	          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
	        }
	      }
	      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	        order[0].from = m[0].length;
	        order.unshift(new BidiSpan(0, 0, m[0].length));
	      }
	      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	        lst(order).to -= m[0].length;
	        order.push(new BidiSpan(0, len - m[0].length, len));
	      }
	      if (order[0].level == 2)
	        order.unshift(new BidiSpan(1, order[0].to, order[0].to));
	      if (order[0].level != lst(order).level)
	        order.push(new BidiSpan(order[0].level, len, len));

	      return order;
	    };
	  })();

	  // THE END

	  CodeMirror.version = "5.19.0";

	  return CodeMirror;
	});


/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }
/******/ ])
});
;