<template>
	<ul>
		<li :style="{opacity}">欢迎学习Vue</li>
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		data() {
			return {
				opacity: 1
			}
		},
		// beforeDestroy() {
		// 	console.log('News组件即将被销毁')
		// },
		// 路由组件激活时
		activated() {
			console.log('组件被激活了')
			this.timer = setInterval(() =>{
				console.log('@')
				this.opacity -= 0.1
				if (this.opacity <= 0) this.opacity = 1 
			}, 100)
		},
		// 路由组件失活时
		deactivated() {
			console.log('组件失活了')
			clearInterval(this.timer)
		}
	}
</script>