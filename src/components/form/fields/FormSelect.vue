<template>
  <div>
    <label :for="label">
      {{ label }}
    </label>
    <select
      :value="modelValue"
      :required="required"
      :id="label"
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
***REMOVED***
  props: {
    modelValue: { required: true },
    required: {
      type: Boolean,
      default: false
  ***REMOVED***,
    config: {
      type: Object,
      default: () => {}
  ***REMOVED***,
    label: { type: String, required: true },
    options: { type: Array, required: true },
    disableNoSelection: { type: Boolean, default: false }
***REMOVED***,
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
  ***REMOVED***
***REMOVED***
***REMOVED***
</script>
