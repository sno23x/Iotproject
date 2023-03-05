export const authenticate=(response,next)=>{
    if(window !=="false"){
        localStorage.setItem("token",JSON.stringify(response.data.accessToken))
        localStorage.setItem("user",JSON.stringify(response.data.user))
    }
    next()
}


export const getToken=()=>{
    if(window !=="undefined"){
        if(localStorage.getItem("accessToken")){
            return JSON.parse(localStorage.getItem("accessToken"))
        }else{
            return false
        }
    }
}

export const getUser=()=>{
    if(window !=="undefined"){
        if(localStorage.getItem("user")){
            return JSON.parse(localStorage.getItem("user"))
        }else{
            return false
        }
    }
}


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const authenticate = (Login) => {
//   return () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const history = useNavigate();

//     useEffect(() => {
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         history.push('/');
//       } else {
//         // send token to server to validate
//         setIsAuthenticated(true);
//       }
//     }, [history]);

//     return isAuthenticated ? <Login /> : null;
//   };
// }



// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// export const authenticate = (Login) => {
//   return () => {
//     const history = useNavigate();

//     useEffect(() => {
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         history.push('/login');
//       } else {
//         axios.post('https://www.melivecode.com/api/login', { token })
//           .then(() => {
//             // Người dùng đã được xác thực
//           })
//           .catch(() => {
//             // Token không hợp lệ hoặc đã hết hạn
//             localStorage.removeItem('accessToken');
//             history.push('/dashboard')})
//           }
//         })
//     }
// }
