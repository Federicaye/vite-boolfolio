<template>
  <div>
    <h1>Projects</h1>
   <router-view></router-view>
  </div>

</template>

<script>

import {store} from './store';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      store,
      
    }
  },
  methods: {
    getAllProjects() {
        axios.get(this.store.apiBaseUrl + 'projects').then((res) => {
          this.store.projects = res.data.results;
        })
      },
  },
  mounted() {
    this.getAllProjects();
  }
}
</script>

<style lang="scss" scoped></style>
