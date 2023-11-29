<script lang="ts">
export default {
  name: 'title-table'
}
</script>

<!--<template>-->
<!--  <div class="table">-->
<!--    <div class="table__titles">-->
<!--      <template v-for="item in table" :key="item.key">-->
<!--        <div class="table__items">-->
<!--          <div class="table__img">-->
<!--            <img class="table__img" :src="item.url" alt="">-->
<!--          </div>-->
<!--          <div class="table__info">-->
<!--            <div class="table__title">-->
<!--              {{ item.title }}-->
<!--            </div>-->
<!--            <div class="table__chapters">-->
<!--              <span class="table__tome">{{ item.tome }}</span>-->
<!--              <span class="table__chapter">{{ item.chapter }}</span>-->
<!--              <span class="table__name">{{ item.name }}</span>-->
<!--            </div>-->
<!--            <div class="table__footer">-->
<!--              <div class="table__team">-->
<!--                <span><img :src="item.icon" alt=""></span>-->
<!--                <span>{{ item.team }}</span>-->
<!--              </div>-->
<!--              <div class="table__time">-->
<!--                <span>{{ item.time }}</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </template>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:w-full maw-w-1250 justify-center mx-auto">
    <template v-for="item in table" :key="item.key">
      <div class="bg-manga-bg flex font-nunito gap-2 items-center p-2.5">
        <img class="max-w-52 h-80" :src="item.url" alt="Icon">
        <div class="flex flex-col w-full">
          <div class="text-manga-1 text-base font-extrabold">{{ item.title }}</div>
          <div class="flex gap-x-1 text-sm my-1">
            <p class="font-medium">{{ item.tome }}</p>
            <p class="font-medium">{{ item.chapter }}</p>
            <p class="font-semibold hidden sm:hidden md:block lg:block">{{ item.name }}</p>
          </div>
          <div class="flex justify-between gap-1 items-center text-xs">
            <div class="flex gap-1 items-center">
              <img :src="item.icon" alt="icon">
              <p class="font-extrabold">{{ item.team }}</p>
            </div>
            <p>{{ item.time }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">


interface ITable {
  key: string
  url?: any
  title?: string
  tome?: string
  chapter?: string
  name: string
  icon?: any
  team?: string,
  time?: string
}

interface Props {
  table: ITable[]
}

withDefaults(defineProps<Props>(), {})


</script>

<style scoped src="./index.scss">

</style>