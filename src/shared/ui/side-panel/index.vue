<script lang="ts">
export default {
  name: "side-panel"
}
</script>

<template>
  <Transition>
    <div class="side-panel">

    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Props {

}


const props = withDefaults(defineProps<Props>(), {

})

</script>


<style scoped src="./index.scss">

</style>


