<template>
  <ul>
    <li v-for="project in store.projects" :key="project.id">{{ project.name }}

    </li>
    </ul>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'Projectslist',
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

<style lang="scss" scoped>

</style>