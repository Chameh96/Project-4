import { useState, useEffect } from 'react'
import { fetchPasswords } from '../helpers/api'
import React from 'react'
import Passcard from '../components/Passcard'
import { Link } from 'react-router-dom'

const Passlist = () => {
  const [inputs, setInputs] = useState([])
  const [pageload, setPageload] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const passwords = await fetchPasswords()
      console.log('PASSWORDS: ', passwords)
      setInputs(passwords)
      setPageload(true)
      console.log(inputs)
    }
    getData()
  }, [])




  return (
    <>
      { pageload ? 
        <>
          <div>
            <h2> My passwords</h2>
          </div>
          <div className='passList'>
            {inputs.map((input) => (
              <div key={input._id} className = 'onePass'>
                <Passcard {...input}/>
              </div>
            ))}
          </div>
          <div>
            <Link to={'/password/add/'}>
              <button className='update-button'>Add a password</button>
            </Link>
          </div>
        </>
        :
        <></>
      }
    </>
  )
}
export default Passlist