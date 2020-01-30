<template>
  <div :class="[ this.position === 'header'? posUp : posDown ]">

    <div class="subscribe d-flex">

      <div class="subscribe__texts">

        <div class="subscribe__title" v-if="this.position === 'header'">Стоимость обучения:</div>
        <div class="subscribe__title" v-else>Подготовка и начало заместительной почечной терапии</div>

        <div class="subscribe__prices">
          <div class="subscribe__cost-old secondary-text"><s>10000 ₽</s></div>
          <div class="subscribe__cost">6800 ₽</div>
        </div>

      </div>

      <button class="subscribe__btn">Записаться</button>

    </div>

  </div>
</template>

<script>
  export default {
    name: "Subscribe",
    props: {
      position: {
        /*
        *  Must have this prop
        *  variations is : `header` or `content`
        *  can add new ones in the future
        */
        type: String,
        required: true
      },
    },
    data() {
      return {
        posUp: 'up-position',
        posDown: 'down-position',
        name: 'subscribe'
      }
    },
  }
</script>

<style lang="scss" scoped>

  // If position in the header

  .up-position {
    .subscribe {

      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 154px;
      padding: 0;
      background: white;

      @media (min-width: 576px) {
        flex-direction: row;
        justify-content: space-around;
        height: 165px;
        margin-top: 30px;
        box-shadow: 0 7px 70px rgba(0, 50, 123, 0.1);
      }
      @media (min-width: 1024px) {
        flex-direction: column;
        justify-content: space-around;
        width: 280px;
        height: 272px;
        margin-top: 100px;
        background: white;
      }

      @media (min-width: 1200px) {
        width: 335px;
      }

      &__texts {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        @media (min-width: 576px) {
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          align-items: center;
          justify-content: center;
          position: relative;
          top:13px;
        }
      }

      &__prices {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        @media (min-width: 576px) {
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          align-items: center;
          position: relative;
          top: 27px;
        }
      }

      &__title {
        font-size: 16px;
        line-height: 1.2em;
        @media (min-width: 576px) {
          font-size: 20px;
          line-height: 1.2em;
        }
        @media (min-width: 1024px) {
          font-size: 20px;
          line-height: 1.2em;
        }
      }

      &__cost-old {
        font-size: 16px;
        line-height: 1.3em;
        @media (min-width: 576px) {
          font-size: 20px;
          line-height: 24px;
        }
        @media (min-width: 1024px) {
          font-size: 22px;
          line-height: 26px;
        }
      }

      &__cost {
        font-weight: 600;
        font-size: 30px;
        line-height: 1.3em;
        @media (min-width: 576px) {
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
        @media (min-width: 1024px) {
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
        }
      }

      &__btn {
        background-color: $active-color;
        color: white;
        border: none;
        outline: none;
        padding: 23px;
        margin: 0;
        transition: background .3s ease, box-shadow .3s ease;

        &:hover {
          background-color: lighten($active-color, 7%);
          box-shadow: 0 7px 70px rgba(0, 50, 123, 0.2);
        }

        @media (min-width: 576px) {
          height: 66px;
          width: 300px;
          position: relative;
          top: 30%;
        }
        @media (min-width: 700px) {
          width: 260px;
        }
        @media (min-width: 1024px) {
          width: 100%;
          top: 24px;
          padding: 20px;
        }
      }
    }
  }

  // If position in the content

  .down-position {
    .subscribe {

      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 264px;
      padding: 0 0;
      margin-top: 22px;
      background: white;
      box-shadow: 0 7px 70px rgba(0, 50, 123, 0.1);

      @media (min-width: 576px) {
        flex-direction: row;
        justify-content: center;
        height: 165px;
        margin-top: 30px;
        box-shadow: 0 7px 70px rgba(0, 50, 123, 0.1);
      }
      @media (min-width: 1024px) {
        justify-content: space-around;
        background: white;
        margin-top: 85px;
        background: white;
        box-shadow: 0 7px 70px rgba(0, 50, 123, 0.1);
      }

      &__texts {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        padding: 30px;
        @media (min-width: 576px) {
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 55%;
        }
        @media (min-width: 1024px) {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          position: relative;
        }
      }

      &__prices {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 15px;
        @media (min-width: 576px) {
          flex-direction: row-reverse;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          flex-direction: row;
          width: 340px;
        }
      }

      &__title {
        font-weight: 700;
        font-size: 18px;
        line-height: 1.3em;
        justify-content: center;
        padding: 0 30px;
        @media (min-width: 576px) {
          font-weight: 700;
          font-size: 22px;
          line-height: 26px;
        }
        @media (min-width: 1024px) {
          font-size: 25px;
          line-height: 30px;
        }
      }

      &__cost-old {
        font-size: 16px;
        line-height: 1.3em;
        @media (min-width: 576px) {
          font-size: 20px;
          line-height: 24px;
          position: relative;
          top: 10px;
          left: 10px;
        }
        @media (min-width: 1024px) {
          font-size: 22px;
          line-height: 26px;
          left: 0;
        }
      }

      &__cost {
        font-weight: 600;
        font-size: 30px;
        line-height: 1.3em;
        @media (min-width: 576px) {
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
        }
        @media (min-width: 1024px) {
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
        }
      }

      &__btn {
        background-color: $active-color;
        color: white;
        border: none;
        outline: none;
        padding: 23px;
        margin: 0;
        transition: background .3s ease, box-shadow .3s ease;

        &:hover {
          background-color: lighten($active-color, 7%);
          box-shadow: 0 7px 70px rgba(0, 50, 123, 0.2);
        }

        @media (min-width: 576px) {
          height: 66px;
          width: 200px;
          position: relative;
          top: 30%;
          padding: 20px;
        }
        @media (min-width: 1024px) {
          width: 20%;
          top: 53px;
          padding: 20px;
        }
      }

    }
  }

</style>
