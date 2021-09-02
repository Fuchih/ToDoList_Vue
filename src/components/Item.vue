<template>
  <li>
    <input type="checkbox" :checked="todo.complete" @change="handleCheck(todo.id)" />
    <span>{{ todo.title }}</span>
    <button @click="del(todo.id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ['todo', 'checkTodo','deleteTodo'],
  methods: {
    handleCheck(id) {
      this.checkTodo(id)
    },
    del(id){
      if(confirm('Did you Complete your working?')){
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
li {
  margin: 3px;
  border-bottom: 1px solid;
  background-color: #ccc;
}

li button {
  display: none;
  float: right;
  margin-top: 1px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: crimson;
  cursor: pointer;
}

li:hover {
  background-color: #fff;
}

li:hover button {
  display: block;
}
</style>
