<template>
  <div>
    <h1>Task Tracker</h1>
    <input v-model="newTask" @keyup.enter="handleAddTask" placeholder="New Task" />
    <TaskList :tasks="tasks" @toggle="toggleTask" @delete="deleteTask" @edit="editTask" />
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
      newTask: '',
      editingTask: null
    };
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['fetchTasks', 'addTask', 'updateTask', 'deleteTask', 'toggleTask']),
    handleAddTask() {
      if (this.newTask.trim()) {
        if (this.editingTask) {
          this.updateTask({ ...this.editingTask, title: this.newTask });
          this.editingTask = null;
        } else {
          this.addTask({ title: this.newTask, completed: false });
        }
        this.newTask = '';
      }
    },
    editTask(task) {
      this.newTask = task.title;
      this.editingTask = task;
    }
  },
  created() {
    this.fetchTasks();
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
