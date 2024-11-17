import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function ProductDetails() {

    let { cid } = useParams();
    let [data, setData] = useState([]);
    useEffect(() => {
      fetch(`https://dummyjson.com/products/category/furniture`)
        .then((a) => a.json())
        .then((b) => setData(b.products));
    }, []);
  return (
    <>
    <section>
    <div className="container">
        {data.map((a)=>(

       
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={a.thumbnail} /></div>
						  <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
						</div>
					
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{a.title}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked" />
								<span className="fa fa-star checked" />
								<span className="fa fa-star checked" />
								<span className="fa fa-star" />
								<span className="fa fa-star" />
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 className="price">current price: <span>${a.price}</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store" />
							<span className="color green" />
							<span className="color blue" />
						</h5>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
						</div>
					</div>
				</div>
			</div>
		</div>
         ))}
	</div>
    </section>
    </>
  )
}

export default ProductDetails