import axios from 'axios'
import React, { useState } from 'react'
import PassForm from '../components/PassForm'
import { getToken } from '../helpers/auth'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const AddPassword =  () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: '',
    sitename: '',
    websiteurl: '',
    password: '',
  })

  const [isError, setisError] = useState(false)

  const handleSubmit = async (event) => {
    console.log('Button pressed')
    event.preventDefault()
    console.log('submitted data', data)

    const config = {
      method: 'post',
      url: '/api/password/view/',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      data,
    }
    console.log('DATA', data)

    try {
      const response = await axios(config)
      console.log(response.data)
      setisError(false)
      navigate('/home/')
    } catch (err) {
      setisError(true)
      window.alert(`Submitting form data: ${JSON.stringify(data, null, 2)}`)
    }
  }
  const handleFormChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }
  //const formInputProps = { data, handleFormChange } 

  return (
    <>
      <div>
        <div className='top-titles'>
          <h1>Ed-crypt</h1>
          <h2>Add a new password</h2>
        </div>
        <form onSubmit={handleSubmit} className='total-form'>
          <div> 
            <PassForm handleFormChange={handleFormChange}/>
          </div>
          {isError ? (
            <div className='error'>
              <p>Error. Please try again.</p>
            </div>
          ) : (
            <></>
          )}
          <div className='bottom-buttons'>
            <div className='add-button'>
              <Button type='submit' className='update-button' value='Add Password'>Add Password</Button>
            </div>
            <div>
              <Link to={'/home/'}>
                <Button className='update-button'>Go Back</Button>
              </Link>
            </div>
          </div>
        </form>
        
      </div>
    </>
  )
}
export default AddPassword