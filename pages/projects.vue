<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    about: "Web application",
    name: "Course Flow",
    demo: "https://demo-course-flow.vercel.app/",
    image:
      "https://wexoobooxddperkjajlq.supabase.co/storage/v1/object/public/seo/projects/CourseFlow.png",
    stack: ["NodeJS", "Express", "Supabase", "ReactJS"],
    button: {
      text: "Live Demo",
      link: "/",
    },
  },
  {
    about: "System, Web application",
    name: "Reservation",
    demo: "",
    image: "",
    stack: ["Nuxt3", "Golang", "Postgres", "Docker"],
    button: {
      text: "incoming ..",
      link: "#",
    },
  },
  {
    about: "Microcontroller",
    name: "Arduino",
    demo: "https://demo-course-flow.vercel.app/",
    image:
      "https://wexoobooxddperkjajlq.supabase.co/storage/v1/object/public/seo/projects/arduino.png",
    stack: ["Firebase RTDB", "CAN Protocal", "ESP"],
    button: {
      text: "GIT REPO",
      link: "https://github.com/JIRAYUTRPY/DemoArduino",
    },
  },
  {
    about: "Web application",
    name: "TIC-TAC-TOE",
    demo: "https://demo-course-flow.vercel.app/",
    image:
      "https://wexoobooxddperkjajlq.supabase.co/storage/v1/object/public/seo/projects/tic-tac-toe.png",
    stack: ["ReactJS"],
    button: {
      text: "Live Demo",
      link: "https://tic-tic-toe-jry.vercel.app/",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Projects</template>
      <template v-slot:desc>All projects I made by myself.</template>
    </LandingSectionhead>

    <div
      class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12 cursor-default"
    >
      <LandingPricing v-for="item of pricing" :project="item" />
    </div>
  </LandingContainer>
</template>
