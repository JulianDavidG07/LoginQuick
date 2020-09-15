<template>
  <div class="flex z-0 mx-auto my-5">
    <div :class="`flex flex-col bg-${color_card}-400 w-16 h-24 text-black p-2`">
      <strong class="inline-block bg-purple-300">{{nombreMedal}}</strong>
      <div>
        <span class="inline-block">{{totalMedallas}}</span>
      </div>
      <strong class="inline-block">Medals</strong>
    </div>
    <a href="#">
      <img
        :class="`border-4 border-${color_card}-400`"
        :src="require(`../assets/${image_src}.png`)"
        width="200px"
        height="200px"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "CardMedalla",
  props: ["image_src", "totalMedallas", "color_card", "nombreMedal"],
};
</script>

<style>
</style>
