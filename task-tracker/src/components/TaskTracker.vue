<template>
  <div>
    <h1>Task Tracker</h1>
    <input v-model="newTask" @keyup.enter="handleAddTask" placeholder="New Task" />
    <TaskList :tasks="tasks" @toggle="toggleTask" @delete="deleteTask" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TaskList from './TaskList.vue';

export default {
  name: 'TaskTracker',
  components: {
    TaskList
  },
  data() {
    return {
      newTask: ''
    };
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['addTask', 'toggleTask', 'deleteTask']),
    handleAddTask() {
      if (this.newTask.trim()) {
        this.addTask({ id: Date.now(), text: this.newTask, completed: false });
        this.newTask = '';
      }
    }
  }
};
</script>

<style scoped>
input {
  padding: 8px;
  margin: 10px 0;
  font-size: 14px;
}
</style>
