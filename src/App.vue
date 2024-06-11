<template>
  <div>
    <h1>hello</h1>
  </div>
</template>

<script>

import {portfolio} from './portfolio';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      store,
      projects: []
    }
  },
  methods: {
    getAllProjects() {
axios.get(this.portfolio.apiBaseUrl + 'post').then((res) => {
  this.projects = res.data.results;
})
  },

},
mounted(){
  this.getAllProjects();
}
}
</script>

<style lang="scss" scoped></style>
