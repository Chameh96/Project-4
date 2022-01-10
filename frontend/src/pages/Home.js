import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const Home = () => {

  return (
    <>
      <div className='homepage'>
        <h1>ED-CRYPT</h1>
        <div className='home-text'>
          <h4 className='home-text'> About Ed-crypt </h4>
          <p >
              The lock and key on your password saftey. Using cryptographys high level symmetric encryption recipe. This website uses a Fernet key which guarantees that your passwords cannot be read or manipulated. 
          </p>
          <p >Ed-crypt uses this key to encrypt your passwrods, returning a URL-safe base64-encoded secure message known as a Fernet token.</p>
          <p> Decryption works using the same method so when you go to view your passwords you can see not only the decrypted password, but also what your password looks like within our database. </p>
        </div>
        <div className='bottom-buttons'>
          <Link to={'/register/'}>
            <Button
              className='register-button'
              variant='secondary'
            >
              Register
            </Button>
          </Link>
          <Link to={'/login/'}>
            <Button
              className='login-button'
              variant='secondary'
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Home