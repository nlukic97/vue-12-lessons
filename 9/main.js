Vue.component('message', {
    props:['title','body'],
    data: function(){
        return {
            isVisible: true
        }
    },
    //mozes i na button ' @click="isVisible = false " ', its shorter
    template: 
    `
            <article class="message" v-show="isVisible">
                <div class="message-header">

                {{ title }}

                <button class="delete" @click="hideModal" aria-label="delete"></button>
                </div>
                <div class="message-body">

                {{body}}

                </div>
          </article>
    `,
    methods: {
        hideModal(){
            this.isVisible = false
        }
    }
})

var app = new Vue({
    el:'#root'
})