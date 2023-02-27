import axios from "axios";


const BASE_URL = "https://shopem.onrender.com/api";
let parsedToken ;
if(localStorage.getItem("TOKEN")){
     parsedToken = localStorage.getItem("TOKEN");
}


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${parsedToken}`,
},
})