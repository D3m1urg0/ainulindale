<template>
  <div>
    <label :for="uuid">
      {{ label }}
    </label>
    <select
      :value="modelValue"
      :required="required"
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
export default {
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
    label: { type: String, required: true },
    options: { type: Array, required: true },
    disableNoSelection: { type: Boolean, default: false }
  },
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>
