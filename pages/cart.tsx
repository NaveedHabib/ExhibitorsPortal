import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { removeFromCart, updateQuantity } from '@/store/slices/cartSlice';
import { IoClose } from 'react-icons/io5';
import { AddStandSpace, StandSpaceItemModel } from '@/sysmodel/StandSpaceModel';
import { loggedModel } from '@/sysmodel/loginModel';
import Helper from '@/modules/Helper';
import eventModel from '@/sysmodel/eventModel';
import Globals from '@/modules/Globals';
import axios from "axios";
import promoCodeModel from '@/sysmodel/promoCodeModel';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ productId, quantity }));
        }
    };

    const calculateGrandTotal = () => {
        var total = cartItems.reduce((total, item: StandSpaceItemModel) => {
            const price = parseFloat(item.Amount);
            const quantity = parseInt(item.Quantity, 10);
            if (!isNaN(price) && !isNaN(quantity)) {
                return total + price * quantity;
            }
            return total;
        }, 0);

        var promocodeData: any = document.getElementById("promocode");
        var promocode_discountData: any = document.getElementById("promocode_discount");
        var promocode_errorData: any = document.getElementById("promocode-error");

        if (promocodeData != null) {
            var promocode = promocodeData?.value;
            promocode_discountData.innerHTML = "0";
            promocode_errorData.classList.add("d-none");

            var discount = 0;
            if (promocode) {
                var findModel = promocodes.find((f: promoCodeModel) => {
                    return (
                        f.Name == promocode && f.UsedCodes < f.MaximumCodes
                    )
                })

                if (findModel) {
                    var date = new Date();
                    date.setHours(0, 0, 0, 0);
                    var expiryDate = new Date(findModel.ExpiryDate);
                    expiryDate.setHours(0, 0, 0, 0);
                    if (expiryDate < date) {
                        promocode_errorData.classList.remove("d-none");
                    }
                    else {
                        discount = findModel.Discount;

                        promocode_discountData.innerHTML = findModel.Discount.toString();
                    }
                }
                else {
                    promocode_errorData.classList.remove("d-none");
                }
            }

            if (EventData) {
                var totalAmountIntData: any = document.getElementById("totalAmountInt");
                var grand_totalData: any = document.getElementById("grand_total");
                var discounted_amountData: any = document.getElementById("discounted_amount");
                var total_with_taxData: any = document.getElementById("total_with_tax");
                var totalVATAmountIntData: any = document.getElementById("totalVATAmountInt");
                var total_with_tax_aedData: any = document.getElementById("total_with_tax_aed");

                totalAmountIntData.value = total;
                grand_totalData.innerHTML = total.toFixed(2);

                var getdiscountAmount = total * (discount / 100);
                total = total - getdiscountAmount;

                discounted_amountData.innerHTML = total.toFixed(2);

                var tax = total * (EventData.VAT / 100);

                total_with_taxData.innerHTML = (total + tax).toFixed(2);
                totalVATAmountIntData.value = total + tax;
                total_with_tax_aedData.innerHTML = Math.round((total + tax) * EventData.ExchangeRate).toString();
            }
        }
    };


    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [EventData, SetEventData] = useState<eventModel>();

    const [promocodes, setPromocode] = useState<Array<promoCodeModel>>([]);

    useEffect(() => {
        if (loggedData) {
            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });

            axios.get(`${Globals.API_URL}Exhibitor/GetActivePromoCodes/${loggedData.eventid}`).then((r: any) => {
                const dataModel: Array<promoCodeModel> = r.data;
                setPromocode(dataModel);
            });
        }
    }, []);


