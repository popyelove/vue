<template>
    <div>
            <TaglistComponent/>
    </div>
</template>
<style>

</style>
<script>
import TaglistComponent from './list.vue'
    export default{
        data(){
            return{
                content:'这里是内容页'
            }
        },
        components:{
        TaglistComponent
        }
    }
</script>
