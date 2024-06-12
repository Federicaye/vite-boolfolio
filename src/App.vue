<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="ptoject.id">{{ project.title }}</li>
    </ul>
  </div>

</template>

<script>

import {store } from './store';
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
      axios.get(this.store.apiBaseUrl + 'post').then((res) => {
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
