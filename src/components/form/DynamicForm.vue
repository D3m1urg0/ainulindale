<template>
  <v-form
    @submit="onSubmit"
    :validation-schema="schema.validation"
    :initial-values="schema.values"
  >
    <component
      v-for="{ name, as, label, type, ...attrs } in schema.fields"
      :key="name"
      :is="as === 'input' ? 'TextInput' : 'TextInput'"
      :id="name"
      :name="name"
      :type="type"
      :label="label"
      :placeholder="attrs.placeholder || name"
      success-message="Nice to meet you!"
      :class="attrs.class"
    />
    <!-- <hr />
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
            :placeholder="childAttrs.placeholder || name"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </v-field>
      <error-message :name="name"></error-message>
    </div> -->

    <button class="submit-btn" type="submit">Submit</button>
  </v-form>
</template>
<script>
import * as yup from "yup";
import TextInput from "./fields/TextInput";
***REMOVED***
  components: { TextInput },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
  ***REMOVED***

    const schema = {
      fields: [
        {
          label: "Name",
          name: "name",
          as: "input",
          placeholder: "Nome"
      ***REMOVED***,
        {
          label: "Surname",
          name: "surname",
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
          as: "input",
          type: "password"
      ***REMOVED***,
        {
          label: "Hidden field",
          name: "hiddenfield",
          as: "input",
          type: "hidden",
          class: "hidden"
      ***REMOVED***
***REMOVED***,
      validation: yup.object().shape({
        email: yup
          .string()
          .email()
          .required(),
        name: yup.string().required(),
        surname: yup.string().required(),
        password: yup
          .string()
          .min(8)
          .required()
    ***REMOVED***),
      values: {
        email: "example@example.com",
        name: "John",
        surname: "Smith",
        password: "p@$$vv0rd",
        hiddenfield: "hidden value!"
    ***REMOVED***
  ***REMOVED***;

    console.log(schema.validation);

    return {
      onSubmit,
      schema
  ***REMOVED***;
***REMOVED***
***REMOVED***
</script>
