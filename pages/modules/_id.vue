<template>
  <section class="container-fluid">
    <h1>User {{ 1}}</h1>
    <hr>
    <h2>{{ 2 }}</h2>
  </section>
</template>

<script>
  export default {

    async asyncData({ $axios, params }){
      //const module = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
      const module = await $axios.$get('https://api.jsonbin.io/b/5e2d97be593fd7418570ab9a/' + params.id)
      return { module }
    }
  }
</script>
