<template>
    <div>
        <messages></messages>
        <div class="form-group">
            <textarea @keydown="keydownMessage" v-model="body" class="form-control" placeholder="Sua Mensagem"></textarea>
        </div>
        
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
    float:left
}
    
</style>