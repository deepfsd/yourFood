import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {

  const [food_category, setFoodCat] = useState([]);
  const [food_items, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);

  }

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel></Carousel></div>
      <div className='container'>
        {
            food_category !=[]
            ? food_category.map((data)=>{
              return( <div> {data.CategoryName}</div> );
              // https://youtu.be/TQXSzHpfZMY?list=PLI0saxAvhd_OdRWyprSe3Mln37H0u4DAp&t=2044
            })
            : <div>"""""""""""</div>
        }
        <Card />
      </div>
      <div><Footer></Footer></div>
    </div>
  )
}
