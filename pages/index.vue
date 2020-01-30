<template>
  <div class="App-content">
    <Header/>
    <Tables/>
    <AboutProgram/>
    <Modules/>
    <section class="color-section">

      <Carousel/>
      <div class="container-fluid">
        <Subscribe :position=" 'content' "/>
      </div>
    </section>
  </div>
</template>

<script>
  import Tables from '~/components/Tables'
  import Header from '~/components/header/Header'
  import AboutProgram from '~/components/AboutProgram'
  import Modules from '~/components/Modules'
  import Carousel from '~/components/Carousel'
  import Subscribe from '~/components/Subscribe'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Header,
      Tables,
      AboutProgram,
      Modules,
      Carousel,
      Subscribe,
      Footer,
    }
  }
</script>

<style lang="scss" scoped>
  .color-section {
    background-color: #F9FAFD;
    padding-bottom: 65px;

    @media (min-width: 576px) {
      padding-bottom: 95px;
    }
    @media (min-width: 1024px) {
      padding-bottom: 95px;
    }
  }
</style>
