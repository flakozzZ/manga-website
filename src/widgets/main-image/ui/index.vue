<script lang="ts">
export default {
  name: "main-image"
}
</script>

<template>
  <Image
      ru-name="Магическая битва"
      :background="backgroundImage"
      en-name="Jujutsu Kaisen"
      :foreground="foregroundImage"
      read="32.2k"
      likes="132.2k"
      favorites="9.3(12.2k)"
      viewer="3.2m"

  />
</template>

<script setup lang="ts">
import Image from "@/shared/ui/image/image.vue";


const backgroundImage = new URL('@/shared/assets/img/background.png', import.meta.url)
const foregroundImage = new URL('@/shared/assets/img/jujutsukaisen.png', import.meta.url)
</script>

<style scoped lang="scss">

</style>