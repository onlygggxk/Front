<template>
  <div>
    <el-card shadow="hover"
             style="margin-bottom: 20px">
      <div class="flex-warp">
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入学生姓名"
                      size="small"
                      suffix-icon="el-icon-search"
                      v-model="listQueryParam.name">
            </el-input>
          </div>
        </div>
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button size="small"
                       icon="el-icon-search"
                       @click="search">搜索
            </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="primary"
                       size="small"
                       icon="el-icon-refresh-right"
                       @click="refresh">刷新
            </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="success"
                       size="small"
                       icon="el-icon-plus"
                       @click="add">手动录入
            </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="success"
                       size="small"
                       @click="uploadExcel">数据excel上传
            </el-button>
          </div>
        </div>
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="danger"
                       size="small"
                       icon="el-icon-folder-delete"
                       @click="batchDel">删除
            </el-button>
          </div>
        </div>
      </div>
    </el-card>
    <el-card shadow="hover"
             class="mt15">
      <el-table :data="tableData"
                stripe
                ref="multipleTable"
                @selection-change="handleSelectionChange"
                style="width: 100%">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="学生姓名">
        </el-table-column>

        <el-table-column prop="height"
                         align="center"
                         label="身高">
        </el-table-column>
        <el-table-column prop="weight"
                         align="center"
                         label="体重">
        </el-table-column>
        <el-table-column prop="eyesight"
                         align="center"
                         label="视力">
        </el-table-column>
        <el-table-column prop="ulseRate"
                         align="center"
                         label="脉率">
        </el-table-column>
        <el-table-column prop="bloodPressure"
                         align="center"
                         label="血压">
        </el-table-column>
        <el-table-column prop="heartRate"
                         align="center"
                         label="心率">
        </el-table-column>
        <el-table-column prop="breath"
                         align="center"
                         label="呼吸">
        </el-table-column>
        <el-table-column prop="bloodSugar"
                         align="center"
                         label="血糖">
        </el-table-column>
        <el-table-column prop="bloodLipid"
                         align="center"
                         label="血脂">
        </el-table-column>
        <el-table-column prop="monthDay"
                         align="center"
                         label="月份">
        </el-table-column>
        <el-table-column prop="content"
                         align="center"
                         label="智能建议">
          <template slot-scope="{row}">
            <el-popover placement="right"
                        width="400"
                        trigger="click">
              <span v-html="row.content"></span>
              <el-button slot="reference"
                         size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="createTime"
                         align="center"
                         label="录入时间">
        </el-table-column>

        <el-table-column fixed="right"
                         align="center"
                         label="操作">
          <template slot-scope="scope">
            <el-button @click="updateClick(scope.row)"
                       type="text"
                       size="small">编辑
            </el-button>
            <el-button @click="getAnswerAi(scope.row)"
                       v-if="!scope.row.content"
                       type="text"
                       size="small">AI分析
            </el-button>
            <el-button type="text"
                       size="small"
                       @click="delClick(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0"
                  :total="total"
                  :page.sync="listQueryParam.current"
                  :limit.sync="listQueryParam.pageSize"
                  @pagination="getTableDataList" />
    </el-card>
    <!-- 添加或修改对话框 -->
    <el-dialog :title="dialogTitle"
               :visible.sync="addOrUpdateDialogVisible"
               width="20%"
               :before-close="handleClose">
      <el-form :model="formData"
               :rules="rules"
               ref="formData"
               label-width="100px">
        <el-form-item label="学生"
                      prop="stuId">
          <el-select v-model="formData.stuId"
                     clearable
                     placeholder="请选择学生">
            <el-option v-for="item in stuIdOptions"
                       :key="item.key"
                       :label="item.value"
                       :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身高"
                      prop="height">
          <el-input-number v-model="formData.height"
                           :precision="2"
                           :step="0.1"
                           :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="体重"
                      prop="weight">
          <el-input-number v-model="formData.weight"
                           :precision="2"
                           :step="0.1"
                           :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="视力"
                      prop="eyesight">
          <el-input v-model="formData.eyesight"></el-input>
        </el-form-item>
        <el-form-item label="脉率"
                      prop="ulseRate">
          <el-input-number v-model="formData.ulseRate"
                           :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="血压"
                      prop="bloodPressure">
          <el-input v-model="formData.bloodPressure"></el-input>
        </el-form-item>
        <el-form-item label="心率"
                      prop="heartRate">
          <el-input-number v-model="formData.heartRate"
                           :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="呼吸"
                      prop="breath">
          <el-input-number v-model="formData.breath"
                           :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="血糖"
                      prop="bloodSugar">
          <el-input-number v-model="formData.bloodSugar"
                           :precision="2"
                           :step="0.1"
                           :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="血脂"
                      prop="bloodLipid">
          <el-input-number v-model="formData.bloodLipid"
                           :precision="2"
                           :step="0.1"
                           :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="月份"
                      prop="monthDay">
          <el-date-picker v-model="formData.monthDay"
                          type="month"
                          value-format="yyyy-MM"
                          placeholder="请选择月份" />
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="addOrUpdateDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('formData')">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="excel上传"
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <div>
        <file-upload v-model="excelUrl"
                     :limit="1"></file-upload>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="saveExcel">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getList, insert, update, get, del, getUsersDate, saveNewData, getAnswer } from '@/api/Healthy/index'
