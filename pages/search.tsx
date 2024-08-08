import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Products } from '@/contants/data';
import { StandSpaceItemModel } from '@/sysmodel/StandSpaceModel';
import { loggedModel } from '@/sysmodel/loginModel';
import Helper from '@/modules/Helper';
import { FaCheck } from 'react-icons/fa';
import eventModel from '@/sysmodel/eventModel';
import Globals from '@/modules/Globals';
import axios from "axios";
import { useDispatch, useSelector } from '@/node_modules/react-redux/dist/react-redux';
import { RootState } from '@/store/index';
import { addToCart } from '@/store/slices/cartSlice';


const Search: React.FC = () => {
    const router = useRouter();
    const { query } = router.query;

    const dispatch = useDispatch();

    const cartItems = useSelector((state: RootState) => state.cart.items);
    
    const handleAddToCart = (product: StandSpaceItemModel) => {
        if (!cartItems.find(item => item.StandSpaceItemID === product.StandSpaceItemID)) {
            dispatch(addToCart(product));
        }
    }

    const [filteredProducts, setFilteredProducts] = useState<StandSpaceItemModel[]>([]);

    const [products, setProducts] = useState<Array<StandSpaceItemModel>>([]);

    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [EventData, SetEventData] = useState<eventModel>();

    useEffect(() => {
        if (loggedData) {
            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });

            const fetchProducts = async () => {
                const data = await Helper.getProducts("all", loggedData.type == "exhibitor" ? loggedData.id.toString() : loggedData.exhibitorId);
                setProducts(data);
            };

            fetchProducts();
        }
    }, []);

    useEffect(() => {
        if (query) {
            const searchQuery = (query as string).toLowerCase();
            const results = products.filter(product =>
                product.Name.toLowerCase().includes(searchQuery)
            );
            setFilteredProducts(results);
        }
    }, [query]);

    return (
        <div className='shop-wrapper margin-top-section'>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link href="/" className='text-dark'>
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Search</li>
                    </ol>
                </nav>

                <div className="products-container mt-5">
                    <div className="row ">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item: StandSpaceItemModel, index: number) => {
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

                            })
                        ) : (
                            <p>No products found for {query}.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
