<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
// Experience data
const experiences = [
  {
    title: "Full-stack Developer",
    period: "2022 — Present",
    company: "Apps Teknoloji A.S",
    description:
      "Developed internal tools utilized by a team of over 25 members, serving over 100 million global players. Built Live Ops tools handling ~500,000 requests per day.",
    highlights: [
      "Built scalable Live Ops tool for game developers with real-time personalized experiences.",
      "Integrated Meta, Google Ads, Unity Ads, and Applovin APIs.",
      "Tech: FastAPI, PostgreSQL, Vue.js, BigQuery, GCP services.",
    ],
  },
  {
    title: "Full-stack Developer",
    period: "2020 — 2022",
    company: "Zeo Agency",
    description:
      "Fullstack development for content marketing platform serving over 10,000 users.",
    highlights: [
      "Developed web applications using FastAPI, Vue.js, MySQL.",
      "Improved payment processing and optimized backend services.",
    ],
  },
  {
    title: "Computer Engineering",
    period: "2018 — 2022",
    company: "University of Karabuk",
    description:
      "Bachelor of Science in Computer Engineering. GPA: 3.10",
    highlights: [],
  },
];

// Projects data
const projects = [
  {
    title: "Live Ops Platform",
    description:
      "Scalable real-time personalization platform for game developers, handling 500k+ daily requests.",
    tags: ["FastAPI", "Vue.js", "BigQuery"],
    link: "#",
  },
  {
    title: "Content Marketing Platform",
    description:
      "Full-stack marketing platform serving 10,000+ users with payment integrations.",
    tags: ["Vue.js", "MySQL", "FastAPI"],
    link: "#",
  },
  {
    title: "UA Optimization Tools",
    description:
      "Internal tools for User Acquisition team to streamline tracking and campaign optimization.",
    tags: ["Python", "PostgreSQL", "GCP"],
    link: "#",
  },
  {
    title: "Creative Testing Suite",
    description:
      "Marketing tools facilitating creative testing processes for improved campaign effectiveness.",
    tags: ["Vue.js", "Node.js", "Cloud Run"],
    link: "#",
  },
];
</script>

