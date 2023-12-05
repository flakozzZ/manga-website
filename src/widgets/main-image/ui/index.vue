<script lang="ts">
export default {
  name: 'main-image'
}
</script>
<template>
  <Image
      ru-name="Магическая битва"
      :background="bgSize"
      en-name="Jujutsu Kaisen"
      foreground=""
      read="32.2k"
      likes="132.2k"
      favorites="9.3(12.2k)"
      viewer="3.2m"
  />
</template>

<script setup lang="ts">
import Image from "@/shared/ui/image/image.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";



const bgSize = ref<string | null>(null)

const handleResize = () => {
  if(window.innerWidth < 365) {
    bgSize.value = new URL('@/shared/assets/img/smallBg.png', import.meta.url).href
  }
  else if(window.innerWidth < 1250) {
    bgSize.value = new URL('@/shared/assets/img/secondBackground.png', import.meta.url).href

  }
  else {
    bgSize.value = new URL('@/shared/assets/img/background.png', import.meta.url).href

  }
}


onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  handleResize()
})



</script>

<style scoped lang="scss">
</style>
