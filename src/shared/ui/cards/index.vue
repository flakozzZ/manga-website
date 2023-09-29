<script lang="ts">
export default {
  name: "Cards"
}
</script>


<template>
  <div class="card">
    <template v-for="card in cards" :key="card.key">
      <div class="card__item">
        <slot :name="card.key">
          <img :src="card.url" alt="title">
        </slot>
        <slot :name="card.key">
          <span class="card__title">{{ card.label }}</span>
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