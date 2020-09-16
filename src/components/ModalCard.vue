<template>
  <div
    :class="`flex flex-col bg-${color_modal}-300 text-black border-2 border-black rounded-lg p-5`"
  >
    <button class="self-end focus:outline-none" @click="close_modal">
      <ion-icon class="hover:bg-black hover:text-white" name="close-outline" size="large"></ion-icon>
    </button>
    <div class="inline-block px-3 mt-2">{{text_content}}</div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",

  props: ["color_modal", "text_content", "close_modal"],
};
</script>
