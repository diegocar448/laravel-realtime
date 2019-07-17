<template>
    <div class="chat-message">
        <div class="chat-info">
            {{message.user.name}} {{message.user.created_at}}
        </div>
        <div class="chat-img">
            <img src="/imgs/no-image.png" :alt="message.user.name">
        </div>
        <div class="message">
            {{message.body}}
        </div>        
    </div>
</template>


<script>
export default {
    props:['message']
}
</script>


<style scoped>
    .chat-message{
        float:left;
        width:100%;
        margin:10px 0;
    }
    .chat-info{
        float:left;
        width:100%;     
    }
    .chat-img{
        float:left
    }
    .chat-img img{
        max-width: 60px;
        border-radius:100%;
        border: 1px solid #FFF;
    }
    .message{
        background: #FFF;
        float:left;
        padding:10px;
        border-radius:5px;
        color:black;
        position:relative;
        margin:10px 14px 0 8px;
    }
</style>
