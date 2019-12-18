<template>
    <div class="container">
        <form id="patientForm" method="post" @submit="savePatient">
        <div class="row justify-content-center">
            <input type="number" placeholder="Unique ID" class="form-input" name="unique_id" id="unique_id" @blur="checkUniqueID" required>
            <input type="text" placeholder="Assigned Chamber" class="form-input" name="assigned_chamber" id="assigned_chamber">

            <div class="row justify-content-center" v-for="index in 5" :key="index">
            <!-- <li v-for="index in 10" :key="index"> -->
                <h4 class="mt-3"><u>Patient-{{index}}</u></h4>
                <input type="text" placeholder="Name" class="form-input" name="patient[name][]">
                <input type="number" placeholder="Age" class="form-input" name="patient[age][]">
                <select class="form-input" name="patient[gender][]">
                    <option value="" selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select class="form-input"  name="patient[marrital_status][]">
                    <option value="" selected="">Marrital Status</option>
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                </select>
                <input type="number" placeholder="Phone Number" class="form-input" name="patient[phone][]"  >
                <textarea class="form-input" placeholder="Address" name="patient[address][]">
                    
                </textarea>
            </div>
            <div class="row pt-2" style="color: #262C64;width: 85%;">
                <label class="containerCheckbox">I agree to the <span style="color: red">terms</span> and <span style="color: red">conditions</span>
                  <input type="checkbox" :checked="checked">
                  <span class="checkmark"></span>
                </label>
            </div>
            <div class="row justify-content-center pt-2" style="color: #262C64;width: 85%;">
                I do acknowledge that “Senstivity Month Celebration” is a very good initiative from Pepsodent and I am participating in this initiative of Pepsodent with the Smile Card. I will be agreed to take my dental treatment from the enlisted dentist of my Smile Card by my own initiative. Pepsodent will have the right to use the images and videos associated with the program for their marketing as well as on the social media platforms. I Consent to the use of the information given above by Unilever Bangladesh Limited for re-marketing purposes.
            </div>
        </div>
        <div class="row justify-content-center mt-4">
            <button class="text-center" type="submit" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 62%;">
                Submit
            </button>
        </div>
        </form>
    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    import { authHeader } from '../auth';
    export default {
        name: 'AddStore',
        data: function(){
            return {
            	unique_id: "",
                name: "",
                gender: "",
                age: "",
                phone: "",
                assigned_chamber: "",
                error: "",
                checked: false
            }
        },
        mixins: [Mixin],
        methods: {
        	savePatient: function (e){
                e.preventDefault();
                if(this.checked == false){
                    alert("Please agree to terms and conditions.");
                    return false;
                }
                axios.post(this.getApiUrl()+"savePatient", 
                $("#patientForm").serialize(),
                { headers: authHeader()
                }).then(response => {
                    $("#assigned_chamber").val(response.data.chamber_name)
                    this.$router.push('/success');
                })
                .catch(error => {this.error = error.response.data.error;console.log(this.error)}) ;
                
            },
            checkUniqueID(){
                var query ={};
                var vm = this;
                query.unique_id = $("#unique_id").val();
                axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"checkUniqueID",
                        method: "get",
                        params: query
                }).then(function (response) {
                    // console.log(response.data.data.chamber_name)
                    $("#assigned_chamber").val(response.data.data.chamber_name);
                    vm.error = ""
                    
                }).catch(function (error) {
                    vm.error = error.response.data.error;
                });
            }


        },
        mounted(){
            this.headerText = "test";
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

    .containerCheckbox {
      display: block;
      position: relative;
      padding-left: 30px;
      cursor: pointer;
      font-size: 15px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    .containerCheckbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #ccc;
    }

    /* On mouse-over, add a grey background color */
    .containerCheckbox:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .containerCheckbox input:checked ~ .checkmark {
      background-color: #262C64;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .containerCheckbox input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .containerCheckbox .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    
</style>
