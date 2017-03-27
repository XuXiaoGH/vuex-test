<template>
    <div>

    </div>
</template>

<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        computed: {
          mobile: function () {
            return this.$store.state.product.msg;
          }
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>

<style>
  body{
    background-color:#ff0000;
  }
</style>
