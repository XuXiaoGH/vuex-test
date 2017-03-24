/**
 * Created by admin on 2017/1/11.
 */
const CHANGE_TEXT = 'CHANGE_TEXT';
export default {
    state: {
        msg: '这是一个Vuex的测试小栗子',
    },
    actions: {
        changeText({ commit } , text){
            console.log('0000000');
            commit(CHANGE_TEXT , text);
        },
    },
    mutations: {
        [CHANGE_TEXT] (state , text){
          console.log('mutations 0000');
          state.msg = '00000000';
        }
    },
    getters: {
        getMsg(state){
            return state.msg;
        }
    }
};
