import axios from "axios"

const url = "http://localhost:3000/Books";

const updateData = async (id, data) => {
    let response = await axios.patch(`${url}/${id}`, data);
    return response.data;
}

export default updateData;