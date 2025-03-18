<template>
  <div>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggle"
        @edit="edit"
        @delete="deleteTask"
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
      console.log('toggle', id);
      this.$emit('toggle', id);
    },
    edit(task) {
      this.$emit('edit', task);
    },
    deleteTask(id) {
      console.log('delete', id);
      this.$emit('delete', id);
    }
  }
};
</script>
