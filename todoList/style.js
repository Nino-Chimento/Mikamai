Vue.component('task-list', {
    template: '#task-list',
    props: {
        tasks: { default: [] }
    },
    data() {
        return {
            newTask: '',
            options: [
                { 'value': "Tutti", 'text': 'Tutti' },
                { 'value': "Completati", 'text': "Completati" },
                { 'value': "Non Completati", 'text': "Non Completati" },
                { 'value': "Originali", 'text': "Originali", },
                { 'value': "Aggiunti", 'text': "Aggiunti", },
            ],
            tasksFiltered: [],
        };
    },
    computed: {
        incomplete() {
            return this.tasks.filter(this.inProgress).length;
        },
        setVisibilityTasksFiltered() {
            return this.tasksFiltered.length > 0;
        }
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push({
                    title: this.newTask,
                    completed: true,
                    add: true
                });
                this.newTask = '';
            }
        },
        setAllComplete() {
            this.tasks.forEach(task => {
                task.completed = true
            });
        },
        setAllNoComplete() {
            this.tasks.forEach(task => {
                task.completed = false
            });
        },
        completeTask(task) {
            task.completed = !task.completed;
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        clearCompleted() {
            this.tasks = this.tasks.filter(this.inProgress);
        },
        clearAll() {
            this.tasks = [];
        },

        inProgress(task) {
            return !this.isCompleted(task);
        },
        isCompleted(task) {
            return task.completed;
        },
        onChange(event) {
            console.log(event.target.value)
            this.tasksFiltered = []
            let option = event.target.value;
            switch (option) {
                case "Tutti":
                    console.log("ok");
                    break;
                case "Completati":
                    this.tasks.forEach(element => {
                        if (element.completed === true) {
                            this.tasksFiltered.push(element)
                        }
                    });
                    break;
                case "Non Completati":
                    this.tasks.forEach(element => {
                        if (element.completed === false) {
                            this.tasksFiltered.push(element)
                            console.log(this.tasksFiltered);
                        }
                    });
                    break;
                case "Originali":
                    this.tasks.forEach(element => {
                        if (element.add !== true) {
                            this.tasksFiltered.push(element)
                        }
                    });
                    break;
                case "Aggiunti":
                    this.tasks.forEach(element => {
                        if (element.add === true) {
                            this.tasksFiltered.push(element)
                        }
                        if (this.tasksFiltered.length === 0)
                            this.tasksFiltered = [{ title: "Nessuna Nota Aggiunta" }]
                    });
                    break;
                default:
                    console.log("error no option");
                    // code block
            }
        },
    }
});

Vue.component('task-item', {
    template: '#task-item',
    props: ['task'],
    computed: {
        className() {
            let classes = ['tasks__item__toggle'];
            if (this.task.completed) {
                classes.push('tasks__item__toggle--completed');
            }
            return classes.join(' ');
        }
    }
});

new Vue({
    el: '#app',
    data: {
        tasks: [{
                id: "uuid-1",
                title: "item 1",
                completed: true
            },
            {
                id: "uuid-2",
                title: "item 2",
                completed: false
            },
            {
                id: "uuid-3",
                title: "item 3",
                completed: true
            },
        ]
    }
});