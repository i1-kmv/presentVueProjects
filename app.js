const App = {
    data() {
        return {
            title: 'Список заметок',
            myPlaceholder:"введите название заметки",
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3']

        }
    },
    methods: {
       inputChangeHandler(event) {
          this.inputValue =  event.target.value
       },
        addNewNote(index) {
           this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        deleteNote(index) {
            this.notes.splice(index,1)
        }
    }
}


Vue.createApp(App).mount('#app')

