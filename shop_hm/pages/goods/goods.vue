<template>
	<view class="goods">
		<List :goods="goods"></List>
		<view v-if="isNot" class="not">没有更多了</view>
	</view>
</template>

<script>
	import List from "@/components/List.vue"
	export default {
		components: {
			List
		},
		data() {
			return {
				pageindex: 1,
				loading: false,
				goods: [],
				isNot: false
			}
		},
		methods: {
			getGoods() {
				return this.$ajax({
					loading: true,
					url: "/api/getgoods?pageindex=" + this.pageindex
				}).then(data => {
					this.goods = this.goods.concat(data.message);
				});
			}
		},
		onLoad() {
			this.getGoods();
		},
		onReachBottom() {
			if (this.goods.length < this.pageindex * 10) {
				this.isNot = true;
				return;
			}
			if (this.loading) {
				return;
			}

			this.pageindex += 1;
			this.loading = true;
			this.getGoods().then(data => {
				this.loading = false;
			}).catch(err => {
				this.loading = false;
			});
		},
		onPullDownRefresh() {
			this.pageindex = 1;
			this.isNot = false;
			this.goods = [];
			this.getGoods().then(data => {
				uni.stopPullDownRefresh()
			}).catch(err => {
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style scoped>
	.goods {
		background-color: #f5f5f5;
	}

	.not {
		color: #999;
		font-size: 24rpx;
		text-align: center;
		padding-bottom: 20rpx;
	}
</style>
