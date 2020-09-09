import axios from "@/utils/request";
export default {
    getStudent(){
        return axios({
            url:'http://mengxuegu.com:9999/pro-api/member/list/search/1/20',
            method:'post'
        })
    }
}