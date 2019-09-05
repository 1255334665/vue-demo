<template>
    <div class="add">
        <div>标题</div>
        <div>
            <input type="text" v-model="title">
        </div>
        <div>内容</div>
        <div>
            <textarea cols="30" rows="10" v-model="content"></textarea>
        </div>
        <div>
            <div class="add_button add_color" @click="add_success">
                完成
            </div>
            <router-link to="/home/mine" class="add_button">取消</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add",
        data(){
            return {
                title:'',
                content:'',
                list:{},
                getNowTimes:''
            }
        },
        methods:{
            add_success(){
                if(!this.title || !this.content){
                    alert('请输入标题或内容！')
                    return
                }else{
                    this.list = {
                        title:this.title,
                        content:this.content,
                        time:this.getNowTimes
                    };
                    this.$store.dispatch('array_act',this.list);
                    this.title = '';
                    this.content = '';
                    this.$router.push('/home/mine')
                }
            }
        },
        created(){
            const now = new Date();
            const year = now.getFullYear();
            let month = now.getMonth() + 1 < 10 ? "0"+ (now.getMonth() + 1) : now.getMonth() + 1;
            let date = now.getDate() < 10 ? "0"+now.getDate() : now.getDate();
            let hour = now.getHours() < 10 ? "0"+now.getHours() : now.getHours();
            let minu = now.getMinutes() < 10 ? "0"+now.getMinutes() : now.getMinutes();
            let sec = now.getSeconds() < 10 ? "0"+now.getSeconds() : now.getSeconds();
            let time = year + "-" + month + "-" + date + " "  + hour + ":" + minu +":"+sec;
            this.getNowTimes = time
        }
    }
</script>

<style scoped>
.add{
    margin: 12px;
}
input{
    height: 30px;
    border-radius: 5px;
    width: 95%;
    outline:none;
    border: 1px solid #ddd;
    padding: 2px 2%;
    margin-top: 5px;
}
textarea{
    width: 95%;
    outline:none;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 5px;
}
    .add_button{
        display: inline-block;
        width:48.5%;
        height:30px;
        margin-top: 15px;
        text-decoration: none;
        border-radius: 5px;
        line-height: 30px;
        border: 1px solid #ddd;
        text-align: center;
    }
    .add_color{
        background-color: green;
        color: #fff;
        border: 1px solid green;
    }
</style>