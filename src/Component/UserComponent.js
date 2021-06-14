import React, {useState} from 'react'
import { Card, Button} from 'react-bootstrap'
import { FaUserAlt } from "react-icons/fa";

const UserComponent = (props) => {
    const {_id, email, password, name, nik, cart, alamat_pengiriman} = props.user
    const [detail_pengiriman, setDetailPengiriman] = useState(false)   
    let {label_alamat, nomor_telepon, kota_kecamatan, kode_pos, alamat, provinsi, kabupaten} = alamat_pengiriman
    const [showDetail, setShowDetail] = useState(true)

    let userId = _id.split(0,10)
    let nickname = name.split(" ")[0]
    let cart_total = cart.length | 0
    let password_secure = "Kurang Aman"
    if (password.length > 10){
        password_secure = "Password Secure"
    }

    console.log(alamat_pengiriman)

    return (
        <Card>
            <Card.Header><h5 style={{margin: '5px 10px'}}><FaUserAlt  /> {nickname}</h5></Card.Header>
            <Card.Body>
                <div style={{display: 'flex', justifyContent: 'space-between'}} >
                    <h5 style={{padding: '10px'}}>User Profile</h5>
                    <div>
                        <Button style={{padding:'5px 12px'}} variant="outline-primary" onClick={() => setShowDetail(!showDetail)}>{showDetail ? "Hide" : "Show"}</Button>
                    </div>
                    
                </div>
                <br></br>
                {showDetail && (
                    <div style={{display: 'flex'}}>
                        <div style={{marginRight: '20px'}}>
                            <p>ID</p>
                            <p>Nama</p>
                            <p>Nik</p>
                            <p>Email</p>
                            <p>Password</p>
                            <p>Isi Keranjang</p>
                        </div>
                        <div>
                            <p>{userId}</p>
                            <p>{name}</p>
                            <p>{nik}</p>
                            <p>{email}</p>
                            <p>{password_secure}</p>
                            <p>{cart_total | 0} Product</p>
                        </div>
                    </div>
                )}
                <hr></hr>

                <div style={{display: 'flex', justifyContent: 'space-between'}} >
                    <h5 style={{padding: '10px'}}>Detail Pengiriman</h5>
                    <div>
                        <Button style={{padding:'5px 12px'}} variant="outline-primary" onClick={() => setDetailPengiriman(!detail_pengiriman)}>{detail_pengiriman ? "Hide" : "Show"}</Button>
                    </div>
                    
                </div>

                {detail_pengiriman && (
                    <div>
                        <br></br>

                        <div style={{display: 'flex'}}>
                            <div style={{marginRight: '20px'}}>
                                <p>Label</p>
                                <p>nomor telepon</p>
                                <p>Provinsi</p>
                                <p>Kabupaten</p>
                                <p>kota kecamatan</p>
                                <p>kode pos </p>
                                <p>Alamat </p>
                            </div>
                            <div>
                                <p>{label_alamat ? label_alamat : "Not set"}</p>
                                <p>{nomor_telepon ? nomor_telepon : "Not set"}</p>
                                <p>{provinsi ? provinsi : "Not set"}</p>
                                <p>{kabupaten ? kabupaten : "Not set"}</p>
                                <p>{kota_kecamatan ? kota_kecamatan : "Not set"}</p>
                                <p>{kode_pos ? kode_pos : "Not set"}</p>
                                <p>{alamat ? alamat : "Not set"}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}

export default UserComponent
