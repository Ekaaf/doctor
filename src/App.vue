<template>
  <div id="app">
  	<Header v-if="this.$route.path!='/' && this.$route.path!='/bp/dashboard' && this.$route.path!='/login' && this.$route.path!='/sp/dashboard'"></Header>
    <router-view></router-view>  
    <Footer v-if="this.$route.path!='/' && this.$route.path!='/user/dashboard' && this.$route.path!='/login'"></Footer>
    <img src="/assets/images/loading.gif" class="img-waiting">
  </div>
</template>

<script>

import Header  from "./components/Header.vue";
import Footer  from "./components/Footer.vue";
import Mixin  from "./mixin.js";
window.axios = require('axios');
export default {
  	name: 'app',
  	mixins: [Mixin],
  	data: function(){
        return {
        }
    },
	components:{
	    Header, Footer
	},
	created(){
  }
}
</script>

<style>
@import '../public/assets/css/style.css';
</style>
