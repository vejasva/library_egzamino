import axios from "axios"

const url = "http://localhost:3000/Books";

const postData = async (data) => {
    let response = await axios.post(url, data);
    return response.data;
}

export default postData;