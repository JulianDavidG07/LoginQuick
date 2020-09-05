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
      <div class="flex" @click="oro !== oro">
        <div class="bg-yellow-400 w-10 h-10"></div>
        <img
          class="border-4 border-yellow-400"
          src="../assets/oro.png"
          width="200px"
          height="200px"
        />
      </div>

      <div v-if="oro === true">Oro Modal</div>

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
import axios from "axios";

export default {
  name: 'SubAdmin"',

  data() {
    return {
      message: [],
      oro: false,
    };
  },

  // filter: {
  //   sumar() {
  //     return arrays.reduce((a, b) => {
  //       return a + b;
  //     });
  //   },
  // },
  components: {
    SignOut,
  },

  async mounted() {
    try {
      this.message = await axios
        .get(
          "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json"
        )
        .then((res) => res.data);
      this.error = null;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
