import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import CoachList from './pages/coaches/CoachList.vue'
import CoachDetails from './pages/coaches/CoachDetails.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import RequestsRecieved from './pages/requests/RequestsRecieved.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: 'coaches', path: '/coaches', component: CoachList },
		{
			name: 'coach',
			path: '/coaches/:id',
			component: CoachDetails,
			children: [
				{ name: 'contact', path: '/contact', component: ContactCoach },
			],
		},
		{ name: 'register', path: '/register', component: CoachRegistration },

		{ name: 'requests', path: '/requests', component: RequestsRecieved },
		{ name: 'home', path: '/', redirect: { name: 'coaches' } },
		{
			name: 'notFound',
			path: '/:notFound(.*)',
			component: NotFound,
		},
	],
});

export default router;
