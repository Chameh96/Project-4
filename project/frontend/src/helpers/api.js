import axios from 'axios'
import { getToken } from './auth'


//Login
export const login = async (data, methoded) => {
  const config = {
    method: methoded,
    url: '/api/auth/login/',
    headers: {
      'Content-Type': 'application/json',
    },
    // The "payload" or the "body" of the request: the important info we send as JSON
    data,
  }
  const response = await axios(config)
  return response.data
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
    url: `/api/auth/${requestUrl}`,
    headers: {
      'Content-Type': 'application/json',
    },
    // The "payload" or the "body" of the request: the important info we send as JSON
    data,
  }
  return config
}

//FETCH ALL PASSWORD FROM USER
export const fetchPasswords = async () => {
  const config = {
    method: 'get',
    url: '/api/password/view/',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  }
  const response = await axios(config)
  console.log('RESPONSE', response)
  return response.data
}

//FETCH SINGLE PASSWORD FROM USER
export const fetchPassword = async (id) => {
  const config = {
    method: 'get',
    url: `/api/password/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  }
  const response = await axios(config)
  console.log('SINGLE REPSONSE :', response)
  return response.data
}