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

<style scoped lang="scss">
.table {
  width: 1250px;
  height: 500px;
  background: #E2E8FA;
  border-radius: 5px;

  &__titles {
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    padding: 10px;
  }

  &__items {
    width: 383px;
    display: flex;
    gap: 10px;
    padding-bottom: 15px;
  }
  &__title {
    color: #1C274C;
    font-size: 16px;
    font-weight: 900;
    font-family: 'Nunito', sans-serif;
    margin-bottom: 5px;
  }
  &__chapters {
    display: flex;
    gap: 5px;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
    color: #1C274C;
    margin-bottom: 5px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #1C274C;
    font-family: 'Nunito', sans-serif;

  }
  &__team {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 700;
  }
  &__time {
    font-weight: 500;
  }
}
</style>