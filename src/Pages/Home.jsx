import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import education from '../assets/education.png'

function Home() {
  return (
    <div className='body'>
        <Header/>

        <div className='content'>
            <div className="items">
                <h1 style={{color:"white"}}>Education</h1>
                <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet <br /> quas facilis voluptatum sunt tempore <br /> aliquid. Molestias saepe placeat tempore iusto! Nihil ratione, eligendi <br /> dolorum corrupti fugiat recusandae error sequi.</p>
                <div><span  style={{color:"white"}}>New Student? Click here</span><Link to={'/register'}> <button className='btn bg-warning'>Register</button></Link></div>
            </div>
            <div className="items">
                <img src={education} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Home
