import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataArray: [],
  },

  mutations: {
    pushData(state, dataActions) {
      state.dataArray = dataActions;
    },
  },

  actions: {
    getData: async ({ commit }) => {
      try {
        const data = await fetch("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json");
        const dataArray = await data.json();
        commit("pushData", dataArray);
      } catch (error) {
        alert(error);
      }
    },
  },
  modules: {
  }
})
