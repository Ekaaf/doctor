<template>
    <div class="container">
        <div class="row justify-content-center">
            <input type="text" placeholder="Enter UniqueID" class="form-input" name="unique_id" v-model="unique_id" id="unique_id" readonly="">
            <input type="text" placeholder="Enter Name" class="form-input" name="name" v-model="name" id="name" required>
            <select class="form-input" name="gender" v-model="gender" id="gender" required>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input type="number" placeholder="Enter Chamber Name" class="form-input" name="age" v-model="age" id="age" readonly>
            <input type="number" placeholder="Enter Phone Number" class="form-input" name="phone" v-model="phone" id="phone" readonly>
            <!-- <input type="text" placeholder="Enter Chamber Address" class="form-input" name="treatment" v-model="treatment" id="treatment" readonly> -->
            <span class="mt-3">Treatment Given</span>


            
        </div>

        <div class="row justify-content-center" style="width: 85%;margin-left: 7.5%">
            <div class="switch" v-for="treatment in treatmentList">
              <input type="checkbox" v-model="givenTreatment" :value="treatment.id" />
              <label>{{treatment.treatment_name}}</label>
            </div>
        </div>
        <div class="row justify-content-center mt-4">
            <button class="text-center" type="submit" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 62%;" @click="saveTreatment();">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    import { authHeader } from '../auth';
    export default {
        name: 'AddDoctor',
        data: function(){
            return {
                patient_id:"",
                patientInfo: [],
                unique_id: "",
                name: "",
                gender: "",
                age: "",
                phone: "",
                treatmentList: [],
                givenTreatment: []
            }
        },
        mixins: [Mixin],
        methods: {
            getPatientInfo(){
                var vm = this;
                var query ={};
                query.patient_id = this.$route.params.patient_id
                axios({ 
                        headers: authHeader(),
                        url: this.getApiUrl()+"getPatientInfo",
                        method: "get",
                        params: query
                }).then(function (response) {
                    vm.patientInfo = response.data;
                    vm.unique_id = vm.patientInfo[0].unique_id
                    vm.name = vm.patientInfo[0].name
                    vm.gender = vm.patientInfo[0].gender
                    vm.age = vm.patientInfo[0].age
                    vm.phone = vm.patientInfo[0].phone
                    vm.treatment = vm.patientInfo[0].treatment
                }).catch(function (error) {
                });
            },

            getTreatmentList(){
                var vm = this;
                var query ={};
                query.patient_id = this.$route.params.patient_id
                axios({ 
                        headers: authHeader(),
                        url: this.getApiUrl()+"getTreatmentList",
                        method: "get",
                        params: query
                }).then(function (response) {
                    vm.treatmentList = response.data;
                    
                }).catch(function (error) {
                });
            },

            saveTreatment(){
                var vm = this;
                if(this.givenTreatment.length==0){
                    alert("Please select treatment.")
                    return false;
                }
                var form_data = new FormData();
                form_data.append("patient_id", this.$route.params.patient_id);
                form_data.append("givenTreatment", this.givenTreatment);
                axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"saveTreatment",
                        method: "post",
                        data: form_data,
                }).then(function (response) {
                    console.log(response)
                    if(response.data.code==200){
                        vm.$router.push('/success') 
                    }
                    else{
                        vm.error = response.data.message;
                    }
                    
                }).catch(function (error) {
                    console.log(error)
                    vm.error = error
                });
            }

        },
        mounted(){
            this.patient_id = this.$route.params.patient_id
            this.getPatientInfo();
            this.getTreatmentList();
        },

        watch: {
            // whenever question changes, this function will run
            unique_id: function() {
                this.error = "";
            },

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
    
    .switch {
      width: 80px;
      height: 40px;
      position: relative;
      margin:2%;
    }

    .switch input {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 100;
      opacity: 0;
    }

    .switch label {
      display: block;
      text-align: center;
      color: white;
      /*line-height: 2.5em;  */
      padding: 2px;
      width: 100%;
      height: 100%;
      background-color: #262C64;
      border-radius: 10px;
      margin: 2%;
      white-space: pre-wrap;
      line-height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }



    .switch input:checked ~ label {
      background-color: #2B2D44;;
      border-right: 3px solid #2B2D44;
      border-bottom: 3px solid #2B2D44;
      color: white;
    }


</style>
