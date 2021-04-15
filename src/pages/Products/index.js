import React, { useEffect, useState } from "react";
import {productService} from '../../services';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link} from "react-router-dom";


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
        console.log(id, "deleted this id")
        productService
            .deleteProduct(id)
            .then((res) => {
                console.log('Hello Bro')
                setInfo('Success Delete')
                setChange(!change)
            })
            .catch(err => {
                console.log(err)
                // setInfo("error")
            })
            .finally(() => {
                console.log('Success fetch api ')
            })
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
                            return (
                                <tr  >
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.author}</td>
                                    <td>{data.price}</td>
                                    <td>{data.quantity}</td>
                                    <td>
                                        
                                        <Button variant="primary" style={{marginRight: '10px', color: 'white'}}><Link style={{color: 'white'}} to={to}  >Detail</Link></Button>
                                        <Button onClick={()=> setInfo("updated")} style={{marginRight: '10px'}} variant="primary">Update</Button>
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