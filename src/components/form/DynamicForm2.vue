<template>
  <div id="app">
    <v-form @submit="onSubmit">
      <v-field name="email" as="input" />
      <error-message name="email" />

      <button>Sign up</button>
    </v-form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(values) {
      alert("Submitting :(");

      alert(JSON.stringify(values, null, 2));
    }
  }
};
</script>
