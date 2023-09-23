<script lang="ts">
export default {
  name: 'petitions'
}
</script>

<template>
  <div class="petition">
    <div class="main_petition">
      <h1 class="main__petition-title">Петиция на перевод</h1>
    </div>
    <petition-card :petitions="petition"/>
  </div>
</template>

<script setup lang="ts">
import PetitionCard from "@/shared/ui/petition-card/index.vue";


const petition = [
  {
    key: 'Ragnar Crimson',
    url: new URL('@/shared/assets/img/ragnarCrimson.svg', import.meta.url),
    name: 'Рагна Багровый',
    type: ['Манга', 'Выпускается', "2023"],
    format: 'еженедельник',
    chapters: '53'
  }
]
</script>

<style scoped lang="scss">
    .petition {
      display: flex;
      flex-direction: column;
    }
    .main_petition{
      margin: 47px 0 23px 0;
    }
    .main__petition-title{
        font-size: 16px;
        color: #1C274C;
        font-family: 'Exo 2', sans-serif;
    }
</style>