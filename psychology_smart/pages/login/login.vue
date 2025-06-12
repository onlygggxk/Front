<template>
	<view>
		<blueLoginNext @loginClick='loginClick' @registerClick='registerClick' label="健康管理小程序"></blueLoginNext>
	</view>
</template>

<script>
	import loginApi from '@/api/login/loginApi.js'
	import Util from '@/utils/util.js'
	var app = getApp();
	export default {
		methods: {
			async usersFindList(param) {
				let res = await loginApi.usersLogin(param)
				let arr = res.data
				if (arr) {
					let obj = arr
					app.globalData.isLogin = true
					app.globalData.userInfo = obj
					uni.switchTab({
						url: '/pages/index/index'
					})
				} else {
					Util.showMyToast("账号信息不存在或密码有误~")
				}
			},
			loginClick(loginForm) {
				this.usersFindList(loginForm)
			},
			registerClick() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},

		}
	}
</script>

<style scope>

</style>
