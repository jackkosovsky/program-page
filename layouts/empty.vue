<template>
  <div>
    <Navigation/>
    <Nuxt/>
  </div>
</template>

<script>

  import Navigation from '~/components/Navigation.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    name: "empty",
    components: {
      Navigation,
      Footer
    }
  }

</script>

<style scoped>
</style>
