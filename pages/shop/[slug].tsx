import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/store/slices/cartSlice';
import { RootState } from '@/store/index.js';
import { FaCheck } from 'react-icons/fa';
import { StandSpaceCategoryModel, StandSpaceItemModel } from '@/sysmodel/StandSpaceModel.js';
import { loggedModel } from '@/sysmodel/loginModel.js';
import Helper from "@/modules/Helper";
import axios from "axios";
import Globals from '@/modules/Globals';
import eventModel from '@/sysmodel/eventModel';

export default function Shop() {
    const dispatch = useDispatch();

    const categoryId = window.location.pathname.replace("/shop/", "");

    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [EventData, SetEventData] = useState<eventModel>();

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [categories, setCategories] = useState<Array<StandSpaceCategoryModel>>([]);

    const handleAddToCart = (product: StandSpaceItemModel) => {
        if (!cartItems.find(item => item.StandSpaceItemID === product.StandSpaceItemID)) {
            dispatch(addToCart(product));
        }
    }

    const [products, setProducts] = useState<Array<StandSpaceItemModel>>([]);

    useEffect(() => {
        if (loggedData) {
            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });

            const fetchProducts = async () => {
                const data = await Helper.getProducts(categoryId, loggedData.type=="exhibitor"?loggedData.id.toString():loggedData.exhibitorId);
                setProducts(data);
            };

            fetchProducts();

            const fetchCategories = async () => {
                const data = await Helper.getCategories(loggedData.type == "exhibitor" ? loggedData.id.toString() : loggedData.exhibitorId);
                setCategories(data);
            };

            fetchCategories();
        }
    }, []);

    return (
        <div className='shop-wrapper margin-top-section'>
            <div className="container">

                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" aria-current="page">
                                    <Link href='/' className='text-dark'>Home</Link>
                                </li>

                                <li className="breadcrumb-item active" aria-current="page">Shop</li>
                            </ol>
                        </nav>
                    </div>

                    <div className='col-12 col-md-5'></div>

                    <div className='col-12 col-md-3'>
                        <select className='form-control' onChange={(e) => {
                            window.location.href = `/shop/${e.target.value}`;
                        }}>
                            <option value={"all"} selected={categoryId == "all" ? true : false}>All Categories</option>
                            {
                                categories.map((c: any, index: number) => {
                                    var item: StandSpaceCategoryModel = c;
                                    return (
                                        <option key={index} value={item.StandSpaceCategoryID} selected={categoryId == item.StandSpaceCategoryID.toString() ? true : false}>{item.Name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="products-container mt-5">
                    <div className="row ">

                        {products.map((item: StandSpaceItemModel, index: number) => {
                            const isInCart = cartItems.find(cartItem => cartItem.StandSpaceItemID === item.StandSpaceItemID);
                            return (
                                <div className="col-lg-3 col-6 col-md-5 mb-4" key={`product${index}`}>
                                    <div className="product-card shadow" style={{ height: "100%" }}>
                                        <a href={`/product/${item.StandSpaceItemID}`}>
                                            <div className="image-container d-flex justify-content-center">
                                                <img src={item.Image ? item.Image : `/assets/imgs/default.png`} alt={item.Name} />
                                            </div>

                                            <p className='product-name'>{item.Name}</p>

                                        </a>
                                        {/* <span className='earlybird-badge'>EARLY BIRD</span> */}

                                        <p className='m-0' style={{fontSize:"14px"}}><span style={{fontWeight:900}}>Quantity:</span> {item.Quantity}</p>
                                        <p className='m-0' style={{fontSize:"14px"}}><span style={{fontWeight:900}}>Unit:</span> {item.Unit}</p>

                                        <div className=' mt-3 price-section'>
                                            <div className="amount">{item.Amount} {EventData?.Currency}</div>
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
