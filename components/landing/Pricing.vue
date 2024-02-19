<script setup>
defineProps(["project"]);
</script>

<template>
  <div>
    <div
      class="hover:scale-105 transition-all flex flex-col w-full h-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    >
      <div class="text-center">
        <div class="pb-5 h-[250px] w-full flex items-center justify-center">
          <NuxtImg
            class="md:w-full w-[30%]"
            :src="
              project.image
                ? project.image
                : 'https://wexoobooxddperkjajlq.supabase.co/storage/v1/object/public/seo/projects/comingsoon.png'
            "
          />
        </div>
        <h4 class="text-lg font-medium text-gray-400">{{ project.about }}</h4>
        <p class="mt-3 text-4xl font-bold md:text-4xl">
          {{ project.name }}
        </p>
      </div>
      <ul class="grid mt-8 text-left gap-y-4 h-full">
        <li v-for="item of project.stack" class="flex items-start gap-3">
          <LandingTick className="w-6 h-6" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-8 bottom-0">
        <LandingLink
          :href="project.button.link"
          block
          :styleName="project.demo ? 'primary' : 'notyet'"
        >
          {{ project.button.text }}
        </LandingLink>
      </div>
    </div>
  </div>
</template>
