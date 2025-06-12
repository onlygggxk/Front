<template>
  <div>
    <el-card shadow="hover">
      <div class="flex-warp">
        <div class="flex-warp-item">
          <div class="flex-warp-item-box">
            <el-input placeholder="请输入题目标题"
                      size="small"
                      suffix-icon="el-icon-search"
                      v-model="listQueryParam.title">
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
                       @click="add">添加
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
        <el-table-column prop="id"
                         align="center"
                         label="题目编号">
        </el-table-column>
        <el-table-column prop="title"
                         align="center"
                         label="题目标题">
        </el-table-column>
        <el-table-column prop="optionA"
                         align="center"
                         label="选项A">
          <template slot-scope="{row}">
            <el-popover
              placement="right"
              width="400"
              trigger="click">
              <span>
                <span style="color: red">回答分数：{{ row.gradeA }}</span>，答案：{{ row.optionA }}</span>
              <el-button slot="reference" size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="optionB"
                         align="center"
                         label="选项B">
          <template slot-scope="{row}">
            <el-popover
              placement="right"
              width="400"
              trigger="click">
              <span> <span style="color: red">回答分数：{{ row.gradeB }}</span>，答案：{{ row.optionB }}</span>
              <el-button slot="reference" size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="optionC"
                         align="center"
                         label="选项C">
          <template slot-scope="{row}">
            <el-popover
              placement="right"
              width="400"
              trigger="click">
              <span> <span style="color: red">回答分数：{{ row.gradeC }}</span>，答案：{{ row.optionC }}</span>
              <el-button slot="reference" size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="optionD"
                         align="center"
                         label="选项D">
          <template slot-scope="{row}">
            <el-popover
              placement="right"
              width="400"
              trigger="click">
              <span> <span style="color: red">回答分数：{{ row.gradeD }}</span>，答案：{{ row.optionD }}</span>
              <el-button slot="reference" size="mini">点击预览</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="createTime"
                         align="center"
                         label="创建时间">
        </el-table-column>
        <el-table-column fixed="right"
                         align="center"
                         label="操作">
          <template slot-scope="scope">
            <el-button @click="updateClick(scope.row)"
                       type="text"
                       size="small">编辑
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
                  @pagination="getTableDataList"/>
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
        <el-form-item label="题目标题"
                      prop="title">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="选项A"
                      prop="optionA">
          <el-input v-model="formData.optionA" type="textarea" :autosize="{ minRows: 6, maxRows: 6}"></el-input>
        </el-form-item>
        <el-form-item label="A选项分数"
                      prop="gradeA">
          <el-input-number v-model="formData.gradeA" :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="选项B"
                      prop="optionB">
          <el-input v-model="formData.optionB" type="textarea" :autosize="{ minRows: 6, maxRows: 6}"></el-input>
        </el-form-item>
        <el-form-item label="B选项分数"
                      prop="gradeB">
          <el-input-number v-model="formData.gradeB" :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="选项C"
                      prop="optionC">
          <el-input v-model="formData.optionC" type="textarea" :autosize="{ minRows: 6, maxRows: 6}"></el-input>
        </el-form-item>
        <el-form-item label="C选项分数"
                      prop="gradeC">
          <el-input-number v-model="formData.gradeC" :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="选项D"
                      prop="optionD">
          <el-input v-model="formData.optionD" type="textarea" :autosize="{ minRows: 6, maxRows: 6}"></el-input>
        </el-form-item>
        <el-form-item label="D选项分数"
                      prop="gradeD">
          <el-input-number v-model="formData.gradeD" :max="1000000"></el-input-number>
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
import {getList, insert, update, get, del} from '@/api/Questions/index'
import Pagination from '@/components/Pagination'
import {tableUtil} from '@/mixins/table';
import {Message} from 'element-ui';

export default {
  mixins: [tableUtil],
  components: {
    Pagination
  },
  data() {
    return {
      listQueryParam: {
        current: 1,
        pageSize: 5,
      },
      formData: {},
      rules: {
        title: [
          {required: true, message: '请输入题目标题', trigger: 'blur'}
        ],
        optionA: [
          {required: true, message: '请输入选项A', trigger: 'blur'}
        ],
        optionB: [
          {required: true, message: '请输入选项B', trigger: 'blur'}
        ],
        optionC: [
          {required: true, message: '请输入选项C', trigger: 'blur'}
        ],
        optionD: [
          {required: true, message: '请输入选项D', trigger: 'blur'}
        ],

        gradeA: [
          {required: true, message: '请输入A选项分数', trigger: 'blur'}
        ],
        gradeB: [
          {required: true, message: '请输入B选项分数', trigger: 'blur'}
        ],
        gradeC: [
          {required: true, message: '请输入C选项分数', trigger: 'blur'}
        ], gradeD: [
          {required: true, message: '请输入D选项分数', trigger: 'blur'}
        ],

        teacherId: [
          {required: true, message: '请输入老师编号', trigger: 'blur'}
        ]
      }
    };
  },
  mounted() {
    this.getTableDataList()
  },
  methods: {
    getTableDataList() {
      this.listQueryParam.teacherId = localStorage.getItem('teaId')
      getList(this.listQueryParam).then((res) => {
        this.total = res.data.total;
        this.tableData = res.data.records;
      });
    },
    updateClick(row) {
      this.dialogTitle = '修改';
      get(row.id).then((res) => {
        this.formData = res.data;
        this.addOrUpdateDialogVisible = true;
      });
    },
    delByIds(ids) {
      del(ids).then((res) => {
        Message.success('删除成功');
        this.getTableDataList();
      });
    },
    saveData() {
      this.formData.teacherId = localStorage.getItem('teaId')
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
    }
  },
};
</script>
