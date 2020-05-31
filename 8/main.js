Vue.component('task-list', {
    template:'<div><task v-for="task in tasks"><slot>{{ task.description }}</slot></task></div>', //video 8, 01:22. Why must we put a div here? We are using v4 ? It needs a single root element
    data() { 
        return{
            tasks:[
                {description: 'do this1 YES', completed: true},
                {description: 'do this2 NO', completed: false},
                {description: 'do this3 YES', completed: true},
                {description: 'do this4 No', completed: false}
            ]
        }
    }
})
Vue.component('task', {
    template:'<li><slot></slot></li>',
    data() {
        return{
            message:'something'
        }
    }
})

var app = new Vue({
    el:'#root'
})