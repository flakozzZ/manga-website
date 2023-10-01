<template>
  <div class="navbar">
    <div class="navbar__inner">
      <div class="navbar__lines" @click="openModal">
        <div class="navbar__line"></div>
        <div class="navbar__line"></div>
        <div class="navbar__line"></div>
      </div>
      <router-link class="navbar__logoItem" to="/main">
        <icon name="logobar"/>
        <div class="navbar__logo">ATOAteam</div>
      </router-link>
      <div class="navbar__icons">
        <div class="navbar__userIcon">
          <img src="../../shared/assets/img/usericon.svg" alt="logo">
        </div>
        <div class="navbar__searchbar" @click="inputValue">
          <icon name="searchbar"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Icon from "@/shared/ui/icon/index.vue";
import {ref} from "vue";

const isOpened = ref<boolean>(false)
const openInput = ref(false)

const inputValue = () => {
  openInput.value = true
}

const openModal = () => {
  isOpened.value = true;
}

</script>

<style scoped lang="scss">

.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;

  &__inner {
    display: flex;
    align-items: center;
    width: 300px;
  }

  &__lines {
    cursor: pointer;
  }

  &__line {
    width: 15.8px;
    height: 2px;
    margin-bottom: 3px; /* Расстояние между линиями, здесь 2px */
    background: #1C274C;
    border-radius: 10px;

    &:first-child {
      width: 18.6px;

    }

    &:last-child {
      width: 10.8px;
    }
  }

  &__logoItem {
    display: flex;
    margin-left: 20px;
    text-decoration: none;
  }

  &__icons {
    display: flex;
    align-items: center;
    margin-left: 20px;
    gap: 20px;
  }

  &__logo {
    font-family: "Red Rose", cursive;
    font-size: 20px;
    color: #1C274C;
    margin-left: 10px;
  }

  &__searchbar {
    display: flex;
    border: 1px solid #E2E8FA;
    border-radius: 10px;
    padding: 5px;
    background: #E2E8FA;
    cursor: pointer;
  }
  &__searchbarActive {
    position: absolute;
    width: 1250px;
  }

}


@media (max-width: 330px) {
  .navbar {
    &__searchbar {
      display: none;
    }
  }
}

</style>