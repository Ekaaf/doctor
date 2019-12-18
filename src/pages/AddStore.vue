<template>
    <div class="body">
        <div class="container">
            <div class="row align-items-center pl-4" style="background-color: #F7F7F7;margin-top: 2%; padding: 5px 0;">
                <div class="col-2 p-0">
                    <router-link to="/user/dashboard">
                        <img src="../../public/assets/images/back.png" alt="User Photo">
                        <!-- <button class="circle-small" style="position: relative;">
                            <i style="position:absolute;top: 27%;left: 32%;color: white;" class="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>    --> 
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
                        <select type="text" class="form-control cus-form-input" name="dcp_zone" v-model="zone_id"
                        @change="getTerritorriesFromMixin(zone_id),getTownsFromMixin(zone_id)">
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
                        <select type="text" class="form-control cus-form-input" name="dcp_territory" v-model="territorry_id">
                            <option value="" selected>DCP Territorry*</option>
                            <option v-for="t in territorryList" :value="t.id">{{t.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select type="text" class="form-control cus-form-input" name="town_id" v-model="town_id">
                            <option value="" selected>UBL Town*</option>
                            <option v-for="town in townList" :value="town.id">{{town.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Drug store code(Optional)" name="store_code" v-model="store_code">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Drug Store Name*" name="store_name" v-model="store_name">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="Drug Store Address*" name="plot_no" v-model="plot_no">
                    </div>
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
                    
                    <div class="form-group">
                        <input type="number" class="form-control cus-form-input" placeholder="Drug Store Mobile No" name="mobilenumber" v-model="mobilenumber">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="BDO/Name" name="bdo_name" v-model="bdo_name">
                    </div>
                    <!-- <div class="form-group">
                        <input type="number" class="form-control cus-form-input" placeholder="BDO Number" name="bdo_number" v-model="bdo_number">
                    </div> -->
                    <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="BDS Name" name="bds_name" v-model="bds_name">
                    </div>
                    <!-- <div class="form-group">
                        <input type="number" class="form-control cus-form-input" placeholder="BDS Number" name="bds_number" v-model="bds_number">
                    </div> -->
                    <!-- <div class="form-group">
                        <input type="text" class="form-control cus-form-input" placeholder="GPS Co-ordinates" name="gps_coordinates">
                    </div>
                    <div class="checkbox cus-form-input">
                        <label><input type="checkbox" name="curr_location"> &nbsp; Use Current Location</label>
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
                        <button type="button" @click="saveStore()" style="width: 99%;" class="btn btn-primary active">Submit</button>
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
        name: 'AddStore',
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
            	mobilenumber : '',
            	bdo_name : '',
            	bds_name : '',
            	divisionList : [],
                zoneList : [],
                territorryList : [],
                townList : [],
                captured : '',
                capture_image : '',
                error : '',
                location : []
            }
        },
        mixins: [Mixin],
        methods: {
        	saveStore(){
                
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
                    alert("Please select Territorry.");
                    return false;
                }
                if(this.town_id==''){
                    alert("Please select town.");
                    return false;
                }
                if(this.store_name==''){
                    alert("Please insert store name.");
                    return false;
                }
                if(this.plot_no==''){
                    alert("Please insert store address.");
                    return false;
                }

                if(!$("#capture_image").val()){
                    alert("Please Upload Image");
                    return false;
                }

                var vm = this;
                var form_data = new FormData();
        		form_data.append("date", this.date);
        		form_data.append("division_id", this.division_id);
        		form_data.append("zone_id", this.zone_id);
        		form_data.append("territorry_id", this.territorry_id);
                form_data.append("town_id", this.town_id);
        		form_data.append("store_code", this.store_code);
                form_data.append("store_name", this.store_name);
        		form_data.append("plot_no", this.plot_no);
        		
                form_data.append("mobilenumber", this.mobilenumber);
        		form_data.append("bdo_name", this.bdo_name);
        		form_data.append("bds_name", this.bds_name);
                form_data.append("photo_link", $("#capture_image").prop("files")[0]);
                form_data.append("currentPosition", this.location);
                console.log(form_data);
                // return false;
        		var query = {};

        		axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"saveStore",
                        method: "post",
                        params: query,
                        data: form_data,
                }).then(function (response) {
                    if(response.data.code==200){
                        vm.$router.push('/user/success') 
                    }
                    else{
                        vm.error = response.data.message;
                    }
                    
                }).catch(function (error) {
                    console.log(error)
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

            getTownsFromMixin(zone_id){
                console.log(zone_id)
                this.town_id = ""
                this.getTowns(zone_id).then(data => { this.townList = data;});
            },

        },
        mounted(){
            this.getCurrentpostion();
            this.getZones().then(data => { this.zoneList = data});

        },

        watch: {
            // whenever question changes, this function will run

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
    }
*/

    input[type="date"]:not(.has-value):before{
        content: attr(placeholder);
    }
    
</style>
