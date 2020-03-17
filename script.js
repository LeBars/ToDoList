Vue.component('todo-item', {
    props: ['todo', 'id', 'compl', 'del', 'complete'],
    template: `
        <li >
            <div @click="complete(id)" class="co"><i  class="far fa-check-circle"></i></div>
            <p :class="compl ? 'through' : ''">{{ todo.text }}</p>
            <div @click="del(id)" class="de"><i class="fas fa-trash"></i></div>
        </li>
        `
})



var app = new Vue({
    el: '#app',
    data: {
      todos: [],
      newTodo: '',
      arrLocalStorage: '',
      today: '',
      date: ''
    },
    mounted() {
        if(localStorage.TODO) {
            this.arrLocalStorage = localStorage.getItem('TODO')
            this.todos = JSON.parse(this.arrLocalStorage)
        }
        this.today = new Date();
        this.date = this.today.toLocaleDateString('ru-Ru', {weekday: 'long', month: 'short', day: 'numeric'});
    },
    
    methods: {
        addTodo: function() {
            this.todos.push({id: this.todos.length, text: this.newTodo, compl: false, del: false})
           
            this.arrLocalStorage = localStorage.setItem('TODO', JSON.stringify(this.todos));
           
            this.newTodo = ''
        },
        del: function(i) {
            this.todos[i].del = true

            this.arrLocalStorage = localStorage.setItem('TODO', JSON.stringify(this.todos));
        },
        complete: function(i) {
            this.todos[i].compl = !this.todos[i].compl

            this.arrLocalStorage = localStorage.setItem('TODO', JSON.stringify(this.todos));
        }
    }
  })

