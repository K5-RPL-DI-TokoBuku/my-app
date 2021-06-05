import React, {useEffect} from 'react'
import {Container, Row, Col, Breadcrumb, Button, Badge} from 'react-bootstrap';
import {DetailOrder} from '../../Component'

// Implementasi redux, ambil data dari store
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../../store/action/index";


const Shipment = () => {
    // Harus ada data user,
    // Harus sudah mengetahui jasa pengiriman
    // Lanjut pembayaran
    // let {name, nomor,telphone, alamat, jas_pengiriman} = data

    const products = useSelector((state) => state.userReducer.userCart);
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getUserCart())
	}, [dispatch]);

    let renderedBreadCumb = (
        <Breadcrumb>
			<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
			<Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
			<Breadcrumb.Item active>
				Shipment
			</Breadcrumb.Item>
		</Breadcrumb>
    )

    let renderedAlamatPengiriman = (
        <div>
            <h5>Alamat Pengiriman</h5>
            <hr></hr>
            <div style={{display: 'flex'}}>
                <h5>Ichlasul Amal</h5>
                <p>(Rumah)</p>
                <div>
                    <Badge pill variant="primary">
                        Utama
                    </Badge>

                </div>

            </div>
            <p>6282362097321</p>
            <p>Citerep Sukapura, Kec. Dayeuhkolot, Bandung, Jawa Barat, 40257 [Tokopedia Note: kos aa birin, rt 6 rw13 nomor F20]</p>
            <p>Dayeuhkolot, Kab. Bandung, 40257</p>
            <hr></hr>
            {/* PopupPilih alamat
            ada option tambah alamat */}
            <Button varian="light" >
                Pilih Alamat Lain
            </Button>
        </div>
    )

    return (
        <div>
            <Container>
                <Row style={{marginBottom: '40px'}}>
                    <Col lg={8}>
                        {renderedBreadCumb}
                        <h5>Checkout</h5>
                        {renderedAlamatPengiriman}
                    </Col>
                    
                    <Col lg={4}>
                        {products ? <DetailOrder products={products} /> : <p>Kejap la</p> }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shipment
