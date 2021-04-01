<template>
  <div>
    <label :for="uuid" v-html="labelHtml" class="label" />
    <select
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :id="uuid"
      @input="update($event.target.value)"
    >
      <option v-if="!disableNoSelection">-</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
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
      default: false
    },
    config: {
      type: Object,
      default: () => {}
    },
    uuid: {
      type: Number,
      default: 0
    },
    label: { type: String, required: true },
    options: { type: Array, required: true },
    disableNoSelection: { type: Boolean, default: false },
    validation: {
      type: Object,
      default: () => ({})
    },
    validations: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    labelHtml() {
      const requiredHtml =
        (this.validations && _.get(this.validations, "_exclusive.required")) ||
        _.includes(this.validations, "required")
          ? ' <span class="label--required">*</span>'
          : "";
      return this.label && this.label + requiredHtml;
    }
  },
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>
