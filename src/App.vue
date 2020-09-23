<template>
  <Nav class="mb-6" />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" class="text-center" />
  <div class="container mx-auto py-10"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
