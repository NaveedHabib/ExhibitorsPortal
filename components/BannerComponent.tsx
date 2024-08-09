import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { FaExclamation } from "react-icons/fa";
import eventModel from '@/sysmodel/eventModel';

export default function BannerComponent(props: any) {

    var eventData: eventModel = props.EventData;

    var discount = document.getElementById("discount-counter");
    var daysData: any = document.getElementById("days");
    var hoursData: any = document.getElementById("hours");
    var minutesData: any = document.getElementById("minutes");

    setInterval(() => {
        var date = eventData.EarlyBirdDiscount;
        if (date && daysData) {
            discount?.classList.remove("d-none");
            getDateDifference(date);
        }
        else {
            discount?.classList.add("d-none");
        }
    }, 1000);

    function getDateDifference(DiscountDate: Date) {
        try {
            if (!(DiscountDate instanceof Date)) {
                DiscountDate = new Date(DiscountDate);
            }

            var today = new Date();
            var futureDate = DiscountDate.getTime();
            var delta = Math.abs(futureDate - today.getTime()) / 1000;

            if (futureDate <= today.getTime()) {
                discount?.classList.add("d-none");
            }

            // calculate (and subtract) whole days
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;

            daysData.innerHTML = days.toString();

            // calculate (and subtract) whole hours
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;

            hoursData.innerHTML = hours.toString();

            // calculate (and subtract) whole minutes
            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;

            minutesData.innerHTML = minutes.toString();

            //   // what's left is seconds
            //   var seconds = Math.floor(delta % 60);
            //   $(".seconds").html(seconds.toString());

            discount?.classList.remove("d-none");
        }
        catch (e) {
            console.log(e);
            discount?.classList.add("d-none");
        }
    }

    return (
        <div className="container banner-wrapper margin-top-section">
            <div className="row w-100">
                <div className="col-lg-6">
                    <div className="left-section">

                        <img src={eventData.Logo} alt={eventData.Name} className='banner-logo' />
                        <p className='date'>{eventData.EventDate} <br />{eventData.Venue}</p>
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center">
                    <div className='w-100'>
                        <h1 className='banner-heading'>{eventData.DashboardHeading}</h1>
                    </div>
                </div>
            </div>

            <div className="count-down-container-wrapper d-none" id='discount-counter'>
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <p className='early-bird-text mb-4 mb-lg-0'>Early Bird Ends In :</p>
                    </div>
                    <div className="col-lg-4">
                        <div className='datetime row w-100'>
                            <div className=' col-4 col-lg-0'>
                                <div className="datetime-item">
                                    <div className='count' id='days'></div>
                                    <div className='text'>Days</div>
                                </div>
                            </div>
                            <div className=' col-4 col-lg-0'>
                                <div className="datetime-item">
                                    <div className='count' id='hours'></div>
                                    <div className='text'>Hours</div>
                                </div>
                            </div>
                            <div className=' col-4 col-lg-0'>
                                <div className="datetime-item">
                                    <div className='count' id='minutes'></div>
                                    <div className='text'>Minutes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <p className='mb-0 mt-3 mt-lg-0 text-center d-flex gap-2 align-items-center fw-bold'>Hurry up <FaExclamation /></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
