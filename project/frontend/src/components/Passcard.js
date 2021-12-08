import React from 'react'
import { Link } from 'react-router-dom'

const Passcard = ({ username, sitename, id }) => {
  //const handleClick = (event) => {
  //console.log('Passcard Clicked: ', id)
  //event.preventDefault()
  //}

  return (
    <>
      <div>
        <h2>
          <Link to={`/password/${id}/`}>
            {sitename}
          </Link>
        </h2>
        <p>{username}</p>
      </div>
    </>
  )
}

export default Passcard