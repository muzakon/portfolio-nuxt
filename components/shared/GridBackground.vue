<template>
  <div>
    <div
      class="absolute inset-0 grid justify-center -space-y-px z-[-1]"
      :class="`auto-rows-[50px]`"
    >
      <div
        class="grid grid-flow-col"
        :class="`auto-cols-[50px]`"
        v-for="row in numberOfRows"
      >
        <div
          class="relative border border-green-900/10"
          v-for="col in numberOfColumns"
        >
          <div
            :id="`box-${row}-${col}`"
            class="absolute inset-0 opacity-0 transition duration-1000 box"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
const windowWidth = ref(0);
const windowHeight = ref(0);
const numberOfColumns = ref(0);
const boxColorizeChance = 0.01;
const numberOfRows = ref(0);
const boxSize = ref(50);
const boxInterval: Ref<number | null> = ref(null);
const breakpoints = useBreakpoints(breakpointsTailwind);

onMounted(async () => {
  if (import.meta.client) {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;

    numberOfRows.value = Math.floor(windowHeight.value / boxSize.value);
    numberOfColumns.value = Math.floor(windowWidth.value / boxSize.value);

    boxInterval.value = window.setInterval(() => {
      for (let i = 0; i < numberOfColumns.value; i++) {
        for (let y = 0; y < numberOfRows.value; y++) {
          const box = document.getElementById(`box-${y}-${i}`);
          if (box) {
            const random = Math.random();

            if (box.classList.contains("opacity-100")) {
              box.classList.toggle("opacity-100");
            }

            if (
              random <= boxColorizeChance &&
              breakpoints.greater("md").value
            ) {
              box.classList.toggle("opacity-100");
            }
          }
        }
      }
    }, 3000);
  }
});

onUnmounted(() => {
  if (boxInterval.value) {
    clearInterval(boxInterval.value);
  }
});

nextTick(() => {
  if (import.meta.client) {
    window.addEventListener("resize", onResizeWindow);
  }
});

function onResizeWindow() {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;

  numberOfRows.value = Math.floor(windowHeight.value / boxSize.value);
  numberOfColumns.value = Math.floor(windowWidth.value / boxSize.value);
}
</script>

<style scoped></style>
