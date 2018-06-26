 <template>
<div id="app">
<h1 v-text="message"></h1>
<input v-model="newItem" @keyup.enter="addNew" placeholder="编写任务" class="edit">
<div class="list">
<div v-for="(item,index) in items"  class="unit"><!-- 添加的列表到div unit中 -->
<input type="checkbox" :checked="item.isFinished" @click="changeState(item)"><!-- 点击复选框切换样式 -->
<span :class='{finished:item.isFinished}'>{{item.label}}</span><!-- 显示列表输入内容 -->
<button @click="removeButton(index)" class="del">删除</button><!-- 删除按钮删除列表 -->
</div>
<p v-if="items.length===0" class="empty" >暂无任务</p>
<!-- 如果列表items长度为0（没有输入列表）显示暂无任务，否则不显示 -->
</div>
</div>
</template>

<script>
import Store from './store'//导入同级目录下的storage文件
// console.log(Store)
export default {
  name: '',
  data () {
    return {
      message:'this is a todolist',//文本值
      items:Store.fetch(),       // 查看localStorage中fetch方法，如果存在数据直接渲染，反之是个空数组  ,// 
      newItem:'',//同步的数据初始值
    }
  },
   watch: {                       // 监听列表items的变化 ,并且items作为参数传入函数handler中
        items: {  
        handler: function (items) {  
          Store.save(items)  
        },  
        deep: true  //深复制，items状态变化也跟着变化
      }  
    },  
 methods:{//点击事件的方法
  addNew(){
    this.items.push({
      label:this.newItem,
      isFinished:false,
      deleted:false
    })
   this.newItem=''
  },
  listenToMyBoy(msg){//子组件传递给父组件的消息是通过参数msg告诉父组件
  this.childs=msg;
  },
  changeState(item){
  item.isFinished=!item.isFinished;//把class属性反一下
 },
 removeButton(index){
this.items.splice(index,1);
 }
 }
}
</script>

<style>
.finished{
  text-decoration: underline;/*下划线*/
  text-decoration: line-through;/*删除线*/
  color:#ccc;
}
.edit{
  display: block;
  width: 20%;
  height: 35px;
  margin: 30px auto;
  box-sizing:border-box;
  padding-left: 4px;
  border-radius: 4px;
  border:1px solid #ccc;
  outline: 0;
  box-shadow: 0 0 5px #ccc;
}
.list{
  margin: 0 auto;
  width: 50%;
}
.unit{
  position: relative;
  padding:10px 0;
  border-bottom: 1px solid #efefef;

}
.unit:last-child{
  border-bottom: 0;
}
.del{
  background: red;
  text-decoration: none;
 position: absolute;
 right: 0;
 font-size:12px;
 border:0;
 outline: 0;
 padding: 2px 5px;
 border-radius: 5px;
 color: #fff;

}
.empty{
  font-size: 13px;
  color: #ccc;
  text-align: center;
  padding:10px 0;
}
</style>
