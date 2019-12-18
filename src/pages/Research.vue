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
               <!--  <div class="col-9" style="font-size: 10px;line-height: 12px;color: rgba(15, 14, 153, 0.5);">
                    <u>All the informations of starred field are mendatory</u>
                </div> -->
            </div>
            <div class="row justify-content-center align-items-center" style="text-align: center;">
                This feature will be available soon.
            </div>
        </div>

    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    import { authHeader } from '../auth';
    export default {
        name: 'Research',
        data: function(){
            return {
            	
            }
        },
        mixins: [Mixin],
        methods: {
        	
        },
        mounted(){
        }

    }
</script>

<style scoped>
    
  
</style>