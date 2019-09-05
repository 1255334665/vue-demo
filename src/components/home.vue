<template>
    <div class="home">
        <div class="tab">
            <router-link to="/home/message" class="tab_list">新闻列表</router-link>
            <router-link to="/home/mine" class="tab_list">个人中心</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .tab{
        width:100%;
        height:50px;
        position: fixed;
        bottom: 0;
    }
    .tab_list{
        display: inline-block;
        width: 48.84%;
        text-align: center;
        text-decoration: none;
        border: 1px solid #dddddd;
        height:48px;
        line-height: 48px;
    }
    .router-link-active{
        background-color: green;
        color: #fff;
    }
</style>