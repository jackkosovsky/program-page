<template>
  <article class="recommend">
    <div class="recommend__rec">Данную программу рекомендуют:</div>
    <div class="d-flex ">
      <div class="recommend__client d-flex justify-content-center align-content-center">
        <img src="~/static/recommend-1.jpg" alt="client">
      </div>
      <div class="recommend__client d-flex justify-content-center align-content-center">
        <img src="~/static/recommend-2.jpg" alt="client">
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: "Recommends"
  }
</script>

<style lang="scss" scoped>

  .recommend {
    @media (min-width: 1024px) {

    }

    &__rec {
      font-size: 16px;
      line-height: 1.45em;
      padding-top: 12px;
      @media (min-width: 576px) {
        font-size: 23px;
        padding-top: 20px;
      }
      @media (min-width: 1024px) {
        font-size: 23px;
        padding-top: 20px;
      }
    }

    &__client {

        margin-top: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 227px;
      height: 74px;
      border-radius: 8px;
      border: 1px solid #eaeaea;
      margin-right: 5px;
      background: white;
      cursor: pointer;
      transition: border .3s ease;
      @media (max-width: 576px) {
        width: 227px;
        height: 74px;
      }

      &:hover {
        border: 1px solid lighten($active-color, 20%);
      }

      img {
        width: 80%;
        @media (max-width: 576px) {
          width: 95%;
        }
      }

      &:first-child {
        margin-right: 5px;
      }
    }
  }
</style>
