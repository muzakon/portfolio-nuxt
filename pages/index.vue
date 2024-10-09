<template>
  <div class="pt-[100px]">
    <div class="shadowContainer bg-black">
      <h1
        class="text-gray-200 text-[36px] title space-grotesk uppercase font-bold"
      >
        Hay, I'm Hasan >
      </h1>

      <div class="pt-4">
        <Typed
          :options="{
            strings: [`I'm a fullstack developer.`],
            typeSpeed: 50,
            backSpeed: 30,
            showCursor: true,
            autoInsertCss: true,
          }"
          style="display: inline-block"
          class="space-grotesk uppercase font-bold text-[20px] text-[#00dc82]"
        >
          <span class="typing"> </span
        ></Typed>
      </div>

      <div class="text-[14px] pt-8 text-[#bbb] information">
        I bring a diverse skill set to the table, ranging from Docker and Python
        to JavaScript frameworks like VueJS and React. With experience across
        both Google Cloud Platform and AWS, as well as a solid background in
        both SQL and NoSQL databases, I’m equipped to tackle a wide range of
        development challenges.
      </div>

      <div class="text-[14px] pt-8 text-[#bbb] information">
        I hold a bachelor’s degree in Computer Engineering, which laid the
        foundation for my technical expertise and problem-solving abilities. My
        approach to development is both methodical and creative, and I enjoy
        diving into new technologies and tools to stay on the cutting edge of
        the field. Whether it's optimizing back-end systems or crafting engaging
        front-end experiences, I’m driven by a commitment to quality and
        innovation.
      </div>

      <div class="pt-8">
        <a
          href="#"
          class="bg-[#00dc82] text-black text-[13px] font-semibold px-4 py-2 rounded-[5px] hover:bg-[#00b068] inline-block"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-download"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            <span class="ml-2"> Download CV </span>
          </div>
        </a>

        <a
          href="#"
          class="text-[#00dc82] text-[13px] font-semibold px-4 py-2 rounded-[5px] border border-black hover:border-[#00dc82] inline-block ml-2"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
              />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <span class="ml-2"> Contact </span>
          </div>
        </a>
      </div>

      <div class="pt-8">
        <div class="grid grid-cols-12 gap-3">
          <div
            v-for="key in Object.keys(leetCodeStats)"
            class="p-[16px] rounded-[8px] border-2 border-dashed md:col-span-3 sm:col-span-4 xs:col-span-6 col-span-12"
            :class="{
              'bg-[#951d3115] border-[#ed3a5250] hover:bg-[#951d3125]':
                key === 'hard',
              'bg-[#4c1d9515] border-[#7C3AED50] hover:bg-[#4c1d9525]':
                key === 'medium',
              'bg-[#23951d15] border-[#3aed5e50] hover:bg-[#23951d25]':
                key === 'easy',
            }"
          >
            <div
              class="flex items-center justify-end w-full uppercase text-[10px] font-semibold"
            >
              <div
                class="inline-block px-1 py-0 rounded-[5px] border"
                :class="{
                  'bg-[#951d3180] border-[#ed3a52] text-[#f46376]':
                    key === 'hard',
                  'bg-[#4c1d9580] border-[#7C3AED] text-[#aa7ff4]':
                    key === 'medium',
                  'bg-[#23951d80] border-[#3aed5e] text-[#57f15c]':
                    key === 'easy',
                }"
              >
                {{ key }}
              </div>
            </div>
            <span class="text-[28px] space-grotesk font-bold text-white">
              {{ leetCodeStats[key] }}+
            </span>
            <div class="text-[13px] mt-1 text-white">Problems solved</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
const leetCodeStats = ref({
  easy: 130,
  medium: 230,
  hard: 142,
});
</script>

<style scoped>
.information {
  line-height: 1.75;
}
</style>
