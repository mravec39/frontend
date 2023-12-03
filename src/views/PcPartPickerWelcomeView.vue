<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Pick Parts</h1>
    <h1 class="display-5 fw-bold text-body-emphasis">Build Your PC</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">We provide part selection, pricing, and compatibility guidance for do-it-yourself computer builders.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <router-link to="/builder">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3"><i class="bi bi-tools"></i> Start Your Build</button></router-link>
      </div>
    </div>
  </div>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
        <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: 'PcPartPickerWelcomeView',
  components: {LoginForm},
};
</script>
<style scoped lang="scss">
.offcanvas-body {
  align-items: center;
}
</style>
