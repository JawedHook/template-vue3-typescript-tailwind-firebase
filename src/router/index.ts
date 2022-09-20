import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router"
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes : RouteRecordRaw[] = [
    {
        path:"/",
        name:"Login",
        component: () => import("../views/LoginView.vue"),
        meta:{
            requireNotAuth:true
        }
    },
    {
        path:"/home",
        name:"Home",
        component: () => import("../views/HomeView.vue"),
        meta:{
            requireAuth:true
        }
    }
];

const router : Router = createRouter({
    history:createWebHistory(),
    routes
});

const getCurrentUser = () : Promise<any> => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}

router.beforeEach( async (to, from, next) => {
    // Need to not be auth to proceed
    if(to.matched.some((record) => record.meta.requireNotAuth)){
        if(await getCurrentUser()){
            next("/home");
        } else {
            next();
        }
    }
    // Need auth to proceed
    if(to.matched.some((record) => record.meta.requireAuth)){
        if(await getCurrentUser()){
            next();
        } else {
            next("/");
        }
    }
});

export default router;