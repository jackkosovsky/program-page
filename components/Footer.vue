<template>
  <footer>
    <div class="container-fluid footer-size footer">

      <div class="row justify-content-center">

        <section class="justify-content-center col-lg-4 col-xl-4 d-flex align-items-center footer__logo">
          <h4>Федеральный Центр НМО</h4>
        </section>

        <div class="text-center text-lg-left justify-content-center col-lg-4 col-xl-2 text-xl-left d-flex justify-content-lg-center align-items-center p-0 footer__mail">
          <address>
            <div class="secondary-text">Почта:</div>
            <div>info@vrachu.ru</div>
          </address>
        </div>

        <div class="text-center text-lg-left justify-content-center align-items-center p-0 col-lg-4 d-flex justify-content-lg-end col-xl-2 footer__telephone">
          <address class="f-container">
            <div class="secondary-text footer__time">с 10:00 до 20:00 (МСК)</div>
            <div><a href="tel:+7 (812) 409-97-36" class="email-text">+7 (812) 409-97-36</a></div>
          </address>
        </div>

        <div class="col-lg col-xl-4 some-small">
          <b-navbar class="justify-content-center d-flex justify-content-xl-end justify-content-sm-center">
            <b-navbar-nav>
              <div class="row secondary-text justify-content-center justify-sm-content-start footer__footer-menu">
                <b-nav-item to="/">Документы</b-nav-item>
                <b-nav-item to="/">Политика конфиденциальности</b-nav-item>
              </div>
            </b-navbar-nav>
          </b-navbar>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>

  .footer {
    padding-top: 26px;
    padding-bottom: 16px;

    &__logo {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
    }

    @media (min-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .email-text {
    color: $text-color
  }


  .container-fluid.footer-size {
    @media (min-width: 1024px) and (max-width: 1520px) {
      width: 100% !important;
      .footer {
        &__logo {
          font-size: .5em;
        }

        &__footer-menu {
          font-size: .9em;
        }
      }
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      width: 100% !important;
      .footer {
        &__logo {
          font-size: .4em
        }

        &__time {
          font-size: .8em
        }

        &__footer-menu {
          font-size: .8em
        }

      }
    }
  }

  @media (max-width: 992px) {
    .footer__logo {
      margin-top: 14px
    }
    .footer__mail {
      margin-top: 12px
    }

    .footer__telephone {
      margin-top: -8px;
      margin-bottom: 10px;
    }
    .footer__footer-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -8px;
    }
    .some-small {
      margin-top: -2px;
      margin-bottom: 20px;
      .nav-item {
        line-height: 12px;
      }
    }
  }

</style>
