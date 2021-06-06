// import React, {useState} from 'react'
// import { Card, Button, Modal, Form, Row, Col} from 'react-bootstrap'
// import { FaUserAlt } from "react-icons/fa";
// import {updateAlamatPengiriman} from '../store/action'
// import { useDispatch } from "react-redux";



// const UserComponent = (props) => {
//     const dispatch = useDispatch()
//     const {_id, email, password, name, nik, cart, alamat_pengiriman} = props.user
//     let nickname = name.split(" ")[0]
//     let userId = _id.split(0,10)

//     let password_secure = "Kurang Aman"
//     if (password.length > 10){
//         password_secure = "Password Secure"
//     }

//     let cart_total = cart.length | 0

//     const [modal, setModal] = useState(false)

//     // alamat pengirim : { label, namapenerima, nomor telpon, kota atau kecamatan, kode postMessage, alamat}

//     const [label, setLabel] = useState(alamat_pengiriman[0]['label_alamat'] )
//     const [nomortelpon, setNomortelpon] = useState(alamat_pengiriman[0]['nomor_telepon'])
//     const [kota, setKota] = useState(alamat_pengiriman[0]['kota_kecamatan'])
//     const [kodepos, setKodepos] = useState(alamat_pengiriman[0]['kode_pos'])
//     const [alamat, setAlamat] = useState(alamat_pengiriman[0]['alamat'])


//     const [detail_pengiriman, setDetailPengiriman] = useState(false)

//     const handleUpdateAlamat = () => {
//         setModal(true)
//         console.log('Hello broh', modal)
//     }

//     const handleSubmitUpdateAlamat = () => {

//         const newAlamat = {
//             label_alamat:  label,
//             nomor_telepon:  nomortelpon,
//             kota_kecamatan: kota,
//             kode_pos: kodepos,
//             alamat: alamat
//         }

//         console.log(newAlamat)

//         dispatch(updateAlamatPengiriman(newAlamat))


//         setModal(false)
//     }

    

//     let renderedSuccess = (
//         <div>

//             {/* <Modal show={modal} >
//                 <Card style={{padding: '20px'}}>
//                     <Card.Header>ALAMAT PENGIRIMAN</Card.Header>
//                     <Card.Body>
//                         <Form>
//                             <Form.Group controlId="formBasicEmail">
//                                 <Form.Label>Label</Form.Label>
//                                 <Form.Control
//                                     value={label}
//                                     onChange={(e) => setLabel(e.target.value)}
//                                     type="text"
//                                 />
//                             </Form.Group>

//                             <Form.Group controlId="formBasicEmail">
//                                 <Form.Label>Nomor Telepon</Form.Label>
//                                 <div style={{display: 'flex'}}>
//                                     <Form.Control
//                                         value={nomortelpon}
//                                         onChange={(e) => setNomortelpon(e.target.value)}
//                                         type="number"
//                                     />
//                                 </div>
//                             </Form.Group>

//                             <Row>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Kota atau Kecamatan</Form.Label>
//                                         <Form.Control
//                                             value={kota}
//                                             onChange={(e) => setKota(e.target.value)}
//                                             type="text"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Kode Pos</Form.Label>
//                                         <div style={{display: 'flex'}}>
//                                             <Form.Control
//                                                 value={kodepos}
//                                                 onChange={(e) => setKodepos(e.target.value)}
//                                                 type="number"
//                                             />
//                                         </div>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             <Form.Group controlId="formBasicEmail">
//                                 <Form.Label>Alamat</Form.Label>
//                                 <Form.Control
//                                     as="textarea"
//                                     rows={2}
//                                     value={alamat}
//                                     onChange={(e) => setAlamat(e.target.value) }
//                                     type="text"
//                                 />
//                             </Form.Group>
//                         </Form>
//                         <hr></hr>
//                         <div style={{display: 'flex', justifyContent: 'flex-end'}}>
//                             <Button style={{marginRight: '20px'}} variant="outline-primary" onClick={()=> setModal(false)}>Cancel</Button>
//                             <Button variant="primary" onClick={()=> handleSubmitUpdateAlamat() }>Update</Button>
//                         </div>
//                     </Card.Body>
//                 </Card>
//             </Modal> */}
            
//             <Card>
//                 <Card.Header><h5  style={{margin: '5px 10px'}}><FaUserAlt  /> {nickname}</h5></Card.Header>
//                 <Card.Body>
//                     <h5>User Detail</h5>
//                     <br></br>
//                     <div style={{display: 'flex'}}>
//                         <div style={{marginRight: '20px'}}>
//                             <p>ID</p>
//                             <p>Nama</p>
//                             <p>Nik</p>
//                             <p>Email</p>
//                             <p>Password</p>
//                             <p>Isi Keranjang</p>
//                         </div>
//                         <div>
//                             <p>{userId}</p>
//                             <p>{name}</p>
//                             <p>{nik}</p>
//                             <p>{email}</p>
//                             <p>{password_secure}</p>
//                             <p>{cart_total | 0} Product</p>
//                         </div>

//                     </div>
//                     {/* {detail_pengiriman && (
//                         <div>
//                             <hr></hr>
//                             <h5>Detail Pengiriman</h5>
//                             <br></br>

//                             <div style={{display: 'flex'}}>
//                                 <div style={{marginRight: '20px'}}>
//                                     <p>Label</p>
//                                     <p>nomor telepon</p>
//                                     <p>kota kecamatan</p>
//                                     <p>kode pos </p>
//                                     <p>Alamat </p>
//                                 </div>
//                                 <div>
//                                     <p>{alamat_pengiriman[0]['label_alamat']}</p>
//                                     <p>{alamat_pengiriman[0]['nomor_telepon']}</p>
//                                     <p>{alamat_pengiriman[0]['kota_kecamatan']}</p>
//                                     <p>{alamat_pengiriman[0]['kode_pos']}</p>
//                                     <p>{alamat_pengiriman[0]['alamat']}</p>
//                                 </div>

//                             </div>

//                         </div>

//                     )}
//                     {detail_pengiriman ? (
//                         <div>
//                             <Button style={{marginRight: '20px'}} onClick={()=> setDetailPengiriman(false)} variant="outline-success">Hide Detail Pengiriman</Button>
//                             <Button onClick={(e) => handleUpdateAlamat(e)} variant="outline-primary">Update</Button>

//                         </div>
//                     ) : <Button onClick={()=> setDetailPengiriman(true)} variant="outline-success">Show Detail Pengiriman</Button>} */}

                    

//                 </Card.Body>
//             </Card>
//         </div>
//     )

//     let renderedLoading = (
//         <p>Loading .  .  .</p>
//     )


//     return (
//         <div>
//             {props.user ? renderedSuccess : renderedLoading}
//         </div>
//     )
// }

// export default UserComponent
