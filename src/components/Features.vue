<template>
  <div class="px-4 sm:px-6">
    <div class="flex flex-col items-center max-w-2xl mx-auto md:items-start">
      <h1 class="hidden mb-5 text-sm text-gray-600 md:block">HOPPER APP</h1>
      <h2
        class="text-lg font-semibold text-center text-black md:text-2xl lg:text-4xl"
      >
        Always Get the Best Price
      </h2>
      <p
        class="max-w-xl mt-4 leading-7 text-center text-gray-500 lg:leading-10 md:text-left md:text-xl"
      >
        Hopper predicts future flight and hotel prices with 95% recommendation
        accuracy and notifies you the instant there's a deal. Freeze the price
        if you need more time to plan!
      </p>
    </div>
    <!-- <GridMobile /> -->

    <div
      class="flex flex-col items-center max-w-2xl mx-auto mt-20 md:items-start"
    >
      <h1 class="hidden mb-5 text-sm text-gray-600 md:block">FEATURES</h1>
      <h2
        class="text-lg font-semibold text-center text-black md:text-2xl lg:text-4xl"
      >
        Travel with Confidence
      </h2>
      <p
        class="max-w-xl mt-4 leading-7 text-center text-gray-500 lg:leading-10 md:text-left md:text-xl"
      >
        Avoid fees and frustration! Make any trip flexible with Hopper’s
        Flexible Dates and Refundable Ticket Plans. Get instantly rebooked
        without extra costs if your flight is delayed or you miss a connection
        with Hopper’s Disruption Rebooking Service.
      </p>
    </div>

    <div class="grid max-w-5xl mx-auto mt-16 grid-cols-cards">
      <div class="flex flex-col items-center p-3 m-4 shadow-md">
        <img
          srcset="
            //images.ctfassets.net/dllbbq2u2bi6/1mJslx4dTyOqKyEKS8MA0C/9fc5adc33e3b99ddd2e7f677ff510385/Feature-Thumbs-01-Flights-.png?w=78&amp;h=78&amp;q=100   1x,
            //images.ctfassets.net/dllbbq2u2bi6/1mJslx4dTyOqKyEKS8MA0C/9fc5adc33e3b99ddd2e7f677ff510385/Feature-Thumbs-01-Flights-.png?w=117&amp;h=117&amp;q=100 1.5x,
            //images.ctfassets.net/dllbbq2u2bi6/1mJslx4dTyOqKyEKS8MA0C/9fc5adc33e3b99ddd2e7f677ff510385/Feature-Thumbs-01-Flights-.png?w=156&amp;h=156&amp;q=100 2x,
            //images.ctfassets.net/dllbbq2u2bi6/1mJslx4dTyOqKyEKS8MA0C/9fc5adc33e3b99ddd2e7f677ff510385/Feature-Thumbs-01-Flights-.png?w=234&amp;h=234&amp;q=100 3x
          "
          src="//images.ctfassets.net/dllbbq2u2bi6/1mJslx4dTyOqKyEKS8MA0C/9fc5adc33e3b99ddd2e7f677ff510385/Feature-Thumbs-01-Flights-.png?w=78&amp;q=100"
          alt=""
          width="78"
          height="78"
          loading="lazy"
        />
        <span class="mt-3 font-medium text-center text-gray-800"
          >Book Flights</span
        >
      </div>
      <div class="flex flex-col items-center p-3 m-4 shadow-md">
        <img
          srcset="
            //images.ctfassets.net/dllbbq2u2bi6/1hl7R7KxLCmQoSsKcEGEMq/25c2f92e33d13095a272d8a6135b680b/Feature-Thumbs-02-Hotels.png?w=78&amp;h=78&amp;q=100   1x,
            //images.ctfassets.net/dllbbq2u2bi6/1hl7R7KxLCmQoSsKcEGEMq/25c2f92e33d13095a272d8a6135b680b/Feature-Thumbs-02-Hotels.png?w=117&amp;h=117&amp;q=100 1.5x,
            //images.ctfassets.net/dllbbq2u2bi6/1hl7R7KxLCmQoSsKcEGEMq/25c2f92e33d13095a272d8a6135b680b/Feature-Thumbs-02-Hotels.png?w=156&amp;h=156&amp;q=100 2x,
            //images.ctfassets.net/dllbbq2u2bi6/1hl7R7KxLCmQoSsKcEGEMq/25c2f92e33d13095a272d8a6135b680b/Feature-Thumbs-02-Hotels.png?w=234&amp;h=234&amp;q=100 3x
          "
          src="//images.ctfassets.net/dllbbq2u2bi6/1hl7R7KxLCmQoSsKcEGEMq/25c2f92e33d13095a272d8a6135b680b/Feature-Thumbs-02-Hotels.png?w=78&amp;q=100"
          alt=""
          width="78"
          height="78"
          loading="lazy"
        />
        <span class="mt-3 font-medium text-center text-gray-800"
          >Book Hotels</span
        >
      </div>
      <div class="flex flex-col items-center p-3 m-4 shadow-md">
        <img
          srcset="
            //images.ctfassets.net/dllbbq2u2bi6/7DwdAhRFfyoCuW80EQ8Q8G/b278ac656f20e8c2e344c838db8e809c/Feature-Thumbs-03-Cars.png?w=78&amp;h=78&amp;q=100   1x,
            //images.ctfassets.net/dllbbq2u2bi6/7DwdAhRFfyoCuW80EQ8Q8G/b278ac656f20e8c2e344c838db8e809c/Feature-Thumbs-03-Cars.png?w=117&amp;h=117&amp;q=100 1.5x,
            //images.ctfassets.net/dllbbq2u2bi6/7DwdAhRFfyoCuW80EQ8Q8G/b278ac656f20e8c2e344c838db8e809c/Feature-Thumbs-03-Cars.png?w=156&amp;h=156&amp;q=100 2x,
            //images.ctfassets.net/dllbbq2u2bi6/7DwdAhRFfyoCuW80EQ8Q8G/b278ac656f20e8c2e344c838db8e809c/Feature-Thumbs-03-Cars.png?w=234&amp;h=234&amp;q=100 3x
          "
          src="//images.ctfassets.net/dllbbq2u2bi6/7DwdAhRFfyoCuW80EQ8Q8G/b278ac656f20e8c2e344c838db8e809c/Feature-Thumbs-03-Cars.png?w=78&amp;q=100"
          alt=""
          width="78"
          height="78"
          loading="lazy"
        />
        <span class="mt-3 font-medium text-center text-gray-800"
          >Book Cars</span
        >
      </div>
      <div class="flex flex-col items-center p-3 m-4 shadow-md">
        <img
          srcset="
            //images.ctfassets.net/dllbbq2u2bi6/4onpSCaPvWEwG82wIKyOio/bbafb7e7c84055acbfb30a24841cf38a/Feature-Thumbs-04-Notified.png?w=78&amp;h=78&amp;q=100   1x,
            //images.ctfassets.net/dllbbq2u2bi6/4onpSCaPvWEwG82wIKyOio/bbafb7e7c84055acbfb30a24841cf38a/Feature-Thumbs-04-Notified.png?w=117&amp;h=117&amp;q=100 1.5x,
            //images.ctfassets.net/dllbbq2u2bi6/4onpSCaPvWEwG82wIKyOio/bbafb7e7c84055acbfb30a24841cf38a/Feature-Thumbs-04-Notified.png?w=156&amp;h=156&amp;q=100 2x,
            //images.ctfassets.net/dllbbq2u2bi6/4onpSCaPvWEwG82wIKyOio/bbafb7e7c84055acbfb30a24841cf38a/Feature-Thumbs-04-Notified.png?w=234&amp;h=234&amp;q=100 3x
          "
          src="//images.ctfassets.net/dllbbq2u2bi6/4onpSCaPvWEwG82wIKyOio/bbafb7e7c84055acbfb30a24841cf38a/Feature-Thumbs-04-Notified.png?w=78&amp;q=100"
          alt=""
          width="78"
          height="78"
          loading="lazy"
        />
        <span class="mt-3 font-medium text-center text-gray-800"
          >Get Notified</span
        >
      </div>
      <div class="flex flex-col items-center p-3 m-4 shadow-md">
        <img
          srcset="
            //images.ctfassets.net/dllbbq2u2bi6/tqveorCC40WupB9EcZ9CF/8700325bc01ffb76005558eb7aff34d6/Feature-Thumbs-05-Freeze.png?w=78&amp;h=78&amp;q=100   1x,
            //images.ctfassets.net/dllbbq2u2bi6/tqveorCC40WupB9EcZ9CF/8700325bc01ffb76005558eb7aff34d6/Feature-Thumbs-05-Freeze.png?w=117&amp;h=117&amp;q=100 1.5x,
            //images.ctfassets.net/dllbbq2u2bi6/tqveorCC40WupB9EcZ9CF/8700325bc01ffb76005558eb7aff34d6/Feature-Thumbs-05-Freeze.png?w=156&amp;h=156&amp;q=100 2x,
            //images.ctfassets.net/dllbbq2u2bi6/tqveorCC40WupB9EcZ9CF/8700325bc01ffb76005558eb7aff34d6/Feature-Thumbs-05-Freeze.png?w=234&amp;h=234&amp;q=100 3x
          "
          src="//images.ctfassets.net/dllbbq2u2bi6/tqveorCC40WupB9EcZ9CF/8700325bc01ffb76005558eb7aff34d6/Feature-Thumbs-05-Freeze.png?w=78&amp;q=100"
          alt=""
          width="78"
          height="78"
          loading="lazy"
        />
        <span class="mt-3 font-medium text-center text-gray-800"
          >Freeze Prices</span
        >
      </div>
      <div class="flex flex-col items-center p-3 m-4 shadow-md">
        <img
          srcset="
            //images.ctfassets.net/dllbbq2u2bi6/1DpbbgTHxSgoOAmAwK40GA/41e6d3b8ec81351b52cd5c5e94d75ca7/Feature-Thumbs-06-Protection.png?w=78&amp;h=78&amp;q=100   1x,
            //images.ctfassets.net/dllbbq2u2bi6/1DpbbgTHxSgoOAmAwK40GA/41e6d3b8ec81351b52cd5c5e94d75ca7/Feature-Thumbs-06-Protection.png?w=117&amp;h=117&amp;q=100 1.5x,
            //images.ctfassets.net/dllbbq2u2bi6/1DpbbgTHxSgoOAmAwK40GA/41e6d3b8ec81351b52cd5c5e94d75ca7/Feature-Thumbs-06-Protection.png?w=156&amp;h=156&amp;q=100 2x,
            //images.ctfassets.net/dllbbq2u2bi6/1DpbbgTHxSgoOAmAwK40GA/41e6d3b8ec81351b52cd5c5e94d75ca7/Feature-Thumbs-06-Protection.png?w=234&amp;h=234&amp;q=100 3x
          "
          src="//images.ctfassets.net/dllbbq2u2bi6/1DpbbgTHxSgoOAmAwK40GA/41e6d3b8ec81351b52cd5c5e94d75ca7/Feature-Thumbs-06-Protection.png?w=78&amp;q=100"
          alt=""
          width="78"
          height="78"
          loading="lazy"
        />
        <span class="mt-3 font-medium text-center text-gray-800"
          >Get Protected</span
        >
      </div>
    </div>
  </div>
</template>

<script>
// import GridMobile from './GridMobile.vue'
export default {
  components: {
    // GridMobile,
  },
}
</script>

<style>
</style>
