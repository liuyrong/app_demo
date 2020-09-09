<template>
  <div class="shop">
    <el-table :data="shopList" style="width: 100%;height:100%;">
        <el-table-column type="index" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="店铺名称" width="200"></el-table-column>
      <el-table-column prop="address" label="店铺地址" width="400"></el-table-column>
      <el-table-column prop="category" label="店铺介绍" width="200"></el-table-column>
      <el-table-column prop="city" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import AppShop from "../../api/shop";
export default {
  data() {
    return {
      shopList: []
    };
  },
  created() {
    this.getShopList();
  },
  mounted() {},
  methods: {
    getShopList() {
      AppShop.getShop()
        .then(res => {
          console.log(res);
          this.shopList = res;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //编辑
    handleEdit() {},
    //删除
    handleDelete() {}
  }
};
</script>

<style scoped>
</style>
