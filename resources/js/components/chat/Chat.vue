<template>
    <div>
        <messages></messages>
        <div class="form-group">
            <textarea v-model="body" class="form-control" placeholder="Sua Mensagem"></textarea>
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
        sendMessage (){
            this.$store.dispatch('storeMessage', {body: this.body})
        }
    }
}
</script>