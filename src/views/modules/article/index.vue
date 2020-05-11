
<template>
  <div id="article">
    <el-card class="box-search">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form label-width="80px" :model="formLabelAlign" label-suffix=":">
        <el-form-item label="状态">
          <el-radio-group v-model="radio">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select v-model="formLabelAlign.channel" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="formLabelAlign.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-concent">
      <div slot="header" class="clearfix">根据筛选条件共查询到 8843条数据</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="封面" width="180"></el-table-column>
        <el-table-column prop="name" label="标题" width="180"></el-table-column>
        <el-table-column prop="address" label="状态"></el-table-column>
        <el-table-column prop="address" label="发布时间"></el-table-column>
        <el-table-column prop="address" label="操作"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Article'
})
export default class Article extends Vue {
  public formLabelAlign = {}
  public radio = 3
  public tableData = []
  public options = [
    { value: '选项1', label: '黄金糕' },
    {
      value: '选项2',
      label: '双皮奶'
    },
    {
      value: '选项3',
      label: '蚵仔煎'
    },
    {
      value: '选项4',
      label: '龙须面'
    },
    {
      value: '选项5',
      label: '北京烤鸭'
    }
  ]
}
</script>

<style lang="less">
.el-card__header {
  border-bottom: 1px dashed #ebeef5;
}
.box-search {
  margin-bottom: 20px;
}
</style>
