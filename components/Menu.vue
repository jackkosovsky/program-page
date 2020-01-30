<template>
  <div>

    <Modal v-show="isModalVisible" @close="closeModal"/>
    <div class="container-fluid navigation">

      <nav class="navbar navbar-expand-xxl px-0">

        <div class="min-logo d-flex navigation__hamburger d-xl-none">
          <div class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent">
            <img src="~/static/gamburger.svg" alt="">
          </div>
          <nuxt-link class="logo" to="/">
            <div class="double-logo d-flex flex-column d-block d-xl-none">
              <h4 class="navigation__hamburger-title">Федеральный</h4>
              <h4 class="navigation__hamburger-title">Центр НМО</h4>
            </div>
          </nuxt-link>
        </div>

        <b-navbar-brand class="logo d-none d-xl-flex flex-column" to="/">
          <h4 class="navigation__title d-none d-xl-block">Федеральный Центр НМО</h4>
          <span class="navigation__description secondary-text">Дистанционное обучение врачей, медсестер и фармацевтов</span>
        </b-navbar-brand>

        <div class="navigation__phone d-none d-md-flex flex-column order-1 order-xl-2">
          <div>+7 (984) 888-45-42</div>
          <div class="navigation__phone-callMe">Заказать звонок</div>
        </div>

        <div class="navigation__phone-icon d-sm-flex d-md-none ">
          <div><a href="tel:+7 (812) 409-97-36" class="email-text"><img src="../static/phone.svg" alt=""></a></div>
        </div>

        <div class="navigation__btn d-none d-md-flex order-2 order-xl-3" @click="showModal">Вход или регистрация</div>


        <div class="collapse navbar-collapse navigation__main-menu order-3 order-xl-1" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link" to="/webinar">
                Вебинары
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link" to="/programs">
                Программы НМО
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link" to="/help">
                Помощь
              </nuxt-link>
            </li>

          </ul>
        </div>

      </nav>

    </div>
  </div>
</template>

<script>
  import Modal from '~/components/Modal'

  export default {
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    components: {
      Modal
    }
  }
</script>

<style lang="scss" scoped>

  .navigation {

    &__title {
      @media (min-width: 576px) {
        margin-bottom: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: $text-color;
      }
      @media (min-width: 1024px) {
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
      }
    }

    &__description {
      font-size: 16px;
      line-height: 19px;
      display: none;
      @media (min-width: 1840px) {
        display: block;
      }
    }

    &__hamburger {
      button {
        border: none;
        outline: none;
        color: $text-color;
        padding-left: 0;
        padding-right: 23px;
      }

      &-title {
        font-weight: bold;
        font-size: 18px;
        line-height: 15px;

        &:first-child {
          margin-bottom: 5px;
          margin-top: 5px;
        }
      }
    }

    .navbar-toggler {
      padding-left: 0;
      margin-top: 4px;
      cursor: pointer;
    }

    .logo {
      padding-right: 0 !important;
      color: $text-color;

      &:hover {
        text-decoration: none;
      }
    }

    #navbarSupportedContent{
      .nav-item{
        a{
          padding: 6px;
          margin-left: 9px;
        }
      }
    }

    &__main-menu {
      @media (max-width: 1580px) and (min-width: 1024px) {
        text-indent: -999em;
      }
    }

    .nav-link {
      padding: 0 25px;

      @media (max-width: 1920px) {
        margin: 0 24px;
        transform: translate(22px, 0px);
      }
      @media (max-width: 1900px) {
        margin: 0 22px;
        transform: translate(20px, 0px);
      }
      @media (max-width: 1880px) {
        margin: 0 20px;
        transform: translate(18px, 0px);
      }
      @media (max-width: 1860px) {
        margin: 0 18px;
        transform: translate(16px, 0px);
      }
      @media (max-width: 1840px) {
        margin: 0 16px;
        transform: translate(100px, 0px);
      }
      @media (max-width: 1820px) {
        margin: 0 16px;
        transform: translate(60px, 0px);
      }
      @media (max-width: 1800px) {
        margin: 0 14px;
        transform: translate(50px, 0px);
      }
      @media (max-width: 1700px) {
        margin: 0 12px;
        transform: translate(50px, 0px);
      }
      @media (max-width: 1640px) {
        margin: 0 10px;
        transform: translate(30px, 0px);
      }

      font-weight: 500;
      font-size: 18px;
      color: $text-color;
    }

    .active {
      color: $active-color;
    }

    a.nav-link:hover {
      color: $active-color;
    }

    &__phone {
      font-weight: 600;
      font-size: 19px;
      line-height: 24px;
      @media (min-width: 1024px) {
        transform: translate(-66px, 0);
      }
      @media (max-width: 1100px) and (min-width: 1024px) {
        font-size: 17px;
      }

      &-callMe {
        font-size: 18px;
        font-weight: normal;
        color: $active-color;
        border-bottom: 1px dashed;
        height: 21px;
        width: 130px;
        cursor: pointer;
      }
    }

    &__phone-icon{
      padding: 10px;
      margin: 12px 0;
    }

    &__btn {
      justify-content: center;
      align-items: center;
      margin: 5px 0;
      color: white;
      height: 66px;
      width: 244px;
      background: $active-color;
      cursor: pointer;
      transition: background .3s ease, box-shadow .3s ease;

      @media (max-width: 1124px) {
        width: 190px;
      }

      &:hover {
        background: lighten($active-color, 10%);
        box-shadow: 0 7px 70px rgba(0, 50, 123, 0.3);
      }
    }

  }


</style>
