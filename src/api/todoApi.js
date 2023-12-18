import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const api = axios.create({
    baseURL: `${baseURL}/tasks`,
});
const todoApi = {
    getTasks: async () => {
        const response = await api.get('/')
        return response
    },
    addTask: async (newTask) => {
        const response = await api.post('/', newTask)
        return response
    },
    editTask: async (taskId, updatedTask) => {
        const response = await api.patch(`/${taskId}`, updatedTask)
        return response
    },
    deleteTask: async (taskId) => {
        const response = await api.delete(`/${taskId}`)
        return response
    },
};

export default todoApi;
