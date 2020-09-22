<template>
	<view class="goods_details">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<view class="">
						<image :src="item.src" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="content" v-if="infoData">
			<view class="price">
				<view class="new">￥{{infoData.sell_price}}</view>
				<view class="old">￥{{infoData.market_price}}</view>
			</view>
			<view class="title">{{infoData.title}}</view>
			<view class="parmas">
				<text>货号：{{infoData.goods_no}}</text>
				<text>库存：{{infoData.stock_quantity}}</text>
			</view>
			<view class="text" v-show="content">
				<text>详情介绍</text>
				<view>
					<rich-text :nodes="content"></rich-text>
				</view>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				id: null,
				banner: [],
				infoData: "",
				content: "",
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					// info: 2,
					infoBackgroundColor: '#ff0000',
					infoColor: "#fff"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
				// this.options[2].info++
			},
			//获取详情图片
			getDetailBanner() {
				this.$ajax({
					loading: true,
					url: `/api/getthumimages/${this.id}`
				}).then(data => {
					this.banner = data.message;
				})
			},
			//获取单条信息
			getInfo() {
				this.$ajax({
					loading: true,
					url: `/api/goods/getinfo/${this.id}`
				}).then(data => {
					this.infoData = data.message[0];
				})
			},
			//获取详情介绍
			getDetail() {
				this.$ajax({
					loading: true,
					url: `/api/goods/getdesc/${this.id}`
				}).then(data => {
					this.content = data.message[0].content.replace(/<a(\S|.)+<\/a>/g, "").replace(/<!-- (\S|.)+ -->/g, "");
				})
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetailBanner();
			this.getInfo();
			this.getDetail();
		}
	}
</script>

<style lang="scss">
	.goods_details {
		.banner {
			swiper {
				width: 750rpx;
				height: 700rpx;

				image {
					width: 750rpx;
					height: 700rpx;
				}
			}
		}

		.content {
			padding: 24rpx 24rpx 110rpx;
			box-sizing: border-box;

			.price {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-top: 30rpx;
				margin-bottom: 30rpx;

				.new {
					color: $theme-color;
					font-weight: bold;
					font-size: 36rpx;
					// padding-left: 20rpx;
				}

				.old {
					font-size: 24rpx;
					color: #999;
					text-decoration: line-through;
					font-style: italic;
					padding-left: 20rpx;
				}
			}

			.title {
				line-height: 1.6;
				font-size: 30rpx;
				font-weight: bold;
				margin-bottom: 30rpx;
			}

			.parmas {
				border-top: 1px solid #eee;
				border-bottom: 1px solid #eee;
				display: flex;
				flex-direction: column;
				align-content: center;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
				margin-bottom: 30rpx;

				text {
					line-height: 1.6;
					color: #999;
					font-size: 24rpx;
				}
			}

			.text {
				width: 702rpx;

				text {
					display: flex;
					font-size: 28rpx;
					color: #666;
					margin-bottom: 20rpx;
				}

				view {
					color: #666;
					line-height: 1.6;
				}
			}
		}

		.goods_nav {
			width: 750rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			border-top: 1px solid #eee;
		}
	}
</style>
