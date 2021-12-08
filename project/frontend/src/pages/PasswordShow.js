import React, { useState, useEffect } from 'react'
import SinglePass from '../components/SinglePass'
import { useParams } from 'react-router'
import { fetchPassword } from '../helpers/api' 

const PasswordShow = () => {
  const [password, setPassword] = useState(null)
  const { id } = useParams() 

  useEffect(() => {
    fetchPassword(id).then(setPassword)
    console.log(password)
  }, [id])  

  return (
    <>
      {password && (
        <section>
          <div className='single-pass'>
            <SinglePass {...password} setPassword={setPassword}/>
          </div>
        </section>
      )}
    </>
  )
}
export default PasswordShow