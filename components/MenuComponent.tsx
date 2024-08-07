import React, { useCallback, useEffect, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function MenuComponent() {
    const [isToggle, setIsToggle] = useState(false);
    const [query, setQuery] = useState('')
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const router = useRouter();

    const handleToggle = () => {

        setIsToggle(prevState => !prevState);
    };

    const currentPath = router.pathname;

    const getNavItemClass = (href: string) => {
        return currentPath === href ? "menu-item  nav-menu-active" : "menu-item";
    };

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

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            setIsVisible(false);
        } else {
            // Scrolling up
            setIsVisible(true);
        }

        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <div  className={`${`menu-wrapper`} ${!isVisible ? 'hidden-y' : ''}`}>
            <div className="container  ">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-end ">
                            <button className='download-exhibitor-manual-btn'>Download Exhibitor Manual</button>
                        </div>
                    </div>
                </div>
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


                    <div className="col-lg-10">
                        <ul className='menu-items'>

                            <div className=" d-none d-lg-block">
                                <form className='search-input-container' >

                                    <input type="Search" placeholder='search' className='search-input' value={query} onChange={handleSearchChange} />

                                </form>
                            </div>


                            <li className={getNavItemClass("/")}>
                                <Link href="/" className='text-dark'>
                                    Home
                                </Link>
                            </li>


                            <li className={getNavItemClass("/shop")}>
                                <Link href="/shop" className=''>
                                    Shop
                                </Link>
                            </li>

                            <li className={getNavItemClass("/my-account")}>
                                <Link href="/my-account" >
                                    My Account
                                </Link>
                            </li>

                            <li className={getNavItemClass("/contractor")}>
                                <Link href="/contractor" >
                                    contractor
                                </Link>
                            </li>



                            <li className={getNavItemClass("/cart")}>
                                <Link href="/cart" className='d-flex gap-2 align-items-center'>
                                    <FiShoppingCart />
                                    Cart <span className='bg-primary d-flex justify-content-center align-items-center text-white' style={{ width: "30px", height: "30px", borderRadius: "50%", fontSize: "14px" }}>{cartItems.length}</span>

                                </Link>
                            </li>

                            <li className="menu-item">
                                <Link href="/login" >
                                    logout
                                </Link>
                            </li>


                        </ul>
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
                                <Link href="/" className=''>
                                    Home
                                </Link>
                            </li>

                            <li className='mobile-menu-item d-flex gap-2 align-items-center'>
                                <Link href="/shop" className=''>
                                    Shop
                                </Link>
                            </li>
                            <li className='mobile-menu-item d-flex gap-2 align-items-center'>
                                <Link href="/cart" className='d-flex gap-2 align-items-center'>
                                    <FiShoppingCart />
                                    Cart <span className='bg-primary d-flex justify-content-center align-items-center text-white' style={{ width: "20px", height: "20px", borderRadius: "50%", fontSize: "12px" }}>{cartItems.length}</span>

                                </Link>
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
