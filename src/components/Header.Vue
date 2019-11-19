<template>
  <div class="navbar navbar-default navbar-fixed-top menu-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand"><img src="../assets/approck/img/logo.png" alt="logo"></router-link>
      </div>
      <div class="navbar-collapse collapse">
        <nav>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/portofolio">Portofolio</router-link></li>
          </ul>
        </nav>
      </div>
    </div><!--- END CONTAINER -->
  </div>
</template>

<style scoped>
.router-link-exact-active{
  color: #ff5f83 !important;
}
</style>
