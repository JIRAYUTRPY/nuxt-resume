<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>I'm a challenger.</template>
    </LandingSectionhead>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl">
        Full-Stack Developer - Globish : 2023 Dec-present
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Now, I've started a new position at Globish Academia. I've been learning
        about Nuxt.js, Nest.js, Kubernetes, etc. I'm feeling very excited
        because there are a lot of activities at Globish. Additionally, it has
        been helping me discover and prove many things about myself. In my role,
        I'm responsible for serving and developing the Globish platform.
      </p>
    </div>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl">
        Full-Stack Developer (training) - TechUp : 2023 July - 2023 Oct
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        I want to transition into the Dev industry because of my passion. When I
        was still working as a firmware engineer, I often questioned why I was
        continuing in a job that I didn't enjoy related to electronics. So, I
        decided to enroll in TechUp to learn the fundamentals of web
        development. I must say, I'm very happy to become a developer. Every new
        thing I encounter makes me feel fulfilled
      </p>
    </div>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl">
        Firmware Engineer - Freelance : 2021-present
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        I began my journey as a firmware engineer because of my university
        lecturer. He introduced me to the concept of IoT (Internet of Things),
        which sparked my excitement. My first project in this field involved
        Arduino. Over time, I honed my coding skills and moved on to work with
        more advanced devices such as STM32 and TMS570
      </p>
    </div>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl">
        PLC Programer (intern) - Sat Solutions : 2022-2023
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        After being interested in IoT for a while, I came across a job
        advertisement on Facebook. The job description focused on using C and
        C++ to code for microcontrollers, which intrigued me, so I decided to
        join the company. However, microcontrollers were not the main product of
        the company. I was given the opportunity to learn about PLC
        (Programmable Logic Controller) and related technologies such as RS485,
        RS232, LAN, and network communication. Eventually, I became a PLC
        programmer.
      </p>
    </div>
  </LandingContainer>
</template>
