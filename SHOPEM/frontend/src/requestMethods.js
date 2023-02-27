import axios from "axios";
// import { useState, useEffect } from "react";


// useEffect(() => {
//     const [TOKEN, setTOKEN] = useState(() => {
//         if(typeof window !== undefined){
//             const gottenToken=
//         }
//     })
// })
const BASE_URL = "https://shopem.onrender.com/api";
const TOKEN = JSON.parse(JSON.parse(localStorage?.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`,
},
})