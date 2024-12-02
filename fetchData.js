const url = "http://localhost:3000/users";
let userId = '00fb';

const newUser = {
    username: "useruser",
    emial: "user@email.co",
    channel: "bruh",
    likes: 0
}

const fetchData = async () => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        }
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// fetchData();

const fetchDelete = async () => {
    try {
        const response = await fetch(url + '/' + userId, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//fetchDelete();
