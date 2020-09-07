<template>
  <div>
    <div class="flex justify-between">
      <img class="ml-3 mt-4" src="../assets/super.png" width="100px" />
      <div class="self-center m-5">
        <SignOut />
      </div>
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
    {{sumar}}
    <div class="flex justify-around mt-5 text-white px-6">
      <!-- medalla oro -->
      <CardMedalla image_src="oro" />

      <!-- medalla plata -->
      <CardMedalla image_src="plata" />

      <!-- medalla bronce -->
      <CardMedalla image_src="bronce" />
    </div>
  </div>
</template>

<script>
import SignOut from "../components/SignOut";
import CardMedalla from "../components/CardMedalla";

export default {
  name: 'SubAdmin"',

  data() {
    return {
      message: [],
      oro: false,
    };
  },

  components: {
    SignOut,
    CardMedalla,
  },
};
</script>
