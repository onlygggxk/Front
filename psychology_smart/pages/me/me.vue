<template>
	<view>
		<userCenterOne :userInfo='userInfo' headImgKey='stuImg' nameKey='stuName'></userCenterOne>	</view>
</template>

<script>
	import indexApi from '@/api/index.js'
	import Util from '@/utils/util.js'
	import {
		loginMix
	} from '@/utils/login-mixins.js'
	var app = getApp();
	export default {
		mixins: [loginMix],
		data() {
			return {
				userInfo: {},	
			}
		},
		onLoad() {},
		onShow() {
			this.checkLogin()
			this.init()
		},
		methods: {
			init() {
				console.log(app.globalData.isLogin)
			},

		}
	}
</script>

<style scope>

</style>
