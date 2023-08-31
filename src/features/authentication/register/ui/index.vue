<script lang="ts">
export default {
  name: 'Register'
}
</script>

<template>
  <div class="register">
    <div class="register__switch">
      <router-link style="text-decoration: none" to="/auth/sign-in">
        <a-button type="tertiary" class="register__btn">Вход</a-button>
      </router-link>
      <router-link style="text-decoration: none" to="/auth/sign-up">
        <a-button type="secondary" class="register__btn">Регистрация</a-button>
      </router-link>
    </div>
    <div class="register__item">
      <a-input class="register__input " placeholder="Никнейм" type="text"  />
      <a-input class="register__input " placeholder="e-mail" type="email" />
      <a-input class="register__input " placeholder="Пароль" type="password" />
      <a-input class="register__input " placeholder="Пароль" type="password" />

      <a-button class="register__button" full-width size="lg" type="quaternary">Зарегистрироваться</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()

import AInput from "../../../../shared/ui/input/index.vue";
import AButton from "../../../../shared/ui/button/index.vue";
import {computed} from "vue";



</script>

<style scoped lang="scss">
  .register{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    &__switch {
      display: flex;
      margin-bottom: 20px;
      gap: 10px;
    }

    &__btn {
      width: 130px;
      height: 36px;
    }
    &__item {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    $self: &;

    &__input {
      & + #{ $self }__input {
        margin-top: 10px;
      }

    }
    &__button {
      margin-top: 10px;
      width: 100%;
    }

  }


</style>