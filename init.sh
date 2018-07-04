#!/bin/sh

cordova create smartpos com.plutuspay.smartpos SmartPos
cd smartpos
cordova platform add android
cordova plugin add cordova-plugin-code-push
cordova plugin add cordova-plugin-advanced-http
cordova plugin add cordova-plugin-geolocation
cordova plugin add cordova-sqlcipher-adapter
cordova plugin add cordova-plugin-app-launcher
cordova plugin add cordova-plugin-qrscanner
