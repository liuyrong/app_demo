import axios from "@/utils/request";
export default{
    // 获取列表接口
    getUserList(offset,limit){
    return axios({
        url:"http://mengxuegu.com:7300/mock/5f56ee818d90085e5b58434f/user/student",
        method:'get',
        params : {
            offset ,
            limit,
        }
    })
    },
    // 获取总条数
    getCount(){
        return axios({
            url:"https://elm.cangdu.org/v1/users/count",
            method:'get'
        })
    },
    getp(page,size,searchmap){
        return axios({
            url:"http://mengxuegu.com:9999/pro-api/member/list/search/1/20",
            method:'post',
            data:searchmap
        })
    },
    // 新增加的学员
    addMember(data){
return axios({
    url:"http://mengxuegu.com:7300/mock/5f50d6778d90085e5b5840b7/v1/api/member",
    method:'post',
    data:data,
})
    }
}