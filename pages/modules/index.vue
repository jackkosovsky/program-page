<template>
  <section class="container-fluid">
    <h1>Модули:</h1>
    <ul>
      <li v-for="module in modules" :key="module.id">
        <a href="#" @click.prevent="openUser(module)">{{ module.title }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "index",

    async asyncData ({$axios}) {
      //const modules = await $axios.$get('https://jsonplaceholder.typicode.com/users')
      const modules = await $axios.$get('https://api.jsonbin.io/b/5e2d97be593fd7418570ab9a')
      return { modules }
    },

    data: () => ({
      modules: []
    }),

    methods: {
      openUser(module) {
        this.$router.push('/modules/' + module.id)
      }
    },

  }
</script>

<style scoped>

</style>
