define('foo', ['exports', 'module', 'foo/utils'], function (exports, module, _fooUtils) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  exports['default'] = _interopRequire(_fooUtils);
  module.exports = exports['default'];
});
define("foo/utils", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    kickDog: function kickDog() {}
  };
});