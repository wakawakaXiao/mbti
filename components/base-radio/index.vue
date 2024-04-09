<template>
	<view class="flex">
		<view :class="[curName === item.selectName ? 'tab_item_active' : '','tab_item']" v-for="(item,index) in selectArr" :key="index">
			{{ item }}
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const selectArr = [
	{
		label:props.repository.answerA,
		selectName:'A'
	},
	{
		label:props.repository.answerB,
		selectName:'B'
	}
]
const curName = ref('')

const props = defineProps({
	repository:{
		type:Object,
		default:() => {
			return {
				id:0,
				content:'',
				answerA:'',
				answerB:'',
				scoreJugment:true
			}
		}
	}
})

</script>

<style lang="scss" scoped>
.tab_item {
	
	&_active {
		
	}
}
</style>