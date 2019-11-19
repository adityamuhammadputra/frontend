<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12 wow zoomIn" style="visibility: visible; animation-name: zoomIn;">
          <div class="copyright">
            <p>{{ copy }}</p>
          </div><!--- END FOOTER COPYRIGHT -->
        </div><!--- END COL -->
        <div class="col-md-6 col-sm-6 col-xs-12 wow zoomIn" style="visibility: visible; animation-name: zoomIn;">
          <div class="footer_social pull-right">
            <ul>
              <li><a class="f_facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="f_twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="f_google" href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a class="f_linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="f_youtube" href="#"><i class="fa fa-youtube"></i></a></li>
              <li><a class="f_skype" href="#"><i class="fa fa-skype"></i></a></li>
            </ul>
          </div>
        </div><!--- END COL -->
      </div><!--- END ROW -->
    </div><!--- END CONTAINER -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      copy: 'Copyright © 2017 |    All Rights Reserved'
    }
  }
}

</script>

<style scoped>
  h3 {
    background:red;
  }
</style>
