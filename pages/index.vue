<template>
  <div class="all-content">
    <Header />
    <main role="main">
      <Table />
      <AboutProgram />
      <Modules/>
      <section class="bottom-section">
      <Review />
        <div class="container-fluid">
          <Subscribe :position = " 'content' "/>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import Table from '~/components/Table'
  import Header from '~/components/header/Header'
  import AboutProgram from '~/components/AboutProgram'
  import Modules from '~/components/Modules'
  import Review from '~/components/Review'
  import Subscribe from '~/components/Subscribe'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Header,
      Table,
      AboutProgram,
      Modules,
      Review,
      Subscribe,
      Footer,
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-section {
    background-color: #F9FAFD;
    padding: 105px 0 80px
  }
  .all-content {
    transition: 1s;
  }
</style>
