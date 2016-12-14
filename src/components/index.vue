<template>
<div>
    <div class="banner"></div>
    <div class="company-list">
        <div class="company-head">
            <div class="company-head-left"><i></i>公司转让</div>
            <div class="company-head-right">
                <a href="/queryCompanyList.htm?cityid=77">深圳</a>
            </div>
        </div>
        <div class="company-con-list">
            <router-link :to="{path:'detail',query: {id:1292720}}">
                <div class="company" v-for="company in companys">

                        <div class="company-name">{{company.company_name}}</div>
                        <div class="zzbh">
                            执照编号：{{company.company_number}}
                            <div class="jgxm">
                                <span class="price">{{company.company_price}}&nbsp;万</span>
                                <span class="name">{{company.company_author}}</span>
                            </div>
                            <div class="jgxm">
                                <span class="address">{{company.company_address}}</span>
                                <span class="date">{{company.date}}</span>
                            </div>
                        </div>
                        <div class="company-price">
                            <span>一口价:</span>
                            <span class="company-price-num">10000元</span>
                        </div>
                    <div class="introduction">{{company.intro}}</div>
                </div>
            </router-link>
                <!--<div class="company"></div>-->
                <!--<div class="company"></div>-->
                <!--<div class="company"></div>-->
                <!--<div class="company"></div>-->
                <!--<div class="company"></div>-->
                <!--<div class="company"></div>-->
                <!--<div class="company"></div>-->
        </div>
    </div>
</div>
</template>
<style>
.banner{
height:470px;
min-width:960px;
background:url('../assets/banner.jpg') center center no-repeat;
}
.company-list{
width:1202px;
margin:0px auto;
}
.company-head {
    margin: auto;
    border-bottom: 2px solid #00457c;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    margin-top:50px;
}
.company-head-left {
    float: left;
    font-size: 18px;
    color: #333;
}
.company-head-left i{
    border-left: 3px solid #00457c;
    padding-left: 15px;
}
.company-head-right{
float:right;
}
.company-head-right a{
    margin-left: 15px;
    border: 1px dashed #ddd;
    background: #fff;
    padding: 3px 30px;
    border-radius: 50px;
    color:#5a5a5c;
}
.company-con-list{
    height:800px;
}
.company{
width:260px;
height:260px;
border-radius:15px;
float:left;
margin: 11px 15px;
border: 1px solid #ddd;
background: #fff;
box-shadow: 0 0 3px rgba(0,0,0,.1);
}
.company-name{
    font-size: 16px;
    color: #333;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.company .zzbh{
    margin: 0px auto;
    width:230px;
    height:124px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding:15px;
    text-align:center;
    font-size: 14px;
    color: #5a5a5c;
}
.company .zzbh .jgxm{
    margin:20px 0px;
    padding-top:15px;
}
.company .zzbh .jgxm span.price{
background:url('../assets/img/zczb.png') left center no-repeat
}
.company .zzbh .jgxm span.name{
background:url('../assets/img/frdb.png') left center no-repeat
}
.company .zzbh .jgxm span.address{
background:url('../assets/img/zcd.png') left center no-repeat
}
.company .zzbh .jgxm span.date{
background:url('../assets/img/zcrq.png') left center no-repeat
}
.company .zzbh .jgxm span{
    width:90px;
    overflow: hidden;
    float: left;
    padding: 5px;
    padding-left: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.company-price{
 line-height:40px;
 text-align:center;
 color: #5a5a5c;
}
.company-price span{
 margin-left:15px;
 font-size: 14px;
}
.company-price-num{
color:red;
}
.company .introduction{
opacity:0;
transform: translateY(100%);
transition: transform 0.4s, opacity 0.1s 0.3s;

width: 240px;
height:100px;
background: rgba(0,0,0,0.5);
padding: 10px;
color: #fff;
line-height: 20px;
margin-top:-235px;
border-bottom-left-radius: 5%;
border-bottom-right-radius: 5%;
}
.company:hover .introduction {
opacity: 1;
-webkit-transform: translateY(0px);
-moz-transform: translateY(0px);
-ms-transform: translateY(0px);
transform: translateY(100px);
-webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
-moz-transition: -moz-transform 0.4s, opacity 0.1s;
transition: transform 0.4s, opacity 0.1s;
}
</style>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '这是首页',
      companys:[],
      radio:1
    }
  },
  components:{
  },
  mounted: function() {
    this.$http.get('./company.json', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

        this.companys = response.body.list
        // this.articles = response.data["subjects"] 也可以
        console.log(this.companys)
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>
