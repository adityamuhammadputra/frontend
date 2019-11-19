<template>
  <div v-if="loading" class="container">
    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
    </content-placeholders>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // loading: false
    }
  }
}
</script>