function checkout(){
    var selected: Array<AddStandSpace> = [];

    cartItems.map((c:any)=>{
        var item: StandSpaceItemModel = c;

        var ss: AddStandSpace = new AddStandSpace();
        ss.Quantity = item.Quantity;
        ss.StandSpaceItemID = item.StandSpaceItemID;

        selected.push(ss);
    })

    var grand_totalData: any = document.getElementById("totalAmountInt");
    var totalVATAmountIntData: any = document.getElementById("totalVATAmountInt");
    var promocodeData: any = document.getElementById("promocode");
    var promocode_errorData: any = document.getElementById("promocode-error");

    var total = grand_totalData.value;
    var promocode = promocodeData.value;
    var totalVATAmountInt = totalVATAmountIntData.value;

    if (promocode_errorData.classList.contains("d-none")) {
        axios.post(`${Globals.API_URL}Exhibitor/createOrder/${loggedData?.id}`, {
            total: total,
            totalVATAmount: totalVATAmountInt,
            order: selected,
            promocode: promocode
        })
            .then((data:any) => {
                if (data) {
                    cartItems.map((c:any)=>{
                        var item: StandSpaceItemModel = c;
                        dispatch(removeFromCart(item.StandSpaceItemID));
                    })
                    
                    window.location.href = `${Globals.Server_URL}Payment/Go/${data.data}`;
                }
            })
    }

}

    return (
        <div className="cart-wrapper margin-top-section">
            <div className="container">
                <h2 className='mb-5 mt-5'>My Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-items row ">


                        <div className="col-12">
                            {cartItems.map(((item: StandSpaceItemModel, index: number) => {
                                return (
                                    <div className='d-flex shadow p-4' key={`cartitem-${index}`}>
                                        <div className="cart-item">
                                            <div className='d-flex flex-column flex-lg-row gap-4 align-items-lg-center'>
                                                <a href={`/product/${item.StandSpaceItemID}`}>
                                                    <img src={item.Image ? item.Image : `/assets/imgs/default.png`} alt={item.Name} />
                                                    <span className='name'>{item.Name}</span>
                                                </a>
                                            </div>

                                            <div className='d-flex'>
                                                <div>
                                                    {/* <p className='text-secondary line-through'>{item.Amount}</p> */}
                                                    <p className='price'>{item.Amount} {EventData?.Currency}</p>
                                                    <div className='mt-2'>
                                                        <button className='px-4 py-2' onClick={() => handleQuantityChange(item.StandSpaceItemID, item.Quantity - 1)}>-</button>
                                                        <span className='px-4 py-2'>{item.Quantity}</span>
                                                        <button className='px-4 py-2' onClick={() => handleQuantityChange(item.StandSpaceItemID, item.Quantity + 1)}>+</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='mt-4'>
                                            <button onClick={() => handleRemove(item.StandSpaceItemID)} className='bg-white'><IoClose size={24} /></button>
                                        </div>
                                    </div>

                                )
                            }))}

                        </div>



                    </div>
                )}


                <div className="row mt-5">
                    <div className="col-lg-8 col-12">
                        {/* some things here ( instruction or any information) */}
                    </div>
                    <div className="col-lg-4 col-12">
                        {cartItems.length > 0 ? (
                            calculateGrandTotal(),
                            <React.Fragment>
                                <div className="order-summary">
                                    <table className="table m-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="text" style={{ width: "365px" }} id="promocode" className="form-control float-right"
                                                        onBlur={(e) => {
                                                            calculateGrandTotal()
                                                        }}
                                                        placeholder="Promo Code"></input>
                                                    <p className="text-danger text-right d-none" id="promocode-error" style={{ clear: "both", fontSize: "14px" }}>Promocode is not valid.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "90%" }} colSpan={5} className="text-right"><strong>Total ({EventData?.Currency})</strong></td>
                                                <td style={{ width: "10%" }}><span id="grand_total">0.00</span></td>
                                            </tr>

                                            <tr>
                                                <td style={{ width: "90%" }} colSpan={5} className="text-right"><strong>Promocode Discount</strong></td>
                                                <td style={{ width: "10%" }}><span id="promocode_discount">0</span>%</td>
                                            </tr>

                                            <tr>
                                                <td style={{ width: "90%" }} colSpan={5} className="text-right"><strong>Discounted Amount</strong></td>
                                                <td style={{ width: "10%" }}><span id="discounted_amount">0.00</span></td>
                                            </tr>

                                            <tr>
                                                <td style={{ width: "90%" }} colSpan={5} className="text-right"><strong>VAT</strong></td>
                                                <td style={{ width: "10%" }}>{EventData?.VAT}%</td>
                                            </tr>

                                            <tr>
                                                <td style={{ width: "90%" }} colSpan={5} className="text-right"><strong>Grand Total ({EventData?.Currency})</strong></td>
                                                <td style={{ width: "10%" }}><span id="total_with_tax">0.00</span></td>
                                            </tr>

                                            <tr className={`${EventData?.ExchangeRate == 1 ? "d-none" : ""}`}>
                                                <td style={{ width: "90%" }} colSpan={5} className="text-right"><strong>Grand Total (AED)</strong></td>
                                                <td style={{ width: "10%" }}><span id="total_with_tax_aed">0.00</span></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <input type="number" id="totalAmountInt" hidden defaultValue={0} />
                                    <input type="number" id="totalVATAmountInt" hidden defaultValue={0} />
                                    <button type='button' className='btn btn-primary text-white'
                                        onClick={(e) => {
                                            checkout();
                                        }}
                                    >Checkout</button>

                                </div>
                            </React.Fragment>
                        ) : ""}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Cart;
