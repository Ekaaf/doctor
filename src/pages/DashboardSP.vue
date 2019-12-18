<template>
    <div class="login-div">
        <div class="container" style="padding-top: 20%;">
            <div class="row justify-content-center">
                <img src="/assets/images/logo_bd.png">
            </div>  
            
        </div>
        <div class="fixed-center">
          <div class="row justify-content-center" style="width: 65%;">
            <router-link to="/sp/add-doctor" class="text-center" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 100%;">
              New Doctor Information
            </router-link>
          </div>

          <div class="row justify-content-center mt-3" style="width: 65%;">
            <router-link to="/sp/doctor-information" class="text-center" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 100%;">
              Doctor Information Log
            </router-link>
          </div>

          <div class="row justify-content-center mt-3" style="width: 65%;">
            <button class="text-center" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 100%;" @click="logout();">
              Logout
            </button>
          </div>
        </div>
    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        name: 'DashboardSP',
        mixins: [Mixin]
    }
</script>

<style scoped>
    .login-div{
        display:flex;
        height:100%;
        /*padding-top: 20%;*/
    }

    .fixed-center {
      position: fixed;
      height: 100%;
      width: 100%;
      
      /* this is what centers your element in the fixed wrapper*/
      display: flex;
      flex-flow: column nowrap;
      justify-content: center; /* aligns on vertical for column */
      align-items: center; /* aligns on horizontal for column */
    }

</style>
