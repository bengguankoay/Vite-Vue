<template>
  <div id="app">
    <h1>Task Tracker</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="New Task" />
    <TaskList :tasks="tasks" @toggle="toggleTask" @delete="deleteTask" />
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    TaskList
  },
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ id: Date.now(), text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
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
