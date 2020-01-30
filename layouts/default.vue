<template>
  <div>
    <!--<div class="podlogka"><img src="~/static/podlogka2.png" alt=""></div>-->
    <Banner/>
    <Menu/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Banner from '~/components/Banner.vue';
  import Menu from '~/components/Menu.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Banner,
      Menu,
      Footer
    }
  }
</script>

<style lang="scss" scoped>
  .podlogka {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    opacity: .4;
  }
</style>
