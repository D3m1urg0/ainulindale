<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <app-hello-world msg="Welcome to Your Vue.js App" color="red" />
    <div class="flex flex-col">
      <button @click="call">call</button>
      <button @click="chiama">chiamata</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "@/plugins/axios";
***REMOVED***
  name: "Home",
  setup() {
    const call = function() {
      axios.get("test");
  ***REMOVED***;
    return { call ***REMOVED***
***REMOVED***
***REMOVED***
</script>
