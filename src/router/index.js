import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Portofolio from '@/pages/Portofolio'

import PageNotFound from '@/pages/NotFound'

import Login from '@/pages/admin/Login'
import AdminPortofolio from '@/pages/admin/portofolio'

import { TokenService } from '@/services/storage.service'

Vue.use(Router)

Vue.prototype.$routers = Router

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/portofolio',
      component: Portofolio,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '*',
      component: PageNotFound,
      meta: {
        public: true, // tambahan auth
        onlyWhenLoggedOut: true // tambahan auth
      }
    },
    {
      path: '/admin',
      meta: {
        public: true, // tambahan auth
        onlyWhenLoggedOut: true // tambahan auth
      }
    },
    {
      path: '/admin/portopolio',
      component: AdminPortofolio,
      meta: {
        public: true, // tambahan auth
        onlyWhenLoggedOut: true // tambahan auth
      }
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
// tambahan auth
router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken()
  // console.log(())
  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }
  next()
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem('jwt') === null) {
//       next({
//         path: '/login',
//         params: { nextUrl: to.fullPath }
//       })
//     } else {
//       let user = JSON.parse(localStorage.getItem('user'))
//       if (to.matched.some(record => record.meta.is_admin)) {
//         if (user.is_admin === 1) {
//           next()
//         } else {
//           next({name: 'admin'})
//         }
//       } else {
//         next()
//       }
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (localStorage.getItem('jwt') === null) {
//       next()
//     } else {
//       next({name: 'admin'})
//     }
//   } else {
//     next()
//   }
// })

export default router
