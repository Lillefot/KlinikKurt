cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "pluginId": "org.apache.cordova.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "pluginId": "org.apache.cordova.console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "pluginId": "org.apache.cordova.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "pluginId": "org.apache.cordova.device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "pluginId": "org.apache.cordova.device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "pluginId": "org.apache.cordova.device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "pluginId": "org.apache.cordova.device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "pluginId": "org.apache.cordova.device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "pluginId": "org.apache.cordova.dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "pluginId": "org.apache.cordova.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "pluginId": "org.apache.cordova.network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "pluginId": "org.apache.cordova.network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-splashscreen": "3.2.2"
}
// BOTTOM OF METADATA
});