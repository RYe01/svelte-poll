import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: 'A or B?',
        answerA: 'A',
        answerB: 'B',
        votesA: 9,
        votesB: 15,
    },
]);

export default PollStore;