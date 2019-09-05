<template>
    <div class="headers">
        <div class="left" @click="back">返回</div>
        <div class="center">标题</div>
    </div>
</template>

<script>
    export default {
        name: "headers",
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .headers{
        background-color: green;
        color: #fff;
        padding: 10px 12px;
    }
    .left{
        display: inline-block;
        text-align: left;
    }
    .center{
        display: inline-block;
        text-align: center;
        margin: 0 auto;
        width:80%;
    }
</style>