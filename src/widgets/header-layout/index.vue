<script lang="ts">
export default {
  name: 'header-layout'
}
</script>

<template>
  <div class="absolute w-full max-w-1250 mx-auto top-0 left-0 right-0 z-10 pt-4">
    <div class="flex items-center justify-between">
      <div class="flex gap-2 items-center">
        <div>
          <Icon class="cursor-pointer" name="navigation"/>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="logobar"/>
          <div class="uppercase text-white text-xl font-red-rose">KOMIKKU</div>
        </div>
        <div class="mx-2">
          <Icon class="cursor-pointer" name="random"/>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="w-96">
          <a-input placeholder="Айзек, что будем искать?" type="text" icon="searchbar"/>
        </div>
        <img src="@/shared/assets/img/user.png" alt="user">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Icon from "@/shared/ui/icon/index.vue";
import AInput from "@/shared/ui/input/index.vue";
</script>
<style scoped>

</style>