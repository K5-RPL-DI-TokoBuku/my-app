import React, { useEffect, useState } from "react";
import {productService} from '../../services';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link} from "react-router-dom";
import { getCookie } from "../../utils/cookie";
const axios = require('axios');


function getTokenAuth() {
    if (getCookie("token") && getCookie("userData")) {
      return JSON.parse(getCookie("token")).value;
    }
    return "";
  }


const Products = () =>{
    const [products, setProducts] = useState('')
    const [change, setChange] = useState(false)

    const [info, setInfo] = useState('')

    const handleHideInfo = () => {
        console.log("Brooo")
        setInfo(false)
      }

    useEffect(()=>{
        productService.getProducts().then((res) => {setProducts(res.products)}).catch(err => console.log(err)).finally(()=> console.log('Fetc api'))
    }, [change])



    const handleDelete = (id) => {
        const my_token = getCookie('token')
        const url = `http://localhost:3001/product/${id}`

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
        // console.log(getCookie('token'))
        if (my_token) {

            console.log(my_token)
            // axios.get(url, {headers: {'token': my_token }}).then(res => console.log(res))
            axios.delete(url, {headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY' }}).then(res => {
                setChange(!change)
                setChange(!change)
                console.log(res.message)
            })

            // axios
            // .delete(url, {headers: {
            //     'token': my_token
            // }})
            // .then((res) => {
            //             console.log('Hello Bro')
            //             setInfo('Success Delete')
            //             setChange(!change)
            //         })
            // .catch(err => console.log(err))
            // .finally(()=> console.log('Finish klas'))
            // productService
            //     .deleteProduct(id, my_token)
            //     .then((res) => {
            //         console.log('Hello Bro')
            //         setInfo('Success Delete')
            //         setChange(!change)
            //     })
            //     .catch(err => {
            //         console.log(err)
            //         // setInfo("error")
            //     })
            //     .finally(() => {
            //         console.log('Success fetch api ')
            //     })
        } else {
            console.log('Fuck')
        }
    }

    return(
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' , marginTop: '40px'}}>
                <div
                    style={{
                    padding: '0',
                    margin: '0',
                    backgroundColor: 'white',
                    }}
                >
                    <div style={{margin:"20px auto"}} >
                        <Link style={{backgroundColor: 'blue', padding: '10px 8px', color: 'white', borderRadius: '5px'}} to="/add-book">Tambah Buku</Link>
                    </div>

                    <div>
                        {info && (
                            <div style={{cursor: 'pointer'}} onClick={handleHideInfo}>
                                <Alert variant={info === "error" ? "danger" : "success" }>
                                    {info}
                                </Alert>
                            </div>
                        )}
                    </div>
                    <Table
                    style={{ overflow: 'scroll' }}
                    striped
                    hover
                    className="text-center"
                    >
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Judul Buku</th>
                        <th>Penulis</th>
                        <th>Harga</th>
                        <th>Stok Barang</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((data, index) => {
                            const to =`/products/${data._id}`
                            const toUpdate =`/update-book/${data._id}`

                            return (
                                <tr  >
                                    <td>{index + 1}</td>
                                    <td>{data.name.slice(0,30)}</td>
                                    <td>{data.author}</td>
                                    <td>{data.price}</td>
                                    <td>{data.quantity}</td>
                                    <td>
                                        
                                        <Button variant="primary" style={{marginRight: '10px', color: 'white'}}><Link style={{color: 'white'}} to={to}  >Detail</Link></Button>
                                        <Button style={{marginRight: '10px'}} variant="primary"><Link style={{color: 'white'}} to={toUpdate}  >Update</Link></Button>
                                        <Button onClick={() => handleDelete(data._id)} variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )

} 

export default Products;