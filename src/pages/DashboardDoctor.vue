<template>
    <div class="login-div">
        <div class="container" style="padding-top: 20%;">
            <div class="row justify-content-center">
                <img src="/assets/images/logo_bd.png">
            </div>  
            
        </div>
        <div class="fixed-center">
          <div class="row justify-content-center" style="width: 75%;margin-bottom: 10%;">
            <input type="text" placeholder="Enter UniqueID" class="form-input" name="unique_id" v-model="unique_id" id="unique_id" required>
          </div>

          <div class="row justify-content-center mt-3" style="width: 75%;">
            <router-link :to="`/doctor/uniqueid/${unique_id}`" class="text-center" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 100%;">
              Submit
            </router-link>
          </div>

          <div class="row justify-content-center mt-3" style="width: 75%;">
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
        name: 'DashboardDoctor',
        data: function(){
            return {
              unique_id: ""
            }
        },
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
    .form-input {
        border: 0.7px solid #262C64;
        box-sizing: border-box;
        border-radius: 20px;
        margin-top: 5%;
        padding-left: 10px;
        background: white;
        height: 37px;
        width: 100%;
   }

    ::-webkit-input-placeholder {
        margin-left: 5%;
        color: black;
        text-align: center;
    }

    :-moz-placeholder { /* Firefox 18- */
        color: black;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
        color: black;
    }

    :-ms-input-placeholder {
        color: black;
    }

</style>
