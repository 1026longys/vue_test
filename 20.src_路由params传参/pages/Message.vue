<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 跳转路由并携带params参数，to的字符串写法 -->
				<router-link :to="`/home/message/detail/${m.id}/${m.name}`">{{m.name}}</router-link>
			
				<!-- 跳转路由并携带params参数，to的对象写法 -->
				<!-- <router-link :to="{
					name: 'xaingqing',
					params: {
						id: m.id, 
						name: m.name
					}
				}">
					{{m.name}}
				</router-link> -->
			</li>
		</ul>
		<hr/>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data() {
			return {
				messageList: [
					{id: '001', name:'消息001'},
					{id: '002', name:'消息002'},
					{id: '003', name:'消息003'},
				]
			}
		},
	}
</script>