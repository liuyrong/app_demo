import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/index.vue";
import Shou from "../views/login/shou.vue";
import Blue from "../views/lantian/blue.vue"
import Network from '../views/lantian/network.vue'
import Logiou from '../components/Logiou.vue'
import Home from "../views/home/index.vue"
import Goods from "../views/goods/index.vue"
import Meber from '../views/meber/index.vue'
import Staff from '../views/staff/index.vue'
import Supplier from '../views/supplier/index.vue'
import Dao from '../views/dao/index.vue'
import Daohan from '../views/daohan/index.vue'
import User from'../views/user/index.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/shou",
    name: "Shou",
    component: Shou
  },
  {
    path: "/blue",
    name: "Blue",
    component: Blue
  },
  {
    path: '/network',
    name: 'Network',
    component: Network
  },
  // 二级
  {
    path: '/Logiou',
    name: 'Logiou',
    component: Logiou,
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: "首页",
          // oAuth: true
        }
      }
    ]
  },
  // 配置子路由的另外一种办法
  {
    path: '/meber',
    component: Logiou,
    name: 'Meber',
    children: [
      {
        path: '/',
        component: Meber,
        meta: {
          title: "会员管理"
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Logiou,
    name: 'Goods',
    children: [
      {
        path: '/',
        component: Goods,
        meta: {
          title: "商品管理"
        }
      }
    ]
  },
  {
    path: '/staff',
    component: Logiou,
    name: 'Staff',
    children: [
      {
        path: '/',
        component: Staff,
        meta: {
          title: "员工管理"
        }
      }
    ]
  },
  {
    path: '/supplier',
    component: Logiou,
    name: 'Supplier',
    children: [
      {
        path: '/',
        component: Supplier,
        meta: {
          title: "供应商管理"
        }
      }
    ]
  },
  // 三级联动
  {
    path: '/dao',
    component: Logiou,
    name: 'Dao',
    children: [
      {
        path: '/',
        component: Dao,
        meta: {
          title: "用户列表"
        }
      }
    ]
  },
  {
    path: '/daohan',
    component: Logiou,
    name: 'Daohan',
    children: [
      {
        path: '/',
        component: Daohan,
        meta: {
          title: "商家列表"
        }
      }
    ]
  },
  {
    path: '/user',
    component: Logiou,
    name: 'User',
    children: [
      {
        path: '/',
        component: User,
        meta: {
          title: "学员列表"
        }
      }
    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
