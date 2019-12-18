<template>
    <div class="container">
        <div class="row p-3" style="overflow:auto;">
            <table class="" id="doctorTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Unique ID</th>
                    <th>Name</th>
                    <th>BMDC Reg No</th>
                    <th>Gender</th>
                    <th>Chamber Name</th>
                    <th>Phone</th>
                    <th>Chamber Address</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                  </tr> -->
                </tbody>
              </table>
          </div>
    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    import { authHeader } from '../auth';
    export default {
        name: 'DoctorInformation',
        data: function(){
            return {
            	unique_id: "",
                name: "",
                gender: "",
                age: "",
                phone_number: "",
                assigned_chamber: "",
            }
        },
        mixins: [Mixin],
        methods: {
        	getDoctors(){
                $.ajaxSetup({
                  headers: authHeader()
                });
                var table= $('#doctorTable').DataTable( {
                    "processing": true,
                    "searching": false,
                    "lengthMenu": false,
                    "paging": false,
                    "pageLength": 10,
                    // dom: 'Blfrtip',
                    // buttons: [
                    //     'csv', 'excel', 'pdf', 'print'
                    // ],
                    // "language": {
                    //     "processing": "Hang on. Waiting for response... <img src=\"loader.png\" />" //add a loading image,simply putting <img src="loader.gif" /> tag.
                    // },
                    "serverSide": true,
                    "destroy" :true,
                    "ajax": {   
                                url: this.getApiUrl()+"getDoctors",
                                "data": function ( d ) {
                                    // d.from_date = $('#from_date').val();
                                    // d.to_date = $('#to_date').val();
                                    // d.store_code = $('#store_code').val();
                                    // d.store_name = $('#store_name').val();
                                    // d.plot_no = $('#plot_no').val();
                                    // d.mobilenumber = $('#mobilenumber').val();
                                    // d.town_id = $('#town_id').val();
                                    // d.zone_id = $('#zone_id').val();
                                    // d.territorry_id = $('#territorry_id').val();
                                    // d.oral_care = $('#oral_care').val();

                                    // d.within_coverage = $('#within_coverage').val();
                                    // d.oral_care_availability = $('#oral_care_availability').val();
                                    // d.sensetive_expert_professional = $('#sensetive_expert_professional').val();
                                    // d.sensetive_expert_gumcare = $('#sensetive_expert_gumcare').val();
                                    // d.sensetive_expert_fresh = $('#sensetive_expert_fresh').val();
                                    // d.pepsodant = $('#pepsodant').val();
                                    // d.mediplus = $('#mediplus').val();
                                    
                                },
                            },
                    "columns": [
                        { "data": "0" },
                        { "data": "unique_id" },
                        { "data": "name" },
                        { "data": "bmdc" },
                        { "data": "gender" },
                        { "data": "chamber_name" },
                        { "data": "phone" },
                        { "data": "chamber_address" },
                        { "data": "created_at" },
                        
                    ]


              });


            }


        },
        mounted(){
            this.getDoctors();
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
        width: 80%;
        margin-top: 5%;
        padding-left: 10px;
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
<style type="text/css">
    table, tr, th, td, thead, tbody {
      border: 1px solid #262C64;
      color: #262C64;
    }
    td, th{
        padding: 10px;
    }
    tr{
        border: 1px solid #262C64;
        color: #262C64;
    }
</style>