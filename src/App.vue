<template>
  <div>
    <HeadComponent/>
    <FootComponent/>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
import HeadComponent from './components/head.vue'

import FootComponent from './components/foot.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: '这是首页'
    }
  },
  components:{
  HeadComponent,
  FootComponent,
  }
}
</script>

<style>
@import './assets/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
