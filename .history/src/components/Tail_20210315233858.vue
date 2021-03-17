<template>
  <div>

  <div class="container mx-auto">
    <h2 class="text-xl font-bold my-4">6 Columns with padding 16px (tailwind p-4) </h2>
    <div class="flex items-center">
      <div class="w-1/6 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-xl font-bold my-4">3 Columns with padding 16px (tailwind p-4) </h2>
    <div class="flex items-center">
      <div class="w-1/3 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-xl font-bold my-4">2 Columns with padding 16px (tailwind p-4) {{ twoCol }}</h2>
    <div class="flex items-center">
      <div class="w-1/2 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ twoCol }}</span>
      </div>
      <div class="w-1/2 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ twoCol }}</span>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sixCol: "168px",
      threeCol: "368px",
      twoCol: "568px",      
    };
  },
}
</script>