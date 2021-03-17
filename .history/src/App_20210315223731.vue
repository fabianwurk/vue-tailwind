<template>
  <Tail />
</template>

<script setup>
import Tail from './components/Tail.vue'
import Wind from './components/Wind.vue'

export default {
  name: "App",
  components: {
    Tail,
    Wind,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>