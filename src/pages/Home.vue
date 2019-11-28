<template>
<div>
  <section data-stellar-background-ratio="0.3" id="home" class="home_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">

        </div><!--- END COL -->
        <div class="col-md-6 col-sm-12 col-xs-12 text-center">
          <div class="hero-text">
              <h2><vue-typer text="Hello My Name ADIT :)"></vue-typer></h2>
              <p>{{ home.desc }}</p>
            <div class="home_btn">
              <i v-for="detail in home.details" v-bind:key="detail.id">
                <a :href="detail.link" target="_blank" class="app-btn wow bounceIn" data-wow-delay=".6s" ><i :class="detail.icon"></i></a>
              </i>
            </div>
          </div>
        </div><!--- END COL -->
      </div><!--- END ROW -->
    </div><!--- END CONTAINER -->
  </section>
  <section class="our-address section-padding">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 col-sm-4 col-xs-12" v-for="contact in home.contacts" v-bind:key="contact.id">
          <div class="single_address">
            <i :class="contact.icon"></i>
            <h4>{{ contact.title }}</h4>
            <p>{{ contact.desc }}</p>
          </div>
        </div><!-- END COL -->
      </div><!-- END ROW -->
    </div><!--- END CONTAINER -->
  </section>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      home: ''
    }
  },
  mounted () {
    this.getData()
  },

  methods: {
    getData () {
      axios.get(`api/v1/home`).then(
        result => {
          this.home = result.data.data
        },
        error => {
          console.error(error)
        }
      )
    }
  }

}
</script>

<style scoped>
.home_bg{
  background-image: url('../assets/header2.jpg');
  background-size:cover;
  background-position: center center;
}
h2{
  text-transform: inherit !important;
  color: white;
}
.custom.char.typed{
  color: white !important;
}
.hero-text p{
  /* color: #ff5f83; */
      color: #3ed6da;
}
</style>

<style >
.vue-typer .custom.caret.typing {
  background-color: #009688;
}
.vue-typer .custom.char.typed {
  color: white;
}
</style>
