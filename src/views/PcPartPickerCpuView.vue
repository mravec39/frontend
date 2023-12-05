<template>
  <div class="px-4 py-4 textOnTop text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Cpu</h1>
  </div>
  <div>
    <div class="container my-4">
    <h2 class="mb-4"></h2>
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
        <tr>
          <th @click="sortBy('name')">Name</th>
          <th @click="sortBy('manufacturer')">Manufacturer</th>
          <th @click="sortBy('cores')">Cores</th>
          <th @click="sortBy('threads')">Threads</th>
          <th @click="sortBy('base_clock')">Base Clock</th>
          <th @click="sortBy('boost_clock')">Boost Clock</th>
          <th @click="sortBy('cache')">Cache</th>
          <th @click="sortBy('socket')">Socket</th>
          <th @click="sortBy('power_draw')">Power Draw</th>
          <th @click="sortBy('price')">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cpu in sortedCPUs" :key="cpu.id">
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
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash'; // sort

export default {
  name: "PcPartPickerCpuView",
  data() {
    return {
      CPUs: [],
      sortKey: 'name',
      sortOrder: 'asc',
    };
  },
  computed: {
    sortedCPUs() {
      return _.orderBy(this.CPUs, this.sortKey, this.sortOrder);
    },
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
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    },
  },
};
</script>
<style scoped lang="scss">
.textOnTop {
  padding-top: 5px;
  background-color: darkgrey;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
