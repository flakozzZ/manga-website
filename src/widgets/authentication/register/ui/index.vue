<script lang="ts">
export default {
  name: 'sign-up'
}
</script>

<template>
  <div class="register">
    <icon name="logo" class="register__logo"/>
    <div class="register__switch">
      <router-link style="text-decoration: none" to="/auth/sign-in">
        <a-button type="tertiary" class="register__btn">Вход</a-button>
      </router-link>
      <router-link style="text-decoration: none" to="/auth/sign-up">
        <a-button type="secondary" class="register__btn">Регистрация</a-button>
      </router-link>
    </div>
    <div class="register__item">
      <form @submit.prevent>
        <a-input
            class="register__input"
            placeholder="Никнейм"
            type="text"
            icon="user"
        />
        <a-input
            class="register__input"
            placeholder="e-mail"
            type="email"
            icon="email"
        />
        <a-input
            class="register__input"
            placeholder="Пароль"
            type="password"
            icon="password"
        />
        <a-input
            class="register__input"
            placeholder="Пароль"
            type="password"
            icon="password"
        />
        <a-button
            class="register__button"
            full-width size="lg"
            type="quaternary"
        >
          Зарегистрироваться
        </a-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from "@/shared/ui/button/index.vue";
import AInput from "@/shared/ui/input/index.vue";
import Icon from "@/shared/ui/icon/index.vue";

</script>

<style scoped lang="scss">
.register {
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

@media (max-width: 768px) {
  .register {
    &__item {
      width: 260px;
    }
  }
}


</style>