<template>
  <div class="list">
    <ul class="ul collection">
      <li :class="task.completed ? 'completed' : ''" class="li collection-item" v-for="task in taskList" :key="task.id">
        <span class="title">{{ task.title }}</span>
        <div class="deadline">{{ task.deadline }}</div>
        <router-link :to="{name: 'Task', params: { id: task.id }}">open</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        taskList: this.$store.state.tasksList
      }
    }
  }
</script>


<style scoped>
  .completed {
    opacity: .4;
  }
  .list {
    margin: 40px auto 0;
    width: 50%;
  }
  .deadline {
    width: 90px;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
  .title {
    width: 50%;
    margin-right: 20px;
  }
</style>
