<template>
  <div>
    <Menu/>
    <Nuxt/>
  </div>
</template>

<script>

  import Menu from '~/components/Menu.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    name: "empty",
    components: {
      Menu,
      Footer
    }
  }

</script>

<style scoped>
</style>
