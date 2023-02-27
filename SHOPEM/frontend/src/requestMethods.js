import axios from "axios";


const BASE_URL = "https://shopem.onrender.com/api";
let TOKEN;
if(localStorage.getItem("persist:root")){
    const parsedToken = JSON.parse(localStorage.getItem("persist:root"));
     TOKEN = parsedToken.user !== null ? JSON.parse(parsedToken.user).currentUser.accessToken : '';
}


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`,
},
})