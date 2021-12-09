import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const PassForm = ({ handleFormChange }) => {
  const [username, setUsername] = useState('')
  const [sitename, setSitename] = useState('')
  const [websiteurl, setWebsiteurl] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (event) => {
    setUsername(event.target.value)
    handleFormChange('username', event.target.value)
    console.log(username)
  }
  const handleSiteChange = (event) => {
    setSitename(event.target.value)
    handleFormChange('sitename', event.target.value)
    console.log(sitename)
  }
  const handleUrlChange = (event) => {
    setWebsiteurl(event.target.value)
    handleFormChange('websiteurl', event.target.value)
    console.log(websiteurl)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    handleFormChange('password', event.target.value)
    console.log(password)
  }
  return (
    <div className='forms'>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Username</Form.Label>
        < Form.Control type="text" placeholder="Enter Username" name='username' value={username} onChange={handleNameChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Website Name</Form.Label>
        < Form.Control type="text" placeholder="e.g. Facebook" name='sitename' value={sitename} onChange={handleSiteChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Website URL</Form.Label>
        < Form.Control type="text" placeholder="e.g. www.Facebook.com" name='websiteurl' value={websiteurl} onChange={handleUrlChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="recipeTitle">
        <Form.Label>Password</Form.Label>
        < Form.Control type="text" placeholder="Enter Password" name='password' value={password} onChange={handlePasswordChange} />
      </Form.Group>
    </div>
  )


}
export default PassForm