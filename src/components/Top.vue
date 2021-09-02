<template>
  <div class="top">
    <h2>ToDo List</h2>
    <input type="text" placeholder="Click Enter to add a task..." v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'Top',
  props: ['receive'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      if (!this.title.trim()) return
      const todoObj = { id: nanoid(), title: this.title, complete: false }
      this.receive(todoObj)
      this.title = ''
    }
  }
}
</script>

<style scoped>
.top {
  text-align: center;
}

.top input {
  display: block;
  width: 95%;
  height: 30px;
  margin: -10px auto;
  border-radius: 5px;
  outline: none;
}
</style>
