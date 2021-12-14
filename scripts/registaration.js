const app = Vue.CreateApp({})

app.component('input_title',{
    data(){
        return{
            title:'ここにタイトルを入力'
        }
    },
    template: `
    <p>{{ title }}</p>
    <input v-model="title" />`
})

app.mount('#inputTitle')

const Counter = {
    data() {
      return {
        counter: 0
      }
    }
  }
  
  Vue.createApp(Counter).mount('#counter')
