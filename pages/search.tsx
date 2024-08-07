import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Products } from '@/contants/data';

interface Product {
    image: string;
    name: string;
    price: string;
}

const Search: React.FC = () => {
    const router = useRouter();
    const { query } = router.query;
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (query) {
            const searchQuery = (query as string).toLowerCase();
            const results = Products.filter(product =>
                product.name.toLowerCase().includes(searchQuery) ||
                product.keywords?.some(keyword => keyword.toLowerCase().includes(searchQuery))
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
                            filteredProducts.map((item, index) => (
                                <div className="col-lg-3 col-6 col-md-5 mb-4" key={`product${index}`}>
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
                            ))
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
