<template>
  <div>
    <button
      :class="buttonClasses"
      class="px-3 py-2 text-sm w-full block focus:outline-none rounded-lg"
      type="button"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["buttonClasses", "text"],
};
</script>

<style>
</style>