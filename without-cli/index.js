var app = new Vue({
    el: "#app",
    data: {
        product : "Boots",
        message : "You have hovered me.",
        message1 : "sunshine",
        newMessage : ''
    },
    computed: {
        reversedMessage1 : function (){
            return this.message1.split('').reverse().join('');
        }
    },
    methods: {
        changeMessage(){
            this.message1 = this.newMessage;
        }
    },
});

app.$watch('message1', (newVal, oldVal) =>{
    console.log(`The value of message1 changed from ${oldVal} to ${newVal}`);
});

