<script lang="ts">
export default {
  name: "release-cards"
}
</script>

<template>
  <div class="main-release">
    <div class="main__releases">
      <h1 class="main__release-title">Ближайшие релизы</h1>
    </div>
    <cards :cards="card"/>
  </div>
</template>

<script setup lang="ts">
import Cards from "@/shared/ui/cards/index.vue";

const card = [
  {
    key: 'D.Gray-Man',
    label: 'D.Gray-man',
    url: new URL('@/shared/assets/img/dgrayman.png', import.meta.url),
  },
  {
    key: 'Blue Lock',
    label: 'Синяя Тюрьма: Блю Лок',
    url: new URL('@/shared/assets/img/bluelock.png', import.meta.url)
  },
  {
    key: 'Jujutsu Kaisen',
    label: 'Магическая Битва',
    url: new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url)
  },
  {
    key: 'Ragnar Crimson',
    label: 'Рагна Багровый',
    url: new URL('@/shared/assets/img/ragnarcrimson.png', import.meta.url)
  },
  {
    key: 'My Hero Academy',
    label: 'Моя геройская Академия',
    url: new URL('@/shared/assets/img/myheroacademy.png', import.meta.url)
  },
  {
    key: 'Child of Idol',
    label: 'Звездное дитя',
    url: new URL('@/shared/assets/img/oshinoko.png', import.meta.url)
  },
]
</script>
<style scoped lang="scss">
.main__releases {
  margin: 47px 0 23px 0;
}

.main__release-title {
  font-size: 16px;
  color: #1C274C;
  font-family: 'Exo 2', sans-serif;

}
</style>