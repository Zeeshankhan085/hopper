<template>
  <div class="px-4 mt-20 sm:px-6">
    <FooterTop />
    <div class="flex flex-col mt-6">
      <a class="py-3 text-base text-gray-600 border-b" href="">Company</a>
      <a class="py-3 text-base text-gray-600 border-b" href="">People</a>
      <a class="py-3 text-base text-gray-600 border-b" href="">Careers</a>
      <a class="py-3 text-base text-gray-600 border-b" href="">Support</a>
      <a class="py-3 text-base text-gray-600 border-b" href="">Media</a>
    </div>

    <div class="p-2 mt-10 border border-gray-600 rounded-lg">
      <div class="flex items-center justify-between">
        <span class="text-gray-600">Language</span>
        <span
          ><svg
            width="30"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0L9.33013 6H0.669873L5 0Z"
              transform="translate(10 6) rotate(180)"
              fill="#505050"
            ></path></svg
        ></span>
      </div>
    </div>

    <!-- <div v-if="active">
      <form action="">
        <fieldset>
          <legend>Language</legend>
          <input @blur="toggleActive" type="text" class="w-full" />
        </fieldset>
      </form>
    </div> -->

    <div>
      <Socials />
    </div>

    <div class="flex items-center justify-center mt-10 mb-10">
      <a
        class="inline-block mx-auto font-medium text-center text-gray-700 underline"
        href="#"
        >Terms of Service</a
      >
    </div>
    <hr />
    <div class="flex items-center justify-center mt-10 text-gray-500">
      © 2021 Hopper Inc.
    </div>
    <div class="mt-10"></div>
  </div>
</template>

<script>
import Socials from './Socials.vue'
import FooterTop from './FooterTop.vue'
export default {
  components: {
    Socials,
    FooterTop,
  },
  methods: {},
  data() {
    return {}
  },
}
</script>

<style></style>
