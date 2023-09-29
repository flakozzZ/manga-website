<script lang="ts">
export default {
  name: "new-releases"
}
</script>

<template>
  <div class="new-releases">
    <div class="release-title">Новинки</div>
    <cards :cards="releases" />
  </div>
</template>

<script setup lang="ts">

import Cards from "@/shared/ui/cards/index.vue";

const releases = [
  {
    key: 'D.Gray-Man',
    label: 'D.Gray-man',
    url: new URL('@/shared/assets/img/dGrayMan.svg', import.meta.url),
  },
  {
    key: 'Blue Lock',
    label: 'Синяя Тюрьма: Блю Лок',
    url: new URL('@/shared/assets/img/blueLock.svg', import.meta.url)
  },
  {
    key: 'Jujutsu Kaisen',
    label: 'Магическая Битва',
    url: new URL('@/shared/assets/img/jujutsuKaisen.svg', import.meta.url)
  },
  {
    key: 'My Hero Academy',
    label: 'Моя геройская Академия',
    url: new URL('@/shared/assets/img/myHeroAcademy.svg', import.meta.url)
  },
  {
    key: 'Ragnar Crimson',
    label: 'Рагна Багровый',
    url: new URL('@/shared/assets/img/ragnarCrimson.svg', import.meta.url)
  },
  {
    key: 'My Hero Academy',
    label: 'Моя геройская Академия',
    url: new URL('@/shared/assets/img/myHeroAcademy.svg', import.meta.url)
  },
  {
    key: 'Ragnar Crimson',
    label: 'Рагна Багровый',
    url: new URL('@/shared/assets/img/ragnarCrimson.svg', import.meta.url)
  },
  {
    key: 'My Hero Academy',
    label: 'Моя геройская Академия',
    url: new URL('@/shared/assets/img/myHeroAcademy.svg', import.meta.url)
  },
]
</script>

<style scoped lang="scss">
  .new-releases {
    margin-top: 40px;
  }

  .release-title {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 16px;
    font-family: "Nunito", sans-serif;
  }

</style>