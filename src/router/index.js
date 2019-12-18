import Vue from 'vue'
import Router from 'vue-router'


/*
* @ all pages
*
*/
import Login from '@/pages/Login'
import DashboardDoctor from '@/pages/DashboardDoctor'
import PatientInformation from '@/pages/PatientInformation'
import PatientList from '@/pages/PatientList'


import AddStore from '@/pages/AddStore'
import Audit from '@/pages/Audit'
import Research from '@/pages/Research'
import DailyVisit from '@/pages/DailyVisit'
import Success from '@/pages/Success'
import guard from '../guard';


Vue.use(Router)
const router =  new Router({
	routes: [
        {
            path: '/',
			name: 'login',
			component: Login,
			// meta: { title: "Uniliver" }
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        },

        {
            path: '/doctor/dashboard',
			name: 'DashboardDoctor',
			component: DashboardDoctor,
            beforeEnter: guard
        },

        {
            path: '/doctor/uniqueid/:unique_id',
            name: 'PatientList',
            component: PatientList,
            beforeEnter: guard
        },

        {
            path: '/doctor/patient/:patient_id',
            name: 'PatientInformation',
            component: PatientInformation,
            beforeEnter: guard
        },

        {
            path: '/success',
            name: 'Success',
            component: Success,
            beforeEnter: guard
        }
       
	],
    mode:"history"
});

// ** set meta in router. then title is added from here
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })




window.axios.interceptors.request.use(function (config) {
    $(".img-waiting").show();
    $("body").css("opacity","0.4")

    return config;
}, function (error) {
    $(".img-waiting").show();
    $("body").css("opacity","0.4")
    return Promise.reject(error);
});

window.axios.interceptors.response.use(function (response) {
    $(".img-waiting").hide();
    $("body").css("opacity","1")
    return response;
}, function (error) {
    $(".img-waiting").hide();
    $("body").css("opacity","1")
    return Promise.reject(error);
});


export default router;