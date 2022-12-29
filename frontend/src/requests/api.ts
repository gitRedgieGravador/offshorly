import axios, { AxiosResponse } from "axios";
import { debug } from "../utils/logger";
const baseUrl = 'http://localhost:1400' // 'https://gitlab.com/api/v4/projects/26939055'
// const baseUrl = 'https://dev.slab.rocks' // 'https://gitlab.com/api/v4/projects/26939055'
const instance = axios.create({
    baseURL: baseUrl,
    // headers: {
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Origin": "*"
    // },
});

export const api = async (param: { url: string, method: string, data?: any, }) => {
    try {
        // instance.defaults.headers.common['Authorization'] = localStorage.getItem('token') || "";
        const { data, status, statusText }: AxiosResponse = await instance(param)
        
        return { error: false, data, status, statusText }
    } catch (error: any) {
        const { response } = error
        return { error: true, message: response.statusText, status: response.status }
    }
}