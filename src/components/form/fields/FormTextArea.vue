<template>
  <div>
    <label class="label" :for="uuid" v-html="labelHtml" />
    <textarea
      class="form-textarea "
      :value="modelValue"
      :required="required"
      :id="uuid"
      :disabled="readOnly"
      :placeholder="placeholder"
      @input="update($event.target.value)"
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
      default: false
    },
    label: {
      type: String,
      required: true
    },

    readOnly: {
      type: Boolean,
      default: false
    },
    uuid: {
      type: Number,
      default: 0
    },
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
