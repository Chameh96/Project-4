import React from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router'
import { getToken } from '../helpers/auth'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


const SinglePass = ({
    username,
    sitename,
    websiteurl,
    password,
}) => {
    const { id } = useParams()
    const navigate = useNavigate

    const deletePass = async (id) => {
        const config = {
            method: 'delete',
            url: `/api/password/${id}/`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
        const response = await axios(config)
        console.log(response.data)
        return response.data
    }
    const handleDeleteClick = () => {
        deletePass(id).then((data) => {
            navigate('/api/password/view/')
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
        <h4>Password</h4>
        <p>{password}</p>
      </div>
      <div className='edit-delete-buttons'>
        <button className='delete-button' onClick={handleDeleteClick}>
            Delete Recipe
        </button>
        <Link to={`/api/password/${id}`}>
          <button className='update-button'>Update Recipe</button>
        </Link>
      </div>
      </>
  )

}

export default SinglePass