<template>
  <div class="mt-4">
    <b-form @submit.prevent="onSubmit">
      <ValidationProvider name="Name" rules="required" v-slot="{errors}">
        <b-form-group id="input-group-1" label="Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder="Enter Name"
            required
          ></b-form-input>
          <FormErrorMessage :errors="errors" />
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider name="Email" rules="email" v-slot="{errors}">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
          <FormErrorMessage :errors="errors" />
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
        name="Password"
        rules="required|min:6"
        v-slot="{errors}"
      >
        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-3"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
          <FormErrorMessage :errors="errors" />
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
        name="Password Confirmation"
        rules="required|min:6"
        v-slot="{errors}"
      >
        <b-form-group
          id="input-group-2"
          label="Confirm Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-4"
            v-model="form.passwordConfirm"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
          <FormErrorMessage :errors="errors" />
        </b-form-group>
      </ValidationProvider>

      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import {ValidationProvider} from 'vee-validate';
import FormErrorMessage from '../../components/FormErrorMessage';

export default {
  components: {
    ValidationProvider,
    FormErrorMessage,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        await axios.post('http://localhost:3000/auth/signup', {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name,
        });
        this.$router.push({path: '/login'});
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang=""></style>
