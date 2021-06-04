import React, { useEffect, useState } from "react";
import {productService} from '../../services';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import { Link} from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { convertToDuit } from '../../utils/functions';
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
        setInfo(false)
    }

    useEffect(()=>{
        productService
            .getProducts()
            .then((res) => {setProducts(res.products)})
            .catch(err => console.log(err))
            .finally(()=> console.log('Fetc api'))
    }, [change])

    const handleDelete = (id) => {
        const my_token = getCookie('token')
        const url = `http://localhost:3001/product/${id}`
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY'

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

        if (my_token) {
            axios
                .delete(url, {headers: {token}})
                .then(res => {
                    setChange(!change)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(()=>{
                    console.log('Fetch To delete buku!')
                })
        } else {
            console.log('Fuck')
        }
    }

    return(
        <Container>
            {info && (
                <div style={{cursor: 'pointer'}} onClick={handleHideInfo}>
                    <Alert variant={info === "error" ? "danger" : "success" }>
                        {info}
                    </Alert>
                </div>
             )}

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px'}}>
                <h4>Table Data Buku</h4>
                <Button variant="primary">
                    <Link to="/add-book" style={{color: 'white'}}>
                        + ADD BOOK 
                    </Link>
                </Button>
            </div>

            <Table style={{ overflow: 'scroll' }} striped hover>
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
                    {products && products.map((product, index) => {
                        let {_id, name, author, price, quantity} = product
                        const to_detail =`/products/${_id}`
                        const to_update =`/update-book/${_id}`
                        const new_index = index+1

                        if (name.length > 30){
                            name = `${name.slice(0,30)} ...`
                        }

                        let str_price = `Rp. ${convertToDuit(price | 0)}`
                        
                        return (
                            <tr>
                                <td>{new_index}</td>
                                <td>
                                    <Link to={to_detail} style={{color: 'inherit'}}>{name}</Link>
                                </td>
                                <td>{author}</td>
                                <td>{str_price}</td>
                                <td>{quantity} pcs</td>
                                <td style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <Button variant="outline-primary"><Link to={to_update} style={{color: 'blue'}}>Update</Link></Button>
                                    <Button variant="outline-danger" onClick={() => handleDelete(_id)}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
} 

export default Products;
