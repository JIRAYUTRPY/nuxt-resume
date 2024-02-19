<script setup>
const features = [
  {
    title: "System development and Implementation",
    description:
      "Develop your system by adding new features like add-ons and implementing third-party systems.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Build website",
    description:
      "Build your website, whether it's static or a web application.",
    icon: "bx:bxs-window-alt",
  },
  // {
  //   title: "On-Demand Components",
  //   description:
  //     "Need some JS? Nuxt can automatically hydrate interactive components when they become visible on the page.  ",
  //   icon: "bx:bxs-data",
  // },
  // {
  //   title: "Broad Integration",
  //   description:
  //     "Nuxt supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
  //   icon: "bx:bxs-bot",
  // },
  // {
  //   title: "SEO Enabled",
  //   description:
  //     "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
  //   icon: "bx:bxs-file-find",
  // },
  // {
  //   title: "Community",
  //   description:
  //     "Nuxt is an open source project powered by hundreds of contributors making thousands of individual contributions.",
  //   icon: "bx:bxs-user",
  // },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Everything you need I will serve it.
    </h2>
    <p class="text-lg mt-4 font-bold">
      I've gone through various experiences and believe they can help you, if
      not a lot, at least a little.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div
      v-for="item of features"
      class="flex gap-4 items-start boxing p-2 hover:scale-105 transition-all"
    >
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
