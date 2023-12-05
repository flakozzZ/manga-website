<script lang="ts">
export default {
  name: 'header-layout'
}
</script>

<template>
  <div class="absolute w-full max-w-1250 mx-auto top-0 left-0 right-0 z-10 pt-4 px-2">
    <div :style="{color: $route.path === '/main' ? '#E2E8FA' : '#1C274C'}" class="flex justify-between items-center">
      <div class="flex gap-2 items-center">
        <div>
          <Icon class="cursor-pointer" name="navigation"/>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="logobar"/>
          <div class="uppercase text-xl font-red-rose hidden xs:hidden md:block lg:block">KOMIKKU</div>
        </div>
        <div class="mx-2 hidden xs:hidden md:block lg:block">
          <Icon class="cursor-pointer" name="random"/>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="w-96 hidden xs:hidden md:block lg:block">
          <a-input placeholder="Айзек, что будем искать?" type="text" icon="searchbar" bg-color="bgcolor"/>
        </div>
        <img class="cursor-pointer" src="@/shared/assets/img/user.png" alt="user">
      </div>
    </div>
  </div>
  <side-panel />
</template>

<script setup lang="ts">
import Icon from "@/shared/ui/icon/index.vue";
import AInput from "@/shared/ui/input/index.vue";
import SidePanel from "@/shared/ui/side-panel/index.vue";




</script>
<style scoped>

</style>