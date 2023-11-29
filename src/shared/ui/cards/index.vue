<script lang="ts">
export default {
  name: "Cards"
}
</script>


<template>
  <div class="gap-5 flex flex-row overflow-x-auto overflow-y-hidden scrollbar-hidden" >
    <template v-for="card in cards" :key="card.key">
      <div class="w-120 flex flex-col flex-wrap">
        <slot :name="card.key">
          <img class="max-w-120 h-180" :src="card.url" alt="title">
        </slot>
        <slot :name="card.key">
          <span class="font-nunito font-medium text-sm">{{ card.label }}</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface ICards {
  key: string,
  label?: string,
  url?: any,
  style?: object,
}

interface Props {
  cards: ICards[]
}

withDefaults(defineProps<Props>(), {})
</script>

<style scoped src="./index.scss">
</style>