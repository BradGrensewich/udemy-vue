import { compile, createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/teams' },
		{
			path: '/teams',
			component: TeamsList,
			children: [
				{ path: '/teams/:teamid', component: TeamMembers, props: true },
			],
		},
		{ path: '/users', component: UsersList },
		,
		{ path: '/:notFound(.*)', component: NotFound },
	],
	linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact'
});

const app = createApp(App);
app.use(router);

app.mount('#app');
