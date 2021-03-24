<template>
  <div class="sm:mt-16 md:mt-32">
    <div class="flex flex-col max-w-xl px-4 mx-auto sm:px-6">
      <h2 class="hidden text-sm font-semibold text-gray-500 md:block">
        POPULAR DESTINATIONS
      </h2>
      <p
        class="mt-5 text-2xl font-semibold text-center text-gray-800 md:text-left"
      >
        Ready for an adventure? Get the hopper app to start booking.
      </p>
    </div>
    <!--
    <div class="hidden mt-20 lg:flex">
      <div class="mr-5">
        <div class="inset-0 z-30 h-100">
          <h2
            class="z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
          >
            Paris
          </h2>
          <picture
            class="absolute inset-0 block object-cover object-center w-full h-full"
            ><source
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              sizes="(max-width: 274px) 100vw, 274px" />
            <img
              sizes="(max-width: 274px) 100vw, 274px"
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              src="//images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
              alt=""
              loading="lazy"
          /></picture>
        </div>
      </div>
      <div class="mr-5">
        <div class="relative inset-0 z-30 h-100">
          <h2
            class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
          >
            Cairo
          </h2>
          <picture
            class="absolute inset-0 block object-cover object-center w-full h-full"
            ><source
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              sizes="(max-width: 274px) 100vw, 274px" />
            <img
              sizes="(max-width: 274px) 100vw, 274px"
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              src="//images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
              alt=""
              loading="lazy"
          /></picture>
        </div>
      </div>
      <div class="relative mr-5">
        <div class="absolute inset-0 z-30 h-100">
          <h2
            class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
          >
            New York
          </h2>
          <picture
            class="absolute inset-0 block object-cover object-center w-full h-full"
            ><source
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              sizes="(max-width: 274px) 100vw, 274px" />
            <img
              sizes="(max-width: 274px) 100vw, 274px"
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              src="//images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
              alt=""
              loading="lazy"
          /></picture>
        </div>
      </div>
      <div class="relative mr-5">
        <div class="absolute inset-0 z-30 h-100">
          <h2
            class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
          >
            Cancun
          </h2>
          <picture
            class="absolute inset-0 block object-cover object-center w-full h-full"
            ><source
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              sizes="(max-width: 274px) 100vw, 274px" />
            <img
              sizes="(max-width: 274px) 100vw, 274px"
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              src="//images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
              alt=""
              loading="lazy"
          /></picture>
        </div>
      </div>
      <div class="relative mr-5">
        <div class="absolute inset-0 z-30 h-100">
          <h2
            class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
          >
            Hong Kong
          </h2>
          <picture
            class="absolute inset-0 block object-cover object-center w-full h-full"
            ><source
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              sizes="(max-width: 274px) 100vw, 274px" />
            <img
              sizes="(max-width: 274px) 100vw, 274px"
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              src="//images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
              alt=""
              loading="lazy"
          /></picture>
        </div>
      </div>
      <div>
        <div class="relative">
          <picture
            ><source
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              sizes="(max-width: 274px) 100vw, 274px" />
            <img
              sizes="(max-width: 274px) 100vw, 274px"
              srcset="
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
              "
              src="//images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
              alt=""
              loading="lazy"
          /></picture>
        </div>
      </div>
    </div>




 -->

    <div class="mt-20 lg:hidden">
      <swiper :slides-per-view="3" :space-between="10">
        <swiper-slide class="relative mr-5">
          <div class="absolute inset-0 z-30 h-100">
            <h2
              class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
            >
              Paris
            </h2>
            <picture
              class="absolute inset-0 block object-cover object-center w-full h-full"
              ><source
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                sizes="(max-width: 274px) 100vw, 274px" />
              <img
                sizes="(max-width: 274px) 100vw, 274px"
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                src="//images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
                alt=""
                loading="lazy"
            /></picture>
          </div>
        </swiper-slide>
        <swiper-slide class="relative mr-5">
          <div class="absolute inset-0 z-30 h-100">
            <h2
              class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
            >
              Cairo
            </h2>
            <picture
              class="absolute inset-0 block object-cover object-center w-full h-full"
              ><source
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                sizes="(max-width: 274px) 100vw, 274px" />
              <img
                sizes="(max-width: 274px) 100vw, 274px"
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                src="//images.ctfassets.net/dllbbq2u2bi6/3dV9ZxkvQcqo4EK0Ai88GU/8483d4a1d765985f302f11a1b385cd68/cairo-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
                alt=""
                loading="lazy"
            /></picture>
          </div>
        </swiper-slide>
        <swiper-slide class="relative mr-5">
          <div class="absolute inset-0 z-30 h-100">
            <h2
              class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
            >
              New York
            </h2>
            <picture
              class="absolute inset-0 block object-cover object-center w-full h-full"
              ><source
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                sizes="(max-width: 274px) 100vw, 274px" />
              <img
                sizes="(max-width: 274px) 100vw, 274px"
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                src="//images.ctfassets.net/dllbbq2u2bi6/6rXrEXiyyWMCguKOSK2OiA/bf7ce0043b1b210550010eae1c1978c4/nyc-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
                alt=""
                loading="lazy"
            /></picture>
          </div>
        </swiper-slide>
        <swiper-slide class="relative mr-5">
          <div class="absolute inset-0 z-30 h-100">
            <h2
              class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
            >
              Cancun
            </h2>
            <picture
              class="absolute inset-0 block object-cover object-center w-full h-full"
              ><source
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                sizes="(max-width: 274px) 100vw, 274px" />
              <img
                sizes="(max-width: 274px) 100vw, 274px"
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                src="//images.ctfassets.net/dllbbq2u2bi6/3hVOksgn9KSa2yYucIm4IE/7289eb158a58641dcd2d178dfe190928/cancun-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
                alt=""
                loading="lazy"
            /></picture>
          </div>
        </swiper-slide>
        <swiper-slide class="relative mr-5">
          <div class="absolute inset-0 z-30 h-100">
            <h2
              class="absolute z-40 flex items-center justify-center w-full h-full text-5xl font-semibold text-white"
            >
              Hong Kong
            </h2>
            <picture
              class="absolute inset-0 block object-cover object-center w-full h-full"
              ><source
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                sizes="(max-width: 274px) 100vw, 274px" />
              <img
                sizes="(max-width: 274px) 100vw, 274px"
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                src="//images.ctfassets.net/dllbbq2u2bi6/1znB8k0khSaAQEWIakmg2w/b291ace35bf318bd1f6168d16b859b20/hk-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
                alt=""
                loading="lazy"
            /></picture>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <picture
              ><source
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                sizes="(max-width: 274px) 100vw, 274px" />
              <img
                sizes="(max-width: 274px) 100vw, 274px"
                srcset="
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=69&amp;h=111&amp;q=100   69w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=137&amp;h=220&amp;q=100 137w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100 274w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=411&amp;h=660&amp;q=100 411w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=548&amp;h=880&amp;q=100 548w,
                  //images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=578&amp;h=928&amp;q=100 578w
                "
                src="//images.ctfassets.net/dllbbq2u2bi6/51WM0JhNqgmOaGKeMs88Sk/91b9c6758cb638bade546889c915ebc3/paris-img-optimized.jpg?w=274&amp;h=440&amp;q=100"
                alt=""
                loading="lazy"
            /></picture></div
        ></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style>
</style>
