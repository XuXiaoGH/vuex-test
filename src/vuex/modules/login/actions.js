/**
 * Created by admin on 2017/1/12.
 */
import * as types from './mutation_type';
export default {
    /**
     * 增加手机号到state
     * @param commit
     * @param mobile
     */
    addMobile({ commit } , mobile){
        commit(types.ADD_MOBILE , mobile);
    },
    changeText({ commit } , mobile){
      commit(types.ADD_MOBILE , mobile);
    },
    /**
     * 增加手机号和密码到state
     * @param commit
     * @param mobile
     */
    addMobilePsw({ commit } , userInfo){
        commit(types.ADD_MOBILEPSW , userInfo);
    },
    /**
     * 校验手机号
     * @param commit
     * @param mobile
     */
    checkMobile({ commit } , mobile){
        commit(types.CHECK_MOBILE , mobile);
    }
};
