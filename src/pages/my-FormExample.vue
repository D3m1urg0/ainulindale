<template>
  <div id="app">
    <schema-form :schema="schema" v-model:modelValue="formData" />
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const formData = ref({
      type: "A",
      aField: "",
      bField: ""
    });
    const schema = computed(() => {
      return formData.value.type === "A"
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
      formData,
      schema
    };
  }
};
</script>
