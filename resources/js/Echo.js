//import Echo from "laravel-echo";
import store from "./store/store";

Echo.join('chat')
    .here(users => {
        store.commit('LOAD_USERS', users)
        console.log('here')
        console.log(users) //todos usuarios que estao usando o chat
    })
    .joining(user => {
        console.log('joinig')
        console.log(user)        //quem acabou de entrar no chat e atualiza o join
    })      
    .leaving(user => {   //quem saiu do chat
        console.log('leaving')
        console.log(user)
    })            
