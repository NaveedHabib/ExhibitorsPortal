import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { removeFromCart, updateQuantity } from '@/store/slices/cartSlice';
import { IoClose } from 'react-icons/io5';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ productId, quantity }));
        }
    };

    const calculateGrandTotal = () => {
        const total = cartItems.reduce((total, item: any) => {
            const price = parseFloat(item.price);
            const quantity = parseInt(item.quantity, 10);
            if (!isNaN(price) && !isNaN(quantity)) {
                return total + price * quantity;
            }
            return total;
        }, 0);
        return total.toFixed(2);
    };


    return (
        <div className="cart-wrapper">
            <div className="container">
                <h1 className='mb-5 mt-5'>My Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-items row ">


                        <div className="col-12">
                            {cartItems.map(((item: any, index: number) => {
                                return (
                                    <div className='d-flex shadow p-4' key={`cartitem-${index}`}>
                                        <div className="cart-item">
                                            <div className='d-flex flex-column flex-lg-row gap-4 align-items-lg-center'>
                                                <img src={item.image} alt={item.name} />
                                                <span className='name'>{item.name}</span>
                                            </div>

                                            <div className='d-flex'>
                                                <div>
                                                    <p className='text-secondary line-through'>AED 250.00</p>
                                                    <p className='price'>{item.price}</p>
                                                    <div className='mt-2'>
                                                        <button className='px-4 py-2' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                                        <span className='px-4 py-2'>{item.quantity}</span>
                                                        <button className='px-4 py-2' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                                    </div>
                                                </div>

                                            </div>




                                        </div>

                                        <div className='mt-4'>
                                            <button onClick={() => handleRemove(item.id)} className='bg-white'><IoClose size={24} /></button>
                                        </div>
                                    </div>

                                )
                            }))}

                        </div>



                    </div>
                )}


                <div className="row mt-5">
                    <div className="col-lg-6 col-12">
                        {/* some things here ( instruction or any information) */}
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="order-summary">
                            <p>Subtotal: AED {calculateGrandTotal()}</p>
                            <button className='btn btn-primary text-white'>Checkout</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Cart;
