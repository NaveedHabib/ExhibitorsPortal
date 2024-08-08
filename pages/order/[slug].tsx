import SideBarComponent from '@/components/SideBarComponent'
import Helper from '@/modules/Helper';
import { loggedModel } from '@/sysmodel/loginModel';
import orderModel, { orderItemModel } from '@/sysmodel/orderModel';
import Link from 'next/link'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Globals from '@/modules/Globals';
import eventModel from '@/sysmodel/eventModel';

export default function CompanyProfile() {

    const orderId = window.location.pathname.replace("/order/", "");

    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [order, setOrder] = useState<orderModel>();

    const [orders, setOrderDetails] = useState<Array<orderItemModel>>([]);

    const [EventData, SetEventData] = useState<eventModel>();

    useEffect(() => {
        if (loggedData) {

            axios.get(`${Globals.API_URL}Exhibitor/GetOrder/${orderId}`).then((r: any) => {
                const dataModel: orderModel = r.data;
                setOrder(dataModel);
            })

            axios.get(`${Globals.API_URL}Exhibitor/OrderDetails?id=${orderId}&AccountId=${loggedData.id}`).then((r: any) => {
                const dataModel: Array<orderItemModel> = r.data;
                setOrderDetails(dataModel);
            })

            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });
        }
    }, []);

    return (
        <div className='my-account-wrapper margin-top-section'>
            <div className="container">
                <div className="section-container">
                    {/* <SideBarComponent /> */}
                    <div className="contents-section">
                        <h3>Order Details</h3>

                        <div className="row">
                            <div className="col-12">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Unit</th>
                                            <th>Amount</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map((m: any) => {
                                                var item: orderItemModel = m;
                                                return (
                                                    <tr>
                                                        <td>{item.Name}</td>
                                                        <td>{item.Unit}</td>
                                                        <td>{item.Amount} {EventData?.Currency}</td>
                                                        <td>{item.Quantity}</td>
                                                        <td>{item.Amount * item.Quantity}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        {
                                            order?.PromoCodeName ? (
                                                <tr>
                                                    <td colSpan={4} className="text-end"><strong>Promo Code</strong></td>
                                                    <td>{order.PromoCodeName}</td>
                                                </tr>
                                            ) : ""
                                        }

                                        <tr>
                                            <td colSpan={4} className="text-end"><strong>Total ({EventData?.Currency})</strong></td>
                                            <td>{order?.TotalAmount}</td>
                                        </tr>
                                        {
                                            order?.PromoCodeName ? (
                                                <tr>
                                                    <td colSpan={4} className="text-end"><strong>Promocode Discount</strong></td>
                                                    <td>{order.PromoCodeDiscount}%</td>
                                                </tr>
                                            ) : ""
                                        }

                                        <tr>
                                            <td colSpan={4} className="text-end"><strong>VAT</strong></td>
                                            <td>{EventData?.VAT}%</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4} className="text-end"><strong>Grand Total ({EventData?.Currency})</strong></td>
                                            <td>{order?.TotalAmountWithTax}</td>
                                        </tr>

                                        <tr className={`${EventData?.ExchangeRate == 1 ? "d-none" : ""}`}>
                                            <td colSpan={4} className="text-end"><strong>Grand Total (AED)</strong></td>
                                            <td>{Math.round(order?.TotalAmountWithTax * EventData?.ExchangeRate)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 text-end">
                                {
                                    order?.Paid ? "" : (
                                        <a href="javascript:0"
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                                window.location.href = `${Globals.Server_URL}Payment/Go/${order?.OrderID}`
                                            }}>Click here to Pay</a>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}