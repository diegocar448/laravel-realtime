//import Echo from "laravel-echo";
import store from "./store/store";
import { Store } from "vuex";

Echo.join('chat')
    .here(users => {
        store.commit('LOAD_USERS', users)
        console.log('here')
        console.log(users) //todos usuarios que estao usando o chat
    })
    .joining(user => {
        console.log('joinig')
        console.log(user)        //quem acabou de entrar no chat e atualiza o join

        store.commit('JOINING_USER', user)
    })      
    .leaving(user => {   //quem saiu do chat
        console.log('leaving')
        console.log(user)

        store.commit('LEAVING_USER', user)
    })    
    .listen('Chat.MessageCreated', e => {
        console.log(e.message)
        store.commit('ADD_MESSAGE', e.message)
    })        
