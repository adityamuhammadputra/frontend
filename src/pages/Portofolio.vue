<template>
<section id="screenshots" class="app-screenshot section-padding">
  <div class="container">
    <div class="row">
      <div class="section-title text-center wow zoomIn">
        <h2>Screenshots</h2>
        <div class="line"></div>
        <p>Our awesome app screenshot gallery here.</p>
      </div>
      <div class="col-md-10 col-md-offset-1">
        <carousel-3d :controls-visible="true" :inverse-scaling="1500" :space="800" :display="3">
          <slide v-for="(slide, i) in slides" v-bind:key="i" :index="i">
            <img :src='slide.image_first.url' v-on:click="test(slide.image_first.title,$event)">
            <span class="title-3d">{{ slide.title }}</span>
          </slide>
        </carousel-3d>
      </div><!--- END COL -->
    </div><!--- END ROW -->
  </div><!--- END CONTAINER -->

  <vodal :show="show" animation="zoom" @hide="show = false">
      <div>{{ titleModal }}</div>
  </vodal>
</section>
</template>
<script>

import axios from 'axios'
import Vodal from 'vodal'

// import Load from '@/components/Load'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  data () {
    return {
      slides: [],
      show: false,
      titleModal: ''
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
      axios.get(`api/v1/portofolio`).then(
        result => {
          // this.slides = []
          this.slides = result.data.data
        }
      )
    },
    test (title, event) {
      console.log(event.target.src)
      console.log(title)
      this.show = true
      this.titleModal = title
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
</style>

<style lang="css" scoped>
.navbar{
  background: red !important;
}
</style>
