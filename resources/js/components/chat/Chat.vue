<template>
    <div>
        <messages></messages>
        <div class="form-group">
            <textarea @keydown="keydownMessage" v-model="body" class="form-control" placeholder="Sua Mensagem"></textarea>
        </div>
        
        <button @click.prevent="sendMessage" class="btn btn-success">Enviar</button>
    </div>
</template>


<script>



export default {
    data(){
        return{
            body:''
        }
        
    },
    methods:{
        keydownMessage(e)
        {
            if(e.keyCode === 13 && !e.shiftKey)
            {
                e.preventDefault()

                this.sendMessage()
            }
        },
        sendMessage (){
            this.$store.dispatch('storeMessage', {body: this.body})
                        .then(() => this.body = '')
        }
    }
}
</script>