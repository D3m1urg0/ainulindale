<template>
  <div>
    <label :for="uuid" v-html="labelHtml" />
    <textarea
      :value="modelValue"
      :required="required"
      :id="uuid"
      :disabled="readOnly"
      @input="update($event.target.value)"
    />
    <p v-show="validation.errorMessage" v-text="validation.errorMessage"></p>
  </div>
</template>

<script>
***REMOVED***
  props: {
    modelValue: { required: true },
    required: {
      type: Boolean,
      default: false
  ***REMOVED***,
    label: {
      type: String,
      required: true
  ***REMOVED***,
    config: {
      type: Object,
      default: () => ({ type: "text" })
  ***REMOVED***,
    readOnly: {
      type: Boolean,
      default: false
  ***REMOVED***,
    uuid: {
      type: Number,
      default: 0
  ***REMOVED***,
    validation: {
      type: Object,
      default: () => ({})
  ***REMOVED***,
    validations: {
      type: Object,
      default: () => ({})
  ***REMOVED***
***REMOVED***,
  computed: {
    labelHtml() {
      const requiredHtml =
        this.validations._exclusive && this.validations._exclusive.required
          ? ' <span class="label--required">*</span>'
          : "";
      return this.label + requiredHtml;
  ***REMOVED***
***REMOVED***,
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
  ***REMOVED***
***REMOVED***
***REMOVED***
</script>
