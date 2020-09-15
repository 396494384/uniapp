<template>
	<view>
		<view class="list">
			<navigator v-for="(item, index) in goods" :key="item.id" :url="'/pages/detail/detail?id='+item.id">
				<image :src="item.img_url" mode="aspectFit"></image>
				<view class="price">
					<view class="new">{{item.sell_price}}</view>
					<view class="old">{{item.market_price}}</view>
				</view>
				<view class="title">{{item.title.slice(0, 20)}}...</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["goods"],
		data() {
			return {}
		},
		methods: {

		},
		created() {}
	}
</script>

<style scoped lang="scss">
	.list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-top: 20rpx;
		padding-right: 20rpx;
		padding-bottom: 20rpx;

		navigator {
			width: 345rpx;
			background-color: #fff;
			overflow: hidden;
			margin-bottom: 20rpx;

			image {
				display: block;
				width: 315rpx;
				height: 315rpx;
				margin: 20rpx auto 0;
			}

			view.price {
				display: flex;
				flex-direction: row;
				align-items: center;

				.new {
					color: $theme-color;
					font-weight: bold;
					font-size: 36rpx;
					padding-left: 20rpx;
				}

				.old {
					font-size: 24rpx;
					color: #999;
					text-decoration: line-through;
					font-style: italic;
					padding-left: 20rpx;
				}
			}

			view.title {
				color: #666;
				line-height: 1.5;
				padding-left: 20rpx;
				padding-right: 20rpx;
				padding-bottom: 20rpx;
			}
		}
	}
</style>
