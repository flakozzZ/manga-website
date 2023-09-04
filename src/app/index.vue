<script lang="ts">
export default {
  name: 'App'
}
</script>


<template>
  <div class="app">
    <AppLayout/>
    <router-view>
    </router-view>

  </div>
</template>


<script setup lang="ts">

import AppLayout from "@/app/layout/AppLayout.vue";
</script>


<style scoped>

</style>