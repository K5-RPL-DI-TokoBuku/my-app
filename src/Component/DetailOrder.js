import React from 'react'
import { Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {convertToRupiah, discountPrice} from '../utils/functions'

const DetailOrder = (props) => {
    const {products} = props
    let jumlah_product = () => {
        let total = 0
        for (let i = 0 ; i < products.length ; i++ ){
            total += products[i]['quantity']
        }
        return total
    }

    let total_price = () => {
        let total = 0
        for (let i = 0 ; i < products.length ; i++ ){
            const { quantity, price } = products[i]
            const discount_price = discountPrice(price)
            total += discount_price * quantity 
        }

        return convertToRupiah(Math.round(total))
    }

    return (
        <Card>
            <Card.Header>Detail Order</Card.Header>
            <Card.Body>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>Total Price ({jumlah_product()} items)</p>
                    <p>{total_price()}</p>
                </div>
                <hr></hr>
                <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', }}>
                    <h4 style={{margin: 0}}><b>Total Price</b></h4>
                    <p style={{margin: 0}}><b>{total_price()}</b></p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                    <Button variant='primary' style={{margin:'5px'}}>
                        <Link to="/cart/shipment" style={{marginRight: '20px', color: 'white'}}>BUY ({jumlah_product()})</Link>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default DetailOrder
