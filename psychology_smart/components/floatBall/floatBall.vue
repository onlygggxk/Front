<template>
	<view class="floating-ball" @click="handleClick">
		<view class="floating-ball-inner">
			<u-icon name="plus"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: "floatBall",
		data() {
			return {

			};
		},
		methods: {
			handleClick() {
				this.$emit("click")
			},
		}
	}
</script>

<style scoped>
	.floating-ball {
		position: fixed;
		right: 40rpx;
		bottom: 120rpx;
		width: 100rpx;
		height: 100rpx;
		background-color: #ffffff;
		border-radius: 50%;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* 悬浮球内部内容样式 */
	.floating-ball-inner {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		font-size: 32rpx;
	}
</style>
