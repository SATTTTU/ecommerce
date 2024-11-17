import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./Home.css";

// Import Swiper styles

import { Link } from "react-router-dom";
function Body() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((a) => a.json())
      .then((b) => setData(b));
  }, []);
  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul class="list-group text-uppercase">
                {data.slice(6, 7).map((a) => (
                  <li class="list-group-item " aria-current="true">
                    <Link
                      to={`/cat/${a}`}
                      className="link-dark link-underline-opacity-0"
                    >
                      {" "}
                      {a}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
           <div className="col-lg-9">
           <Swiper className="mySwiper">
        <SwiperSlide> <img  className="w-100" src="https://png.pngtree.com/thumb_back/fh260/background/20210907/pngtree-indoor-home-sofa-coffee-table-furniture-photography-map-with-pictures-image_795686.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src="https://static.asianpaints.com/content/dam/asian_paints/resources/aphomes-categorypage/furniture/ap-homes-usage-furniture-living-room-asian-paints.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src="https://media.istockphoto.com/id/1213695544/photo/3d-rendering-of-a-luxurious-bedroom-interior.jpg?s=612x612&w=0&k=20&c=2w5r627b1TkwsLOHm73d2Tc9225TjXzYjaw5iaDX_c0=" alt="" /></SwiperSlide>
       
      </Swiper>
           </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
