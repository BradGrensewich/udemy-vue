import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './pages/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/teams' },
		{
			name: 'teams',
			path: '/teams',
			components: {
				default: TeamsList,
				footer: TeamsFooter,
			},
			children: [
				{
					name: 'team-members',
					path: '/teams/:teamid',
					component: TeamMembers,
					props: true,
				},
			],
		},
		{
			name: 'users',
			path: '/users',
			components: {
				default: UsersList,
				footer: UsersFooter,
			},
			beforeEnter(to, from) {
				console.log('Called beforeEnter in Users route');
				return true;
			},
			meta: { needsAuth: true },
		},
		,
		{ path: '/:notFound(.*)', component: NotFound },
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { left: 0, top: 0 };
		}
	},
	linkActiveClass: 'active',
	linkExactActiveClass: 'active-exact',
});

router.beforeEach(function (to, from) {
	if (to.meta.needsAuth) {
		return confirm('This route needs authentication. Do you have it?');
	}
});
router.afterEach(function (to, from) {
	console.log('router calls afterEach()');
});

export default router;
