<script lang="ts">
export default {
  name: 'Icon'
}
</script>
  <template>
    <component :is="getSvg" />
  </template>

<script setup lang="ts">
import {createSvgMap} from "@/shared/ui/icon/index.ts";
import {computed, h} from "vue";

const { name } = defineProps(["name"]);

const getSvg = computed(() => {
  const svg = createSvgMap().get(name);
  return svg && h(svg);
});
</script>