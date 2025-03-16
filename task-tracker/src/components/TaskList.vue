<template>
  <div>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggle"
        @delete="delete"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  props: {
    tasks: Array
  },
  methods: {
    toggle(id) {
      this.$emit('toggle', id);
    },
    deleteTask(id) {
      this.$emit('delete', id);
    }
  }
};
</script>
