<template>
  <transition name="a-banner">
    <section class="banner-area" v-if="isClose">
      <div class="container-fluid">

        <div class="close-btn d-flex justify-content-center" @click="closeBanner">
          <img src="~/static/svg/close.svg" alt="close">
        </div>

        <div class="banner d-flex justify-content-center">
          <div class="flex-wrap text-center">
            50% скидка на все программы при оплате онлайн до 15 декабря.
            <div class="banner-mod">Оплати сейчас!</div>
          </div>
        </div>

      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    name: "Banner",
    data() {
      return {
        isClose: true
      }
    },
    methods: {
      closeBanner() {
        this.isClose = false
      }
    },
  }
</script>

<style lang="scss" scoped>
  .banner-area {
    background-color: #FE8726;
    color: white;
    display: block;
    position: relative;
    top: 0
  }

  .banner {
    padding: 20px 40px;

    &-mod {
      display: inline-block;
      font-weight: bold;
      text-decoration: underline;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .close-btn {
    cursor: pointer;
    float: right;
    @media (min-width: 1024px) {
    }
    right: 0;
    top: 26px;
    position: relative;

    &:hover {
      transform: scale(1.2);
    }
  }


  .a-banner-enter,
  .a-banner-leave-active {
    top: -100px;
  }

  .a-banner-enter-active,
  .a-banner-leave-active {
    transition: .1s ease-in-out;
  }

</style>
