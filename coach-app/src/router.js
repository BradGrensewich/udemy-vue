import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: 'coaches', path: '/coaches', component: CoachList },
		{
			name: 'coach',
			path: '/coaches/:id',
			component: CoachDetails,
			children: [
				{ name: 'contact', path: '/contact', component: ContactCouch },
			],
		},
		{ name: 'register', path: '/register', component: CoachRegistration },

		{ name: 'requests', path: '/requests', component: RequestsRecieved },
		{ name: 'home', path: '/', redirect: { name: 'coaches' } },
		{
			name: 'notFound',
			path: '/:notFound(.*)',
			redirect: { name: 'coaches' },
		},
	],
});

export default router;
