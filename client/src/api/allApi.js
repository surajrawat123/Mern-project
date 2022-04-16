import axios from 'axios';
// const axios = require('axios');

// const url = 'https://incubytes-project.herokuapp.com/incubyte';
// const url = 'http://localhost:4000/incubyte';
const url = 'https://incubytes.herokuapp.com/incubyte';

export const fetchAllItems = () => {
     return axios.get(url);
}

export const createItem = (item) => {
     return axios.post(url,item);
}

export const updateItem = (id,item) => {
     return axios.patch(`${url}/${id}`,item);
}

export const deleteItem = (id) => {
     return axios.delete(`${url}/${id}`);
}