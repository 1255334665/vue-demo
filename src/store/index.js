import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    arrLists: [],
};

const getters = {
    getArrLists(state){
        return state.arrLists
    }
}

const mutations = {
    array_muta(state,items){
        state.arrLists.push(items)
    }
};

const actions = {
    array_act(context,item){
        context.commit('array_muta',item)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;