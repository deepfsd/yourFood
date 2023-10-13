import React from 'react'

export default function Card(props) {

    let options = props.options;
    let priceOption = Object.keys(options)
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
                <img className="card-img-top" src={props.imgSrc} alt="Card image cap" style={{height:"200px", objectFit:"fill"}} />

                <div class="card-body">
                    <h5 class="card-title">{props.foodName}</h5>
                    <div className="container w-100">
                        <select className='m-2 h-100 primary text-light bg-success rounded '>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 text-light  bg-success rounded'>
                                {priceOption.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
//https://youtu.be/E0DEIcAwejk?list=PLI0saxAvhd_OdRWyprSe3Mln37H0u4DAp&t=183