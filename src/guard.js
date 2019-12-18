export default function guard(to, from, next) {
  	const  accessToken  = JSON.parse(localStorage.getItem('accessToken'));
  	if (accessToken) {
		next();
	} else {
	    next('/login');
	}
}