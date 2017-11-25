<template>
    <div class="alert " role="alert">
        <h3>Are you ready?</h3>
        <button class="btn btn-success"
        @click="$emit('onStart')"
        
        > Start </button>
    </div>
</template>

<script>
    export default {
        methods: {
            // alert(){
            //     alert(1);
            // }
        }
    }
</script>

<style scoped>
    .alert {
        text-align: center;
        margin: 20px;
        background-color: #f4c542;
    }
</style>