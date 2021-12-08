import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { setToken } from '../helpers/auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { login } from '../helpers/api'

const Login = () => {
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await login(data, 'post')
      console.log('RESPONSE TOKEN', response)
      setToken(response.data.token)
      setIsError(false)
      redirect()
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
  }
  const handleEmailChange = (event) => {
    setData({
      ...data,
      email: event.target.value,
    })
  }

  const handlePasswordChange = (event) => {
    setData({
      ...data,
      password: event.target.value,
    })
  }
  const redirect = () => {
    navigate('/home/')
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
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
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
          {/* <Link to={'/home/'}> */}
          <Button
            className='login-button'
            variant='primary'
            type='submit'
            value='Login'
          >
            Login
          </Button>
          {/* </Link> */}
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