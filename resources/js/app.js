require('./bootstrap');
window.Vue = require('vue');

import store from './store/store'



// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('chat', require('./components/chat/Chat').default);
Vue.component('users', require('./components/chat/Users').default);
Vue.component('messages', require('./components/chat/Messages').default);
Vue.component('message', require('./components/chat/Message').default);
//Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue').default);




const app = new Vue({
    store,
    el: '#app',
});
