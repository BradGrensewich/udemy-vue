import { compile, createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

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

router.beforeEach(function(to, from, next) {
    if (to.name === 'team-members') {
        next()
    } else {
        next({name: 'team-members', params: { teamid: 't2'}})
    }
});

const app = createApp(App);
app.use(router);

app.mount('#app');
