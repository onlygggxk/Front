<template>
  <div>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <h2>个人信息</h2>
          </div>
          <el-form :model="formData"
                   :rules="rules"
                   ref="formData"
                   label-width="100px"
          >
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
            <el-form-item label="头像"
                          prop="teaImg"
            >
              <uploadImg v-model="formData.teaImg"></uploadImg>
            </el-form-item>
          </el-form>
          <div style="display: flex;flex-direction: row-reverse">
            <el-button type="primary"
                       @click="submitForm('formData')"
            >确 定
            </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <h2>修改密码</h2>
          </div>

          <el-form :model="formData"
                   :rules="rules"
                   ref="formData1"
                   label-width="100px"
          >

            <el-form-item label="旧密码"
                          prop="prevPwd"
            >
              <el-input type="password" show-password v-model="formData.prevPwd"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          prop="newPwd"
            >
              <el-input type="password" show-password v-model="formData.newPwd"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          prop="againPwd"
            >
              <el-input type="password" show-password v-model="formData.againPwd"></el-input>
            </el-form-item>
          </el-form>
          <div style="display: flex;flex-direction: row-reverse">
            <el-button type="primary"
                       @click="updatePwd('formData1')"
            >确 定
            </el-button>
          </div>

        </el-card>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import {getList, insert, update, get, del} from '@/api/Teachers/index'
import Pagination from '@/components/Pagination'
import {tableUtil} from '@/mixins/table'
import {Message} from 'element-ui'
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
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        teaName: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        teaAge: [
          {required: true, message: '请输入年龄', trigger: 'blur'}
        ],
        teaSex: [
          {required: true, message: '请输入性别', trigger: 'blur'}
        ],
        teaInfo: [
          {required: true, message: '请输入简介', trigger: 'blur'}
        ],
        teaTel: [
          {required: true, message: '请输入联系方式', trigger: 'blur'}
        ],
        teaImg: [
          {required: true, message: '请上传头像', trigger: 'change'}
        ]
      }
    }
  },
  mounted() {
    this.getTableDataList()
  },
  methods: {

    updatePwd(formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.formData.newPwd != this.formData.againPwd) {
            Message.warning('两次密码输入不一致')
            return
          }
          if (this.formData.password != this.formData.prevPwd) {
            Message.warning('旧密码输入不一致')
            return
          }
          let param = {}
          param.id = this.formData.id
          param.password = this.formData.newPwd

          update(param).then(res => {
            Message.success('密码修改成功')
            this.formData.password = this.formData.newPwd
            this.formData.prevPwd = ''
            this.formData.newPwd = ''
            this.formData.againPwd = ''

          })
          console.log(this.formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getTableDataList() {
      this.listQueryParam.id = localStorage.getItem('teaId')
      getList(this.listQueryParam).then((res) => {
        this.formData = res.data.records[0]
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
