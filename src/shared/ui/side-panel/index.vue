<script lang="ts">
export default {
  name: "side-panel"
}
</script>

<template>
  <Transition>
    <div class="side-panel">
        <slot name="header">
          <icon name="close"/>
        </slot>
      <slot name="default">
        sdsadsa
      </slot>
      <slot name="footer">
        dsafdsa
      </slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">

import Icon from "@/shared/ui/icon/index.vue";
</script>


<style scoped src="./index.scss">

</style>