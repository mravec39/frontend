<template>
  <div>
    <h2 class="mb-4">CPU Table</h2>
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Cores</th>
          <th>Threads</th>
          <th>Base Clock</th>
          <th>Boost Clock</th>
          <th>Cache</th>
          <th>Socket</th>
          <th>Power Draw</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cpu in CPUs" :key="cpu.id">
          <td>{{ cpu.name }}</td>
          <td>{{ cpu.manufacturer }}</td>
          <td>{{ cpu.cores }}</td>
          <td>{{ cpu.threads }}</td>
          <td>{{ cpu.base_clock }}</td>
          <td>{{ cpu.boost_clock }}</td>
          <td>{{ cpu.cache }}</td>
          <td>{{ cpu.socket }}</td>
          <td>{{ cpu.power_draw }}</td>
          <td>{{ cpu.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "PcPartPickerCpuView",
  data() {
    return {
      CPUs: [],
    };
  },
  mounted() {
    this.fetchCPUs();
  },
  methods: {
    async fetchCPUs() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cpus/');
        this.CPUs = response.data;
      } catch (error) {
        console.error('Error fetching CPUs:', error);
      }
    },
  },
}
</script>
<style scoped lang="scss">
</style>