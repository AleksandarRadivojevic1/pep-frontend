import axios from "axios";

const client = axios.create ({
    baseURL: 'http://localhost:4000/api',
    headers:{
            'Accept': 'application/json',
             'Content-Type': 'application/json'
        },
        validateStatus:(status)=>{
            return status.toString().startsWith('2')
        
    }
})

export async function useAxios(path:string,method='get', payload={}){
    return await client.request({
        url: path,
        method: method,
        data: payload
    })
}