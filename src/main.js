import Vue from 'vue'
import App from './App'
import router from './router'

import toastr from 'vue-toastr'
import VueTyper from 'vue-typer'

Vue.use(toastr)
Vue.use(VueTyper)

require('./assets/approck/bootstrap/css/bootstrap.min.css')
require('./assets/approck/fonts/font-awesome.min.css')
require('./assets/approck/css/animate.css')
require('./assets/approck/css/style.css')

require('./assets/approck/js/jquery-1.12.4.min.js')
require('./assets/approck/bootstrap/js/bootstrap.min.js')

require('./assets/approck/js/scripts.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
