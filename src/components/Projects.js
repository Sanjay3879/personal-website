import React from 'react'
import portfolio from '../assets/portfolio.png'
import movies from '../assets/movies.png'
import './Projects.css'

const data = [
    {
        id: 1,
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-dashboard-8f800.appspot.com/o/images%2Fnetflix.png?alt=media&token=f41ff2eb-3149-47f0-8b6a-d1b42ba5c4b8",
        title: "Netflix Clone",
        github: "https://github.com/Sanjay3879/netflix-clone",
        demo: ""
    },
    {
        id: 2,
        image: movies,
        title: "Movies Website",
        github: "https://github.com/Sanjay3879/movies-website",
        demo: ""
    },
    {
        id: 3,
        image: portfolio,
        title: "Portfolio Website",
        github: "https://github.com/Sanjay3879/personal-website",
        demo: ""
    },
]
function Projects() {
    return (
        <div className='works'>
            <h5 className='h5'>My Works</h5>
            <h2 className='h2'>Projects</h2>
            <div className="allp">
                {data.map((item) => {
                    return (
                        <div className="singlep" key={item.id}>
                            <div className="allimgs">
                                <img src={item.image} alt="" className="pimg" />
                            </div>
                            <h3 className='h3'>{item.title}</h3>
                            <div className="plinks">
                                <a href={item.github} className='gitlink' target="_blank" rel="noreferrer">Github</a>
                                <a href={item.demo} className="demolink" target="_blank" rel='noreferrer'>Demo</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects

