import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyB3lNyxWQlCfSJUI0YhxjSrApm0vOwHyQQ",
  authDomain: "loginquick-0823.firebaseapp.com",
  databaseURL: "https://loginquick-0823.firebaseio.com",
  projectId: "loginquick-0823",
  storageBucket: "loginquick-0823.appspot.com",
  messagingSenderId: "649089004725",
  appId: "1:649089004725:web:c32242b9e1df7ab2fefafc",
  measurementId: "G-H6MCZCLTY3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const EventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

