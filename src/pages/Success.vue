<template>
    <div class="body">
        <div class="container">
            <div class="row justify-content-center align-items-center" style="margin-top: 20%;">
                <p>Patient has been <br> updated Successfully!</p>
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="circle-tick"> 
                    <i class="fa fa-check fa-3x" style="color: white;position:absolute;top:22%;right:25%;" aria-hidden="true"></i>
                </div>
            </div>

            <div class="row justify-content-center align-items-center" style="margin-top: 5%;">
                <router-link :to="`${userRoute}`">
                <button style="width:100%;font-size:13px;background-color:#262C64;border:none;border-radius: 2rem;padding:10px;" type="button" class="btn btn-primary btn-block">Back To Dashboard</button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        name: 'Success',
        mixins: [Mixin],
        data: function(){
            return {
                accessToken: "",
                userRoute: ""
            }
        },
        mounted(){
            var accessToken = JSON.parse(this.getAccesstoken())
            this.userRoute = "/doctor/dashboard";
        },
    }
</script>

<style>
  
</style>
