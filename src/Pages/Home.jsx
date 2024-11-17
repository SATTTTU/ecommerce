import React from 'react'
import ads from '../assets/MyLogo.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
        <section className=' hero hello py-3'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div className="intro-excerpt mt-4">
								<h1> <span clsas="d-block">Home</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
							<Link to='/Shop'>	<p><a href="" className="btn btn-secondary me-2">Shop Now</a></p></Link>
							</div>
          </div>
          <div className="col-lg-8">
    <img src={ads}alt="" />
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Home