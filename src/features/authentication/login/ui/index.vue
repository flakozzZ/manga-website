<script lang="ts">
export default {
  name: 'Login'
}
</script>
<template>
  <div class="login">
    <div class="login__switch">
      <router-link style="text-decoration: none" to="/auth/sign-in">
        <a-button type="secondary" class="login__btn">Вход</a-button>
      </router-link>
      <router-link style="text-decoration: none" to="/auth/sign-up">
        <a-button type="tertiary" class="login__btn">Регистрация</a-button>
      </router-link>
    </div>
    <div class="login__item">
      <a-input class="login__input " placeholder="Никнейм или @mail" type="text"/>
      <a-input class="login__input " placeholder="Пароль" type="password" />

      <a-button class="login__button" full-width size="lg" type="primary">Вход</a-button>
    </div>
  </div>

</template>

<script setup lang="ts">
import AButton from "../../../../shared/ui/button/index.vue";
import AInput from "../../../../shared/ui/input/index.vue";

</script>


<style scoped lang="scss">

.login{
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