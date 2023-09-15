<script lang="ts">
export default {
  name: "Cards"
}
</script>


<template>
  <div class="card">
    <template v-for="card in cards" :key="card.key">
      <div class="card__img">
        <slot :name="card.key">
          <img :src="card.url" alt="title">
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

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 745px;
  display: flex;
  grid-gap: 5px;
  &__title {
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    font-family: 'Exo 2', sans-serif;
    margin-top: 5px;
  }
}

</style>