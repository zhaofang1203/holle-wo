<template>
  <div id="imange">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>素材管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <template>
        <el-radio-group v-model="radio1">
          <el-radio-button :label="1">全部</el-radio-button>
          <el-radio-button :label="2">收藏</el-radio-button>
        </el-radio-group>
        <el-button type='primary' style='float: right'>上传素材</el-button>
        <div class="pic">
          <ul>
            <li></li>
          </ul>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Lmange'
})
export default class Lmange extends Vue {
  public radio1 = '1'
  public activeName = 'first'
}
</script>

<style scoped lang="less">
.pic {
  ul {
    display: flex;
    li {
      width: 200px;
      height: 240px;
      margin-right: 20px;
      background: #ccc;
    }
  }
}
</style>
