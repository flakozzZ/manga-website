<script lang="ts">
export default {
  name: 'title-table'
}
</script>

<template>
  <div class="table">
    <div class="table__titles">
      <template v-for="item in table" :key="item.key">
        <div class="table__items">
          <div class="table__img">
            <img :src="item.url" alt="">
          </div>
          <div class="table__info">
            <div class="table__title">
              {{ item.title }}
            </div>
            <div class="table__chapters">
              <span class="table__tome">{{ item.tome }}</span>
              <span class="table__chapter">{{ item.chapter }}</span>
              <span class="table__name">{{ item.name }}</span>
            </div>
            <div class="table__footer">
              <div class="table__team">
                <span><img :src="item.icon" alt=""></span>
                <span>{{ item.team }}</span>
              </div>
              <div class="table__time">
                <span>{{ item.time }}</span>
              </div>
            </div>
          </div>
        </div>

      </template>
    </div>
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