import Vue from 'vue'
import App from './App'
import router from './router'

import toastr from 'vue-toastr'
import VueTyper from 'vue-typer'
import Vodal from 'vodal'
import Axios from 'axios'
import vuetify from '@/plugins/vuetify'

import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'

Vue.use(toastr)
Vue.use(VueTyper)
Vue.use(Vodal)

Vue.prototype.$http = Axios

require('./assets/approck/bootstrap/css/bootstrap.min.css')
require('./assets/approck/fonts/font-awesome.min.css')
require('./assets/approck/css/animate.css')
require('vodal/common.css')
require('vodal/zoom.css')

require('./assets/approck/css/style.css')

require('./assets/approck/js/jquery-1.12.4.min.js')
require('./assets/approck/bootstrap/js/bootstrap.min.js')

// require('./assets/vue.js')
// require('./assets/vuetify.js')

require('./assets/approck/js/scripts.js')
require('./assets/admin/js/custom.js')

Vue.config.productionTip = false

ApiService.init(process.env.VUE_APP_ROOT_API)
// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vodal,
  vuetify,
  render: h => h(App)
})
