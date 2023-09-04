<script lang="ts">
export default {
  name: 'Login'
}
</script>

<template>
  <div class="login-main">
    <sign-in />
  </div>
</template>

<script setup lang="ts">
import SignIn from "@/features/authentication/login/ui/index.vue";
</script>

<style scoped>
  .login-main {
    padding-top: 150px;
  }
</style>