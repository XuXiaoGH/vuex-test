/**
 * Created by admin on 2017/1/12.
 */
import * as types from './mutation_type';

export default {
    [types.ADD_MOBILE] (state , mobile) {
        state.mobile = mobile;
    },
    [types.ADD_MOBILEPSW] (state , userInfo){
        state.mobile = userInfo.mobile;
        state.password = userInfo.password;
    },
    [types.CHECK_MOBILE] (state , mobile){

    },

};
