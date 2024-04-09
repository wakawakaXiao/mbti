<template>
	<view>
		<image class="query-icon" src="../../assets/image/query-icon.png" mode="" @click="openPopup"></image>
		<uni-popup ref="popupRef" type="center" border-radius="6rpx">
			<view class="popup">
				<view class="popup_head">提示</view>
				<view class="popup_content">回签问题时不依据别人眼中的你来判断，而是你认为你本质上是不是这样的，看看问题吧。</view>
				<view class="popup_foot" @click="closePopup">确定</view>
			</view>
		</uni-popup>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const popupRef = ref();

const openPopup = () => {
	popupRef.value.open('center')
	// uni.showToast({
	// 	title:'提示',
	// 	content:'测试测试测试'
	// })
}
const closePopup = () => {
	popupRef.value.close();
}
</script>

<style lang="scss" scoped>
	.query-icon {
		width:40rpx;
		height:40rpx;
	}
	.popup {
		background: #fff;
		width:50vw;
		height:300rpx;
		border-radius:15rpx;
		padding: 15rpx;
		box-sizing: border-box;
		position: relative;
		&_head {
			height:80rpx;
			font-size: 22rpx;
			font-weight: bold;
			text-align: center;
			line-height: 80rpx;
		}
		&_content {
			font-size: 20rpx;
			text-align: center;
		}
		&_foot {
			position: absolute;
			left:0;
			bottom: 0;
			height:80rpx;
			line-height: 80rpx;
			width: 100%;
			border-top: 1rpx solid rgb(248, 248, 248);
			font-size: 20rpx;
			text-align: center;
		}
	}
</style>