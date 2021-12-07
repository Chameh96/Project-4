import axios from 'axios'
import React, { useState } from 'react'
import PassForm from '../components/PassForm'
import { getToken } from '../helpers/auth'
import { useNavigate } from 'react-router'

const AddPassword =  () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        username,
        sitename,
        websiteurl,
        password,
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
            data
        }
        console.log('DATA', data)

        try {
            const response = await axios(config)
            console.log(response.data)
            setisError(false)
            navigate(`/api/password/${response.data._id}`)
        } catch (err) {
            setisError(true)
            window.alert(`Submitting form data: ${JSON.stringify(data, null, 2)}`)
        }
    }
    const handleFormChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    return (
       <>
       <div>
           <h3>Add a new password</h3>
           <form onSubmit={handleSubmit} className='total-form'>
               <div> 
                   <PassForm handleFormChange={handleFormChange}/>
               </div>
           </form>
           {isError ? (
              <div className='error'>
                <p>Error. Please try again.</p>
              </div>
            ) : (
              <></>
            )}
        <div className='add-button'>
          <input type='submit' className='click' value='Add Password' />
        </div>
       </div>
       </>

    )
}
export default AddPassword