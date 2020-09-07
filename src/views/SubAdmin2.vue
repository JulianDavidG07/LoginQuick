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
    <!-- <ul>
      <li v-for="(x, key) in dataArray" :key="key">{{ x.gold }}</li>
    </ul>-->

    <div class="flex flex-wrap lg:justify-around mt-5 text-white px-6">
      <!-- medalla oro -->
      <CardMedalla
        image_src="oro"
        color_card="yellow"
        :totalMedallas="dataArraySumGold"
        nombreMedal="Oro"
      />
      <ModalCard v-if="oroModal === true" />

      <!-- medalla plata -->
      <CardMedalla
        image_src="plata"
        color_card="gray"
        :totalMedallas="dataArraySumSilver"
        nombreMedal="Plata"
      />

      <!-- medalla bronce -->
      <CardMedalla
        image_src="bronce"
        color_card="orange"
        :totalMedallas="dataArraySumBronze"
        nombreMedal="Bronce"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import SignOut from "../components/SignOut";
import CardMedalla from "../components/CardMedalla";
import ModalCard from "../components/ModalCard";

export default {
  name: 'SubAdmin"',

  components: {
    SignOut,
    CardMedalla,
    ModalCard,
  },

  data() {
    return {
      oroModal: false,
      plataModal: false,
      bronceModal: false,
    };
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

  mounted() {
    this.getData();
  },
};
</script>
