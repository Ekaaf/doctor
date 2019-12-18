<template>
    <header class="site-header">
          <div class="row no-gutters pt-3 pb-3" >
            <div class="col-1 p-0 pl-2">
              <router-link :to="`${userRoute}`">
                <img src="../../public/assets/images/back.png" alt="User Photo">
              </router-link>
            </div>
            <div class="col-9 p-0 font-weight-bold pl-3" style="color: white;">
              {{headerText}}
            </div>
            <div class="col-2 pr-2" style="text-align:right;">
              <i class="fas fa-sign-out-alt fa-lg" style="color:white;" @click="logout();"></i>
            </div>
          </div>
    </header>
</template>

<script>
  import Mixin  from "../mixin.js";
  import { authHeader } from '../auth';
    export default {
        name: 'Header',
        mixins: [Mixin],
        data: function() {
            return {
                headerText: "",
                userRoute : ""
            }
        },
        created(){
          if(this.$router.currentRoute.path=="/user/patient-information"){
            this.headerText = "Patient Information Log";
          }
          else if(this.$router.currentRoute.path=="/bp/add-patient" || this.$router.currentRoute.path=="/sp/add-doctor"){
            this.headerText = "Please Fill out the informations";
          }
          var accessToken = JSON.parse(this.getAccesstoken())
          this.userRoute = "/doctor/dashboard";
          // if(accessToken){
          //   this.user = accessToken.user
          //   if(this.user.type==1){
          //     this.user.type="Admin"
          //   }
          //   else if(this.user.type==2){
          //     this.user.type="BDO"
          //   }
          //   else{
          //     this.user.type="BDS"
          //   }
          //   if(this.user.image){
          //     this.image = 'http://'+document.domain+'/admin/'+this.user.image;
          //     this.image = 'http://npab.net/admin/'+this.user.image;
          //   }
          //   else{
          //     this.image = "/assets/images/user.png"
          //   }
          // }
          
          // console.log(this.image)
        },
        methods: {
          logout(){
            var vm = this;
            axios({ 
                    headers: authHeader(),
                    url: this.getApiUrl()+"logout",
                    method: "post"
            }).then(function (response) {
                localStorage.clear()
                vm.$router.push('/') 
            }).catch(function (error) {
                vm.$router.push('/') 
            });
          }
        },
    }
</script>

<style>
  
</style>
