<template>
	<view>
		<u-subsection :list="list" :current="curNow" @change="sectionChange"></u-subsection>

		<view v-if="curNow == 0">
			<view style="font-size: 36rpx;font-weight: bold;padding-left: 40rpx;padding-top: 20rpx;">
				历史健康数据记录
			</view>
			<view style="margin-top: 20rpx;">
				<view v-for="(item,index) in dataList" :key="index">
					<u-swipe-action>
						<u-swipe-action-item :options="options1" @click="delDietRecord" :name="item.id">
							<u-collapse>
								<u-collapse-item :title="item.monthDay" :name="item.monthDay">
									<view style="font-size: 28rpx;margin-bottom: 20rpx;">身高：{{item.height}}cm
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;">体重：{{item.weight}}kg
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;">视力：{{item.eyesight}}
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;">脉率：{{item.ulseRate}}
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;">血压：{{item.bloodPressure}}
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;" v-if="item.heartRate">
										心率：{{item.heartRate}}
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;" v-if="item.breath">
										呼吸：{{item.breath}}
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;" v-if="item.bloodSugar">
										血糖：{{item.bloodSugar}}
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;" v-if="item.bloodLipid">
										血脂：{{item.bloodLipid}}
									</view>
									<view style="font-size: 28rpx;margin-bottom: 20rpx;" v-if="item.content">
										健康建议：{{item.content}}
									</view>
								</u-collapse-item>
							</u-collapse>
						</u-swipe-action-item>
					</u-swipe-action>
				</view>
			</view>

		</view>
		<view style="margin-top: 20rpx;" v-if="curNow == 1">
			<view style="font-size: 36rpx;font-weight: bold;padding-left: 40rpx;padding-top: 20rpx;">
				身高&体重
			</view>
			<view class="charts-box" style="background-color: white;margin-top: 20rpx;">
				<qiun-data-charts type="line" :chartData="chartData" />
			</view>
			<view style="font-size: 36rpx;font-weight: bold;padding-left: 40rpx;padding-top: 20rpx;">
				视力
			</view>
			<view class="charts-box" style="background-color: white;margin-top: 20rpx;">
				<qiun-data-charts type="line" :chartData="chartData1" />
			</view>
			<view style="font-size: 36rpx;font-weight: bold;padding-left: 40rpx;padding-top: 20rpx;">
				血压
			</view>
			<view class="charts-box" style="background-color: white;margin-top: 20rpx;">
				<qiun-data-charts type="line" :chartData="chartData2" />
			</view>
			<view style="font-size: 36rpx;font-weight: bold;padding-left: 40rpx;padding-top: 20rpx;">
				脉率&心率
			</view>
			<view class="charts-box" style="background-color: white;margin-top: 20rpx;">
				<qiun-data-charts type="line" :chartData="chartData3" />
			</view>
			<view style="font-size: 36rpx;font-weight: bold;padding-left: 40rpx;padding-top: 20rpx;">
				血糖&血脂
			</view>
			<view class="charts-box" style="background-color: white;margin-top: 20rpx;">
				<qiun-data-charts type="line" :chartData="chartData4" />
			</view>
		</view>
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
				list: ['数据记录', '数据分析'],
				curNow: 0,
				dataList: [],
				chartData: {},
				chartData1: {},
				chartData2: {},
				chartData3: {},
				chartData4: {},
			}
		},
		onLoad() {},
		onShow() {
			this.checkLogin()
			this.init()
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
			},
			async init() {
				if(!this.isLogin) return
				let res = await indexApi.getEcharts(this.userInfo.id)
				console.log(res.data)
				this.dataList = res.data.healthyDTOS
				let month = res.data.monthList
				this.ec1(month, res.data.heightList, res.data.weightList)
				this.ec2(month, res.data.leftEyes, res.data.rightEyes)
				this.ec3(month, res.data.leftXue, res.data.rightXue)
				this.ec4(month, res.data.ulseRate, res.data.heartRate)
				this.ec5(month, res.data.bloodSugar, res.data.bloodLipid)
			},
			ec1(arr1, arr2, arr3) {
				let res1 = {
					categories: arr1,
					series: [{
							name: "身高",
							data: arr2
						},
						{
							name: "体重",
							data: arr3
						}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res1));
			},
			ec2(arr1, arr2, arr3) {
				let res1 = {
					categories: arr1,
					series: [{
							name: "左眼",
							data: arr2
						},
						{
							name: "右眼",
							data: arr3
						}
					]
				};
				this.chartData1 = JSON.parse(JSON.stringify(res1));
			},
			ec3(arr1, arr2, arr3) {
				let res1 = {
					categories: arr1,
					series: [{
							name: "收缩压",
							data: arr2
						},
						{
							name: "舒张压",
							data: arr3
						}
					]
				};
				this.chartData2 = JSON.parse(JSON.stringify(res1));
			},
			ec4(arr1, arr2, arr3) {
				let res1 = {
					categories: arr1,
					series: [{
							name: "脉率",
							data: arr2
						},
						{
							name: "心率",
							data: arr3
						}
					]
				};
				this.chartData3 = JSON.parse(JSON.stringify(res1));
			},
			ec5(arr1, arr2, arr3) {
				let res1 = {
					categories: arr1,
					series: [{
							name: "血糖",
							data: arr2
						},
						{
							name: "血脂",
							data: arr3
						}
					]
				};
				this.chartData4 = JSON.parse(JSON.stringify(res1));
			}
		}
	}
</script>

<style scoped>

</style>
