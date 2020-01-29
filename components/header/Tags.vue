<template>
  <article class="tags d-flex justify-content-start flex-wrap">

    <transition-group name="fade" tag="div" class="tags__anim">
      <div class="tags__tag" v-for="(tag, index) in tags" :key="tag"> {{ tag }}</div>


      <div class="tags__more-btn" :key="-1"
           v-show="isVisible"
           @click="addTags"
      >
        + 30 показать
      </div>

      <div class="tags__more-btn" :key="-2"
           v-show="!isVisible"
           @click="delTags"
      >
        Скрыть
      </div>

    </transition-group>
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
          'терапия',
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
    margin-top: 37px;

    &__anim {
      padding: 0;
    }

    &__tag {
      display: inline-block;
      padding: 5px 11px;
      margin: 8px 8px 0px 0;
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
      display: inline-block;
      margin-left: 18px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      height: 18px;
      text-decoration: none;
      border-bottom: 1px dashed #000080;
      position: relative;
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
