<template>
<div>
  <section data-stellar-background-ratio="0.3" id="home" class="home_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-12 col-xs-12">
        <div class="hero-text">
            <h2><vue-typer text='Hello My name ADIT :)' ></vue-typer></h2>
            <p>Come on Follow me at on my boring Social Media !</p>
          <div class="home_btn">
            <a href="www.intagram.com/adityamuhammadputra" target="_blank" class="app-btn wow bounceIn" data-wow-delay=".6s" ><i class="fa fa-instagram"></i></a>
            <a href="www.facebook.com/adtptr" target="_blank" class="app-btn wow bounceIn" data-wow-delay=".6s" ><i class="fa fa-twitter"></i></a>
            <a href="www.youtube.com/adityamuhammadputra" target="_blank" class="app-btn wow bounceIn" data-wow-delay=".8s" ><i class="fa fa-youtube"></i></a>
          </div>
        </div>
        </div><!--- END COL -->
        <div class="col-md-4 col-sm-12 col-xs-12 text-center">
        <div class="hero-text-img">
          <img src="../assets/temp.png" alt="" />
        </div>
        </div><!--- END COL -->
      </div><!--- END ROW -->
    </div><!--- END CONTAINER -->
  </section>
  <section class="our-address section-padding">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="single_address">
            <i class="fa fa-map-marker"></i>
            <h4>Our Location</h4>
            <p>Cinagara Village, Caringin, Bogor district, 16730. Indonesia Raya</p>
          </div>
        </div><!-- END COL -->
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="single_address">
            <i class="fa fa-phone"></i>
            <h4>Telephone</h4>
            <p>+62 81 6262 439</p>
          </div>
        </div><!-- END COL -->
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="single_address">
            <i class="fa fa-envelope-o"></i>
            <h4>Send email</h4>
            <p>adityamuhammadputra@gmail.com</p>
          </div>
        </div><!-- END COL -->
      </div><!-- END ROW -->
    </div><!--- END CONTAINER -->
  </section>
</div>
</template>

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
  color: #ff5f83;
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
