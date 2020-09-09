import axios from "@/utils/request"

export default {
    // login(name,pass){
    //     return axios({
    //         url:"http://mengxuegu.com:7300/mock/5f50d6778d90085e5b5840b7/v1/api/user/login",
    //         method:'post',
    //         data:{
    //             username:name,
    //             userpass:pass
    //         }
    //     })
    // },
    // 网校登录接口
    wxLogin(data) {
        return axios({
            url: 'http://120.53.31.103:84/api/adminUser/login',
            method: "post",
            data: data
        })

    },
    wxinfo() {
        return axios({
            url: 'http://120.53.31.103:84/api/menu/info',
            method: "post",

        })

    },
    // 获取用户信息
    // getUserInfo(){
    //     return axios({
    //         url:'http://mengxuegu.com:7300/mock/5f50d6778d90085e5b5840b7/v1/api/user/info',
    //     })
    // }
}