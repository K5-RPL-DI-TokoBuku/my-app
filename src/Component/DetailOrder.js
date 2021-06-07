import React, {useState}  from 'react'
import { Card, Button, Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {convertToRupiah, discountPrice} from '../utils/functions'
// ICON FOR pAYMENT
import { MdPayment } from "react-icons/md";
import {FaRegHospital} from "react-icons/fa";


const DetailOrder = (props) => {
    const {products, userData} = props
    const [showModal, setShowModal] = useState(false)

    const [paymentType, setPaymentType] = useState({})
    const [paymentChannel, setPaymentChannel] = useState('')

    let paymentArr = [
        {
            'type': 'Card Payment',
            'channel' : [
                {
                    'title': 'BCA',
                    'msg': ''
                },
                {
                    'title': 'Mandiri',
                    'msg': ''
                },
                {
                    'title': 'BNI',
                    'msg': ''
                },
                {
                    'title': 'BRI',
                    'msg': ''
                },
                {
                    'title': 'CIMB',
                    'msg': ''
                },
                {
                    'title': 'MayBank',
                    'msg': ''
                },
                
            ]
        },
        {
            'type': 'Bank Transfer',
            'channel' : [
                {
                    'title':'BCA',
                    'msg': ''
                },
                {
                    'title':'Permata',
                    'msg': ''
                },
                {
                    'title':'BNI',
                    'msg': ''
                },
                {
                    'title':'Mandiri Bill',
                    'msg': ''
                },
            ]
        },
        {
            'type': 'E Wallet',
            'channel' : [
                {
                    'title':'GO-Pay',
                    'msg': ''
                },
                {
                    'title':'AKULAKU',
                    'msg': ''
                },
            ]
        },
        {
            'type': 'Over The Counter',
            'channel' : [
                {
                    'title':'Indomaret',
                    'msg': ''
                },
                {
                    'title':'Alfamart',
                    'msg': ''
                },
            ]
        }

    ]

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

    const handleChosePayment = () => {
        console.log('Oke Buka pop up dari midtrans')
        setShowModal(true)
    }

    return (
        <div>
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
                        {userData ? (
                            <Button onClick={()=> handleChosePayment()} variant='primary' style={{margin:'5px'}}>
                                CHOSE PAYMENT
                            </Button>
                        ) : (
                            <Button variant='primary' style={{margin:'5px'}}>
                                <Link to="/cart/shipment" style={{marginRight: '20px', color: 'white'}}>BUY ({jumlah_product()})</Link>
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
            <Modal show={showModal}>
                <Card>
                    <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex'}}>
                            {paymentType && <Button variant="outline-success" onClick={()=> {
                                setPaymentType(false)
                                setPaymentChannel(false)
                                }}>Back</Button>}
                            <h4 style={{margin: '5px 0 0 20px'}}>SELECT PAYMENT</h4>

                        </div>
                        <div>
                            <Button variant="outline-danger" onClick={()=> {
                                setShowModal(false)
                                setPaymentType(false)
                                setPaymentChannel(false)
                            }}>Close</Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            {paymentType['type'] ? (
                                <div>
                                    <div style={{marginRight: '20px', display: 'flex'}}>
                                        <FaRegHospital style={{margin: '10px'}} />
                                        <p style={{color: '#f64c72', margin: ' 5px 10px'}}><b>{paymentType.type}</b></p>
                                    </div>
                                    <hr></hr>
                                </div>
                            ) : paymentArr.map((e,i) => {
                                console.log(e['channel'])
                                
                                return(
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                                            <div style={{marginRight: '20px'}}>
                                                <MdPayment />
                                            </div>
                                            <div>
                                                <p style={{color: '#f64c72'}}><b>{e.type}</b></p>
                                                <p>Hello World!</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Button onClick={()=>{
                                                    console.log('Payment Type: ', e)
                                                    setPaymentType(e)

                                                }} variant="outline-primary">+</Button>
                                        </div>
                                    </div>
                                )
                            })}
                            

                            {paymentType['channel'] && paymentType['channel'].map((e,i)=>{
                                
                                return(
                                    <div onClick={()=>{
                                        setPaymentChannel(e)
                                        console.log(` You choose payment with: ${paymentType['type']} - ${paymentChannel['title']} `)
                                    }}  style={{display: 'flex', justifyContent: 'flex-start', cursor: 'pointer', padding: '10px'}}>
                                        <div style={{marginRight: '20px'}}>
                                            <MdPayment />
                                        </div>
                                        <div>
                                            <p style={{color: '#2f2fa2'}}><b>{e.title}</b></p>
                                            <p>{e.message}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        { paymentChannel['title'] && <p style={{color: 'green'}}>{` You choose payment with: ${paymentType['type']} - ${paymentChannel['title']} `}</p>}


                    </Card.Body>

                </Card>
            </Modal>
        </div>
    )
}

export default DetailOrder
