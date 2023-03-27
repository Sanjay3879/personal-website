import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className="con">
        <div className="content1">
          <p>About</p>
        </div>
        <div className="content2">
          <div className='p22'>
            <p>Hi, I'm Sanjay, nice to meet you. Please take a look around!</p>
          </div>
          <div className='p3'>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.
              </p>  
            </div>
        </div>
        <div className="butt">
                <a href='/' className='bo' target={'_blank'} rel="noreferrer"> Resume</a>
                </div>
      </div>
    </div>
  )
}

export default About
