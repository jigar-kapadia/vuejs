var contentLifecycle = [
    {
        name : "beforeCreate",
        short_desc : "a new object is born",
        long_desc : "In this lifecycle hook, an new empty object is created, i.e an empty object is initialized. The beforeCreate hook runs at the very initialization of your component. data has not been made reactive, and events have not been set up yet.",
        usecase : 'Using the beforeCreate hook is useful when you need some sort of logic/API call that does not need to be assigned to data, which is not included in Vue App. For eg. check for some common settings or check for culture and set the language'
    },
    {
        name : "created",
        short_desc : "a newly object is assigned the default characteristics",
        long_desc : "You are able to access reactive data and events that are active with the created hook. Templates and Virtual DOM have not yet been mounted or rendered.",
        usecase : 'Using the created method is useful when dealing with reading/writing the reactive data. For example, if you want to make an API call and then store that value, this is the place to do it.' 
    },
    {
        name : "beforeMount",
        short_desc : "object taking shape to fit in the dom",
        long_desc : "In this phase, it checks if any template is available in the object to be rendered in the dom. if no template is found, then it considers the outer html of the defined element as a template.",
        usecase : 'This is the last step you should perform your API calls before it’s unnecessary late in the process because it’s right after created — they have access to the same component variables.' 
    },
    {
        name : "mounted",
        short_desc : "dom is ready and placed inside the page",
        long_desc : "In this phase, once the template is ready. it fits the data into the template and creates the renderable element. replaces the dom element with this new data filled element. it all happens in the mounted hook. you will have full access to the reactive component, templates, and rendered DOM (via this.$el).",
        usecase : 'Use mounted for modifying the DOM' 
    },
    {
        name : "beforeUpdate",
        short_desc : "changes made and yet getting ready to update the dom",
        long_desc : "The beforeUpdate hook runs after data changes on your component and the update cycle begins, right before the DOM is patched and re-rendered.",
        usecase : 'Use beforeUpdate if you need to get the new state of any reactive data on your component before it actually gets rendered.' 
    },
    {
        name : "updated",
        short_desc : "changes rendered in the dom",
        long_desc : "The updated hook runs after data changes on your component and the DOM re-renders.",
        usecase : 'Use updated if you need to access the DOM after a property change' 
    },
    {
        name : "beforeDestroy",
        short_desc : "object is ready to die",
        long_desc : "beforeDestroy is fired right before teardown. Your component will still be fully present and functional.",
        usecase : 'Use beforeDestroy if you need to clean-up events or reactive subscriptions. This is the stage where you can do resource management, delete variables and clean up the component.' 
    },
    {
        name : "destroyed",
        short_desc : "object died and removed from the memory",
        long_desc : "By the time you reach the destroyed hook, there’s practically nothing left on your component. Everything that was attached to it has been destroyed.",
        usecase : 'Use destroyed if you need do any last-minute cleanup or inform a remote server that the component was destroyed' 
    },
    
]

var users = [];
var app = new Vue({
    el: ".app",
    data:{
        message : 'This is Life Cycle Demo',
        hooks : contentLifecycle,
        count : 0
    },
    computed: {
        messageReversed: function(){
           return this.message.split('').reverse().join('');
        }
    },
    beforeCreate() {

        console.log('beforeCreate hook - At this point, events and lifecycle have been initialized.');
        // console.log('API Call about to start',users);
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(x => x.json())
        // .then(response =>
        //     console.log(response));
        // console.log('API call finished', users)
        //console.log('Before Create --- ', this);
    },
    created(){
        console.log('------------------------------------------------------------------------------------------------');
        console.log('created hook - At this point, this.property is now reactive and propertyComputed will update.');        
        console.log(this.message);
        setTimeout(() => {
            this.count = this.count + 1;
        }, 1200)
    },
    beforeMount() {
        console.log('------------------------------------------------------------------------------------------------');
        console.log('beforeMount hook - At this point, vm.$el has not been created yet.');  
        
    },
    mounted() {
        console.log('------------------------------------------------------------------------------------------------');
        console.log(`mounted hook - At this point, vm.$el has been created and el has been replaced.`);
       // console.log(this.$el.textContent) // Example component.
    },
    beforeUpdate() {
        console.log('------------------------------------------------------------------------------------------------');
        console.log(`beforeUpdate hook - At this point, Virtual DOM has not re-rendered or patched yet.`)
        console.log(this.count);
    },
    updated() {
        console.log('------------------------------------------------------------------------------------------------');
        console.log(` updated hook - At this point, Virtual DOM has re-rendered and patched.`)
        console.log(this.count);
    },
    beforeDestroy() {
        console.log('------------------------------------------------------------------------------------------------');
        console.log(`beforeDestroy hook - At this point, watchers, child components, and event listeners have not been teared down yet.`)
    },
    destroyed() {
        console.log('------------------------------------------------------------------------------------------------');
        console.log(`destroyed hook - At this point, watchers, child components, and event listeners have been torn down.`);
    },
    activated() {
        //console.log('------------------------------------------------------------------------------------------------');
    },
    deactivated() {
       // console.log('------------------------------------------------------------------------------------------------');
    },
});