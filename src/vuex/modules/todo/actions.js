/**
 * Created by admin on 2017/1/12.
 */
import * as types from './mutation_type';
export default {
    /**
     * 增加todo
     * @param commit
     * @param mobile
     */
    addTodo({ commit } , todoText){
        commit(types.ADD_TODO , todoText);
    },
    doneTodo({ commit } , id){
        commit(types.DONE_TODO , id);
    },
    selectType({ commit } , type){
        commit(types.SELECT_TYPE , type);
    },

};
