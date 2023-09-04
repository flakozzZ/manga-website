<script lang="ts">
export default {
  name: 'Register'
}
</script>


<template>
  <div class="register-main">
    <sign-up />
  </div>
</template>


<script setup lang="ts">
import SignUp from "@/features/authentication/register/ui/index.vue";
</script>


<style scoped>
  .register-main {
    padding-top: 150px;
  }
</style>