import { hookstate, useHookstate } from '@hookstate/core';

const initialState = {
    tasks: [],
};

const tasksState = hookstate(initialState);

export const useTasksState = () => useHookstate(tasksState);

const todoStateControllerHandler = (state) => {
    return {
        setTasks(data) {
            return state.tasks.set(data);
        },
        getTasks() {
            return state.tasks.get();
        },
    };
};

export const todoStateController = todoStateControllerHandler(tasksState);
