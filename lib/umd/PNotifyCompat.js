(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('PNotifyCompat', ['exports', "PNotify"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./PNotify"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.PNotify);
    global.PNotifyCompat = mod.exports;
  }
})(this, function (exports, _PNotify2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _PNotify3 = _interopRequireDefault(_PNotify2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get2 = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  // Translate v3 options to v4 options.
  var translateOptions = function translateOptions(options, module, moduleName) {
    // Merge the classic default options.
    var newOptions = module ? _extends({}, moduleName ? PNotifyCompat.prototype.options[moduleName] : {}, options) : _extends({}, PNotifyCompat.prototype.options, options);
    var translateName = function translateName(badName) {
      var goodName = badName,
          underscoreIndex = void 0;
      while ((underscoreIndex = goodName.indexOf('_')) !== -1) {
        goodName = goodName.slice(0, underscoreIndex) + goodName.slice(underscoreIndex + 1, underscoreIndex + 2).toUpperCase() + goodName.slice(underscoreIndex + 2);
      }
      return goodName;
    };

    // Translate all options to the new style.
    for (var name in newOptions) {
      if (newOptions.hasOwnProperty(name) && name.indexOf('_') !== -1) {
        var goodName = translateName(name);
        newOptions[goodName] = newOptions[name];
        delete newOptions[name];
      }
    }

    if (!module) {
      // Options that have changed.
      if (newOptions.hasOwnProperty('addclass')) {
        newOptions.addClass = newOptions.addclass;
        delete newOptions.addclass;
      }
      if (newOptions.hasOwnProperty('cornerclass')) {
        newOptions.cornerClass = newOptions.cornerclass;
        delete newOptions.cornerClass;
      }
      if (newOptions.hasOwnProperty('textEscape')) {
        newOptions.textTrusted = !newOptions.textEscape;
        delete newOptions.textEscape;
      }
      if (newOptions.hasOwnProperty('titleEscape')) {
        newOptions.titleTrusted = !newOptions.titleEscape;
        delete newOptions.titleEscape;
      }

      // Styling and icons.
      if (newOptions.hasOwnProperty('styling')) {
        if (newOptions.styling === 'bootstrap3') {
          newOptions.icons = 'bootstrap3';
        } else if (newOptions.styling === 'fontawesome') {
          newOptions.styling = 'bootstrap3';
          newOptions.icons = 'fontawesome4';
        }
      }

      // Stacks.
      if (newOptions.hasOwnProperty('stack')) {
        if (newOptions.stack.overlay_close) {
          newOptions.stack.overlayClose = newOptions.stack.overlay_close;
        }
      }

      // Translate module options.
      newOptions.modules = {};
      if (newOptions.hasOwnProperty('animate')) {
        newOptions.modules.Animate = translateOptions(newOptions.animate, true, 'animate');
        delete newOptions.animate;
      }
      if (newOptions.hasOwnProperty('buttons')) {
        newOptions.modules.Buttons = translateOptions(newOptions.buttons, true, 'buttons');
        delete newOptions.buttons;
        if (newOptions.modules.Buttons.classes) {
          newOptions.modules.Buttons.classes = translateOptions(newOptions.modules.Buttons.classes, true);
        }
      }
      if (newOptions.hasOwnProperty('confirm')) {
        newOptions.modules.Confirm = translateOptions(newOptions.confirm, true, 'confirm');
        if (newOptions.modules.Confirm.promptDefault) {
          newOptions.modules.Confirm.promptValue = newOptions.modules.Confirm.promptDefault;
          delete newOptions.modules.Confirm.promptDefault;
        }
        delete newOptions.confirm;
      }
      if (newOptions.hasOwnProperty('desktop')) {
        newOptions.modules.Desktop = translateOptions(newOptions.desktop, true, 'desktop');
        delete newOptions.desktop;
      }
      if (newOptions.hasOwnProperty('history')) {
        newOptions.modules.History = translateOptions(newOptions.history, true, 'history');
        delete newOptions.history;
      }
      if (newOptions.hasOwnProperty('mobile')) {
        newOptions.modules.Mobile = translateOptions(newOptions.mobile, true, 'mobile');
        delete newOptions.mobile;
      }
      if (newOptions.hasOwnProperty('nonblock')) {
        newOptions.modules.NonBlock = translateOptions(newOptions.nonblock, true, 'nonblock');
        delete newOptions.nonblock;
      }
      if (newOptions.hasOwnProperty('reference')) {
        newOptions.modules.Reference = translateOptions(newOptions.reference, true, 'reference');
        delete newOptions.reference;
      }
      if (newOptions.hasOwnProperty('beforeInit')) {
        if (!newOptions.modules.Callbacks) {
          newOptions.modules.Callbacks = {};
        }
        newOptions.modules.Callbacks.beforeInit = newOptions.beforeInit;
        delete newOptions.beforeInit;
      }
      if (newOptions.hasOwnProperty('afterInit')) {
        if (!newOptions.modules.Callbacks) {
          newOptions.modules.Callbacks = {};
        }
        newOptions.modules.Callbacks.afterInit = newOptions.afterInit;
        delete newOptions.afterInit;
      }
      if (newOptions.hasOwnProperty('beforeOpen')) {
        if (!newOptions.modules.Callbacks) {
          newOptions.modules.Callbacks = {};
        }
        newOptions.modules.Callbacks.beforeOpen = newOptions.beforeOpen;
        delete newOptions.beforeOpen;
      }
      if (newOptions.hasOwnProperty('afterOpen')) {
        if (!newOptions.modules.Callbacks) {
          newOptions.modules.Callbacks = {};
        }
        newOptions.modules.Callbacks.afterOpen = newOptions.afterOpen;
        delete newOptions.afterOpen;
      }
      if (newOptions.hasOwnProperty('beforeClose')) {
        if (!newOptions.modules.Callbacks) {
          newOptions.modules.Callbacks = {};
        }
        newOptions.modules.Callbacks.beforeClose = newOptions.beforeClose;
        delete newOptions.beforeClose;
      }
      if (newOptions.hasOwnProperty('afterClose')) {
        if (!newOptions.modules.Callbacks) {
          newOptions.modules.Callbacks = {};
        }
        newOptions.modules.Callbacks.afterClose = newOptions.afterClose;
        delete newOptions.afterClose;
      }
    }

    return newOptions;
  };

  // The compatibility class.

  var PNotifyCompat = function (_PNotify) {
    _inherits(PNotifyCompat, _PNotify);

    function PNotifyCompat(options) {
      _classCallCheck(this, PNotifyCompat);

      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== "object") {
        options = { "text": options };
      }

      // These need to be called directly, since we're not using PNotify.alert().
      if (_PNotify3.default.modules.Callbacks && options.before_init) {
        options.before_init(options);
      }

      options = translateOptions(options);

      var _this = _possibleConstructorReturn(this, (PNotifyCompat.__proto__ || Object.getPrototypeOf(PNotifyCompat)).call(this, { target: document.body, data: options }));

      // Override the get function to retunr the element like it did in v3.
      var _get = _this.get;
      _this.get = function (option) {
        if (option === undefined) {
          return _extends(window.jQuery ? window.jQuery(this.refs.elem) : this.refs.elem, _get.call(this));
        }
        return _get.call(this, option);
      };

      // Confirm module events.
      _this.on('pnotify.confirm', function (e) {
        if (window.jQuery) {
          window.jQuery(_this.refs.elem).trigger('pnotify.confirm', [_this, e.value]);
        }
      });
      _this.on('pnotify.cancel', function (e) {
        if (window.jQuery) {
          window.jQuery(_this.refs.elem).trigger('pnotify.cancel', _this);
        }
      });

      if (_PNotify3.default.modules.Callbacks) {
        _PNotify3.default.modules.Callbacks.getCallbacks(_this, null, 'afterInit')(_this);
      }
      return _this;
    }

    _createClass(PNotifyCompat, [{
      key: 'update',
      value: function update(options) {
        options = translateOptions(options);
        return _get2(PNotifyCompat.prototype.__proto__ || Object.getPrototypeOf(PNotifyCompat.prototype), 'update', this).call(this, options);
      }
    }]);

    return PNotifyCompat;
  }(_PNotify3.default);

  // Lets you change defaults the old way.
  PNotifyCompat.prototype.options = {
    text_escape: false,
    title_escape: false
  };

  // Forward static functions.
  PNotifyCompat.reload = function () {
    return PNotifyCompat;
  };
  PNotifyCompat.removeAll = function () {
    return _PNotify3.default.removeAll();
  };
  PNotifyCompat.removeStack = function (stack) {
    return _PNotify3.default.removeStack(stack);
  };
  PNotifyCompat.positionAll = function (animate) {
    return _PNotify3.default.positionAll(animate);
  };

  // Desktop module permission method.
  PNotifyCompat.desktop = {
    permission: function permission() {
      _PNotify3.default.modules.Desktop.permission();
    }
  };

  // Old style showLast() in History module.
  if (window.jQuery) {
    window.jQuery(function () {
      window.jQuery(document.body).on('pnotify.history-last', function () {
        _PNotify3.default.modules.History.showLast();
      });
    });
  }

  exports.default = PNotifyCompat;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBOb3RpZnlDb21wYXQuanMiXSwibmFtZXMiOlsidHJhbnNsYXRlT3B0aW9ucyIsIm9wdGlvbnMiLCJtb2R1bGUiLCJtb2R1bGVOYW1lIiwibmV3T3B0aW9ucyIsIlBOb3RpZnlDb21wYXQiLCJwcm90b3R5cGUiLCJ0cmFuc2xhdGVOYW1lIiwiYmFkTmFtZSIsImdvb2ROYW1lIiwidW5kZXJzY29yZUluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJhZGRDbGFzcyIsImFkZGNsYXNzIiwiY29ybmVyQ2xhc3MiLCJjb3JuZXJjbGFzcyIsInRleHRUcnVzdGVkIiwidGV4dEVzY2FwZSIsInRpdGxlVHJ1c3RlZCIsInRpdGxlRXNjYXBlIiwic3R5bGluZyIsImljb25zIiwic3RhY2siLCJvdmVybGF5X2Nsb3NlIiwib3ZlcmxheUNsb3NlIiwibW9kdWxlcyIsIkFuaW1hdGUiLCJhbmltYXRlIiwiQnV0dG9ucyIsImJ1dHRvbnMiLCJjbGFzc2VzIiwiQ29uZmlybSIsImNvbmZpcm0iLCJwcm9tcHREZWZhdWx0IiwicHJvbXB0VmFsdWUiLCJEZXNrdG9wIiwiZGVza3RvcCIsIkhpc3RvcnkiLCJoaXN0b3J5IiwiTW9iaWxlIiwibW9iaWxlIiwiTm9uQmxvY2siLCJub25ibG9jayIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsIkNhbGxiYWNrcyIsImJlZm9yZUluaXQiLCJhZnRlckluaXQiLCJiZWZvcmVPcGVuIiwiYWZ0ZXJPcGVuIiwiYmVmb3JlQ2xvc2UiLCJhZnRlckNsb3NlIiwiYmVmb3JlX2luaXQiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImJvZHkiLCJkYXRhIiwiX2dldCIsImdldCIsIm9wdGlvbiIsInVuZGVmaW5lZCIsIndpbmRvdyIsImpRdWVyeSIsInJlZnMiLCJlbGVtIiwiY2FsbCIsIm9uIiwiZSIsInRyaWdnZXIiLCJ2YWx1ZSIsImdldENhbGxiYWNrcyIsInRleHRfZXNjYXBlIiwidGl0bGVfZXNjYXBlIiwicmVsb2FkIiwicmVtb3ZlQWxsIiwicmVtb3ZlU3RhY2siLCJwb3NpdGlvbkFsbCIsInBlcm1pc3Npb24iLCJzaG93TGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxNQUFNQSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLFVBQWxCLEVBQWlDO0FBQ3hEO0FBQ0EsUUFBTUMsYUFBYUYsU0FBUyxTQUFjLEVBQWQsRUFBa0JDLGFBQWFFLGNBQWNDLFNBQWQsQ0FBd0JMLE9BQXhCLENBQWdDRSxVQUFoQyxDQUFiLEdBQTJELEVBQTdFLEVBQWlGRixPQUFqRixDQUFULEdBQXFHLFNBQWMsRUFBZCxFQUFrQkksY0FBY0MsU0FBZCxDQUF3QkwsT0FBMUMsRUFBbURBLE9BQW5ELENBQXhIO0FBQ0EsUUFBTU0sZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakMsVUFBSUMsV0FBV0QsT0FBZjtBQUFBLFVBQXdCRSx3QkFBeEI7QUFDQSxhQUFPLENBQUNBLGtCQUFrQkQsU0FBU0UsT0FBVCxDQUFpQixHQUFqQixDQUFuQixNQUE4QyxDQUFDLENBQXRELEVBQXlEO0FBQ3ZERixtQkFBV0EsU0FBU0csS0FBVCxDQUFlLENBQWYsRUFBa0JGLGVBQWxCLElBQXFDRCxTQUFTRyxLQUFULENBQWVGLGtCQUFrQixDQUFqQyxFQUFvQ0Esa0JBQWtCLENBQXRELEVBQXlERyxXQUF6RCxFQUFyQyxHQUE4R0osU0FBU0csS0FBVCxDQUFlRixrQkFBa0IsQ0FBakMsQ0FBekg7QUFDRDtBQUNELGFBQU9ELFFBQVA7QUFDRCxLQU5EOztBQVFBO0FBQ0EsU0FBSyxJQUFJSyxJQUFULElBQWlCVixVQUFqQixFQUE2QjtBQUMz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QlksT0FBaEIsQ0FBd0J5QyxRQUF4QjtBQUNELE9BRkQ7QUFHRCxLQUpEO0FBS0Q7O29CQUVjN0UsYSIsImZpbGUiOiJzcmMvUE5vdGlmeUNvbXBhdC5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUE5vdGlmeSBmcm9tIFwiLi9QTm90aWZ5Lmh0bWxcIjtcblxuLy8gVHJhbnNsYXRlIHYzIG9wdGlvbnMgdG8gdjQgb3B0aW9ucy5cbmNvbnN0IHRyYW5zbGF0ZU9wdGlvbnMgPSAob3B0aW9ucywgbW9kdWxlLCBtb2R1bGVOYW1lKSA9PiB7XG4gIC8vIE1lcmdlIHRoZSBjbGFzc2ljIGRlZmF1bHQgb3B0aW9ucy5cbiAgY29uc3QgbmV3T3B0aW9ucyA9IG1vZHVsZSA/IE9iamVjdC5hc3NpZ24oe30sIG1vZHVsZU5hbWUgPyBQTm90aWZ5Q29tcGF0LnByb3RvdHlwZS5vcHRpb25zW21vZHVsZU5hbWVdIDoge30sIG9wdGlvbnMpIDogT2JqZWN0LmFzc2lnbih7fSwgUE5vdGlmeUNvbXBhdC5wcm90b3R5cGUub3B0aW9ucywgb3B0aW9ucyk7XG4gIGNvbnN0IHRyYW5zbGF0ZU5hbWUgPSAoYmFkTmFtZSkgPT4ge1xuICAgIGxldCBnb29kTmFtZSA9IGJhZE5hbWUsIHVuZGVyc2NvcmVJbmRleDtcbiAgICB3aGlsZSAoKHVuZGVyc2NvcmVJbmRleCA9IGdvb2ROYW1lLmluZGV4T2YoJ18nKSkgIT09IC0xKSB7XG4gICAgICBnb29kTmFtZSA9IGdvb2ROYW1lLnNsaWNlKDAsIHVuZGVyc2NvcmVJbmRleCkgKyBnb29kTmFtZS5zbGljZSh1bmRlcnNjb3JlSW5kZXggKyAxLCB1bmRlcnNjb3JlSW5kZXggKyAyKS50b1VwcGVyQ2FzZSgpICsgZ29vZE5hbWUuc2xpY2UodW5kZXJzY29yZUluZGV4ICsgMik7XG4gICAgfVxuICAgIHJldHVybiBnb29kTmFtZTtcbiAgfTtcblxuICAvLyBUcmFuc2xhdGUgYWxsIG9wdGlvbnMgdG8gdGhlIG5ldyBzdHlsZS5cbiAgZm9yIChsZXQgbmFtZSBpbiBuZXdPcHRpb25zKSB7XG4gICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbmFtZS5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgICBjb25zdCBnb29kTmFtZSA9IHRyYW5zbGF0ZU5hbWUobmFtZSk7XG4gICAgICBuZXdPcHRpb25zW2dvb2ROYW1lXSA9IG5ld09wdGlvbnNbbmFtZV07XG4gICAgICBkZWxldGUgbmV3T3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW1vZHVsZSkge1xuICAgIC8vIE9wdGlvbnMgdGhhdCBoYXZlIGNoYW5nZWQuXG4gICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2FkZGNsYXNzJykpIHtcbiAgICAgIG5ld09wdGlvbnMuYWRkQ2xhc3MgPSBuZXdPcHRpb25zLmFkZGNsYXNzO1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMuYWRkY2xhc3M7XG4gICAgfVxuICAgIGlmIChuZXdPcHRpb25zLmhhc093blByb3BlcnR5KCdjb3JuZXJjbGFzcycpKSB7XG4gICAgICBuZXdPcHRpb25zLmNvcm5lckNsYXNzID0gbmV3T3B0aW9ucy5jb3JuZXJjbGFzcztcbiAgICAgIGRlbGV0ZSBuZXdPcHRpb25zLmNvcm5lckNsYXNzO1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGV4dEVzY2FwZScpKSB7XG4gICAgICBuZXdPcHRpb25zLnRleHRUcnVzdGVkID0gIW5ld09wdGlvbnMudGV4dEVzY2FwZTtcbiAgICAgIGRlbGV0ZSBuZXdPcHRpb25zLnRleHRFc2NhcGU7XG4gICAgfVxuICAgIGlmIChuZXdPcHRpb25zLmhhc093blByb3BlcnR5KCd0aXRsZUVzY2FwZScpKSB7XG4gICAgICBuZXdPcHRpb25zLnRpdGxlVHJ1c3RlZCA9ICFuZXdPcHRpb25zLnRpdGxlRXNjYXBlO1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMudGl0bGVFc2NhcGU7XG4gICAgfVxuXG4gICAgLy8gU3R5bGluZyBhbmQgaWNvbnMuXG4gICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3N0eWxpbmcnKSkge1xuICAgICAgaWYgKG5ld09wdGlvbnMuc3R5bGluZyA9PT0gJ2Jvb3RzdHJhcDMnKSB7XG4gICAgICAgIG5ld09wdGlvbnMuaWNvbnMgPSAnYm9vdHN0cmFwMyc7XG4gICAgICB9IGVsc2UgaWYgKG5ld09wdGlvbnMuc3R5bGluZyA9PT0gJ2ZvbnRhd2Vzb21lJykge1xuICAgICAgICBuZXdPcHRpb25zLnN0eWxpbmcgPSAnYm9vdHN0cmFwMyc7XG4gICAgICAgIG5ld09wdGlvbnMuaWNvbnMgPSAnZm9udGF3ZXNvbWU0JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGFja3MuXG4gICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3N0YWNrJykpIHtcbiAgICAgIGlmIChuZXdPcHRpb25zLnN0YWNrLm92ZXJsYXlfY2xvc2UpIHtcbiAgICAgICAgbmV3T3B0aW9ucy5zdGFjay5vdmVybGF5Q2xvc2UgPSBuZXdPcHRpb25zLnN0YWNrLm92ZXJsYXlfY2xvc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVHJhbnNsYXRlIG1vZHVsZSBvcHRpb25zLlxuICAgIG5ld09wdGlvbnMubW9kdWxlcyA9IHt9O1xuICAgIGlmIChuZXdPcHRpb25zLmhhc093blByb3BlcnR5KCdhbmltYXRlJykpIHtcbiAgICAgIG5ld09wdGlvbnMubW9kdWxlcy5BbmltYXRlID0gdHJhbnNsYXRlT3B0aW9ucyhuZXdPcHRpb25zLmFuaW1hdGUsIHRydWUsICdhbmltYXRlJyk7XG4gICAgICBkZWxldGUgbmV3T3B0aW9ucy5hbmltYXRlO1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYnV0dG9ucycpKSB7XG4gICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQnV0dG9ucyA9IHRyYW5zbGF0ZU9wdGlvbnMobmV3T3B0aW9ucy5idXR0b25zLCB0cnVlLCAnYnV0dG9ucycpO1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMuYnV0dG9ucztcbiAgICAgIGlmIChuZXdPcHRpb25zLm1vZHVsZXMuQnV0dG9ucy5jbGFzc2VzKSB7XG4gICAgICAgIG5ld09wdGlvbnMubW9kdWxlcy5CdXR0b25zLmNsYXNzZXMgPSB0cmFuc2xhdGVPcHRpb25zKG5ld09wdGlvbnMubW9kdWxlcy5CdXR0b25zLmNsYXNzZXMsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnY29uZmlybScpKSB7XG4gICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQ29uZmlybSA9IHRyYW5zbGF0ZU9wdGlvbnMobmV3T3B0aW9ucy5jb25maXJtLCB0cnVlLCAnY29uZmlybScpO1xuICAgICAgaWYgKG5ld09wdGlvbnMubW9kdWxlcy5Db25maXJtLnByb21wdERlZmF1bHQpIHtcbiAgICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLkNvbmZpcm0ucHJvbXB0VmFsdWUgPSBuZXdPcHRpb25zLm1vZHVsZXMuQ29uZmlybS5wcm9tcHREZWZhdWx0O1xuICAgICAgICBkZWxldGUgbmV3T3B0aW9ucy5tb2R1bGVzLkNvbmZpcm0ucHJvbXB0RGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBuZXdPcHRpb25zLmNvbmZpcm07XG4gICAgfVxuICAgIGlmIChuZXdPcHRpb25zLmhhc093blByb3BlcnR5KCdkZXNrdG9wJykpIHtcbiAgICAgIG5ld09wdGlvbnMubW9kdWxlcy5EZXNrdG9wID0gdHJhbnNsYXRlT3B0aW9ucyhuZXdPcHRpb25zLmRlc2t0b3AsIHRydWUsICdkZXNrdG9wJyk7XG4gICAgICBkZWxldGUgbmV3T3B0aW9ucy5kZXNrdG9wO1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnaGlzdG9yeScpKSB7XG4gICAgICBuZXdPcHRpb25zLm1vZHVsZXMuSGlzdG9yeSA9IHRyYW5zbGF0ZU9wdGlvbnMobmV3T3B0aW9ucy5oaXN0b3J5LCB0cnVlLCAnaGlzdG9yeScpO1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMuaGlzdG9yeTtcbiAgICB9XG4gICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkoJ21vYmlsZScpKSB7XG4gICAgICBuZXdPcHRpb25zLm1vZHVsZXMuTW9iaWxlID0gdHJhbnNsYXRlT3B0aW9ucyhuZXdPcHRpb25zLm1vYmlsZSwgdHJ1ZSwgJ21vYmlsZScpO1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMubW9iaWxlO1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbm9uYmxvY2snKSkge1xuICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLk5vbkJsb2NrID0gdHJhbnNsYXRlT3B0aW9ucyhuZXdPcHRpb25zLm5vbmJsb2NrLCB0cnVlLCAnbm9uYmxvY2snKTtcbiAgICAgIGRlbGV0ZSBuZXdPcHRpb25zLm5vbmJsb2NrO1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVmZXJlbmNlJykpIHtcbiAgICAgIG5ld09wdGlvbnMubW9kdWxlcy5SZWZlcmVuY2UgPSB0cmFuc2xhdGVPcHRpb25zKG5ld09wdGlvbnMucmVmZXJlbmNlLCB0cnVlLCAncmVmZXJlbmNlJyk7XG4gICAgICBkZWxldGUgbmV3T3B0aW9ucy5yZWZlcmVuY2U7XG4gICAgfVxuICAgIGlmIChuZXdPcHRpb25zLmhhc093blByb3BlcnR5KCdiZWZvcmVJbml0JykpIHtcbiAgICAgIGlmICghbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcykge1xuICAgICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQ2FsbGJhY2tzID0ge307XG4gICAgICB9XG4gICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQ2FsbGJhY2tzLmJlZm9yZUluaXQgPSBuZXdPcHRpb25zLmJlZm9yZUluaXQ7XG4gICAgICBkZWxldGUgbmV3T3B0aW9ucy5iZWZvcmVJbml0O1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYWZ0ZXJJbml0JykpIHtcbiAgICAgIGlmICghbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcykge1xuICAgICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQ2FsbGJhY2tzID0ge307XG4gICAgICB9XG4gICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQ2FsbGJhY2tzLmFmdGVySW5pdCA9IG5ld09wdGlvbnMuYWZ0ZXJJbml0O1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMuYWZ0ZXJJbml0O1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYmVmb3JlT3BlbicpKSB7XG4gICAgICBpZiAoIW5ld09wdGlvbnMubW9kdWxlcy5DYWxsYmFja3MpIHtcbiAgICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcyA9IHt9O1xuICAgICAgfVxuICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcy5iZWZvcmVPcGVuID0gbmV3T3B0aW9ucy5iZWZvcmVPcGVuO1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMuYmVmb3JlT3BlbjtcbiAgICB9XG4gICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2FmdGVyT3BlbicpKSB7XG4gICAgICBpZiAoIW5ld09wdGlvbnMubW9kdWxlcy5DYWxsYmFja3MpIHtcbiAgICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcyA9IHt9O1xuICAgICAgfVxuICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcy5hZnRlck9wZW4gPSBuZXdPcHRpb25zLmFmdGVyT3BlbjtcbiAgICAgIGRlbGV0ZSBuZXdPcHRpb25zLmFmdGVyT3BlbjtcbiAgICB9XG4gICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2JlZm9yZUNsb3NlJykpIHtcbiAgICAgIGlmICghbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcykge1xuICAgICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQ2FsbGJhY2tzID0ge307XG4gICAgICB9XG4gICAgICBuZXdPcHRpb25zLm1vZHVsZXMuQ2FsbGJhY2tzLmJlZm9yZUNsb3NlID0gbmV3T3B0aW9ucy5iZWZvcmVDbG9zZTtcbiAgICAgIGRlbGV0ZSBuZXdPcHRpb25zLmJlZm9yZUNsb3NlO1xuICAgIH1cbiAgICBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYWZ0ZXJDbG9zZScpKSB7XG4gICAgICBpZiAoIW5ld09wdGlvbnMubW9kdWxlcy5DYWxsYmFja3MpIHtcbiAgICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcyA9IHt9O1xuICAgICAgfVxuICAgICAgbmV3T3B0aW9ucy5tb2R1bGVzLkNhbGxiYWNrcy5hZnRlckNsb3NlID0gbmV3T3B0aW9ucy5hZnRlckNsb3NlO1xuICAgICAgZGVsZXRlIG5ld09wdGlvbnMuYWZ0ZXJDbG9zZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T3B0aW9ucztcbn1cblxuLy8gVGhlIGNvbXBhdGliaWxpdHkgY2xhc3MuXG5jbGFzcyBQTm90aWZ5Q29tcGF0IGV4dGVuZHMgUE5vdGlmeSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIG9wdGlvbnMgPSB7XCJ0ZXh0XCI6IG9wdGlvbnN9O1xuICAgIH1cblxuICAgIC8vIFRoZXNlIG5lZWQgdG8gYmUgY2FsbGVkIGRpcmVjdGx5LCBzaW5jZSB3ZSdyZSBub3QgdXNpbmcgUE5vdGlmeS5hbGVydCgpLlxuICAgIGlmIChQTm90aWZ5Lm1vZHVsZXMuQ2FsbGJhY2tzICYmIG9wdGlvbnMuYmVmb3JlX2luaXQpIHtcbiAgICAgIG9wdGlvbnMuYmVmb3JlX2luaXQob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHRyYW5zbGF0ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBzdXBlcih7dGFyZ2V0OiBkb2N1bWVudC5ib2R5LCBkYXRhOiBvcHRpb25zfSk7XG5cbiAgICAvLyBPdmVycmlkZSB0aGUgZ2V0IGZ1bmN0aW9uIHRvIHJldHVuciB0aGUgZWxlbWVudCBsaWtlIGl0IGRpZCBpbiB2My5cbiAgICBjb25zdCBfZ2V0ID0gdGhpcy5nZXQ7XG4gICAgdGhpcy5nZXQgPSBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgIGlmIChvcHRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih3aW5kb3cualF1ZXJ5ID8gd2luZG93LmpRdWVyeSh0aGlzLnJlZnMuZWxlbSkgOiB0aGlzLnJlZnMuZWxlbSwgX2dldC5jYWxsKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZ2V0LmNhbGwodGhpcywgb3B0aW9uKTtcbiAgICB9O1xuXG4gICAgLy8gQ29uZmlybSBtb2R1bGUgZXZlbnRzLlxuICAgIHRoaXMub24oJ3Bub3RpZnkuY29uZmlybScsIChlKSA9PiB7XG4gICAgICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgICAgICB3aW5kb3cualF1ZXJ5KHRoaXMucmVmcy5lbGVtKS50cmlnZ2VyKCdwbm90aWZ5LmNvbmZpcm0nLCBbdGhpcywgZS52YWx1ZV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub24oJ3Bub3RpZnkuY2FuY2VsJywgKGUpID0+IHtcbiAgICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgIHdpbmRvdy5qUXVlcnkodGhpcy5yZWZzLmVsZW0pLnRyaWdnZXIoJ3Bub3RpZnkuY2FuY2VsJywgdGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoUE5vdGlmeS5tb2R1bGVzLkNhbGxiYWNrcykge1xuICAgICAgUE5vdGlmeS5tb2R1bGVzLkNhbGxiYWNrcy5nZXRDYWxsYmFja3ModGhpcywgbnVsbCwgJ2FmdGVySW5pdCcpKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRyYW5zbGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIHN1cGVyLnVwZGF0ZShvcHRpb25zKTtcbiAgfVxufVxuXG4vLyBMZXRzIHlvdSBjaGFuZ2UgZGVmYXVsdHMgdGhlIG9sZCB3YXkuXG5QTm90aWZ5Q29tcGF0LnByb3RvdHlwZS5vcHRpb25zID0ge1xuICB0ZXh0X2VzY2FwZTogZmFsc2UsXG4gIHRpdGxlX2VzY2FwZTogZmFsc2Vcbn07XG5cbi8vIEZvcndhcmQgc3RhdGljIGZ1bmN0aW9ucy5cblBOb3RpZnlDb21wYXQucmVsb2FkID0gKCkgPT4gUE5vdGlmeUNvbXBhdDtcblBOb3RpZnlDb21wYXQucmVtb3ZlQWxsID0gKCkgPT4gUE5vdGlmeS5yZW1vdmVBbGwoKTtcblBOb3RpZnlDb21wYXQucmVtb3ZlU3RhY2sgPSAoc3RhY2spID0+IFBOb3RpZnkucmVtb3ZlU3RhY2soc3RhY2spO1xuUE5vdGlmeUNvbXBhdC5wb3NpdGlvbkFsbCA9IChhbmltYXRlKSA9PiBQTm90aWZ5LnBvc2l0aW9uQWxsKGFuaW1hdGUpO1xuXG4vLyBEZXNrdG9wIG1vZHVsZSBwZXJtaXNzaW9uIG1ldGhvZC5cblBOb3RpZnlDb21wYXQuZGVza3RvcCA9IHtcbiAgcGVybWlzc2lvbjogKCkgPT4ge1xuICAgIFBOb3RpZnkubW9kdWxlcy5EZXNrdG9wLnBlcm1pc3Npb24oKTtcbiAgfVxufTtcblxuLy8gT2xkIHN0eWxlIHNob3dMYXN0KCkgaW4gSGlzdG9yeSBtb2R1bGUuXG5pZiAod2luZG93LmpRdWVyeSkge1xuICB3aW5kb3cualF1ZXJ5KCgpID0+IHtcbiAgICB3aW5kb3cualF1ZXJ5KGRvY3VtZW50LmJvZHkpLm9uKCdwbm90aWZ5Lmhpc3RvcnktbGFzdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgUE5vdGlmeS5tb2R1bGVzLkhpc3Rvcnkuc2hvd0xhc3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBOb3RpZnlDb21wYXQ7XG4iXX0=