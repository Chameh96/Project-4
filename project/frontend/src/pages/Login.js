import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { setToken } from '../helpers/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      email,
      password,
    }
    const config = {
      method: 'post',
      url: '/api/auth/login/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }
    try {
      const response = await axios(config)
      console.log(response)
      setToken(response.data.token)
      setIsError(false)
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    console.log('EMAIL : ', email)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.log('PASSWORD :', password)
  }

  return (
    <>
      <div> 
        <h2>Login to Ed-Crypt</h2>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter email'
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          {isError ? (
            <div className='error'>
              <p>Incorrect username or password.</p>
            </div>
          ) : (
            <></>
          )}
          <Button
            className='login-button'
            variant='primary'
            type='submit'
            value='Login'
          >
            Login
          </Button>
          <label>Not a member yet?</label>
          <Button
            className='not-member-button'
            variant='secondary'
            
          >
            Join Ed-Crypt
          </Button>
        </Form>
      </div>
    </>
  )
}
export default Login