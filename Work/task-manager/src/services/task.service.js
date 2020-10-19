import AxiosInstance from '../helpers/axios.js'

const getAllTasks = async () => {
    return await AxiosInstance.post(`/task/allTasks`)
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}

const getSingleTask = async (id) => {
    return await AxiosInstance.post(`/task/${id}`)
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}


const createTask = async (task) => {
    return await AxiosInstance.post(`/task/create`, {
        task
    })
    .then((response) => {
        return response.data ? response.data : null
    })
    .catch((error) => {
        throw error.response.data
    })
}

const assignTask = async (taskId, userId) => {
    return await AxiosInstance.post(`/task/assignTask/${taskId}`, {
        userId
    })
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}



const updateTask = async (id, task) => {
    return await AxiosInstance.post(`/task/updateTask/${id}`, {
        task
    })
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}


const deleteTask = async (id) => {
    return await AxiosInstance.post(`/task/deleteTask/${id}`)
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}

export default {
    getAllTasks,
    getSingleTask,
    createTask,
    assignTask,
    updateTask,
    deleteTask
}