export const pageMix = {
	onReachBottom() {
		let nextPage = this.current + 1;
		if (nextPage > this.totalPage) {
			this.current = this.totalPage
			this.hasNext = false
		} else {
			this.current = nextPage
			this.hasNext = true
		}
		if (this.hasNext) {
			this.getPageList()
		}
	},
	data() {
		return {
			pageSize: 5,
			current: 1,
			totalPage: 0,
			hasNext: true,
			pageList: []
		}
	},
	methods: {
		pageDataHandle(res) {
			if (this.current == 1) {
				this.pageList = res.data.records
			} else {
				this.pageList = [...this.pageList, ...res.data.records]
			}
			this.totalPage = res.data.pages
		}
	}
}
