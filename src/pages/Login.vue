<template>
    <div class="login-div">
        <div class="container">
            <div class="row justify-content-center">
                <img src="/assets/images/logo_bd.png">
            </div>  
            <div class="row justify-content-center mt-5"> 
                    <div class="form-group text-center w-100">
                        <input type="text"   placeholder="User name" name="name" v-model="name">
                    </div>
                    <div class="form-group text-center w-100">
                        <input type="password" placeholder="Password" name="password" v-model="password">
                    </div>
            </div>
            
            <div class="alert alert-warning text-center" v-if="error">
              Username and Password do not match
            </div>
            <div class="row justify-content-center">
                <button style="width: 65%;background-color: #262C64;border-radius: 2rem;margin-top: 8%;border:none;" type="button" class="btn btn-primary btn-block" @click="login()">Login</button>
            </div>
            <div class="row justify-content-center mt-2" >
                <router-link to="/forget-password" style="color: #262C64;font-size: 10px;">
                    Forgot your password?
                </router-link>
            </div>
            <div class="row justify-content-center text-center" style="bottom: 5%;left: 0;right: 0;position: absolute;">
                <small style="color: #262C64;font-size: 11px;margin:0;width: 100%;line-height: 0.8;">By logging in you accept to our</small>
                <small style="color: red;font-size: 11px;margin:0">Terms & Conditions and Privacy Policy</small>
            </div>
        </div>
    </div>

</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        name: 'Audit',
        data: function(){
            return {
            	name : '',
                password : '',
                type : '',
                error : ''
            }
        },
        mixins: [Mixin],
        methods: {

            login(){

                var vm = this;
                vm.error = '';
                var request_data = {
                    "name": vm.name,
                    "password": vm.password,
                    "type": 4
                };

                axios({
                        url: this.getApiUrl()+"login",
                        method: "post",
                        data: request_data,
                }).then(function (response) {
                    console.log(response.data)
                    localStorage.setItem('accessToken',JSON.stringify(response.data))
                    vm.$router.push('/doctor/dashboard') 
                }).catch(function (error) {
                    vm.error = error
                });
            },

        },
        mounted(){var vm = this;
            $(document).on('keypress',function(e) {

                if(e.which == 13) {
                    vm.login();
                }
            });
        }

    }
</script>

<style scoped>
    input[type="text"]
    {
        border: 0;
        border-bottom: 1px solid #262C64;
        outline: 0;
        width: 65%;
    }

    input[type="password"]
    {
        border: 0;
        border-bottom: 1px solid #262C64;
        outline: 0;
        width: 65%;
    }

    ::-webkit-input-placeholder {
       /*text-align: center;*/
       color: #262C64;
    }

    :-moz-placeholder { /* Firefox 18- */
       /*text-align: center;  */
       color: #262C64;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
       /*text-align: center;  */
       color: #262C64;
    }

    :-ms-input-placeholder {  
       /*text-align: center; */
       color: #262C64;
    }
    input { 
        /*text-align: center; */
    }
    .login-div{
        display:flex;
        height:100%;
        padding-top: 20%;
    }
    select{
        background-color: #262C64;
        color: #fff;
        border-radius: 10px;
        font-size: 12px;
        line-height: 15px;
        padding: 5px;
    }

</style>