import React from 'react'

export default function Card() {
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
                <img className="card-img-top" src="https://th.bing.com/th/id/OIP.uLUxk9TvGfvoEsJj6q_zcwHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image cap" />

                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text.</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 primary text-light bg-success rounded '>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 text-light  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
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
