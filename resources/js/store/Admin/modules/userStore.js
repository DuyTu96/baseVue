import axios from 'axios';
import * as types from '../mutation-types';

// state
export const state = {
    users: [],
    user: {},
};

// mutations
export const mutations = {
    FETCH(state, users) {
        state.users = users;
    },
    FETCH_ONE(state, user) {
        state.user = user;
    },
};

// actions
export const actions = {
    async getUsers({commit}) {
        const response = await axios.get('api/user');
        commit('FETCH', response);
    },
    async getUser({commit}, params) {
        const response = await axios.get(`/api/user/${params}`);
        commit('FETCH_ONE', response);
    },
    async importExcelToDB({commit}, datas) {
        const response = await axios.post(`/api/user/import/excel`, {
            data: datas
        });
        commit('FETCH', response);
    },
};
