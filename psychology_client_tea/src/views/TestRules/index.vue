<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-warp">
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入试卷标题"
                      size="small"
                      suffix-icon="el-icon-search"
                      v-model="listQueryParam.title"
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
        <el-table-column prop="id"
                         align="center"
                         label="规则编号"
        >
        </el-table-column>
        <el-table-column prop="title"
                         align="center"
                         label="试卷名称"
        >
        </el-table-column>
        <el-table-column prop="minGrade"
                         align="center"
                         label="最低分数"
        >
        </el-table-column>
        <el-table-column prop="maxGrade"
                         align="center"
                         label="最高分数"
        >
        </el-table-column>
        <el-table-column prop="info"
                         align="center"
                         label="对应结果"
        >
          <template slot-scope="{row}">
            <el-popover
              placement="right"
              width="400"
              trigger="click"
            >
              <span>{{ row.info }}</span>
              <el-button slot="reference" size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="createTime"
                         align="center"
                         label="创建时间"
        >
        </el-table-column>
        <el-table-column fixed="right"
                         align="center"
                         label="操作"
        >
          <template slot-scope="scope">
            <el-button @click="updateClick(scope.row)"
                       type="text"
                       size="small"
            >编辑
            </el-button>
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
        <el-form-item label="最低分数"
                      prop="minGrade"
        >
          <el-input-number v-model="formData.minGrade" :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="最高分数"
                      prop="maxGrade"
        >
          <el-input-number v-model="formData.maxGrade" :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="对应结果"
                      prop="info"
        >
          <el-input v-model="formData.info" type="textarea" :autosize="{ minRows: 8, maxRows: 8}"></el-input>
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
import { getList, insert, update, get, del, getTestPaperDate } from '@/api/TestRules/index'
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
        minGrade: [
          { required: true, message: '请输入最低分数', trigger: 'blur' }
        ],
        maxGrade: [
          { required: true, message: '请输入最高分数', trigger: 'blur' }
        ],
        info: [
          { required: true, message: '请输入对应结果', trigger: 'blur' }
        ],
        teaId: [
          { required: true, message: '请输入老师编号', trigger: 'blur' }
        ]
      },
      testIdOptions: []
    }
  },
  mounted() {
    this.getTableDataList()
    this.getTestPaperDateList(localStorage.getItem('teaId'))
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
    }
  }
}
</script>
