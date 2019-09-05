<template>
    <div class="details">
        <v-headers/>
        <div v-for="item in items" class="list">
            <div class="title">{{item.title}}</div>
            <p>{{item.content}}</p>
        </div>
    </div>
</template>

<script>
    import Headers from './headers.vue'
    export default {
        name: "details",
        components:{
            "v-headers":Headers
        },
        data(){
            return {
                items:this.$store.getters.getArrLists
            }
        }
    }
</script>

<style scoped>
    .list{
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 0 3px;
        box-shadow: 2px 3px 5px #ddd;
        margin: 0px 12px 10px 12px;
    }
    .title{
        border-bottom: 1px solid #ddd;
        padding: 5px 0;
    }
</style>