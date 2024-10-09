<script setup lang="ts">
import Header from "@/components/shared/Header.vue";
import { theme } from "ant-design-vue";
import GridBackground from "@/components/shared/GridBackground.vue";

const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});

const toggleDark = useToggle(isDark);
onMounted(async () => {
  if (!isDark.value) {
    toggleDark();
  }
});
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  >
    <main>
      <Header />
      <div
        class="container mx-auto max-w-[940px] md:pt-[220px] pt-[50px] md:px-0 px-[32px] relative sm:pb-0 pb-[16px]"
        style="z-index: 5"
      >
        <GridBackground />
        <Transition name="fade" mode="out-in">
          <slot />
        </Transition>
      </div>
    </main>
  </a-config-provider>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
