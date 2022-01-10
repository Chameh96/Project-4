import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const EditPassForm = ({ formInputProps }) => {
  const [username, setUsername] = useState('')
  const [sitename, setSitename] = useState('')
  const [websiteurl, setWebsiteurl] = useState('')
  const [password, setPassword] = useState('')

  console.log('FORM INPUT PROPS DATA', formInputProps.data)
  const data = formInputProps.data

  const handleNameChange = (event) => {
    setUsername(event.target.value)
    formInputProps.handleFormChange('username', event.target.value)
    console.log(username)
  }
  const handleSiteChange = (event) => {
    setSitename(event.target.value)
    formInputProps.handleFormChange('sitename', event.target.value)
    console.log(sitename)
  }
  const handleUrlChange = (event) => {
    setWebsiteurl(event.target.value)
    formInputProps.handleFormChange('websiteurl', event.target.value)
    console.log(websiteurl)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    formInputProps.handleFormChange('password', event.target.value)
    console.log(password)
  }
  
  return (
    <div className='forms'>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Username</Form.Label>
        < Form.Control type="text" placeholder="Enter Username" name='username' value={data.username} onChange={handleNameChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Website Name</Form.Label>
        < Form.Control type="text" placeholder="e.g. Facebook" name='sitename' value={data.sitename} onChange={handleSiteChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Website URL</Form.Label>
        < Form.Control type="text" placeholder="e.g. www.Facebook.com" name='websiteurl' value={data.websiteurl} onChange={handleUrlChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Password</Form.Label>
        < Form.Control type="text" placeholder="Enter New Password" name='password' value={password} onChange={handlePasswordChange} />
      </Form.Group>
    </div>
  )


}
export default EditPassForm