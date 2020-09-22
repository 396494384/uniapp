<template>
	<view class="new_details" v-if="infoData">
		<view class="top">
			<view class="title">
				{{infoData.title}}
			</view>
			<view class="info">
				<view class="date">时间：{{ infoData.add_time | formatDate }}</view>
				<view class="click">点击量：{{infoData.click}}</view>
			</view>
		</view>
		<view class="content">
			<!-- {{infoData.content}} -->
			<rich-text :nodes="infoData.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				infoData: null,
			}
		},
		filters: {
			formatDate(val) {
				let _date = new Date(val);
				let Y = _date.getFullYear();
				let M = `0${_date.getMonth() + 1}`.substr(-2);
				let D = `0${_date.getDate()}`.substr(-2);
				return `${Y}-${M}-${D}`;
			}
		},
		methods: {
			//获取单条信息
			getInfo() {
				this.$ajax({
					loading: true,
					url: `/api/getnew/${this.id}`
				}).then(data => {
					this.infoData = data.message[0];
				})
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getInfo();
		}
	}
</script>

<style scoped lang="scss">
	.new_details {
		padding: 24rpx;
	}

	.top {
		padding-bottom: 30rpx;
		border-bottom: 1px solid #eee;
		margin-bottom: 30rpx;

		.title {
			color: #666;
			font-size: 32rpx;
			line-height: 1.6;
			margin-bottom: 10rpx;
		}

		.info {
			display: flex;
			justify-content: space-between;
			color: #999;
			font-size: 24rpx;
		}
	}

	.content {
		line-height: 1.6;
		padding-bottom: 30rpx;
	}
</style>
