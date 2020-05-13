
<template>
  <div id="article">
    <el-card class="box-search">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form label-width="80px" :model="articleFrom" label-suffix=":">
        <el-form-item label="状态">
          <el-radio-group v-model="articleFrom.status" v-for="item in statusList" :key="item.name">
            <el-radio :label="item.value">{{ item.name }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select v-model="articleFrom.channelid" placeholder="请选择">
            <el-option
              v-for="item in channelsList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">筛选</el-button>
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
import { Component, Vue, Watch } from 'vue-property-decorator'
import { typeList } from '../../index.d'

@Component({
  name: 'Article'
})
export default class Article extends Vue {
  public radio = 3
  public time = []
  public tableData = []
  public channelsList = []
  public articleFrom = {
    status: null, // 否文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部
    channelid: '', // 否频道id，不传为全部
    beginpubdate: '', // 否2019-01-01起始时间
    endpubdate: '', // 否2019-01-02截止时间
    page: 1, // 否页数
    perpage: 10, // 否每页数量
    responsetype: '' // 否返回数据的字段，不传返回用于内容管理的字段，传comment 返回用于评论管理的字段，传statistic 返回用于图文数据的字段
  }

  /*
   *jdhfjhv
   */
  public statusList: Array<typeList> = [
    { name: '全部', value: null },
    { name: '草稿', value: 0 },
    { name: '待审核', value: 1 },
    { name: '审核通过', value: 2 },
    { name: '审核失败', value: 3 },
    { name: '已删除', value: 4 }
  ]

  @Watch('time')
  public timeChange (value: []) {
    console.log(value, 'value')
    if (value.length > 0) {
      this.articleFrom.beginpubdate = value[0]
      this.articleFrom.endpubdate = value[1]
    }
  }
  /*
   *jdhfjhv
   */

  public async search () {
    console.log(this.articleFrom, 'articleFrom')
    const { data } = await this.$axios.get('/articles', { params: this.articleFrom })
    console.log(data, 'data')
  }
  /*
   *jdhfjhv
   */

  public created () {
    this.getChannels()
  }

  /*
   *jdhfjhv
   */

  public async getChannels () {
    const { data } = await this.$axios.get('/channels')
    if (data.message === 'OK') {
      this.channelsList = data.data.channels
    }
  }
}
</script>

<style lang="less">
.el-card__header {
  border-bottom: 1px dashed #ebeef5;
}
.box-search {
  margin-bottom: 20px;
}
.el-radio-group {
  margin-right: 10px;
}
</style>
