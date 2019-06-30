<template>
    <div class="messages">
        #messages
        <scale-loader 
            :loading="loading" 
            >
        </scale-loader>

        <message 
            v-for="message in messages" 
            :key="message.id"
            :message="message">            
        </message>
    </div>
</template>


<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader'

export default {
    created(){
        this.loadMessage()
    },
    data(){
        return {
            loading:false,
        }
    },
    methods:{
        loadMessage(){
            this.loading = true
            this.$store.dispatch('loadMessages')
                        .finally(() => this.loading = false)
        }   
    },
    components:{
        ScaleLoader,        
    },
    computed:{
        messages(){
            return this.$store.state.chat.messages
        }
    }

}
</script>