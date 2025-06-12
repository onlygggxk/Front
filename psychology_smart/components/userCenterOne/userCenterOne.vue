<template>
	<view class="container">
		<image class="header-img" :src="userInfo[headImgKey]"></image>
		<view class="btn-text">{{userInfo[nameKey]}}</view>
		<view class="info-container">
			<view class="item" v-for="(item,index) in menuList" :key="index" @click="itemClick(item)">
				<image :src="item.img"></image>
				<view class="left-title">{{item.title}}</view>
				<view style="flex: 1;"></view>
				<view>
					<u-icon name="arrow-right" color="#13227A" size="15"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var app = getApp()
	export default {
		props: {
			userInfo: {
				type: Object,
				default: () => {}
			},
			headImgKey: {
				type: String,
				default: 'headImg'
			},
			nameKey: {
				type: String,
				default: 'name'
			}
		},
		name: "userCenter",
		data() {
			return {
				menuList: [{
					title: '个人信息',
					img: '../../static/info.png',
					id: 0
				}, {
					title: '测试记录',
					img: '../../static/records.png',
					id: 1
				},{
					title: '修改密码',
					img: '../../static/uppwd.png',
					id: 3
				}, {
					title: '退出登录',
					img: '../../static/exit.png',
					id: 2
				}]
			};
		},
		methods: {
			itemClick(item) {
				let id = item.id
				if (id == 0) {
					uni.navigateTo({
						url: '/pages/updateInfo/updateInfo'
					})
				} else if (id == 1) {
					uni.navigateTo({
						url: '/pages/records/records'
					})
				}else if (id == 3) {
					uni.navigateTo({
						url: '/pages/updatePwd/updatePwd'
					})
				} else {
					app.globalData.isLogin = false
					app.globalData.userInfo = null
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		background-image: url(https://code-grade-server-prd.oss-cn-shenzhen.aliyuncs.com/2025-02-14/c4737c85-70d8-4e4e-83f2-af53a0cd0d07_msxcxuserbg.png);
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.header-img {
		height: 150rpx;
		width: 150rpx;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 10%;
		margin-left: -75rpx;
	}

	.btn-text {
		color: white;
		font-weight: 500;
		width: 100%;
		text-align: center;
		position: absolute;
		top: 25%;
	}

	.info-container {
		position: absolute;
		height: 60vh;
		bottom: 0;
		width: calc(100vw - 80rpx);
		padding: 40rpx;
		background-color: white;
		border-radius: 40rpx 40rpx 0 0;
	}

	.item {
		display: flex;
		height: 80rpx;
		width: 100%;
		align-items: center;
		font-size: 30rpx;
		border-bottom: 1px solid #eaecef;
	}

	.item image {
		height: 40rpx;
		width: 40rpx;
	}

	.left-title {
		margin-left: 10rpx;
	}
</style>
