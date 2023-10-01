<script lang="ts">
export default {
  name: 'Icon'
}
</script>
<template>
  <component :is="getSvg"/>
</template>

<script setup lang="ts">
// import {createSvgMap} from "@/shared/ui/icon/index.ts";
import {createSvgMap} from "@/shared/ui/icon/index.ts";
import {computed, h} from "vue";

interface Props {
  name: string | any
}

const props = withDefaults(defineProps<Props>(), {})


const getSvg = computed(() => {
  const svg = createSvgMap().get(props.name);
  return svg && h(svg);
});
</script>