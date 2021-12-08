import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { getToken } from '../helpers/auth'
import { Link } from 'react-router-dom'


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
      <div className='passhow'>
        <h4>Username</h4>
        <p>{username}</p>
        <h4>Website Name</h4>
        <p>{sitename}</p>
        <h4>Website URL</h4>
        <p>{websiteurl}</p>
        <h4>Encrypted Password</h4>
        <p>{password}</p>
        <h4>Decrypted Password</h4>
        <p>{decrypted}</p>
      </div>
      <div className='edit-delete-buttons'>
        <button className='delete-button' onClick={handleDeleteClick}>
            Delete Password
        </button>
        <Link to={`/password/edit/${id}/`}>
          <button className='update-button'>Update Password</button>
        </Link>
      </div>
      <div>
        <Link to={'/home/'}>
          <button className='update-button'>Go Back</button>
        </Link>
      </div>
    </>
  )

}

export default SinglePass