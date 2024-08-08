import Globals from '@/modules/Globals';
import { StandSpaceItemModel } from '@/sysmodel/StandSpaceModel';
import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import axios from "axios";
import { loggedModel } from '@/sysmodel/loginModel';
import Helper from '@/modules/Helper';
import eventModel from '@/sysmodel/eventModel';
import { useDispatch, useSelector } from '@/node_modules/react-redux/dist/react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { RootState } from '@/store/index';

export default function product() {
    const dispatch = useDispatch();

    const productId = window.location.pathname.replace("/product/", "");

    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [EventData, SetEventData] = useState<eventModel>();

    const [product, setProduct] = useState<StandSpaceItemModel>();

    useEffect(() => {
        if (productId) {
            axios.get(`${Globals.API_URL}Exhibitor/GetStandSpaceItem/${productId}`).then((r: any) => {
                const dataModel: StandSpaceItemModel = r.data;
                setProduct(dataModel);
            });
        }
    }, []);

    useEffect(() => {
        if (loggedData) {
            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });
        }
    }, []);

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = (product: StandSpaceItemModel) => {
        if (!cartItems.find(item => item.id === product.StandSpaceItemID)) {
            dispatch(addToCart(product));
        }
    }

    if (product) {
        const isInCart = cartItems.find(cartItem => cartItem.StandSpaceItemID === product.StandSpaceItemID);
        return (
            <div className='product-detail-wrapper margin-top-section'>
                <div className="container product-container">
                    <div className="row mt-5">
                        <div className="col-lg-6 col-12 left-container">
                            <img src={product.Image ? product.Image : `/assets/imgs/default.png`} alt={product.Name} className='product-img' />
                        </div>
                        <div className="col-lg-6 col-12">
                            <h2 className='title'>{product?.Name}</h2>
                            <p className='unit'>{product?.Quantity} {product?.Unit}</p>
                            
                            {
                                product.Description?(
                                    <p className='text-secondary'
                                    dangerouslySetInnerHTML={{ __html: product.Description.replace(/\n/g, '<br />') }} />
                                ):""
                            }

                            <div className="d-flex gap-lg-5 mt-4 align-items-lg-center flex-column flex-lg-row">
                                <div>
                                    {/* <p className="text-secondary line-through">AED 250.00</p> */}
                                    <p className="price">{product?.Amount} {EventData?.Currency}</p>
                                </div>

                                <div>
                                    {isInCart ? (<FaCheck color='green' />
                                    ) : (
                                        <button className="btn btn-primary text-white px-5" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
