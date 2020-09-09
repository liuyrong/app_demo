import router from './router/index'
import loginApi from './api/login';

import { Message } from 'element-ui';

router.beforeEach((to,from,next)=>{
    // next()
        //获取本地存储的token
        const token = localStorage.getItem("yy_token");

        //判断 没有token
        if(!token){
            //要跳转的是非登录页
            if(to.path !== "/login"){
                localStorage.removeItem("jy_info");
                Message.warning('请先登录')
                next("/login")
            }else{
               next(); 
            }
        }else{
            console.log(2);
            //有token的情况下判断他是否进入到登录页
            if(to.path == "/login"){
                next();
            }else{
                //如果有token,但是进入的不是登录页,先判断本地有没有用户的信息
                //获取本地存储的用户信息
                const info = localStorage.getItem("jy_info");
    
                //判断是否有用户信息
                if(info){
                    next();
                }else{
                    loginApi.wxInfo().then(res=>{   
                        if(res.code == 200){
                            localStorage.setItem("jy_info",JSON.stringify(res.data));
                            next();
                        }else{
                            localStorage.removeItem("yy_token")
                            Message.warning('请先登录')
                            next("/login")
                        }
                    })
                }    
            }
        }

    // to()
    // next()
    // from()
})