import Pagination from '@/components/Pagination'
import { tableUtil } from '@/mixins/table'
import { Message } from 'element-ui'
import uploadImg from '@/components/ImageUpload'
import ImgPreview from '@/components/ImgPreview'
import FileUpload from '@/components/FileUpload'

export default {
  mixins: [tableUtil],
  components: {
    Pagination, uploadImg, ImgPreview, FileUpload
  },
  data () {
    return {
      listQueryParam: {
        current: 1,
        pageSize: 5
      },
      excelUrl: '',
      formData: {},
      rules: {
        stuId: [
          { required: true, message: '请选择学生编号', trigger: 'change' }
        ],
        height: [
          { required: true, message: '请输入身高', trigger: 'blur' }
        ],
        weight: [
          { required: true, message: '请输入体重', trigger: 'blur' }
        ],
        eyesight: [
          { required: true, message: '请输入视力', trigger: 'blur' }
        ],
        ulseRate: [
          { required: true, message: '请输入脉率', trigger: 'blur' }
        ],
        bloodPressure: [
          { required: true, message: '请输入血压', trigger: 'blur' }
        ],
        heartRate: [
          { required: true, message: '请输入心率', trigger: 'blur' }
        ],
        breath: [
          { required: true, message: '请输入呼吸', trigger: 'blur' }
        ],
        bloodSugar: [
          { required: true, message: '请输入血糖', trigger: 'blur' }
        ],
        bloodLipid: [
          { required: true, message: '请输入血脂', trigger: 'blur' }
        ],
        monthDay: [
          { required: true, message: '请输入月份', trigger: 'blur' }
        ]
      },
      stuIdOptions: [],
      dialogVisible: false
    }
  },
  mounted () {
    this.getTableDataList()
    this.getUsersDateList()
  },
  methods: {
    getAnswerAi (row) {
      getAnswer(row.id).then(res => {
        Message.success('Ai处理中，请稍后刷新。。。')
      })
    },
    uploadExcel () {
      this.dialogVisible = true
    },
    saveExcel () {
      if (!this.excelUrl) {
        Message.error('请先上传文件')
        return
      }
      let param = {}
      param.url = this.excelUrl
      saveNewData(param).then((res) => {
        this.excelUrl = ''
        Message.success(res.data)
        this.dialogVisible = false
        this.getTableDataList()
      })
    },
    getTableDataList () {
      getList(this.listQueryParam).then((res) => {
        this.total = res.data.total
        this.tableData = res.data.records
      })
    },
    updateClick (row) {
      this.dialogTitle = '修改'
      get(row.id).then((res) => {
        this.formData = res.data
        this.addOrUpdateDialogVisible = true
      })
    },
    delByIds (ids) {
      del(ids).then((res) => {
        Message.success('删除成功')
        this.getTableDataList()
      })
    },
    saveData () {
      if (this.formData.id) {
        update(this.formData).then((res) => {
          Message.success('修改成功')
          this.addOrUpdateDialogVisible = false
          this.getTableDataList()
        })
      } else {
        insert(this.formData).then((res) => {
          Message.success('添加成功')
          this.addOrUpdateDialogVisible = false
          this.getTableDataList()
        })
      }
    },
    getUsersDateList () {
      getUsersDate().then(res => {
        this.stuIdOptions = res.data
      })
    }
  }
}
</script>
