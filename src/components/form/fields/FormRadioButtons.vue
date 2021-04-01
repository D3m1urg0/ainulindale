<template>
  <div>
    <label :for="uuid" v-html="labelHtml" class="label" />
    <div v-for="option in options" :key="option" class="flex items-baseline">
      <input
        :id="option"
        type="radio"
        v-model="value"
        :name="uuid"
        :value="option"
      />
      <label :for="option" v-text="option" class="checkbox__label" />
    </div>
    <p v-show="validation.errorMessage" v-text="validation.errorMessage"></p>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  emits: ["update:modelValue"],

  props: {
    modelValue: { required: true },
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
    label: {
      type: String,
      required: true
    },
    options: Array,
    validation: {
      type: Object,
      default: () => ({})
    },
    validations: {
      type: Object,
      default: () => ({})
    }
  },
  data: vm => ({
    value: vm.modelValue
  }),
  watch: {
    value(val) {
      this.$emit("update:modelValue", val);
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
  }
};
</script>
