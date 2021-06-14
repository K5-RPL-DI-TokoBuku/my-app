import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getUserData} from '../../store/action'
import { Container, Row, Col, Breadcrumb, Card, Button, Modal, Form } from 'react-bootstrap';
import { UserComponent } from '../../Component';
import {updateAlamatPengiriman } from "../../store/action/index";
import { userService } from '../../services';
const provinceArray = [
    {
        "province_id": "1",
        "province": "Bali"
    },
    {
        "province_id": "2",
        "province": "Bangka Belitung"
    },
    {
        "province_id": "3",
        "province": "Banten"
    },
    {
        "province_id": "4",
        "province": "Bengkulu"
    },
    {
        "province_id": "5",
        "province": "DI Yogyakarta"
    },
    {
        "province_id": "6",
        "province": "DKI Jakarta"
    },
    {
        "province_id": "7",
        "province": "Gorontalo"
    },
    {
        "province_id": "8",
        "province": "Jambi"
    },
    {
        "province_id": "9",
        "province": "Jawa Barat"
    },
    {
        "province_id": "10",
        "province": "Jawa Tengah"
    },
    {
        "province_id": "11",
        "province": "Jawa Timur"
    },
    {
        "province_id": "12",
        "province": "Kalimantan Barat"
    },
    {
        "province_id": "13",
        "province": "Kalimantan Selatan"
    },
    {
        "province_id": "14",
        "province": "Kalimantan Tengah"
    },
    {
        "province_id": "15",
        "province": "Kalimantan Timur"
    },
    {
        "province_id": "16",
        "province": "Kalimantan Utara"
    },
    {
        "province_id": "17",
        "province": "Kepulauan Riau"
    },
    {
        "province_id": "18",
        "province": "Lampung"
    },
    {
        "province_id": "19",
        "province": "Maluku"
    },
    {
        "province_id": "20",
        "province": "Maluku Utara"
    },
    {
        "province_id": "21",
        "province": "Nanggroe Aceh Darussalam (NAD)"
    },
    {
        "province_id": "22",
        "province": "Nusa Tenggara Barat (NTB)"
    },
    {
        "province_id": "23",
        "province": "Nusa Tenggara Timur (NTT)"
    },
    {
        "province_id": "24",
        "province": "Papua"
    },
    {
        "province_id": "25",
        "province": "Papua Barat"
    },
    {
        "province_id": "26",
        "province": "Riau"
    },
    {
        "province_id": "27",
        "province": "Sulawesi Barat"
    },
    {
        "province_id": "28",
        "province": "Sulawesi Selatan"
    },
    {
        "province_id": "29",
        "province": "Sulawesi Tengah"
    },
    {
        "province_id": "30",
        "province": "Sulawesi Tenggara"
    },
    {
        "province_id": "31",
        "province": "Sulawesi Utara"
    },
    {
        "province_id": "32",
        "province": "Sumatera Barat"
    },
    {
        "province_id": "33",
        "province": "Sumatera Selatan"
    },
    {
        "province_id": "34",
        "province": "Sumatera Utara"
    }
]

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer.userData);
    const [showModal, setShowModal] = useState(false)

    const [nomortelpon, setNomortelpon] = useState('')
    const [kotakecamatan, setKotakecamatan] = useState('')
    const [kodepos, setKodepos ] = useState('')
    const [alamat_penerima, setAlamat] = useState('') 

    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [cityArray, setCityArray] = useState([])


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
            setProvince(user['alamat_pengiriman']['provinsi'])
            setCity(user['alamat_pengiriman']['kabupaten'])

        }
    }, [user])

    const handleSubmitUpdateAlamat = () => {
        const newAlamat = {
            label_alamat: 'Rumah',
            nomor_telepon:  nomortelpon,
            kota_kecamatan: kotakecamatan,
            kode_pos: kodepos,
            alamat: alamat_penerima,
            provinsi: province,
            kabupaten:city,
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
                                <Form.Label>Provinsi</Form.Label>

                                <Form.Control as="select" value={province} onChange={(e) => {
										setProvince(e.target.value)
                                        console.log('yae')
                                        // Fetch Api an then set city 

                                        userService
                                            .postCityInProvince(e.target.value)
                                            .then((res) => {
                                                console.log('Result from raja ongkir')
                                                console.log(res)
                                                console.log('Total result: ', res.result.length)
                                                setCityArray(res.result)
                                            })
                                            .catch(err=>{
                                                console.log(err)
                                            })
                                            .finally(()=>{
                                                console.log('Fetch city in province , to raja ongkir API')
                                            })

                                        
									}}>
                                        {provinceArray.map((e,i) =>{
                                            return(
										        <option value={e.province_id}>{e.province}</option>
                                            )
                                        })}
									</Form.Control>
                            </Form.Group>

                            {cityArray.length > 0 && (
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Kota / Kabupaten</Form.Label>
                                    <Form.Control as="select" value={city} onChange={(e) => {
                                        setCity(e.target.value)
                                    }}>
                                        {cityArray.map((e,i) =>{
                                                return(
                                                    <option value={e.city_id}>{e.city_name}</option>
                                                )
                                            })}
                                    </Form.Control>
                                </Form.Group>

                            )}

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
