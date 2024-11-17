import React from 'react'
import ads from '../assets/couch.png'

function ContactUs() {
  return (
    <>
       <section className=' hero hello py-3'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div className="intro-excerpt mt-4">
								<h1> <span clsas="d-block">Contact Us </span></h1>
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
      <div className='text-center py-2'>
                <h2>Contact Us</h2>
              </div>
      <section className='py-4'>
      <div className="contact-section">
      <div className="container">

        <div className="block">
          <div className="row justify-content-center">


            <div className="col-md-8 col-lg-8 pb-4">


              <div className="row mb-5">
                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                    <i className="fa-solid fa-location-dot" />
                    <p>kathmandu,Nepal</p>
                    </div> 
                  
                  </div> 
                </div>

                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                    <i className="fa-solid fa-envelope" />
                    <a href="mailto:timalsinasatish430@gmail.com">timalsinasatish430@gmail.com</a>
                    </div> 
                    
                  </div> 
                </div>

                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                    <i className="fa-solid fa-phone pe" />
                    <div><a href="tel:9841051936">+977:   9841051936</a></div>
                    </div> 
                   
                  </div>
                </div>
              </div>
              
              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="fname">First name</label>
                      <input type="text" className="form-control" id="fname" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="lname">Last name</label>
                      <input type="text" className="form-control" id="lname" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>

                <div className="form-group mb-5">
                  <label className="text-black" htmlFor="message">What do you want </label>
                  <textarea name="" className="form-control" id="message" cols={30} rows={5} />
                </div>

                <button type="submit" className="btn btn-success">Login</button>
              </form>

            </div>

          </div>

        </div>

      </div>


    </div>
  
      </section>
    </>
  )
}

export default ContactUs