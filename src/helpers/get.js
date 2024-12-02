import axios from "axios"

const url = "http://localhost:3000/Books";

export const getData = async () => {
    let response = await axios.get(url);
    return response.data;
}

export const getOne = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
}