import React, {useEffect, useState} from 'react'
import {DetailOrder} from '../../Component'
import { useSelector, useDispatch } from "react-redux";
import { getUserCart, getUserData, updateAlamatPengiriman } from "../../store/action/index";
import {Container, Row, Col, Breadcrumb, Button, Modal, Card, Form} from 'react-bootstrap';
import { FaPhoneAlt, FaRegMap, FaRegHospital} from "react-icons/fa";

const AlamatPengiriman = (props) => {

    const {alamat_pengiriman} = props.user
    const {nomor_telepon, kota_kecamatan, kode_pos, alamat} = alamat_pengiriman[0]

    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex', flexDirection: 'column',   justifyContent: 'space-between', marginRight: '20px', padding: '10px'}}>
                    <FaRegHospital />
                    <FaRegMap />
                    <FaPhoneAlt />
                </div>
                <div style={{ justifyContent: 'space-between'}}>
                    <p style={{ margin: "5px 0"}}>{kota_kecamatan} {kode_pos}</p>
                    <p style={{ margin: "5px 0"}}>{alamat}</p>
                    <p style={{ margin: "5px 0"}}>+62 {nomor_telepon}</p>
                </div>
                
                <div>
                </div>
            </div>
            
        </div>
    )
}


const Shipment = () => {
	const dispatch = useDispatch();
    const products = useSelector((state) => state.userReducer.userCart);
    const user = useSelector((state) => state.userReducer.userData);
    
    const [nomortelpon, setNomortelpon] = useState('')
    const [kotakecamatan, setKotakecamatan] = useState('')
    const [kodepos, setKodepos ] = useState('')
    const [alamat_penerima, setAlamat] = useState('') 
    
    const [modal , setModal] = useState(false)

    useEffect(() => {
		dispatch(getUserCart())
        dispatch(getUserData())
	}, [dispatch]);

    useEffect(() => {
        if(user['alamat_pengiriman']){
            setNomortelpon(user['alamat_pengiriman'][0]['nomor_telepon'])
            setKotakecamatan(user['alamat_pengiriman'][0]['kota_kecamatan'])
            setKodepos(user['alamat_pengiriman'][0]['kode_pos'])
            setAlamat(user['alamat_pengiriman'][0]['alamat'])
        }
    }, [user])

    const handleSubmitUpdateAlamat = () => {
        const newAlamat = {
            label_alamat: user['alamat_pengiriman'][0]['label_alamat'],
            nomor_telepon:  nomortelpon,
            kota_kecamatan: kotakecamatan,
            kode_pos: kodepos,
            alamat: alamat_penerima
        }

        console.log(newAlamat)
        dispatch(updateAlamatPengiriman(newAlamat))
        setModal(false)
    }

    return (
        <div>
            <Modal show={modal} >
                <Card style={{padding: '20px'}}>
                    <Card.Header>ALAMAT PENGIRIMAN</Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Nomor Telepon</Form.Label>
                                        <div style={{display: 'flex'}}>
                                            <Form.Control
                                                value={nomortelpon}
                                                onChange={(e) => setNomortelpon(e.target.value)}
                                                type="number"
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Kode Pos</Form.Label>
                                        <div style={{display: 'flex'}}>
                                            <Form.Control
                                                value={kodepos}
                                                onChange={(e) => setKodepos(e.target.value)}
                                                type="number"
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Kota atau Kecamatan</Form.Label>
                                <Form.Control
                                    value={kotakecamatan}
                                    onChange={(e) => setKotakecamatan(e.target.value)}
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Alamat Penerima</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={alamat_penerima}
                                    onChange={(e) => setAlamat(e.target.value) }
                                    type="text"
                                />
                            </Form.Group>
                        </Form>
                        <hr></hr>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button style={{marginRight: '20px'}} variant="outline-primary" onClick={()=> setModal(false)}>Cancel</Button>
                            <Button variant="primary" onClick={()=> handleSubmitUpdateAlamat() }>Update</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Modal>


            <Container>
                <Row style={{marginBottom: '40px'}}>
                    <Col lg={8}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
                            <Breadcrumb.Item active>Shipment</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} >
                            <h5 style={{padding: '10px'}}>Alamat Pengiriman</h5>
                            <div>
                                <Button style={{padding:'5px 12px'}} variant="outline-primary" onClick={() => setModal(true)}>Update</Button>
                            </div>
                            
                        </div>
                        {user['name'] && <AlamatPengiriman user={user} />}
                        <hr></hr>
                        
                    </Col>

                    <Col lg={4}>
                        {products ? <DetailOrder products={products} userData={user} /> : <p>Kejap la</p> }
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Shipment
