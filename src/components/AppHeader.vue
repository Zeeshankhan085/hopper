<template>
  <div class="relative w-full md:h-screen md:bg-shakespeare">
    <picture class="absolute inset-0 object-cover w-full h-full md:hidden"
      ><source
        srcset="
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=192&amp;h=217&amp;q=50    192w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=384&amp;h=434&amp;q=50    384w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=768&amp;h=867&amp;q=50    768w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=1152&amp;h=1301&amp;q=50 1152w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=1240&amp;h=1400&amp;q=50 1240w
        "
        sizes="(max-width: 768px) 100vw, 768px" />
      <img
        sizes="(max-width: 768px) 100vw, 768px"
        srcset="
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=192&amp;h=217&amp;q=50    192w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=384&amp;h=434&amp;q=50    384w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=768&amp;h=867&amp;q=50    768w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=1152&amp;h=1301&amp;q=50 1152w,
          //images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=1240&amp;h=1400&amp;q=50 1240w
        "
        src="//images.ctfassets.net/dllbbq2u2bi6/3CQ7ckRHlYEyOwUcYQCgos/feb7519fffe3111d7875273e3cb83624/Landscape-Mobile-min.jpg?w=768&amp;q=50"
        alt=""
        loading="lazy"
    /></picture>
    <Navbar />
    <Hero class="md:hidden" />
    <div class="relative hidden hero-wrapper md:block">
      <div class="relative z-30">
        <picture class="absolute z-30 block w-full h-full"
          ><source
            type="image/webp"
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=720&amp;h=376&amp;q=100&amp;fm=webp    720w,
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=1440&amp;h=751&amp;q=100&amp;fm=webp  1440w,
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=2880&amp;h=1502&amp;q=100&amp;fm=webp 2880w
            "
            sizes="(max-width: 2880px) 100vw, 2880px" />
          <source
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=720&amp;h=376&amp;q=100    720w,
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=1440&amp;h=751&amp;q=100  1440w,
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=2880&amp;h=1502&amp;q=100 2880w
            "
            sizes="(max-width: 2880px) 100vw, 2880px" />
          <img
            sizes="(max-width: 2880px) 100vw, 2880px"
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=720&amp;h=376&amp;q=100    720w,
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=1440&amp;h=751&amp;q=100  1440w,
              //images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=2880&amp;h=1502&amp;q=100 2880w
            "
            src="//images.ctfassets.net/dllbbq2u2bi6/lz8yW0UblYGEqMk28ia4o/6be5bea2520142175a6c106adf9acb15/Clouds-02.png?w=2880&amp;h=1502&amp;q=100"
            alt=""
            loading="lazy"
            class=""
        /></picture>
        <picture
          class="absolute block object-cover object-center transform -translate-y-20"
          ><source
            type="image/webp"
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=720&amp;h=500&amp;q=100&amp;fm=webp    720w,
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=1440&amp;h=1000&amp;q=100&amp;fm=webp 1440w,
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=2880&amp;h=2000&amp;q=100&amp;fm=webp 2880w
            "
            sizes="(max-width: 2880px) 100vw, 2880px" />
          <source
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=720&amp;h=500&amp;q=100    720w,
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=1440&amp;h=1000&amp;q=100 1440w,
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=2880&amp;h=2000&amp;q=100 2880w
            "
            sizes="(max-width: 2880px) 100vw, 2880px" />
          <img
            sizes="(max-width: 2880px) 100vw, 2880px"
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=720&amp;h=500&amp;q=100    720w,
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=1440&amp;h=1000&amp;q=100 1440w,
              //images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=2880&amp;h=2000&amp;q=100 2880w
            "
            src="//images.ctfassets.net/dllbbq2u2bi6/45bK1sSWCAyIGwySWosauy/c18e7a5e181f7a78c016a1b5f3724029/home-hero-day-min.png?w=2880&amp;h=2000&amp;q=100"
            alt=""
            loading="lazy"
        /></picture>

        <DesktopHero
          class="relative z-40 pt-40 ml-14 xl:ml-32 2xl:ml-60 xl:pt-60"
        />
      </div>
      <div class="relative">
        <picture
          class="absolute block object-cover object-center w-1/5 -top-60 right-60"
          ><source
            type="image/webp"
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/1e1vJP3C8SG4GsAAaqEcYm/efb301cd8e36e93e228b70263bde1b93/Plane-Day.png?w=500&amp;h=250&amp;q=100&amp;fm=webp 500w,
              //images.ctfassets.net/dllbbq2u2bi6/1e1vJP3C8SG4GsAAaqEcYm/efb301cd8e36e93e228b70263bde1b93/Plane-Day.png?w=538&amp;h=269&amp;q=100&amp;fm=webp 538w
            "
            sizes="(max-width: 2000px) 100vw, 2000px" />
          <source
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/1e1vJP3C8SG4GsAAaqEcYm/efb301cd8e36e93e228b70263bde1b93/Plane-Day.png?w=500&amp;h=250&amp;q=100 500w,
              //images.ctfassets.net/dllbbq2u2bi6/1e1vJP3C8SG4GsAAaqEcYm/efb301cd8e36e93e228b70263bde1b93/Plane-Day.png?w=538&amp;h=269&amp;q=100 538w
            "
            sizes="(max-width: 2000px) 100vw, 2000px" />
          <img
            sizes="(max-width: 2000px) 100vw, 2000px"
            srcset="
              //images.ctfassets.net/dllbbq2u2bi6/1e1vJP3C8SG4GsAAaqEcYm/efb301cd8e36e93e228b70263bde1b93/Plane-Day.png?w=500&amp;h=250&amp;q=100 500w,
              //images.ctfassets.net/dllbbq2u2bi6/1e1vJP3C8SG4GsAAaqEcYm/efb301cd8e36e93e228b70263bde1b93/Plane-Day.png?w=538&amp;h=269&amp;q=100 538w
            "
            src="//images.ctfassets.net/dllbbq2u2bi6/1e1vJP3C8SG4GsAAaqEcYm/efb301cd8e36e93e228b70263bde1b93/Plane-Day.png?w=2000&amp;h=1000&amp;q=100"
            alt=""
            loading="lazy"
        /></picture>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import DesktopHero from './DesktopHero.vue'
import Hero from './Hero.vue'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['opened']),
  },
  data() {
    return {}
  },
  components: { Navbar, Hero, DesktopHero },
  methods: {
    onButtonClicked(value) {
      console.log(this.opened)

      this.opened = value
    },
  },
}
</script>

<style>
</style>
