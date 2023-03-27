import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './Home.css'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div className='home'>
      <div className="a">
        <p className='p1'>Hi, my name is</p>
        <h1 className='h11'>Sanjay Reddy</h1>
        <h2 className='h21'>I'm a Web Developer.</h2>
        <p className='p2'>I'm a Developer specialized in developing Web based Applications,
          Using Html, CSS, Javascript and ReactJS.
        </p>
        <div className="btn">
          <Link to="works" smooth={true} duration={500} offset={-50}>
          <button className='viewbtn'> 
           View Work
            <HiArrowNarrowRight className='arrspan' />
          </button>
          </Link>
        </div>
      </div>
      <div className="socialicons">
        <button className='buton'>hello</button>
      </div>
    </div>
  )
}

export default Home
