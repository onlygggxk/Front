<template>
	<view>
		<view style="margin: 20px 20px 0;font-weight: bold;font-size: 40rpx;">{{ title }}</view>
		<view v-for="(item,index) in questionList" :key="index">
			<view style="margin: 20px">
				{{ index + 1 }}. {{ item.title }}
			</view>
			<view style="margin: 0 20px;">
				<u-radio-group v-model="item.userAnswer" placement="column">
					<u-radio :customStyle="{marginBottom: '8px'}" :label="item.optionA" name="A" @change="radioChange">
					</u-radio>
					<u-radio :customStyle="{marginBottom: '8px'}" :label="item.optionB" name="B" @change="radioChange">
					</u-radio>
					<u-radio :customStyle="{marginBottom: '8px'}" :label="item.optionC" name="C" @change="radioChange">
					</u-radio>
					<u-radio :customStyle="{marginBottom: '8px'}" :label="item.optionD" name="D" @change="radioChange">
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<view style="display: flex;align-items: center;width: 100%;padding-bottom: 60rpx;justify-content: center;">
			<view style="width: 80%;text-align: center;margin-top: 20px;">
				<u-button @click="save" type="success" text="提交"></u-button>
			</view>
		</view>
		<u-popup :show="show" @close="close" @open="open" :round="10" mode="bottom">
			<view style="padding: 40rpx;">
				<view style="font-weight: bold;font-size: 38rpx;margin-bottom: 20rpx;">测试结果：</view>
				<text>{{content}}</text>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import indexApi from '@/api/index.js'
	import Util from '@/utils/util.js'
	var app = getApp();
	export default {
		data() {
			return {
				id: 0,
				title: '',
				questionList: [],
				show: false,
				content: ''
			}
		},
		onLoad(param) {
			this.id = param.id
			this.title = uni.getStorageSync("title")
			this.init()
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			radioChange() {},
			async init() {
				let param = {
					testId: this.id
				}
				let res = await indexApi.getQuestion(param)
				this.questionList = res.data
				if (this.questionList.length == 0) {
					Util.showMyToast("此套试题尚未有题目!")
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			},
			async save() {
				console.log(this.questionList)
				let num = 0
				for (let i in this.questionList) {
					if (!this.questionList[i].userAnswer) {
						Util.showMyToast("您第" + ((i * 1) + 1) + "题目尚未完成")
						return
					}
					if (this.questionList[i].userAnswer == 'A') {
						num += this.questionList[i].gradeA * 1
					}
					if (this.questionList[i].userAnswer == 'B') {
						num += this.questionList[i].gradeB * 1
					}
					if (this.questionList[i].userAnswer == 'C') {
						num += this.questionList[i].gradeC * 1
					}
					if (this.questionList[i].userAnswer == 'D') {
						num += this.questionList[i].gradeD * 1
					}
					console.log(num)
				}
				let param = {}
				param.stuId = app.globalData.userInfo.id
				param.testId = this.id
				param.teaId = this.id
				param.grade = num
				console.log(param)
				let res = await indexApi.addGrade(param)
				this.content = res.data
				this.show = true
				console.log(this.content)
			}
		}
	}
</script>

<style>

</style>
