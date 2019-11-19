<template>
<section id="screenshots" class="app-screenshot section-padding">
  <div class="container">
    <div class="row">
      <div class="section-title text-center wow zoomIn">
        <h2>XXXXXX</h2>
        <div class="line"></div>
        <p>Our awesome dev screenshot gallery here.</p>
      </div>
      <div class="col-md-10 col-md-offset-1">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="image" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        >
        </div>
      </div><!--- END COL -->
    </div><!--- END ROW -->
  </div><!--- END CONTAINER -->
</section>
</template>
<script>
import axios from 'axios'
import VueGallery from 'vue-gallery'
// import Load from '@/components/Load'

export default {
  data () {
    return {
      images: [],
      loading: true,
      index: null
    }
  },
  mounted () {
    this.getImages()
  },
  methods: {
    getImages () {
      axios.get(`api/v1/images`).then(
        result => {
          this.images = result.data.data
          this.loading = true
        },
        error => {
          console.error(error)
        }
      )
    }
    // loading (load) {
    //   (load == true) ? alert('true') : alert('hiede')
    // }
  },
  components: {
    'gallery': VueGallery
  }
}
</script>

<style lang="css" scoped>
.container{
  margin-top: 50px;
}
.section-title {
  margin: auto;
}

.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }

</style>

<style lang="css" scoped>
.navbar{
  background: red !important;
}
</style>
