<template>
	<view class="content">
		<view class="head flex flex-align-center flex-jus-between ">
			<view class="progress_text">{{ repIndex + 1}} / {{total}}</view>
			<view class="progress">
				<view class="progress_main" :style="{width:(repIndex + 1) / total * 100 + '%'}"></view>
			</view>
			<baseQuery />
		</view>
		<view class="">
			<view class="select-title" v-if="currentProblem.title && currentProblem.title.length">{{currentProblem.title}} </view>
			<view class="select-title" v-if="currentProblem.content && currentProblem.content.length">{{currentProblem.content}}</view>
			<view class="select-box">
				<view class="select-item" v-for="(item,index) in currentProblem.answer" :key="index" @click="selectHandle(currentProblem.scope[index])">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import baseQuery from '@/components/base-query/index.vue';
import problems from '@/questions/index';

const total = ref(0);
const repIndex = ref(26);
const selectArr = ref([]); // 已选择的选项
const currentProblem = ref({}) // 当前显示的题目


const getCurrentProblem = () => {
	for (let sectionIndex = 0, len = problems.length; sectionIndex < len; sectionIndex++) {
		const curSection = problems[sectionIndex];
		const current = curSection.data.find((item) => {
			return item.id === repIndex.value + 1
		})
		if (current) {
			currentProblem.value = {
				title:curSection.title,
				...current
			};
			break;
		}
	}
	setTimeout(()=>{
		uni.hideLoading()
	},200)
}

const selectHandle = (key) => {
	selectArr.value[repIndex.value] = key;
	if (repIndex.value + 1 < total.value) {
		repIndex.value += 1
		uni.showLoading({
			title: '下一题'
		});
		getCurrentProblem()
	} else {
		// 进行计算的下一个流程
		const state = {} 
		selectArr.value.map(key => {
			if (state[key]) {
				state[key] += 1
			} else {
				state[key] = 1
			}
		})
		getMbti(state);
	}
}

const getMbti = (state) => {
	console.log(state)
	const {
		J = 0,
		P = 0,
		T = 0,
		F = 0,
		S = 0,
		N = 0,
		E = 0,
		I = 0
	} = state
	let str1 = (I - E) / 21 * 10 >= 0 ? 'I' : 'E'
	let str2 = (S - N) / 26 * 10 >= 0 ? 'S' : 'N'
	let str3 = (T - F) / 24 * 10 >= 0 ? 'T' : 'F'
	let str4 = (J - P) / 22 * 10 >= 0 ? 'J' : 'P'
	let mbtiStr = str1 + str2 + str3 + str4
	return mbtiStr
}

onMounted(()=>{
	// 获取总共的题目数
	problems.map((section)=>{
		total.value += section.data.length;
	})
	getCurrentProblem();
})

</script>

<style lang="scss" scoped> 
	.content {
		background: rgb(245, 248, 255);
		height:100vh;
		overflow: hidden;
	}
	.progress {
		width:calc(100% - 200rpx);
		height:8rpx;
		border-radius: 8rpx;
		background: rgb(246, 246, 246);
		position: relative;
		&_main {
			height:8rpx;
			border-radius: 8rpx;
			background: rgb(124, 145, 254);
		}
		&_text {
			font-size:20rpx;
		}
	}
	.head {
		width:100%;
		height:80rpx;
		background: rgba(255,255,255,1);
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.select-item {
		width:660rpx;
		min-height:80rpx;
		margin:20rpx auto;
		background: #fff;
		border-radius: 8rpx;
		padding:15rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0,0,0,0.1);
	}
	.select-title {
		padding: 20rpx 30rpx 10rpx 30rpx;
		font-size: 28rpx;
		line-height: 56rox;
	}
</style>
