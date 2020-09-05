<template>
  <div>
    <div class="flex justify-end m-8">
      <SignOut />
    </div>

    <div class="flex justify-center mb-5 border-b-4 text-white">
      <router-link class="px-2 pb-2 hover:bg-white hover:text-black" to="/subadmin1">Tabla</router-link>
      <router-link class="px-2 pb-2 hover:bg-white hover:text-black" to="/subadmin2">Categorias</router-link>
    </div>

    <div class="flex flex-col text-white">
      <p
        class="m-auto"
      >En este apartado se da a conocer la suma total correspondiente a la respectiva categoría (Oro, Plata, Bronce).</p>
      <strong class="m-auto">Para mas información puedes dar click sobre la medalla.</strong>
    </div>

    <div class="flex justify-around mt-5 text-white px-6">
      <!-- medalla oro -->
      <div class="flex">
        <div class="bg-yellow-400 w-10 h-10"></div>
        <img
          class="border-4 border-yellow-400"
          src="../assets/oro.png"
          width="200px"
          height="200px"
        />
      </div>

      <!-- medalla plata -->
      <div class="flex">
        <div class="bg-gray-400 w-10 h-10"></div>
        <img
          class="border-4 border-gray-400"
          src="../assets/plata.png"
          width="200px"
          height="200px"
        />
      </div>

      <!-- medalla bronce -->
      <div class="flex">
        <div class="bg-orange-400 w-10 h-10"></div>
        <img
          class="border-4 border-orange-400"
          src="../assets/bronce.png"
          width="200px"
          height="200px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SignOut from "../components/SignOut";

export default {
  name: 'SubAdmin"',

  components: {
    SignOut,
  },
};
</script>
