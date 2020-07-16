import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store';
import firebase from 'firebase'


Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDgFemyTKXVrVt1MHd4gik0zox6lXiygfU",
  authDomain: "mcaexpf-2020.firebaseapp.com",
  databaseURL: "https://mcaexpf-2020.firebaseio.com",
  projectId: "mcaexpf-2020",
  storageBucket: "mcaexpf-2020.appspot.com",
  messagingSenderId: "516312906962",
  appId: "1:516312906962:web:389eec529241b08943410b",
  measurementId: "G-132GKBK5TS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')