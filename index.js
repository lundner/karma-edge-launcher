// Karma Edge Launcher
// =================

// Dependencies
// ------------

var resolve = require('resolve')

// Constructor
function EdgeBrowser (baseBrowserDecorator) {
  baseBrowserDecorator(this)

  this._getOptions = function (url) {
    return [url, '-k']
  }
}

EdgeBrowser.prototype = {
  name: 'Edge',
  DEFAULT_CMD: {
    win32: resolve.sync('edge-launcher/Win32/MicrosoftEdgeLauncher.exe')
  },
  ENV_CMD: 'EDGE_BIN'
}

EdgeBrowser.$inject = ['baseBrowserDecorator']

// Publish di module
// -----------------

module.exports = {
  'launcher:Edge': ['type', EdgeBrowser]
}
