<script setup>
// const isDark = computed({
//   get() {
//     return useColorMode().preference === "dark";
//   },
// });
</script>
<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Jirayut Roodprayun
      </h1>
      <p class="text-lg mt-4 max-w-xl">
        One day, I woke up in the morning, made breakfast, and bought some
        coffee. After that, I sat down in front of my PC and opened VSCode for
        coding. Yes, I forgot the code that I had written yesterday.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <!-- <LandingLink
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink
        > -->
        <!-- <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink
        > -->
      </div>
    </div>
  </main>
</template>
