<template>
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
  <div class="row">
    <ol class="breadcrumb">
      <li><a href="#">
        <em class="fa fa-home"></em>
      </a></li>
      <li class="active">Dashboard</li>
    </ol>
  </div><!--/.row-->
  <div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          Page Portopolio
          <button type="button" class="btn btn-sm btn-primary pull-right"><i class="fa fa-plus"></i> Tambah</button>
        </div>
        <div class="panel-body">
          <!-- <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field> -->
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            loading loading-text="Loading... Please wait"
          >
        </v-data-table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        // {
        //   text: 'Dessert (100g serving)',
        //   align: 'left',
        //   sortable: false,
        //   value: 'name'
        // },
        { text: 'Calories', value: 'id' },
        { text: 'Fat (g)', value: 'title' },
        { text: 'Carbs (g)', value: 'desc' },
        // { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'updated_at' }
      ],
      desserts: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get(`../api/v1/portofolio`).then(
        result => {
          this.desserts = result.data.data
        }
      )
    }
  }
}
</script>
