<template>
  <div>
    <!-- head page view -->
    <HeadView />

    <!-- rouer navigation between pages -->
    <RouterAdmin />

    <div class="overflow-x-auto mx-2 mt-4 md:flex md:justify-center">
      <table class="table-auto text-white">
        <thead>
          <tr>
            <th class="px-4 py-2 border border-white bg-yellow-300 text-gray-900">Atleta</th>
            <th class="px-4 py-2 border border-white bg-yellow-400 text-gray-900">Edad</th>
            <th class="px-4 py-2 border border-white bg-yellow-300 text-gray-900">País</th>
            <th class="px-4 py-2 border border-white bg-yellow-400 text-gray-900">Año</th>
            <th class="px-4 py-2 border border-white bg-yellow-300 text-gray-900">Fecha</th>
            <th class="px-4 py-2 border border-white bg-yellow-400 text-gray-900">Deporte</th>
            <th class="px-4 py-2 border border-white bg-yellow-300 text-gray-900">Oro</th>
            <th class="px-4 py-2 border border-white bg-yellow-400 text-gray-900">Plata</th>
            <th class="px-4 py-2 border border-white bg-yellow-300 text-gray-900">Bronce</th>
            <th class="px-4 py-2 border border-white bg-yellow-300 text-gray-900">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(x, key) of dataArray" :key="key">
            <td class="border px-4 py-2">{{ x.athlete }}</td>
            <td class="border px-4 py-2">{{ x.age }}</td>
            <td class="border px-4 py-2">{{ x.country }}</td>
            <td class="border px-4 py-2">{{ x.year }}</td>
            <td class="border px-4 py-2">{{ x.date }}</td>
            <td class="border px-4 py-2">{{ x.sport }}</td>
            <td class="border px-4 py-2">
              <span class="bg-yellow-300 rounded-full px-2 text-black">{{ x.gold }}</span>
            </td>
            <td class="border px-4 py-2">
              <span class="bg-gray-300 rounded-full px-2 text-black">{{ x.silver }}</span>
            </td>
            <td class="border px-4 py-2">
              <span class="bg-orange-400 rounded-full px-2 text-black">{{ x.bronze }}</span>
            </td>
            <td class="border px-4 py-2">
              <span class="bg-green-400 rounded-full px-2 text-black">{{ x.total }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- this is a loader while waiting for the api response -->
    <div v-show="loader">
      <LoaderSVG />
    </div>
  </div>
</template>

<script>
import LoaderSVG from "../components/LoaderSVG";
import HeadView from "../components/HeadView";
import RouterAdmin from "../components/RouterAdmin";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Administrador",

  components: {
    LoaderSVG,
    HeadView,
    RouterAdmin,
  },

  computed: {
    ...mapState(["dataArray"]),
  },

  methods: {
    ...mapMutations(["pushData"]),
    ...mapActions(["getData"]),
  },

  created() {
    this.loader = true;
  },

  mounted() {
    this.getData();
    this.loader = false;
  },
};
</script>

<style>
.router-link-active {
  background-color: rgb(234, 241, 241);
  color: rgb(20, 20, 20);
}
</style>
