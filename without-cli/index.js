
var app = new Vue({
    el: "#app",
    data: {
        product : "Boots",
        message : "You have hovered me.",
        message1 : "sunshine",
        newMessage : '',
        rawHtml : '<span style="color: red;">This should be red</span>',
        users : [],
        showUsers : true
    },
    created() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(x => x.json())
        .then(response =>
            { console.log(response);
            this.users = response});
    },
    mounted() {
        
    },
    computed: {
        reversedMessage1 : function (){
            return this.message1.split('').reverse().join('');
        }
    },
    methods: {
        changeMessage(){
            if(this.newMessage === '' || this.newMessage === null){
                throw new Error('New Message is null or empty. please enter some value in textbox.');
        }
        else
            this.message1 = this.newMessage;
        },
        throwErr(){
            throw new Error("Custom exception thrown");
        },
        someClickEvent(){
            alert('Clicked Me');
        }
    },
});

app.$watch('message1', (newVal, oldVal) =>{
    console.log(`The value of message1 changed from ${oldVal} to ${newVal}`);
});

Vue.config.errorHandler = (err, vm, info) => {
    // handle error
    let data = `Error occured \n Error message : ${err} \n Reason : ${vm}`;
    // let fso = new ActiveXObject('Scripting.FileSystemObject');
    // var fh = fso.OpenTextFile("errorlogs.txt", 8, false, 0);
    // fh.WriteLine(d1 + ',' + d2);
    // fh.Close();
    console.log(err);
}

