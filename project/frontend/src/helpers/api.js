import axios from 'axios'
import { getToken } from './auth'


//Login
export const login = async (data) => {
  return makeAxiosRequest('/login', data)
}
  
//Register
export const register = (data) => {
  return makeAxiosRequest('/register', data)
}
  
//Making a request
const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)
  
  const response = await axios(config)
  return response.data
}
  
//Get axios request
export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  // Config object – tells us everything special about the request
  const config = {
    method,
    url: `/api/recipes${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    // The "payload" or the "body" of the request: the important info we send as JSON
    data,
  }
  return config
}

//FETCH ALL RECIPES FROM USER
export const fetchPasswords = async () => {
  const config = {
    method: 'get',
    url: '/api/password/view/',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  console.log(response)
  return response.data
}