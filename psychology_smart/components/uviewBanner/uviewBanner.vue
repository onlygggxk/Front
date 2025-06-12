<template>
	<view v-show="bannerDataList.length > 0">
		<u-swiper :list="bannerDataList" :keyName="imgPropName" :height="height" indicator circular @click="click">
		</u-swiper>
	</view>
</template>

<script>
	export default {
		name: "uviewBanner",
		props: {
			bannerDataList: {
				type: Array,
				default: () => [{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png'
				}]
			},
			height: {
				type: Number,
				default: 180
			},
			imgPropName: {
				type: String,
				default: 'image'
			}
		},
		methods: {
			click(index) {
				this.$emit("bannerClick", this.bannerDataList[index])
			}
		}
	}
</script>

<style>

</style>