<template>
  <div class="modules">
    <el-container>
      <el-aside width="200px">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>-->
        <div class="img"><img src="@/assets/images/logo_index.png" alt="logo"></div>
        <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" router>
          <el-menu-item index="/" >
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
            <el-menu-item index="/publish">
            <i class="el-icon-menu"></i>
            <span slot="title">内容管理</span>
          </el-menu-item>
            <el-menu-item index="/imange">
            <i class="el-icon-menu"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
            <el-menu-item index="/article">
            <i class="el-icon-menu"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
            <el-menu-item index="/comment">
            <i class="el-icon-menu"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
            <el-menu-item index="/fans">
            <i class="el-icon-menu"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
            <el-menu-item index="/setting">
            <i class="el-icon-menu"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <i class="el-icon-s-fold"></i>郑州创值文化有限公司
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import './index.less'

@Component({
  name: 'Modules'
})
export default class Modules extends Vue {
  public isCollapse = false;
}
</script>
<style lang='less'>
//  @import "./index.less";
</style>
