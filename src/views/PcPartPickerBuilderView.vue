<template>
  <div class="px-4 py-4 textOnTop text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Choose Your Parts</h1>
  </div>
  <div class="container mt-5 table-responsive">
    <table class="table">
      <thead>
      <tr>
        <th class="col-md-2">Component</th>
        <th class="col-md-2">Selection</th>
        <th class="col-md-2">Cena</th>
        <th class="col-md-2">Doprava</th>
        <th class="col-md-2">Nakup</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(component, index) in components" :key="index">
        <td>{{ component.name }}</td>
        <td>
          <button
              @click="chooseComponent(index)"
              class="btn btn-primary"
              :disabled="component.chosen"
          >
            {{ component.chosen ? 'Chosen' : 'Choose' }}
          </button>
        </td>
        <td>{{ component.price }}</td>
        <td>{{ component.shipping }}</td>
        <td>{{ component.purchase }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "PcPartPickerBuilderView",
  data() {
    return {
      components: [
        { name: "CPU", price: "", shipping: "", purchase: "" },
        { name: "CPU Cooler", price: "", shipping: "", purchase: "" },
        { name: "Motherboard", price: "", shipping: "", purchase: "" },
        { name: "Memory", price: "", shipping: "", purchase: "" },
        { name: "Storage", price: "", shipping: "", purchase: "" },
        { name: "Video Card", price: "", shipping: "", purchase: "" },
        { name: "Case", price: "", shipping: "", purchase: "" },
        { name: "Power Supply", price: "", shipping: "", purchase: "" },
        { name: "Operating System", price: "", shipping: "", purchase: "" },
        { name: "Monitor", price: "", shipping: "", purchase: "" },
        // Add other components similarly
      ],
    };
  },
  methods: {
    chooseComponent(index) {
      // Add logic to handle component selection
      console.log(`User chose ${this.components[index].name}`);
      // You can perform any other actions here, such as opening a modal or navigating to another page
    },
  },
};
</script>

<style scoped lang="scss">
.offcanvas-body {

  align-items: center;
}
.textOnTop {
  padding-top: 5px;
  background-color: darkgrey;
}



</style>