<template>
  <article class="tags d-flex justify-content-start flex-wrap">

    <transition-group name="fade" tag="ul" class="tags__anim">
      <li class="tags__tag" v-for="(tag, index) in tags" :key="tag"> {{ tag }}</li>
    </transition-group>

    <div class="tags__more-btn"
         v-show="isVisible"
         @click="addTags"
    >
      + 30 показать
    </div>

    <div class="tags__more-btn"
         v-show="!isVisible"
         @click="delTags"
    >
      Скрыть
    </div>
  </article>
</template>

<script>
  export default {
    name: "Tags",
    data() {
      return {
        delay: 30,
        isVisible: true,
        addNum: 30,
        delNum: 0,
        tags: [
          'нефрология',
          'еерапия',
          'пластика',
          'педиатрия',
          'акушерство',
          'хирургия',
          'генетика',
        ],
        newFakeApiArray: [
          'медсестринство',
          'офтальмология',
          'стоматология',
          'косметика',
          'кардиология',
          'неврология',
          'психиатрия',
          'отоларингология',
          'психотерапия',
          'микрохирургия',
          'нутрициология',
          'ортодонтия ',
          'иммунология',
          'вирусология',
          'психология',
          'гомеопатия',
          'эндокринология',
          'гинекология',
          'санитария',
          'ветеринария',
          'валеология',
          'онкология',
          'фармакология',
          'аллергология',
          'проктология',
          'дерматология',
          'травматология',
          'оптометрия',
          'иммунология',
          'ревматология ',
          'физиотерапия'
        ]
      }
    },
    methods: {

      addTags() {
        this.isVisible = !this.isVisible
        this.newFakeApiArray.forEach((element, index) => {
          setTimeout(() => {
            this.tags.push(element);
          }, this.delay * index);
        });
        this.delNum += 30
      },

      delTags() {
        this.isVisible = !this.isVisible
        while (this.delNum > 0) {
          const subtraction = () => this.tags.pop();
          setTimeout(subtraction, 400);
          this.delNum--
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    justify-content: flex-end;
    margin-top: 45px;
    &__anim {
      padding: 0;
    }

    &__tag {
      display: inline-block;
      padding: 5px 11px;
      margin: 0 8px 8px 0;
      text-transform: capitalize;
      background: white;
      border: 1px solid #f0f0f0;
      cursor: pointer;
      transition: background .3s ease, box-shadow .3s ease, color .2s ease;

      &:hover {
        color: white;
        background: $active-color;
        box-shadow: 0 7px 70px rgba(0, 50, 123, 0.3);
      }
    }

    &__more-btn {
      display: block;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      height: 17px;
      text-decoration: none;
      border-bottom: 1px dashed #000080;
      position: relative;
      top: 8px;
      z-index: 99999999;
      cursor: pointer;
    }

    .fade-enter,
    .fade-leave-active {
      opacity: 0;
      transform: scale(1.4, 1.1);
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: .5s ease-in-out;
    }


  }
</style>
