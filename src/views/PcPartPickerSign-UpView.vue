<template>
  <RegisterForm></RegisterForm>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "PcPartPickerSign-UpView",
  components: {RegisterForm}
}
</script>

<style scoped lang="scss">
.register {
  text-align: center;
  justify-content: center;
  margin-left: 500px;
  margin-right: 500px;
}
.form-floating {
  text-align: center;
  justify-content: center;
  display: flex;
}
</style>