import Link from 'next/link'
import React from 'react'
import { Products } from "../../contants/data.js"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/store/slices/cartSlice';
import { RootState } from '@/store/index.js';
import { FaCheck } from 'react-icons/fa';


export default function Shop() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = (product: any) => {
        if (!cartItems.find(item => item.id === product.id)) {
            dispatch(addToCart(product));
        }
    }


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

                        {Products.map((item: any, index: number) => {
                            const isInCart = cartItems.find(cartItem => cartItem.id === item.id);
                            return (
                                <div className="col-lg-3 col-6 col-md-5 mb-4" key={`product${index}`}>
                                    <div className="product-card shadow">
                                        <div className="image-container d-flex justify-content-center">
                                            <img src={item.image} alt="" />
                                        </div>

                                        <p className='product-name'>{item.name}</p>
                                        <span className='earlybird-badge'>EARLY BIRD</span>

                                        <div className=' mt-3 price-section'>
                                            <div className="amount">{item.price}</div>
                                            {isInCart ? (<FaCheck color='green' />
                                            ) : (

                                                <button className='addcart-btn' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                                                
                                            )}
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
