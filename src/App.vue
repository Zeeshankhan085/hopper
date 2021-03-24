<template>
  <div id="app">
    <Mobilemenu
      class="transition duration-700 ease-in-out transform"
      :class="[opened ? 'translate-y-0' : '-translate-y-full']"
    />
    <AppHeader class="fixed inset-0 mb-20" />
    <div
      style="z-index: 9999"
      class="absolute w-full pt-10 transform -translate-y-2 bg-white shadow-sm md:-translate-y-104 lg:-translate-y-96 md:pt-20 rounded-t-3xl"
    >
      <Features />
      <Careers />
      <Travel />
      <Footer class="lg:hidden" />
      <FooterDesktop class="hidden lg:block" />
    </div>
  </div>
</template>

<script>
import Mobilemenu from './components/MobileMenu.vue'
import AppHeader from './components/AppHeader.vue'
import Features from './components/Features.vue'
import Careers from './components/Careers.vue'
import Travel from './components/Travel.vue'
import Footer from './components/Footer.vue'
import FooterDesktop from './components/FooterDesktop.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['opened']),
  },
  components: {
    AppHeader,
    Features,
    Mobilemenu,
    Careers,
    Travel,
    Footer,
    FooterDesktop,
  },
}
</script>

<style src="./assets/css/tailwind.css" />
