<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>粉丝管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <template>
       <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="粉丝列表" name="first">粉丝列表</el-tab-pane>
    <el-tab-pane label="粉丝画像" name="second">粉丝画像</el-tab-pane>
  </el-tabs>
    </template>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Fans'
})
export default class Fans extends Vue {
  public activeName = 'first'
}
</script>

<style lang="less">
</style>
