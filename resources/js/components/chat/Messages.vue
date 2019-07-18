<template>
    <!-- ref do vuejs para scroll rolling down -->
    <div class="messages scroll" ref="messages">
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
import { setTimeout } from 'timers';

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
                        .finally(() =>{
                            this.loading = false    
                            
                            this.scrollMessages()
                        })
        },
        scrollMessages(){
            setTimeout(() => {
                //scroll rolling down da propria altura
                //this.$refs.messages.scrollTo(0, this.$refs.messages.scrollHeight)
                this.$refs.messages.scroll({
                    top: this.$refs.messages.scrollHeight,
                    let: 0,
                    behavior: 'smooth'
                })
            }, 100)
            
        }   
    },
    components:{
        ScaleLoader,        
    },
    //adicionar um watch para escutar as mudanças das propriedades
    watch:{
        messages(){
            this.scrollMessages()
        }
    },
    computed:{
        messages(){
            //return this.$store.state.chat.messages
            return this.$store.getters.messages
        }
    }

}
</script>


<style scoped>
.messages{
    height:400px;
    max-height: 400px;
    overflow-x:hidden;
    overflow-y: auto;
}

.scroll::-webkit-scrollbal-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

.scroll::-webkit-scrollbar{
    width:12px;
    background-color:#F5F5F5;
}

.scroll::-webkit-scrollbar-thumb{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    background-color:#D62929;
}

/* .scroll{
    padding: 12px 10px;
} */
</style>
