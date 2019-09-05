import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Home from '../components/home.vue'
import Message from '../components/message.vue'
import Mine from '../components/mine.vue'
import Add from '../components/add.vue'
import Details from '../components/details.vue'

Vue.use(Router);

const routers = new Router({
    routes:[
        {
            path:'/',
            name:'login',
            component:Login
        },{
            path:'/register',
            name:'register',
            component:Register
        },{
            path:'/home',
            name:'home',
            component:Home,
            children:[
                {
                    path:'message',
                    name:'message',
                    component:Message,
                    meta:{
                        keepAlive:true
                    }
                },{
                    path:'mine',
                    name:'mine',
                    component:Mine
                }
            ]
        },{
            path:'/add',
            name:'add',
            component:Add
        },{
            path:'/details',
            name:'details',
            component:Details
        }
    ]
});

export default routers;