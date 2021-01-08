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
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>
