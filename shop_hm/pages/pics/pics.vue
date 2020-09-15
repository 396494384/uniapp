<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true" :style="{ height: winHeight +'px' }">
			<view v-for="(item, index) in category" :key="item.id" :class="{ 'active': item.id == categoryId }" @click="toggle(item.id)">{{ item.title }}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true" :style="{ height: winHeight +'px' }">
			<view v-if="pics.length" class="pics_list">
				<view class="item" v-for="(item, index) in pics" :key="item.id" @click="showImgs(item.img_url)">
					<image :src="item.img_url"></image>
					<view class="">{{item.title}}</view>
				</view>
			</view>
			<view v-else class="not">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				winHeight: 0,
				category: [],
				categoryId: "",
				pics: []
			}
		},
		methods: {
			//图片预览
			showImgs(current) {
				let _urls = this.pics.map(item => item.img_url);
				uni.previewImage({
					current: current,
					urls: _urls
				})
			},
			//分类切换
			toggle(id) {
				if (this.categoryId == id) return;
				this.categoryId = id;
			},
			//获取图片
			getPics() {
				this.$ajax({
					loading: true,
					url: "/api/getimages/" + this.categoryId
				}).then(data => {
					this.pics = data.message;
				})
			},
			//获取图片分类
			getCategory() {
				this.$ajax({
					loading: true,
					url: "/api/getimgcategory"
				}).then(data => {
					this.category = data.message;
					this.categoryId = this.category[0].id;
				})
			}
		},
		created() {
			//获取屏幕高度 - 动态设置scroll-view的高度
			uni.getSystemInfo({
				success: res => {
					this.winHeight = res.windowHeight;
				}
			});
			this.getCategory();
		},
		watch: {
			categoryId() {
				this.getPics();
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
	}

	.pics {
		display: flex;
		height: 100%;

		scroll-view.left {
			width: 210rpx;
			background-color: #f5f5f5;

			view {
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;
				border-bottom: 1px solid #ddd;
				color: #666;

				&:last-child {
					border-bottom: none;
				}

				&.active {
					background-color: $theme-color;
					color: #fff;
				}
			}
		}

		scroll-view.right {
			width: 540rpx;

			view.pics_list {
				padding: 40rpx;

				view.item {
					padding: 40rpx;
					box-shadow: 0 0 20rpx 2rpx #ddd inset;
					border-radius: 20rpx;
					margin-bottom: 40rpx;

					&:last-child {
						margin-bottom: 0;
					}

					image {
						width: 380rpx;
						height: 380rpx;
					}

					view {
						color: #999;
						line-height: 1.6;
						padding-top: 16rpx;
					}
				}
			}

			view.not {
				padding: 100rpx 0;
				color: #999;
				font-size: 32rpx;
				letter-spacing: 20rpx;
				text-align: center;
			}

		}
	}
</style>
