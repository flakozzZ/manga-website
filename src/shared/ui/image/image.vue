<script lang="ts">
export default {
  name: 'Image'
}
</script>

<!--<template>-->
<!--  <div class="image">-->
<!--    <div class="image__background">-->
<!--      <img :src="props.background" alt="Background Icon">-->
<!--    </div>-->
<!--    <div class="image__info" >-->
<!--      <div class="image__foreground">-->
<!--        <img :src="props.foreground" alt="Foreground Icon">-->
<!--        <div class="image__text">-->
<!--          <h3 class="image__enName">{{props.enName}}</h3>-->
<!--          <h2 class="image__ruName">{{props.ruName}}</h2>-->
<!--          <div class="image__features">-->
<!--            <a-button type="primary" size="lg">Читать</a-button>-->
<!--            <div class="image__feature">-->
<!--              <Icon name="read" />-->
<!--              <p>{{props.read}}</p>-->
<!--            </div>-->
<!--            <div class="image__feature">-->
<!--              <Icon name="likes" />-->
<!--              <p>{{props.likes}}</p>-->
<!--            </div>-->
<!--            <div class="image__feature">-->
<!--              <Icon name="favorites"/>-->
<!--              <p>{{props.favorites}}</p>-->
<!--            </div>-->
<!--            <div class="image__feature">-->
<!--              <Icon name="viewer" />-->
<!--              <p>{{props.viewer}}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="w-full overflow-hidden">
    <img class="max-w-fit h-auto mx-auto" :src="props.background" alt="background">
  </div>
</template>

<script setup lang="ts">



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

const props = withDefaults(defineProps<Props>(), {})


</script>

<style scoped src="./index.scss">

</style>