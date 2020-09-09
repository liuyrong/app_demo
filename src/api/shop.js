import axios from "@/utils/request"
export default {
   getShop(){
       return axios({
           url:"https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20",
           method:"get"
       })
   } 



}