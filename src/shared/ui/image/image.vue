<script lang="ts">
export default {
  name: 'Image'
}
</script>

<template>
  <div class="image">
    <div class="image__background">
      <img :src="props.background" alt="Background Icon">
    </div>
    <div class="image__info" >
      <div class="image__foreground">
        <img :src="props.foreground" alt="Foreground Icon">
        <div class="image__text">
          <h3 class="image__enName">{{props.enName}}</h3>
          <h2 class="image__ruName">{{props.ruName}}</h2>
          <div class="image__features">
            <a-button type="primary" size="lg">Читать</a-button>
            <div class="image__feature">
              <Icon name="read" />
              <p>{{props.read}}</p>
            </div>
            <div class="image__feature">
              <Icon name="likes" />
              <p>{{props.likes}}</p>
            </div>
            <div class="image__feature">
              <Icon name="favorites"/>
              <p>{{props.favorites}}</p>
            </div>
            <div class="image__feature">
              <Icon name="viewer" />
              <p>{{props.viewer}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from "@/shared/ui/button/index.vue";
import Icon from "@/shared/ui/icon/index.vue";

2
interface Props {
  background: any,
  foreground: any,
  enName: string,
  ruName: string,
  read: string,
  likes: string,
  favorites: string,
  viewer: string,
}

const props = withDefaults(defineProps<Props>(), {

})


</script>

<style scoped lang="scss">
.image {
  position: relative;
  &__background {
    position: relative;
  }
  &__foreground {
    position: absolute;
    display: flex;
    top: 75px;
    bottom: 20px;
    left: 55px;
  }
  &__enName {
    font-family: 'Exo', sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  &__ruName {
    font-size: 30px;
    font-weight: 600;
    font-family: 'Exo 2', sans-serif;
    margin: 10px 0 20px 0;
  }


  &__text {
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    left: 220px;
    width: 485px;
    height: 120px;
    color: #FFFFFF;
    font-weight: 700;
  }

  &__features {
    display: flex;
    align-items: center;
    gap: 30px;
    font-family: 'Public Sans', sans-serif;
    font-size: 12px;

  }
  &__feature {
    display: flex;
    gap: 10px;
    align-items: center;
  }

}
</style>