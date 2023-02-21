import '../App.css'
import {useState} from "react"
import { Link } from 'react-router-dom'
// import axios from "axios"


const Login = ()=>{
  // thar localstorage have UserInfo --> auto redirect dashboard 
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')


  const [errorUserName,setErrorUserName] = useState ('')
  const [errorPassword,setErrorPassword] = useState ('')


  const [userNameColor,setUserNameColor] = useState('')
  const [passwordColor,setPasswordColor] = useState ('')

  // const handleSubmit = e => {
  //   // Prevent the default submit and page reload
  //   e.preventDefault()

    // Handle validations
    // axios
    //   .post("https://www.melivecode.com/api/login", { userName, password })
    //   .then(response => {
    //     console.log(response)
    //     // Handle response
    //     // if dai - > localsave UserInfo 
    //   })
    
  // async function loginUser (credentials){
  //   return fetch('https://www.melivecode.com/api/login',{
  //     method: 'POST',
  //     header: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(credentials)
  //   })
  //   .then(data => data.json) 
  // }
  const validateForm =  (e) =>{
    e.preventDefault()
  //   const response = await loginUser({
  //     userName,
  //     password
  //   });
  //   console.log(response);
  // }

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
}
  return(
  <div className="container">
    <h2>Login</h2>
      <form className="form" onSubmit={validateForm}>
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
          <button type="submit">Đăng Nhập</button>
          
      </form>
    </div>
  )
}


export default Login;