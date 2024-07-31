import Globals from '@/modules/Globals'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function FooterComponent() {
  return (
    <div className='footer-wrapper'>
      <div className="container">
        <hr className='mb-5' />

        <div className="row align-items-center">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <Image width={150} height={80} src={`/assets/icons/cch-logo.png`} alt="" className='company-logo'
              loading="lazy" />
          </div>
          <div className="col-lg-3">
            <ul className='d-flex flex-column gap-3 text-secondary'>
              <li className='fs-6'>
                <Link href="/about-us">
                  WHO WE ARE
                </Link>
              </li>
              <li className='fs-6'>
                <Link href="/#Our-Services">
                  OUR SERVICES
                </Link>
              </li>
              <li className='fs-6'>
                <Link href="/#Portfolio">
                  PORTFOLIO
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className='d-flex flex-column gap-3'>
              <li className='fs-3 text-primary'>Contact Us</li>
              <li className='d-flex gap-2 align-items-center text-secondary'>
                <BsTelephone />
                <span>+971564034046</span>
              </li>
              <li className='d-flex gap-2 align-items-center text-secondary'>
                <CiMail />
                <span>info@creation-house.ae</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className='d-flex flex-column gap-3'>
              <li className='fs-3 text-primary'>Follow Us</li>
              <li className='d-flex gap-2 text-primary-varient fs-3'>
                <Link href="https://www.instagram.com/creationhouse2014/">
                  <FaInstagram />
                </Link>

                <Link href="https://www.linkedin.com/company/creation-house-exhibition-stand-fitting-and-execution-llc/?originalSubdomain=ae">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-50 mx-auto mt-5">
          <hr />
          <p className='text-white text-center'>© 2024 Creation House</p>
        </div>
      </div>
    </div>
  )
}
