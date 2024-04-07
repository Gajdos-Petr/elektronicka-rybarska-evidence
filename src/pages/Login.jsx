import React from 'react'
import LoginForm from '../components/buttons/LoginForm'

const loginPageStyle ={
minHeight: "80vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
backgroundImage: "radial-gradient(circle at 69% 86%, rgba(165, 165, 165,0.06) 0%, rgba(165, 165, 165,0.06) 25%,rgba(193, 193, 193,0.06) 25%, rgba(193, 193, 193,0.06) 50%,rgba(221, 221, 221,0.06) 50%, rgba(221, 221, 221,0.06) 75%,rgba(249, 249, 249,0.06) 75%, rgba(249, 249, 249,0.06) 100%),radial-gradient(circle at 49% 76%, rgba(129, 129, 129,0.06) 0%, rgba(129, 129, 129,0.06) 25%,rgba(164, 164, 164,0.06) 25%, rgba(164, 164, 164,0.06) 50%,rgba(200, 200, 200,0.06) 50%, rgba(200, 200, 200,0.06) 75%,rgba(235, 235, 235,0.06) 75%, rgba(235, 235, 235,0.06) 100%),radial-gradient(circle at 22% 64%, rgba(173, 173, 173,0.06) 0%, rgba(173, 173, 173,0.06) 25%,rgba(119, 119, 119,0.06) 25%, rgba(119, 119, 119,0.06) 50%,rgba(64, 64, 64,0.06) 50%, rgba(64, 64, 64,0.06) 75%,rgba(10, 10, 10,0.06) 75%, rgba(10, 10, 10,0.06) 100%),linear-gradient(307deg, rgb(255,255,255),rgb(255,255,255))"


}

function Login() {

  return (
   <div className="container-section" style={loginPageStyle}>
     <LoginForm/>
   </div>
  )
}

export default Login