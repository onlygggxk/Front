<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-warp">
                <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入名称"
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
                       @click="search">搜索 </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="primary"
                       size="small"
                       icon="el-icon-refresh-right"
                       @click="refresh">刷新 </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="success"
                       size="small"
                       icon="el-icon-plus"
                       @click="add">添加 </el-button>
          </div>
        </div>

        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-button type="danger"
                       size="small"
                       icon="el-icon-folder-delete"
                       @click="batchDel">删除 </el-button>
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
        <el-table-column prop="id"
                         align="center"
                         label="管理员编号">
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="名称">
        </el-table-column>
        <el-table-column prop="photoImg"
                         align="center"
                         label="图片">
          <template slot-scope="scope">
            <ImgPreview :src="scope.row.photoImg"></ImgPreview>
          </template>
        </el-table-column>
        <el-table-column prop="userName"
                         align="center"
                         label="用户名">
        </el-table-column>
        <el-table-column prop="passWord"
                         align="center"
                         label="密码">
        </el-table-column>
        <el-table-column fixed="right"
                         align="center"
                         label="操作">
          <template slot-scope="scope">
            <el-button @click="updateClick(scope.row)"
                       type="text"
                       size="small">编辑</el-button>
            <el-button type="text"
                       size="small"
                       @click="delClick(scope.row)">删除</el-button>
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
               width="40%"
               :before-close="handleClose">
      <el-form :model="formData"
               :rules="rules"
               ref="formData"
               label-width="100px">
          <el-form-item label="名称"
                        prop="name">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="图片"
                        prop="photoImg">
            <uploadImg v-model="formData.photoImg"></uploadImg>
          </el-form-item>
          <el-form-item label="用户名"
                        prop="userName">
            <el-input v-model="formData.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="passWord">
            <el-input v-model="formData.passWord"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="addOrUpdateDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('formData')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getList, insert, update, get, del} from '@/api/Manage/index'
import Pagination from '@/components/Pagination'
import { tableUtil } from '@/mixins/table';
import { Message } from 'element-ui';
import uploadImg from '@/components/ImageUpload'
import ImgPreview from '@/components/ImgPreview'
export default {
  mixins: [tableUtil],
  components: {
    Pagination,uploadImg,ImgPreview
  },
  data () {
    return {
      listQueryParam: {
        current: 1,
        pageSize: 5,
      },
      formData: {},
      rules: {
          userName: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          passWord: [
              { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          photoImg: [
              { required: true, message: '请输入图片', trigger: 'blur' }
          ],
          name: [
              { required: true, message: '请输入名称', trigger: 'blur' }
          ]
      }    };
  },
  mounted () {
    this.getTableDataList()
  },
  methods: {
    getTableDataList () {
      getList(this.listQueryParam).then((res) => {
        this.total = res.data.total;
        this.tableData = res.data.records;
      });
    },
    updateClick (row) {
      this.dialogTitle = '修改';
      get(row.id).then((res) => {
        this.formData = res.data;
        this.addOrUpdateDialogVisible = true;
      });
    },
    delByIds (ids) {
      del(ids).then((res) => {
        Message.success('删除成功');
        this.getTableDataList();
      });
    },
    saveData () {
      if (this.formData.id) {
        update(this.formData).then((res) => {
          Message.success('修改成功');
          this.addOrUpdateDialogVisible = false;
          this.getTableDataList();
        });
      } else {
        insert(this.formData).then((res) => {
          Message.success('添加成功');
          this.addOrUpdateDialogVisible = false;
          this.getTableDataList();
        });
      }
    }  },
};
</script>
