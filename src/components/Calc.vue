<template>
  <div>
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
        <div class="bg-blue-300 mb-4 mt-0 text-center" v-bind:class="selectedColumn,selectedPadding,selectedHeight">
          <span class="bg-blue-200 w-full flex text-1xl font-bold justify-center items-center" ref="boxWidth" id="divw" v-bind:class="selectedHeight">{{width}}px</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      selectedViewport: 'container',
      voptions: [
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
      selectedPadding: 'px-4',
      poptions: [
        { text: 'No padding', value: 'px-0' },
        { text: '16px (Default)', value: 'px-4' },
        { text: '24px', value: 'px-6' },
        { text: '32px', value: 'px-8' },
      ],
      selectedHeight: 'h-8',
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