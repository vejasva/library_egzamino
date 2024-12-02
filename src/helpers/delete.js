import axios from "axios";

const url = "http://localhost:3000/users";

const deleteData = async (id) => {
    let response = await axios.delete(`${url}/${id}`);
    return response.data;
}

export default deleteData;