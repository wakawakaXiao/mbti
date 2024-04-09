<template>
	<view class="flex flex-jus-between">
		<view @click="navigaHandle(tabItem)" class="" v-for="tabItem in tabs" :key="tabItem.id">
			{{ tabItem.title }}
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import problems from '@/questions/index';

const tabs = ref([
	{
		title:'简洁版[28题]',
		content:'',
		id:0
	},
	{
		title:'通用版[48题]',
		content:'',
		id:1
	},
	{
		title:'完整版[93题]',
		content:'',
		id:2
	}
])

const navigaHandle = (params:any) => {
	uni.navigateTo({
		url:`/pages/index/index?id=${params.id}`
	})
}

</script>

<style>
</style>