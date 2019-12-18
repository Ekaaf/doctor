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
                        <input type="date" placeholder="Choose a Date" class="form-control cus-form-input" name="date" v-model="date" id="date" onchange="this.className=(this.value!=''?'form-control cus-form-input has-value':'')">
                    </div>


                    <div class="form-group">
                            <!-- <select class="form-control cus-form-input" name="dcp_devision" v-model="division_id" >
                                <option value="" selected>DCP Devision*</option>
                                <option v-for="division in divisionList" :value="division.id">{{division.name}}</option>
                            </select> -->
                           
                    </div>
                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="dcp_zone" v-model="zone_id" @change="getTerritorriesFromMixin(zone_id),getTownsFromMixin(zone_id)" required>
                            <option value="">DCP Zone*</option>
                            <option v-for="zone in zoneList" :value="zone.id">{{zone.name}}</option>
                        </select>
                    </div>
                    <!-- <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="dcp_territory" v-model="territorry_id" @change="getTownsFromMixin(territorry_id),getStoresFromMixin()">
                            <option value="" selected>DCP Territorry*</option>
                            <option v-for="t in territorryList" :value="t.id">{{t.name}}</option>
                        </select>
                    </div> -->

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="dcp_territory" v-model="territorry_id" >
                            <option value="" selected>DCP Territorry*</option>
                            <option v-for="t in territorryList" :value="t.id">{{t.name}}</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="town_id" v-model="town_id" @change="getStoresFromMixin()">
                            <option value="" selected>UBL Town*</option>
                            <option v-for="town in townList" :value="town.id">{{town.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="store_id" v-model="store_id">
                            <option value="" selected>Store Name*</option>
                            <option v-for="store in storeList" :value="store.id">{{store.store_name}}</option>
                        </select>
                    </div>

                   <!--  <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Drug store code(Optional)" name="store_code" v-model="store_code">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Drug Store Name*" name="store_name" v-model="store_name">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Drug Store Address*" name="plot_no" v-model="plot_no">
                    </div> -->
                    <!-- <div class="form-group">
                        <label style="margin-left: 4%;">Drug Store Address</label>
                        <div class="row">
                            <input type="text" class="col-5 form-control cus-form-input-double-1" placeholder="House/Plot No*" name="plot_no" v-model="plot_no">
                            <input type="text" class="col-5 form-control cus-form-input-double-2" placeholder="Flat No/Floor*" name="floor_no" v-model="floor_no"> 
                            <input type="text" class="col-5 form-control cus-form-input-double-1" placeholder="Road No(Optional)" name="road_no" v-model="road_no">
                            <input type="text" class="col-5 form-control cus-form-input-double-2" placeholder="Sector/Block(Optional)" name="block_no" v-model="block_no">
                            <input type="text" class="col-5 form-control cus-form-input-double-1" placeholder="Police Station" name="police_station" v-model="police_station">
                            <input type="text" class="col-5 form-control cus-form-input-double-2" placeholder="Post Ofice" name="postoffice" v-model="postoffice">
                            <input type="text" class="col-5 form-control cus-form-input-double-1" placeholder="Zip Code" name="zip_code" v-model="zip_code">
                            <input type="text" class="col-5 form-control cus-form-input-double-2" placeholder="District" name="district" v-model="district">
                            <input type="text" class="col-5 form-control cus-form-input-double-1" placeholder="Division" name="division" v-model="division">
                        </div>
                    </div> -->
                    
                    <!-- <div class="form-group">
                        <select class="form-control cus-form-input" v-model="oral_care">
                            <option value="" selected>Oral Care</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div> -->

                    <div class="form-group px-3">
                        <label class="w-100" for="">Oral Care</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="oral_care" name="oral_care">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="oral_care" name="oral_care">No
                            </label>
                        </div>
                    </div>


                    <div class="form-group px-3">
                        <label class="w-100" for="">Within Coverage</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="within_coverage" name="within_coverage">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="within_coverage" name="within_coverage">No
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Remarks on coverage gap" name="remarks_coverage_gap" v-model="remarks_coverage_gap">
                    </div>


                    <div class="form-group px-3">
                        <label class="w-100" for="">Oral Care Availiability</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="oral_care_availability" name="oral_care_availability">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="oral_care_availability" name="oral_care_availability">No
                            </label>
                        </div>
                    </div>
                   

                    
                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Remarks on Availiability gap" name="remarks_availability_gap" v-model="remarks_availability_gap">
                    </div>


                    <div class="form-group px-3">
                        <label class="w-100" for="">Sensitive Expert - Professional</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="sensetive_expert_professional" name="sensetive_expert_professional">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="sensetive_expert_professional" name="sensetive_expert_professional">No
                            </label>
                        </div>
                    </div>

                    
                    <div class="form-group px-3">
                        <label class="w-100" for="">Sensitive Expert - Gum Care</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="sensetive_expert_gumcare" name="sensetive_expert_gumcare">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="sensetive_expert_gumcare" name="sensetive_expert_gumcare">No
                            </label>
                        </div>
                    </div>

                    
                    <div class="form-group px-3">
                        <label class="w-100" for="">Sensitive Expert - Fresh</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="sensetive_expert_fresh" name="sensetive_expert_fresh">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="sensetive_expert_fresh" name="sensetive_expert_fresh">No
                            </label>
                        </div>
                    </div>

                    
                    <div class="form-group px-3">
                        <label class="w-100" for="">Pepsodent - Germi-Check</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="pepsodant" name="pepsodant">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="pepsodant" name="pepsodant">No
                            </label>
                        </div>
                    </div>

                    
                    <div class="form-group px-3">
                        <label class="w-100" for="">Mediplus</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="mediplus" name="mediplus">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="mediplus" name="mediplus">No
                            </label>
                        </div>
                    </div>

              
                    <div class="form-group px-3">
                        <label class="w-100" for="">Dentosafe</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="dentosafe" name="dentosafe">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="dentosafe" name="dentosafe">No
                            </label>
                        </div>
                    </div>


                    <div class="form-group px-3">
                        <label class="w-100" for="">Sensodyne</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="sensodyne" name="sensodyne">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="sensodyne" name="sensodyne">No
                            </label>
                        </div>
                    </div>

              
                    <div class="form-group px-3">
                        <label class="w-100" for="">Biodent</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="biodent" name="biodent">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="biodent" name="biodent">No
                            </label>
                        </div>
                    </div>

                    
                    <div class="form-group px-3">
                        <label class="w-100" for="">Apsol Oral Paste</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="apsol_oral_paste" name="apsol_oral_paste">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="apsol_oral_paste" name="apsol_oral_paste">No
                            </label>
                        </div>
                    </div>

                   
                    <div class="form-group px-3">
                        <label class="w-100" for="">Twin Lotus</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="twin_lotus" name="twin_lotus">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="twin_lotus" name="twin_lotus">No
                            </label>
                        </div>
                    </div>

                 
                    <div class="form-group px-3">
                        <label class="w-100" for="">Medicadent</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="medicatent" name="medicatent">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="medicatent" name="medicatent">No
                            </label>
                        </div>
                    </div>

                    
                    <div class="form-group px-3">
                        <label class="w-100" for="">Sensiv Plus</label>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="yes" v-model="sensive_plus" name="sensive_plus">Yes
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-bind:value="no" v-model="sensive_plus" name="sensive_plus">No
                            </label>
                        </div>
                    </div>


                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Other" name="other" v-model="other">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Remarks" name="remarks" v-model="remarks">
                    </div>

                    

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
                    <!-- <div class="form-group">
                        <label for="capture_image" class="custom-file-upload">
                            <img src="../../public/assets/images/camera.png" alt="User Photo" style="width: 100%;">
                        </label>
                         <input type="file" accept="image/*" capture="camera" id="capture_image" name="capture_image" v-on:change="showCaptured();">
                        
                        <div class="row" v-if="captured">
                            Captured
                        </div>
                    </div> -->

                    <div  class="form-group cus-form-input">
                        <button type="button" @click="saveAudit()" style="width: 99%;" class="btn btn-primary active">Submit</button>
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
        name: 'Audit',
        data: function(){
            return {
            	date : '',
            	division_id : '',
                zone_id : '',
            	territorry_id : '',
                town_id : '',
            	store_code : '',
            	store_name : '',
            	plot_no : '',
            	floor_no : '',
            	road_no : '',
            	block_no : '',
            	police_station : '',
            	postoffice : '',
            	zip_code : '',
            	district : '',
            	division : '',
            	mobilenumber : '',
            	bdo_name : '',
            	bdo_number : '',
            	bds_name : '',
            	bds_number : '',
                divisionList : [],
                zoneList : [],
                territorryList : [],
                townList : [],
                oral_care : "",
                within_coverage : "",
                oral_care_availability : "",
                remarks_coverage_gap : "",
                remarks_availability_gap : "",
                sensetive_expert_professional : "",
                sensetive_expert_gumcare : "",
                sensetive_expert_fresh : "",
                pepsodant : "",
                mediplus : "",
                dentosafe : "",
                sensodyne : "",
                biodent : "",
                apsol_oral_paste : "",
                twin_lotus : "",
                medicatent : "",
                sensive_plus : "",
                other : "",
                remarks : "",
                zoneList : [],
                territorryList : [],
                townList : [],
                store_id: '',
                storeList : [],
                captured : '',
                capture_image : '',
                yes : 1,
                no : 0,
                error: '',
                location : []

            }
        },
        mixins: [Mixin],
        methods: {
        	saveAudit(){
                // alert(this.currentPosition)
                // if(!this.currentPosition){
                //     alert("Please restart the app with location permission.")
                //     return false;
                // }

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
                if(this.zone_id==''){
                    alert("Please select zone.");
                    return false;
                }
                if(this.territorry_id==''){
                    alert("Please select territorry.");
                    return false;
                }
                if(this.town_id==''){
                    alert("Please select town.");
                    return false;
                }
                if(this.store_id==''){
                    alert("Please select store.");
                    return false;
                }

                // if(!$("#capture_image").val()){
                //     alert("Please Upload Image");
                //     return false;
                // }
                var vm = this;
                var form_data = new FormData();
                form_data.append("date", this.date);
        		form_data.append("store_id", this.store_id);
        		form_data.append("oral_care", this.oral_care);
        		form_data.append("within_coverage", this.within_coverage);
        		form_data.append("oral_care_availability", this.oral_care_availability);
                form_data.append("remarks_coverage_gap", this.remarks_coverage_gap);
        		form_data.append("remarks_availability_gap", this.remarks_availability_gap);
        		form_data.append("sensetive_expert_professional", this.sensetive_expert_professional);
        		form_data.append("sensetive_expert_gumcare", this.sensetive_expert_gumcare);
        		form_data.append("sensetive_expert_fresh", this.sensetive_expert_fresh);
        		form_data.append("pepsodant", this.pepsodant);
        		form_data.append("mediplus", this.mediplus);
        		form_data.append("dentosafe", this.dentosafe);
        		form_data.append("sensodyne", this.sensodyne);
        		form_data.append("biodent", this.biodent);
        		form_data.append("apsol_oral_paste", this.apsol_oral_paste);
        		form_data.append("twin_lotus", this.twin_lotus);
        		form_data.append("medicatent", this.medicatent);
        		form_data.append("sensive_plus", this.sensive_plus);
                form_data.append("other", this.other);
                form_data.append("remarks", this.remarks);
                form_data.append("photo_link", $("#capture_image").prop("files")[0]);
                form_data.append("currentPosition", this.location);
                // return false;
        		var query = {};

        		axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"saveAudit",
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

            getZonesFromMixin(division_id){
                this.zone_id = ""
                this.getZones(division_id).then(data => { this.zoneList = data;});
            },

            getTerritorriesFromMixin(zone_id){
                this.territorry_id = ""
                this.getTerritorries(zone_id).then(data => { this.territorryList = data;});
            },

            getTownsFromMixin(territorry_id){
                this.town_id = ""
                this.getTowns(territorry_id).then(data => { this.townList = data;});
            },

            getStoresFromMixin(){
                this.store_id = ""
                var zone_id = this.zone_id;
                var territorry_id = this.territorry_id;
                var town_id = this.town_id
                this.getStores(zone_id,territorry_id,town_id).then(data => { this.storeList = data;});
            },

        },
        mounted(){
            this.getCurrentpostion();
            this.getZones().then(data => { this.zoneList = data});
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

    /*input[type="date"]:before {
        content: attr(placeholder) !important;
        margin-right: 0.5em;
    }
    input[type="date"]:focus:before,
    input[type="date"]:valid:before {
        content: "";
    }*/

    input[type="date"]:not(.has-value):before{
        content: attr(placeholder);
    }
  
</style>