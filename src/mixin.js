import { authHeader } from './auth';
export default {
    data() {
        return {
            headerText : ""
        }
    },
    methods: {

        logout(){
            var vm = this;
            axios({ 
                    headers: authHeader(),
                    url: this.getApiUrl()+"logout",
                    method: "post"
            }).then(function (response) {
                localStorage.clear()
                vm.$router.push('/') 
            }).catch(function (error) {
                vm.$router.push('/') 
            });
        },
       
        getApiUrl(){
            // return 'https://'+document.domain+'/uniliver_laravel/api/auth/'
            // return 'http://'+"npab.net"+'/smile_laravel/api/auth/'
            return 'http://localhost/smile_laravel/api/auth/'
            // if(document.domain=='localhost'){
            //     return 'http://'+document.domain+'/uniliver_laravel/api/auth/'
            // }
            // else{
            //     return 'http://npab.net/uniliver_laravel/api/auth/'
            // }
            
        },
        getNames() {
            return axios({
                // headers: authHeader(),
                url: this.getApiUrl()+"getDivisions",
                method: "GET",
                
            })
            .then( (response) => {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    return response.data;
                }
            })
        },
        getDivisions(id){
            let data;
            var query ={};
            if(id){
                query.id = id;
            }
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getDivisions",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    return response.data;
                }
            })
        },

        getZones(id){
            let data;
            var query ={};
            if(id){
                query.id = id;
            }
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getZones",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    return response.data;
                }
            })
        },


        getOptions(){
            let data;
            var query ={};
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getOptions",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    return response.data;
                }
            })
        },

        getDoctors(){
            let data;
            var query ={};
            query.zone_id = this.zone_id;
            query.territorry_id = this.territorry_id; 
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getDoctors",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object') {
                    return response.data;
                }
            })
        },

        getTerritorries(id){
            let data;
            var query ={};
            if(id){
                query.id = id;
            }
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getTerritorries",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    // console.log(response.data)
                    return response.data;
                }
            })
        },

        getTowns(id){
            let data;
            var query ={};
            if(id){
                query.id = id;
            }
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getTowns",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    // console.log(response.data)
                    return response.data;
                }
            })
        },


        getStores(zone_id,territorry_id,town_id){
            let data;
            var query ={};
            if(zone_id){
                query.zone_id = zone_id;
            }
            if(territorry_id){
                query.territorry_id = territorry_id;
            }
            if(town_id){
                query.town_id = town_id;
            }
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getStores",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    console.log(response.data)
                    return response.data;
                }
            })
        },

        getAccesstoken(){
            return localStorage.getItem('accessToken')
        },

        getBdos(){
            let data;
            var query ={};
            // if(id){
            //     query.id = id;
            // }
            return axios({
                headers: authHeader(),
                url: this.getApiUrl()+"getBdos",
                method: "GET",
                params: query,
            }).then(function (response) {
                if( response.status == 200 && typeof(response.data) == 'object' ) {
                    // console.log(response.data)
                    return response.data;
                }
            })
        },

        
        showCaptured() {
            var camera = $("#capture_image").val();
            if(camera){
                var reader = new FileReader();
                reader.readAsDataURL($('#capture_image').prop('files')[0]);
                reader.onload = function () {
                    var uploadedImage = new Image();
                    uploadedImage.onload = function() {
                    };
                    $("#previewImage").attr("src",reader.result)
                    uploadedImage.src = reader.result; 
                };
                this.captured =1
            }
            else{
                this.captured = ""
                $("#previewImage").attr("src","")
            }
        },

        changeImage(){
            this.captured = "";
        },

        getCurrentpostion(){
            if(navigator.geolocation) {
               var self = this;
               navigator.geolocation.getCurrentPosition(function(position){
                self.currentPosition = position.coords;
              })
            }
        }
    
    },
    mounted(){

    }
}