import '../App.css'
import {useState} from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
// import { authenticate } from '../services/authorize'
import { useNavigate } from 'react-router-dom';


const  Login = ()=>{
  const navigate = useNavigate();

  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  
  
  const [errorUserName,setErrorUserName] = useState ('')
  const [errorPassword,setErrorPassword] = useState ('')
  
  
  const [userNameColor,setUserNameColor] = useState('')
  const [passwordColor,setPasswordColor] = useState ('')

  // const handleSubmit = (e) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/dashboard');
    // 
    if(userName.length>8){
      setErrorUserName('')
      setUserNameColor('green')
    }else{
      setErrorUserName('Tên đăng nhập không tồn tại')
      setUserNameColor('red')
    }
    if(password.length>8){
      setErrorPassword('')
      setPasswordColor('green')
    }else{
      setErrorPassword('Mật khẩu Không đúng')
      setPasswordColor('red')
    }
    
    
      axios.post('https://www.melivecode.com/api/login', {
        username: userName,
        password: password })
        .then (response =>{
          // Lưu trữ token nhận được vào localStorage hoặc cookie
          // authenticate(response)
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('user', response.data.user);
        console.log(response.data.status)
        console.log(response.data.message)
        console.log(response.data.user)
        // Điều hướng đến trang được bảo vệ
        })
        .catch((error) =>{
          console.error(error)
        });
  };

  

//     axios.post("https://www.melivecode.com/api/login", {
//       username: userName,
//       password: password
//     })
//     .then (response =>{
//       authenticate(response,()=> props.history.push('/dashboard'))
//       localStorage.setItem('token', response.data.accessToken);
//       localStorage.setItem('user', response.data.user);
//       console.log(response.data.accessToken)
//       console.log(response.data.status)
//       console.log(response.data.message)
//       console.log(response.data.user)
//     });
// }


  return(
  <div className="container">
    <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit} >
          <div className="form-control">
            <label>Tên đăng nhập</label>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}></input>
            <small style={{color:userNameColor}}>{errorUserName}</small>
          </div>
          <div className="form-control">
            <label>Mật khẩu</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}></input>
            <small style={{color:passwordColor}}>{errorPassword}</small>
          </div>
          <div className="form-control">
          <Link to="/Register">Tạo tài khoản?</Link>

          </div>
          <button type="button" onClick={(handleSubmit) } >Đăng Nhập</button>
          
      </form>
    </div>
  )
}

export default (Login);


