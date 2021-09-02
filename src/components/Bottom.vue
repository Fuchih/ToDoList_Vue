<template>
  <div>
    <div class="bottom" v-show="total">
      <input type="checkbox" v-model="isAll" /> Done: {{ doneTotal }} / Total: {{ total }}
      <button @click="clearAll">Clean</button>
    </div>
    <div class="hint" v-show="!total">Let's make a plan!</div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      let i = 0
      this.todos.forEach((todo) => {
        if (todo.complete) i++
      })
      return i
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0
      },
      set(value) {
        this.checkAllTodo(value)
      }
    }
  },
  methods: {
    clearAll() {
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  margin: 10px 0 10px 20px;
  padding: 5px 10px;
  border: 0;
  border-radius: 3px;
  color: #fff;
  background-color: darkslateblue;
  cursor: pointer;
}

button:active {
  transform: scale(0.98);
}

.hint {
  margin-top: -20px ;
  padding: 20px;
  text-align: center;
}
</style>
