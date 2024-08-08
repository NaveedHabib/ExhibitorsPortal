// pages/register.tsx
import React, { useEffect, useState } from 'react';

import CompanyInformationForm from '@/components/CompanyInformation';
import PersonalInformationForm from '@/components/PersonalInformationForm';
import Link from 'next/link';
import axios from "axios";
import eventModel from '@/sysmodel/eventModel';
import Globals from '@/modules/Globals';
import accountModel from '@/sysmodel/accountModel';


const Register: React.FC = () => {

    function submitForm(e: any) {
        e.preventDefault();
        var passwordError = document.getElementById("password-error");
        var emailError = document.getElementById("email-error");

        var name: any = document.getElementById("name");
        var email: any = document.getElementById("email");
        var password: any = document.getElementById("password");

        if (passwordError?.classList.contains("d-none") && emailError?.classList.contains("d-none")) {
            axios.post(`${Globals.API_URL}Account/ContractorSignup/${accountid}`, ({
                "email": email.value,
                "name": name.value,
                "password": password.value
            }))
                .then((data: any) => {
                    window.location.href = `${Globals.BASE_URL}login/${AccountData?.EventId}`;
                })
        }

    };

    var accountid = window.location.pathname.replace("/contractor/signup/", "");

    const [AccountData, SetAccountData] = useState<accountModel>();

    const [EventData, SetEventData] = useState<eventModel>();

    useEffect(() => {
        if (accountid) {
            axios.get(`${Globals.API_URL}Account/GetAccount/${accountid}`).then((r: any) => {
                const dataModel: accountModel = r.data;
                SetAccountData(dataModel);

                axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${dataModel.EventId}`).then((r: any) => {
                    const eventModel: eventModel = r.data;
                    SetEventData(eventModel);
                });
            })
        }
    }, []);

    function checkPassword() {
        var passwordError = document.getElementById("password-error");
        passwordError?.classList.add("d-none");

        var password: any = document.getElementById("password");
        var confirm: any = document.getElementById("confirmPassword");
        if (password.value != confirm.value) {
            passwordError?.classList.remove("d-none");
        }
    }

    function checkEmail(email: string) {
        var emailError = document.getElementById("email-error");
        emailError?.classList.add("d-none");
        if (email) {
            axios.get(`${Globals.API_URL}Account/EmailExist?id=${AccountData?.EventId}&email=${email}`).then((r: any) => {
                const dataModel: boolean = r.data;
                if (dataModel) {
                    emailError?.classList.remove("d-none");
                }
            });
        }
    }

    return (
        <div className='container'>

            <div className="form-card mt-5">

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={EventData?.Logo} alt={EventData?.Name} className='company-logo' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className='mt-5'>
                            <form className='col-lg-4 col-md-6 col-12 mx-auto' onSubmit={(e) => {
                                submitForm(e);
                            }}>
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="text" name="name" id='name' placeholder="Name" required />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="email" name="email" id='email' placeholder="Email"
                                            onBlur={(e) => {
                                                checkEmail(e.target.value)
                                            }}
                                            required />
                                        <p className='m-0 text-danger d-none' style={{ fontSize: "14px" }} id='email-error'>Email already exist.</p>
                                    </div>


                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="password" name="password" id='password' placeholder="Password"
                                            onBlur={(e) => {
                                                checkPassword()
                                            }}
                                            required />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="password" name="confirmPassword" id='confirmPassword' placeholder="Confirm Password"
                                            onBlur={(e) => {
                                                checkPassword()
                                            }}
                                            required />
                                        <p className='m-0 text-danger d-none' style={{ fontSize: "14px" }} id='password-error'>Password and confirm Password not match.</p>

                                    </div>


                                    <div className="col-12 mb-3 d-flex justify-content-end">
                                        <button type="submit" className='btn btn-primary text-white'>Signup</button>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12'>
                                        <p className='text-danger text-center m-0 d-none' style={{ fontSize: "14px" }} id='login-error'></p>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>



                </div>




            </div>

        </div>
    );
};

export default Register;
