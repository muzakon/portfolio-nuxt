<script setup lang="ts">
import { useScrollSpy } from "@/composables/useScrollSpy";
import { useRevealOnScroll } from "@/composables/useRevealOnScroll";
const { activeSection } = useScrollSpy(["home", "experience", "projects"]);
useRevealOnScroll();

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Hasan Muzak",
        url: "https://hasanmuzak.dev",
        jobTitle: "Fullstack Developer",
        description:
          "Fullstack engineer specializing in high-performance infrastructure and intuitive user interfaces.",
        sameAs: [
          "https://github.com/muzakon/",
          "https://www.linkedin.com/in/hmuzak/",
        ],
        knowsAbout: [
          "Python",
          "Vue.js",
          "FastAPI",
          "JavaScript",
          "TypeScript",
          "PostgreSQL",
          "Google Cloud Platform",
          "AWS",
        ],
      }),
    },
  ],
});

// Mobile sticky CTA visibility
const showStickyCta = ref(false);
const scrolledPastHero = ref(false);

// Scroll indicator fade
const scrollIndicatorVisible = ref(true);

// Only run on client side
if (import.meta.client) {
  onMounted(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        showStickyCta.value = window.scrollY > heroBottom;
      }

      if (!scrolledPastHero.value && window.scrollY > 60) {
        scrolledPastHero.value = true;
        scrollIndicatorVisible.value = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
  });
}
</script>

<template>
  <a
    href="#home"
    class="skip-link text-[10px] font-mono bg-green-400 text-black px-4 py-2 rounded-full"
  >
    Skip to content
  </a>

  <div class="fixed inset-0 z-0 pointer-events-none">
    <div
      class="absolute inset-0 bg-grid-pattern opacity-[0.07] bg-grid"
    ></div>
    <div
      class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/10 blur-[120px] rounded-full"
    ></div>
  </div>

  <div class="fixed top-6 left-0 right-0 z-50 px-4">
    <header
      class="glass-nav max-w-4xl mx-auto rounded-full border border-white/5 shadow-2xl shadow-black/50"
    >
      <div class="flex items-center justify-between px-6 py-3">
        <NuxtLink to="/" class="group flex items-center gap-2">
          <div
            class="h-2 w-2 bg-green-400 rounded-full group-hover:animate-pulse"
          ></div>
          <span
            class="text-xs font-mono font-medium text-zinc-300 tracking-tight group-hover:text-white transition-colors"
          >
            HASANMUZAK.DEV
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <a
            href="#experience"
            class="nav-link text-[11px] font-mono uppercase tracking-widest text-zinc-400 hover:text-green-400 transition-colors"
            :class="{ active: activeSection === 'experience' }"
          >
            Experience
          </a>
          <a
            href="#projects"
            class="nav-link text-[11px] font-mono uppercase tracking-widest text-zinc-400 hover:text-green-400 transition-colors"
            :class="{ active: activeSection === 'projects' }"
          >
            Projects
          </a>
        </nav>

        <a
          href="mailto:hasanmuzak@hotmail.com"
          class="text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 hover:border-green-400/50 hover:bg-green-400/10 hover:text-green-400 px-5 py-2 rounded-full transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </header>
  </div>

  <main class="relative z-10">
    <slot />
  </main>

  <div
    class="sticky-cta fixed bottom-0 left-0 right-0 z-50 md:hidden"
    :class="{ visible: showStickyCta }"
  >
    <div
      class="bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 px-6 py-3 flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <div class="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-[10px] font-mono text-zinc-500">Available now</span>
      </div>
      <a
        href="mailto:hasanmuzak@hotmail.com"
        class="text-xs font-medium text-black bg-zinc-100 hover:bg-green-400 px-5 py-2 rounded-full transition-all duration-300"
      >
        Get in Touch
      </a>
    </div>
  </div>

  <footer
    class="max-w-3xl mx-auto px-6 pt-12 pb-28 md:pb-12 text-center md:text-left border-t border-zinc-900"
  >
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-[10px] text-zinc-600 font-mono">
  &copy; {{ new Date().getFullYear() }} Designed and built by me. Feel free to use it.
      </p>
      <div class="flex gap-4">
        <a
          href="https://github.com/muzakon/"
          target="_blank"
          class="social-link text-[10px] text-zinc-600 hover:text-green-400 font-mono transition-colors pb-0.5"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/hmuzak/"
          target="_blank"
          class="social-link text-[10px] text-zinc-600 hover:text-green-400 font-mono transition-colors pb-0.5"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  </footer>
</template>