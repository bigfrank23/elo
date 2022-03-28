import React from 'react'
import ProductImg from '../images/img2.jpg'
import './Commerce.css'
import { commerceData } from '../commerceData'

const Commerce = ({ products, onAddToCart }) => {
    console.log(products);
    
  return (
    <div className="container-fluid" id="commerce-container">
        <div className="title-commerce">
            <h1>LATEST PRODUCT</h1>
        </div>
        <div className="div">
            {products.map((item)=> (
            <div className="content-commerce-box" key={item.id}>
                <div className="content-commerce">
                    <div className="seen">
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </div>
                    <div className="img-bx">
                        <img src={item.image.url} alt="" />
                    </div>
                    <div className="center-commerce">
                        <div className="model" >
                            <h2>{item.name}</h2>
                        </div>
                        <div className="product"><span dangerouslySetInnerHTML={{__html: item.description}}></span></div>
                    </div>
                </div>
                <div className="bottom-commerce">
                    <div className="price"> <span>{item.price.formatted_with_symbol}</span> </div>
                    <div className="divider"></div>
                    <div className="add-cart" onClick={()=> onAddToCart(item.id, 1)}> <b>Add To Cart</b> </div>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default Commerce