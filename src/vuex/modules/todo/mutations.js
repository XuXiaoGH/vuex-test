/**
 * Created by admin on 2017/1/12.
 */
import * as types from './mutation_type';

export default {
    [types.ADD_TODO] (state , todoText) {
        if(todoText){
          let todoInfo = {};
          todoInfo.isDone = false;
          if(state.todoList.length == 0){
            todoInfo.id = 0;
          }else if(state.todoList.length > 0){
            let todoFirst = state.todoList[state.todoList.length - 1];
            console.log(todoFirst.text + ' , ' + todoFirst.id);
            todoInfo.id = todoFirst.id + 1;
          }
          todoInfo.text = todoText;
          state.todoList.push(todoInfo);
        }
    },
    [types.DONE_TODO] (state , id) {
       state.todoList.map((item)=>{
          console.log(item.id);
          if(item.id == id){
             item.isDone = true;
          }
       });
    },
  [types.SELECT_TYPE] (state , type) {
      state.selected = type;
  },
};
