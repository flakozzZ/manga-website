<script lang="ts">
export default {
  name: 'AButton'
}
</script>

<template>
  <button
    class="a-button"
    :class="[
        `a-button--${props.type}`,
        `a-button--${props.size}`,
        {
          'a-button--with-icon': props.withIcon,
          'a-button--wide': props.wide,
          'a-button--fullwidth': props.fullWidth,
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