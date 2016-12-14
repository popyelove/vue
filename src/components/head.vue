<template>
   <div class="header">
       <div class="header-con">
           <img src="../assets/logo.png">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/list">博爱</router-link></li>
                <li><router-link to="/">下载</router-link></li>
            </ul>
        </div>
   </div>
</template>
<style>
.header{
height:119px;
border-bottom: 1px solid #ddd;
overflow: hidden;
background: #fff;
margin:0px auto;
line-height:119px;
}
.header-con ul {
margin:0px;
padding:0px;
float:right;
}
.header-con ul li
{
    height:82px;
    width:100px;
    line-height:82px;
}
.header-con ul li a
{
    font-size:18px;
    color:#9b9b9b;
}
.header-con ul li a:hover
{
 color:#666;
}
.header-con{
width:960px;
margin:0px auto;
}
.header-con img{
margin-top:15px;
}
</style>
<script>
    export default{
        data(){
            return{
                title:'这里是头部'
            }
        },
        components:{
        }
    }
</script>
