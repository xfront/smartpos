import 'typeface-roboto';
import 'material-design-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.css';
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import cordovaLoader from './cordovaLoader';
import vuetify from 'vuetify';

Vue.config.productionTip = false;

Vue.use(vuetify, {
    theme: {
        primary: "#f44336",
        secondary: "#e57373",
        accent: "#9c27b0",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    }

});

cordovaLoader(() => {
  console.log("cordova is ready!")
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
