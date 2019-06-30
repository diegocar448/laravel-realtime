import Axios from "axios";

export default{
    
    state:{
        messages:[],
        users:[]
    },
    mutations:{
        LOAD_MESSAGES(state, messages){
            state.messages = messages
        }
    },
    actions:{
        loadMessages(context){
            return axios.get('/chat/messages')
                    .then(response => context.commit('LOAD_MESSAGES', response.data))
        },
        storeMessage(context, params){
            return axios.post('chat/message', params)
                        .then(response => console.log(response))
                        .catch(() => console.log('error'))
        }
    },
    getters:{
        
    }
}