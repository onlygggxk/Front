<template>
	<u-sticky bgColor="#fff">
		<u-tabs :list="tabOneList" :activeStyle="{
            color: '#0081ff',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }"  lineColor="#0081ff" :keyName="tabOneKeyName" @click="tabsOneClick"></u-tabs>
	</u-sticky>
</template>

<script>
	export default {
		name: "tabsOne",
		props: {
			tabOneKeyName: {
				type: String,
				default: "name"
			},
			tabOneList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {};
		},
		methods: {
			tabsOneClick(item) {
				this.$emit("tabsOneClick", item)
			}
		}

	}
</script>

<style>

</style>