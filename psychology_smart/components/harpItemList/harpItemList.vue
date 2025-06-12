<template>
	<view class="container">
		<view class="item-container" v-for="(item,index) in dataList" :key="index" @click="itemClick(item)">
			<image :src="item[bgKey]"></image>
			<view class="title">{{item[titleKey]}}</view>
			<view class="next-title">{{item[nextTitle]}}</view>
		</view>
	</view>
</template>

<script>
	// 竖型展示组件
	export default {
		name: "harpItemList",
		props: {
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
				default: 'img'
			},
			dataList: {
				type: Array,
				default: () => [{
						title: '记住这些关键词 识破五类高发诈骗',
						img: 'http://localhost:8092/file/dfcbb097-d394-4d22-815e-cb3c21745ad7.jpg',
						nextTitle: '	为市民朋友提供防骗技巧。'
					},
					{
						title: '记住这些关键词 识破五类高发诈骗',
						img: 'http://localhost:8092/file/dfcbb097-d394-4d22-815e-cb3c21745ad7.jpg',
						nextTitle: '	为市民朋友提供防骗技巧。'
					},
					{
						title: '记住这些关键词 识破五类高发诈骗识破五类高发诈骗识破五类高发诈骗',
						img: 'http://localhost:8092/file/dfcbb097-d394-4d22-815e-cb3c21745ad7.jpg',
						nextTitle: '	为市民朋友提供防骗技巧。'
					}
				]
			},
		},
		data() {
			return {

			};
		},
		methods: {
			itemClick(item) {
				this.$emit("itemClick", item)
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 40rpx;
	}

	.container view {
		margin-bottom: 40rpx;
	}

	.item-container {
		position: relative;
		height: 330rpx;
		width: calc(100vw - 80rpx);
		border-radius: 20rpx;
		color: white;
	}

	.item-container image {
		height: 330rpx;
		width: 100%;
		border-radius: 20rpx;
	}

	.title {
		font-size: 40rpx;
		color: white;
		font-weight: bold;
		position: absolute;
		top: 26%;
		left: 3%;
		width: 95%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.next-title {
		font-size: 24rpx;
		color: white;
		position: absolute;
		top: 50%;
		left: 3%;
		width: 95%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
