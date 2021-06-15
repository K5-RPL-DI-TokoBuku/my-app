import React, {useEffect, useState} from 'react'
import { userService } from '../../services';
import {Container, Breadcrumb, Card, Button} from 'react-bootstrap';
import { convertToRupiah } from '../../utils/functions';


const Transaksi = () => {

    const [data,setData] = useState()

    useEffect(() => {
        console.log('Fetch Transaksi data')
        userService.getAllTransaksi().then(res=>{
            console.log(res)
            setData(res.response)
            console.log(res.msg)
        })
    }, [])

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Transaksi</Breadcrumb.Item>
            </Breadcrumb>
            {data ? data.map((e,i) => {
                const {detail_transaksi, _id, total_pembayaran, berat, kurir, createdAt, detail_status_pembayaran} = e
                const {va_number, bank} = detail_status_pembayaran &&  detail_status_pembayaran['va_numbers'][0]
                return(
                    <Card style={{margin: '10px 0'}}>
                        <Card.Header>
                            <h5>ID : {_id}</h5>
                        </Card.Header>
                        <Card.Body>
                            <div style={{display: 'flex'}}>
                                <p style={{padding: '20px', fontWeight: 'bold'}}>Kurir : {`${kurir.toUpperCase()}`}</p>
                                <p style={{padding: '20px', fontWeight: 'bold'}}>Berat : {berat}</p>
                                <p style={{padding: '20px', fontWeight: 'bold'}}>Created : {`${createdAt.slice(0,10)}`}</p>
                                <p style={{padding: '20px', fontWeight: 'bold'}}>Total Product : {detail_transaksi.length}</p>
                            </div>
                            <p>Total Pembayaran : {`${convertToRupiah(total_pembayaran)}`}</p>
                            <p>Bank  : {bank}</p>
                            <p>VA Number  : {va_number}</p>
                            <Button variant={'warning'}>{`${detail_status_pembayaran['transaction_status'].toUpperCase()}`}</Button>
                        </Card.Body>
                    </Card>
                )

            }) : <p>Data Not Found</p>}
            
        </Container>
    )

    // return (
    //     <Container>
    //         <Row style={{marginBottom: '40px'}}>
    //             <Col lg={8}>
    //                 <Breadcrumb>
    //                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    //                     <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
    //                     <Breadcrumb.Item active>Shipment</Breadcrumb.Item>
    //                 </Breadcrumb>

    //                 {data ? data.map((e,i) => {
    //                     const {detail_transaksi, _id, total_pembayaran, berat, kurir, createdAt, detail_status_pembayaran} = e

    //                     const {va_number, bank} = detail_status_pembayaran &&  detail_status_pembayaran['va_numbers'][0]
    //                     return(
    //                         <Card>
    //                             <Card.title>ID: {_id}</Card.title>
    //                             <Card.body>
    //                                 <p>Total Pembayaran : {total_pembayaran}</p>
    //                                 <p>Berat : {berat}</p>
    //                                 <p>Kurir : {kurir}</p>
    //                                 <p>Created : {createdAt}</p>
    //                                 <div>
    //                                     <p>Payment Type  : {detail_status_pembayaran['payment_type']}</p>
    //                                     <p>Bank  : {bank}</p>
    //                                     <p>VA Number  : {va_number}</p>
    //                                 </div>
    //                                 {detail_transaksi.map((product, index) =>{
    //                                     return (
    //                                         <>
    //                                             <p>{product['name']} </p>
    //                                             <p>{product['quantity']}</p>
    //                                         </>
    //                                     )
    //                                 }) }
    //                             </Card.body>
    //                         </Card>
    //                     )
    //                 }) : <p>Transaksi Not Found</p>}

    //             </Col>

    //             <Col>
    //                 <p>Hai</p>
    //             </Col>
    //         </Row>
    //     </Container>
    // )
}

export default Transaksi
