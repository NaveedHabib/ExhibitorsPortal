import Link from 'next/link'
import React, { useState } from 'react'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className='container'>

            <div className="form-card mt-5">
                <div className="row ">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="/assets/imgs/Aimlogo.png" alt="" className='company-logo' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <form className='col-lg-4 col-md-6 col-12 mx-auto'>
                                

                                <div className="row">
                                    
                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

                                    </div>

                                   
                                    <div className="col-12 mb-3">
                                        <input className='form-control' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                                    </div>

                                   

                                    <div className="col-12 mb-3 d-flex justify-content-end">
                                        <button type="button" className='btn btn-primary text-white'>Login</button>
                                    </div>
                                </div>




                            </form>
                        </div>

                        <div className="col-12 d-flex justify-content-center mt-5">
                            <div className='d-flex gap-2'>Don&apos;t have an account ?  <Link href="/register" className='text-primary'>Register</Link></div>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}
