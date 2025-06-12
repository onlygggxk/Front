<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="基础数据" name="second">
        <el-table :data="tableData"
                  stripe
                  ref="multipleTable"
                  style="width: 100%"
        >
          <el-table-column prop="monthDay"
                           align="center"
                           label="月份"
          >
          </el-table-column>

          <el-table-column prop="name"
                           align="center"
                           label="学生姓名"
          >
          </el-table-column>

          <el-table-column prop="height"
                           align="center"
                           label="身高"
          >
          </el-table-column>
          <el-table-column prop="weight"
                           align="center"
                           label="体重"
          >
          </el-table-column>
          <el-table-column prop="eyesight"
                           align="center"
                           label="视力"
          >
          </el-table-column>
          <el-table-column prop="ulseRate"
                           align="center"
                           label="脉率"
          >
          </el-table-column>
          <el-table-column prop="bloodPressure"
                           align="center"
                           label="血压"
          >
          </el-table-column>
          <el-table-column prop="heartRate"
                           align="center"
                           label="心率"
          >
          </el-table-column>
          <el-table-column prop="breath"
                           align="center"
                           label="呼吸"
          >
          </el-table-column>
          <el-table-column prop="bloodSugar"
                           align="center"
                           label="血糖"
          >
          </el-table-column>
          <el-table-column prop="bloodLipid"
                           align="center"
                           label="血脂"
          >
          </el-table-column>

        </el-table>
      </el-tab-pane>
      <el-tab-pane label="数据分析" name="first">
        <el-row :gutter="20">
          <el-col :span="8" style="margin-bottom: 20px">
            <el-card>
              <div slot="header" style="display: flex;align-items: center">
                <div style="font-weight: bold;font-size: 20px">身高变化（cm）</div>
                <div style="flex-grow: 1"></div>
              </div>
              <div id="main1" style="width: 100%;height: 400px">
              </div>
            </el-card>
          </el-col>

          <el-col :span="8" style="margin-bottom: 20px">
            <el-card>
              <div slot="header" style="display: flex;align-items: center">
                <div style="font-weight: bold;font-size: 20px">体重变化（kg）</div>
                <div style="flex-grow: 1"></div>
              </div>
              <div id="main2" style="width: 100%;height: 400px">
              </div>
            </el-card>
          </el-col>


          <el-col :span="8" style="margin-bottom: 20px">
            <el-card>
              <div slot="header" style="display: flex;align-items: center">
                <div style="font-weight: bold;font-size: 20px">心率&脉率变化</div>
                <div style="flex-grow: 1"></div>
              </div>
              <div id="main3" style="width: 100%;height: 400px">
              </div>
            </el-card>
          </el-col>

          <el-col :span="8" style="margin-bottom: 20px">
            <el-card>
              <div slot="header" style="display: flex;align-items: center">
                <div style="font-weight: bold;font-size: 20px">视力变化</div>
                <div style="flex-grow: 1"></div>
              </div>
              <div id="main4" style="width: 100%;height: 400px">
              </div>
            </el-card>
          </el-col>

          <el-col :span="8" style="margin-bottom: 20px">
            <el-card>
              <div slot="header" style="display: flex;align-items: center">
                <div style="font-weight: bold;font-size: 20px">呼吸变化</div>
                <div style="flex-grow: 1"></div>
              </div>
              <div id="main5" style="width: 100%;height: 400px">
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" style="margin-bottom: 20px">
            <el-card>
              <div slot="header" style="display: flex;align-items: center">
                <div style="font-weight: bold;font-size: 20px">血糖&血脂</div>
                <div style="flex-grow: 1"></div>
              </div>
              <div id="main6" style="width: 100%;height: 400px">
              </div>
            </el-card>
          </el-col>
        </el-row>

      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import { echartsData } from '@/api/user'
import * as echarts from 'echarts'

export default {
  name: 'index',
  props: {
    studentId: {
      type: Number,
      defalut: 0
    }
  },
  data() {
    return {
      activeName: 'first',
      tableData: []
    }
  },
  watch: {
    studentId: {
      handler(v1, v2) {
        console.log(v1)
        console.log(v2)
        this.$nextTick(() => {
          this.init(v1)
        })
      },
      immediate: true
    }
  },
  methods: {
    init(stuId) {
      echartsData(stuId).then(res => {
        console.log(res)
        this.tableData = res.data.healthyDTOS
        let monthData = res.data.monthList
        this.ec1('main1', monthData, res.data.heightList)
        this.ec1('main2', monthData, res.data.weightList)
        this.ec2('main3', monthData, res.data.heartRate, res.data.ulseRate, ['心率', '脉率'])
        this.ec2('main4', monthData, res.data.leftEyes, res.data.rightEyes, ['左眼', '右眼'])
        this.ec2('main5', monthData, res.data.leftXue, res.data.rightXue, ['收缩压', '舒张压'])
        this.ec2('main6', monthData, res.data.bloodLipid, res.data.bloodSugar, ['血糖', '血脂'])
      })
    },
    ec2(id, monthData, data1, data2, data3) {
      var chartDom = document.getElementById(id)
      var myChart = echarts.init(chartDom)
      var option

      option = {

        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: data3
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: monthData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: data3[0],
            type: 'line',
            stack: 'Total',
            data: data1
          },
          {
            name: data3[1],
            type: 'line',
            stack: 'Total',
            data: data2
          }
        ]
      }

      option && myChart.setOption(option)

    },
    ec1(id, data1, data2) {
      var chartDom = document.getElementById(id)
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: 'category',
          data: data1
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: data2,
            type: 'line'
          }
        ]
      }
      option && myChart.setOption(option)
    }
  }
}
</script>


<style scoped lang="scss">

</style>
