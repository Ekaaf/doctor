<template>
    <div class="body">
        <div class="container">
            <div class="row align-items-center pl-4" style="background-color: #F7F7F7;margin-top: 2%; padding: 5px 0;">
                <div class="col-2 p-0">
                    <router-link to="/user/dashboard">
                        <button class="circle-small" style="position: relative;">
                            <i style="position:absolute;top: 27%;left: 32%;color: white;" class="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>    
                    </router-link>
                </div>
                                
                <!-- <u>All the informations of starred field are mendatory</u> -->
                <div class="col-9" style="font-size: 10px;line-height: 12px;color: rgba(15, 14, 153, 0.5);">
                    <u>All the informations of starred field are mendatory</u>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-10">

                	<div class="form-group">
                        <input type="email" class="form-control cus-form-input" placeholder="Email Address*" name="email" v-model="email">
                    </div>

                    <div class="form-group">
                        <input type="date" placeholder="Choose a Date" class="form-control cus-form-input" name="date" v-model="date" id="date" onchange="this.className=(this.value!=''?'form-control cus-form-input has-value':'')">
                    </div>

                    <!-- <div class="form-group">
                        <input type="date" placeholder="Choose a Date"  class="form-control cus-form-input" name="date" v-model="date" required="">
                    </div> -->

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="visit_status*" v-model="visit_status">
                            <option value="" selected>Visit Status *</option>
                            <option  v-for="option in options" v-if="option.type=='Visit Status (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="bdo_id" v-model="bdo_id">
                            <option value="" selected>Brand Detailing Officer Name*</option>
                            <option v-for="t in bdoList" :value="t.id">{{t.name}}</option>
                        </select>
                    </div>
                    

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="visit_type" v-model="visit_type">
                            <option value="" selected>Visit Type *</option>
                            <option  v-for="option in options" v-if="option.type=='Visit Type (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="visit_cycle" v-model="visit_cycle">
                            <option value="" selected>Visit Cycle *</option>
                            <option  v-for="option in options" v-if="option.type=='Visit Cycle (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="sample" v-model="sample">
                            <option value="" selected>Samples Given *</option>
                            <option  v-for="option in options" v-if="option.type=='Samples Given (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="special_comp" v-model="special_comp">
                            <option value="" selected>Special Compliment Given *</option>
                            <option  v-for="option in options" v-if="option.type=='Special Compliment Given (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <input type="text" placeholder="Sample Quantity"  class="form-control cus-form-input" name="sample_quantity" v-model="sample_quantity" required="">
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="dcp_zone" id="dcp_zone" v-model="zone_id" @change="getTerritorriesFromMixin(zone_id)" required>
                            <option value="">DCP Zone*</option>
                            <option v-for="zone in zoneList" :value="zone.id">{{zone.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="dcp_territory" v-model="territorry_id" @change="getDoctorsFromMixin()">
                            <option value="" selected>DCP Territorry*</option>
                            <option v-for="t in territorryList" :value="t.id">{{t.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <!-- <input type="text" placeholder="Dentist's Name"  class="form-control cus-form-input" name="dentist_name" v-model="dentist_name" required=""> -->
                        <select type="text" class="form-control cus-form-input" name="dentist_name" v-model="dentist_name" id="dentist_name">
                            <option value="" selected>Dentist's Name *</option>
                            <option  v-for="doctor in doctors" :value="doctor.id">{{doctor.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="dentist_grade" v-model="dentist_grade" :disabled='doctorDisable'>
                            <option value="" selected>Dentist's Grade *</option>
                            <option  v-for="option in options" v-if="option.type=='Dentist\'s Grade (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>

                    

                    <div class="form-group">
                        <input type="text" placeholder="Chamber/Institute, Name *"  class="form-control cus-form-input" name="chamber" v-model="chamber" :disabled='doctorDisable' required="">
                    </div>

                    <div class="form-group">
                        <input type="text" placeholder="Chamber/Institute, Address (House, Road, Block/Sector, Area) (If already given type - Given) *"  :disabled='doctorDisable'  class="form-control cus-form-input" name="chamber_address" v-model="chamber_address" required="">
                    </div>

                    

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="number_prescription" v-model="number_prescription">
                            <option value="" selected>Number of Prescriptions *</option>
                            <option  v-for="option in options" v-if="option.type=='Number of Prescriptions (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="product_benifit" v-model="product_benifit">
                            <option value="" selected>The Product benefits are convincing enough to recommend *</option>
                            <option  v-for="option in options" v-if="option.type=='The Product benefits are convincing enough to recommend (Daily Visit)'" :value="option.id">{{option.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="presentation" v-model="presentation">
                            <option value="" selected>The presentation made by the Pepsodent representative was useful and informative*</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <textarea placeholder="Please mention below (If any) your specific scientific query/suggestions/feedback from Patients or any observations you want to share *"  class="form-control cus-form-input" name="question" v-model="question" id="question" required="" style="height:105px;"> </textarea>
                    </div>

                   <!--  <div class="form-group">
                        <textarea placeholder="The presentation made by the Pepsodent representative was useful and informative*"  class="form-control cus-form-input" name="presentation" v-model="presentation" id="presentation" required="" style="height:105px;"> </textarea>
                    </div> -->

                    <!-- <div class="form-group">
                        <input type="text" placeholder="Feedback Form Photo Code *"  class="form-control cus-form-input" name="feedback_photocode" v-model="feedback_photocode" required="">
                    </div> -->


                    <div class="form-group" style="margin-left: 13px;">
                        <label for="capture_image" class="custom-file-upload" style="width: 99%;" v-if="!captured">
                            <img src="../../public/assets/images/camera.png" alt="User Photo" style="width: 100%;">
                        </label>
                         <input type="file" accept="image/*" capture="camera" id="capture_image" name="capture_image" v-on:change="showCaptured();">
                        
                        <div class="form-group" v-if="captured" style="max-width:60%;">
                            <img src="" id="previewImage">
                            <button class="btn btn-primary mt-2" type="button" v-on:click="changeImage();">Change</button>
                        </div>
                    </div>
                    {{error}}


                    <div  class="form-group cus-form-input">
                        <button type="button" @click="saveDailyvisit()" style="width: 99%;" class="btn btn-primary active">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    import { authHeader } from '../auth';
    export default {
        name: 'DailyVisit',
        data: function(){
            return {
            	email: '',
            	date: '',
            	visit_status: '',
            	bdo_id: '',
                bdoList: [],
            	visit_type: '',
            	visit_cycle: '',
            	sample: '',
            	special_comp: '',
            	sample_quantity: '',
            	dentist_name: '',
            	dentist_grade: '',
            	chamber: '',
            	chamber_address: '',
            	number_prescription: '',
            	product_benifit : '',
                presentation : '',
            	question : '',
            	// feedback_photocode: '',
            	capture_image: '',
                captured : '',
                error : '',
            	// remarks : '',
            	zoneList: [],
            	zone_id : '',
            	territorry_id : '',
            	territorryList : [],
                yes: '1',
                location: [],
                options: '',
                doctors: '',
                doctorDisable: false

            }
        },
        mixins: [Mixin],
        methods: {
        	
        	getZonesFromMixin(division_id){
                this.zone_id = ""
                this.getZones(division_id).then(data => { this.zoneList = data;});
            },

            getTerritorriesFromMixin(zone_id){
                this.territorry_id = ""
                this.doctors = ""
                this.getTerritorries(zone_id).then(data => { this.territorryList = data;});
            },

            getDoctorsFromMixin(){
                this.doctors = ""
                this.getDoctors().then(data => { this.doctors = data;});
            },

            getTownsFromMixin(territorry_id){
                this.town_id = ""
                this.getTowns(territorry_id).then(data => { this.townList = data;});
            },

            getBdoFromMixin(){
                this.getBdos().then(data => { this.bdoList = data;});
            },

            getDoctorInfo(){
                var vm = this;
                let data;
                var query ={};
                query.id = $("#dentist_name").val()
                vm.dentist_name = $("#dentist_name").val()
                return axios({
                    headers: authHeader(),
                    url: this.getApiUrl()+"getDoctorInfo",
                    method: "GET",
                    params: query,
                }).then(function (response) {
                    if( response.status == 200 && typeof(response.data) == 'object' ) {
                        var result = response.data
                        if(result.length>0){
                            vm.dentist_grade = result[0].dentist_grade
                            vm.chamber = result[0].chamber
                            vm.chamber_address = result[0].chamber_address
                            vm.doctorDisable = true
                        }
                        else{
                            vm.chamber = ''
                            vm.chamber_address = ''
                            vm.doctorDisable = false
                        }
                        
                    }
                })
            },

            saveDailyvisit(){
                var vm = this;
                if(this.dentist_name==""){
                    alert("Please insert dentist name.");
                    return false;
                }
                
                this.location[0] = this.currentPosition.latitude
                this.location[1] = this.currentPosition.longitude
                if(this.currentPosition==''){
                    alert("Please give location permission and restart app.");
                    return false;
                }
                if(this.date==''){
                    alert("Please select date.");
                    return false;
                }
                if(this.visit_status==''){
                    alert("Please select visit status.");
                    return false;
                }
                if(this.bdo_id==''){
                    alert("Please select brand detailing officer name.");
                    return false;
                }
                if(this.visit_type==''){
                    alert("Please select visit type.");
                    return false;
                }
                if(this.visit_cycle==''){
                    alert("Please select visit cycle.");
                    return false;
                }
                if(this.sample==''){
                    alert("Please select sample_quantity.");
                    return false;
                }
                if(this.special_comp==''){
                    alert("Please select special compliment.");
                    return false;
                }
                if(this.sample_quantity==''){
                    alert("Please select sample quantity.");
                    return false;
                }
                if(this.dentist_name==''){
                    alert("Please insert dentist name.");
                    return false;
                }
                if(this.dentist_grade==''){
                    alert("Please select dentist grade.");
                    return false;
                }
                if(this.chamber==''){
                    alert("Please insert chamber.");
                    return false;
                }
                if(this.chamber_address==''){
                    alert("Please insert chamber address.");
                    return false;
                }
                if(this.number_prescription==''){
                    alert("Please select number of prescriptions.");
                    return false;
                }
                if(this.product_benifit==''){
                    alert("Please select product benifit.");
                    return false;
                }
                if(this.presentation==''){
                    alert("Please give comments about presentation");
                    return false;
                }
                
                if(this.zone_id==''){
                    alert("Please select zone.");
                    return false;
                }
                if(this.territorry_id==''){
                    alert("Please select territorry.");
                    return false;
                }
                

                if(!$("#capture_image").val()){
                    alert("Please Upload Image");
                    return false;
                }

                var form_data = new FormData();
                form_data.append("email", this.email);
                form_data.append("date", this.date);
                form_data.append("visit_status", this.visit_status);
                form_data.append("bdo_id", this.bdo_id);
                form_data.append("visit_type", this.visit_type);
                form_data.append("visit_cycle", this.visit_cycle);
                form_data.append("sample", this.sample);
                form_data.append("special_comp", this.special_comp);
                form_data.append("sample_quantity", this.sample_quantity);
                form_data.append("dentist_name", this.dentist_name);
                form_data.append("dentist_grade", this.dentist_grade);
                form_data.append("chamber", this.chamber);
                form_data.append("chamber_address", this.chamber_address);
                form_data.append("number_prescription", this.number_prescription);
                form_data.append("product_benifit", this.product_benifit);
                form_data.append("presentation", this.presentation);
                form_data.append("question", this.question);
                // form_data.append("feedback_photocode", this.feedback_photocode);
                form_data.append("zone_id", this.zone_id);
                form_data.append("territorry_id", this.territorry_id);
                form_data.append("photo_link", $("#capture_image").prop("files")[0]);
                form_data.append("currentPosition", this.location);
                form_data.append("doctorDisable", vm.doctorDisable);

                console.log(form_data);
                // return false;
                var query = {};

                axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"saveDailyvisit",
                        method: "post",
                        params: query,
                        data: form_data,
                }).then(function (response) {
                    console.log(response)
                    vm.$router.push('/user/success') 
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },
        },
        mounted(){
            var vm = this
            $('#dentist_name').select2({
                tags: true
            })
            .trigger('change')
            .on('change', function () {
                vm.getDoctorInfo();
            });

        	this.getCurrentpostion();
            this.getBdos().then(data => { this.bdoList = data});
            this.getZones().then(data => { this.zoneList = data});
            this.getOptions().then(data => { this.options = data});
        }

    }
</script>


<style scoped>
    input[type="file"] {
        display: none;
    }
    .custom-capture_image {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }

    input[type="date"]:not(.has-value):before{
        content: attr(placeholder);
    }

</style>
