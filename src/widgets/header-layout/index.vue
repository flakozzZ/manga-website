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
          <Icon @click="openSidebar" class="cursor-pointer" name="navigation"/>
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
          <a-input placeholder="Айзек, что будем искать?" type="text" icon="searchbar" bg-color="bgcolor" placeholder-color=""/>
        </div>
        <img class="cursor-pointer" src="@/shared/assets/img/user.png" alt="user">
      </div>
    </div>
  </div>
  <side-panel :show="isPanelOpened" @close="isPanelOpened = false">

      <header class="flex items-center">
        <div class="flex items-center gap-2">
          <Icon name="logobar"/>
          <div class="uppercase text-xl font-red-rose">KOMIKKU</div>
        </div>
      </header>

      <div class="pt-6 text-sm font-exo-2 font-semibold">
        <div class="flex flex-col gap-y-4">
          <router-link to="/main">
            <div @click="isPanelOpened = false" class="flex items-center cursor-pointer gap-x-2">
              <Icon name="home" />
              <div>Главная</div>
            </div>
          </router-link>

          <router-link to="/catalog">
            <div @click="isPanelOpened = false" class="flex items-center cursor-pointer gap-x-2">
              <Icon name="library" />
              <div>Каталог</div>
            </div>
          </router-link>
          <div class="flex items-center cursor-pointer gap-x-2">
            <Icon name="group" />
            <div>Команда Переводчиков</div>
          </div>
        </div>
        <div class="flex pt-6 items-center cursor-pointer gap-x-2">
          <Icon name="random" />
          <div>Случайный тайтл</div>
        </div>
      </div>

      <footer class="flex flex-col items-center absolute justify-center bottom-1 w-210">
        <div class="font-nunito text-xs font-bold text-black">Мы в соц.сетях</div>
        <div class="flex gap-x-10 my-4">
          <Icon name="vk"/>
          <Icon name="tiktok"/>
          <Icon name="telegram"/>
        </div>
        <div class="font-public-sans text-xs font-semibold text-manga-1">© 2023 ATOAteam</div>
      </footer>
  </side-panel>
</template>

<script setup lang="ts">
import Icon from "@/shared/ui/icon/index.vue";
import AInput from "@/shared/ui/input/index.vue";
import SidePanel from "@/shared/ui/side-panel/index.vue";
import {ref} from "vue";

const isPanelOpened = ref(false)

const openSidebar = () => {
  isPanelOpened.value = true
}

</script>
<style scoped>

</style>