<template>
    <div>
        #messages
    </div>
</template>


<script>
export default {
    created(){
        this.loadMessage()
    },
    data(){
        return {
            
        }
    },
    methods:{
        loadMessage(){
            this.$store.dispatch('loadMessages')
        }
    }

}
</script>