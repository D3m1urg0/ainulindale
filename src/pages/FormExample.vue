<template>
  <schema-form :schema="schema" />
</template>

<script>
import { computed, ref } from "vue";
import { useSchemaForm } from "formvuelate";
//import * as yup from "yup";

export default {
  setup() {
    const formData = ref({});
    useSchemaForm(formData);
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
      schema,
      formData
    };
  }
};
</script>
