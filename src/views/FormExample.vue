<template>
  <DynamicForm :schema="schema" />
</template>

<script>
import * as yup from "yup";
***REMOVED***
  setup() {
    const schema = {
      fields: [
        {
          label: "Name",
          name: "user.name",
          as: "input",
          placeholder: "Nome"
      ***REMOVED***,
        {
          label: "Surname",
          name: "user.surname",
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
        user: yup.object({
          name: yup.string().required(),
          surname: yup.string().required()
      ***REMOVED***),
        password: yup
          .string()
          .min(8)
          .required()
    ***REMOVED***),
      values: {
        email: "example@example.com",
        user: { name: "John", surname: "Smith" },
        password: "p@$$vv0rd",
        hiddenfield: "hidden value!"
    ***REMOVED***
  ***REMOVED***;

    return {
      schema
  ***REMOVED***;
***REMOVED***
***REMOVED***
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  height: 100%;
}

form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
