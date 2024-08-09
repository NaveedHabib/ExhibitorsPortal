import eventModel from '@/sysmodel/eventModel';
import Link from 'next/link'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Globals from '@/modules/Globals';
import loginModel from '@/sysmodel/loginModel';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [EventData, SetEventData] = useState<eventModel>();

    var eventid = window.location.pathname.replace("/login/", "");

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (eventid) {
            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });
        }
    }, []);

    function submitLogin(e: any) {
        e.preventDefault();

        var error: any = document.getElementById("login-error");

        error.classList.add("d-none");

        axios.post(`${Globals.API_URL}Account/login/${eventid}`, {
            "email": formData.email,
            "password": formData.password,
        })
            .then((data: any) => {
                var login: loginModel = data.data;
                if (login) {
                    const loggedInAccount = {
                        id: login.id,
                        name: login.name,
                        eventid: login.eventid,
                        exhibitorId: login.exhibitorId,
                        email: login.email,
                        standUpload: login.standUpload,
                        type: login.type,
                        itemGuid: login.itemGuid
                    };

                    if (login.approve) {
                        if (login.reject == false) {
                            localStorage.removeItem(Globals.PROJECT_ID);
                            localStorage.setItem(Globals.PROJECT_ID, JSON.stringify(loggedInAccount));

                            window.location.href = `${Globals.BASE_URL}`;
                        }
                        else {
                            error.innerHTML = "Your profile is rejected.";
                            error.classList.remove("d-none");
                        }

                    }
                    else {
                        error.innerHTML = "Your account is not approved yet. Please wait...";
                        error.classList.remove("d-none");
                    }
                }
                else {
                    error.innerHTML = "Email and password is incorrect.";
                    error.classList.remove("d-none");
                }
            })
    }

    return (
        <div className='container'>

            <div className="form-card mt-5">
                <div className="row ">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src={EventData?.Logo} alt={EventData?.Name} className='company-logo' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <form className='col-lg-4 col-md-6 col-12 mx-auto'
                                onSubmit={(e: any) => {
                                    submitLogin(e);
                                }}
                            >

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    </div>


                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                                    </div>


                                    <div className="col-12 mb-3 d-flex justify-content-end">
                                        <button type="submit" className='btn btn-primary text-white'>Login</button>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12'>
                                        <p className='text-danger text-center m-0 d-none' style={{ fontSize: "14px" }} id='login-error'></p>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="col-12 d-flex justify-content-center mt-5">
                            <div className='d-flex gap-2'>Don&apos;t have an account ?  <Link href={`/register/${eventid}`} className='text-primary'>Register as Exhibitor</Link></div>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}
