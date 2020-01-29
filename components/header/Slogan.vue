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
    margin-top: 79px;
    &__programs{
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      padding-bottom: 18px;
      @media (min-width: 576px) {
        font-size: 20px;
        line-height: 24px;
        padding-bottom: 23px;
      }
      @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 24px;
        padding-bottom: 23px;
      }
    }

    &__title{
      font-weight: 700;
      font-size: 25px;
      line-height: 1.2em;
      padding-bottom: 20px;
      @media (min-width: 576px) {
        font-size: 33px;
        line-height: 39px;
        padding-bottom: 0px;
      }
      @media (min-width: 1024px) {
        font-size: 44px;
        line-height: 53px;
      }
      &-color {
        color: $active-color;
      }
    }
  }

</style>
