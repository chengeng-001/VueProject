import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Film from "@/views/Film";
import cinema from "@/views/film/cinema";
import center from "@/views/film/center";

const routes = [
  {
    path: '/film',
    component: Film
  },
  {
    path: '/cinema/:id',
    component: cinema
  },
  {
    path: '/center',
    component: center
  },
  {
    //注意通配符* 已经不支持
    path: '/',
    redirect: '/film'
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log("拦截");
  if(to.fullPath === '/center') {
    console.log('拦截');
  }else {
    next();
  }
});

export default router
