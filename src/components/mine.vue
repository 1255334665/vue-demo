<template>
    <div class="mine">
        <img src="../assets/img/mine.jpg">
        <p>欢迎来到个人中心</p>
        <router-link to="/add" class="mine_button">添加</router-link>
    </div>
</template>

<script>
    export default {
        name: "mine"
    }
</script>

<style scoped>
img{
    width:50%;
    height: auto;
    margin-top: 30px;
}
    .mine{
        text-align: center;
    }
    .mine_button{
        display: inline-block;
        width:70%;
        height:30px;
        margin: 0 auto;
        margin-top: 15px;
        text-decoration: none;
        background-color: green;
        color: #fff;
        border-radius: 5px;
        line-height: 30px;
    }
</style>