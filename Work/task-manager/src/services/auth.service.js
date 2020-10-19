import axios from 'axios';
let baseUrl = 'http://localhost:8080/api/v1';


const registerUser = async (email, password) => {
    return await axios.post(`${baseUrl}/auth/register`, {
        email,
        password
    })
        .then((response) => {
            return response.data ? response.data : null
         })
        .catch((error) => {
            throw error.response.data
         })
}


const logIn = async (email, password) => {
    return await axios.post(`${baseUrl}/auth/login`, {
        email,
        password
    })
        .then((response) => {
            if (response.data && response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((error) => {
            throw error.response.data
        })
}

const logOut = () => {
    localStorage.removeItem("user");
}

export default {
    registerUser,
    logIn,
    logOut
}