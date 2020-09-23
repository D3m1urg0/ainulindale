<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <app-hello-world msg="Welcome to Your Vue.js App" color="red" />
    <button @click="call">call</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    call() {
      this.axios.get("test");
    }
  }
};
</script>
