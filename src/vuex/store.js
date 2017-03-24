/**
 * Created by admin on 2017/1/10.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login/index';
import product from './modules/product';
import product1 from './modules/product1';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login: login,
        product: product,
        product1:product1
    },
});
