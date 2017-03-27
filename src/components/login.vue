<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->

    <!--<p @click="changeText">点我切换文案</p>-->
    <div class="login">
      <input type="text" v-model.trim = 'mobile' ><br>
      <input type="password" v-model.trim = 'password' ><br>
      <button @click="login">登录</button>
    </div>

    <div class="bg">
    </div>




  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
      msg: function () {
        return this.$store.state.product.msg;
      }
  },
  data () {
    return {
      mobile: '18612527736',
      password: '123456'
    }
  },
  methods:{
    login(){
      //这边做登录操作，然后登录成功后把个人信息暂存vuex
      this.$store.dispatch('addMyInfo' , { 'mobile' : this.mobile , 'password' : this.password });
      this.$store.dispatch('showLogin' , false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.login{
  width: 300px;
  height: 190px;
  position: fixed;
  z-index: 999;
  background-color: white;
  border-radius: 2px;
  padding-top:30px;
  left:50%;
  top:50%;
  margin-top: -85px;
  margin-left: -150px;
  text-align: center;
}

input{
  width: 200px;
  height:35px;
  border-radius: 2px;
  border:1px solid #8e8e8e;
  margin-top: 10px;
  padding-left: 5px;
}
button{
  width: 208px;
  height: 35px;
  background-color: #42b983;
  color:white;
  border-radius: 2px;
  border:0px;
  margin-top: 10px;
}
  .bg{
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: fixed;
    top:0;
    left: 0;
  }
</style>
