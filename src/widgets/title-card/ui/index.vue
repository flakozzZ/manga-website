<script lang="ts">
export default {
  name: "title-card"
}
</script>

<template>
  <div class="last-release">
    <div class="last-title">Последнее обновление</div>
    <title-table :table="table" />

  </div>
</template>

<script setup lang="ts">
import TitleTable from "@/shared/ui/title-table/index.vue";

const table = [
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/oshinoko.png', import.meta.url),
    key: 'Child of Idol',
    title: 'Звездное дитя',
    tome: 'Том 12',
    chapter: 'Глава 121',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '41 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/bluelock.png', import.meta.url),
    key: 'Blue Lock',
    title: 'Синяя Тюрьма: Блю-Лок',
    tome: 'Том 22',
    chapter: 'Глава 191',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '59 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/ragnarcrimson.png', import.meta.url),
    key: 'Ragnar Crimson',
    title: 'Рагна Багровый',
    tome: 'Том 11',
    chapter: 'Глава 54',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '1 час назад'
  },
  {
    url: new URL('@/shared/assets/img/dgrayman.png', import.meta.url),
    key: 'D.Gray-man',
    title: 'D.Dray-man',
    tome: 'Том 29',
    chapter: 'Глава 248',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '1 час назад'
  },
  {
    url: new URL('@/shared/assets/img/myheroacademy.png', import.meta.url),
    key: 'My Hero Academy',
    title: 'Моя геройская академия',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },
  {
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url),
    key: 'Jujutsu Kaisen',
    title: 'Магическая битва',
    tome: 'Том 22',
    chapter: 'Глава 226',
    name: 'Земли дьявола, противосто ...',
    icon: new URL('@/shared/assets/img/atoa.svg', import.meta.url),
    team: 'ATOA team',
    time: '39 минут назад'
  },

]
</script>
<style scoped lang="scss">
  .last-release {
    margin-top: 44px;
  }

  .last-title{
    font-size: 16px;
    font-weight: 700;
    font-family: "Nunito", sans-serif;
    margin-bottom: 20px;
  }
</style>