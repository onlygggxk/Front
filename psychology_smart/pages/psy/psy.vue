<template>
	<view>
		<searchOne @searchClick='searchClick' :searchLabel='searchLabel'></searchOne>
		<harpItemList titleKey='title' nextTitle='info' bgKey='img' :dataList='dataList' @itemClick='itemClick'>
		</harpItemList>
	</view>
</template>

<script>
	import indexApi from '@/api/index.js'
	import Util from '@/utils/util.js'
	var app = getApp();
	export default {
		data() {
			return {
				searchLabel: "请输入试卷关键字",
				dataList: [],
				param: {
					title: ''
				}
			}
		},
		onLoad() {},
		onShow() {
			this.init()
		},
		methods: {
			async init() {
				let res = await indexApi.getTestPaper(this.param)
				this.dataList = res.data
			},
			searchClick(keyword) {
				this.param.title = keyword
				this.init()
			},
			itemClick(item) {
				if (!app.globalData.isLogin) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					uni.setStorageSync("title", item.title)
					uni.navigateTo({
						url: '/pages/detail/detail?id=' + item.id
					})
				}

			},

		}
	}
</script>

<style scope>

</style>
