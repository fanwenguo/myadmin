<template>
  <div class="userbox">
     <el-form ref="form" label-width="80px">
      <el-form-item label="用户姓名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="用户状态">
        <el-input></el-input>
      </el-form-item>
      <el-button>查询</el-button>
    </el-form>
    <div class="operation">
      <el-button icon="el-icon-circle-plus-outline">增加</el-button>
      <el-button icon="el-icon-edit">编辑</el-button>
      <el-button icon="el-icon-close-plus-outline">删除</el-button>
      <el-button>权限配置</el-button>
      <el-button>权限计算</el-button>
      <el-button>重置密码</el-button>
    </div>
    <table class="tbl">
      <thead class="tad">
        <tr>
          <th><input type="checkbox"/></th>
          <th>登录用户名</th>
          <th>用户名称</th>
          <th>认证模式</th>
          <th>用户状态</th>
          <th>邮箱</th>
          <th>创建人</th>
        </tr>
      </thead>
      <tbody class="tb" >
        <tr v-for="(item,index) in datalist" :key="index">
          <td><input type="checkbox"/></td>
          <td>{{index}}</td>
          <td>{{item.name}}</td>
          <td>本地密码认证</td>
          <td>{{item.state}}</td>
          <td></td>
          <td>{{item.creater}}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <span>共{{total}}页</span>
      <span @click="prev()">上一页</span>
      <span>{{pageindex}}/{{total}}</span>
      <span @click="next()">下一页</span>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      total: 10,
      datalist: [],
      pageindex: 1
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    prev() {
      this.pageindex = this.pageindex - 1;
      if (this.pageindex < 1) {
        this.pageindex =1;
        return;
      } else {
        axios
          .get("/api/paging", { pageindex: this.pageindex, count: 10 })
          .then(res => {
            //console.log(res);
            this.datalist = res.data;
          });
      }
    },
    next() {
      this.pageindex = this.pageindex + 1;
      if (this.pageindex>10) {
        this.pageindex = 10;
        return;
      } else {
         axios.get("/api/paging", { pageindex: this.pageindex, count: 10 })
        .then(res => {
          //console.log(res);
          this.datalist = res.data;
        });
      }
     
    }
  },
  components: {},
  beforeCreate() {
    axios.get("/api/paging", { pageindex: 1, count: 10 }).then(res => {
      //console.log(res);
      this.datalist = res.data;
    });
  }
};
</script>
<style lang="" scoped src="./user.css">
</style>
