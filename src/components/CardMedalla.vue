<template>
  <div class="flex">
    <div :class="`bg-${color_card}-400 w-16 h-16 text-black p-2`">
      <strong class="inline-block">Total:</strong>
      <span class="inline-block">{{totalMedallas}}</span>
    </div>
    <img
      :class="`border-4 border-${color_card}-400`"
      :src="require(`../assets/${image_src}.png`)"
      width="200px"
      height="200px"
    />
  </div>
</template>

<script>
export default {
  name: "CardMedalla",
  props: ["image_src", "totalMedallas", "color_card"],
};
</script>

<style>
</style>
