<script lang="ts">
export default {
  name: 'Register'
}
</script>

<template>
  <div class="register">
    <div class="register__switch">
      <router-link style="text-decoration: none" to="/auth/sign-in">
        <a-button type="secondary" class="register__btn">Вход</a-button>
      </router-link>
      <router-link style="text-decoration: none" to="/auth/sign-up">
        <a-button type="tertiary" class="register__btn">Регистрация</a-button>
      </router-link>
    </div>
    <div class="register__item">
      <a-input class="register__input user" placeholder="Никнейм" type="text" icon="user" />
      <a-input class="register__input email" placeholder="e-mail" type="email" icon="email"/>
      <a-input class="register__input password" placeholder="Пароль" type="password" />
      <a-input class="register__input password" placeholder="Пароль" type="password" />

      <a-button class="register__button" full-width size="md" type="quaternary">Зарегистрироваться</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AInput from "../../../../shared/ui/input/index.vue";
import AButton from "../../../../shared/ui/button/index.vue";

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
    &__user {
      width: 24px;
      height: 24px;
      background: url("../../../../shared/assets/icons/user.svg");
    }
    //&__email {
    //  width: 24px;
    //  height: 24px;
    //  background: url("../../../../shared/assets/icons/email.svg");
    //}
    //&__password {
    //  width: 24px;
    //  height: 24px;
    //  background: url("../../../../shared/assets/icons/password.svg");
    //}

    &__button {
      margin-top: 10px;
      width: 100%;
    }

  }


</style>