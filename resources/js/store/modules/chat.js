import Axios from "axios";

export default{
    
    state:{
        messages:[],
        users:[]
    },
    mutations:{
        LOAD_MESSAGES(state, messages){
            state.messages = messages
        },
        ADD_MESSAGE(state, message){
            //o push para adicionar no final
            state.messages.push(message)
        },
        LOAD_USERS(state, users){
            state.users = users
        }
    },
    actions:{
        loadMessages(context){
            return axios.get('/chat/messages')
                    .then(response => context.commit('LOAD_MESSAGES', response.data))
        },
        storeMessage(context, params){
            return axios.post('chat/message', params)
                        .then(response => context.commit("ADD_MESSAGE", response.data))
                        .catch(() => console.log('error'))
        }
    },
    getters:{
        messages(state){
            return _.orderBy(state.messages, 'id', 'asc' )
        }
    }
}