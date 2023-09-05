import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import CoachList from './pages/coaches/CoachList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';
import coaches from './store/modules/coaches';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: 'coaches', path: '/coaches', component: CoachList },
		{
			name: 'coachDetails',
			path: '/coaches/:id',
			props: true,
			component: CoachDetails,
			children: [
				{ name: 'contact', path: 'contact', component: ContactCoach },
			],
		},
		{
			name: 'register',
			path: '/register',
			component: CoachRegistration,
			meta: { requiresAuth: true },
		},

		{
			name: 'requests',
			path: '/requests',
			component: RequestsRecieved,
			meta: { requiresAuth: true },
		},
		{
			name: 'auth',
			path: '/auth',
			component: UserAuth,
			meta: { requiresUnauth: true },
		},
		{ name: 'home', path: '/', redirect: { name: 'coaches' } },
		{
			name: 'notFound',
			path: '/:notFound(.*)',
			component: NotFound,
		},
	],
});

router.beforeEach(function (to) {
	if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
		return { name: 'auth' };
	} else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
		return { name: 'coaches' };
	} else {
		return true;
	}
});

export default router;
