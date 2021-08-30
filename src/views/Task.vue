<template>
  <div class="task">
    <div v-if="task.completed" class="completed">
      ВНИМАНИЕ! Задача Завершена
    </div>
    <div class="field">
      <div class="field-name">Название</div>
      <div class="field-value">{{ task.title }}</div>
    </div>
    <div class="field">
      <div class="field-name">Дедлайн</div>
      <div class="field-value">
        {{ task.deadline }} <span :class="restTime > 5 ? 'ok' : 'no'">(У вас осталось {{ restTime }} дней)</span>
      </div>

    </div>
    <div class="field">
      <div class="field-name">Описание</div>
      <div class="field-value">{{ task.description }}</div>
    </div>


    <button @click="removeItem">Удалить</button>
    <button v-if="completed === false" @click="completed">Завершить</button>
  </div>
</template>


<script>
  export default {
    methods: {
      completed: function () {
        this.$store.commit('completedTask', this.task.id);
        this.$router.push('/tasks')
      },
      removeItem: function () {
        this.$store.commit('removeTask', this.task.id);
        this.$router.push('/tasks')
      }
    },
    computed: {
      restTime: function() {
        const dateArr = this.task.deadline.split('-');
        const mounts = +dateArr[1] - 1;
        const a = new Date(+dateArr[0], mounts, +dateArr[2]).getTime();
        const b = new Date().getTime();
        const result = (a - b) / (1000 * 60 * 60 * 24);

        return Math.ceil(result);
      },
      task: function () {
        let task;
        this.$store.state.tasksList.forEach( item => {
          if (item.id === +this.$route.params.id) {
            task = item;
          }
        });
        return task;
      }
    },
    mounted() {}
  }
</script>


<style scoped>
  .task {
    margin: 40px auto 0;
    width: 50%;
  }
  .field {
    margin-bottom: 15px;
  }
  .field-name {
    font-size: 22px;
  }
  .no {
    color: red;
  }
</style>
