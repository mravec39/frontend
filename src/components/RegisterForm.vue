<template>
  <main class="form-signin">
    <form @submit.prevent="registerUser">
      <h1 class="h3 mb-3 fw-normal text-center">Create your Account</h1>

      <div class="form-floating mb-3">
        <input v-model="formData.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Login email</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="formData.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="formData.passwordConfirmation" type="password" class="form-control" id="floatingPasswordConfirmation" placeholder="Password-Confirmation">
        <label for="floatingPasswordConfirmation">Confirm password</label>
      </div>

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
      formData: {
        email: '',
        password: '',
        passwordConfirmation: '',
      },
    };
  },
  methods: {
    registerUser() {
      // Odešlete požadavek na backend
      axios.post('http://127.0.0.1:8000/api/registration/', this.formData)
          .then(response => {
            console.log(response.data);  // Zpracujte odpověď od serveru podle potřeby
            console.log('User registered in successfully:', response.data);
          })
          .catch(error => {
            console.error(error.response.data);  // Zpracujte chybu od serveru podle potřeby
            console.error('error');
          });
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
</style>
