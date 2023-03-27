import React from 'react'
import './Contact.css'

function Contact() {
    return (
<div className='contact'>
      <h2 className='h2'>Contact</h2>
      <div className="conf">
        <form action="https://getform.io/f/e0d4a318-4713-46d1-99ee-76ab6efaa357" method="POST" className='formc'>
          <div className="formd">
            <label htmlFor="" className='labelf'>Name</label>
            <input type="text" name="name" id="" className='forminput' placeholder='Enter Your Name' />
          </div>
          <div className="formd">
            <label htmlFor="" className='labelf'>Email</label>
            <input type="email" name="email" id="email" className='forminput' placeholder='Enter Your Email' required />
          </div>
          <div className="formd">
            <label htmlFor="" className='labelf'>Message</label>
            <textarea name="message" className='forminput innp' id="" cols="30" rows="10" placeholder='Enter Message' required></textarea>
          </div>
          <button type="submit" className='buti'>Send</button>
        </form>
      </div>
    </div>
    )
}

export default Contact
