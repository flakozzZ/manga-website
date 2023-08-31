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
        @input="$emit('update:modelValue', $event.target.value)"
        class="field__input"
        :disabled="disabled"
        autocomplete="new-password"
        :placeholder="placeholder"
    />
</div>
</template>

<script setup lang="ts">
  interface Props {
    type: 'text' | 'password' | 'email' | 'url'
    placeholder: string
    modelValue?: string | number
    disabled?: boolean
    autocomplete?: boolean
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