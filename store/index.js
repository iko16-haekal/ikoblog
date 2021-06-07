import axios from "axios";

export const state = () => ({
  artikel: null
});

export const getters = {};

export const mutations = {
  SET_ARTIKEL: (state, data) => {
    state.artikel = data;
  }
};

export const actions = {
  async getArtikel({ commit }) {
    const data = await (await axios.get("http://localhost:1337/artikels")).data;
    commit("SET_ARTIKEL", data);
  }
};
