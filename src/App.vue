<template>
  <div id="root">
    <div class="container">
      <Top :receive="receive" />
      <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
      <Bottom :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
    </div>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import List from './components/List.vue'
import Bottom from './components/Bottom.vue'

export default {
  name: 'App',
  components: { Top, List, Bottom },
  data() {
    return {
      todos: [
        { id: '001', title: 'Your First Task !', complete: true },
      ]
    }
  },
  methods: {
    //add a task
    receive(todoObj) {
      this.todos.unshift(todoObj)
    },
    // checkbox checked or not
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.complete = !todo.complete
      })
    },
    // delete a task
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    // check all the tasks
    checkAllTodo(complete) {
      this.todos.forEach((todo) => {
        todo.complete = complete
      })
    },
    // delete all the complete tasks
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.complete
      })
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  word-wrap: break-word;
}

body {
  font-family: 'Helvetica Neue', Helvetica;
  background-color: #ccc;
}

ul {
  list-style: none;
}

.container {
  width: 50%;
  max-width: 500px;
  margin: 100px auto;
  border-radius: 5px;
  box-shadow: 5px 5px 15px;
  background-color: darkgrey;
}
</style>
