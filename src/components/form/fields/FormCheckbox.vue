<template>
  <div>
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        @input="update($event.target.checked)"
      />
      {{ label }}
    </label>
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
    label: {
      type: String,
      required: true
  ***REMOVED***
***REMOVED***,
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
  ***REMOVED***
***REMOVED***
***REMOVED***
</script>
