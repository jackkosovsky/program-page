<template>

  <div class="container-fluid carousel">
    <h2 class="title d-none d-sm-block">Отзывы о программе:</h2>
    <h2 class="title d-sm-none">Отзывы о нас:</h2>
    <carousel class="review"
              v-if="isNuxtReady"

              :dots="false"
              :items="3"
              :margin="11"
              :autoplay="false"
              :autoplayHoverPause="true"
              :loop="true"
              :responsive="{0:{items:1},576:{items:2},1024:{items:3}}"
    >

      <div class="review__card">
        <div class="review__body">
          В нашей программе мы собрали самую актуальную на сегодняшний день информацию о заместительной почечной терапии,
          её осложнениях, а также о сочетании ХБП и другой соматической патологии.
          Перевели англоязычные рекомендации ведущих объединений нефрологов разных стран - Америки, Европы.
        </div>

        <div class="review__allInfo">
          <div class="review__allInfo-author d-flex">
            <div class="review__allInfo-author-logo">
              <img src="~/static/red-сross.png" alt="сross">
            </div>
            <div class="review__allInfo-author-text d-flex align-items-center">Городская Покровская больница</div>
          </div>
          <div class="review__allInfo-second d-flex">
            <div class="review__allInfo-second-description secondary-text carousel-marg">Вебинар “ Современные аспекты заместительной почечной терапии</div>
          </div>
        </div>

      </div>

      <div class="review__card">
        <div class="review__body">
          В нашей программе мы собрали самую актуальную на сегодняшний день информацию о заместительной почечной терапии,
          её осложнениях, а также о сочетании ХБП и другой соматической патологии.
          Перевели англоязычные рекомендации ведущих объединений нефрологов разных стран - Америки, Европы.
        </div>

        <div class="review__allInfo">
          <div class="review__allInfo-author d-flex">
            <div class="review__allInfo-author-logo">
              <img src="~/static/red-сross.png" alt="сross">
            </div>
            <div class="review__allInfo-author-text d-flex align-items-center">Городская Покровская больница</div>
          </div>
          <div class="review__allInfo-second d-flex">
            <div class="review__allInfo-second-description secondary-text carousel-marg">Вебинар “ Современные аспекты заместительной почечной терапии</div>
          </div>
        </div>

      </div>

      <div class="review__card">
        <div class="review__body">
          В нашей программе мы собрали самую актуальную на сегодняшний день информацию о заместительной почечной терапии,
          её осложнениях, а также о сочетании ХБП и другой соматической патологии.
          Перевели англоязычные рекомендации ведущих объединений нефрологов разных стран - Америки, Европы.
        </div>

        <div class="review__allInfo">
          <div class="review__allInfo-author d-flex">
            <div class="review__allInfo-author-text d-flex align-items-center">Иванов Иван Иванович</div>
          </div>
          <div class="review__allInfo-second d-flex">
            <div class="review__allInfo-second-description secondary-text carousel-marg compensation">Вебинар “ Современные аспекты заместительной почечной терапии</div>
          </div>
        </div>

      </div>

    </carousel>
  </div>
</template>

<script>
  const carousel = () => window && window !== undefined ? import("vue-owl-carousel") : null;
  export default {
    name: 'Review',
    components: {carousel},
    data() {
      return {
        isNuxtReady: false,
      }
    },
    mounted() {
      const vm = this;
      if (process.browser) {
        window.onNuxtReady(app => {
          //console.log("Nuxt ready!");
          vm.isNuxtReady = true;
        });
      }
    },
  }
</script>

<style lang="scss">

  .carousel {
    padding-top: 70px;

    @media (min-width: 576px) {
      padding-top: 70px;
    }
    @media (min-width: 1024px) {
      padding-top: 70px;
    }

    .title {
      font-weight: 600;
      font-size: 22px;
      line-height: 26px;
      padding-bottom: 26px;
      @media (min-width: 576px) {
        font-weight: 600;
        font-size: 33px;
        line-height: 39px;
        padding-bottom: 37px;
      }
      @media (min-width: 1024px) {
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        padding-bottom: 62px;
      }
    }
  }

  .review {
    box-shadow: 0 7px 70px rgba(0, 50, 123, 0.2);


    &__card {
      padding: 30px;
      background: white;
      box-shadow: -11px 0px 0px #dce3ee, inset -20px 0px 30px rgba(107, 166, 255, 0.04)
    }

    &__body {
      padding-bottom: 15px;
      border-bottom: 1px solid #e7e7e7
    }

    &__allInfo {

      &-author {
        margin-top: 19px;
        min-height: 40px;
        align-items: center;

        &-logo {
          width: 45px;
          height: 45px;
          margin-right: 15px;
        }

        &-text {
          width: 80%;
          font-weight: 600;
          font-size: 16px;
          line-height: 127.8%;
        }
      }

      &-second {

        &-description {
          font-size: 16px;
          line-height: 1.2em;
          margin-top: 4px;
        }
      }
    }

    .owl-nav {
      position: absolute !important;
      margin: 0 !important;
      right: 0;
      top: -85px;

      .owl-prev {
        background: url("../static/prev.svg") 50% no-repeat white !important;
        text-indent: -999em;
        width: 58px;
        height: 58px;
        border-radius: 0 !important;
        border: 1px solid rgba(47, 128, 243, 0.09)
      }

      .owl-next {
        background: url("../static/next.svg") 50% no-repeat white !important;
        text-indent: -999em;
        width: 58px;
        height: 58px;
        border-radius: 0 !important;
        border: 1px solid rgba(47, 128, 243, 0.09)
      }
    }
  }

  .carousel-marg {
    margin-top: 20px;
    margin-left: 60px;
    @media (min-width: 576px) {
      margin-top: 3px;
      margin-left: 60px;
    }
    @media (min-width: 1024px) {
      margin-top: 0;
      margin-left: 60px;
    }
  }

  .compensation {
    margin-bottom: 0px;
    padding-bottom: 5px;
    @media (min-width: 576px) {
      margin-bottom: 0px;
      padding-bottom: 5px;
    }
    @media (min-width: 1024px) {
      margin-bottom: 0px;
      padding-bottom: 5px;
    }
  }

  .inverse {

  }

</style>
