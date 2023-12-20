import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const api = axios.create({
    baseURL: `${baseURL}/tasks`,
});
const todoApi = {
    getTasks: async () => {
        const response = await api.get('/')
        return response.data
    },
    addTask: async (newTask) => {
        const response = await api.post('/', newTask)
        return response
    },
    editTask: ({ taskId, updatedTask }) => {
        const response = api.patch(`/${taskId}`, updatedTask);
        return response;
    },
    deleteTask: async (taskId) => {
        const response = await api.delete(`/${taskId}`)
        return response
    },
};

export const {getTasks,addTask,editTask,deleteTask}=todoApi

