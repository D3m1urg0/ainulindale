<template>
  <v-form
    @submit="onSubmit"
    :validation-schema="schema.validation"
    :initial-values="schema.values"
  >
    <template v-for="{ as, ...attrs } in schema.fields" :key="attrs.name">
      <component
        :is="as === 'input' ? 'TextInput' : 'TextInput'"
        v-bind="attrs"
      />
    </template>
    <hr />
    <button class="submit-btn" type="submit">Submit</button>
  </v-form>
</template>
<script>
***REMOVED***
  props: {
    schema: {
      type: Object,
      default: () => {}
  ***REMOVED***
***REMOVED***,
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
  ***REMOVED***

    return {
      onSubmit
  ***REMOVED***;
***REMOVED***
***REMOVED***
</script>
