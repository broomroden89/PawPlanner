
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('paw-planner-register', require('./components/Register.vue'))
Vue.component('paw-planner-plan-selecter', require('./components/PlanSelector.vue'))
Vue.component('paw-planner-offer-input', require('./components/OfferInput.vue'))

window.Event = new Vue();

((win, doc, $, undefined) => {
  new Vue({
      el: '#app',
      data() {
          return {
              //
          }
      },
      mounted() {
          //
      },
      methods: {
          dosh(value) {
              return '£'+parseFloat(Math.round(value * 100) / 100).toFixed(2)
          },
          percentage(value, percentage) {
              return Math.round(Math.abs(value * (percentage / 100) * 100)) / 100
          }
      }
  })
})(window, document, jQuery)