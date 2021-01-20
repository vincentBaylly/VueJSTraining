<template>
  <div class="container">
    <h1>Register</h1>
    <input
      type="text"
      name="firstname"
      v-model="input.firstname"
      placeholder="Firstname"
    />
    <input
      type="text"
      name="lastrname"
      v-model="input.lastname"
      placeholder="Lastname"
    />
    <input type="text" name="email" v-model="input.email" placeholder="Email" />
    <input
      type="text"
      name="confirmemail"
      v-model="input.confirmemail"
      placeholder="Confirm Email"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <input
      type="password"
      name="confirmpassword"
      v-model="input.confirmpassword"
      placeholder="Confirm Password"
    />
    <div
      class="gender"
      v-for="(gender, index) in input.genders"
      v-bind:key="index"
    >
      <input
        type="radio"
        v-model="input.selectedGender"
        name="gender"
        v-bind:value="gender.name"
      />
      <label>{{ gender.label }}</label>
    </div>
    <select name="city" id="cities">
      <option value="Shawinigan">Shawinigan</option>
      <option value="TR">Trois Rivieres</option>
      <option value="Montreal">Montreal</option>
      <option value="Quebec">Quebec</option>
    </select>
    <button type="button">Register</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        fisrname: "",
        lastname: "",
        email: "",
        confirmemail: "",
        password: "",
        confirmpassword: "",
        selectedGender: "",
        genders: [
          {
            id: 1,
            label: "Femme",
          },
          {
            id: 2,
            label: "Homme",
          },
          {
            id: 3,
            label: "Autre",
          },
        ],
      },
    };
  },
};
</script>
