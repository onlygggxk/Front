<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-warp">
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入学生姓名"
                      size="small"
                      suffix-icon="el-icon-search"
                      v-model="listQueryParam.stuName"
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
                         label="学生编号"
        >
        </el-table-column>
        <el-table-column prop="stuImg"
                         align="center"
                         label="照片"
        >
          <template slot-scope="scope">
            <ImgPreview :src="scope.row.stuImg"></ImgPreview>
          </template>
        </el-table-column>
        <el-table-column prop="stuName"
                         align="center"
                         label="学生姓名"
        >
        </el-table-column>
        <el-table-column prop="stuAge"
                         align="center"
                         label="年龄"
        >
        </el-table-column>
        <el-table-column prop="stuSex"
                         align="center"
                         label="性别"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.stuSex == 0">男</span>
            <span v-if="scope.row.stuSex == 1">女</span>
          </template>
        </el-table-column>
        <el-table-column prop="stuPhone"
                         align="center"
                         label="联系方式"
        >
        </el-table-column>
        <el-table-column prop="stuAddress"
                         align="center"
                         label="家庭住址"
        >
        </el-table-column>
        <el-table-column prop="stuClassNum"
                         align="center"
                         label="所属班级"
        >
        </el-table-column>


        <el-table-column fixed="right"
                         align="center"
                         label="操作"
        >
          <template slot-scope="scope">
            <el-button @click="clickEcharts(scope.row)"
                       type="text"
                       size="small"
            >健康数据查看
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


    <el-dialog title="健康数据分析" :visible.sync="showEcharts" width="40%" :before-close="handleClose"
               :fullscreen="true"
    >

      <studentEcharts :student-id="currentId"></studentEcharts>
      <span slot="footer"
            class="dialog-footer"
      >
        <el-button @click="showEcharts = false">关闭</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
import { getList, insert, update, get, del } from '@/api/Student/index'
import Pagination from '@/components/Pagination'
import { tableUtil } from '@/mixins/table'
import { Message } from 'element-ui'
import uploadImg from '@/components/ImageUpload'
import ImgPreview from '@/components/ImgPreview'
import studentEcharts from '@/views/studentEcharts/index.vue'

export default {
  mixins: [tableUtil],
  components: {
    Pagination, uploadImg, ImgPreview, studentEcharts
  },
  data() {
    return {
      listQueryParam: {
        current: 1,
        pageSize: 5
      },
      showEcharts: false,
      currentId: 0,
      formData: {},
      rules: {
        stuName: [
          { required: true, message: '请输入学生姓名', trigger: 'blur' }
        ],
        stuAge: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        stuSex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        stuPhone: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        stuAddress: [
          { required: true, message: '请输入家庭住址', trigger: 'blur' }
        ],
        stuClassNum: [
          { required: true, message: '请输入所属班级', trigger: 'blur' }
        ],
        stuImg: [
          { required: true, message: '请上传照片', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.getTableDataList()
  },
  methods: {
    clickEcharts(row) {
      this.currentId = row.id
      this.showEcharts = true
    },
    getTableDataList() {
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
    }
  }
}
</script>
