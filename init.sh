#!/bin/sh

cordova create smartpos com.plutuspay.smartpos SmartPos
cd smartpos
cordova platform add android
vue add cordova         # add vue-cli-plugin-cordova and invoke it

cordova plugin add cordova-plugin-code-push
cordova plugin add cordova-plugin-advanced-http
cordova plugin add cordova-plugin-geolocation
cordova plugin add cordova-sqlcipher-adapter
cordova plugin add cordova-plugin-app-launcher
cordova plugin add cordova-plugin-qrscanner

yarn run cordova-build   # make sure you can build your project
cordova prepare

cordova build android --release -- --gradleArg=-PcdvBuildMultipleApks=true
