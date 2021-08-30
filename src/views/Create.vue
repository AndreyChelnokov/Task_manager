<template>
  <div class="home">
    <div class="row">
      <form @submit.prevent="addTask" class="col s6 center-block offset-l3">
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Название" id="title" type="text" class="validate" v-model="title">
          </div>
          <div class="input-field col s12">
            <input placeholder="Дедлайл" id="time" type="date" class="validate" v-model="deadline">
          </div>
          <div class="input-field col s12">
            <textarea name="" id="" cols="30" rows="10" style="max-width: 100%" v-model="description"></textarea>
          </div>
          <div class="input-field col s12">
            <button type="submit" class="waves-effect waves-light btn">Add</button>
          </div>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      deadline: '',
      description: ''
    }
  },
  methods: {
    addTask() {
      let id = 0;

      if (this.$store.state.tasksList.length != 0) {
        id = this.$store.state.tasksList[this.$store.state.tasksList.length - 1].id + 1
      } else {
        id = 0;
      }

      this.$store.commit('addTask', {
        id: id,
        title: this.title,
        deadline: this.deadline,
        description: this.description,
        completed: false
      })

      this.$router.push('/tasks')
    }
  }
}
</script>
