import axios from "@/utils/request"

export default {
    login(name,pass){
        return axios({
            url:"http://mengxuegu.com:7300/mock/5f50d6778d90085e5b5840b7/v1/api/user/login",
            method:'post',
            data:{
                username:name,
                userpass:pass
            }
        })
    },
    // 获取用户信息
    getUserInfo(){
        return axios({
            url:'http://mengxuegu.com:7300/mock/5f50d6778d90085e5b5840b7/v1/api/user/info',
            
        })
    }
}