<script lang="ts">
export default {
  name: 'title-table'
}
</script>

<template>
    <div class="table">
      <template v-for="item in table" :key="item.key">

      </template>
    </div>
</template>

<script setup lang="ts">
interface ITable {
  key: string
  url?: any
  title: string
  tome: string
  chapter: string
  icon?: string
  team: string,
  time: string
}

interface Props {
  table: ITable[]
}

withDefaults(defineProps<Props>(), {})
</script>

<style scoped lang="scss">

</style>