import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import ElementPlus from 'element-plus'
import {createRouter,createWebHashHistory} from "vue-router";
import Home from "@/components/Home.vue";
import add from "@/components/add.vue";
import base from "@/components/base.vue";
import {createStore} from "vuex";

var app=createApp(App)
var Router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/home',
            component:Home,
            name:'home',
            children:[{
                path:'base',
                component:base,
                name:'base'
            },{path:'add',component:add,name:'add'}]
        }
    ]
})
var store=createStore({
    state(){
        return{
            exercisingTime:0
        }
    }

})
app.use(Router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')
