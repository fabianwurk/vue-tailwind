<template>
  <div>
    <div class="container mx-auto bg-white">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="rounded-md bg-yellow-50 p-4 mt-8">
        <div class="flex">
          <div class="flex-shrink-0">
            <!-- Heroicon name: solid/exclamation -->
            <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">
              Please note, this tool can only be used on screens larger than 1200px
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto bg-white">
      <div class="flex flex-wrap justify-between my-12 text-sm md:divide-x-4 divide-white">

        <div class="flex-auto">
          <p class="pb-2 font-medium">Choose viewport</p>
          <select class="bg-black text-white px-1 py-1 w-full" v-model="selectedViewport" v-on:change="onViewportChange">
            <option v-for="voption in voptions" v-bind:value="voption.value">
              {{ voption.text }}
            </option>
          </select>
        </div>

        <div class="flex-auto">
          <p class="pb-2 font-medium">Choose columns</p>
          <select class="bg-black text-white px-1 py-1 w-full" v-model="selectedColumn" v-on:change="onColumnChange">
            <option v-for="coption in coptions" v-bind:value="coption.value">
              {{ coption.text }}
            </option>
          </select>
        </div>

        <div class="flex-auto">
          <p class="pb-2 font-medium">Choose height</p>
          <select class="bg-black text-white px-1 py-1 w-full" v-model="selectedHeight" v-on:change="onHeightChange">
            <option v-for="hoption in hoptions" v-bind:value="hoption.value">
              {{ hoption.text }}
            </option>
          </select>
        </div>

        <div class="flex-auto">
          <p class="pb-2 font-medium">Choose padding</p>
          <select class="bg-black text-white px-1 py-1 w-full" v-model="selectedPadding" v-on:change="onPaddingChange">
            <option v-for="poption in poptions" v-bind:value="poption.value">
              {{ poption.text }}
            </option>
          </select>
        </div>

      </div>
    </div>

    <div class="mx-auto bg-white" v-bind:class="selectedViewport">
      <div class="flex items-center justify-center">

        <div class="bg-black mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center bg-cover bg-no-repeat bg-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight"  style="background-image: url('https://picsum.photos/1200/');"><div class="bg-black px-2 py-1 text-white">{{width}}px</div></span>
        </div>

        <div class="bg-black mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight" v-if="selectedColumn === 'w-1/2'">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center bg-cover bg-no-repeat bg-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight"  style="background-image: url('https://picsum.photos/1200/');"><div class="bg-black px-2 py-1 text-white">{{width}}px</div></span>
        </div>

        <div class="bg-black mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight" v-if="selectedColumn === 'w-1/3'">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center bg-cover bg-no-repeat bg-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight"  style="background-image: url('https://picsum.photos/1200/');"><div class="bg-black px-2 py-1 text-white">{{width}}px</div></span>
        </div>

        <div class="bg-black mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight" v-if="selectedColumn === 'w-1/3'">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center bg-cover bg-no-repeat bg-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight"  style="background-image: url('https://picsum.photos/1200/');"><div class="bg-black px-2 py-1 text-white">{{width}}px</div></span>
        </div>

        <div class="bg-black mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight" v-if="selectedColumn === 'w-1/4'">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center bg-cover bg-no-repeat bg-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight"  style="background-image: url('https://picsum.photos/1200/');"><div class="bg-black px-2 py-1 text-white">{{width}}px</div></span>
        </div>

        <div class="bg-black mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight" v-if="selectedColumn === 'w-1/4'">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center bg-cover bg-no-repeat bg-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight"  style="background-image: url('https://picsum.photos/1200/');"><div class="bg-black px-2 py-1 text-white">{{width}}px</div></span>
        </div>

        <div class="bg-black mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight" v-if="selectedColumn === 'w-1/4'">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center bg-cover bg-no-repeat bg-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight"  style="background-image: url('https://picsum.photos/1200/');"><div class="bg-black px-2 py-1 text-white">{{width}}px</div></span>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    divcontent: String
  },
  data() {
    return {
      width: 0,
      selectedViewport: 'container',
      voptions: [
        { text: 'Hero', value: 'w-full' },
        { text: 'Desktop', value: 'container' },
        { text: 'Tablet Landscape / Laptop', value: 'max-w-screen-lg' },
        { text: 'Tablet Portrait', value: 'max-w-screen-md' },
        { text: 'Small - Mobile Landscape', value: 'max-w-screen-sm' },
        { text: 'Mobile Portrait', value: 'max-w-mobile' },

      ],
      selectedColumn: 'w-full',
      coptions: [
        { text: 'Full', value: 'w-full' },
        { text: 'Two Thirds', value: 'w-2/3' },
        { text: 'Half', value: 'w-1/2' },
        { text: 'Third', value: 'w-1/3' },
        { text: 'Quarter', value: 'w-1/4' },
      ],
      selectedPadding: 'px-0',
      poptions: [
        { text: 'No padding', value: 'px-0' },
        { text: '16px (Black)', value: 'px-4 bg-black' },
        { text: '16px (White)', value: 'px-4 bg-white' },
        { text: '32px (Black)', value: 'px-8 bg-black' },
        { text: '32px (White)', value: 'px-8 bg-white' },
      ],
      selectedHeight: 'h-128',
      hoptions: [
        { text: '32px', value: 'h-8' },
        { text: '128px', value: 'h-32' },
        { text: '256px', value: 'h-64' },
        { text: '384px', value: 'h-96' },
        { text: '448px', value: 'h-112' },
        { text: '512px', value: 'h-128' },
        { text: 'Full Height', value: 'h-screen' },
      ],
    };
  },
  mounted() {
    this.width = document.getElementById("divw").offsetWidth;
  },
  created() {
    addEventListener("resize", this.resizeWidthEvent);
  },
  methods: {
    resizeWidthEvent(e) {
      this.width = this.$refs.boxWidth.offsetWidth;
    },
    onViewportChange: function () {
      this.width = this.$refs.boxWidth.offsetWidth;
    },
    onColumnChange: function () {
      this.width = this.$refs.boxWidth.offsetWidth;
    },
    onPaddingChange: function () {
      this.width = this.$refs.boxWidth.offsetWidth;
    },
    onHeightChange: function () {
      this.width = this.$refs.boxWidth.offsetWidth;
    },
  },
}
</script>