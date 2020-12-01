import jwt from 'jwt-decode'

export const getData = (key) => {
    const data = localStorage.getItem(key);
    console.log(data)
const  misal = [{test:'12345'}]
const  toString = JSON.stringify(misal)
console.log(data)
console.log(JSON.parse(data))
    return JSON.parse(data)
}

// store data
export const storeData = (key, value) => {
    let data = JSON.stringify(value);
    return localStorage.setItem(key, data)
}

export const deleteData = (key) => {
    return localStorage.removeItem(key)
}