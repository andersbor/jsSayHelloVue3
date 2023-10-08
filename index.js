Vue.createApp({
    data() {
        return {
            name: null,
            message: null
        }
    },
    methods: {
        sayHello(name) {
            if (name)
                this.message = "Hello " + name
            else
                this.message = "Hello No Name"
        }
    }
}).mount("#app")