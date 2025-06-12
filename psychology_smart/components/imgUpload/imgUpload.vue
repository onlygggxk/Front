<template>
	<view class="u-page">
		<view class="u-demo-block">
			<view class="u-demo-block__content">
				<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
				<u-form labelPosition="left">
					<u-form-item :label="label" prop="form.problemPhotos" borderBottom labelWidth="80" ref="item3">
						<u-upload :fileList="fileList1" :accept="accept" :previewFullImage="true" @afterRead="afterRead"
							@delete="deletePic" name="1" :multiple="(limit > 1)" :maxCount="limit">
						</u-upload>
					</u-form-item>
				</u-form>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		name: 'imgUpload',
		props: {
			value: [String, Object, Array],
			label: {
				type: String,
				default: '上传头像'
			},
			accept:{
				type: String,
				default: 'image'
			},
			limit: {
				type: Number,
				default: 1
			},
			uploadUrl: {
				type: String,
				default: 'http://localhost:8888/upload/file'
			},
		},
		data() {
			return {
				fileList1: [],
			}
		},
		watch: {
			value: {
				handler(val) {
					if (val) {
						// 首先将值转为数组
						const list = Array.isArray(val) ? val : this.value.split(',')
						// 然后将数组转为对象数组
						this.fileList1 = list.map(item => {
							if (typeof item === 'string') {
								item = {
									name: item,
									url: item
								}
							}
							return item
						})
					} else {
						this.fileList1 = []
						return []
					}
				},
				deep: true,
				immediate: true
			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			listToString(list, separator) {
				let strs = ''
				separator = separator || ','
				for (let i in list) {
					if (list[i].imgUrl != undefined) {
						strs += list[i].imgUrl + separator
					}
				}
				return strs != '' ? strs.substr(0, strs.length - 1) : ''
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)

					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						imgUrl: result
					}))
					fileListLen++
				}
				console.log(this.listToString(this.fileList1))
				this.$emit('input', this.listToString(this.fileList1))
			},
			uploadFilePromise(url) {
				let _self = this;
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: _self.uploadUrl,
						header: {},
						filePath: url,
						name: 'file',
						success: (res) => {
							let result = JSON.parse(res.data)
							setTimeout(() => {
								resolve(result.data)
							}, 1000)
						}
					});
				})
			}
		},
	}
</script>


<style>

</style>
