<template>
	<view class="container">
		<view class="article-container">
			<view class="title">{{detail[titleKey]}}</view>
			<view class="next-title">{{detail[nextTitle]}}</view>
			<view class="create-time">{{detail.createTime}}</view>
			<image :src="detail[bgKey]"></image>
			<view class="content">
				<markdownParse :resource="detail[contentKey]"></markdownParse>
			</view>
		</view>
	</view>
</template>

<script>
	import markdownParse from '@/uni/markdownParse/index.vue'
	// 文章类展示组件
	export default {
		name: "articleInfo",
		components: {
			markdownParse
		},
		props: {
			detail: {
				type: Object,
				default: () => {}
			},
			titleKey: {
				type: String,
				default: 'title'
			},
			nextTitle: {
				type: String,
				default: 'info'
			},
			bgKey: {
				type: String,
				default: 'noticeImg'
			},
			contentKey: {
				type: String,
				default: 'content'
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 40rpx;
	}

	.article-container {
		width: calc(100vw - 80rpx);
	}

	.title {
		font-size: 38rpx;
		font-weight: bold;
		color: black;
		margin-bottom: 20rpx;
	}

	.next-title {
		font-size: 26rpx;
		color: #999999;
		margin-bottom: 20rpx;
	}

	.create-time {
		font-size: 22rpx;
		color: #999999;
		margin-bottom: 20rpx;
	}

	.container image {
		height: 300rpx;
		width: 100%;
		text-align: center;
		margin: 20rpx 0;
		border-radius: 20rpx;
	}
</style>