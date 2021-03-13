<template>
  <div id="app">
    <main-form></main-form>
  </div>
</template>

<script>
import MainForm from './components/MainForm.vue'

export default {
  name: 'App',
  components: {
    MainForm,
  }
}
</script>

<style>
@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"),
   url(fonts/Gilroy-Regular.ttf) format("truetype");
}
#app {
  font-family: Gilroy, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #787D89;
  margin-top: 60px;
}
</style>
