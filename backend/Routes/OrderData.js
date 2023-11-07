const express = require('express');
const router = express.Router();

const Order = require('../models/Orders');

router.post('/orderData', async (req, res)=>{
    let data = req.body.order_data
    await data.slice(0, 0, {Order_date: req.body.order_date})

    let eId = await Order.findOne({'email': req.body.email})
    console.log(eId)

    if(eId === null){
        try{
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(()=>{
                res.json({success: true})
            })
        } catch(error){
            console.log(error.message)
            // res.send("Server Error", error.message);
            res.status("Server Error")

        }
    }

    else{
        try{
            await Order.findOneAndUpdate({ email: req.body.email },
                {
                    $push: { order_data }}).then(()=>{
                        res.json({success: true})
                    })
        } catch(error){
            // res.send("Server Error", error.message)
            res.status("Server Error")
        }
    }


})

module.exports = router;
// https://youtu.be/iLng4XfiRm8?list=PLI0saxAvhd_OdRWyprSe3Mln37H0u4DAp&t=1246


