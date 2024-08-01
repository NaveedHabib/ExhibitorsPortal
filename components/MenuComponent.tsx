import React, { useCallback, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import _ from 'lodash';

export default function MenuComponent() {
    const [isToggle, setIsToggle] = useState(false);
    const [query, setQuery] = useState('')

    const handleToggle = () => {

        setIsToggle(prevState => !prevState);
    };

    const router = useRouter();
    const handleSearchChange = (e: any) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        if (newQuery.trim() === '') {
            router.push('/');
        } else {
            debouncedSearch(newQuery);
        }
    };

    const debouncedSearch = useCallback(
        _.debounce((newQuery: string) => {
            router.push(`/search?query=${newQuery}`);
        }, 300), 
        []
    );

    return (
        <div className='menu-wrapper'>
            <div className="container  ">
                <div className="row w-100 d-flex align-items-center justify-content-between">
                    <div
                        className="menu-icon-wrapper d-lg-none d-block col-2"
                        onClick={handleToggle}

                    >
                        {isToggle ? (
                            <div

                            >
                                <IoMdClose size={32} color='black' cursor="pointer" />
                            </div>
                        ) : (
                            <div

                            >
                                <HiOutlineMenuAlt2 size={32} color='black' cursor="pointer" />
                            </div>
                        )}
                    </div>
                    <div className="col-lg-3 col-10 d-flex justify-content-lg-start justify-content-end">
                        <button className='download-exhibitor-manual-btn'>Download Exhibitor Manual</button>
                    </div>

                    <div className="col-lg-6 ">
                        <ul className='menu-items'>
                            <li>
                                <Link href="/" className='text-dark'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className='text-dark'>
                                    Shop
                                </Link>
                            </li>
                            <li className='d-flex gap-2 align-items-center'>
                                <FiShoppingCart />
                                Cart
                            </li>
                            <li>
                                <Link href="/my-account" className='text-dark'>
                                    My Account
                                </Link>
                            </li>

                            <li>
                                <Link href="/contractor" className='text-dark'>
                                    contractor
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="col-lg-3 d-none d-lg-block">
                        <form className='search-input-container' >

                            <input type="Search" placeholder='search' className='search-input' value={query} onChange={handleSearchChange} />

                        </form>
                    </div>



                </div>

            </div>



            <AnimatePresence>
                {isToggle && (
                    <motion.div
                        className="mobile-menu-nav d-lg-none d-block"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleToggle}
                    >
                        <ul className='mobile-menu-items'>
                            <li className='mobile-menu-item d-flex gap-2 align-items-center'>
                                <FiShoppingCart />
                                Cart
                            </li>
                            <li className='mobile-menu-item'>
                                <Link href="/my-account" >
                                    My Accounts
                                </Link>
                            </li>
                            <li className='mobile-menu-item' >
                                <Link href="/contractor" >
                                    Contrator
                                </Link>
                            </li>
                        </ul>
                        <div className="menu__overlay"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
