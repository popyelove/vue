<template>
    <div class="detail">
        <div class="movie">
            <div class="movie-left">
                <img :src=movie_pic />
            </div>
            <div class="movie-right">
                <h1>标题：{{movie.title}}</h1>
                <ul>
                    <label for="简介">简介：</label><li>{{movie.summary}}</li>
                    <label for="简介">简介：</label><li>{{movie.summary}}</li>
                </ul>
                <div class="author">作者：
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
.movie{
margin:0px auto;
height:430px;
width:960px;
margin-top:50px;
}
.movie-left{
width:300px;
height:430px;
float:left;
}
.movie-right{
height:430px;
width:660px;
float:right;
}
.movie-right h1{
font-size:18px;
margin-top:20px;
margin-left:300px;
}
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                movie:[],
                movie_pic:''
            }
        },
        components:{

        },
        mounted: function() {
        var movie_id=this.$route.query.id;
        this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+movie_id, {}, {
            headers: {

            },
            emulateJSON: true
        }).then(function(response) {
          // 这里是处理正确的回调

            this.movie = response.data;
            this.movie_pic=this.movie.images.large;
            console.log(this.movie);

        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
  }
    }
</script>
