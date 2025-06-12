<template>
	<view>
		<articleInfo :detail="detail"></articleInfo>
	</view>
</template>

<script>
	import indexApi from '@/api/index.js'
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			}
		},
		onLoad(param) {
			this.id = param.id
		},
		onShow() {
			this.init()
		},
		methods: {
			async init() {
				let res = await indexApi.getNoticeList({
					id: this.id
				})
				this.detail = res.data[0]
				console.log(this.detail)
			}
		}
	}
</script>

<style>

</style>
