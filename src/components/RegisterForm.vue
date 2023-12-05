<template>
  <main class="form-signin">
    <form @submit.prevent="registerUser">
      <h1 class="h3 mb-3 fw-normal text-center">Create your Account</h1>

      <div class="form-floating mb-3">
        <input v-model="formData.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Login email</label>
      </div>
      <p class="error" v-if="errors.email">{{ errors.email }}</p>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
      <div class="form-floating mb-3">
        <input v-model="formData.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <p class="error" v-if="errors.password">{{ errors.password }}</p>

      <div class="form-floating mb-3">
        <input v-model="formData.password_confirmation" type="password" class="form-control" id="floatingPasswordConfirmation" placeholder="Password-Confirmation">
        <label for="floatingPasswordConfirmation">Confirm password</label>
      </div>
      <p class="error" v-if="errors.password_confirmation">{{ errors.password_confirmation }}</p>

      <button class="btn btn-primary w-100 py-2" type="submit">Sign up</button>
    </form>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: "RegisterForm",
  data() {
    return {
      errorMessage: null,
      formData: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.formData.email) {
        this.errors.email = 'Email is required.';
      }

      if (!this.formData.password) {
        this.errors.password = 'Password is required.';
      } else if (!/^(?=.*[A-Z])(?=.*\d).*$/.test(this.formData.password)) {
        this.errors.password = 'Password must contain at least one uppercase letter and one digit.';
      }

      if (this.formData.password !== this.formData.password_confirmation) {
        this.errors.password_confirmation = 'Passwords do not match.';
      }

      return Object.keys(this.errors).length === 0;
    },
    registerUser() {
      if (this.validateForm()) {
        axios.post('http://127.0.0.1:8000/api/registration/', this.formData)
            .then(response => {
              console.log('User registered successfully:', response.data);
            })
            .catch(error => {
              //console.error('Error registering user:', error.response.data);
              this.errorMessage = error.response.data.non_field_errors[0];
            });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-signin {
  max-width: 400px;
  margin: auto;
  padding: 100px 20px 20px;
}

.error {
  color: red;
  margin-top: 5px;
}
</style>
