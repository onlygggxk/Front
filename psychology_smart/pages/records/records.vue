<template>
	<view>
		<u-collapse>
			<u-collapse-item v-for="(item,index) in recordsList" :key="index" :title="item.title" :name="item.id">
				<view class="item">试卷名称：{{item.title}}</view>
				<view class="item">得分：{{item.grade}}</view>
				<view class="item">测试时间：{{item.createTime}}</view>
				<view class="item">测试结果：{{item.info}}</view>
			</u-collapse-item>
			
		</u-collapse>
	</view>
</template>

<script>
	import indexApi from '@/api/index.js'
	import Util from '@/utils/util.js'
	import {
		loginMix
	} from '@/utils/login-mixins.js'
	var app = getApp();
	export default {
		mixins: [loginMix],
		data() {
			return {
				userInfo: {},
				recordsList: []
			}
		},
		onLoad() {},
		onShow() {
			this.checkLogin()
			this.init()
		},
		methods: {
			async init() {
				let res = await indexApi.records({
					stuId: this.userInfo.id
				})
				this.recordsList = res.data
			},
		}
	}
</script>

<style scoped>
.item{
	margin: 6px 0;
}
</style>
