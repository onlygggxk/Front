<template>
	<view>
		<blueRegisterNext @registerClick='registerClick' label="健康管理小程序"></blueRegisterNext>
	</view>
</template>

<script>
	import loginApi from '@/api/login/loginApi.js'
	import Util from '@/utils/util.js'
	var app = getApp();
	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		onShow() {
			this.init()
		},
		methods: {
			init() {},
			async registerClick(loginForm) {
				let param = {}
				param.stuPhone = loginForm.stuPhone
				let res = await loginApi.usersFindList(param)
				if (res.data.length > 0) {
					Util.showMyToast("当前用户名已注册！")
					return
				}
				loginForm.stuName = "用户-" + loginForm.stuPhone
				loginForm.status = 0
				let res1 = await loginApi.usersSave(loginForm)
				Util.showMyToast("注册成功!")
				setTimeout(() => {
					uni.navigateBack({
						delta: 1
					})
				}, 500)
			}
		}
	}
</script>

<style scope>

</style>
