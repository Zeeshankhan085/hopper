<template>
  <div>
    <div class="flex flex-col items-start max-w-md">
      <h2 class="text-3xl font-semibold text-gray-700 lg:text-5xl">
        The Smart Way to Score Travel Deals
      </h2>

      <p class="mt-4 leading-7 text-gray-500">
        Hopper offers powerful data-driven tools so you can book with
        confidence. it's the easiest way to save when booking flights, hotels,
        and cars.
      </p>
      <Button
        buttonClasses="text-white font-medium bg-light-blue px-20 py-4 mt-8"
        text="Send app to your phone"
        href=""
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from './common/Button.vue'
export default {
  components: {
    Button,
  },
}
</script>

<style>
</style>
