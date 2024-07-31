import Link from 'next/link'
import React from 'react'
import { products } from "../../contants/data.js"

export default function index() {


    return (
        <div className='shop-wrapper'>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link href="/" className='text-dark'>
                                Home
                            </Link>
                        </li>

                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav>

                <div className="products-container mt-5">
                    <div className="row ">

                        {products.map((item: any, index: number) => {
                            return (
                                <div className="col-lg-3 col-6 col-md-5 mb-4">
                                    <div className="product-card shadow">
                                        <div className="image-container d-flex justify-content-center">
                                            <img src={item.image} alt="" />
                                        </div>

                                        <p className='product-name'>{item.name}</p>
                                        <span className='earlybird-badge'>EARLY BIRD</span>

                                        <div className=' mt-3 price-section'>
                                            <div className="amount">{item.price}</div>
                                            <button className='addcart-btn'>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </div>

                </div>

            </div>
        </div>
    )
}
