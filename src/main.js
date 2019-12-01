import Vue from 'vue'
import App from './App'
import router from './router'

import toastr from 'vue-toastr'
import VueTyper from 'vue-typer'
import Vodal from 'vodal'

Vue.use(toastr)
Vue.use(VueTyper)
Vue.use(Vodal)

require('./assets/approck/bootstrap/css/bootstrap.min.css')
require('./assets/approck/fonts/font-awesome.min.css')
require('./assets/approck/css/animate.css')
require('vodal/common.css')
require('vodal/zoom.css')

require('./assets/approck/css/style.css')

require('./assets/approck/js/jquery-1.12.4.min.js')
require('./assets/approck/bootstrap/js/bootstrap.min.js')

require('./assets/approck/js/scripts.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vodal,
  render: h => h(App)
})
