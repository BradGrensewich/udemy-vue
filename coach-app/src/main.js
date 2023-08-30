import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue'

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseCard', BaseCard)
	.component('BaseButton', BaseButton)
	.component('BaseBadge', BaseBadge)
	.component('BaseSpinner', BaseSpinner)
	.component('BaseDialog', BaseDialog)

app.mount('#app');
