<!-- 蓝色登录页面2 -->
<template>
	<view>
		<view class="img-a">
			<view class="t-b">
				您好，
				<br />
				欢迎使用{{label}}
			</view>
		</view>
		<view class="login-view" style="">
			<view class="t-login">
				<form class="cl">
					<view class="t-a">
						<text class="txt">手机号</text>
						<input type="number" name="username" placeholder="请输入您的手机号" maxlength="11" v-model="username" />
					</view>
					<view class="t-a">
						<text class="txt">密码</text>
						<input type="password" name="password" maxlength="18" placeholder="请输入您的密码"
							v-model="password" />
					</view>
					<button @tap="login()">登 录</button>
					<view class="reg" @tap="reg()">注 册</view>
				</form>
				<view class="t-f"><text>—————— 第三方账号登录 ——————</text></view>
				<view class="t-e cl">
					<view class="t-g">
						<image
							src="https://code-grade-server-prd.oss-cn-shenzhen.aliyuncs.com/2023-03-21/f8a9b366-77e8-4295-8857-569eaff552cf_wx.png">
						</image>
					</view>
					<view class="t-g">
						<image
							src="https://code-grade-server-prd.oss-cn-shenzhen.aliyuncs.com/2023-03-21/ac65d9bd-6a1e-4229-8797-79dafeec5981_qq.png">
						</image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'blueLoginNext',
		data() {
			return {
				username: '10086',
				password: 'azhou'
			};
		},
		props: {
			label: {
				type: String,
				default: 'XXX'
			}
		},
		methods: {
			//当前登录按钮操作
			login() {
				var that = this;
				if (!that.username) {
					uni.showToast({
						title: '请输入您的手机号',
						icon: 'none'
					});
					return;
				}
				if (!that.password) {
					uni.showToast({
						title: '请输入您的密码',
						icon: 'none'
					});
					return;
				}
				let param = {}
				param.stuPhone = this.username
				param.password = this.password
				this.$emit("loginClick", param)
			},
			//注册按钮点击
			reg() {
				this.$emit("registerClick")
			},
		}
	};
</script>
<style>
	.txt {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
	}

	.img-a {
		width: 100%;
		height: 450rpx;
		background-image: url(https://code-grade-server-prd.oss-cn-shenzhen.aliyuncs.com/2023-03-21/625ce5a3-c1f8-4f90-8970-54dd298c6eb5_head.png);
		background-size: 100%;
	}

	.reg {
		font-size: 28rpx;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
		background: #f5f6fa;
		color: #000000;
		text-align: center;
		margin-top: 30rpx;
	}

	.login-view {
		width: 100%;
		position: relative;
		margin-top: -120rpx;
		background-color: #ffffff;
		border-radius: 8% 8% 0% 0;
	}

	.t-login {
		width: 600rpx;
		margin: 0 auto;
		font-size: 28rpx;
		padding-top: 80rpx;
	}

	.t-login button {
		font-size: 28rpx;
		background: #2796f2;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
	}

	.t-login input {
		height: 90rpx;
		line-height: 90rpx;
		margin-bottom: 50rpx;
		border-bottom: 1px solid #e9e9e9;
		font-size: 28rpx;
	}

	.t-login .t-a {
		position: relative;
	}

	.t-b {
		text-align: left;
		font-size: 42rpx;
		color: #ffffff;
		padding: 130rpx 0 0 70rpx;
		font-weight: bold;
		line-height: 70rpx;
	}

	.t-login .t-c {
		position: absolute;
		right: 22rpx;
		top: 22rpx;
		background: #5677fc;
		color: #fff;
		font-size: 24rpx;
		border-radius: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
	}

	.t-login .t-d {
		text-align: center;
		color: #999;
		margin: 80rpx 0;
	}

	.t-login .t-e {
		text-align: center;
		width: 250rpx;
		margin: 80rpx auto 0;
	}

	.t-login .t-g {
		float: left;
		width: 50%;
	}

	.t-login .t-e image {
		width: 50rpx;
		height: 50rpx;
	}

	.t-login .t-f {
		text-align: center;
		margin: 150rpx 0 0 0;
		color: #666;
	}

	.t-login .t-f text {
		margin-left: 20rpx;
		color: #aaaaaa;
		font-size: 27rpx;
	}

	.t-login .uni-input-placeholder {
		color: #aeaeae;
	}

	.cl {
		zoom: 1;
	}

	.cl:after {
		clear: both;
		display: block;
		visibility: hidden;
		height: 0;
		content: '\20';
	}
</style>
