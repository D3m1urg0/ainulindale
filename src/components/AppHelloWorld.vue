<template>
  <div class="hello">
    <h1 class="text-4xl title">{{ msg }}</h1>
  </div>
</template>

<script>
***REMOVED***
  props: {
    msg: String,
    color: String
***REMOVED***
***REMOVED***
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped vars="{color}">
.title {
  color: var(--color);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
