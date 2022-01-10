import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '', 
    password_confirmation: '',
  })

  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: '/api/auth/register/',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }

    try {
      const response = await axios(config)
      console.log(response.data)
      setIsError(false)
      navigate('/login/')
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data, 
      [name]: value,
    })
    console.log(data)
  }

  return (
    <>
      <div>
        <h2>Register your account</h2>
      </div>
      <div className='forms'>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" name="username" value={data.username} onChange={handleFormChange} />
          </Form.Group>  
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstname" placeholder="Enter first name" name="firstname" value={data.firstname} onChange={handleFormChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Enter last name" name="lastname" value={data.lastname} onChange={handleFormChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleFormChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={handleFormChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" name="password_confirmation" onChange={handleFormChange}/>
          </Form.Group>
          {isError ? (
            <div className="error">
              <p>Error. Please try again.</p>
            </div>
          ) : (
            <></>
          )}
          <div className = 'bottom-buttons'>
            <Button className="register-button" variant="primary" type="submit">Register</Button>   
            <Link to={'/'}>
              <Button
                className='login-button'
                variant='secondary'
              >
                Go Back
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Register