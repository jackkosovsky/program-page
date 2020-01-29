<template>
  <footer>
    <div class="container-fluid footer-size footer">

      <div class="row justify-content-center">

        <section class="justify-content-center col-lg-4 col-xl-4 d-flex align-items-center">
          <h4 role="logo">Федеральный Центр НМО</h4>
        </section>

        <div class="justify-content-center col-lg-4 col-xl-2 text-xl-left d-flex justify-content-lg-center align-items-center p-0">
          <address class="f-container">
            <div class="secondary-text">Почта:</div>
            <div>info@vrachu.ru</div>
          </address>
        </div>

        <div class="justify-content-center p-0 col-lg-4 d-flex justify-content-lg-end col-xl-2 text-xl-left">
          <address class="f-container">
            <div class="secondary-text">с 10:00 до 20:00 (МСК)</div>
            <div><a href="tel:+7 (812) 409-97-36" class="email-text">+7 (812) 409-97-36</a></div>
          </address>
        </div>

        <div class="col-lg col-xl-4 ">
          <b-navbar class="justify-content-center d-flex justify-content-xl-end justify-content-sm-center">
            <b-navbar-nav>
              <div class="row secondary-text justify-content-center justify-sm-content-start">
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

  .footer{
    padding-top: 26px;
    padding-bottom: 50px;
    @media (min-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }


  .container-fluid.footer-size{
    @media (min-width: 1024px) and (max-width: 1400px){
      width: 100% !important;
    }
  }

</style>
