<template>
    <div class="message">
        <div v-for="(item,index) in items" :key="item.title"
             :class="{'onClickThis':clickIt == index&&clickIt!=NaN}" @click="onInfo(index)">
            <div>{{item.title}}</div>
            <p>{{item.content}}</p>
            <p>
                <span>{{item.time}}</span>
                <span v-if="clickIt == index&&clickIt!=NaN">
                    <router-link to="/details">查看详情>></router-link>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message",
        data(){
            return {
                items: this.$store.getters.getArrLists,
                clickIt:NaN
            }
        },
        methods:{
            onInfo(index){
                this.clickIt = index
            }
        }
    }
</script>

<style scoped>
.message{
    margin: 12px;
}
    .message>div{
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 0px 3px;
        margin-bottom: 10px;
        box-shadow: 2px 3px 5px #ddd;
    }
.message>div div{
    border-bottom: 1px solid #ddd;
    padding: 5px 0;
}
.message>div p{
    line-height: 25px;
}
    .message span:nth-of-type(2){
        float: right;
    }
    .onClickThis{
        background-color: green;
        color: #fff;
    }
</style>