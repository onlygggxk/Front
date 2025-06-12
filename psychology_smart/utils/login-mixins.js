export const loginMix = {
	data() {
		return {
			isLogin: false,
			userInfo: {}
		}
	},
	onShow() {
		let app = getApp()
		this.isLogin = app.globalData.isLogin
		this.userInfo = app.globalData.userInfo
	},
	methods: {
		checkLogin() {
			if (!this.isLogin) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}

}
