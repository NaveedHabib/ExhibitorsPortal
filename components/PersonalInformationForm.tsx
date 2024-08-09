// components/PersonalInformationForm.tsx
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import StandSpaceModel from '@/sysmodel/StandSpaceModel';
import Globals from '@/modules/Globals';

interface Props {
    formData: any;
    setFormData: (data: any) => void;
    nextStep: () => void;
}

const PersonalInformationForm: React.FC<Props> = ({ formData, setFormData, nextStep }) => {
    const formik = useFormik({
        initialValues: formData,
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            standSpace: Yup.string().required('Stand Space is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), ""], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: (values) => {
            var email: any = document.getElementById("register-email");
            var emailError = document.getElementById("email-error");
            emailError?.classList.add("d-none");
            if (email.value) {
                axios.get(`${Globals.API_URL}Account/EmailExist?id=${eventid}&email=${email.value}`).then((r: any) => {
                    const dataModel: boolean = r.data;
                    if (dataModel) {
                        emailError?.classList.remove("d-none");
                    }
                    else {
                        setFormData(values);
                        nextStep();
                    }
                });
            }

        },
    });

    var eventid = window.location.pathname.replace("/register/", "");

    const [StandSpaceData, SetStandSpaceData] = useState<StandSpaceModel[]>([]);

    useEffect(() => {
        if (eventid) {
            axios.get(`${Globals.API_URL}Exhibitor/GetAllStandSpaces/${eventid}`).then((r: any) => {
                const dataModel: Array<StandSpaceModel> = r.data;
                SetStandSpaceData(dataModel);
            });
        }
    }, [eventid]);

    return (
        <div className='mt-5'>
            <form className='col-lg-4 col-md-6 col-12 mx-auto' onSubmit={formik.handleSubmit}>
                <h5 className='mb-3'>Personal Information:</h5>

                <div className="row">
                    <div className="col-12 mb-3">
                        <input className='form-control' type="text" name="name" placeholder="Name" value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.touched.name && typeof formik.errors.name === 'string' ? (
                            <div className='text-danger' style={{ fontSize: "14px" }}>{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="col-12 mb-3">
                        <input className='form-control' id='register-email' type="email" name="email" placeholder="Email" value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        {formik.touched.email && typeof formik.errors.email === 'string' ? (
                            <div className='text-danger' style={{ fontSize: "14px" }}>{formik.errors.email}</div>
                        ) : null}

                        <p className='m-0 text-danger d-none' style={{ fontSize: "14px" }} id='email-error'>Email already exist.</p>

                    </div>

                    <div className="col-12 mb-3">

                        <select className='select-control' name="standSpace" value={formik.values.standSpace}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                            <option value="">Select Stand Space</option>
                            {
                                StandSpaceData.map((s: any, index: number) => {
                                    var item: StandSpaceModel = s;
                                    return (
                                        <option key={index} value={item.StandSpaceID}>{item.Name}</option>
                                    )
                                })
                            }
                        </select>

                        {formik.touched.standSpace && typeof formik.errors.standSpace === 'string' ? (
                            <div className='text-danger' style={{ fontSize: "14px" }}>{formik.errors.standSpace}</div>
                        ) : null}
                    </div>
                    <div className="col-12 mb-3">
                        <input className='form-control' type="password" name="password" placeholder="Password" value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        {formik.touched.password && typeof formik.errors.password === 'string' ? (
                            <div className='text-danger' style={{ fontSize: "14px" }}>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="col-12 mb-3">
                        <input className='form-control' type="password" name="confirmPassword" placeholder="Confirm Password" value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        {formik.touched.confirmPassword && typeof formik.errors.confirmPassword === 'string' ? (
                            <div className='text-danger' style={{ fontSize: "14px" }}>{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>

                    <div className="col-12 mb-3 d-flex justify-content-end">
                        <button type="submit" className='btn btn-primary text-white'>Next</button>
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-center mt-5">
                    <div className='d-flex gap-2'>Already have account ?  <Link href={`/login/${eventid}`} className='text-primary'>Login</Link></div>
                </div>




            </form>
        </div>
    );
};

export default PersonalInformationForm;
