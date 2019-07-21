//import Echo from "laravel-echo";

Echo.join('chat')
    .here(users => {
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
