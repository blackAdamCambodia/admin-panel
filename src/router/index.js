import { createRouter, createWebHistory } from "vue-router";

import Login from '../components/pages/Login.vue'
import Registration from '../components/pages/RegistrationFrom.vue'
import ForgetPassword from '../components/pages/ForgetPassword.vue'



const routes =[
    {
        path: "/",
        component: Login
    },
    {
        path: "/registration",
        component: Registration
    },
    {
        path: "/forgetpassword",
        component: ForgetPassword
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router