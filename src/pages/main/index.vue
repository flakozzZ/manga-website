<script lang="ts">
export default {
  name: "Main"
}

</script>
<template>
  <div class="w-full main mx-auto p-2">
    <!--    <main-image/>-->
    <release-cards/>
    <!--      <petitions class="main__petition" />-->
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
    max-width: 1250px;
  }
</style>