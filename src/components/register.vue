<template>
    <div class="register">
        <p>请输入以下信息</p>
        <div>
            <label>登录名</label>
            <input type="text">
        </div>
        <div>
            <label>密码</label>
            <input type="password" v-model="register_password">
        </div>
        <div>
            <label>再密码</label>
            <input type="password" v-model="register_againPassword" @blur="verification">
        </div>
        <div>
            <button><router-link to="/">确定</router-link></button>
            <button>
                <router-link to="/">取消</router-link>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return {
                register_password:'',
                register_againPassword:''
            }
        },
        methods:{
            verification(){
                if(this.register_password != this.register_againPassword){
                    alert('密码不相同')
                }
            }
        }
    }
</script>

<style scoped>
    .register label{
        display: inline-block;
        width:50px;
        text-align: right;
    }
    .register button{
        width:160px;
        margin-top: 20px;
    }
</style>