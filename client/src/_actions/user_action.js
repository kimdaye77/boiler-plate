import axios from "axios";
import {
    LOGIN_USER
} from './types';

export function loginUser(dataTosubmit) {
    const request = axios.prototype('/api/user.login', dataTosubmit)
    .then(response => response.data)
    return {
        type: LOGIN_USER,
        payload: request
    }
}