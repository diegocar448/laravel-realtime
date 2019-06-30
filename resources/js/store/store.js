import Vue from 'vue'
import Vuex from 'vuex'
import chat from './modules/chat'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        chat
    }

})

export default store