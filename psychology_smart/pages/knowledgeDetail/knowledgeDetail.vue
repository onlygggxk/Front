<template>
	<view>
		<articleInfo :detail="detail" bgKey="bannerImg"></articleInfo>
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
				let res = await indexApi.knowledgeFindList({
					id: this.id
				})
				this.detail = res.data[0]
			}
		}
	}
</script>

<style>

</style>
