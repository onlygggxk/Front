<template>
	<view>
		<searchOne @searchClick='searchClick' :searchLabel='searchLabel'></searchOne>
		<tabsOne :tabOneList='tabOneList' tabOneKeyName='typeName' @tabsOneClick='tabsOneClick'></tabsOne>
		<anchorLine leftText='健康资讯' leftEnglish='food' @moreClick='moreClick'></anchorLine>
		<itemList :itemList='dataList' nameProp='title' imgUrlProp='bannerImg' infoProp='info' bootomProp='createTime'
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
				tabOneList: [],
				tabOneKeyName: null,
				searchLabel: '请输入标题',
				dataList: [],
				currentTypeId: 0,
				searchName: ''
			}
		},
		onLoad() {},
		onShow() {
			this.init()
		},
		methods: {
			init() {
				this.knowledgeTypeFindList({})
			},

			async knowledgeFindList() {
				let param = {}
				param.title = this.searchName
				param.typeId = this.currentTypeId
				let res = await indexApi.knowledgeFindList(param)
				this.dataList = res.data
			},
			knowledgeTypeFindList(param) {
				indexApi.knowledgeTypeFindList(param).then(res => {
					this.tabOneList = res.data
					this.currentTypeId = res.data[0].id
					this.knowledgeFindList()
				})
			},
			tabsOneClick(item) {
				this.currentTypeId = item.id
				this.knowledgeFindList()
			},
			searchClick(keyword) {
				this.searchName = keyword
				this.knowledgeFindList()
			},
			itemClick(item) {
				console.log(item)
				uni.navigateTo({
					url: '/pages/knowledgeDetail/knowledgeDetail?id=' + item.id
				})
				console.log('事件itemClick的返回值为:', item)
			},
			
		}
	}
</script>

<style scope>

</style>
