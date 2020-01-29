<template>
  <section class="container-fluid about">
    <h3 class="about__title">О программе</h3>
    <div class="about__content margin-content">Актуальность заместительной терапии обусловлена темпом роста больных с терминальной ХБП. Например, с 2015 года количество таких больных возросло на 11,6%
      к 2016 году.
      Эти же среднемировые показатели несколько ниже.
    </div>
    <div class="about__content">В нашей программе мы собрали самую актуальную информацию о заместительной почечной терапии, её осложнениях, а так же о сочетании ХБП и другой соматической патологии.
      В программе затрагиваются такие важные темы как ведение пациента на заместительной почечной терапии с тяжелой анемией и сердечно-сосудистой патологией. Не забыли
      и о питание пациента с ХБП. Так же мы собрали рекомендации ведущих международных и российских сообществ с высоким уровнем доказательности.
    </div>
  </section>
</template>

<script>
  export default {
    name: "AboutProgram"
  }
</script>

<style lang="scss" scoped>
  .about {

    padding-bootom: 50px;

    @media (min-width: 576px) {
    }
    @media (min-width: 1024px) {
    }

    &__title {
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 22px;
      line-height: 26px;
      @media (min-width: 576px) {
        font-weight: 600;
        font-size: 33px;
        line-height: 39px;
        margin-bottom: 23px;
      }
      @media (min-width: 1024px) {
        font-weight: 600;
        font-size: 34px;
        line-height: 41px;
        margin-bottom: 21px;
      }
    }
    &__content {
      font-size: 14px;
      line-height: 1.5em;
      @media (min-width: 576px) {
        font-size: 16px;
      }
      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
    .margin-content {
      margin-bottom: 1.5em;
    }
  }
</style>
