<template>
	<view class="index">
		<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000" :circular="true" indicator-color="rgba(0,0,0,0.5)"
		 indicator-active-color="#C8221E">
			<swiper-item v-for="(item, index) in banner" :key="item.id">
				<view class="swiper-item">
					<image :src="item.img" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="nav">
			<navigator hover-class="none" url="/pages/goods/goods" class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>超市</text>
			</navigator>
			<navigator hover-class="none" url="/pages/contact/contact" class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</navigator>
			<navigator hover-class="none" url="/pages/pics/pics" class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</navigator>
			<navigator hover-class="none" url="/pages/videos/videos" class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</navigator>
		</view>

		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<List :goods="goods"></List>
		</view>
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
				banner: [],
				goods: []
			}
		},
		methods: {
			//获取Banner
			getBanner() {
				return this.$ajax({
					loading: true,
					url: "/api/getlunbo"
				}).then(data => {
					this.banner = data.message;
				});
			},
			//获取商品列表
			getGoods() {
				return this.$ajax({
					loading: true,
					url: "/api/getgoods?pageindex=1"
				}).then(data => {
					this.goods = data.message;
				});
			}
		},
		onLoad() {
			this.getBanner();
			this.getGoods();
		}
	}
</script>

<style scoped lang="scss">
	@import "./index.scss"
</style>
