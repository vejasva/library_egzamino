import axios from "axios"

const url = "http://localhost:3000/Books";

const putData = async (id, data) => {
    let response = await axios.put(`${url}/${id}`, data);
    return response.data;
}

export default putData;