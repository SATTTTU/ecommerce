import React from 'react'
import post from'../assets/post-1.jpg'
import ads from '../assets/couch.png'

function Blog() {
  return (
    <>
    
    
	<section className=' hero hello py-3'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div className="intro-excerpt mt-4">
								<h1> <span clsas="d-block">Blogs</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a></p>
							</div>
          </div>
          <div className="col-lg-8">
    <img src={ads}alt="" />
          </div>
        </div>
      </div>
      </section>
      <section className='py-3'>
      <div className="blog-section ">
			<div className="container">
				
				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
      </section>
    </>
  )
}

export default Blog