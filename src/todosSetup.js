import { computed, ref } from "@vue/reactivity";
import initialtodos from './mock/all.js';

const todos = ref([...initialtodos]);
const todosIncompleted = computed(() => todos.value.filter(t => !t.completed));
const todosCompleted = computed(() => todos.value.filter(t => t.completed));

const toggle = (id) => {
    const todo = todos.value.find(t => t.id === id);
    if (todo?.completed !== undefined) {
        todo.completed = !todo.completed;
    }
};


const todosFactory = () => ({todosIncompleted, todosCompleted, toggle});

export {todosFactory};