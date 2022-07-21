import { computed, ref } from "@vue/reactivity";
import initialadvertiser from './mock/all.js';

const advertisers = ref([...initialadvertiser]);
const advertisersIncompleted = computed(() => advertisers.value.filter(t => !t.completed));
const advertisersCompleted = computed(() => advertisers.value.filter(t => t.completed));

const toggle = (id) => {
    const advertiser = advertisers.value.find(t => t.id === id);
    if (advertiser?.completed !== undefined) {
        advertiser.completed = !advertiser.completed;
    }
};

const deleteAdvertiser = (id) => {
    advertisers.value = advertisers.value.filter(t => t.id !== id);
}

const advertisersFactory = () => ({ advertisersIncompleted, advertisersCompleted, toggle, deleteAdvertiser });

export { advertisersFactory }; 