import React from 'react'
import trash from '../trash.svg'
import { useCart,useDispatchCart } from '../components/ContextReducer'
export default function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();
    if(data.length === 0){
        return(
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        )
    }
    let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
        <div className='conainer m-auto m-5 table-responsive table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // {data.map((food, index)=>(
                            //     <tr>
                            //         <th scope='row'>{index + 1}</th>
                            //         <td>{food.name}</td>
                            //         <td>{food.qty}</td>
                            //         <td>{food.size}</td>
                            //         <td>{food.price}</td>
                            //     </tr>
                            // ))}
                        }
                    </tbody>
            </table>
            {
                // <div>
                //     <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
                // </div>
            }
            <div>
                <button className='btn bg-success mt-5'>Check Out</button>
            </div>
        </div>
    </div>
  )
}
//https://youtu.be/iFMK6N4hUkw?list=PLI0saxAvhd_OdRWyprSe3Mln37H0u4DAp&t=296