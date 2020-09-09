<template>
  <div class="user">
    <!-- 查询 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="用户卡号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="注册"></el-input>
      </el-form-item>
      <el-form-item prop="payType">
        <el-select v-model="formInline.payType" placeholder="支付类型" style="width:110px">
          <el-option
            v-for="(item,index) in payTypeValue"
            :key="index"
            :label="item.name"
            :value="item.type"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 生日时间 -->
      <el-form-item>
        <el-date-picker type="date" placeholder="选择日期" v-model="value" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <!-- /member/list -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="zeng">新增</el-button>
        <el-button type="primary" @click="onSubmit">删除</el-button>
      </el-form-item>
    </el-form>
    <!-- 渲染 -->
    <el-table :data="list" height="600" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名"></el-table-column>
      <el-table-column prop="birthday" label="会员生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="130"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="integral" label="可用积分"></el-table-column>
      <!-- <el-table-column prop="integral" label="可用积分"></el-table-column> -->
      <el-table-column prop="payType" label="支付类型">
        <template slot-scope="scope">
          <span>{{ scope.row.payType | payTypeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址" width="180"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDele(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="add"
      background
      :page-size="pageSize"
      layout="total,prev, pager, next"
      :current-page="currentpage"
      :total="total"
    ></el-pagination>
    <!-- 对话框 -->
    <el-dialog title="会员编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules"  ref="memberEdit">
        <el-form-item label="会员卡号" prop="cardNum" :label-width="formLabelWidth">
          <el-input v-model="form.cardNum"></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="会员生日" prop="birthday" :label-width="formLabelWidth">
          <el-date-picker v-model="form.birthday" type="datetime" placeholder="会员生日"></el-date-picker>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" :label-width="formLabelWidth">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="开卡金额" prop="money" :label-width="formLabelWidth">
          <el-input v-model="form.money"></el-input>
        </el-form-item>
        <el-form-item label="可用积分" prop="integral" :label-width="formLabelWidth">
          <el-input v-model="form.integral"></el-input>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType" :label-width="formLabelWidth">
          <el-select v-model="form.payType" placeholder="支付类型">
            <el-option
              v-for="(item,index) in payTypeValue"
              :label="item.name"
              :value="item.type"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员地址" prop="address" :label-width="formLabelWidth">
          <el-input v-model="form.address" typer="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd('memberEdit')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import MerrApi from "../../api/merr";
const payTypeOptions = [
  {
    type: 1,
    name: "现金"
  },
  {
    type: 2,
    name: "微信"
  },
  {
    type: 3,
    name: "支付宝"
  },
  {
    type: 4,
    name: "银行卡"
  }
];
export default {
  data() {
    return {
      rules: {
        cardNum: [
          { required: true, message: "请输入会员卡号", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入会员名字", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        payType: [
          { required: true, message: "请选择支付类型", trigger: "change" }
        ]
      },
      formLabelWidth: "100px",
      form: {
        cardNum: "",
        name: "",
        birthday: "",
        phone: "",
        money: 0,
        integral:0,
        payType: "",
        address: ""
      },

      dialogTableVisible: false,
      dialogFormVisible: false,
      // current-page	当前页数，
      // page-sizes	每页显示个数选择器的选项设置
      list: [],
      formInline: {
        cardNum: "",
        name: "",
        birthday: "",
        payType: ""
      },
      pageSize: 10, //每页显示的条数10条
      offset: 0,
      total: 0, //总记录数
      //  改变时会出发当前页
      currentpage: 1, //当前页默认为第一页
      searchmap: {},
      payTypeValue: payTypeOptions
    };
  },
  filters: {
    payTypeFilter(data) {
      const payValue = payTypeOptions.find(item => {
        return item.type == data;
        // console.log(index)
      });
      return payValue.name;
    }
  },
  created() {
    this.getUser();
    // this.getnext()
  },
  mounted() {},
  methods: {
    // 新增的数据
    zeng(){
this.dialogFormVisible=true;
this.$nextTick(function(){
this.$refs["memberEdit"].resetFields();
})

    },
    // 提交表单
    submitAdd(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
          if (valid) {
            // alert('submit!');
            MerrApi.addMember(this.form).then(res=>{
                  console.log(res)
                  if(res.data.code =="200"){
                    this.getUser();
                  }else{
                      this.$message({
                     text:res.message
                      })
                  }
            }).catch(error=>{
              console.log(error)
            })
          } 
            return false;
          
        });
      console.log(formName);
      // 让提示框消失
      this.dialogFormVisible = false;
      // 让表单充值
    },
    // 编辑
    handleEdit(){

    },
    // 删除
    handleDele(){
 this.$confirm("你要删除这个文件莫", {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
     //条数改变时触发
    handleSizeChange(cSize) {
      console.log("条数");
      this.pageSize = cSize;
      this.fetchData();
    },
    //页码改变时触发
    handleCurrentChange(cPage) {
      console.log(cPage);
      this.currentPage = cPage;
      this.getUser();
    },
    // 数据渲染
    getUser() {
      MerrApi.getp().then(res => {
        // console.log(res);
        const req = res.data;
        this.total = req.total;
        this.list = req.rows;
        // console.log(this.total, this.list);
      });
      // 请求数据渲染
      // 调用分页方法查询，不要少了THIS
      // MerrApi.getUserList(this.offset,this.pageSize)
      //   .then(res => {
      //     // console.log(res)
      //     this.list = res.data.data.rows;
      //     // console.log(res.data.data.rows);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
      //   // 请求条数渲染
      //   MerrApi.getCount().then(res=>{
      //       // console.log(res)
      //       this.total=res.count
      //   })
    },
    add(data) {
      // console.log(data)
      this.offset = (data - 1) * this.pageSize;
      this.getUser();
    },
    // 查询
    onSubmit() {}
  }
};
</script>

<style scoped>
.demo-form-inline {
  margin-top: 20px;
}

</style>
