import React from 'react'

export default function product() {
    return (
        <div className='product-detail-wrapper margin-top-section'>
            <div className="container product-container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-12 left-container">
                        <img src="/assets/imgs/Nespresso.jpg" alt="" className='product-img' />
                    </div>
                    <div className="col-lg-6 col-12">
                        <h2 className='title'>Expresso Capsules</h2>
                        <p className='unit'>unite 1 x 100</p>
                        <p className='text-secondary'>Pure Origin Capsules contain espresso coffee that comes from certain coffee-producing regions. This capsule is also referred to as the Nespresso version of specialist coffee. There are three variants of Nespresso Pure Origin capsules that come from different regions.</p>
                        <div className="d-flex gap-lg-5 mt-4 align-items-lg-center flex-column flex-lg-row">
                            <div>
                                <p className="text-secondary line-through">AED 250.00</p>
                                <p className="price">AED 150.00</p>
                            </div>

                            <div>
                                <button className="btn btn-primary text-white px-5">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
