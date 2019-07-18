<template>
    <div>
        <messages></messages>
        <textarea @keydown="keydownMessage" v-model="body" class="" placeholder="Sua Mensagem"></textarea>
        
        <button :disabled="loading" @click.prevent="sendMessage" class="btn btn-success">
            <pulse-loader 
                :loading="loading" 
                :color="'#FFF'" 
                :size="'8px'"
                class="float-left">
            </pulse-loader>
            Enviar
        </button>
    </div>
</template>


<script>

import PulseLoader from 'vue-spinner/src/PulseLoader'



export default {
    data(){
        return{
            body:'',
            loading: false,
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
            if(!this.body || this.body.trim() == '' || this.loading){

            }else{
                this.loading = true

                this.$store.dispatch('storeMessage', {body: this.body})
                            .then(() => this.body = '')
                            .finally(() => this.loading = false)
            }

            
        }
    },
    components:{
        PulseLoader

    }
}
</script>


<style scoped>

.float-left{
    float:left;

}

textarea{
    width:700px;
    border-radius:5px;
    border: 1px solid #CCC;
    padding:6px;
    max-width:700px;
    float:left;
}

button{
    margin:12px 6px;
}
    
</style>