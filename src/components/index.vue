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
                <div class="company">
                    <router-link :to="{path:'detail',query: {id:1292720}}">
                        <div class="company-name">北京瑞阳安科技术有限公司</div>
                        <div class="zzbh">
                            执照编号：110108010513649
                            <div class="jgxm">
                                <span class="price">50&nbsp;万</span>
                                <span class="name">李超</span>
                            </div>
                        </div>

                    </router-link>
                </div>
                <div class="company"></div>
                <div class="company"></div>
                <div class="company"></div>
                <div class="company"></div>
                <div class="company"></div>
                <div class="company"></div>
                <div class="company"></div>
        </div>
    </div>
</div>
</template>
<style>
.banner{
height:470px;
min-width:960px;
background:url('http://www.gszr.net/images/banner.jpg') center center no-repeat;
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
}
.company .zzbh .jgxm span.price{
background:url('../assets/img/zczb.png') left center no-repeat
}
.company .zzbh .jgxm span.name{
background:url('../assets/img/frdb.png') left center no-repeat
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
</style>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '这是首页',
      articles:[]
    }
  },
  components:{
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=20', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
            console.log(response.data.subjects)
        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>
