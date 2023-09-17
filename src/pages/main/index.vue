<script lang="ts">
export default {
  name: "Main"
}

</script>
<template>
  <div class="main">
    <main-image/>
    <div class="main__block">
      <release-cards/>
      <petitions />
    </div>
    <title-card />
    <new-releases />
  </div>

</template>

<script setup lang="ts">
import MainImage from "@/features/main-image/ui/index.vue";
import ReleaseCards from "@/features/release-cards/ui/index.vue";
import Petitions from "@/features/petition/ui/index.vue";
import TitleCard from "@/features/title-card/ui/index.vue";
import NewReleases from "@/features/new-releases/ui/index.vue";


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


}
</style>