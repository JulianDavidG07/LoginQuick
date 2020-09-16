<template>
  <div class="relative">
    <!-- head view page -->
    <HeadView />

    <!-- router navigation between pages -->
    <RouterAdmin />

    <div class="flex flex-col text-white mx-2 mb-2">
      <p
        class="m-auto mb-4"
      >En este apartado se da a conocer la suma total correspondiente a la respectiva categoría (Oro, Plata, Bronce).</p>
      <span
        class="text-center font-bold bg-white rounded-lg text-black"
      >Click en la imagen para mas información</span>
    </div>

    <div class="flex flex-wrap lg:justify-around mt-5 text-white px-6">
      <!-- medalla oro -->
      <CardMedalla
        :change_state_modal="changeStateModalGold"
        image_src="oro"
        color_card="yellow"
        :totalMedallas="dataArraySumGold | filterDecimalPointGold"
        nombreMedal="Oro"
      />
      <!-- card modal GOLD when clicking on the image -->
      <div
        v-if="showModalGold"
        class="z-30 fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
      >
        <ModalCard
          :close_modal="changeStateModalGold"
          color_modal="yellow"
          text_content="La medalla de oro se otorga al competidor o competidora que queda en primera posición de la competición en su respectiva disciplina"
        />
      </div>

      <!-- medalla plata -->
      <CardMedalla
        :change_state_modal="changeStateModalSilver"
        image_src="plata"
        color_card="gray"
        :totalMedallas="dataArraySumSilver | filterDecimalPointSilver"
        nombreMedal="Plata"
      />
      <!-- card modal SILVER when clicking on the image -->
      <div
        v-if="showModalSilver"
        class="z-30 fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
      >
        <ModalCard
          :close_modal="changeStateModalSilver"
          color_modal="gray"
          text_content="La medalla de plata se otorga al competidor o competidora que queda en segunda posición de la competición en su respectiva disciplina"
        />
      </div>

      <!-- medalla bronce -->
      <CardMedalla
        :change_state_modal="changeStateModalBronze"
        image_src="bronce"
        color_card="orange"
        :totalMedallas="dataArraySumBronze | filterDecimalPointBronze"
        nombreMedal="Bronce"
      />
      <!-- card modal BRONZE when clicking on the image -->
      <div
        v-if="showModalBronze"
        class="z-30 fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
      >
        <ModalCard
          :close_modal="changeStateModalBronze"
          color_modal="orange"
          text_content="La medalla de bronce se otorga al competidor o competidora que queda en tercera posición de la competición en su respectiva disciplina."
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import HeadView from "../components/HeadView";
import RouterAdmin from "../components/RouterAdmin";
import CardMedalla from "../components/CardMedalla";
import ModalCard from "../components/ModalCard";

export default {
  name: 'SubAdmin"',

  components: {
    CardMedalla,
    HeadView,
    RouterAdmin,
    ModalCard,
  },

  computed: {
    ...mapState([
      "dataArray",
      "showModalGold",
      "showModalSilver",
      "showModalBronze",
    ]),
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
    ...mapMutations([
      "pushData",
      "changeStateModalGold",
      "changeStateModalSilver",
      "changeStateModalBronze",
    ]),
    ...mapActions(["getData"]),
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
