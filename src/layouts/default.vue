<template>
  <div class="container flex flex-col items-center mx-auto">
    <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/FormExample">Form Example</router-link> |
      <router-link to="/About">About</router-link>
    </div>
    <router-view />
    <p>This is a default layout</p>
  </div>
</template>
