/* eslint-disable no-useless-catch */
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/blog/v1',
    timeout: 1000
})

export const getBlogs = async () => {
    try{
        return await apiClient.get('/posting')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getComentarios = async () => {
    try{
        return await apiClient.get('/comment')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const postComentarios = async (data) => {
    try {
        return await apiClient.post('/comment/add', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}