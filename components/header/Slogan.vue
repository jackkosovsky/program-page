<template>
  <article class="slogan">
    <div class="slogan__programs">программы нмо</div>
    <h1 class="slogan__title">
      Подготовка и начало заместительной почечной терапии
      <span class="slogan__title-color">36 баллов НМО (ЗЕТ)</span>
    </h1>
  </article>
</template>

<script>
  export default {
    name: "Slogan"
  }
</script>

<style lang="scss" scoped>

  .slogan{

    &__programs{
      margin-top: 47px;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      @media (min-width: 576px) {
        margin-top: 79px;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
      @media (min-width: 1024px) {
        margin-top: 53px;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
    }

    &__title{
      margin-top: 18px;
      margin-bottom: 0;
      font-weight: bold;
      font-size: 25px;
      line-height: 1.2em;
      @media (min-width: 576px) {
        margin-top: 23px;
        font-weight: bold;
        font-size: 33px;
        line-height: 39px;
      }
      @media (min-width: 1024px) {
        margin-top: 23px;
        font-weight: bold;
        font-size: 44px;
        line-height: 53px;
      }
      &-color {
        color: $active-color;
      }
    }
  }

</style>
