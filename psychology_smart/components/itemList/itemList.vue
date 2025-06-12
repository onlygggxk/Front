<template>
	<view>
		<view class="item-container" v-for="(item,index) in itemList" :key="index">
			<view>
				<image :src="item[imgUrlProp]">
				</image>
			</view>
			<view class="right-container" @click="rightClick(item)">
				<view class="item-top" v-text="item[nameProp]"></view>
				<!-- <view class="item-center" v-text="item[infoProp]"></view> -->
				<view class="item-bottom" v-text="item[bootomProp]"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "itemList",
		props: {
			itemList: {
				type: Array,
				default: () => []
			},
			imgUrlProp: {
				type: String,
				default: 'imgUrl'
			},
			nameProp: {
				type: String,
				default: 'name'
			},
			infoProp: {
				type: String,
				default: 'info'
			},
			bootomProp: {
				type: String,
				default: 'createTime'
			}
		},
		methods: {
			rightClick(item) {
				this.$emit("itemClick", item)
			}
		}
	}
</script>

<style scoped>
	.item-container {
		display: flex;
		position: relative;
		height: 160rpx;
		padding: 20rpx;
		background-color: white;
		border-radius: 10rpx;
		border-bottom: 1px solid #ebeef5;
	}

	.tag {
		position: absolute;
		top: 10rpx;
		left: 20rpx;
		background-color: red;
		color: white;
		height: 40rpx;
		width: 60rpx;
		opacity: 0.9;
		font-size: 20rpx;
		text-align: center;
		line-height: 40rpx;
		border-radius: 0 0 6rpx 0;
	}

	.item-container image {
		height: 160rpx;
		width: 240rpx;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}

	.right-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
		width: 100%;
	}

	.item-top {
		font-weight: bold;
	}

	.item-center {
		font-size: 26rpx;
		color: #999999;
		margin-top: 4rpx;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		/* 超出几行省略 */
		overflow: hidden;
		height: 100rpx !important;
	}

	.item-bottom {
		font-size: 24rpx;
		color: #999999;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
</style>
