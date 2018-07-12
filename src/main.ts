
import cordovaLoader from "./cordovaLoader";
// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Init F7-Vue Plugin

// Import F7 Styles
import  'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import   './css/icons.css';
import   './css/app.css';

// Import App Component
import App from './app.vue';
// Init F7 Vue Plugin
Framework7.use( Framework7Vue)
Vue.config.productionTip = true;

cordovaLoader(()=>{
// Init App
    console.log("cordova is ready!")
    new Vue({
        render: (h) => h(App),
    }).$mount('#app');
});