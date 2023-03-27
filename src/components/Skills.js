import React from 'react'
import './Skills.css'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';

function Skills() {
    return (
        <div className='skills'>
            <div className="skillcon">
                <div className="skillcon1">
                    <p className='p01'>Skills</p>
                    <p> These are the technologies I've worked with.</p>
                </div>
                <div className="imgcon">
                    <div className='imgs'>
                        <img src={HTML} alt="" />
                        <p>HTML</p>
                    </div>
                    <div className='imgs'>
                        <img src={CSS} alt="" />
                        <p>CSS</p>
                    </div>
                    <div className='imgs'>
                        <img src={JavaScript} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className='imgs'>
                        <img src={ReactImg} alt="" />
                        <p>React JS</p>
                    </div>
                </div>
                <div className="imgcon">
                <div className='imgs'>
                        <img src={GitHub} alt="" />
                        <p>GitHub</p>
                    </div>
                    <div className='imgs'>
                        <img src={Node} alt="" />
                        <p>Node JS</p>
                    </div>
                    <div className='imgs'>
                        <img src={Mongo} alt="" />
                        <p>Mongo DB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
