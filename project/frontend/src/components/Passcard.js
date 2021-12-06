import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Passcard = ({ username, site_name, website_url, password, id}) => {
    const handleClick = (event) => {
        console.log('Passcard Clicked: ', id)
        event.preventDefault()
    }

    return (
        <>
        <div className={`card ${isHorizontal && 'horizontal'}`}>
      <div>
        <h2>
          <Link to={`/password/${_id}`}>
            {site_name}
          </Link>
        </h2>
        <p>{username}</p>
     </div>
        </>
    )
}