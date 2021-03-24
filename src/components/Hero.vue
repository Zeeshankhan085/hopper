<template>
  <div class="relative z-40 px-4 sm:px-6 mt-4">
    <div class="max-w-sm text-center mx-auto">
      <h2
        style="max-width: 10rem"
        class="text-2xl sm:text-xl mx-auto text-white font-bold leading-8"
      >
        The Smart Way to Score Travel Deals
      </h2>
      <p class="mt-4 text-white leading-7 px-2">
        Hopper offers powerful data-driven tools so you can book with
        confidence. it's the easiest way to save when booking flights, hotels,
        and cars.
      </p>
      <div class="max-w-xs mx-auto px-6">
        <Button
          buttonClasses="text-light-blue font-medium bg-white mt-8"
          text="Send app to your phone"
          href=""
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./common/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style>
</style>