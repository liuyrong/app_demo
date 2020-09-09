import axios from "@/utils/request"
export default {
    userLogin(username,password){
        return axios({
            url:"http://mengxuegu.com:7300/mock/5f5194538d90085e5b58410f/student/admin/login",
            method:'post',
            data:{
                username,
                password
            }
        })
    },
    // 获取用户信息
    userInfo(){
        return axios({
            url:'http://mengxuegu.com:7300/mock/5f5194538d90085e5b58410f/student/admin/info',
            
        })
    }
}