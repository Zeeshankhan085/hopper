<template>
  <div
    style="z-index: 100000"
    class="fixed inset-0 w-full h-full px-4 py-3 overflow-hidden bg-white sm:px-6"
  >
    <MenuNavbar />

    <div class="flex flex-col items-center mt-4 space-y-5">
      <a class="text-xl text-gray-700" href="#">Company</a>
      <a class="text-xl text-gray-700" href="#">People</a>
      <a class="text-xl text-gray-700" href="#">Careers</a>
      <a class="text-xl text-gray-700" href="#">Download</a>
    </div>
    <a class="flex items-center justify-center mt-8 space-x-1" href="#">
      <span class="text-sm font-medium text-gray-400">HOPPER MEDIA</span>
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.375 0.125L11.125 3.875L10.2375 4.7625L8 2.51875L8 9.5L0.5 9.5L0.5 8.25L6.75 8.25L6.75 2.51875L4.5125 4.7625L3.625 3.875L7.375 0.125Z"
          fill="#aaa"
        ></path>
      </svg>
    </a>
    <div class="flex flex-col items-center mt-3 space-y-5">
      <a class="text-xl text-gray-700" href="#">Home</a>
      <a class="text-xl text-gray-700" href="#">News</a>
      <a class="text-xl text-gray-700" href="#">Press Kit</a>
      <a class="text-xl text-gray-700" href="#">Research</a>
      <a class="text-xl text-gray-700" href="#">Media Enquiries</a>
    </div>
  </div>
</template>

<script>
import MenuNavbar from './MenuNavbar.vue'
export default {
  components: {
    MenuNavbar,
  },
}
</script>

<style>
</style>
