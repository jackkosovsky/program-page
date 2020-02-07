<template>
  <section class="container-fluid tables">

    <!--   Large Tables   -->

    <div class="row no-gutters full-width-table d-none d-xl-flex tables__large">

      <div class="col-md-4 d-flex tables__large-info">
        <img src="../static/svg/icon-1.svg" alt="icon" class="align-self-start tables__large-info_icon">
        <div class="d-flex flex-column">
          <div class="tables__large-info_title">Заочный формат.</div>
          <div class="tables__large-info_description">Учитесь там, где вам удобно и есть интернет!</div>
        </div>
      </div>

      <div class="col-md-4 d-flex tables__large-info">
        <img src="../static/svg/icon-2.svg" alt="icon" class="align-self-start tables__large-info_icon">
        <div class="d-flex flex-column">
          <div class="tables__large-info_title">Поддержка системы НМО.</div>
          <div class="tables__large-info_description">Получайте баллы за участие в наших вебинарах, учебных программах, узнавайте новости о НМО.</div>
        </div>
      </div>

      <div class="col-md-4 d-flex tables__large-info">
        <img src="../static/svg/icon-2.svg" alt="icon" class="align-self-start tables__large-info_icon">
        <div class="d-flex flex-column">
          <div class="tables__large-info_title">Только с позиции доказательной медицины</div>
          <div class="tables__large-info_description">Получайте баллы за участие в наших вебинарах, учебных программах, узнавайте новости о НМО.</div>
        </div>
      </div>

      <div class="col-md-4 d-flex tables__large-info">
        <img src="../static/svg/icon-3.svg" alt="icon" class="align-self-start tables__large-info_icon">
        <div class="d-flex flex-column">
          <div class="tables__large-info_title">Максимум практики.</div>
          <div class="tables__large-info_description">Разбираем клинические случаи и непростые ситуации, вопросы приветствуются!</div>
        </div>
      </div>

      <div class="col-md-4 d-flex tables__large-info">
        <img src="../static/svg/icon-4.svg" alt="icon" class="align-self-start tables__large-info_icon">
        <div class="d-flex flex-column">
          <div class="tables__large-info_title">Программа аккредитована в системе НМО.</div>
          <div class="tables__large-info_description"></div>
        </div>
      </div>

      <div class="col-md-4 d-flex tables__large-info">
        <img src="../static/svg/icon-4.svg" alt="icon" class="align-self-start tables__large-info_icon">
        <div class="d-flex flex-column">
          <div class="tables__large-info_title">Программа аккредитована в системе НМО.</div>
          <div class="tables__large-info_description"></div>
        </div>
      </div>

    </div>

    <!--   Medium Tables   -->

    <div class="row full-medium-table d-none d-sm-flex d-xl-none tables__medium">

      <div class="col-sm-4 d-flex align-items-center tables__medium-info">
        <img src="~/static/svg/table2_1.svg" alt="icon" class="align-self-center tables__medium-info_icon">
        <div class="tables__medium-info_title"> Созданы ведущими экспертами и практикующими врачами</div>
      </div>


      <div class="col-sm-4 d-flex align-items-center tables__medium-info">
        <img src="~/static/svg/table2_2.svg" alt="icon" class="align-self-center tables__medium-info_icon">
        <div class="tables__medium-info_title"> Дистанционно в удобное для Вас время</div>
      </div>


      <div class="col-sm-4 d-flex align-items-center tables__medium-info">
        <img src="~/static/svg/table2_3.svg" alt="icon" class="align-self-center tables__medium-info_icon">
        <div class="tables__medium-info_title"> Только с позиции доказательной медицины</div>
      </div>

    </div>

    <!--   Small Tables   -->

    <div class="row full-small-table d-flex d-sm-none tables__small">
      <div class="container-fluid">
        <carousel
          v-if="isNuxtReady"
          :dots="false"
          :items="3"
          :margin="0"
          :autoplay="true"
          :autoplayHoverPause="true"
          :loop="true"
          :stagePadding="10"
          :responsive="{
          0:{
            items:1,
          }
        }"
        >

          <div class="col-sm-4 d-flex align-items-center tables__small-info">
            <img src="~/static/svg/table2_1.svg" alt="icon" class="align-self-center tables__small-info_icon">
            <div class="tables__small-info_title"> Созданы ведущими экспертами и практикующими врачами</div>
          </div>

          <div class="col-sm-4 d-flex align-items-center tables__small-info">
            <img src="~/static/svg/table2_2.svg" alt="icon" class="align-self-center tables__small-info_icon">
            <div class="tables__small-info_title"> Дистанционно в удобное для Вас время</div>
          </div>

          <div class="col-sm-4 d-flex align-items-center tables__small-info">
            <img src="~/static/svg/table2_3.svg" alt="icon" class="align-self-center tables__small-info_icon">
            <div class="tables__small-info_title"> Только с позиции доказательной медицины</div>
          </div>

        </carousel>
      </div>
    </div>

  </section>
</template>

<script>
  const carousel = () => window && window !== undefined ? import("vue-owl-carousel") : null;
  export default {
    name: 'Table',
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
          console.log("Nuxt ready!");
          vm.isNuxtReady = true;
        });
      }
    },
  }
</script>

<style lang="scss">


  // Large-width-table

  .tables {

    margin-top: 71px;

    &__large {
      padding: 40px 80px;
      box-shadow: 0 7px 70px rgba(0, 50, 123, 0.1);

      &-info {

        &:nth-child(4), &:nth-child(5), &:nth-child(6) {
          margin-top: 46px;
        }

        &_icon {
          margin-right: 15px;
        }

        &_title {
          font-weight: 600;
          font-size: 22px;
          line-height: 26px;
          padding-bottom: 13px;
          padding-right: 20px;
        }

        &_description {
          font-size: 16px;
          line-height: 19px;
          padding-right: 20px;
        }
      }
    }
  }


  // Medium-width-table

  .tables {
    margin-top: 71px;
    &__medium {
      &-info {
        padding: 6px;

        &_icon {
          margin-right: 15px;
        }

        &_title {
          font-weight: 500;
          font-size: 16px;
          line-height: 1.2em;
          @media (max-width: 650px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  // Carousel

  .tables {
    margin-top: 50px;
    &__small {
      &-info {
        display: flex;
        align-items: center;
        height: 70px;
        padding: 6px;

        &_icon {
          margin-right: 15px;
          @media (max-width: 350px) {
            margin-right: 10px;
          }
          width: 45px;
          height: 45px;
        }

        &_title {
          font-weight: 500;
          font-size: 16px;
          line-height: 1.2em;
          @media (max-width: 576px) {
            width: 60% !important;
          }
          @media (max-width: 400px) {
            font-size: 13px;
            width: 50% !important;
          }
        }
      }

      .owl-stage {
        right: 4%;
      }

      .owl-carousel .owl-item img {
        display: block;
        width: 45px;
      }

      .owl-nav {
        position: absolute !important;
        margin: 0 !important;
        right: 20px;
        top: 0;

        .owl-prev {
          position: absolute !important;
          left: -999em;
        }

        .owl-next {
          background: url("../static/svg/next.svg") 50% no-repeat white !important;
          text-indent: -999em;
          width: 58px;
          height: 58px;
          border-radius: 0 !important;
          border: 1px solid rgba(47, 128, 243, 0.09)
        }
      }

      .owl-stage-outer:after {
        content: "";
        position: absolute;
        width: 30%;
        height: 100%;
        right: -1px;
        top: 0;
        background: url("../static/img/grCarousel.png") 16px repeat-y;
      }
    }
  }
</style>
