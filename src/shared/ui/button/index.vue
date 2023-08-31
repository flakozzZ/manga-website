<script lang="ts">
export default {
  name: 'AButton'
}
</script>

<template>
  <button
    class="a-button"
    :class="[
        `a-button--${type}`,
        `a-button--${size}`,
        {
          'a-button--with-icon': withIcon,
          'a-button--wide': wide,
          'a-button--fullwidth': fullWidth,
        },
    ]"
  >
    <slot>Добавить</slot>
    </button>

</template>

<script setup lang="ts">
  interface Props {
    type?: string,
    size?: string,
    withIcon?: boolean,
    wide?: boolean,
    fullWidth?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'primary',
    size: 'sm',
    withIcon: false,
    wide: false,
    fullWidth: false
  })
</script>

<style scoped src="./index.scss">

</style>