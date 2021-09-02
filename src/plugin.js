export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                showName() {
                    console.log('hi');
                }
            }
        })
    }
}