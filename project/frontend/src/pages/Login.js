import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { setToken } from '../helpers/auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

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
      navigate('/home/')
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
          <Link to={'/home/'}>
            <Button
              className='login-button'
              variant='primary'
              type='submit'
              value='Login'
            >
              Login
            </Button>
          </Link>
          <label>Not a member yet?</label>
          <Link to={'/register/'}>
            <Button
              className='not-member-button'
              variant='secondary'
            >
              Join Ed-Crypt
            </Button>
          </Link>
        </Form>
      </div>
    </>
  )
}
export default Login