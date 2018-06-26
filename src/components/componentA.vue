<template>
<div><!--所有内容需要写在同一个div中-->
<p>{{msg}}</p>
<p>{{fromFather}}</p><!--fromFather是在父组件赋值可以在子组件直接使用-->
<button v-on:click="clickMe">open mouse</button>
</div>
</template>

<script>
export default {
  data(){
 return{
  msg:'this is a hello'
 }
},
props:['fromFather'],//父组件直接向 子组件传数据
methods:{
  clickMe(){
   //console.log(this.fromFather);//fromFather是在父组件赋值可以在子组件直接使用
   this.$emit('child-tell-me-something',this.msg)//子组件点击open mouse组件会触发方法，并且把msg消息传递给父组件
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

