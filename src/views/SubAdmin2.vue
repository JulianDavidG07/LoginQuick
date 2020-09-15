<template>
  <div>
    <div class="flex justify-between">
      <img class="ml-3 mt-4 self-end" src="../assets/super.png" width="50px" />
      <div class="self-center">
        <SignOut />
      </div>
    </div>

    <div class="flex justify-center mb-5 border-b-4 text-white">
      <router-link class="px-2 pb-2 hover:bg-white hover:text-black" to="/subadmin1">Tabla</router-link>
      <router-link class="px-2 pb-2 hover:bg-white hover:text-black" to="/subadmin2">Categorias</router-link>
    </div>

    <div class="flex flex-col text-white mx-2">
      <p
        class="m-auto"
      >En este apartado se da a conocer la suma total correspondiente a la respectiva categoría (Oro, Plata, Bronce).</p>
    </div>

    <div class="flex flex-wrap lg:justify-around mt-5 text-white px-6">
      <!-- medalla oro -->
      <CardMedalla
        image_src="oro"
        color_card="yellow"
        :totalMedallas="dataArraySumGold | filterDecimalPointGold"
        nombreMedal="Oro"
      />
      <ModalCard v-if="oroModal === true" />

      <!-- medalla plata -->
      <CardMedalla
        image_src="plata"
        color_card="gray"
        :totalMedallas="dataArraySumSilver | filterDecimalPointSilver"
        nombreMedal="Plata"
      />

      <!-- medalla bronce -->
      <CardMedalla
        image_src="bronce"
        color_card="orange"
        :totalMedallas="dataArraySumBronze | filterDecimalPointBronze"
        nombreMedal="Bronce"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import SignOut from "../components/SignOut";
import CardMedalla from "../components/CardMedalla";

export default {
  name: 'SubAdmin"',

  components: {
    SignOut,
    CardMedalla,
  },

  computed: {
    ...mapState(["dataArray"]),
    dataArraySumGold() {
      let totalMedallasArray = this.dataArray.map((x) => x.gold);
      let reducer = (a, b) => a + b;
      return totalMedallasArray.reduce(reducer);
    },
    dataArraySumSilver() {
      let totalMedallasArray = this.dataArray.map((x) => x.silver);
      let reducer = (a, b) => a + b;
      return totalMedallasArray.reduce(reducer);
    },
    dataArraySumBronze() {
      let totalMedallasArray = this.dataArray.map((x) => x.bronze);
      let reducer = (a, b) => a + b;
      return totalMedallasArray.reduce(reducer);
    },
  },

  methods: {
    ...mapMutations(["pushData"]),
    ...mapActions(["getData"]),
    ButtonState() {
      alert("hola");
    },
  },

  // Este filtro le añade un punto decimal al total de las medallas
  filters: {
    filterDecimalPointGold: (dataArraySumGold) => {
      if (!dataArraySumGold) {
        dataArraySumGold = 0;
      }

      dataArraySumGold = dataArraySumGold
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .split(".")[0];
      return dataArraySumGold;
    },

    filterDecimalPointSilver: (dataArraySumSilver) => {
      if (!dataArraySumSilver) {
        dataArraySumSilver = 0;
      }

      dataArraySumSilver = dataArraySumSilver
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .split(".")[0];
      return dataArraySumSilver;
    },

    filterDecimalPointBronze: (dataArraySumBronze) => {
      if (!dataArraySumBronze) {
        dataArraySumBronze = 0;
      }

      dataArraySumBronze = dataArraySumBronze
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .split(".")[0];
      return dataArraySumBronze;
    },
  },

  mounted() {
    this.getData();
  },
};
</script>
