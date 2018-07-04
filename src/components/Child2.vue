<template>
 <div class="child-2">
 <p>in child2:</p>
 <p>props: {{pChild2}}</p>
 <p>$attrs: {{$attrs}}</p>
 <hr>
 </div>
</template>
<script>
 export default {
 props: ['pChild2'],//继承父组件的pChild2属性
 data () {
 return {};
 },
 inheritAttrs: true,
 mounted () {
 this.$emit('test2');
 }
 };
</script>