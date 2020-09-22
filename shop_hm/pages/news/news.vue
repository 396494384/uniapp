<template>
	<view class="new_list">
		<view class="item" v-for="(item, index) in List" :key="item.id">
			<navigator :url="`../new_details/new_details?id=${item.id}`">
				<view class="img">
					<image :src="item.img_url" mode=""></image>
				</view>
				<view class="text">
					<view class="title">{{ item.title }}</view>
					<view class="info">
						<view class="date">时间：{{ item.add_time | formatDate }}</view>
						<view class="click">点击量：{{item.click}}</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List: []
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
			//获取列表
			getList() {
				this.$ajax({
					loading: true,
					url: "/api/getnewslist"
				}).then(data => {
					this.List = data.message;
				})
			}
		},
		onLoad() {
			this.getList();
		}
	}
</script>

<style scoped lang="scss">
	.new_list {
		padding: 24rpx;

		.item {
			padding: 24rpx;
			height: 200rpx;
			// background-color: #ddd;
			box-shadow: 0 0 10rpx 1rpx #ddd;
			margin-bottom: 24rpx;
			border-radius: 20rpx;

			navigator {
				display: flex;
				justify-content: space-between;

				.img {
					width: 200rpx;
					height: 200rpx;

					image {
						width: 200rpx;
						height: 200rpx;
					}
				}

				.text {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 420rpx;

					.title {
						line-height: 1.6;
						font-size: 32rpx;
						color: #999;
					}

					.info {
						width: 420rpx;
						display: flex;
						// align-self: flex-end;
						flex-direction: row;
						justify-content: space-between;
						font-size: 26rpx;
						color: #999;
					}
				}
			}

		}
	}
</style>
