<template>
  <div id="app">
    <SchemaForm :schema="schema" v-model="form" />
    <p>
      this also seemps preventing modelCleanup on schema change without the
      param
    </p>
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
import { ref, markRaw, computed } from "vue";
import { SchemaFormFactory } from "formvuelate";
import FormText from "@/components/form/fields/FormText"; // ""./components/FormText.vue";
import FormSelect from "@/components/form/fields/FormSelect"; // "./components/FormSelect.vue";
// import VeeValidatePlugin from "@formvuelate/plugin-vee-validate";
// import LookupPlugin from "@formvuelate/plugin-lookup";

const SchemaFormWithPlugins = SchemaFormFactory([
  /* ------------------ IF I TOGGLE COMMENTS HERE IT STOPS REACTIVITY ------------------------------*/
  // LookupPlugin({
  //   mapComponents: {
  //     string: "FormText",
  //     array: "FormSelect"
  //   }
  // }),
  // VeeValidatePlugin({
  //   // plugin configuration here
  //   generateMessage: localize({
  //     it
  //   }),
  //   classes: {
  //     valid: "is-valid",
  //     invalid: "is-invalid",
  //     dirty: ["is-dirty", "is-dirty"] // multiple classes per flag!
  //   }
  // })
]);

markRaw(FormSelect);
markRaw(FormText);

export default {
  name: "App",
  components: { SchemaForm: SchemaFormWithPlugins },
  setup() {
    const form = ref({
      type: "A"
    });

    const schema = computed(() => {
      return form.value.type === "A"
        ? [
            {
              component: FormSelect,
              label: "Schema A or B?",
              options: ["A", "B"],
              model: "type"
            },
            {
              component: FormText,
              label: "A field",
              model: "aField"
            }
          ]
        : [
            {
              component: FormSelect,
              label: "Schema A or B?",
              options: ["A", "B"],
              model: "type"
            },
            {
              component: FormText,
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
