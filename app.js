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
        addNewNote(index) {
           if (this.inputValue !== '') {
               this.notes.push(this.inputValue)
               this.inputValue = ''
           }
        },
        myToUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index) {
            this.notes.splice(index,1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(newValue) {
            if(newValue.length > 10) {
                this.inputValue = ''
            }
        }
    }
}


Vue.createApp(App).mount('#app')

