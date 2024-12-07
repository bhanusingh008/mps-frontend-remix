import React from 'react'
import './Reach_style.css'
import { Contact } from '../Contact/Contact'

export const Reach = () => {
  return (
    <div className='reach-us'>
        <div className='current-heading'>Get A Call</div>
        <div className='contact-container'>
            <div className='register-div'>
                <Contact/>
            </div>
        </div>
    </div>
  )
}
