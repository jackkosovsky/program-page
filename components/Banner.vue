<template>
  <section class="banner-area justify-content-center">

    <transition name="slide-fade">
      <div class="banner d-flex justify-content-center"
           v-if="isClose"
      >
        50% скидка на все программы при оплате онлайн до 15 декабря.
        <span class="banner_mod">Оплати сейчас!</span>
        <div class="banner__btn"
             @click="closeBanner"
        >
          <img src="~/static/close.svg" alt="close">
        </div>
      </div>
    </transition>

  </section>
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
  .banner {
    background-color: #FE8726;
    color: white;
    height: 52px;
    padding: 3px;

    .banner_mod {
      font-weight: bold;
      text-decoration: underline;
      margin-right: 10px;
    }

    &__btn {
      cursor: pointer;

      :hover {
        transform: scale(1.4);
      }
    }
  }

  .remove {
    display: none !important;
  }

  .slide-fade-enter-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: scale(1.4);
    transform: translate( 0, -10px);
    opacity: 0;
  }

</style>
