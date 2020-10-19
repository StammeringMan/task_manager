import AxiosInstance from '../helpers/axios.js'



const getAllUsers = async () => {
    return await AxiosInstance.post(`/userss/allUsers`)
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}

const getSingleUser = async (id) => {
    return await AxiosInstance.post(`/users/${id}`)
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}


const updateUserRole = async (id, role) => {
    return await AxiosInstance.patch(`/users/updateUserRole/${id}`, {
        role
    })
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}


const updateUser = async (id, user) => {
    return await AxiosInstance.patch(`/users/updateUser/${id}`, {
        user
    })
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}


const deleteUser = async (id) => {
    return await AxiosInstance.post(`/users/deleteUser/${id}`)
}


const getUserByQuery = async (query) => {
    return await AxiosInstance.post(`/users/search`, {
        query
    })
        .then((response) => {
            return response.data ? response.data : null
        })
        .catch((error) => {
            throw error.response.data
        })
}


export default {
    getAllUsers,
    getSingleUser,
    updateUserRole,
    updateUser,
    deleteUser,
    getUserByQuery
}