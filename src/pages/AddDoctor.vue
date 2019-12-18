<template>
    <div class="container">
        <form id="doctorForm" method="post" @submit="saveDoctor">
        <div class="row justify-content-center">
            <div class="row justify-content-center" id="uniqueIdDiv">
                <input type="text" placeholder="Enter Start Range" class="form-input" name="uniqueid[start_range][]" id="start_range" required style="width: 37%;">
                <input type="text" placeholder="Enter End Range" class="form-input" name="uniqueid[end_range][]"  id="end_range" required style="width: 37%;margin-left: 5%;">
            </div>
            <div class="alert alert-danger mt-3 m-0" role="alert" v-if="error" style="width: 80%;">
                {{error}}
            </div>
            <button class="text-center justify-content-left mt-3" type="button" style="background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 30%;" @click="addMore();">
                Add More
            </button>
            <input type="text" placeholder="Enter Name" class="form-input" name="name" v-model="name" id="name" required>
            <input type="number" placeholder="Enter BMDC Registration No." class="form-input" name="bmdc" v-model="bmdc" id="bmdc" required>
            <select class="form-input" name="gender" v-model="gender" id="gender" required>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input type="text" placeholder="Enter Chamber Name" class="form-input" name="chamber_name" v-model="chamber_name" id="chamber_name" required>
            <input type="number" placeholder="Enter Phone Number" class="form-input" name="phone" v-model="phone" id="phone" required>
            <input type="text" placeholder="Enter Chamber Address" class="form-input" name="chamber_address" v-model="chamber_address" id="chamber_address" required>
        </div>

        <div class="row justify-content-center mt-4">
            <button class="text-center" type="submit" style="padding: 10px;background-color: #262C64;border-radius: 2rem;border:none;color:white;width: 62%;" @click="saveDoctor();">
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
        name: 'AddDoctor',
        data: function(){
            return {
            	unique_id: [],
                name: "",
                bmdc: "",
                gender: "",
                chamber_name: "",
                phone: "",
                chamber_address: "",
                error: "",
                i: "1"
            }
        },
        mixins: [Mixin],
        methods: {
            addMore(){
                $("#uniqueIdDiv").append("<br>")
                $('#start_range').clone().prop("id", "start_range"+this.i).appendTo("#uniqueIdDiv");
                $("#start_range"+this.i).val("");
                $('#end_range').clone().prop("id", "end_range"+this.i).appendTo("#uniqueIdDiv");
                $("#end_range"+this.i).val("");
                this.i++;
            },
        	saveDoctor: function (e){
                e.preventDefault();
                axios.post(this.getApiUrl()+"saveDoctor", 
                $("#doctorForm").serialize(),
                { headers: authHeader()
                }).then(response => {this.$router.push('/success') })
                .catch(error => {this.error = error.response.data.error;console.log(this.error)}) ;
                // if(this.unique_id==''){
                //     alert("Please give Unique ID");
                //     return false;
                // }
                // if(this.name==''){
                //     alert("Please give Name");
                //     return false;
                // }
                // if(this.bmdc==''){
                //     alert("Please Enter BMDC Registration No");
                //     return false;
                // }
                // if(this.gender==''){
                //     alert("Please select your gender");
                //     return false;
                // }
                // if(this.chamber_name==''){
                //     alert("Please Enter chamber Name");
                //     return false;
                // }
                // if(this.phone==''){
                //     alert("Please enter mobile number");
                //     return false;
                // }
                // if(this.chamber_address==''){
                //     alert("Please enter chamber address");
                //     return false;
                // }
                // var vm = this;
                // var form_data = new FormData();
                // form_data.append("unique_id", this.unique_id);
                // form_data.append("name", this.name);
                // form_data.append("bmdc", this.bmdc);
                // form_data.append("gender", this.gender);
                // form_data.append("chamber_name", this.chamber_name);
                // form_data.append("phone", this.phone);
                // form_data.append("chamber_address", this.chamber_address);

                // var query = {};

                // axios({
                //         headers: authHeader(),
                //         url: this.getApiUrl()+"saveDoctor",
                //         method: "post",
                //         params: query,
                //         data: form_data,
                // }).then(function (response) {
                    
                //     vm.$router.push('/success') 
                    
                // }).catch(function (error) {
                //     vm.error = error.response.data.error;
                // });
            }

        },
        mounted(){
            this.headerText = "test";
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
    
</style>
