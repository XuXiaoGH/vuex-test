/**
 * Created by admin on 2017/1/11.
 */
const CHANGE_TEXT = 'CHANGE_TEXT';
export default {
    state: {
        msg: '这是一个Vuex的测试小栗子111',
    },
    actions: {
        changeText({ commit } , text){
            console.log('111111111');
            commit(CHANGE_TEXT , text);
        },
    },
    mutations: {
        [CHANGE_TEXT] (state , text){
          console.log('mutations 111');
          state.msg = '11111111';
        }
    },
    getters: {
        getMsg1(state){
            return state.msg;
        }
    }
};
