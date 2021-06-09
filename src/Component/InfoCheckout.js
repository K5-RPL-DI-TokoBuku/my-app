import React from 'react'
import { FaPhoneAlt, FaRegMap, FaRegHospital} from "react-icons/fa";


const InfoCheckout = (props) => {

    const {user} = props 

    const {alamat_pengiriman, name, email } = user
    const {nomor_telepon, kota_kecamatan, kode_pos, alamat} = alamat_pengiriman

    return (
        <div>
            <h5 style={{padding: '10px'}}>InformasiPembeli</h5>
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex', flexDirection: 'column',   justifyContent: 'space-between', marginRight: '20px', padding: '10px'}}>
                    <FaRegHospital />
                    <FaRegMap />
                    <FaPhoneAlt />
                </div>
                <div style={{ justifyContent: 'space-between'}}>
                    <p style={{ margin: "5px 0"}}>{name}</p>
                    <p style={{ margin: "5px 0"}}>{email}</p>
                    <p style={{ margin: "5px 0"}}>+62 {nomor_telepon}</p>
                </div>
            </div>
            <hr></hr>
            <h5 style={{padding: '10px'}}>Alamat Pengiriman</h5>
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
            </div>
            


        </div>
    )
}

export default InfoCheckout
