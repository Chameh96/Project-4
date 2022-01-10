import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { getToken } from '../helpers/auth'
import EditPassForm from '../components/EditPassForm'
import { fetchPassword } from '../helpers/api'
import { Button } from 'react-bootstrap'

const EditPassword = () => {
  const [data, setData] = useState({
    username: '',
    sitename: '',
    websiteurl: '',
    password: '', 
    decrypt: '',
  })
  const { id } = useParams()
  const navigate = useNavigate()
  const [pageload, setPageload] = useState(false)

  console.log('ID OF PASSWORD', id)

  useEffect(() => {
    const getPass = async () => {
      const pass = await fetchPassword(id)
      console.log('GETPASS :', pass)
      setData(pass)
      setPageload(true)
      console.log(data)
    }
    getPass()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('HANDLE SUBMIT CHECK')

    const config = {
      method: 'put',
      url: `/api/password/${id}/`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      data,
    }
    console.log('CHECKING DATA :', data)

    try {
      const response = await axios(config)
      console.log('TRY DATA :', response.data)
      navigate(`/password/${id}/`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
    console.log('HANDLE FORM CHANGE', data)
  }
  const goBack = () => {
    navigate(`/password/${id}/`)
  }
  const formInputProps = { data: data, handleFormChange }

  return (
    <>
      { pageload ?
        <>    
          <div className='edit-recipe'>
            <div className='top-titles'>
              <h1>Ed-crypt</h1>
              <h2>Edit Password</h2>
            </div>
            <form onSubmit={handleSubmit} className='total-form'>
              <EditPassForm formInputProps={formInputProps}/>
              <div className='bottom-buttons'>
                <Button type='submit' className = 'update-button' value='Save Updates'>Save Updates</Button>
                <Button type='button' onClick={goBack} className ='update-button' value='Cancel'>Go Back</Button>
              </div>
            </form>
          </div>
        </>
        :
        <></>
      }  
    </>
  )
}
export default EditPassword