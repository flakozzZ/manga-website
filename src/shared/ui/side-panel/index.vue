<script lang="ts">
export default {
  name: 'side-panel'
}
</script>


<template>
  <div
      v-if="props.show"
      class="h-auto fixed top-0 left-0 w-full bg-black/70 z-40"
      @click="$emit('close')"
  >
  </div>
  <div :class="props.show ? 'translate-x-0' : '-translate-x-full' "
       class="fixed side-panel top-0 left-0 z-40 w-64 h-auto p-4 overflow-y-auto transition-transform">
    <div class="pt-4 pr-2.5">
      <Icon @click="$emit('close')" class="cursor-pointer absolute right-3 mt-1" name="close"/>
      <slot></slot>
    </div>
  </div>
</template>


<script setup lang="ts">


import Icon from "@/shared/ui/icon/index.vue";

interface Props {
  show: boolean,
}


const props = withDefaults(defineProps<Props>(), {})

defineEmits(['close'])
</script>


<style scoped>
.side-panel {
  background: #F3F6FF;

}
</style>