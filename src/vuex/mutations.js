/**
 * Created by admin on 2017/1/10.
 */
import * as types from './mutation-type';

export default {
    [types.INCREMENT] (state) {
        state.count++;
    },
    [types.DECMENT] (state){
        state.count--;
    }
};
