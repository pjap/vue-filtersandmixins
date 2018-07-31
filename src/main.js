import Vue from 'vue'
import App from './App.vue'

Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('lowercase', (value) => {
  value = value.toString()
  return value.toLowerCase()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
