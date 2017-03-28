<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png">
    </div>

    <div class="myInfo">
      <p v-if="isHaveMobile">欢迎您，{{mobile}}</p>
      <p @click="goLogin" v-if="!isHaveMobile">登录</p>
    </div>


    <addTodo></addTodo>
    <todoList></todoList>


    <login v-if="isShowLogin"></login>
  </div>
</template>

<script>
import login from './components/login';
import addTodo from './components/addTodo';
import todoList from './components/todoList';

export default {
  name: 'app',
  computed:{
    isShowLogin:function(){
      return this.$store.state.login.isShowLogin;
    },
    mobile: function () {
      return this.$store.state.login.mobile;
    },
    isHaveMobile: function () {
      let mobile = this.$store.state.login.mobile;
      if(mobile.length == 11){
        return true;
      }else{
        return false;
      }
    }
  },
  data(){
    return {

    }
  },
  components: {
    login,
    addTodo,
    todoList
  },
  methods:{
    goLogin:function () {
      this.$store.dispatch('showLogin' , true);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
  .logo{
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  .myInfo{
    width: 200px;
    height: 40px;
    margin: 0 auto;
    text-align: center;
  }
</style>
