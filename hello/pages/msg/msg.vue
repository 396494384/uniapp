<template>
	<view>
		<!-- <view class="">
			<text>text</text>
		</view>
		<view>
			<text selectable="true">text</text>
		</view>
		<view class="">
			<text space="nbsp">text</text>
		</view>
		<view class="">
			<text space="nbsp">text</text>
		</view> -->
		<view class="box1" hover-class="box1-active">
			<view class="box" hover-class="box-active" hover-stop-propagation>
				box1
			</view>
		</view>
		<button type="default" @click="get">get</button>
		
		<!-- #ifdef H5 -->
			<view>h5</view>
		<!-- #endif -->
		<view class="">wx</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			get(){
				uni.request({
					url:"http://localhost:8082/api/getlunbo",
					success(res){
						console.log(res.data.message)
					}
				})
			}
		},
		onLoad() {
			// #ifdef H5
				console.log("h5");
			// #endif
			
			// #ifdef MP
				console.log("wx");
			// #endif
			
		}
	}
</script>

<style>
.box{
	width: 100rpx;
	height: 100rpx;
	background-color: #007AFF;
}
.box-active{
	background-color: #4CD964;
}
.box1{
	width: 200rpx;
	height: 200rpx;
	background-color: #F0AD4E;
}
.box1-active{
	background-color: #00ffff;
}
/* #ifdef MP */
.box1{
	background-color: #4CD964;
}
.box{
	background-color: red;
}
/* #endif */
</style>
