<script lang="ts">
export default {
  name: "Main"
}

</script>
<template>
  <div class="main">
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
  </div>
</template>

<script setup lang="ts">
import Image from "@/shared/ui/image/image.vue";

const backgroundImage = new URL('@/shared/assets/icons/backgroundLogo.svg', import.meta.url)
const foregroundImage = new URL('@/shared/assets/icons/foregroundLogo.svg', import.meta.url)
</script>

<style scoped>
  .main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>