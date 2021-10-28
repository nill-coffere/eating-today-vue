import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userStore = new Vuex.Store({
    state: {
        user: {}
    },
    getters: {
        getUserInfo(state) {
            return state.user;
        }
    },
    mutations: {
        setUserInfo(state, user) {
            state.user = user;
        }
    },
    actions: {
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        }
    }
});

export default userStore;