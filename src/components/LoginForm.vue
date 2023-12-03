<template>
  <form @submit.prevent="submitForm" class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
    <div class="form-floating mb-3">
      <input v-model="formData.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="formData.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="checkbox mb-3">
      <label>
        <input v-model="formData.rememberMe" type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button :disabled="!isFormValid" class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
    <hr class="my-4">
    <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
  </form>
</template>
<script>
import axios from 'axios';
export default {
  name: "LoginForm",
  data() {
    return {
      isFormValid: false,
      formData: {
        email: '',
        password: '',
        rememberMe: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Reset error message
      this.errorMessage = '';

      // Send form data to Django backend for authentication
      axios.post('http://127.0.0.1:8000/api/login/', this.formData)
          .then(response => {
            console.log('User logged in successfully:', response.data);
            // Handle successful login (redirect, show a success message, etc.)
          })
          .catch(error => {
            console.error('Error logging in:', error);
            // Handle login error (display error message, reset form, etc.)
            this.errorMessage = 'Invalid credentials. Please check your email and password.';
          });
    },
  },
  watch: {
    formData: {
      deep: true,
      handler() {
        // Simple form validation logic
        this.isFormValid =
            this.formData.email.trim() !== '' &&
            this.formData.password.trim() !== '' &&
            this.formData.password.length >= 6; // You can add more complex validation rules
      },
    },
  },
}
</script>
<style scoped lang="scss">

</style>