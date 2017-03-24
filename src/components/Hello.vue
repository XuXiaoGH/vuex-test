<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p @click="changeText">点我切换文案</p>

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
    }
  },
  methods:{
    changeText(){
      this.$store.dispatch('changeText' , '哈哈哈哈');
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
</style>