<template>
  <div
    class="max-w-3xl mx-auto px-6 pt-40 pb-20 text-zinc-400 antialiased selection:bg-green-900/30 selection:text-green-400">
    <!-- Hero Section -->
    <section id="home" class="min-h-[50vh] flex flex-col items-center text-center justify-center mb-32 relative">
      <div class="absolute top-0 left-0 text-zinc-800 text-[10px] font-mono opacity-50">
        +001
      </div>
      <div class="absolute top-0 right-0 text-zinc-800 text-[10px] font-mono opacity-50">
        +002
      </div>

      <h1 class="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-4 leading-[0.9]">
        Hey, I'm Hasan
      </h1>

      <div class="mb-8">
        <Typed :options="{
          strings: [`I'm a fullstack engineer.`],
          typeSpeed: 50,
          backSpeed: 30,
          showCursor: true,
          autoInsertCss: true,
        }" class="font-mono text-lg md:text-xl text-green-400">
          <span class="typing"></span>
        </Typed>
      </div>

      <p class="text-sm md:text-base leading-relaxed max-w-xl text-zinc-500 mb-10">
        I am a fullstack engineer specializing in high-performance
        infrastructure and intuitive user interfaces. I bridge the gap between
        complex backend logic and pixel-perfect frontend execution, with
        expertise in Python, Vue.js, FastAPI, and cloud platforms.
      </p>

      <div class="flex items-center gap-4">
        <!-- Download Resume Button -->
        <a
          href="#"
          class="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center cursor-pointer">
          <span
            class="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span
            class="absolute inset-0 rounded-full bg-zinc-900 transition-opacity duration-300 group-hover:opacity-0"></span>
          <span
            class="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-sm font-medium text-zinc-400 bg-zinc-900 w-full h-full rounded-full py-3 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 18a3.5 3.5 0 0 0 0-7h-1A5 4.5 0 0 0 7 9a4.6 4.4 0 0 0-2.1 8.4M12 13v9m-3-3l3 3l3-3"/></svg>

            <span class="relative z-10 dynamic-text tracking-tight text-xs ml-1">My Resume</span>
            
          </span>
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 scroll-indicator">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" class="text-zinc-600">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" stroke-width="1.5" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
        </svg>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="mb-32 reveal">
      <div class="flex items-baseline gap-4 mb-12 border-b border-zinc-900 pb-4">
        <h2 class="text-xs font-mono text-green-400 uppercase tracking-widest">
          01. Experience
        </h2>
        <div class="h-px bg-zinc-900 flex-1"></div>
      </div>

      <div class="relative ml-3 space-y-12 reveal-children">
        <div class="absolute left-0 top-2 bottom-0 w-px timeline-line"></div>

        <div v-for="(exp, index) in experiences" :key="index" class="relative pl-10 group cursor-default">
          <div
            class="timeline-node absolute -left-[5px] top-1.5 h-[10px] w-[10px] bg-zinc-950 border border-zinc-700 rounded-full group-hover:border-green-400 group-hover:bg-green-500 transition-colors duration-300">
          </div>

          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 class="text-zinc-100 font-medium text-sm tracking-wide">
              {{ exp.title }}
            </h3>
            <span class="font-mono text-[10px] text-zinc-600">{{
              exp.period
              }}</span>
          </div>
          <div class="text-[0.65rem] font-mono text-zinc-500 mb-3">
            {{ exp.company }}
          </div>
          <p class="text-xs text-zinc-500 leading-relaxed mb-3 max-w-lg">
            {{ exp.description }}
          </p>
          <ul v-if="exp.highlights.length"
            class="list-disc list-outside ml-3 text-[10px] text-zinc-500 space-y-1 marker:text-zinc-700">
            <li v-for="highlight in exp.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="mb-32 reveal">
      <div class="flex items-baseline gap-4 mb-12 border-b border-zinc-900 pb-4">
        <h2 class="text-xs font-mono text-green-400 uppercase tracking-widest">
          02. Public Projects
        </h2>
        <div class="h-px bg-zinc-900 flex-1"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 reveal-children">
        <a v-for="(project, index) in projects" :key="index" :href="project.link"
          class="project-card group relative block p-6 bg-zinc-900/20 border border-white/5 hover:border-green-500/30">
          <!-- Corner Decorations -->
          <div
            class="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700 group-hover:border-green-400 transition-colors">
          </div>
          <div
            class="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700 group-hover:border-green-400 transition-colors">
          </div>
          <div
            class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700 group-hover:border-green-400 transition-colors">
          </div>
          <div
            class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700 group-hover:border-green-400 transition-colors">
          </div>

          <div class="flex justify-between items-start mb-4">
            <h3 class="text-zinc-100 font-medium text-sm group-hover:text-green-400 transition-colors">
              {{ project.title }}
            </h3>
            <div
              class="p-1 rounded bg-zinc-900 border border-zinc-800 group-hover:border-green-400/30 group-hover:bg-green-400/5 transition-all duration-300">
              <svg
                class="w-3 h-3 text-zinc-500 group-hover:text-green-400 transition-colors transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </div>
          <p class="text-xs text-zinc-500 leading-relaxed mb-6">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag"
              class="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400 bg-zinc-900 border border-zinc-800">
              {{ tag }}
            </span>
          </div>
        </a>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="border-t border-dashed border-zinc-800 pt-12 reveal" id="contact">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-2">
          <h2 class="text-lg text-white font-medium tracking-tight">
            Want to chat?
          </h2>
          <p class="text-xs text-zinc-500 max-w-xs">
            Always happy to talk about ideas, tech, or interesting projects.
          </p>
        </div>

        <a href="mailto:hasanmuzak@hotmail.com"
          class="group flex items-center gap-3 text-sm font-mono text-zinc-400 hover:text-green-400 transition-colors">
          <span class="border-b border-zinc-800 group-hover:border-green-400 pb-0.5">
            hasanmuzak@hotmail.com
          </span>
          <svg class="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>
