import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getUserData} from '../../store/action'
import { Container, Row, Col, Breadcrumb, Card, Button, Modal, Form } from 'react-bootstrap';
import { UserComponent } from '../../Component';
import {updateAlamatPengiriman } from "../../store/action/index";


const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer.userData);
    const [showModal, setShowModal] = useState(false)

    const [nomortelpon, setNomortelpon] = useState('')
    const [kotakecamatan, setKotakecamatan] = useState('')
    const [kodepos, setKodepos ] = useState('')
    const [alamat_penerima, setAlamat] = useState('') 

    useEffect(() => {
		dispatch(getUserData())
    // eslint-disable-next-line
	},[dispatch]);

    useEffect(() => {
        if(user['alamat_pengiriman']){
            setNomortelpon(user['alamat_pengiriman']['nomor_telepon'])
            setKotakecamatan(user['alamat_pengiriman']['kota_kecamatan'])
            setKodepos(user['alamat_pengiriman']['kode_pos'])
            setAlamat(user['alamat_pengiriman']['alamat'])
        }
    }, [user])

    const handleSubmitUpdateAlamat = () => {
        const newAlamat = {
            label_alamat: 'Rumah',
            nomor_telepon:  nomortelpon,
            kota_kecamatan: kotakecamatan,
            kode_pos: kodepos,
            alamat: alamat_penerima
        }

        console.log(newAlamat)
        dispatch(updateAlamatPengiriman(newAlamat))
        setShowModal(false)
        setNomortelpon('')
        setKotakecamatan('')
        setKodepos('')
        setAlamat('')
    }

    return (
        <Container>
            <Modal show={showModal} >
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
                            <Button style={{marginRight: '20px'}} variant="outline-primary" onClick={()=> setShowModal(false)}>Cancel</Button>
                            <Button variant="primary" onClick={()=> handleSubmitUpdateAlamat() }>Update</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Modal>
            <Row style={{marginBottom: '40px'}}>
                <Col>
                    <Card style={{ marginBottom: '20px' , cursor: 'pointer', paddingTop: '20px'}}>
                        <div style={{height: '160px', overflow: 'hidden'}}>
                            <Card.Img style={{ height:'inherit', padding: '0 20px'}} variant="top" src="https://images.unsplash.com/photo-1554513480-4ef4b8c3ea27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80" />
                        </div>
                        <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button style={{cursor: 'pointer'}} variant='outline-primary' onClick={() => console.log('Change Password, show pop up')}>Change Password</Button>
                            <Button style={{cursor: 'pointer'}}  variant='outline-primary' onClick={() => setShowModal(true)}>Update Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            User Profile
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    {user['name'] ?  <UserComponent user={user} /> : <p>Loading</p>}
                </Col>
                
            </Row>
        </Container>
    )
}

export default Profile
