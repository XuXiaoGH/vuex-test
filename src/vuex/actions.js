import * as types from './mutation-type';

export default {
    add({ commit }){
        commit(types.INCREMENT);
    },

    dec({ commit }){
        commit(types.DECMENT);
    }
};
