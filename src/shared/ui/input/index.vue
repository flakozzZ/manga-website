<script lang="ts">
export default {
  name: 'AInput'
}
</script>

<template>
<div class="field">
    <input
        :type="inputType"
        :value="modelValue"
        class="field__input"
        :class="[
            `field__input--${props.bgColor}`
        ]"
        :disabled="disabled"
        autocomplete="new-password"
        :placeholder="placeholder"
        :style="{
          color: props.placeholderColor,
        }"
    />
  <div class="field__icon">
    <icon :name="props.icon" class="icon" />
  </div>
</div>
</template>

<script setup lang="ts">

  import Icon from "@/shared/ui/icon/index.vue";

  interface Props {
    type: 'text' | 'password' | 'email' | 'url'
    bgColor?: string
    placeholder: string
    placeholderColor?: string
    modelValue?: string | number
    disabled?: boolean
    autocomplete?: boolean
    icon?: string
  }

  defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const props = withDefaults(defineProps<Props>(),{
    autocomplete: true
  })

  const inputType = props.type
</script>

<style scoped src="./index.scss">
</style>