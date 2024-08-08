import SideBarComponent from '@/components/SideBarComponent'
import Helper from '@/modules/Helper';
import { loggedModel } from '@/sysmodel/loginModel';
import orderModel from '@/sysmodel/orderModel';
import Link from 'next/link'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Globals from '@/modules/Globals';
import eventModel from '@/sysmodel/eventModel';

export default function CompanyProfile() {

    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [orders, setOrders] = useState<Array<orderModel>>([]);

    const [EventData, SetEventData] = useState<eventModel>();

    useEffect(() => {
        if (loggedData) {
            axios.get(`${Globals.API_URL}Exhibitor/OrderList/${loggedData.id}`).then((r: any) => {
                const dataModel: Array<orderModel> = r.data;
                setOrders(dataModel);
            });

            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });
        }
    }, []);

    function deleteOrder(id: number) {
        axios.get(`${Globals.API_URL}Exhibitor/DeleteOrder?id=${id}`).then((r: any) => {
            window.location.reload();
        });
    }

    return (
        <div className='my-account-wrapper margin-top-section'>
            <div className="container">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <a href='/' className='text-dark'>
                                Home
                            </a>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            <Link href="/my-account" className='text-dark'>
                                My Account
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">My Orders</li>
                    </ol>
                </nav>
                <div className="section-container">
                    <SideBarComponent />
                    <div className="contents-section">
                        <h3>My Orders</h3>

                    <div className="row">
                        <div className="col-12">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Order No</th>
                                        <th>Total Amount</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((m: any) => {
                                            var item: orderModel = m;
                                            return (
                                                <tr>
                                                    <td>{item.OrderID}</td>
                                                    <td>{item.Type == "profile" ? item.TotalAmount : item.TotalAmountWithTax} {EventData?.Currency}</td>
                                                    <td>{item.Paid ? "Paid" : "Not Paid"}</td>
                                                    <td>
                                                        <a href={`/order/${item.OrderID}`} target="_blank">
                                                            View
                                                        </a>

                                                        {
                                                            item.Paid == false ? (
                                                                <React.Fragment>
                                                                    <span> | </span>
                                                                    <a className="text-danger" href="javascript:0"
                                                                        onClick={(e) => {
                                                                            let text = "Are you sure you want to delete?";
                                                                            if (confirm(text) == true) {
                                                                                deleteOrder(item.OrderID);
                                                                            }
                                                                        }}
                                                                    >
                                                                        Delete
                                                                    </a>
                                                                </React.Fragment>
                                                            ) : ""
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    )
}