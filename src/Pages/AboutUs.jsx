import React from 'react'
import ads from '../assets/couch.png'
import whychhoseus from '../assets/whychooseus.jpg'
import name1  from  '../assets/return.svg'
import support from '../assets/support.svg'
import people from '../assets/person-1.png'

function AboutUs() {
  return (
    <>
<section>
<section className=' hero hello py-3'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div className="intro-excerpt mt-4">
								<h1> <span clsas="d-block">About Us </span></h1>
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
</section>
<section>
<div className="why-choose-section py-4">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={support} alt="Image" className="imf-fluid" />
									</div>
									<h3>Fast & Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={support} alt="Image" className="imf-fluid" />
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={support} alt="Image" className="imf-fluid" />
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={name1} alt="Image" className="imf-fluid" />
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src={whychhoseus} alt="Image" className="img-fluid" />
						</div>
					</div>

				</div>
			</div>
		</div>
    </section>
    <section className='py-3'>
    <div className="untree_co-section">
			<div className="container">

				<div className="row mb-5">
					<div className="col-lg-5 mx-auto text-center">
						<h2 className="section-title">Our Team</h2>
					</div>
				</div>

				<div className="row">

					{ /* Start Column 1 */ }
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={people} className="img-fluid mb-5" />
						<h3 clas=""><a href="#"><span className="">Lawson</span> Arnold</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward" /></a></p>
					</div> 
					{ /* End Column 1 */ }

					{ /* Start Column 2 */ }
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={people} className="img-fluid mb-5" />

						<h3 clas=""><a href="#"><span className="">Jeremy</span> Walker</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward" /></a></p>

					</div> 
					{ /* End Column 2 */ }

					{ /* Start Column 3 */ }
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={people} className="img-fluid mb-5" />
						<h3 clas=""><a href="#"><span className="">Patrik</span> White</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward" /></a></p>
					</div> 
					{ /* End Column 3 */ }

					{ /* Start Column 4 */ }
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={people} className="img-fluid mb-5" />

						<h3 clas=""><a href="#"><span className="">Kathryn</span> Ryan</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward" /></a></p>

          
					</div> 
				

					

				</div>
			</div>
		</div>
    </section>

   
    </>
  )
}

export default AboutUs