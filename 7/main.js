Vue.component('task', {
    template:'<li><slot></slot></li>', //slot add anything we input here
    data() { //video 7, 04:32. You have to set data equal to a function that returns an object. Becuase it is not linked to any single instance. 
        return{
            message:'something'
        }
    }
})

var app = new Vue({
    el:'#root'
})