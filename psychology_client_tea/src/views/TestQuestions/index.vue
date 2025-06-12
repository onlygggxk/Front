<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-warp">
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入题目标题"
                      size="small"
                      suffix-icon="el-icon-search"
                      v-model="listQueryParam.title"
            >
            </el-input>
          </div>
        </div>
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入试卷标题"
                      size="small"
                      suffix-icon="el-icon-search"
                      v-model="listQueryParam.testTitle"
            >
            </el-input>
          </div>
        </div>
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button size="small"
                       icon="el-icon-search"
                       @click="search"
            >搜索
            </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="primary"
                       size="small"
                       icon="el-icon-refresh-right"
                       @click="refresh"
            >刷新
            </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="success"
                       size="small"
                       icon="el-icon-plus"
                       @click="add"
            >添加
            </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="danger"
                       size="small"
                       icon="el-icon-folder-delete"
                       @click="batchDel"
            >删除
            </el-button>
          </div>
        </div>
      </div>
    </el-card>
    <el-card shadow="hover"
             class="mt15"
    >
      <el-table :data="tableData"
                stripe
                ref="multipleTable"
                @selection-change="handleSelectionChange"
                style="width: 100%"
      >
        <el-table-column type="selection"
                         width="55"
        >
        </el-table-column>
        <el-table-column prop="testTitle"
                         align="center"
                         label="试卷名称"
        >
        </el-table-column>
        <el-table-column prop="questionId"
                         align="center"
                         label="题目编号"
        >
        </el-table-column>
        <el-table-column prop="title"
                         align="center"
                         label="题目名称"
        >
        </el-table-column>

        <el-table-column fixed="right"
                         align="center"
                         label="操作"
        >
          <template slot-scope="scope">
            <el-button type="text"
                       size="small"
                       @click="delClick(scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0"
                  :total="total"
                  :page.sync="listQueryParam.current"
                  :limit.sync="listQueryParam.pageSize"
                  @pagination="getTableDataList"
      />
    </el-card>
    <!-- 添加或修改对话框 -->
    <el-dialog :title="dialogTitle"
               :visible.sync="addOrUpdateDialogVisible"
               width="40%"
               :before-close="handleClose"
    >
      <el-form :model="formData"
               :rules="rules"
               ref="formData"
               label-width="100px"
      >
        <el-form-item label="所属试卷"
                      prop="testId"
        >
          <el-select v-model="formData.testId" clearable placeholder="请选择所属试卷">
            <el-option
              v-for="item in testIdOptions"
              :key="item.key"
              :label="item.value"
              :value="item.key"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="题目编号"
                      prop="questionId"
        >
          <el-select v-model="formData.questionId" clearable placeholder="请选择题目编号">
            <el-option
              v-for="item in questionIdOptions"
              :key="item.key"
              :label="item.value"
              :value="item.key"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer"
      >
        <el-button @click="addOrUpdateDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('formData')"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getList, insert, update, get, del, getTestPaperDate, getQuestionsDate } from '@/api/TestQuestions/index'
import Pagination from '@/components/Pagination'
import { tableUtil } from '@/mixins/table'
import { Message } from 'element-ui'
import uploadImg from '@/components/ImageUpload'
import ImgPreview from '@/components/ImgPreview'

export default {
  mixins: [tableUtil],
  components: {
    Pagination, uploadImg, ImgPreview
  },
  data() {
    return {
      listQueryParam: {
        current: 1,
        pageSize: 5
      },
      formData: {},
      rules: {
        testId: [
          { required: true, message: '请选择所属试卷', trigger: 'change' }
        ],
        questionId: [
          { required: true, message: '请选择题目编号', trigger: 'change' }
        ],
        teaId: [
          { required: true, message: '请输入老师编号', trigger: 'blur' }
        ]
      },
      testIdOptions: [],
      questionIdOptions: []
    }
  },
  mounted() {
    this.getTableDataList()
    console.log(localStorage.getItem('teaId'))
    this.getTestPaperDateList(localStorage.getItem('teaId'))
    this.getQuestionsDateList(localStorage.getItem('teaId'))
  },
  methods: {
    getTableDataList() {
      this.listQueryParam.teaId = localStorage.getItem('teaId')
      getList(this.listQueryParam).then((res) => {
        this.total = res.data.total
        this.tableData = res.data.records
      })
    },
    updateClick(row) {
      this.dialogTitle = '修改'
      get(row.id).then((res) => {
        this.formData = res.data
        this.addOrUpdateDialogVisible = true
      })
    },
    delByIds(ids) {
      del(ids).then((res) => {
        Message.success('删除成功')
        this.getTableDataList()
      })
    },
    saveData() {
      this.formData.teaId = localStorage.getItem('teaId')
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
    getTestPaperDateList(id) {
      getTestPaperDate(id).then(res => {
        this.testIdOptions = res.data
      })
    },
    getQuestionsDateList(id) {
      getQuestionsDate(id).then(res => {
        this.questionIdOptions = res.data
      })
    }
  }
}
</script>
