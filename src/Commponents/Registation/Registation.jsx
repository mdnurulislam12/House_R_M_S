import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "../../styles/Register.scss"

const Registation = () => {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:"",
    profileImage: null,
  });

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    setFormdata({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    })
  }
  console.log(formData);

  const [passwordMatch, setPasswordMatch] = useState(true)

  useEffect(()=>{
    setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try{
      const register_form = new FormData()

      for(var key in formData){
        register_form.append(key, formData[key])
      }

      const response = await fetch("http://localhost:3001/auth/register",{
        method: "POST",
        body: register_form
      })

      const result = await response.json();

      if(response.ok){
        alert("Registration successful! Please check your email to verify your account.")
        navigate("/login")
      }else{
        alert(result.message || "Registration failed!");
      }
    }catch(err){
      console.log("Registration failed", err.message)
      alert("Registration failed! plaese try again")
    }
  }

  return (
    <div className="register">
      <div className="register_content">
        <form className='register_content_form' onSubmit={handleSubmit} >
          <input onChange={handleChange} placeholder='First Name' name='firstName' value={formData.firstName} required />
          <input onChange={handleChange} placeholder='Last Name' name='lastName' value={formData.lastName} required />
          <input onChange={handleChange} placeholder='Email' name='email' type='email'
         value={formData.email} required />
          <input onChange={handleChange} placeholder='Password' name='password' type='password' value={formData.password} required />
          <input onChange={handleChange} placeholder='Confirm Password' name='confirmPassword' type='password' value={formData.confirmPassword} required />

          {!passwordMatch && (
            <p style={{color: "red"}}>Passwords are not matched!</p>
          )}

          <input onChange={handleChange} id='image' name='profileImage' type='file' accept='image/*' style={{display: "none"}} required />
          <label htmlFor='image'>
            <img src="../public/assets/addimage.png" alt="add the profile photo" />
            <p>Upload Profile Photo</p>
          </label>

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}
          <button type='submit' disabled={!passwordMatch}>REGISTER</button>
        </form>
        <a href="/login">Already have an account? Log in Here</a>
      </div>
    </div>
  )
}

export default Registation