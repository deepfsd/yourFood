import React, { useState, useRef, useEffect } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOption = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const handleAddToCart = async ()=>{
        await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size})
        console.log(data);
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value);
    },[]);
    return (
        <div>
            {/* <div>
                <div className="card mt-3" style={{ "maxWidth": "18rem;", "maxHeight": "360px;" }}>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text.</p>
                <div className="container w-100">
                <select className='m-2 h-100 primary bg-success rounded '>
                {Array.from(Array(6), (e, i) => {
                    return (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                        )
                    })}
                    </select>
                    <select className='m-2 h-100  bg-success rounded'>
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                    </select>
                    
                    <div className='d-inline h-100 fs-5'>
                    Total Price
                    </div>
                    </div>
                    </div>
                    </div>
                </div> */}
            <div class="card">
                <img className="card-img-top" src={props.foodItem.img} alt="Card image cap" style={{height:"200px", objectFit:"fill"}} />

                <div class="card-body">
                    <h5 class="card-title">{props.foodItem.name}</h5>
                    <div className="container w-100">
                        <select className='m-2 h-100 primary text-primary-emphasis bg-success rounded ' onChange={(e)=> setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 text-primary-emphasis bg-success rounded' ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                                {priceOption.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                        <hr />
                        <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// https://youtu.be/iFMK6N4hUkw?list=PLI0saxAvhd_OdRWyprSe3Mln37H0u4DAp