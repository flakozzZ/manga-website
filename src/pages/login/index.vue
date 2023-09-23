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
import SignIn from "@/widgets/authentication/login/ui/index.vue";
</script>

<style scoped>
  .login-main {
    padding-top: 150px;
  }
  
  @media (max-width: 768px) {
    .login-main {
      padding-top: 0;
    }
  }
</style>