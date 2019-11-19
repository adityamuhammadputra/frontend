<template>
  <div class="hello">
    <div id="todo-list-example" class="container">
      <div class="raw">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">Todo</h1>
          <form v-on:submit.prevent="addNewTask">
            <label for="title"> Title</label>
            <input v-model="title" id="title" class="form-control" placeholder="Masukan judul">
            <button v-if="this.isEdit == false" type="submit" class="btn btn-success btn-sm">
              Submit
            </button>
            <button v-else type="button" v-on:click="updateTask()" class="btn btn-primary">
              Update
            </button>
          </form>

          <table>
            <tr v-for="(todo) in todos" v-bind:key="todo.id" v-bind:title="todo.title">
              <td class="text-left">{{ todo.title }}</td>
              <td>
                <button v-on:click="editTask(todo.title,todo.id)" class=" btn btn-sm btn-warning "> Edit </button>
                <button v-on:click="deleteTask(todo.id)" class=" btn btn-sm btn-danger "> Delete </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      todos: [],
      id: '',
      title: '',
      isEdit: false
    }
  },
  mounted () {
    this.getTaks()
  },
  methods: {
    getTaks () {
      axios.get(`api/v1/todos`).then(
        result => {
          console.log(result.data)
          this.$toastr.e('SUCCESS MESSAGE', 'Success Toast Title')
          // this.$notify({
          //   group: 'foo',
          //   title: 'Important message',
          //   text: 'Hello user! This is a notification!'
          // })
          this.todos = result.data
        },
        error => {
          console.error(error)
        }
      )
    },

    addNewTask () {
      axios.post(`/api/v1/todos`, {
        title: this.title
      }).then((res) => {
        this.title = ''
        this.getTaks()
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },

    editTask (title, id) {
      this.id = id
      this.title = title
      this.isEdit = true
    },

    updateTask () {
      axios.patch(`/api/v1/todos/${this.id}`, {
        title: this.title
      }).then((res) => {
        this.title = ''
        this.isEdit = false
        this.getTaks()
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },

    deleteTask (id) {
      axios.delete(`/api/v1/todos/${this.id}`
      ).then((res) => {
        this.title = ''
        this.getTaks()
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }

  }
}
</script>
