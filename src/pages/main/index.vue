<script lang="ts">
export default {
  name: "Main"
}

</script>
<template>
  <div class="main">
    <main-image/>
    <div class="main__block">
      <router-link to="auth/sign-in">Signin</router-link>
      <router-link to="auth/sign-up">Signup</router-link>
      <release-cards/>
      <petitions class="main__petition" />
    </div>
    <title-card />
    <new-releases />
  </div>

</template>

<script setup lang="ts">
import MainImage from "@/widgets/main-image/ui/index.vue";
import ReleaseCards from "@/widgets/release-cards/ui/index.vue";
import Petitions from "@/widgets/petition/ui/index.vue";
import TitleCard from "@/widgets/title-card/ui/index.vue";
import NewReleases from "@/widgets/new-releases/ui/index.vue";


</script>

<style scoped lang="scss">
.main {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  &__block {
    display: flex;
    justify-content: space-between;
  }
  &__petition {
    margin-right: 40px;
  }


}
</style>