import { useState, useEffect } from 'react'
import { fetchPasswords } from '../helpers/api'
import React from 'react'
import Passcard from '../components/Passcard'

const Passlist = () => {
  const [inputs, setInputs] = useState([])

  useEffect(() => {
    fetchPasswords().then(setInputs)
  }, [])

  return (
    <>
      <div>
        <h2> My passwords</h2>
      </div>
      <div className='passList'>
        {inputs.map((input) => {
          return (
            <div key={input._id} className = 'onePass'>
              <Passcard {...inputs}/>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Passlist