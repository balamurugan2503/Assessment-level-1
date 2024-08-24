import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../Components/login.css'
import { EmailValidator, lowerPresent, numPresent, specialPresent, upperPresent } from '../utilities'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [emailError,setEmailError]=useState("")
    const [valid,setValid]=useState(0)
    const [passwordError,setPasswordError]=useState([])
    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/")
        }
      
    },[])
    useEffect(()=>{
        if(valid==1){
          validCheck()
        }

      },[email,password])

      const handlesignup=()=>{
        setValid(1)

        
          if(validCheck()){
            setValid(0)
            localStorage.setItem("token",email+password)
            navigate("/")
          }
      }
      const validCheck=()=>{
        let emailcheck=false
        if (email !== "") {
          let emailCheck = EmailValidator(email);
          if (emailCheck) {
            setEmailError("");
            emailcheck=true
          } else {
            emailcheck=false
            setEmailError("Incorrect Email");
          }
        } else {
          emailcheck=false
          setEmailError("Email id is required");
        }
        let arrayValue = []
     if (password == "") {
      arrayValue.push("New password is required")
      setPasswordError(["New password is required"])
      
    } else {
      if (!upperPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 in capital case!")
      }
      if (!numPresent(password) && password.length !== 0) {
        arrayValue.push("Must have at least 1 number")
      }
      if (!lowerPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 lower lase!")
      }
      
      if (password.length < 8) {
        arrayValue.push("Must be at least 8 characters!")
      }
      if (!specialPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 special characters!")
      }
      setPasswordError(arrayValue)
    }
        if(arrayValue.length==0&&emailcheck ==true){
         return true
        }else{
          return false
        }
      }
  return (
  <>
  <div >
    <div className='page-wrapper'>
        <div className='left-content'>
            <div className='title-content'>
                <h3 >Sign In</h3>
                <div className='link-btn'>
                    <p>New user?</p>
                    <a href='#'>Create an account</a>
                </div>
            </div>
            <Form className='form-input'>
                <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Control  type="email" placeholder="Username or email" onChange={(e)=>setEmail(e.target.value)} />
                    {emailError !==""&&valid==1&&<p className='text-red-600 text-xs font-normal' style={{color:"red"}}>{emailError}</p>}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    {valid==1&& <div class="mt-1">
                        <ul class="grid grid-cols-1 sm:grid-cols-2  ps-2 gap-y-2">
                          {passwordError?.map((err)=>(
                          <li class="text-xs font-normal text-red-600" style={{color:"red",listStyleType:"none"}}>{err}</li>
                          ))}
                        </ul>
                      </div>}
                </Form.Group>
            </Form>
            <Form.Check
            inline
            label="Keep me signed in"
            name="group1"
            type="checkbox"
            id="2"
          />
           <Button className="sigin-btn" onClick={handlesignup}>Sign In</Button>
           <div className='sigup'>
            <div className='line'></div>
            <p>Or Sign In With</p>
            <div className='line'></div>
           </div>
           <div className='foot-icon'>
                <button className='icon'>
                    <img src='/google.PNG'style={{width:"30px",height:"30px"}}/>
                </button>
                <button className='icon'>
                    <img src='/facebook.PNG'style={{width:"30px",height:"30px"}}/>
                </button>
                <button className='icon'>
                    <img src='/indeed.PNG'style={{width:"30px",height:"30px"}}/>
                </button>
                <button className='icon'>
                    <img src='/twitter.PNG'style={{width:"30px",height:"30px"}}/>
                </button>
            </div>
        </div>
    </div>
  </div>
  </>
  )
}
