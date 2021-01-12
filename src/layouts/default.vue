<template>
  <div class="container flex flex-col items-center mx-auto">
    <div id="nav">
      <router-link to="/">Formvuelate Test</router-link> |
      <router-link to="/workingFormvuelate"
        >working Formvuelate (no plugins)</router-link
      >
      |
    </div>
    <router-view />
  </div>
</template>
