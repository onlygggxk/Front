<template>
	<view style="padding: 20rpx">
		<u-search :placeholder="searchLabel" v-model="keyword" @search="searchClick" @custom="searchClick"></u-search>
	</view>
</template>

<script>
	export default {
		name: "searchOne",
		props: {
			searchLabel: {
				type: String,
				default: '请输入关键字'
			}
		},
		data() {
			return {
				keyword: ''
			};
		},
		methods: {
			searchClick() {
				this.$emit("searchClick", this.keyword)
			}
		}
	}
</script>

<style>

</style>