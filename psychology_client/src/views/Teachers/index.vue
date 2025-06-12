<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-warp">
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入姓名"
                      size="small"
                      suffix-icon="el-icon-search"
                      v-model="listQueryParam.teaName"
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
                         label="教师编号"
        >
        </el-table-column>

        <el-table-column prop="teaName"
                         align="center"
                         label="姓名"
        >
        </el-table-column>
        <el-table-column prop="teaImg"
                         align="center"
                         label="照片"
        >
          <template slot-scope="scope">
            <ImgPreview :src="scope.row.teaImg"></ImgPreview>
          </template>
        </el-table-column>
        <el-table-column prop="teaAge"
                         align="center"
                         label="年龄"
        >
        </el-table-column>
        <el-table-column prop="teaSex"
                         align="center"
                         label="性别"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.teaSex == 0">男</span>
            <span v-if="scope.row.teaSex == 1">女</span>
          </template>
        </el-table-column>
        <el-table-column prop="teaInfo"
                         align="center"
                         label="简介"
        >
          <template slot-scope="{row}">
            <el-popover
              placement="right"
              width="400"
              trigger="click"
            >
              <span>{{ row.teaInfo }}</span>
              <el-button slot="reference" size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="teaTel"
                         align="center"
                         label="联系方式"
        >
        </el-table-column>
        <el-table-column prop="mail"
                         align="center"
                         label="邮箱"
        >
        </el-table-column>
        <el-table-column prop="username"
                         align="center"
                         label="账号"
        >
        </el-table-column>
        <el-table-column prop="password"
                         align="center"
                         label="密码"
        >
        </el-table-column>


        <el-table-column prop="status"
                         align="center"
                         label="账号状态"
        >
          <template slot-scope="{row}">
            <el-tag type="primary" v-if="row.status == 0">待审核</el-tag>
            <el-tag type="success" v-if="row.status == 1">正常</el-tag>
            <el-tag type="danger" v-if="row.status == 2">冻结</el-tag>
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
            <el-button @click="updateStatus(scope.row,1)" v-if="scope.row.status == 0"
                       type="text"
                       size="small"
            >审核通过
            </el-button>
            <el-button @click="updateStatus(scope.row,2)" v-if="scope.row.status == 1"
                       type="text"
                       size="small"
            >冻结
            </el-button>
            <el-button @click="updateStatus(scope.row,1)" v-if="scope.row.status == 2"
                       type="text"
                       size="small"
            >启用
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
        <el-form-item label="账号"
                      prop="username"
        >
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password"
        >
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="姓名"
                      prop="teaName"
        >
          <el-input v-model="formData.teaName"></el-input>
        </el-form-item>
        <el-form-item label="年龄"
                      prop="teaAge"
        >
          <el-input-number v-model="formData.teaAge" :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="性别"
                      prop="teaSex"
        >
          <el-radio-group v-model="formData.teaSex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="简介"
                      prop="teaInfo"
        >
          <el-input v-model="formData.teaInfo" type="textarea" :autosize="{ minRows: 8, maxRows: 8}"></el-input>
        </el-form-item>
        <el-form-item label="联系方式"
                      prop="teaTel"
        >
          <el-input v-model="formData.teaTel"></el-input>
        </el-form-item>
        <el-form-item label="qq邮箱"
                      prop="mail"
        >
          <el-input v-model="formData.mail"></el-input>
        </el-form-item>
        <el-form-item label="照片"
                      prop="teaImg"
        >
          <uploadImg v-model="formData.teaImg"></uploadImg>
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
import { getList, insert, update, get, del } from '@/api/Teachers/index'
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
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        teaName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        teaAge: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        teaSex: [
          { required: true, message: '请输入性别', trigger: 'blur' }
        ],
        teaInfo: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ],
        teaTel: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        teaImg: [
          { required: true, message: '请上传头像', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
    this.getTableDataList()
  },
  methods: {
    updateStatus(row, status) {
      let param = {}
      param.id = row.id
      param.status = status
      update(param).then(res => {
        Message.success('操作成功')
        this.getTableDataList()
      })
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
