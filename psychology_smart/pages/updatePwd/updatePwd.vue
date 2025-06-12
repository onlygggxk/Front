<template>
	<view>
		<view>
			<anchorLine leftText="密码修改" leftEnglish="content"></anchorLine>
			<view style="padding: 40rpx;">
				<u--form labelWidth="80">
					<u-form-item label="旧密码" borderBottom>
						<u--input v-model="userInfoFrom.password" border="none"></u--input>
					</u-form-item>
					<u-form-item label="新密码" borderBottom>
						<u--input v-model="userInfoFrom.newPassword" border="none"></u--input>
					</u-form-item>
					<u-form-item label="重复新密码" borderBottom>
						<u--input v-model="userInfoFrom.newPasswordAgain" border="none"></u--input>
					</u-form-item>
				</u--form>
				<view style="margin-top: 20rpx;">
					<u-button text="确认修改" type="success" @click="saveMessage"></u-button>
				</view>
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
			};
		},
		onShow() {
			//this.checkLogin()
		},
		methods: {
			async saveMessage() {
				if (this.userInfoFrom.password != this.userInfo.password) {
					Util.showMyToast("旧密码不一致")
					return
				}
				if (!this.userInfoFrom.newPassword) {
					Util.showMyToast("请输入新密码")
					return
				}
				if (!this.userInfoFrom.newPasswordAgain) {
					Util.showMyToast("请再次输入新密码")
					return
				}
				if (this.userInfoFrom.newPasswordAgain != this.userInfoFrom.newPassword) {
					Util.showMyToast("两次密码不一致")
					return
				}
				let param = {}
				param.id = this.userInfo.id
				param.password = this.userInfoFrom.newPassword
				let res = await loginApi.usersSave(param)
				app.globalData.userInfo.password = this.userInfoFrom.newPassword
				Util.showMyToast("修改成功，下次登录生效")
				setTimeout(()=>{
					uni.navigateBack({
						delta: 1
					})
				},1000)

			}
		}
	}
</script>

<style>

</style>
