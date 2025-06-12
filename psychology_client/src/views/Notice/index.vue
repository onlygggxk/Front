<template>
  <div>
    <el-card shadow="hover" style="margin-bottom: 20px">
      <div class="flex-warp">
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入标题"
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
                         label="公告编号"
        >
        </el-table-column>
        <el-table-column prop="title"
                         align="center"
                         label="标题"
        >
        </el-table-column>
        <el-table-column prop="noticeImg" width="80"
                         align="center"
                         label="封面图片"
        >
          <template slot-scope="scope">
            <ImgPreview :src="scope.row.noticeImg"></ImgPreview>
          </template>
        </el-table-column>
        <el-table-column prop="info"
                         align="center"
                         label="简介"
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
        <el-table-column prop="content"
                         align="center"
                         label="内容"
        >
          <template slot-scope="{row}">
            <el-popover
              placement="right"
              width="800"
              trigger="click"
            >
              <div  style="max-height: 500px;overflow: auto" class="markdown-body" v-html="handleMd(row.content)"></div>
              <el-button slot="reference" size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="status"
                         align="center"
                         label="状态"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.status == '0'">隐藏</span>
            <span v-if="scope.row.status == '1'">正常</span>
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
               width="60%"
               :before-close="handleClose"
    >
      <el-form :model="formData"
               :rules="rules"
               ref="formData"
               label-width="100px"
      >
        <el-form-item label="标题"
                      prop="title"
        >
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="封面图片"
                      prop="noticeImg"
        >
          <uploadImg v-model="formData.noticeImg"></uploadImg>
        </el-form-item>
        <el-form-item label="简介"
                      prop="info"
        >
          <el-input v-model="formData.info" type="textarea" :autosize="{ minRows: 8, maxRows: 8}"></el-input>
        </el-form-item>
        <el-form-item label="内容"
                      prop="content"
        >
          <MarkdownEdit :value="formData.content" v-model="formData.content"></MarkdownEdit>
        </el-form-item>
        <el-form-item label="状态"
                      prop="status"
        >
          <el-radio-group v-model="formData.status">
            <el-radio :label="0">隐藏</el-radio>
            <el-radio :label="1">正常</el-radio>
          </el-radio-group>
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
import { del, get, getList, insert, update } from '@/api/Notice/index'
import Pagination from '@/components/Pagination'
import { tableUtil } from '@/mixins/table'
import { Message } from 'element-ui'
import uploadImg from '@/components/ImageUpload'
import ImgPreview from '@/components/ImgPreview'
import MarkdownEdit from '@/components/MarkdownEdit'
import 'github-markdown-css'

export default {
  mixins: [tableUtil],
  components: {
    Pagination, uploadImg, ImgPreview, MarkdownEdit
  },
  data() {
    return {
      listQueryParam: {
        current: 1,
        pageSize: 5
      },
      formData: {},
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        noticeImg: [
          { required: true, message: '请上传封面图片', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        info: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
    this.getTableDataList()
  },
  methods: {
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
