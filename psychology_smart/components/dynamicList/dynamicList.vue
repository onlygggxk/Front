<template>
	<view>
		<view v-for="(item,index) in dataList" :key="index">
			<view class="album-container">
				<view class="album-header">
					<u-avatar :src="item[avatarKey]" shape="square"></u-avatar>
					<view class="info">
						<view class="user-name">{{item[nameKey]}}</view>
						<view class="push-time">{{item[pushTimeKey]}}</view>
					</view>
					<view style="flex-grow: 1;"></view>
					<view style="color: red;" v-if="userId == item[fromStuIdKey]" @click="delComment(item)">删除</view>
				</view>
				<view class="album-content">
					<view class="detail">{{item[contentKey]}}</view>
					<u-album v-if="item.type == 0" :urls="handleImgList(item[imgListKey])"></u-album>
					<video  v-else id="myVideo" :src="item[imgListKey]" style="width: 100%;"
						:show-fullscreen-btn="false"></video>
					<view style="margin-top: 12rpx;display: flex;flex-direction: row-reverse;">
						<u-icon name="chat" size="20" @click="addParentComment(item)"></u-icon>
						<text style="font-size: 30rpx;margin-right: 10rpx;"
							v-if="showClick">{{item[clickNumKey]}}</text>
						<u-icon name="thumb-up" :color="item.isLike ? 'red' : ''" size="20" v-if="showClick"
							@click="clickLike(item)"></u-icon>
					</view>
				</view>
				<view class="comment-container" v-if="item[commentListKey] && item[commentListKey].length > 0">
					<view class="comment-item" v-for="(commentItem,index1) in item[commentListKey]" :key="index1">
						<u-avatar :src="commentItem[avatarKey]" shape="square"></u-avatar>
						<view class="left-info">
							<view class="top-info">
								<view>{{commentItem[nameKey]}}</view>
								<view style="flex-grow: 1;"></view>
								<view style="color: red;" v-if="userId == commentItem[fromStuIdKey]"
									@click="delComment(commentItem)">删除</view>
							</view>
							<view style="flex-grow: 1;"></view>
							<view style="margin-top: 16rpx;"> <text
									v-if="commentItem[fromStuIdKey] != commentItem[toStuIdKey]">回复</text> <text
									v-if="commentItem[fromStuIdKey] != commentItem[toStuIdKey]"
									style="color: #5af;margin-left: 4rpx;">{{commentItem[nameKeyTwo]}}：</text>{{commentItem[contentKey]}}
							</view>
							<view class="push-time" style="color: #666;">{{commentItem[pushTimeKey]}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom-line"></view>
		</view>
		<view style="height: 100rpx;width: 100%;" v-if="showComment"></view>
		<view class="info-footer grid col-2" v-if="showComment">
			<view class="info-footer-input">
				<u--input placeholder="留下评论&吐槽" v-model="comment" prefixIcon="edit-pen" border="surround" clearable
					:focus="hasFocus" shape="circle" @confirm="addComment" @clear="comment = ''">
				</u--input>
			</view>
			<view class="info-footer-btn">
				<view style="margin-right: 10rpx;">
					<u-button text="发送" size="small" type="success" @click="addComment"></u-button>
				</view>

				<u-button text="取消" size="small" @click="canal"></u-button>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'dynamicList',
		props: {
			avatarKey: { // 发布者头像 key
				type: String,
				default: 'avatar'
			},
			nameKeyTwo: { // 评论者姓名 key
				type: String,
				default: 'nickNameTo'
			},
			nameKey: { // 发布者姓名 key
				type: String,
				default: 'stuName'
			},
			pushTimeKey: { // 发布时间
				type: String,
				default: 'time'
			},
			contentKey: { // 内容 key
				type: String,
				default: 'content'
			},
			imgListKey: { // 图片字符串key
				type: String,
				default: 'imgList'
			},
			fromStuIdKey: { // 信息来源人ID key
				type: String,
				default: 'fromStuId'
			},
			toStuIdKey: { // 信息发布者ID key
				type: String,
				default: 'toStuId'
			},
			isClickKey: { // 用户是否点赞 key
				type: String,
				default: 'isClick'
			},
			clickNumKey: { // 点赞数key
				type: String,
				default: 'clickNum'
			},
			commentListKey: { // 评论列表 key
				type: String,
				default: 'commentList'
			},
			dataList: { // 数据列表
				type: Array,
				default: () => []
			},
			userId: {
				type: Number,
				default: 0
			},
			showClick: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				showComment: false,
				hasFocus: false,
				currentItem: {},
				comment: ''
			}
		},
		methods: {
			// 点击动态
			clickDynamic() {
				this.$emit('clickDynamic');
			},
			clickLike(item) {
				if (item.isLike) {
					this.$emit('delLike', item.id);
				} else {
					this.$emit('clickLike', item.id);
				}
			},
			addParentComment(item) {
				this.comment = ""
				this.showComment = true
				this.currentItem = item
				this.hasFocus = true
			},
			addComment() {
				let param = {}
				param.content = this.comment
				param.parentId = this.currentItem.id
				param.toStuId = this.currentItem.fromStuId
				console.log("点击发送", param)
				this.$emit('addComment', param);
				this.showComment = false
				this.hasFocus = false
			},
			delComment(item) {
				this.$emit("delComment", item)
			},
			canal() {
				this.showComment = false
			},
			handleImgList(imgStr) {
				if (imgStr) return imgStr.split(",")
				return []
			}
		}
	}
</script>

<style lang="scss" scoped>
	.album-container {
		padding: 40rpx;
	}

	.album-header {
		display: flex;
		margin-bottom: 12rpx;
	}

	.info {
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;
		justify-content: space-between;

		.user-name {}


	}

	.push-time {
		color: #bebebe;
		font-size: 24rpx;
	}

	.album-content {

		margin-bottom: 12rpx;
	}


	.detail {
		margin-bottom: 12rpx;
		font-size: 28rpx;
	}


	.comment-container {
		background-color: #e2e2e2;
		padding: 6rpx;
		border-radius: 6rpx;
	}

	.comment-item {
		padding: 16rpx;
		display: flex;
	}


	.left-info {
		margin-left: 10rpx;
		font-size: 26rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
	}

	.top-info {
		display: flex;
		width: 100%;
	}

	.bottom-line {
		border-bottom: 20rpx solid #efefef;
	}

	.info-footer {
		position: fixed;
		z-index: 200;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		border-top: #eee solid 1px;
		display: flex;
		align-items: center;
	}

	.info-footer-input {
		width: 60%;
		padding: 15rpx 30rpx;
	}

	.info-footer-btn {
		width: 40%;
		padding-right: 20rpx;
		font-size: 50rpx;
		line-height: 100rpx;
		display: flex;
	}

	.info-footer-btn view {
		display: flex;
		align-items: center;
		margin: 0 26rpx;
	}
	
</style>
