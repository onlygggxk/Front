<template>
	<view>
		<view>
			<anchorLine leftText="个人信息修改" leftEnglish="content"></anchorLine>
			<view style="padding: 40rpx;">
				<u--form labelWidth="80">
					<u-form-item label="姓名" borderBottom>
						<u--input v-model="userInfoFrom.stuName" border="none"></u--input>
					</u-form-item>
					<u-form-item label="性别" borderBottom>
						<u-radio-group v-model="userInfoFrom.stuSex" @change="groupChange">
							<u-radio v-for="(item, index) in radiolist1" :customStyle="{marginRight: '8px'}"
								:key="index" :label="item.name" :name="item.id" @change="radioChange">
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="年龄" borderBottom>
						<u--input v-model="userInfoFrom.stuAge" border="none"></u--input>
					</u-form-item>
					<u-form-item label="联系方式" borderBottom>
						<u--input v-model="userInfoFrom.stuPhone" border="none"></u--input>
					</u-form-item>
					<u-form-item label="家庭住址">
						<u--textarea v-model="userInfoFrom.stuAddress" placeholder="家庭住址~"></u--textarea>
					</u-form-item>
				</u--form>
				<imgUpload :limit="1" label="个人头像" v-model="userInfoFrom.stuImg"></imgUpload>
				<view style="margin-top: 20rpx;">
					<u-button text="确认修改" type="success" @click="saveMessage"></u-button>
				</view>
				<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" description="如果选择保密会报错"
					@close="showSex = false" @select="sexSelect">
				</u-action-sheet>
			</view>
		</view>
	</view>
</template>

<script>
	import Util from '@/utils/util.js'
	import loginApi from '@/api/login/loginApi.js'
	import {
		loginMix
	} from '@/utils/login-mixins.js'
	var app = getApp();
	export default {
		mixins: [loginMix],
		data() {
			return {
				userInfoFrom: {},
				show: false,
				radiolist1: [{
						name: '男',
						id: 0
					},
					{
						name: '女',
						id: 1
					}
				],

			};
		},
		onShow() {
			//this.checkLogin()
			this.userInfoFrom = this.userInfo
		},
		methods: {
			radioChange(n) {
				console.log('radioChange', n);
			},
			async saveMessage() {
				console.log(this.userInfoFrom)
				let res = await loginApi.usersSave(this.userInfoFrom)
				app.globalData.userInfo = this.userInfoFrom
				Util.showMyToast("修改成功")
			}
		}
	}
</script>

<style>

</style>
