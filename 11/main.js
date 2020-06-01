Vue.component('tabs',{ //ne razumem ovaj li v-for, kako hvata tab name. 06:30
    template:`
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" v-bind:class="{'is-active' : tab.isActive}">
                    <a v-bind:href='tab.href' v-on:click="selectTab(tab)">{{tab.name}}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>

    `,
    data(){
        return { 
           tabs:''  //sa ovim tabs vidi sve tab elemente
        }
    },
    created(){ //jel this.$children    tab?    Child od tabs?
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){ //completely lost at this point. Are we modiying this component, or the tab component?
            this.tabs.forEach(tab=>{
                tab.isActive = (tab.name == selectedTab.name)
            })
        }
    }
})

Vue.component('tab',{
    template:`
    <div v-show="this.isActive">
        <slot></slot>
    </div>
    `,
    props:{ //immutable
        name: {required: true}, //Ne razumem, jel ovo default attribute ?
        selected: {default: false} //jel selected default attribute po vue ili na bulma?
    },
    data(){
        return {
        isActive: false
        }
    },
    computed:{
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    mounted(){
        this.isActive = this.selected
    }
})

new Vue({
    el:'#root'
})