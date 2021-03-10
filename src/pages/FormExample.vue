<template>
  <schema-form :schema="schema" v-model="formData" />
</template>

<script>
import { computed, ref } from "vue";
//import * as yup from "yup";

***REMOVED***
  setup() {
    const formData = ref({});
    const schema = computed(() => {
      return formData.value.type === "A"
        ? [
            {
              component: "form-select", //FormText,
              label: "Schema A or B?",
              options: ["A", "B"],
              model: "type"
          ***REMOVED***,
            {
              component: "form-text",
              label: "A field",
              model: "aField"
          ***REMOVED***
    ***REMOVED***
        : [
            {
              component: "form-select", //FormText,
              label: "Schema A or B?",
              options: ["A", "B"],
              model: "type"
          ***REMOVED***,
            {
              component: "form-text",
              label: "b field",
              model: "bField"
          ***REMOVED***
    ***REMOVED***;
***REMOVED***
    return {
      schema,
      formData
  ***REMOVED***;
***REMOVED***
***REMOVED***
</script>
