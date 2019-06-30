<template>
    <div>
        #messages
        <scale-loader 
            :loading="loading" 
            >
        </scale-loader>

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
        ScaleLoader
    }

}
</script>