var esTranspiler = require('broccoli-babel-transpiler');
var concat = require('broccoli-concat');
var pkg = require('./package.json');

var src = esTranspiler('src', {
  moduleIds: true,
  modules: 'amd',
  getModuleId: function (name) { 
    return name.replace(/\/index$/, '');
  },
  // Fix relative imports inside /index's
  resolveModuleSource: function (source, filename) {
    var match = filename.match(/(.+)\/index\.\S+$/i);

    // is this an import inside an /index file?
    if (match) {
      var path = match[1];
      return source
        .replace(/^\.\//, path + '/')
        .replace(/^\.\.\//, '');
    } else {
      return source;
    }
  }
});

module.exports = concat(src, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/' + pkg.name + '.js'
});