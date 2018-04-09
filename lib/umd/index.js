(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('index', ['exports', "PNotify", "PNotifyAnimate", "PNotifyButtons", "PNotifyCallbacks", "PNotifyConfirm", "PNotifyDesktop", "PNotifyHistory", "PNotifyMobile", "PNotifyNonBlock", "PNotifyStyleMaterial"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./PNotify"), require("./PNotifyAnimate"), require("./PNotifyButtons"), require("./PNotifyCallbacks"), require("./PNotifyConfirm"), require("./PNotifyDesktop"), require("./PNotifyHistory"), require("./PNotifyMobile"), require("./PNotifyNonBlock"), require("./PNotifyStyleMaterial"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.PNotify, global.PNotifyAnimate, global.PNotifyButtons, global.PNotifyCallbacks, global.PNotifyConfirm, global.PNotifyDesktop, global.PNotifyHistory, global.PNotifyMobile, global.PNotifyNonBlock, global.PNotifyStyleMaterial);
    global.index = mod.exports;
  }
})(this, function (exports, _PNotify, _PNotifyAnimate, _PNotifyButtons, _PNotifyCallbacks, _PNotifyConfirm, _PNotifyDesktop, _PNotifyHistory, _PNotifyMobile, _PNotifyNonBlock, _PNotifyStyleMaterial) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PNotifyStyleMaterial = exports.PNotifyNonBlock = exports.PNotifyMobile = exports.PNotifyHistory = exports.PNotifyDesktop = exports.PNotifyConfirm = exports.PNotifyCallbacks = exports.PNotifyButtons = exports.PNotifyAnimate = exports.PNotify = exports.default = undefined;

  var _PNotify2 = _interopRequireDefault(_PNotify);

  var _PNotifyAnimate2 = _interopRequireDefault(_PNotifyAnimate);

  var _PNotifyButtons2 = _interopRequireDefault(_PNotifyButtons);

  var _PNotifyCallbacks2 = _interopRequireDefault(_PNotifyCallbacks);

  var _PNotifyConfirm2 = _interopRequireDefault(_PNotifyConfirm);

  var _PNotifyDesktop2 = _interopRequireDefault(_PNotifyDesktop);

  var _PNotifyHistory2 = _interopRequireDefault(_PNotifyHistory);

  var _PNotifyMobile2 = _interopRequireDefault(_PNotifyMobile);

  var _PNotifyNonBlock2 = _interopRequireDefault(_PNotifyNonBlock);

  var _PNotifyStyleMaterial2 = _interopRequireDefault(_PNotifyStyleMaterial);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _PNotify2.default;
  exports.PNotify = _PNotify2.default;
  exports.PNotifyAnimate = _PNotifyAnimate2.default;
  exports.PNotifyButtons = _PNotifyButtons2.default;
  exports.PNotifyCallbacks = _PNotifyCallbacks2.default;
  exports.PNotifyConfirm = _PNotifyConfirm2.default;
  exports.PNotifyDesktop = _PNotifyDesktop2.default;
  exports.PNotifyHistory = _PNotifyHistory2.default;
  exports.PNotifyMobile = _PNotifyMobile2.default;
  exports.PNotifyNonBlock = _PNotifyNonBlock2.default;
  exports.PNotifyStyleMaterial = _PNotifyStyleMaterial2.default;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJQTm90aWZ5IiwiUE5vdGlmeUFuaW1hdGUiLCJQTm90aWZ5QnV0dG9ucyIsIlBOb3RpZnlDYWxsYmFja3MiLCJQTm90aWZ5Q29uZmlybSIsIlBOb3RpZnlEZXNrdG9wIiwiUE5vdGlmeUhpc3RvcnkiLCJQTm90aWZ5TW9iaWxlIiwiUE5vdGlmeU5vbkJsb2NrIiwiUE5vdGlmeVN0eWxlTWF0ZXJpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFZYUEsTztVQUNYQyxPO1VBQ0FDLGM7VUFDQUMsYztVQUNBQyxnQjtVQUNBQyxjO1VBQ0FDLGM7VUFDQUMsYztVQUNBQyxhO1VBQ0FDLGU7VUFDQUMsb0IiLCJmaWxlIjoic3JjL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQTm90aWZ5IGZyb20gJy4vUE5vdGlmeS5odG1sJztcbmltcG9ydCBQTm90aWZ5QW5pbWF0ZSBmcm9tICcuL1BOb3RpZnlBbmltYXRlLmh0bWwnO1xuaW1wb3J0IFBOb3RpZnlCdXR0b25zIGZyb20gJy4vUE5vdGlmeUJ1dHRvbnMuaHRtbCc7XG5pbXBvcnQgUE5vdGlmeUNhbGxiYWNrcyBmcm9tICcuL1BOb3RpZnlDYWxsYmFja3MuaHRtbCc7XG5pbXBvcnQgUE5vdGlmeUNvbmZpcm0gZnJvbSAnLi9QTm90aWZ5Q29uZmlybS5odG1sJztcbmltcG9ydCBQTm90aWZ5RGVza3RvcCBmcm9tICcuL1BOb3RpZnlEZXNrdG9wLmh0bWwnO1xuaW1wb3J0IFBOb3RpZnlIaXN0b3J5IGZyb20gJy4vUE5vdGlmeUhpc3RvcnkuaHRtbCc7XG5pbXBvcnQgUE5vdGlmeU1vYmlsZSBmcm9tICcuL1BOb3RpZnlNb2JpbGUuaHRtbCc7XG5pbXBvcnQgUE5vdGlmeU5vbkJsb2NrIGZyb20gJy4vUE5vdGlmeU5vbkJsb2NrLmh0bWwnO1xuaW1wb3J0IFBOb3RpZnlTdHlsZU1hdGVyaWFsIGZyb20gJy4vUE5vdGlmeVN0eWxlTWF0ZXJpYWwuaHRtbCc7XG5cbmV4cG9ydCB7XG4gIFBOb3RpZnkgYXMgZGVmYXVsdCxcbiAgUE5vdGlmeSxcbiAgUE5vdGlmeUFuaW1hdGUsXG4gIFBOb3RpZnlCdXR0b25zLFxuICBQTm90aWZ5Q2FsbGJhY2tzLFxuICBQTm90aWZ5Q29uZmlybSxcbiAgUE5vdGlmeURlc2t0b3AsXG4gIFBOb3RpZnlIaXN0b3J5LFxuICBQTm90aWZ5TW9iaWxlLFxuICBQTm90aWZ5Tm9uQmxvY2ssXG4gIFBOb3RpZnlTdHlsZU1hdGVyaWFsXG59O1xuIl19