import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { getToken } from '../helpers/auth'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const SinglePass = ({
  username,
  sitename,
  websiteurl,
  password,
  decrypted,
}) => {
  const { id } = useParams()
  const navigate = useNavigate()  
  const deletePass = async (id) => {
    const config = {
      method: 'delete',
      url: `/api/password/${id}/`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
    const response = await axios(config)
    console.log(response.data)
    return response.data
  }
  const handleDeleteClick = () => {
    deletePass(id).then((data) => {
      navigate('/home/')
      console.log(data)
    }) .catch((err) => {
      console.error(err)
      alert(err)
    })
  }
  return (
    <>
      <div className='top-titles'> 
        <h1>Ed-crypt</h1>
      </div>
      <div className='passhow'>
        <div >
          <h4>Username</h4>
          <p>{username}</p>
        </div>
        <div className='sing-text'>
          <h4>Website Name</h4>
          <p>{sitename}</p>
        </div>
        <div className='sing-text'>
          <h4>Website URL</h4>
          <p>{websiteurl}</p>
        </div>
        <div className='sing-text'>
          <h4>Encrypted Password</h4>
          <p>{password}</p>
        </div>
        <div className='sing-text'>
          <h4>Decrypted Password</h4>
          <p>{decrypted}</p>
        </div>
      </div>
      <div className='bottom-buttons'>
        <Button className='update-button' onClick={handleDeleteClick}>
            Delete Password
        </Button>
        <Link to={`/password/edit/${id}/`}>
          <Button className='update-button'>Update Password</Button>
        </Link>
      </div>
      <div>
        <Link to={'/home/'}>
          <Button className='update-button'>Go Back</Button>
        </Link>
      </div>
    </>
  )

}

export default SinglePass