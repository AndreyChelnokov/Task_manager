<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import '../node_modules/materialize-css/dist/css/materialize.min.css';

export default {
  components: {NavBar},
  mounted() {
    console.log(this.$store.state.tasksList)
  }
}
</script>
