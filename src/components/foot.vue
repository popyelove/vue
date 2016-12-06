<template>
    <div>
        <div class="footer">
                <p style="color:white;">无法困死了都分开萨克拉对方圣诞节疯狂拉升减到{{foot}}</p>

        </div>
    </div>
</template>
<style>
.footer{
   min-width:960px;
   position: fixed;  bottom: 0; /* 关键 */
   left:0; /* IE下一定要记得 */
   height: 60px;         /* footer的高度一定要是固定值*/
   background:#666;
   width:100%;
}
</style>
<script>

    export default{
        data(){
            return{
                foot:'这里是尾部'
            }
        },
        components:{

        }
    }
</script>
