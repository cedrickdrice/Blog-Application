/**
 * Load all of this project's JavaScript dependencies which
 * includes Vue and other libraries.
 */
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

// Make BootstrapVue available throughout the project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Import Composition API Use
Vue.use(VueCompositionAPI);
// Initialize global use of axios
window.axios = require('axios');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


/**
 * Create a a Vue application instance and attach it to the page.
 */
const app = new Vue({
    el: '#app',
});
