<template>
  <div
    class="TextInput"
    :class="{
      'has-error': !!validation.errorMessage,
      success: validation.meta.valid
    }"
  >
    <label :for="uuid">{{ label }}</label>
    <input
      :value="modelValue"
      :required="required"
      :id="uuid"
      :disabled="readOnly"
      @input="update($event.target.value)"
    />
    <p
      class="help-message"
      v-show="validation.errorMessage || validation.meta.valid"
    >
      {{ validation.errorMessage || successMessage }}
    </p>
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
    label: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      default: () => ({ type: "text" })
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
    }
  },
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>

<style>
.TextInput {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

input:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}

.TextInput.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.TextInput.has-error input:focus {
  border-color: var(--error-color);
}

.TextInput.has-error .help-message {
  color: var(--error-color);
}

.TextInput.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.TextInput.success input:focus {
  border-color: var(--success-color);
}

.TextInput.success .help-message {
  color: var(--success-color);
}
</style>
