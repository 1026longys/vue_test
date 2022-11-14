// 分别暴露
export const hunhe = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊！')
    }
}
export const hunhe2 ={
    data() {
        return {
            x: 999,
            y: 100
        }
    }
}