<template>
<section id="screenshots" class="app-screenshot section-padding">
  <div class="container">
    <div class="row">
      <div class="section-title text-center wow zoomIn">
        <h2>Screenshots</h2>
        <div class="line"></div>
        <p>Our awesome app screenshot gallery here.</p>
      </div>
      <div class="col-md-10 col-md-offset-1" v-if="slides">
        <carousel-3d :controls-visible="true" :inverse-scaling="1500" :space="800" :display="3" :height="170">
          <slide v-for="(slide, i) in slides" v-bind:key="i" :index="i">
            <img :src='slide.image_first.url' @click="showDetail(slide.image_first.id,$event)">
            <span class="title-3d">{{ slide.title }}</span>
          </slide>
        </carousel-3d>
      </div><!--- END COL -->
    </div><!--- END ROW -->
  </div><!--- END CONTAINER -->

  <vodal :show="show" animation="zoom" @hide="show=false" >
    <div class="row" v-if="contentModal" style="display: flex;flex-wrap: wrap;">
      <div class="col-md-7 col-sm-7 col-xs-12">
        <div class="single_feature_img">
          <img class="img-responsive wow bounceIn" :src="contentModal.image_first.url">
        </div>
      </div><!-- END COL-->
      <div class="col-md-5 col-sm-5 col-xs-12">

        <div class="single_feature_one">
          <h4>{{ contentModal.title }}</h4>
          <p v-html="contentModal.desc" style="text-align: justify;">{{ contentModal.desc }} </p>
        </div>

        <carousel-3d :disable3d="true" :space="155" :autoplay="true" :autoplay-timeout="2500" :height="70" :width="150" :display="contentModal.images.length" style="position: absolute;bottom: -10px;">
          <slide v-for="(slide, i) in contentModal.images" :index="i"  v-bind:key="i">
            <img :src='slide.url' @click="selectedImages(slide.url)">
          </slide>
        </carousel-3d>
      </div><!-- END COL-->
    </div>
  </vodal>

</section>
</template>
<script>

import Vodal from 'vodal'

// import Load from '@/components/Load'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  data () {
    return {
      slides: [],
      show: false,
      contentModal: ''
    }
  },
  components: {
    Carousel3d,
    Slide,
    Vodal
  },
  mounted () {
    this.getImages()
  },
  methods: {
    getImages () {
      this.$http.get(`api/v1/portofolio`).then(
        result => {
          this.slides = result.data.data
        }
      )
    },
    showDetail (id, event) {
      this.$http.get(`api/v1/portofolio/` + id).then(
        result => {
          this.contentModal = result.data.data
          this.show = true
        }
      )
    },
    selectedImages (url) {
      this.contentModal.image_first.url = url
    }
  }
}
</script>

<style lang="css" scoped>
.container{
  margin-top: 50px;
}
.title-3d{
    position: absolute;
    z-index: 1111111111;
    left: 0;
    padding: 10px;
}
.navbar{
  background: red !important;
}
.single_feature_one{
  padding-top: 5px !important;
}

.single_feature_one p {
    margin: 30px 0;
    font-size: 12px;
    text-align: left;
    color: #777777;
}
</style>

<style>
.vodal-dialog{
    width: 80% !important;
    height: fit-content !important;
}
</style>
