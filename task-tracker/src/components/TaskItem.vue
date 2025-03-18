<template>
  <li>
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
    <button @click="toggle">Toggle</button>
    <button @click="edit">Edit</button>
    <button @click="deleteTask">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.task.id);
    },
    edit() {
      this.$emit('edit', this.task);
    },
    deleteTask() {
      this.$emit('delete', this.task.id);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
button {
  margin-left: 5px;
}
</style>
