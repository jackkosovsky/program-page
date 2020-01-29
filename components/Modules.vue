<template>
  <section class="container-fluid modules">

    <h3 class="modules__title">Основные модули учебной программы</h3>
    <ul class="modules__dashed-list">
      <li v-for="(module, index) in modules" :key="module.id" class="modules__dashed-list-module-item">
        {{ module }}
      </li>
    </ul>

  </section>
</template>

<script>
  export default {
    name: "Modules",
    data: () => ({
      modules: [
        'Выбор метода заместительной терапии функции почек',
        'Сосудистый доступ для гемодиализа',
        'Остаточная функция почек у пациентов получающих лечение диализом',
        'Осложнения сосудистого доступа',
        'Непосредственные осложнения процедур гемодиализа',
        'Осложнения перитонеального диализа и связанных манипуляций',
        'Трансплантация почки'
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .modules {

    padding: 50px 0;

    @media (min-width: 576px) {
    }
    @media (min-width: 1024px) {
    }

    &__title {
      font-weight: 600;
      font-size: 22px;
      line-height: 26px;
      padding-bottom: 30px;
      @media (min-width: 576px) {
        font-weight: 600;
        font-size: 33px;
        line-height: 39px;
        padding-bottom: 33px;
      }
      @media (min-width: 1024px) {
        font-weight: 600;
        font-size: 34px;
        line-height: 41px;
        padding-bottom: 31px;
      }
    }

    &__dashed-list {
      list-style: none;
      padding: 0;

      &-module-item {
        text-indent: 11px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        padding-bottom: 14px;
        @media (min-width: 576px) {
          font-size: 18px;
          line-height: 21px;
          padding-bottom: 15px;
        }
        @media (min-width: 1024px) {
          font-size: 20px;
          line-height: 24px;
          padding-bottom: 21px;
        }

        &:before {
          content: "-";
          position: absolute;
          text-indent: -10px;
        }
      }
    }
  }


  // < Small или просто
  @media (max-width: 576px) {
  }

  // Small
  @media (min-width: 576px) and (max-width: 768px) {
  }

  // Medium
  @media (min-width: 768px) and (max-width: 992px) {
  }

  // Large
  @media (min-width: 992px) and (max-width: 1200px) {
  }

  // Extra
  @media (min-width: 1200px) {
  }

</style>
