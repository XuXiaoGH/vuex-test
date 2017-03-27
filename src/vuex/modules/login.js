/**
 * Created by admin on 2017/1/11.
 */
export const LOGIN_SUC = 'LOGIN_SUC';
export const SHOW_LOGIN = 'SHOW_LOGIN';
export default {
    state: {
        mobile: '',
        password: '',
        isShowLogin: false,
    },
    actions: {
        addMyInfo({ commit } , loginInfo){
        commit(LOGIN_SUC , loginInfo);
        },
        showLogin({ commit } , flag){
          commit(SHOW_LOGIN , flag);
        },
    },
    mutations: {
        [LOGIN_SUC] (state , loginInfo) {
          state.mobile = loginInfo.mobile;
        },

        [SHOW_LOGIN] (state , flag) {
          state.isShowLogin = flag;
        },
    },
    getters: {
        getMsg(state){
            return state.msg;
        }
    }
};
