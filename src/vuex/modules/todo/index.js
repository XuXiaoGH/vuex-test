/**
 * Created by admin on 2017/1/12.
 */

import actions from './actions';
import mutations from './mutations';
export default {
    state: {
        todoList:[],
        todoInfo:{
            id: 0,
            text: '',
            isDone: false,
        },
        selected: 0
    },
    actions: actions,
    mutations: mutations,
    getters:{
        filterDoned: function (state) { //已完成的todo
            let todoList = state.todoList.filter((item)=>{
                if(item.isDone){
                  return item;
                }
            });
            return todoList;
        },
        filterNoDoned: function (state) {
          let todoList = state.todoList.filter((item)=>{
            if(!item.isDone){
              return item;
            }
          });
          return todoList;
      }
    }
};
