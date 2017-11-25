
<template>
    <div class="alert" :class="'alert-' + type" role="alert">
        <h2>{{ text }}</h2>
        <button class="btn btn-primary"
            @click="$emit('onNext')"
        >Continue</button>
    </div>
</template>

<script>
    export default {
        props: ['type', 'text']
    }

</script>

<style>
    .alert {

        display: flex;
        flex-direction: column;
    }
    .alert h3 {
        text-align: center;
        margin-bottom: 20px;
    }
    .alert-danger{
        background-color: #f85032;
        color: white;
    }
    .buttons {
        display: flex;
        justify-content: space-around;
    }


</style>