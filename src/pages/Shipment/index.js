import React, {useEffect, useState} from 'react'
import {DetailOrder, InfoCheckout} from '../../Component'
import { useSelector, useDispatch } from "react-redux";
import { getUserCart, getUserData, updateAlamatPengiriman } from "../../store/action/index";
import {Container, Row, Col, Breadcrumb, Button, Modal, Card, Form} from 'react-bootstrap';
import { FaPhoneAlt, FaRegMap, FaRegHospital} from "react-icons/fa";
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

const Shipment = () => {
	const dispatch = useDispatch();
    const products = useSelector((state) => state.userReducer.userCart);
    const user = useSelector((state) => state.userReducer.userData);
    
    const [modal , setModal] = useState(false)

    const [nomortelpon, setNomortelpon] = useState('')
    const [kotakecamatan, setKotakecamatan] = useState('')
    const [kodepos, setKodepos ] = useState('')
    const [alamat_penerima, setAlamat] = useState('') 

    const [cityArray, setCityArray] = useState([])


    const [province, setProvince] = useState()
    const [city, setCity] = useState()

    //Pilih Kurir

    //let city = 2 //Aceh barat daya
    let weight = 1000 // 1kilogram = 1000 gram
    const [courier, setCourier] = useState() // Kurir Yang dipilih user: ['pos','jne','tiki']
    const [service, setService] = useState([]) // Jenis servise yang memeiliki array cost misal Jne : ['REG','OKE']
    const [ongkir, setOngkir] = useState() // Jenis service yang dipilih user {service: "OKE", description: "Ongkos Kirim Ekonomis", cost: Array(value: 47000, etd: "3-6", note: "")}
    const [rajaOngkir, setRajaOngkir] = useState() //Detail Ongkir hasil dari check Ongkir ['destination_details','origin_details',query, results]

    const [strOngkir, setStrOngkir] = useState()

    const courierArray = [
        {
            name: 'jne',
            image_link: 'https://cdn-2.tstatic.net/pontianak/foto/bank/images/jne_20180321_200135.jpg'
        },{
            name: 'pos',
            image_link: 'https://www.suarasurabaya.net/wp-content/uploads/2020/09/pos-indonesia-840x493.jpg'
        },{
            name: 'tiki',
            image_link: 'https://pbs.twimg.com/profile_images/1199898662496657408/nNjmGXqz.jpg'
        }
    ]

    //End Pilih kurir

    
    
    useEffect(() => {
		dispatch(getUserCart())
        dispatch(getUserData())
	}, [dispatch]);

    // Use effet for update with modal
    useEffect(() => {
        if(user['alamat_pengiriman']){
            setNomortelpon(user['alamat_pengiriman']['nomor_telepon'])
            setKotakecamatan(user['alamat_pengiriman']['kota_kecamatan'])
            setKodepos(user['alamat_pengiriman']['kode_pos'])
            setAlamat(user['alamat_pengiriman']['alamat'])
        }
    }, [user])

    // UseEffect for update service
    useEffect(()=>{
        console.log("User choose :",courier)
        console.log('Hai pilih kurir use effect \n', service)
        // eslint-disable-next-line
    }, [service])

    const handleSubmitUpdateAlamat = () => {
        const newAlamat = {
            label_alamat: user['alamat_pengiriman']['label_alamat'],
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

                            {/* <Form.Group controlId="formBasicEmail">
                                <Form.Label>Kota atau Kecamatan</Form.Label>
                                <Form.Control
                                    value={kotakecamatan}
                                    onChange={(e) => setKotakecamatan(e.target.value)}
                                    type="text"
                                />
                            </Form.Group> */}

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
                        {user['name'] && <InfoCheckout user={user} />}


                        {strOngkir && (
                            <div>
                                <hr></hr>
                                <div style={{display: 'flex', justifyContent: 'space-between'}} >
                                    <h5 style={{padding: '10px'}}>Jasa Pengiriman</h5>
                                    <div>
                                        <Button variant="outline-primary" onClick={() => {
                                            setCourier('')
                                            setStrOngkir('')
                                            setOngkir('')
                                            setService([])
                                        }}>Update</Button>
                                    </div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div style={{display: 'flex', flexDirection: 'column',   justifyContent: 'space-between', marginRight: '20px', padding: '10px'}}>
                                        <FaRegHospital />
                                        <FaRegMap />
                                        <FaPhoneAlt />
                                    </div>
                                    <div style={{ justifyContent: 'space-between'}}>
                                        <p style={{ margin: "5px 0"}}>{courier}</p>
                                        <p style={{ margin: "5px 0"}}>{ongkir['service']}</p>
                                        <p style={{ margin: "5px 0"}}>{ongkir['description']}</p>
                                    </div>
                                </div>
                            </div>

                        )}
                        
                    </Col>

                    <Col lg={4}>
                        {!strOngkir && (

                        
                            <Form style={{margin: "10px 0 40px 0",}}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Pilih Kurir</Form.Label>

                                    <Form.Control as="select" value={courier} onChange={(e) => {
                                            console.log(e.target.value)
                                            setCourier(e.target.value)
                                            // Fetch Api an then set pilihan courier 

                                            let data = {
                                                courier: e.target.value,
                                                destination: 2,
                                                weight
                                            }
                                            console.log(data)

                                            userService
                                                .checkOngkir(data)
                                                .then((res) => {
                                                    console.log('Result from raja ongkir User service check Ongkir')
                                                    console.log(res)
                                                    setRajaOngkir(res.rajaOngkir)
                                                    setService(res.results[0])
                                                })
                                                .catch(err=>{
                                                    console.log(err)
                                                })
                                                .finally(()=>{
                                                    console.log('Fetch  to raja ongkir API : Check Ongkir')
                                                })

                                            
                                        }}>
                                            <option value={"none"}>--Pilih Kurir--</option>
                                            {courierArray.map((e,i) =>{
                                                return(
                                                    <option value={e.name}>{e.name}</option>
                                                )
                                            })}
                                        </Form.Control>
                                </Form.Group>

                                {service['costs'] && (
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Service</Form.Label>
                                        <Form.Control as="select" value={strOngkir} onChange={(e) => {

                                            let chooseCost = service['costs'][e.target.value]
                                            const {value, etd} = chooseCost['cost'][0]
                                            setOngkir(chooseCost )
                                            setStrOngkir(`${value} - ${chooseCost['service']} - ${etd}`)
                                            console.log('Set ongkir',service['costs'][e.target.value])
                                            console.log(`${value} - ${chooseCost['service']} - ${etd}`)
                                        }}>
                                            <option value={'none'}>--Pilih Type Pengiriman--</option>
                                            {service['costs'].map((e,i) =>{


                                                const {service, cost} = e
                                                // const {value, etd, note} = cost[0]
                                                const {value, etd} = cost[0]

                                                return(
                                                    <option value={i}>{value} - {service} - {etd} hari </option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                )}

                                {ongkir && (
                                    <p>You choose {ongkir['service']}</p>

                                    // <p>You choose {ongkir['service']}, estimasi sampai {ongkir['cost'][0]['etd']} . Total Ongkir: {ongkir['cost'][0]['value']}</p>
                                )}
                            </Form>
                        )}

                        {products && ongkir ? <DetailOrder products={products} userData={user} courier={courier} ongkir={ongkir} rajaOngkir={rajaOngkir} /> : <p style={{color: 'red', border: '2px solid red', borderRadius:'5px', padding: '5px 10px'}}>Silahkan Memilih jasa Kurir</p> }
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Shipment





                        // <div style={{display: 'flex', justifyContent: 'space-between'}} >
                        //     <h5 style={{padding: '10px'}}>Informasi pembeli</h5>
                        //     <div>
                        //         <Button style={{padding:'5px 12px'}} variant="outline-primary" onClick={() => setModal(true)}>Update</Button>
                        //     </div>
                            
                        // </div>
                        // {user['name'] && <InformasiPembeli user={user} />}
                        // <hr></hr>
                        // <div style={{display: 'flex', justifyContent: 'space-between'}} >
                        //     <h5 style={{padding: '10px'}}>Alamat Pengiriman</h5>
                        //     <div>
                        //         <Button style={{padding:'5px 12px'}} variant="outline-primary" onClick={() => setModal(true)}>Update</Button>
                        //     </div>
                            
                        // </div>
                        // {user['name'] && <AlamatPengiriman user={user} />}
                        // <hr></hr>
                        // <div style={{display: 'flex', justifyContent: 'space-between'}} >
                        //     <h5 style={{padding: '10px'}}>Jasa Pengiriman</h5>
                        //     <div>
                        //         <Button style={{padding:'5px 12px'}} variant="outline-primary" onClick={() => setModal(true)}>Update</Button>
                        //     </div>
                            
                        // </div>
                        // {user['name'] && <PilihKurir city={city} products={products} />}
                        // <hr></hr> 
