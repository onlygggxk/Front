<template>
	<view>
		<uviewBanner @bannerClick='bannerClick' :bannerDataList='bannerDataList' imgPropName='noticeImg' height='200'>
		</uviewBanner>
		<anchorLine leftText='健康资讯' leftEnglish='blog' rightText='查看更多' @moreClick='moreClick'></anchorLine>
		<itemList :itemList='itemList' nameProp='title' imgUrlProp='bannerImg' infoProp='info' bootomProp='createTime'
			@itemClick='itemClick'></itemList>
	</view>
</template>

<script>
	import indexApi from '@/api/index.js'
	import Util from '@/utils/util.js'
	var app = getApp();
	export default {
		data() {
			return {
				bannerDataList: [],
				itemList: [],
			}
		},
		onLoad() {},
		onShow() {
			this.init()
		},
		methods: {
			async init() {
				let res = await indexApi.getIndexData(5)
				console.log(res)
				this.itemList = res.data
				let res1 = await indexApi.getNoticeList({
					status: 1
				})
				this.bannerDataList = res1.data
			},
			bannerClick(bannerObj) {
				uni.navigateTo({
					url: '/pages/noticeDetail/noticeDetail?id=' + bannerObj.id
				})
				console.log('事件bannerClick的返回值为:', bannerObj)
			},
			moreClick() {
				uni.switchTab({
					url: '/pages/knowledge/knowledge'
				})
			},
			itemClick(item) {
				uni.navigateTo({
					url: '/pages/knowledgeDetail/knowledgeDetail?id=' + item.id
				})
			},

		}
	}
</script>

<style scope>

</style>
