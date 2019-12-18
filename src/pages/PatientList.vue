<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="row justify-content-center" style="width: 65%;">
                User Found ON {{unique_id}}
            </div>
            <div class="row justify-content-center" style="width: 100%; border-top: 2px solid #262C64;">
            </div>
            <div class="row justify-content-center mt-3" style="width: 65%;"  v-for="patient in patients">
                <router-link :to="`/doctor/patient/${patient.id}`" class="text-center" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 100%;">
                  {{patient.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    import { authHeader } from '../auth';
    export default {
        name: 'PatientList',
        data: function(){
            return {
            	patients: [],
                unique_id: ''
            }
        },
        mixins: [Mixin],
        methods: {
            getPatientsByUniqueID(){
                var vm = this;
                var query ={};
                query.unique_id = this.$route.params.unique_id
                axios({ 
                        headers: authHeader(),
                        url: this.getApiUrl()+"getPatientsByUniqueID",
                        method: "get",
                        params: query
                }).then(function (response) {
                    vm.patients = response.data;
                    console.log(vm.patients)
                }).catch(function (error) {
                });
            }

        },
        mounted(){
            this.unique_id = this.$route.params.unique_id
            this.getPatientsByUniqueID();
        },

        watch: {
            // whenever question changes, this function will run
        }

    }
</script>

<style scoped>
   .form-input {
        border: 0.7px solid #262C64;
        box-sizing: border-box;
        border-radius: 20px;
        width: 85%;
        margin-top: 5%;
        padding-left: 10px;
        background: white;
        height: 37px;
   }

    ::-webkit-input-placeholder {
        margin-left: 5%;
        color: black;
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
