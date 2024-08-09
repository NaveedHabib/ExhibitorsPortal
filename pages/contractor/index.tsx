import SideBarComponent from '@/components/SideBarComponent'
import Helper from '@/modules/Helper';
import { loggedModel } from '@/sysmodel/loginModel';
import Link from 'next/link'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import accountModel from '@/sysmodel/accountModel';
import eventModel from '@/sysmodel/eventModel';
import Globals from '@/modules/Globals';

export default function MyAccount() {

    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [EventData, SetEventData] = useState<eventModel>();
    const [AccountData, SetAccountData] = useState<Array<accountModel>>([]);

    useEffect(() => {
        if (loggedData) {

            axios.get(`${Globals.API_URL}Account/GetAllContractors/${loggedData.itemGuid}`).then((r: any) => {
                const dataModel: Array<accountModel> = r.data;
                SetAccountData(dataModel);
            });

            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });
        }
    }, []);

    function deleteContractor(id: number) {
        axios.get(`${Globals.API_URL}Account/DeleteAccount/${id}`).then((r: any) => {
            window.location.reload();
        });
    }

    function ApproveStatus(id: number) {
        axios.get(`${Globals.API_URL}Account/Approve/${id}`).then((r: any) => {
            window.location.reload();
        });
    }

    return (
        <div className='my-account-wrapper margin-top-section'>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <a href="/" className='text-dark'>
                                Home
                            </a>
                        </li>

                        <li className="breadcrumb-item active" aria-current="page">Contractor</li>
                    </ol>
                </nav>

                <div className="section-container">
                    <SideBarComponent />
                    <div className="contents-section">
                            <div className="row ">
                                <div className="col-12">
                                    <p className=''>Contractors

                                    <a href={`/contractor/signup/${loggedData?.itemGuid}`} style={{ fontSize: "14px", float: "right" }} target={"_blank"} className='btn btn-primary'>Contractor Registration Link</a>
                                    </p>
                                </div>
                            </div>
                           
                            <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Approve</th>
                                                <th>Orders</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                AccountData.map((m: any) => {
                                                    var item: accountModel = m;
                                                    if (item.Email != loggedData?.email) {
                                                        return (
                                                            <tr>
                                                                <td>{item.Name}</td>
                                                                <td>{item.Email}</td>
                                                                <td>{item.Approved ? (
                                                                    <a href="javascript:0"
                                                                        onClick={(e) => {
                                                                            let text = "Are you sure you want to change the Approve status?";
                                                                            if (confirm(text) == true) {
                                                                                ApproveStatus(item.AccountID);
                                                                            }
                                                                        }}
                                                                    >
                                                                        <FaToggleOn size={20} color="green" />
                                                                    </a>
                                                                ) : (
                                                                    <a href="javascript:0"
                                                                        onClick={(e) => {
                                                                            let text = "Are you sure you want to change the Approve status?";
                                                                            if (confirm(text) == true) {
                                                                                ApproveStatus(item.AccountID);
                                                                            }
                                                                        }}
                                                                    >
                                                                        <FaToggleOff size={20} color="red" />
                                                                    </a>
                                                                )}</td>

                                                               <td><a href={`${Globals.BASE_URL}/contractor/orders/${item.AccountID}`}>Click here</a></td>
                                                               
                                                                <td>
                                                                    <a className="text-danger" href="javascript:0"
                                                                        onClick={(e) => {
                                                                            let text = "Are you sure you want to delete?";
                                                                            if (confirm(text) == true) {
                                                                                deleteContractor(item.AccountID);
                                                                            }
                                                                        }}
                                                                    >
                                                                        Delete
                                                                    </a></td>
                                                            </tr>
                                                        )
                                                    }

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

        </div>
    )
}
