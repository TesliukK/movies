import axios from "axios";
import {baseURL} from "../configs/urls";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmRhMDNkNzZmMDI0ZjkzMzMzMmJlYjliNzM1NjZjNSIsInN1YiI6IjYzZWU2ZWJkNjk5ZmI3MDA5ZTNlODQxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2VXoKMkZ3ojyY-l9TMNdXEPFbZwr57Rqau26gyhxgPU`
    return config
});

export {
    apiService
};