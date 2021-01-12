<template>
  <div id="app">
    <my-schema-form :schema="schema" v-model:modelValue="form" />
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
/* ------------------ COMPONENTS HERE ARE REGISTERED BY .js files in src/plugins/ folder but the workingFormVuelate.vue example shows that also registering them into the .vue file nothing changes ------------------------------*/

import { computed, ref } from "vue";

export default {
  setup() {
    const form = ref({
      type: "A"
    });
    const schema = computed(() => {
      return form.value.type === "A"
        ? [
            {
              component: "form-select", //FormText,
              label: "Schema A or B?",
              options: ["A", "B"],
              model: "type"
            },
            {
              component: "form-text",
              label: "A field",
              model: "aField"
            }
          ]
        : [
            {
              component: "form-select", //FormText,
              label: "Schema A or B?",
              options: ["A", "B"],
              model: "type"
            },
            {
              component: "form-text",
              label: "b field",
              model: "bField"
            }
          ];
    });
    return {
      form,
      schema
    };
  }
};
</script>
