<template>
  <div>
    <label :for="uuid" v-html="labelHtml" class="label" />
    <multiselect
      type="select"
      :model-value="modelValue"
      :options="options"
      @select="update($event)"
      :required="required"
      :placeholder="placeholder"
      :id="uuid"
    />
    <p v-show="validation.errorMessage" v-text="validation.errorMessage"></p>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: { required: true },
    placeholder: String,
    required: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => {},
    },
    uuid: {
      type: Number,
      default: 0,
    },
    label: { type: String, required: true },
    options: { type: Array, required: true },
    disableNoSelection: { type: Boolean, default: false },
    validation: {
      type: Object,
      default: () => ({}),
    },
    validations: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    labelHtml() {
      const requiredHtml =
        (this.validations && _.get(this.validations, "_exclusive.required")) ||
        _.includes(this.validations, "required")
          ? ' <span class="label--required">*</span>'
          : "";
      return this.label && this.label + requiredHtml;
    },
  },
  methods: {
    update(value) {
      console.log(value);
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style src="@/assets/multiselect.css" />

/*
<style lang="postcss" scoped>
.multiselect {
}
</style>
*/
