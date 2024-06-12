<template>
  <ul>
    <li v-for="project in projects" :key="project.id">{{ project.name }}

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
          this.projects = res.data.results;
        })
      },
  

  },
  mounted() {
    this.actions.getAllProjects();
  }
    }
</script>

<style lang="scss" scoped>

</style>