<template>
	<div class="col-xs-offset-2 col-xs-8">
		<div class="page-header"><h2>Vue Router Demo</h2></div>
		<button @click="back">后退</button>
		<button @click="forward">前进</button>
		<button @click="test">测试go</button>
	</div>
</template>

<script>
	export default {
		name:'Banner',
		methods: {
			// 编程式路由导航
			back() {
				console.log(this.$router)
				return this.$router.back()
			},
			forward() {
				return this.$router.forward()
			},
			test() {
				return this.$router.go(-2)
			},
		}
	}
</script>