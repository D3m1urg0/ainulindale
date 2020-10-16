<template>
  <v-form
    @submit="onSubmit"
    :validation-schema="schema.validation"
    :initial-values="schema.values"
  >
    <text-input
      name="CustomImputName"
      type="text"
      label="Full Name (custom input)"
      placeholder="Your Name"
      success-message="Nice to meet you!"
    />
    <hr />
    <h2>automatic fileds</h2>
    <div
      v-for="{ name, as, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <label :for="name">{{ label }}</label>
      <v-field :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </v-field>
      <error-message :name="name"></error-message>
    </div>

    <button class="submit-btn" type="submit">Submit</button>
  </v-form>
</template>
<script>
import * as Yup from "yup";
import TextInput from "./fields/TextInput";
***REMOVED***
  components: { TextInput },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
  ***REMOVED***

    // Using yup to generate a validation schema
    // https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
    const schema = {
      fields: [
        {
          label: "Name",
          name: "name",
          as: "input"
      ***REMOVED***,
        {
          label: "Email",
          name: "email",
          as: "input"
      ***REMOVED***,
        {
          label: "Password",
          name: "password",
          as: "input"
      ***REMOVED***
***REMOVED***,
      validation: Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        name: Yup.string().required(),
        password: Yup.string()
          .min(8)
          .required()
    ***REMOVED***),
      values: {
        email: "example@example.com",
        name: "John Smith",
        password: "p@$$vv0rd"
    ***REMOVED***
  ***REMOVED***;

    return {
      onSubmit,
      schema
  ***REMOVED***;
***REMOVED***
***REMOVED***
</script>

<style scoped>
span {
  display: block;
  margin: 10px 0;
}

label {
  display: block;
}
</style>
