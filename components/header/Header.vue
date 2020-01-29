<template>
  <header class="header-bg">
    <div class="container-fluid header">

      <div class="row">
        <div class="col-xl col-xl-8 order-1 order-sm-1 order-xl-1">
          <Slogan/>
        </div>
        <div class="col-xl col-xl-8 order-3 order-sm-2 order-xl-3">
          <Recommend/>
        </div>
        <div class="col-xl col-xl-8 order-4 order-sm-3 order-xl-4">
          <Tags/>
        </div>
        <div class="col-xl col-xl-4 order-2 order-sm-4 order-xl-2 d-xl-none justify-content-lg-center d-xl-flex justify-content-xl-end helper">
          <Subscribe :position=" 'header' "/>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
  import Slogan from '~/components/header/Slogan'
  import Recommend from '~/components/header/Recommend'
  import Tags from '~/components/header/Tags'
  import Subscribe from '~/components/Subscribe'

  export default {
    name: "Header",
    components: {
      Slogan,
      Recommend,
      Tags,
      Subscribe
    }
  }
</script>

<style lang="scss" scoped>
  .header-bg {
    background: url("../../static/header-pic.png") no-repeat;
    background-size: cover;
    transition: background 1s !important;
    transition: background-size 1s !important;
    padding-bottom: 78px;
  }

  @media (min-width: 1024px) {
    .helper {
      top: 200px;
    }
  }
</style>
