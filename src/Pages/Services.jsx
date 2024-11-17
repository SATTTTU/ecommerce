import React from 'react'
import ads from '../assets/MyLogo.png'
import chair from '../assets/sofa.png'
import cross from '../assets/cross.svg'
import './Services.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import person from '../assets/hat.jpg'

function Services() {
  return (
    <>
    
    <section className=' hero hello py-3'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div className="intro-excerpt mt-4">
								<h1> <span clsas="d-block">Services</span></h1>
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
	  <section>
	  <div className="why-choose-section">
			<div className="container">
				
				
				<div className="row my-5">
					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/truck.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>Fast & Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/bag.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/support.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/return.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/truck.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>Fast & Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/bag.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/support.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="images/return.svg" alt="Image" className="imf-fluid" />
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

				</div>
			
			</div>
		</div>
	  </section>
      <section className='py-4'>
      <div className="product-section pt-0">
			<div className="container">
				<div className="row">

					{ /* Start Column 1 */ }
					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="#" className="btn">Explore</a></p>
					</div> 
					{ /* End Column 1 */ }

					{ /* Start Column 2 */ }
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="#">
							<img src={chair} className="img-fluid product-thumbnail" />
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src={cross} className="img-fluid" />
							</span>
						</a>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="#">
							<img src={chair} className="img-fluid product-thumbnail" />
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src={cross} className="img-fluid" />
							</span>
						</a>
					</div>
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="#">
							<img src={chair} className="img-fluid product-thumbnail" />
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={cross} className="img-fluid" />
							</span>
						</a>
					</div>
					

				</div>
			</div>
		</div>
      </section>
	  <section>
	  <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
		<div className="testimonial-section before-footer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left" /></span>
								<span className="next" data-controls="next"><span className="fa fa-chevron-right" /></span>
							</div>

							<div className="testimonial-slider">
								
								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={person} alt="Maria Jones" className="img-fluid" />
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
							

							

								
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		</SwiperSlide>
        <SwiperSlide><div className="testimonial-section before-footer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left" /></span>
								<span className="next" data-controls="next"><span className="fa fa-chevron-right" /></span>
							</div>

							<div className="testimonial-slider">
								
								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={person} alt="Maria Jones" className="img-fluid" />
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
							

							

								
							</div>

						</div>
					</div>
				</div>
			</div>
		</div></SwiperSlide>
        <SwiperSlide><div className="testimonial-section before-footer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left" /></span>
								<span className="next" data-controls="next"><span className="fa fa-chevron-right" /></span>
							</div>

							<div className="testimonial-slider">
								
								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={person} alt="Maria Jones" className="img-fluid" />
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								
							</div>

						</div>
					</div>
				</div>
			</div>
		</div></SwiperSlide>
        
      </Swiper>
	  </section>
    </>
  )
}

export default Services