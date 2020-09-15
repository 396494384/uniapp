<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="call">联系电话：13594395399（点击拨打）</view>
			<view>地址：地址地址地址地址地址地址地址地址地址地址</view>
			<map :latitude="29.598853" :longitude="106.525589" :scale="14" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markers: [{
					latitude: 29.598853,
					longitude: 106.525589,
					iconPath: "./../../static/logo.png",
					width: 20,
					height: 20
				}]
			}
		},
		methods: {
			//拨打电话
			call() {
				uni.makePhoneCall({
					phoneNumber: "13594395399"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 20rpx 25rpx;
			box-sizing: border-box;
			line-height: 2;
			color: #666;
		}

		map {
			width: 700rpx;
			height: 700rpx;
			margin-top: 30rpx;
			margin-bottom: 30rpx;
		}
	}
</style>
