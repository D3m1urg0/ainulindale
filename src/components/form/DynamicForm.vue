<template>
  <v-form
    @submit="onSubmit"
    :validation-schema="schema.validation"
    :initial-values="schema.values"
  >
    <text-input
      name="name"
      type="text"
      label="Full Name"
      placeholder="Your Name"
      success-message="Nice to meet you!"
    />
    <text-input
      name="email"
      type="email"
      label="E-mail"
      placeholder="Your email address"
      success-message="Got it, we won't spam you!"
    />
    <text-input
      name="password"
      type="password"
      label="Password"
      placeholder="Your password"
      success-message="Nice and secure!"
    />
    <text-input
      name="confirm_password"
      type="password"
      label="Confirm Password"
      placeholder="Type it again"
      success-message="Glad you remembered it!"
    />

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
