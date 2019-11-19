<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('/api/v1/login', {
        email: this.email,
        password: this.password
      }).then(request => this.loginSuccessful(request)
      ).catch(() => this.loginFailed())
    },

    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }

      localStorage.token = req.data.token
      this.error = false

      this.Router.replace(this.Router.query.redirect || '/list')
    }
  }
}
</script>
