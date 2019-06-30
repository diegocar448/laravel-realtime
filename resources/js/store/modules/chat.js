import Axios from "axios";

export default{
    
    state:{
        messages:{},
        users:{}
    },
    mutations:{

    },
    actions:{
        storeMessage(context, params){
            return axios.post('chat/message', params)
                        .then(response => console.log(response))
                        .catch(() => console.log('error'))
        }
    },
    getters:{
        
    }
}