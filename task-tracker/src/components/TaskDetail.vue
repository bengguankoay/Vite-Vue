<template>
  <div>
    <h1>Task Detail</h1>
    <p>Task ID: {{ id }}</p>
    <p>Task Name: {{ task?.text }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TaskDetail',
  props: ['id'],
  computed: {
    ...mapState(['tasks']),
    task() {
      return this.tasks.find((task) => task.id === parseInt(this.id));
    }
  }
};
</script>
