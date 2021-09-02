<template>
  <div class="list">
    <ul>
      <Item v-for="obj in todos" :key="obj.id" :todo="obj" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'List',
  components: { Item },
  props: ['todos', 'checkTodo', 'deleteTodo']
}
</script>

<style scoped>
.list {
  margin-top: 20px;
}

.list ul {
  min-height: 100px;
  border-radius: 5px;
  background-color: #ccc;
}

.list ul {
  padding: 0;
}
</style>
