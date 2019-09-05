<template>
    <div class="login">
        <p>欢迎登录</p>
        <div>
            <label>登录名</label>
            <input type="text">
        </div>
        <div>
            <label>密码</label>
            <input type="password">
        </div>
        <div>
            <button>
                <router-link to="/home/message">登录</router-link>
            </button>
            <button>
                <router-link to="/register">
                    注册
                </router-link>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
.login label{
    display: inline-block;
    width:50px;
    text-align: right;
}
    .login button{
        width:160px;
        margin-top: 20px;
    }
</style>