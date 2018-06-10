<template>
  <div class="box_employ">
    <el-form ref="form" label-width="100px">
      <el-form-item label="用户姓名">
        <el-input ></el-input>
      </el-form-item>
       <el-form-item label="用户手机号">
        <el-input ></el-input>
      </el-form-item>
       <el-form-item label="用户邮箱">
        <el-input ></el-input>
      </el-form-item>
       <el-form-item label="员工编号">
        <el-input></el-input>
      </el-form-item>
       <el-form-item label="身份证号">
        <el-input></el-input>
      </el-form-item>
       <el-form-item label="归属组织">
          <el-popover
            placement="right"
            width="400"
            trigger="click">
            
            <el-container direction="vertical">
              <el-form>
                <el-row>
                  <el-col :span="8">
                    <el-input size="small"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-button size="small">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
              <el-table :data="orgdata" @row-click="rowclick">
                <el-table-column width="60" property="index" label="序号"></el-table-column>
                <el-table-column width="170" property="name" label="组织名称"></el-table-column>
                <el-table-column width="170" property="uporg" label="上级组织"></el-table-column>
              </el-table>
            </el-container>
            <el-input v-model="form.group" slot="reference" size="small">
              <i class="el-input__icon el-icon-arrow-down" slot="suffix"></i>
            </el-input>
          </el-popover>
      </el-form-item>
      <el-button size="mini">查询</el-button>
    </el-form>
    <div class="operation">
      <el-button icon="el-icon-circle-plus-outline">新增</el-button>
      <el-button icon="el-icon-edit">修改</el-button>
      <el-button icon="el-icon-close-plus-outline">离职</el-button>
    </div>
    <table class="tbl">
      <thead class="tad">
        <tr>
          <th><input type="checkbox"/></th>
          <th>姓名</th>
          <th>员工ID</th>
          <th>员工编号</th>
          <th>手机号</th>
          <th>邮箱</th>
          <th>归属组织</th>
          <th>权限</th>
          <th>上级组织</th>
          <th>创建时间</th>
        </tr>
      </thead>
      <tbody class="tb" >
        <tr v-for="(item,index) in menubardata" :key="index">
          <td><input type="checkbox"/></td>
          <td>{{item.name}}</td>
          <td>{{index}}</td>
          <td>{{item.bianhao}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.org}}</td>
          <td>{{item.jurisdiction}}</td>
          <td>{{item.uporg}}</td>
          <td>{{item.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex';
  export default {
    name: "",
    data() {
      return {
        form:{
          name:"xjb",
          group:'employ'
        }
      };
    },
    computed:{
      ...mapState(['orgdata','menubardata'])
    },
    mounted(){
      this.getorg_A()
      this.getmenubardata_A()
    },
    methods: {
      rowclick(row,event,column){
        //console.log(row);
        this.form.group = row.name;
      },
      ...mapActions(['getorg_A','getmenubardata_A'])
    }
  };
</script>
<style lang="" scoped src="./employ.css">

</style>
