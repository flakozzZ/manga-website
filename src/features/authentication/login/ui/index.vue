<script lang="ts">
export default {
  name: 'sign-in'
}
</script>
<template>
  <div class="login">
    <div class="login__logo">

      <icon name="logo" class="login__logo" />
    </div>
    <div class="login__switch">
      <router-link style="text-decoration: none" to="/auth/sign-in">
        <a-button type="secondary" class="login__btn">Вход</a-button>
      </router-link>
      <router-link style="text-decoration: none" to="/auth/sign-up">
        <a-button type="tertiary" class="login__btn">Регистрация</a-button>
      </router-link>
    </div>
    <div class="login__item">
      <form>
        <a-input class="login__input " placeholder="Никнейм или @mail" type="text" icon="user"/>
        <a-input class="login__input" placeholder="Пароль" type="password" icon="password"/>
        <a-button class="login__button" full-width size="lg" type="primary">Вход</a-button>
      </form>
      <router-link class="login__forgotPassword" to="">
        <pre class="login__text">Забыли пароль?</pre>
      </router-link>
    </div>
  </div>

</template>

<script setup lang="ts">
import AButton from "../../../../shared/ui/button/index.vue";
import AInput from "../../../../shared/ui/input/index.vue";
import Icon from "@/shared/ui/icon/index.vue";

</script>


<style scoped lang="scss">

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__logo {
    margin-bottom: 18px;
  }

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
  &__forgotPassword {
    text-decoration: none;
    font-weight: 700;
    font-size: 12px;
    color: #1C274C;
    margin-top: 10px;
    margin-left: 10px;
  }

  &__text {
    font-family: 'Nunito', sans-serif;
  }
}

@media (max-width: 768px) {
  .login {
    &__item {
      width: 260px;
    }
  }
}
</style>