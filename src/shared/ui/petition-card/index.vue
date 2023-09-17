<script lang="ts">
export default {
  name: "petition-card"
}
</script>


<template>
  <div class="petition">
    <template v-for="petition in petitions" :key="petition.key">
      <div class="petition__items">
        <div class="petition__image">
          <slot :name="petition.key">
            <img :src="petition.url" alt="Img">
          </slot>
        </div>
        <div class="petition__info">
          <div class="petition__title">
            {{petition.name}}
          </div>
          <div class="petition__types" >
            <span class="petition__type" v-for="typeItem in petition.type" :key="petition.key">{{typeItem}}</span>
          </div>
          <div class="petition__time">
            <div class="petition__format">
              <span>Формат выпуска: </span>
              <span>{{petition.format}}</span>
            </div>
            <div class="petition__chapter">
              <span>Кол. глав: </span>
              <span class="petition__chap">{{petition.chapters}}</span>
            </div>
          </div>
          <a-button size="lg" type="primary" full-width>Подписать петицию</a-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import AButton from "@/shared/ui/button/index.vue";

interface IPetitions {
  key: string
  url?: any
  name: string
  type: string[]
  format: string
  chapters: string
}

interface Props {
  petitions: IPetitions[]
}

withDefaults(defineProps<Props>(), {})
</script>


<style scoped lang="scss">
.petition{
  color: #1C274C;
  font-family: "Exo 2", sans-serif;


  &__items{
    display: flex;
    gap: 10px;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    text-align: center;

  }
  &__types {
    display: flex;
    gap: 5px;
    font-size: 12px;
    font-weight: 700;
    justify-content: center;
    margin-top: 13px;


  }
  &__type {
    border-radius: 7px;
    padding: 5px 10px 7px;
    background: #E2E8FA;

  }
  &__time {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-weight: 700;
    font-size: 14px;
    margin: 15px 0;
  }
  &__format {
    display: flex;
    gap: 35px;
  }
  &__chapter{
    display: flex;
    justify-content: space-between;
  }
}
</style>