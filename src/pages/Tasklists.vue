<template>
  <div>
    <TaskForm @task-added="handleTaskAdded" />
    
    <!-- Display tasks -->
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <strong>{{ task.name }}</strong>: {{ task.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import TaskForm from './Taskform.vue';

export default {
  components: {
    TaskForm
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    handleTaskAdded(newTask) {
      // Add the new task to the tasks array
      this.tasks.push(newTask);
    }
  }
};
</script>
