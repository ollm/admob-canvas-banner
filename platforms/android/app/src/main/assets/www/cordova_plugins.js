cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "admob-plus-cordova.AdMob",
      "file": "plugins/admob-plus-cordova/www/admob.js",
      "pluginId": "admob-plus-cordova",
      "clobbers": [
        "admob"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "admob-plus-cordova": "0.0.0"
  };
});