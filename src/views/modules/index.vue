<template>
  <div class='modules'>
    <el-container>
      <el-aside width='200px'>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Modules'
})
export default class Modules extends Vue {}
</script>
<style lang='less'>
</style>
