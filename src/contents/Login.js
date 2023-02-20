import '../App.css'
import {useState} from "react"
import { Link } from 'react-router-dom'



const Login = ()=>{
  
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')


  const [errorUserName,setErrorUserName] = useState ('')
  const [errorPassword,setErrorPassword] = useState ('')


  const [userNameColor,setUserNameColor] = useState('')
  const [passwordColor,setPasswordColor] = useState ('')


  const validateForm = (e)=>{
    e.preventDefault()

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
export default Login