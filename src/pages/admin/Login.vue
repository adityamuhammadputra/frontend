<template>
 <div>
    <h4>Login</h4>
    <form>
        <label for="email" >E-Mail Address</label>
        <div>
            <input id="email" type="email" v-model="email" required autofocus>
        </div>
        <div>
            <label for="password" >Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>
        </div>
        <div>
            <button type="button" @click="handleSubmit">
                Login
            </button>
        </div>
    </form>
</div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      if (this.password.length > 7) {
        this.$http.post(`/api/v1/login`, {
          email: this.email,
          password: this.password
        }).then(response => {
          localStorage.setItem('jwt', response.data.token)
          if (localStorage.getItem('jwt') !== null) {
            this.$emit('loggedIn')
            if (this.$route.params.nextUrl !== null) {
              // this.$router.push(this.$route.params.nextUrl)
              // this.$router.push(this.$route.query.redirect)
              this.$routers.push('admin')
              console.log('x')
            } else {
              this.$router.push('admin')
              // if (is_admin === 1) {
              //   this.$router.push('admin')
              // } else {
              //   this.$router.push('admin')
              // }
            }
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style>

</style>
